---
title: Ubuntu 部署
---

本页面描述如何将[steedos-project-saas](https://github.com/steedos/steedos-project-saas)项目部署至远程开发环境的过程。

部署完成后可在浏览器中打开 vs code 编辑器进行远程开发。

## 搭建运行环境

需要安装 docker、docker-compose、git、node-v12.x、pm2、code-server

### 系统版本

查看 ubuntu 版本：

```bash
steedos@ubuntu:/home/steedos# cat /proc/version
Linux version 4.15.0-88-generic (buildd@lgw01-amd64-036) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #88-Ubuntu SMP Tue Feb 11 20:11:34 UTC 2020
```

> 系统版本没有特别要求，这里只提供参考

### 安装 docker

[官方文档](https://docs.docker.com/engine/install/ubuntu/)

### 安装 docker-compose

[官方文档](https://docs.docker.com/compose/install/)

### 安装 git

首先，确认你的系统是否已安装 git，可以通过 git 指令进行查看，如果没有，在命令行模式下输入命令进行安装：

```bash
sudo apt-get install git
```

### 安装 node-v12.x

添加 node 源：

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

安装 node：

```bash
sudo apt-get install -y nodejs
```

检测是否安装成功：

```bash
steedos@ubuntu:~$ node -v
v12.17.0
```

> 打印出版本号即表示 node 安装成功

### 安装 pm2

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

安装[pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)：

```bash
sudo npm install pm2 -g
```

### 安装 code-server

安装 code-server 的[最新版本](https://github.com/cdr/code-server)：

```bash
curl -sSOL https://github.com/cdr/code-server/releases/download/v3.3.1/code-server_3.3.1_amd64.deb
sudo dpkg -i code-server_3.3.1_amd64.deb
systemctl --user enable --now code-server
# Now code-server is running at http://127.0.0.1:8080
# Your password is in ~/.config/code-server/config.yaml
```

修改配置文件，bind-addr 为`0.0.0.0`，密码也可调整：

```bash
vim ~/.config/code-server/config.yaml

bind-addr: 0.0.0.0:8080
auth: password
password: 307f71d53ec2fd0995499cf4
cert: false
# 保存后重启服务
systemctl --user restart code-server
```

> 比如服务部署在 192.168.0.105，那么浏览器访问http://192.168.0.108:8080 输入密码即可在浏览器中的 vs code 进行远程开发

## 启动服务

### 启动数据库

下载数据库镜像：

```bash
docker pull mongo:3.4.1
```

配置启动文件 docker-compose.yml：

```yaml
mongo:
  image: mongo:3.4.1
  ports:
    - "27017:27017"
  command: mongod --profile=1 --slowms=500 --replSet rs0
  volumes:
    - /srv/mongodb/db:/data/db
    - /srv/mongodb/backup:/data/backup
  restart: always

mongo-init-replica:
  image: mongo:3.4.1
  command: 'mongo mongo/steedos --eval "rs.initiate({ _id: ''rs0'', members: [ { _id: 0, host: ''127.0.0.1:27017'' } ]})"'
  links:
    - mongo:mongo
```

启动数据库服务

```bash
sudo docker-compose up -d
```

### 克隆并启动项目

例如克隆华炎 OA，项目源码位于 https://github.com/steedos/steedos-project-saas

```bash
cd /srv/
git clone https://github.com/steedos/steedos-project-saas
cd steedos-project-saas
yarn
pm2 start server.js
```

> 重启服务：`pm2 restart server.js`

## 注意事项

启动 code-server 服务后关闭了终端，服务访问不了，执行以下命令后重启服务器：

```bash
sudo loginctl enable-linger username
```

> 来源： https://github.com/cdr/code-server/issues/1673
