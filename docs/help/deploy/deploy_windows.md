---
title: Windows 安装
---

## 支持平台

本安装程序支持在 Windows 7 或更高版本的 64 位操作系统中运行：

## 下载

点击下载执行程序压缩包 [steedos-v1.23-win-x64.zip](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/steedos-v1.23-win-x64.zip) 解压缩到服务器硬盘，即可完成安装。

解压后目录主要结构为：

## 项目目录

```sh
steedos-project-root
├── bin
│   └── start_steedos.bat
├── db
├── storage
├── steedos-app
├── steedos-packages
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.js
├── steedos-config.yml
└── yarn.lock
```

- `bin` 存放系统依赖的执行程序；
- `bin\start_steedos.bat` 用于启动华炎魔方服务；
- `db` 存放数据库数据；
- `storage` 存放系统中上传的文件；
- `public`: 此文件夹用于保存静态资源文件，服务启动是会自动加载。
- `steedos-app`: 用于保存项目元数据和源码，华炎魔方启动是会自动加载其中的元数据。使用华炎魔方 DX 工具同步元数据时，默认同步到此文件夹中。
- `steedos-packages`: 当你的项目需要分包管理时，可以使用此文件夹。你也可以把第三方软件包复制到此文件夹中，华炎魔方启动时会自动加载其中的元数据。
- `.env`: 环境变量配置文件，可以配置端口、URL 等环境变量。
- `.env.local`: 可以手工创建此文件，用于保存本地开发环境的配置。此文件不会上传到 GitHub 中。
- `steedos-config.yml`: 华炎魔方配置文件，具体参考 (官方文档)[https://www.steedos.com/help/deploy/steedos-config]。
- `package.json`: 用于配置本项目依赖的 npm 包。如果需要升级 steedos 内核版本，也是修改此文件。

## 运行项目

然后确保数据库启动成功后，双击运行`bin\steedos.bat`保持窗口打开。

服务启动完成后，会自动使用默认浏览器打开地址 **http://127.0.0.1:3000/** 。

系统初始安装时没有任何数据，您可以先注册一个账户、创建一个企业。您注册的账户自动会成为该企业的管理员。

:::note 提示
若弹出防火墙询问窗口，点击允许运行即可。
:::

## 数据库

华炎魔方使用 MongoDB 4.2+ 数据库，快速安装版会自动下载并安装 MongoDB 到本项目的 bin/mongodb 下。下载完成后自动启动数据库。数据库保存于 db 文件夹中。

> 如果你自己部署了 MongoDB 服务器，可以通过配置 MONGO_URL 环境变量，指定 MongoDB 数据库连接。

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

## 常见问题解答

### 找不到 MSVCP140.dll

启动数据库报错：**由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题** 或者 **Mongod instance closed with an non-0 (or non 12 on windows) code!**。

通常发生在 windows server 2012/2015/2019 上。

原因是缺少微软**VC++**运行库文件，去微软官网下载[最新支持的 Visual C++](https://support.microsoft.com/zh-cn/help/2977003/the-latest-supported-visual-c-downloads)

选择 64 位执行程序下载安装，安装后重新启动数据库：

![项目启动](/assets/windows/vc++.png)
