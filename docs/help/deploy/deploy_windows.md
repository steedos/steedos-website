---
title: Windows 安装
---

## 支持平台

本教程以 steedos-project-template 为例，指导你如何在 Windows 7 或更高版本的 64 位操作系统中部署和运行基于华炎魔方2.0开发的项目。

## 搭建开发环境

### 安装开发工具

[Github 客户端](https://desktop.github.com/)

[Mongodb 数据库图形化管理工具 Robo 3T](https://robomongo.org/download)

[代码编辑工具 Visual Studio Code](https://code.visualstudio.com/)

### 安装运行环境

#### 安装node
下载[node-v12.19.1](https://nodejs.org/download/release/v12.19.1/node-v12.19.1-x64.msi)并安装：

安装过程请勾选下图提示框，安装依赖工具，此过程需要等待20-30分钟：
![安装依赖包](/assets/windows/nodejs-12.19.png)

#### 安装yarn
nodejs安装完成之后打开终端执行以下命令安装yarn：

```bash
npm install -g yarn
```

#### 安装Steedos Cli
安装或更新Steedos CLI命令工具

```bash
npm i steedos-cli@next --global
```

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

#### 安装Mongodb数据库服务

参考官方[安装文档](https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-windows/)安装数据库，建议安装4.2及以上版本

安装时请勾选安装MongoDB Compass，Compass是Mongo windows 安装包自带的一个可视化操作工具。

安装成功后将安装路径添加到系统环境变量中，例如：C:\Program Files\MongoDB\Server\4.2\bin 

还需要修改配置文件以集群方式重启服务

修改mongodb安装路径下的mongod.cfg，例如：C:\Program Files\MongoDB\Server\4.2\bin\mongod.cfg

```bash
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
...

#  找到replication，去掉#并添加一行配置
replication:
  #  以下配置必须缩进两个空格
  replSetName: rs0

````

在 任务管理器-服务 中找到MongoDB服务，并右键重启

打开cmd窗口，连接Mongodb

```bash
# 执行mongo连接数据库
mongo

...
# 表示集群配置已成功
rs0:PRIMARY>
```

#### 安装Redis服务

通过Windows版本Redis库找到[安装包](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/bin/redis/Redis-x64-3.2.100.msi)，安装Redis服务

安装过程中勾选下图中的勾选框：

![添加环境变量](/assets/windows/redis.png)

安装完成后，会自动创建Redis服务：
![安装完成](/assets/windows/redis-installed.png)

#### 下载项目源码

以steedos-project-template为例，有两种方式下载项目源码：

- 点击下载压缩包 [steedos-v2.0-win-x64.zip](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/steedos-v2.0-win-x64.zip) 解压缩到steedos-v2.0-win-x64文件夹中。
- 访问 [steedos-project-template](https://github.com/steedos/steedos-project-template/tree/2.0) 先在项目主页右上角点 "Fork" 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改，这种方式需要Github账户并且需要保证当下网络环境能正常访问Github官网。

解压后目录主要结构为：

#### 项目目录

```sh
steedos-project-template
├── storage
├── steedos-app
├── steedos-packages
├── services
├── .env
├── .gitignore
├── moleculer.config.js
├── package.json
├── README.md
├── server.js
├── steedos-config.yml
└── yarn.lock
```

- `storage` 存放系统中上传的文件；
- `public`: 此文件夹用于保存静态资源文件，服务启动是会自动加载。
- `steedos-app`: 用于保存项目元数据和源码，华炎魔方启动是会自动加载其中的元数据。使用华炎魔方 DX 工具同步元数据时，默认同步到此文件夹中。
- `steedos-packages`: 当你的项目需要分包管理时，可以使用此文件夹。你也可以把第三方软件包复制到此文件夹中，华炎魔方启动时会自动加载其中的元数据。
- `services`: 用于保存微服务相关配置文件。
- `moleculer.config.js`: 使用moleculer运行服务时的配置文件。 
- `.env`: 环境变量配置文件，可以配置端口、URL 等环境变量。
- `.env.local`: 可以手工创建此文件，用于保存本地开发环境的配置。此文件不会上传到 GitHub 中。
- `steedos-config.yml`: 华炎魔方配置文件，具体参考[官方文档](https://www.steedos.com/help/deploy/steedos-config)。
- `package.json`: 用于配置本项目依赖的 npm 包。如果需要升级 steedos 内核版本，也是修改此文件。

#### 运行项目

使用vs code 打开解压后的文件夹，点击“终端”，打开命令窗口安装项目依赖的包

```bash
yarn
```

拷贝.env 到 .env.local，用于配置运行的服务的环境变量，指定MongoDB地址、Redis服务地址和ROOT_URL:

```bash
PORT=3000
ROOT_URL=http://localhost:3000
MONGO_URL=mongodb://localhost:27017/steedos
MONGO_OPLOG_URL=mongodb://localhost:27017/local
TRANSPORTER=redis://127.0.0.1:6379
CACHER=redis://127.0.0.1/1
```

执行命令启用服务：
```bash
yarn start
```

终端会打印如下信息，待服务启动完成后，会自动使用默认浏览器打开地址 **http://localhost:3000/** 。

```bash
*******************************************************************
*
*  Initialize Steedos Server ...
*
*  VERSION: 2.0.34
*  PORT: 3000
*  ROOT_URL: http://localhost:3000
*  MONGO_URL: mongodb://localhost:27017/steedos
*  PROJECT_DIR: C:\Users\steedos\Downloads\steedos-v2.0-win-x64
*
*******************************************************************
service ~packages-$packages-steedos-project-template started
service ~packages-@steedos/app-oa started
service ~packages-@steedos/app-admin started
service ~packages-@steedos/service-charts started
service ~packages-@steedos/app-contracts started
service ~packages-@steedos/app-okr-management started
service ~packages-@steedos/app-project-management started
service ~packages-standard-objects started
service ~packages-@steedos/workflow started
service ~packages-@steedos/accounts started
service ~packages-@steedos/steedos-plugin-schema-builder started
service ~packages-@steedos/plugin-enterprise started
service ~packages-@steedos/word-template started
service ~packages-@steedos/plugin-qywx started
service ~packages-@steedos/metadata-api started
service ~packages-@steedos/plugin-dingtalk started
service ~packages-@steedos/data-import started
service ~packages-@steedos/app-crm started

Project is running at http://localhost:3000
```

系统初始安装时没有任何数据，您可以先注册一个账户、创建一个企业。您注册的账户自动会成为该企业的管理员。

:::note 提示
若弹出防火墙询问窗口，点击允许运行即可。
:::

## 元数据同步

可以通过安装VS Code插件来同步元数据，具体参考 [元数据与代码同步](/developer/dx/dx_vscode_install)

## 常见问题解答

### 找不到 MSVCP140.dll

启动数据库报错：**由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题** 或者 **Mongod instance closed with an non-0 (or non 12 on windows) code!**。

通常发生在 windows server 2015/2017/2019 上。

原因是缺少微软**VC++**运行库文件，去微软官网下载[最新支持的 Visual C++](https://support.microsoft.com/zh-cn/help/2977003/the-latest-supported-visual-c-downloads)

选择 64 位执行程序下载安装，安装后重新启动数据库：

![项目启动](/assets/windows/vc++.png)

### Windows MongoDB开启账户验证

安装MongoDB服务后，系统默认不会开启账户验证，建议开启账户验证，提高服务的安全性。

首先，打开系统cmd窗口，执行以下操作：

```bash
# 连上数据库
mongo;

# 切换到admin
use admin;

# 创建管理员账号
db.createUser({user: "adminUsername", pwd: "adminPassword", roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] } );

# 切换到steedos
use steedos;

# 创建普通用户
db.createUser({user: "userUsername", pwd: "userPassword", roles: [ { role: "readWrite", db: "yourdbname" }, { role: "read", db: "local"} ] } );

# 切换到admin查看已创建的用户
use admin;
db.system.users.find().pretty();

# 退出数据库
exit;
```

编辑数据库配置文件mongod.cfg，执行以下操作：

```bash
# 找到security，去掉'#'并新加一行
security:
  # 缩进两个空格
  authorization: enabled
```

保存修改后，在任务管理器中重启数据库服务。

修改华炎魔方项目的配置文件.env.local，添加mongo账户认证信息：

```bash
PORT=3000
ROOT_URL=http://localhost:3000
# 修改MONGO_URL和MONGO_OPLOG_URL
MONGO_URL=mongodb://userUsername:userPassword@mongo:27017/steedos?replicaSet=rs0
MONGO_OPLOG_URL=mongodb://userUsername:userPassword@mongo:27017/local?replicaSet=rs0&authSource=steedos
MONGOMS_DOWNLOAD_MIRROR=https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/bin/mongodb
MONGOMS_DEBUG=true
TRANSPORTER=redis://localhost:6379
CACHER=redis://localhost/1
```

保存配置文件，并重启华炎魔方项目。

### Visual Studio Code中 npm不是内部或外部命令

使用Visual Studio Code，打开 “终端”，在终端中执行 npm 会报错，但是在windows系统的终端中却能识别到npm。

这个问题通常出现在安装完nodejs后，没有重启电脑，重启电脑后则不会出现此问题。

### Visual Studio Code中的终端默认时powershell，如何修改成cmd

Visual Studio Code中默认采用powershell作为终端运行窗口，需要修改默认配置为cmd就行，参考下图配置：
![终端配置文件](/assets/windows/vscode_default.png)

选择cmd为默认终端窗口：
![配置cmd](/assets/windows/vscode_default_cmd.png)

### Redis服务是否必须安装

基于华炎魔方2.0项目的部署需要安装redis服务，如果当前项目版本是1.23且暂时不想升级到2.0项目的，不需要安装Redis服务。


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

