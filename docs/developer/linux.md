---
title: 安装开发环境(Linux)
---

Steedos项目基于NodeJS开发，默认使用MongoDB数据库。您可以在 Windows、Mac 或 Linux 环境中创建、开发和运行Steedos项目。

- 如果您是Linux环境，请继续阅读本文，完成开发环境的安装。
- 如果您是Windows环境，请参考 [安装开发环境(Windows)](/docs/developer/guide) 。
- 如果您是Mac环境，请参考[安装开发环境(Mac)](/docs/developer/mac.md)。

## 安装NodeJS 10.x版本
##### 下载NodeJS 10.x
``` bash
wget https://nodejs.org/download/release/v10.17.0/node-v10.17.0-linux-x64.tar.gz
```
##### 解压
``` bash
tar -zxvf node -v10.17.0-linux-x64.tar.gz
```
##### 将node移到/usr/local/node
``` bash
mv node-v10.17.0-linux-x64 /usr/local/node
```
##### 配置环境变量
``` bash
vi /etc/profile
export PATH=$PATH:/usr/local/node/bin
```
##### 查看node版本
node -v

##### 安装npm 
``` bash
sodu apt install npm
```
##### 查看npm版本
``` bash
npm -v
```
## 安装yarn
``` bash
node install yarn
```

## 安装MongoDB
##### 下载
```bash
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.17.tgz
```
##### 解压
``` bash
tar -zxvf mongodb-linux-x86_64-3.6.17.tgz
```
将解压包拷贝到指定目录
``` bash
mv mongodb-linux-x86_64-3.6.17/ /usr/local/mongodb
```

MongoDB 的可执行文件位于bin目录下，所以可以将其添加到PATH路径中：
``` bash
export PATH=<mongodb-install-directory>/bin:$PATH
```
##### 创建数据库目录
``` bash
mkdir -p /data/db
```
##### 启动MongoDB服务
``` bash
./mongod
```

## 安装 steedos 客户端工具
```bash
yarn global add steedos-cli
```
## 安装版本管理工具（可选）
请安装 [ Github Desktop](https://desktop.github.com/) ,用于管理项目源码。如果您还没有Github账户，建议您先注册一个。
## 安装源码编辑工具 (可选)
请安装 [Visual Studio Code](https://code.visualstudio.com/)。并安装 Steedos 集成插件[redhat.vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) ,您在编写配置文件时如果有语法错误，Visual Studio Code 会自动提示。
