---
title: 安装开发环境(Mac)
---

Steedos项目基于NodeJS开发，默认使用MongoDB数据库。您可以在 Windows、Mac 或 Linux 环境中创建、开发和运行Steedos项目。

- 如果您是Mac环境，请继续阅读本文，完成开发环境的安装。
- 如果您是Windows环境，请参考 [安装开发环境(Windows)](/developer/guide) 。
- 如果您是Linux环境，请参考[安装开发环境(Linux)](/developer/linux)。

## 安装NodeJS
请安装与操作系统对应的NodeJS v10.x版本<br/>
具体操作如下：<br/>
##### 安装brew
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
##### 安装nvm
```bash
brew install nvm
```
##### 下载yarn
```bash
brew install yarn
```
##### 下载NodeJS v10.x版本
```bash
npm install -g n
sudo n 10.17.0
```
## 安装数据库服务器
请安装 [MongoDB Community Server v3.6 版本](https://www.mongodb.com/download-center/community) <br/>
具体操作如下:<br/>
1. 终端输入：
```bash
brew tap mongodb/brew
brew install mongodb-community@3.6
```
2. mongo作为服务运行
```bash
brew services start mongodb-community@3.6
```
## 安装 steedos 客户端工具
```bash
yarn global add steedos-cli
```
## 安装版本管理工具（可选）
请安装 [ Github Desktop](https://desktop.github.com/) ,用于管理项目源码。如果您还没有Github账户，建议您先注册一个。
## 安装源码编辑工具 (可选)
请安装 [Visual Studio Code](https://code.visualstudio.com/)。并安装 Steedos 集成插件[redhat.vscode-yaml](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) ,您在编写配置文件时如果有语法错误，Visual Studio Code 会自动提示。
