---
title: Ubuntu 快速安装
---

## 支持平台

项目支持在 macOS 10.12 及以上版本中运行

## 下载

点击下载执行程序压缩包[steedos-project-mini-linux-1.23.0-alpha.12.zip](https://server-backups.oss-cn-beijing.aliyuncs.com/steedos-platform/quick-installers/steedos-project-mini-linux-1.23.0-alpha.12.zip)

解压后目录主要结构为：

![目录结构](/assets/help/deploy/ubuntu/目录结构.png)

- `bin` 存放系统依赖的执行程序；
- `db` 存放数据库数据；
- `node_modules` 存放系统运行所需二进制包；
- `steedos-packages` 存放安装的插件，如`steedos-app-crm.package`等`.package`后缀的文件；
- `storage` 存放系统中上传的文件；
- `.env` 是系统的配置文件可在此文件中配置端口、访问地址等；
- `安装说明.docx` 系统安装及启动流程说明；
- `使用说明.docx` 系统使用说明；
- `1-启动数据库` 用于启动数据库服务；
- `2-启动华炎魔方` 用于启动华炎魔方服务；
- `steedos-project-mini` 华炎魔方服务；
- `steedos-config.yml` 配合.env 文件使用的配置文件。

## 设置.sh 文件打开方式

打开文件**首选项**：

![首选项](/assets/help/deploy/ubuntu/首选项.png)

设置打开方式为**询问动作**：

![询问动作](/assets/help/deploy/ubuntu/询问动作.png)

## 启动数据库

先双击 `1-启动数据库.sh` 选择 **在终端中运行** ，保持窗口打开：

![数据库终端运行](/assets/help/deploy/ubuntu/数据库终端运行.png)

看到下图信息表示启动成功：

![数据库启动](/assets/help/deploy/ubuntu/数据库启动.png)

## 运行项目

然后确保数据库启动成功后，双击`2-启动华炎魔方.sh` 选择 **在终端中运行**，保持窗口打开：

![魔方终端运行](/assets/help/deploy/ubuntu/魔方终端运行.png)

看到下图信息表示服务启动成功:

![项目启动](/assets/help/deploy/ubuntu/项目启动.png)

服务会自动使用默认浏览器打开地址 http://127.0.0.1:8080/ ，请创建账号后使用华炎魔方。

## 常见问题解答

### Address already in use

启动数据库报错：`Failed to set up listener: SocketException: Address already in use`。

这是端口冲突，说明本地 27017 端口已经被占用，很有可能本地已经启动了一个 mongodb 服务，停掉即可

也可以编辑 **1-启动数据库** 在行尾添加 `--port {非27017端口}`，同时修改 **.env** 文件中 **MONGO_URL** 中的端口
