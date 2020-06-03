---
title: Ubuntu 部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa)为例，指导你如何在 Ubuntu 系统中部署和运行基于华炎魔方开发的项目。

系统基本环境需要需要安装 mongodb、git、nodejs

如果需要远程开发，还可以部署微软 code-server，实现在浏览器中运行 Visual Studio Code 编辑器进行远程开发。

## 安装 Ubuntu

查看 ubuntu 版本：

```bash
steedos@ubuntu:/home/steedos# cat /proc/version
Linux version 4.15.0-88-generic (buildd@lgw01-amd64-036) (gcc version 7.4.0 (Ubuntu 7.4.0-1ubuntu1~18.04.1)) #88-Ubuntu SMP Tue Feb 11 20:11:34 UTC 2020
```

> 系统版本没有特别要求，这里只提供参考

## 安装 git

首先，确认你的系统是否已安装 git，可以通过 `git` 指令进行查看，如果没有，在命令行模式下输入命令进行安装：

```bash
sudo apt-get install git
```

## 安装 node-v12.x

添加 node 源：

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

安装 make：

```bash
sudo apt-get install gcc g++ make
```

安装 node：

```bash
sudo apt-get install -y nodejs
```

检测是否安装成功：

```bash
steedos@ubuntu:~$ node -v
v12.17.0
```

> 打印出版本号即表示 node 安装成功

## 安装 pm2

国内用户配置[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM)以提高 NPM 包下载速度：

```bash
npm config set registry https://registry.npm.taobao.org
sudo npm install yarn -g
yarn config set registry https://registry.npm.taobao.org
```

安装[pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)：

```bash
sudo npm install pm2 -g
```

## 安装 mongodb 数据库

根据官方向导，安装最新的[mongodb4.2](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)，并启动

## 克隆并启动项目

首先在 github 中 fork 项目，项目源码位于 https://github.com/steedos/steedos-project-oa，然后将已经fork到自己账号下的项目克隆到本地，

```bash
cd /srv/
sudo git clone https://github.com/steedos/steedos-project-oa
cd steedos-project-oa
sudo yarn
sudo pm2 start server.js
```

> 重启服务：`sudo pm2 restart server.js`

## 安装 code-server (可选)

安装 code-server 的[最新版本](https://github.com/cdr/code-server)：

```bash
curl -sSOL https://github.com/cdr/code-server/releases/download/v3.3.1/code-server_3.3.1_amd64.deb
sudo dpkg -i code-server_3.3.1_amd64.deb
systemctl --user enable --now code-server
# Now code-server is running at http://127.0.0.1:8080
# Your password is in ~/.config/code-server/config.yaml
```

修改配置文件，bind-addr 为`0.0.0.0`，密码也可调整：

```bash
vim ~/.config/code-server/config.yaml

bind-addr: 0.0.0.0:8080
auth: password
password: 307f71d53ec2fd0995499cf4
cert: true

# 保存后重启服务
systemctl --user restart code-server
```

比如服务部署在 192.168.0.105，那么浏览器访问 https://192.168.0.108:8080 输入密码即可在浏览器中的 vs code 进行远程开发

### 使用 vs code 提交代码到 git

首先选中需要提交的文件暂存修改：

![暂存修改](/assets/ubuntu/git暂存修改.png)

其次写说明并提交更改：

![提交更改](/assets/ubuntu/git提交更改.png)

如果没有 git 客户端可选择取消打开 git 客户端，并在 vscode 中登陆 git 账号：

![取消打开客户端](/assets/ubuntu/git取消打开客户端.png)
![输入用户名](/assets/ubuntu/git输入用户名.png)
![输入密码](/assets/ubuntu/git输入密码.png)

最后推送更改：

![推送更改](/assets/ubuntu/git推送更改.png)

### 注意事项

启动 code-server 服务后关闭了终端，服务访问不了，执行以下命令后重启服务器：

```bash
sudo loginctl enable-linger username
```

> 来源： https://github.com/cdr/code-server/issues/1673

vs code 提交代码时报`error: insufficient permission for adding an object to repository database .git/objects`的处理方式:

```bash
cd steedos-project-oa
cd .git/objects
sudo chown -R <username>:<group> *
```
