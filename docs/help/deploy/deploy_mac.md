---
title: Mac 安装
---

本教程以 [steedos-project-template](https://github.com/steedos/steedos-project-template)为例，指导你如何在 Mac 系统中部署和运行基于华炎魔方开发的项目。

部署完成后可在 Mac 环境下开发。

## 搭建开发环境

### 安装开发工具

[Github 客户端](https://desktop.github.com/)

[Mongodb 数据库图形化管理工具 Robo 3T](https://robomongo.org/download)

[代码编辑工具 Visual Studio Code](https://code.visualstudio.com/)

### 安装运行环境

下载[node-v12.19.1](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)并安装：

安装完成之后打开终端安装 [yarn](https://yarnpkg.com/)：

```bash
sudo npm install -g yarn
```

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

## 启动服务

### 克隆项目

请访问 https://github.com/steedos/steedos-project-template 先在项目主页右上角点 [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改。

### 启动应用

首先使用 Visual Studio Code 打开你本地的项目，并在 Visual Studio Code 的**终端(Terminal)**中安装依赖包：

```bash
yarn install
```

然后启动服务：

```bash
yarn start
```

> 也可按 F5 使用 debug 模式启动项目

终端会打印如下信息，待服务启动完成后，会自动使用默认浏览器打开 ROOT_URL：

```
*******************************************************************
*
*  Initialize Steedos Server ...
*
*  VERSION: 1.23.20
*  PORT: 3000
*  ROOT_URL: http://localhost:3000
*  MONGO_URL: mongodb://127.0.0.1:27018/steedos?replicaSet=rsSteedos
*  PROJECT_DIR: /Users/user/Documents/GitHub/steedos-project-template
*
*******************************************************************
```

## 数据库

华炎魔方使用 MongoDB 4.2+ 数据库，项目启动时会自动下载并安装 MongoDB 到本项目的 bin/mongodb 下。下载完成后自动启动数据库。数据库保存于 db 文件夹中。

> 如果你自己部署了 MongoDB 服务器并以副本集模式启动，可以通过配置 MONGO_URL 环境变量，指定 MongoDB 数据库连接。

## 附件

华炎魔方中上传的附件默认保存在本项目的 storage 文件夹中。也可以通过修改 steedos-config 更改保存路径，或是保存到阿里云或 S3 存储中。

## 参数设置

有一些初始参数是必须设置的，具体请参考 [参数设置](/help/deploy/steedos-config)

## 了解更多

- [视频](https://www.steedos.com/videos/)
- [安装部署](https://www.steedos.com/help/deploy/)
- [设置与维护华炎魔方](https://www.steedos.com/help/admin)
- [开发文档](https://www.steedos.com/developer)
- [华炎魔方平台源码](https://github.com/steedos/steedos-platform/)
