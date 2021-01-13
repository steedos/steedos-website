---
title: Docker 部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa/tree/docker)为例，指导你使用 [docker-compose](https://docs.docker.com/compose/install/) 启动项目。

## 使用 Docker Compose 启动服务

确保本地已安装[docker](https://docs.docker.com/get-docker/)和[docker-compose](https://docs.docker.com/compose/install/)

下载示例文件[docker-compose.yml](https://github.com/steedos/steedos-project-oa/blob/docker/docker-compose.yml)(唯一需要的文件)到本地并编辑:

- 编辑 environment 中的 ROOT_URL 以匹配您的域名或 IP 地址

> 配置 environment 的目的是服务于[steedos-config.yml](https://www.steedos.com/developer/steedos_config)

到刚下载的`docker-compose.yml`文件所在目录启动服务：

```bash
docker-compose up -d
```

> 这将会启动一个 mongodb 数据库服务和一个 node 应用服务，启动好之后可使用配置的 ROOT_URL 地址访问服务

停止服务：

```bash
docker-compose stop
```

## docker-compose.yml 文件解读

系统中上传的附件、头像等文件在 `./docker-volumes/steedos/storage` 下，数据库文件在 `./docker-volumes/mongo/data/db` 下，这样服务停止后再次启动数据不会丢失

environment 中的环境变量可根据需要参考[steedos-config.yml](https://www.steedos.com/developer/steedos_config)配置调整
