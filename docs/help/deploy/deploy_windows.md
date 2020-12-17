---
title: Windows 开发环境
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)为例，指导你如何在 Windows 10 系统中部署和运行基于华炎魔方开发的项目。

部署完成后可在 windows10 环境下开发。

## 搭建运行环境

需要安装 [Github Desktop](https://desktop.github.com/)、[node-v12](https://nodejs.org/download/release/v12.19.1/node-v12.19.1-x64.msi)、[mongodb-v4.2](https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-windows/)、[Robo 3T](https://robomongo.org/)、[Visual Studio Code](https://code.visualstudio.com/)

### 安装 Github Desktop

安装[Github 桌面客户端](https://desktop.github.com/)

### 安装 node-v12.16.3

访问 nodejs[官网](https://nodejs.org/en/)下载并安装 node：

![安装node](/assets/windows/安装node.png)

安装完成之后打开命令提示符安装 yarn：

```bash
npm install -g yarn
```

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org
```

### 安装 mongodb-v4.2

根据官方向导，安装最新的[mongodb4.2](https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-windows/)，选择安装成 windows 服务

- 右键以管理员身份运行 mongodb-win32-x86_64-2012plus-4.2.8-signed.msi，点击 Next

![安装mongodb](/assets/windows/mongodb_1.jpeg)

- 点击 I accept the terms in the license Agreement，点击 Next

![安装mongodb](/assets/windows/mongodb_2.jpeg)

- 选择默认安装路径，点击 complete；自定义安装路径，点击 custom，点击 Next

![安装mongodb](/assets/windows/mongodb_3.jpeg)

- 如果选择 custom，点击 Browse 选择路径，点击 Next

![安装mongodb](/assets/windows/mongodb_4.jpeg)

- Service Configuration 选择默认的 Run service as Network Service User，直接点击 Next

![安装mongodb](/assets/windows/mongodb_5.jpeg)

- 取消勾选 Install MongoDB Compass，点击 Next

![安装mongodb](/assets/windows/mongodb_6.jpeg)

- 点击 Install，开始安装

![安装mongodb](/assets/windows/mongodb_7.jpeg)

- 点击 Finish，完成安装

![安装mongodb](/assets/windows/mongodb_8.jpeg)

### 使用集群模式启动数据库

编辑配置文件，默认在 `C:\Program Files\MongoDB\Server\4.2\bin\mongod.cfg`:

```bash
# 找到replication部分，去掉#并添加一行配置
replication:
#以下配置必须缩进两个空格
  replSetName: rsSteedos
```

> 保存后在系统服务中重启数据库服务才会生效，默认服务名称为 `MongoDB Server`。

初始化数据库：

打开命令提示符，输入`mongo`命令进入 mongodb 控制台

> 如果报错 mongo 命令未找到则执行 `C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe` 程序

在 mongodb 控制台中输入以下命令初始化数据库

```bash
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

### 启动数据库：

数据库服务为 windows 服务，默认开机启动，可在 windows 系统服务中查看，默认服务名称为 `MongoDB Server`

### 克隆项目

请访问 https://github.com/steedos/steedos-project-oa 先在项目主页右上角点 [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) 项目，然后将已经 fork 到自己账号下的项目 clone 到本地，以便提交修改：

![clone项目](/assets/windows/clone项目.png)

### 启动应用：

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

### 常见问题解答

#### `fibers: Command failed`

通常会伴随 `gyp ERR! find Python Python is not set from command line or npm configuration` 的信息，是因为本地 python 未正常安装或者 python 命令未加入到环境变量(PATH)中
