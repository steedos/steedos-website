---
title: 部署项目至ubuntu
---

本页面描述如何将[steedos-project-saas](https://github.com/steedos/steedos-project-saas)项目部署至远程开发环境的过程。

部署完成后可在浏览器中打开vs code编辑器进行远程开发。

## 搭建运行环境

需要安装docker、docker-compose、git、node-v10.16.0、pm2、code-server

### 系统版本

查看ubuntu版本：

```bash
root@ubuntu:/home/steedos# cat /proc/version
Linux version 4.15.0-88-generic (buildd@lgw01-amd64-036) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #88-Ubuntu SMP Tue Feb 11 20:11:34 UTC 2020
```

> 系统版本没有特别要求，这里只提供参考

### 安装docker

[官方文档](https://docs.docker.com/engine/install/ubuntu/)

### 安装docker-compose

[官方文档](https://docs.docker.com/compose/install/)

### 安装git

首先，确认你的系统是否已安装git，可以通过git指令进行查看，如果没有，在命令行模式下输入命令进行安装：

```bash
sudo apt-get install git
```

### 安装node-v10.16.0

先要安装[nvm](https://github.com/nvm-sh/nvm)，安装完成之后即可使用nvm命令安装node：

```bash
nvm ls-remote
nvm install v10.16.0
```

### 安装pm2

安装[yarn](https://www.npmjs.com/package/yarn)：
```bash
npm install yarn -g
```

安装[pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)：

```bash
yarn global add pm2
```

### 安装code-server

安装code-server的[最新版本](https://github.com/cdr/code-server)：
```bash
curl -sSOL https://github.com/cdr/code-server/releases/download/v3.3.0/code-server_3.3.0_amd64.deb
sudo dpkg -i code-server_3.3.0_amd64.deb

```
TODO








