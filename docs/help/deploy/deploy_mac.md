---
title: Mac 安装
---

本教程以 [steedos-project-template](https://github.com/steedos/steedos-project-template/tree/2.0)为例，指导你如何在 Mac 系统中部署和运行基于华炎魔方2.0开发的项目。

部署完成后可在 Mac 环境下开发。

## 搭建开发环境

### 安装开发工具

[Github 客户端](https://desktop.github.com/)

[Mongodb 数据库图形化管理工具 Robo 3T](https://robomongo.org/download)

[代码编辑工具 Visual Studio Code](https://code.visualstudio.com/)

### 安装运行环境

#### 安装node
下载[node-v12.19.1](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)并安装：

#### 安装yarn
nodejs安装完成之后打开终端执行以下命令安装yarn：

```bash
sudo npm install -g yarn
```

#### 安装Steedos Cli
安装或更新Steedos CLI命令工具

```bash
sudo npm i steedos-cli@next --global
```

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

#### 安装Mongodb数据库服务
参考官方[安装文档](https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-os-x/)安装数据库，建议安装4.2及以上版本

安装成功后需要修改配置文件以集群方式重启服务

Intel内核配置文件地址：
```bash
/usr/local/etc/mongod.conf
```

Apple M1内核配置文件地址：
```bash
/opt/homebrew/etc/mongod.conf
```

编辑配置文件(以M1内核配置文件为例)：
```bash
sudo vim /opt/homebrew/etc/mongod.conf
# 找到replication，去掉#并添加一行配置，没有replication则手动添加
replication: 
  # 以下配置必须缩进两个空格
  replSetName: rs0
```

保存后重启mongo服务生效
```bash
brew services restart mongodb-community@4.2
```

数据库初始化
```bash
# 首先进入mongo控制台
mongo
# 执行初始化函数
rs.initiate();
# 查看配置
rs.conf();
# 查看集群状态，确保members里有一个primary，则表示配置成功
rs.status();
```
#### 安装Redis服务
参考[官方文档](https://redis.io/download)安装，建议安装稳定版

源码编译安装：
```bash
# 解压下载的安装包
tar -zxvf redis-6.2.4.tar.gz
# 移动到指定的目录
sudo mv -r redis-6.2.4 /usr/local
# 编译检测
make test
# 编译安装
make install
```

brew安装：
```bash
# 查找redis包
brew search redis
# 安装指定版本redis
brew install redis@4.0
# 安装完成后按照提示添加环境变量
```

启用redis服务：
```bash
redis-server
```

## 启动服务

### 克隆项目

请访问 [steedos-project-template](https://github.com/steedos/steedos-project-template/tree/2.0) 先在项目主页右上角点 "Fork" 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改。

### 启动应用

首先使用 Visual Studio Code 打开你本地的项目，并在 Visual Studio Code 的**终端(Terminal)**中安装依赖包：

```bash
yarn
```

复制.env 到.env.local
```bash
cp .env .env.local
```

修改配置文件，指定MongoDB地址、Redis服务地址和ROOT_URL:
```bash
PORT=3000
ROOT_URL=http://localhost:3000
MONGO_URL=mongodb://localhost:27017/steedos
MONGO_OPLOG_URL=mongodb://localhost:27017/local
TRANSPORTER=redis://127.0.0.1:6379
CACHER=redis://127.0.0.1/1
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
*  VERSION: 2.0.32
*  PORT: 3000
*  ROOT_URL: http://localhost:3000
*  MONGO_URL: mongodb://127.0.0.1:27017/steedos
*  PROJECT_DIR: /Users/user/Documents/GitHub/steedos-project-template
*
*******************************************************************
service ~packages-@steedos/app-oa started
service ~packages-$packages-steedos-project-template started
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

Project is running at http://localhost:3000
```

## 元数据同步

可以通过安装VS Code插件来同步元数据，具体参考 [元数据与代码同步](/developer/dx/dx_vscode_install)

## 常见问题解答

### Mac MongoDB开启账户验证

安装MongoDB服务后，系统默认不会开启账户验证，建议开启账户验证，提高服务的安全性。

首先，打开系统终端窗口，执行以下操作：

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

编辑数据库配置文件mongod.conf，执行以下操作：

```bash
# 找到security，去掉'#'并新加一行
security:
  # 缩进两个空格
  authorization: enabled
```

保存修改后，执行命令重启数据库服务。

```bash
brew services restart mongodb-community@4.2 
```


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

### 官方服务更新后如何升级

华炎魔方后台会定期更新升级版本，对于已经部署的魔方服务，只需要修改本地的package.json文件，将旧版本服务的版本号更新到新版本号，然后执行yarn，等安装完后，执行yarn start启用服务。

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
