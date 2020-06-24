---
title: Docker 部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)为例，指导你如何将项目编译成镜像发布至[docker hub](https://hub.docker.com/)并使用 [docker-compose](https://docs.docker.com/compose/install/) 启动项目。

## 准备工作

注册[docker](https://www.docker.com/)账号，如：exampleUsername

安装 docker[命令行工具](https://docs.docker.com/get-docker/)， 根据操作系统选择安装

终端登录 docker 账号：

```bash
docker login
```

安装[docker-compose](https://docs.docker.com/compose/install/)

## 克隆项目

请访问 https://github.com/steedos/steedos-project-oa 先在项目主页右上角点 [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改：

![clone项目](/assets/windows/clone项目.png)

## 发布过程

进入本地 steedos-project-oa 项目目录：

```bash
cd steedos-project-oa
```

浏览器访问[docker hub](https://hub.docker.com/)，并使用刚刚注册的账号登录，点击`Create Repository`按钮：

![新建栈](/assets/docker/新建栈.png)

新建 Repository 名称如：steedos-project-oa

编译镜像：

```bash
docker build -t exampleUsername@steedos-project-oa:tagname
```

> tagname 可以是 1.0、2.0 等自定义可明确表示版本的字符，build 命令[文档](https://docs.docker.com/engine/reference/commandline/build/)

将镜像推送至 docker hub：

```bash
docker push exampleUsername@steedos-project-oa:tagname
```

推送完成之后可在[docker hub](https://hub.docker.com/)页面看到镜像

> 可使用`docker pull exampleUsername@steedos-project-oa:tagname`拉取镜像到本地

## 使用 docker-compose 启动服务

### 启动数据库服务

使用 mongodb [官方镜像](https://hub.docker.com/_/mongo)启动数据库服务，例如：

```bash
docker run --name mongo -d mongo:4.2
```

### 启动应用服务

进入`steedos-project-oa`项目目录，配置好[.env.local](https://www.steedos.com/developer/env)文件启动应用服务：

```bash
docker-compose up -d
```

> 配置.env.local 的目的是服务于[steedos-config.yml](https://www.steedos.com/developer/steedos_config)
