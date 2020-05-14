---
title: 使用docker运行本项目
---

本页面描述如何将[steedos-project-saas](https://github.com/steedos/steedos-project-saas)项目编译成镜像发布至[docker hub](https://hub.docker.com/)并使用docker-compose启动的过程。

## 准备工作

注册[docker](https://www.docker.com/)账号，如：exampleUsername

安装docker[命令行工具](https://docs.docker.com/get-docker/)， 根据操作系统选择安装

终端登录docker账号：

```bash
docker login
```

fork[steedos-project-saas](https://github.com/steedos/steedos-project-saas)，并clone至本地

## 发布过程

进入本地steedos-project-saas项目目录：

```bash
cd steedos-project-saas
```

浏览器访问[docker hub](https://hub.docker.com/)，并使用刚刚注册的账号登录，点击`Create Repository`按钮：

![新建栈](/assets/docker/新建栈.png)

新建Repository名称如：steedos-project-saas

编译镜像：

```bash
docker build -t exampleUsername@steedos-project-saas:tagname
```

> tagname可以是1.0、2.0等自定义可明确表示版本的字符，build命令[文档](https://docs.docker.com/engine/reference/commandline/build/)

将镜像推送至docker hub：

```bash
docker push exampleUsername@steedos-project-saas:tagname
```

推送完成之后可在[docker hub](https://hub.docker.com/)页面看到镜像

> 可使用`docker pull exampleUsername@steedos-project-saas:tagname`拉取镜像到本地

## 使用docker-compose启动服务

### 启动数据库服务

进入`steedos-project-saas`项目目录下的docker/mongo目录启动数据库服务：

```bash
cd steedos-project-saas/docker/mongo
docker-compose up -d
```

> mongodb为[官方镜像](https://hub.docker.com/_/mongo)本项目支持3.6及以上版本，包括最新的4.2版本

### 启动应用服务

安装[docker-compose](https://docs.docker.com/compose/install/)

安装完成后，进入`steedos-project-saas`项目目录，配置好[.env.local](https://developer.steedos.com/developer/env)文件启动应用服务：

```bash
docker-compose up -d
```

> 配置.env.local的目的是服务于[steedos-config.yml](https://developer.steedos.com/developer/steedos_config)

### 启动代理服务

进入`steedos-project-saas`项目目录下的docker/nginx目录启动代理服务：

```bash
cd steedos-project-saas/docker/nginx
docker-compose up -d
```

> 配置文件为docker.conf