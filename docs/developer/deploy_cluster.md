---
title: 集群部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa) 为例，指导你如何在 centos 中使用集群方式部署项目。

## 服务器分配

- 代理服务器：运行 nginx，用于代理转发请求给应用
- 应用服务器：108，208 启动应用实例，用于处理业务逻辑
- 数据库服务器：216，217，218，用于存储数据

## 代理服务 nginx

在 nginx 配置文件中做如下配置，如：

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

> upstream `creatorws`配置了 10 个供访问的服务实例，其中 5 个位于 108 服务器，5 个位于 208 服务器，用于负载均衡

## 应用实例集群

在 108 和 208 服务器上进入 steedos-project-oa 项目目录，配置.env.local 相关环境变量，如：

```env
MONGO_URL=mongodb://username:password@192.1.1.216:27017,192.1.1.217:27017,192.1.1.218:27017/yourdbname?replicaSet=steedos
PORT=5040
ROOT_URL=https://cn.steedos.com/
MONGO_OPLOG_URL=mongodb://127.0.0.1:27017/local
MULTIPLE_INSTANCES_COLLECTION_NAME=workflow_instances
STEEDOS_CFS_STORE=local
STEEDOS_STORAGE_DIR=./storage
STEEDOS_WORKFLOW_URL=https://cn.steedos.com/
STEEDOS_CREATOR_URL=https://cn.steedos.com/
```

使用[docker-compose](https://docs.docker.com/compose/install/)启动应用：

```bash
docker-compose up -d
```

## mongodb 数据库集群

使用 mongodb 的[Replication](https://docs.mongodb.com/manual/replication/)模式搭建集群

这里使用 192.168.0.216 服务器作为 Primary，217 作为 Secondary1，218 作为 Secondary2

分别在数据库服务器上[安装](https://docs.mongodb.com/manual/installation/)好 mongodb 之后，进行初始化：

```bash
mongo yourdbname
rs.initiate({ _id: 'steedos', members: [ { _id: 0, host: 'PrimaryIP:27017', priority: 2 }, { _id: 1, host: 'Secondary1IP:27017', priority: 1 }, { _id: 2, host: 'Secondary2IP:27017', priority: 1 } ]})
```

添加用户验证， 在 Primary 数据库服务器中添加账户验证：

```bash
mongo
use admin
db.createUser({user: "adminUsername", pwd: "adminPassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } )
use steedos
db.createUser({user: "userUsername", pwd: "userPassword", roles: [ { role: " readWrite", db: "yourdbname" }, { role: " read", db: "local"} ] } )
```

## CentOS7 搭建 NTP 服务器

由于代理、应用和数据库部署在不同的服务器的原因，为防止服务器时间不一致问题，需要搭建 NTP 服务器统一各服务器时间

以服务器 63、21 为例，21 作为时间服务器，63 的时间将从 21 同步

### 在 21 安装 NTP 服务

安装 NTP 服务：

```bash
yum install ntp -y
```

修改配置文件：

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

启动 ntp 服务：

```bash
systemctl start ntpd
```

查看服务状态：

```bash
systemctl status ntpd
```

查看是否同步：

```bash
ntpq -p
```

设置防火墙，打开 udp123 端口：

```bash
firewall-cmd --permanent --add-port=123/udp
```

设置开机启动：

```bash
systemctl enable ntpd
```

### 在 63 安装 NTP 服务

安装 NTP 服务步骤与在 21 安装一样，只是配置需要调整：

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

与本地 ntpd Server 同步一下：

```bash
ntpdate -u 192.168.0.63
```

启动 ntp 服务：

```bash
systemctl start ntpd
```

查看是否同步：

```bash
[root@localhost ~]# ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
 192.168.0.21    LOCAL(0)         6 u   35   64    1    0.285    0.033   0.000
```

设置开机启动：

```bash
systemctl enable ntpd
```
