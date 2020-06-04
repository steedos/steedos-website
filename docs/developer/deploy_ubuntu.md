---
title: Ubuntu 部署
---

本教程以 [steedos-project-oa](https://github.com/steedos/steedos-project-oa) 为例，指导你如何在 Ubuntu 系统中部署和运行基于华炎魔方开发的项目。

系统基本环境需要需要安装 mongodb、git、nodejs

如果需要远程开发，还可以部署微软 code-server，实现在浏览器中运行 Visual Studio Code 编辑器进行远程开发。

## 安装 Ubuntu

查看 ubuntu 版本：

```bash
steedos@ubuntu:~$ cat /etc/issue
Ubuntu 18.04.4 LTS \n \l
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
sudo apt-get install -y gcc g++ make
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

访问项目主页。例如：https://github.com/steedos/steedos-project-oa 。

> 对于华炎提供的项目模版，如需个性化定制，请在项目主页右上角点[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)，然后将 Fork 到个人账户下的项目克隆到本地，以便提交修改。

```bash
cd ~
git clone https://github.com/steedos/steedos-project-oa
cd steedos-project-oa
yarn
cp .env .env.local
pm2 start server.js
```

> 重启服务：`pm2 restart server.js`
> 项目访问地址和端口可在配置文件.env.local 中查看和编辑

防火墙开放端口后通过项目的 ROOT_URL 即可访问项目如：https://192.168.0.105:5080/

## 安装 code-server (可选)

安装 code-server 的[最新版本](https://github.com/cdr/code-server)：

```bash
curl -SOL https://github.com/cdr/code-server/releases/download/v3.3.1/code-server_3.3.1_amd64.deb
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

首先配置用户名和邮件然后选中需要提交的文件暂存修改：

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

> 只需执行一次

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