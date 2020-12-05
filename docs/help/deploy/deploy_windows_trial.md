---
title: Windows 快速试用
---

## 下载

点击下载执行程序压缩包[steedos-project-oa-win.zip](https://server-backups.oss-cn-beijing.aliyuncs.com/steedos-trial/steedos-project-oa-win.zip)

解压后目录主要结构为：

![目录结构](/assets/windows/目录结构.png)

- `bin` 存放系统依赖的执行程序；
- `db` 存放数据库数据；
- `node_modules` 存放系统运行所需二进制包；
- `storage` 存放系统中上传的文件；
- `.env` 是系统的配置文件可在此文件中配置端口、访问地址等；
- `1-启动数据库.bat` 用于启动数据库服务；
- `2-启动华炎魔方.exe` 用于启动华炎魔方服务；
- `steedos-config.yml` 配合.env 文件使用的配置文件；
- `安装说明.docx` 系统安装及启动流程说明；
- `使用说明.docx` 系统使用说明。

## 启动数据库

先双击运行 `1-启动数据库.bat`保持窗口打开，看到下图信息表示启动成功：

![数据库启动](/assets/windows/数据库启动.png)

## 运行项目

然后确保数据库启动成功后，双击运行`2-启动华炎魔方.exe`保持窗口打开，看到下图信息表示服务启动成功:

![项目启动](/assets/windows/项目启动.png)

服务会自动使用默认浏览器打开地址 http://127.0.0.1:80/ ，请创建账号后使用华炎魔方

如弹出防火墙询问窗口，点击允许运行即可。
