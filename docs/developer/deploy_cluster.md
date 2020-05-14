---
title: 集群部署
---

本页面描述如何将[steedos-project-saas](https://github.com/steedos/steedos-project-saas)项目使用集群方式部署的过程。涉及代理服务器（运行nginx）、应用服务器（108，208启动应用实例）、数据库服务器（216，217，218）

## 代理服务nginx
- 在nginx配置文件中做如下配置，如：
```nginx
gzip on;
gzip_min_length  1k;
gzip_comp_level 9;
gzip_buffers     4 16k;
gzip_types       text/plain application/javascript application/x-javascript text/css application/xml application/json;
gzip_http_version 1.0;
client_max_body_size 100M;

proxy_buffering           on;
proxy_buffer_size         512k;
proxy_buffers             8 512k;
proxy_max_temp_file_size  1024m;

upstream creatorws {
    ip_hash;
    # 108
    server 192.168.0.108:5040;
    server 192.168.0.108:5041;
    server 192.168.0.108:5042;
    server 192.168.0.108:5043;
    server 192.168.0.108:5044;
    # 208
    server 192.168.0.208:5040;
    server 192.168.0.208:5041;
    server 192.168.0.208:5042;
    server 192.168.0.208:5043;
    server 192.168.0.208:5044;
}

# app server

server {
    listen      80;
    server_name 192.168.0.108;

    location / {
        proxy_pass http://creatorws/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /sockjs/ {
        proxy_pass http://creatorws/sockjs/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /cordova.js {
        return 404;
    }

}
```
> upstream `creatorws`配置了10个供访问的服务实例，其中5个位于108服务器，5个位于208服务器，用于负载均衡

## 应用实例集群
- 在108和208服务器上进入steedos-project-saas项目目录，配置.env.local相关环境变量，如：
```env
MONGO_URL=mongodb://username:password@192.1.1.216:27017,192.1.1.217:27017,192.1.1.218:27017/yourdbname?replicaSet=steedos
PORT=5040
ROOT_URL=https://cn.steedos.com/
MONGO_OPLOG_URL=mongodb://127.0.0.1:27017/local
MULTIPLE_INSTANCES_COLLECTION_NAME=workflow_instances
ENV_CFS_STORE=local
ENV_STORAGE_DIR=./storage
ENV_WORKFLOW_URL=https://cn.steedos.com/
ENV_CREATOR_URL=https://cn.steedos.com/
```
- 使用[docker-compose](https://docs.docker.com/compose/install/)启动应用
```bash
docker-compose up -d
```

## mongodb数据库集群
- 使用mongodb的[Replication](https://docs.mongodb.com/manual/replication/)模式搭建集群
- 这里使用192.168.0.216服务器作为Primary，217作为Secondary1，218作为Secondary2
- 分别在数据句服务器上[安装](https://docs.mongodb.com/manual/installation/)好mongodb之后，进行初始化：
```bash
mongo yourdbname
rs.initiate({ _id: 'steedos', members: [ { _id: 0, host: 'PrimaryIP:27017', priority: 2 }, { _id: 1, host: 'Secondary1IP:27017', priority: 1 }, { _id: 2, host: 'Secondary2IP:27017', priority: 1 } ]}) 
```
- 添加用户验证， 在Primary数据库服务器中添加账户验证
```bash
mongo
use admin
db.createUser({user: "adminUsername", pwd: "adminPassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } )
use steedos
db.createUser({user: "userUsername", pwd: "userPassword", roles: [ { role: " readWrite", db: "yourdbname" }, { role: " read", db: "local"} ] } )
```

## CentOS7搭建NTP服务器
- 由于代理、应用和数据库部署在不同的服务器的原因，为防止由于服务器时间不一致问题，故需要搭建NTP服务器统一各服务器时间
- 以服务器63、21为例，21作为时间服务器，63的时间将从21同步
### 在21安装NTP服务
```bash
yum install ntp -y
```
- 修改配置文件
```bash
vim /etc/ntp.conf
# 把下面四行注释掉
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
# 然后在下面添加一行
server 127.127.1.0 iburst
```
- 启动ntp服务
```bash
systemctl start ntpd
```
- 查看服务状态
```bash
systemctl status ntpd
```
- 查看是否同步
```bash
ntpq -p
```
- 设置防火墙，打开udp123端口
```bash
firewall-cmd --permanent --add-port=123/udp
```
- 设置开机启动
```bash
systemctl enable ntpd
```
### 63安装NTP服务
- 安装NTP服务步骤与在21安装一样，只是配置需要调整
```bash
vim /etc/ntp.conf
# 把下面四行注释掉
server 0.centos.pool.ntp.org iburst
server 1.centos.pool.ntp.org iburst
server 2.centos.pool.ntp.org iburst
server 3.centos.pool.ntp.org iburst
# 然后在下面添加两行
server 192.168.0.21
# 允许21时间服务器主动修改本机的时间
restrict 192.168.0.21 nomodify notrap noquery
```
- 与本地ntpd Server同步一下
```bash
ntpdate -u 192.168.0.63
```
- 启动ntp服务
```bash
systemctl start ntpd
```
- 查看是否同步
```bash
[root@localhost ~]# ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
 192.168.0.21    LOCAL(0)         6 u   35   64    1    0.285    0.033   0.000
```
- 设置开机启动
```bash
systemctl enable ntpd
```

