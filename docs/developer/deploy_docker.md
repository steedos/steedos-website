---
title: Docker 部署
---

本页面描述如何将[steedos-project-oa](https://github.com/steedos/steedos-project-oa)项目编译成镜像发布至[docker hub](https://hub.docker.com/)并使用 docker-compose 启动的过程。

## 准备工作

注册[docker](https://www.docker.com/)账号，如：exampleUsername

安装 docker[命令行工具](https://docs.docker.com/get-docker/)， 根据操作系统选择安装

终端登录 docker 账号：

```bash
docker login
```

## 克隆项目

访问项目主页。例如：https://github.com/steedos/steedos-project-oa 。

> 对于华炎提供的项目模版，如需个性化定制，请在项目主页右上角点[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)，然后将Fork到个人账户下的项目克隆到本地，以便提交修改。

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

进入`steedos-project-oa`项目目录下的 docker/mongo 目录启动数据库服务：

```bash
cd steedos-project-oa/docker/mongo
docker-compose up -d
```

> mongodb 为[官方镜像](https://hub.docker.com/_/mongo)本项目支持 3.6 及以上版本，包括最新的 4.2 版本

### 启动应用服务

安装[docker-compose](https://docs.docker.com/compose/install/)

安装完成后，进入`steedos-project-oa`项目目录，配置好[.env.local](https://developer.steedos.com/developer/env)文件启动应用服务：

```bash
docker-compose up -d
```

> 配置.env.local 的目的是服务于[steedos-config.yml](https://developer.steedos.com/developer/steedos_config)

### 启动代理服务

进入`steedos-project-oa`项目目录下的 docker/nginx 目录启动代理服务：

```bash
cd steedos-project-oa/docker/nginx
docker-compose up -d
```

> 配置文件为 docker.conf
