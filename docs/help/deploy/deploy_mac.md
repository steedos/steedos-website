---
title: Mac 部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)为例，指导你如何在 Mac 系统中部署和运行基于华炎魔方开发的项目。

部署完成后可在 Mac 环境下开发。

## 搭建运行环境

需要安装 [Github Desktop](https://desktop.github.com/)、[node-v12.16.3](https://nodejs.org/dist/latest-v12.x/node-v12.19.0.pkg)、[mongodb-v4.2](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)、[Robo 3T](https://robomongo.org/)、[Visual Studio Code](https://code.visualstudio.com/)、[brew](https://brew.sh/)

### 安装 Github Desktop

安装[Github 桌面客户端](https://desktop.github.com/)

### 安装 node-v12.16.3

访问 nodejs[官网](https://nodejs.org/en/)下载并安装 node：

![安装node](/assets/windows/安装node.png)

安装完成之后打开终端安装 [yarn](https://yarnpkg.com/)：

```bash
npm install -g yarn
```

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

### 安装 mongodb-v4.2

根据官方向导，安装最新的[mongodb4.2](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)，数据库服务默认开机启动

### 使用集群模式启动数据库

编辑配置文件:

```bash
vim /usr/local/etc/mongod.conf
# 找到replication部分，去掉#并添加一行配置
replication:
#以下配置必须缩进两个空格
  replSetName: rsSteedos
```

保存后重启数据库才会生效：

```bash
brew services restart mongodb-community@4.2
```

初始化数据库：

```bash
# 首先进入mongo控制台
mongo
# 执行初始化函数
rs.initiate()
# 查看配置
rs.conf()
# 查看集群状态，确保members里有一个primary，则表示配置成功
rs.status()
```

### 安装 Robo 3T

安装 mongodb 数据库图形化管理工具[Robo 3T](https://robomongo.org/)

### 安装 Visual Studio Code

安装代码编辑工具[Visual Studio Code](https://code.visualstudio.com/)

## 启动服务

### 启动数据库

数据库服务默认开机启动，可通过 brew 命令管理：

```bash
# 停止
brew services stop mongodb-community@4.2
# 启动
brew services start mongodb-community@4.2
# 重启
brew services restart mongodb-community@4.2
```

### 克隆项目

请访问 https://github.com/steedos/steedos-project-oa 先在项目主页右上角点 [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改：

![clone项目](/assets/windows/clone项目.png)

### 启动应用

打开 Github Desktop 使用 Visual Studio Code 打开项目：

![打开项目](/assets/windows/打开项目.png)

在 Visual Studio Code 的终端中安装依赖包：

```bash
yarn install
```

新建配置文件.env.local，参考[.env](env): 环境变量配置文件，可以配置端口、URL 等环境变量，[steedos-config.yml](steedos_config): 项目配置文件，可以配置数据源、插件等参数。

启动服务：

```bash
yarn start
```

> 也可按 F5 即可使用 debug 模式启动项目
