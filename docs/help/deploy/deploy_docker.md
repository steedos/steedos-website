---
title: Docker 安装
---

本教程以 [steedos-project-template](https://github.com/steedos/steedos-project-template/tree/2.0)为例，指导你使用 [docker-compose](https://docs.docker.com/compose/install/) 启动华炎魔方2.0项目。

## 使用 Docker Compose 启动服务

确保本地已安装[docker](https://docs.docker.com/get-docker/)和[docker-compose](https://docs.docker.com/compose/install/)

下载示例文件[docker-compose.yml](https://github.com/steedos/steedos-project-template/blob/2.0/docker-compose.yml)(唯一需要的文件)到本地并编辑:

编辑 environment 中的 ROOT_URL 以匹配您的域名或 IP 地址，其他地址默认配置就行

```bash
environment:
    - PORT=3000
    - ROOT_URL=http://localhost:3000
    - MONGO_URL=mongodb://mongo:27017/steedos
    - MONGO_OPLOG_URL=mongodb://mongo:27017/local
    - STEEDOS_CFS_STORE=local
    - STEEDOS_STORAGE_DIR=/app/storage
    - TRANSPORTER=redis://redis:6379
    - CACHER=redis://redis/1

```

到刚下载的`docker-compose.yml`文件所在目录启动服务：

```bash
docker-compose up -d
```

执行docker ps查看服务运行状态，没有服务重启时，则说明服务都运行正常

```bash
docker ps
```

停止服务：

```bash
docker-compose stop
```

停止并删除服务：

```bash
docker-compose down
```

## docker-compose.yml 文件解读

```bash
steedos:
    image: steedos/steedos-project-template:2.0.33
    restart: always
    ports:
      - "3000:3000"
    volumes:
      - "./docker-volumes/steedos/storage:/app/storage"
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://mongo:27017/steedos
      - MONGO_OPLOG_URL=mongodb://mongo:27017/local
      - STEEDOS_CFS_STORE=local
      - STEEDOS_STORAGE_DIR=/app/storage
      - TRANSPORTER=redis://redis:6379
      - CACHER=redis://redis/1
    depends_on:
      - mongo
      - redis
```
- image: 当前使用的镜像版本，当服务升级发包后，可以通过修改这里的版本号更新
- restart: 配置成always后，当docker服务重启后，服务会自动重启，避免服务器断电重启后造成服务无法访问
- ports: 端口映射，左侧指的当前服务器的端口，右侧指该container的服务端口，一般和environment中PORT的值一致，不建议修改
- volumes: 文件映射，左侧指当前服务器的文件位置，右侧指container内的文件位置，由于目前附件存储本地，需要将container中的附件存储路径隐射到服务器本地，这样重启服务后，附件不会丢失，其他环境变量可根据需要参考[steedos-config.yml](/help/deploy/steedos-config)配置调整
- environment: 环境变量，应用服务依赖的一些基本变量，例如mongo的地址、redis地址，基于docker-compose部署的项目按默认配置就行，可以修改ROOT_URL为IP或者域名，以便于移动端访问
- depends_on: 依赖服务，当前指定了mongo和redis，配置环境变量时可以通过mongo和redis来代替其访问地址

## 常见问题解答

### 1.docker 镜像下载缓慢

由于镜像存在国外，可配置阿里云[官方镜像加速](https://help.aliyun.com/document_detail/60750.html)

### 2.windows docker部署的mongodb服务一直重启

查看日志报错: Reason: 1: Operation not permitted

原因：Windows上默认Docker设置使用VirtualBox VM来托管Docker守护程序。不幸的是，VirtualBox用于在主机系统和Docker容器之间共享文件夹的机制与MongoDB使用的内存映射文件不兼容（请参阅vbox bug，docs.mongodb.org和相关的jira.mongodb.org错误）。这意味着无法运行映射到主机的数据目录的MongoDB容器。

解决方案：修改配置文件中数据库文件的映射方式为挂载volumes虚拟磁盘
```bash
services:
  steedos:
  ...
  
  redis:
  ...

  mongo:
    image: mongo:4.2
    restart: always
    volumes:
      - mongodb:/data/db # 使用虚拟磁盘mongodb
    command: mongod --oplogSize 128 --profile=1 --slowms=500 --replSet rs0 --bind_ip_all
    ports:
      - "27018:27017"

# 挂载虚拟磁盘
volumes:
  mongodb:
```

### 3.MongoDB添加账户验证

docker-compose中默认是以非账户验证的方式起的mongo数据库，当然这是一种不安全的服务模式，添加账户验证需要修改配置文件

运行docker ps查看mongo服务的containerId

```bash
docker ps
```

连进mongo服务

```bash
# 假设containerID为"83981540efb4"
docker exec -it 83981540efb4 bash
mongo
```

创建管理员用户和普通用户

```bash
use admin;
db.createUser({user: "adminUsername", pwd: "adminPassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } );
use steedos;
db.createUser({user: "userUsername", pwd: "userPassword", roles: [ { role: "readWrite", db: "yourdbname" }, { role: "read", db: "local"} ] } );
```

创建好了后，查看已创建的用户

```bash
use admin;
db.system.users.find().pretty();
```

数据库用户创建好后，需要修改docker-compose.yml文件

```bash
steedos:
    image: steedos/steedos-project-template:2.0.33
    restart: always
    ports:
      - "3000:3000"
    volumes:
      - "./docker-volumes/steedos/storage:/app/storage"
    environment:
      - PORT=3000
      - ROOT_URL=http://localhost:3000
      - MONGO_URL=mongodb://userUsername:userPassword@mongo:27017/steedos?replicaSet=rs0 #添加普通用户和密码
      - MONGO_OPLOG_URL=mongodb://userUsername:userPassword@mongo:27017/local?replicaSet=rs0&authSource=steedos #添加普通用户和密码
      - STEEDOS_CFS_STORE=local
...

  mongo:
    image: mongo:4.2
    restart: always
    volumes:
      - "./docker-volumes/mongo/data/db:/data/db"
    command: mongod --auth --oplogSize 128 --profile=1 --slowms=500 --replSet rs0 --bind_ip_all #添加 --auth
    ports:
      - "27018:27017"
```

删掉服务并重启

```bash
docker-compose down
docker-compose up -d
```

### 4.如何查看服务日志

首先获取服务containerId

```bash
docker ps
```

根据服务id查询日志

```bash
# containerId 替换成查询到的id
docker logs -t containerId
```

## 了解更多

- [视频](https://www.steedos.com/videos/)
- [安装部署](https://www.steedos.com/help/deploy/)
- [设置与维护华炎魔方](https://www.steedos.com/help/admin)
- [开发文档](https://www.steedos.com/developer)
- [华炎魔方平台源码](https://github.com/steedos/steedos-platform/)