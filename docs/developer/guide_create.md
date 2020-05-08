---
title: 创建项目
---

创建Steedos项目前，请先 [安装开发环境](https://developer.steedos.com/developer/install) 。

## 创建Steedos项目

### 创建新项目

创建一个名为test的新项目

```bash
yarn create steedos-app test
```

### 安装依赖包

```bash
cd test
yarn
```

### 查看文件夹结构

项目创建后，您的项目文件夹内容如图如下：

![文件夹结构](/assets/文件夹结构1.png)

其中

- src: 项目源码
- [.env](env): 环境变量配置文件，可以配置端口、URL等环境变量。

> 建议修改.env.local中的ROOT_URL，其默认值中的IP为“127.0.0.1”，可改用本机的IP地址。这样，在其他机器就可以用ROOT_URL来访问系统了。

> 如果是多人协作同一个项目的时候，推荐各自新建 .env.local 来替代 .env 。如果存在文件.env.local 。 系统启动时，就从文件.env.local中读取环境变量。反之，如果不存在文件.env.local，系统启动时，则从文件.env中读取环境变量。

- [steedos-config.yml](steedos_config): 项目配置文件，可以配置数据源、插件等参数。
- package.json: 主要用于配置本项目依赖的npm包。

## 运行Steedos项目

### 启动服务

终端执行以下代码：
```bash
yarn start
```

### 停止服务

如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。

## 进入系统，创建企业并使用

服务启动后，即可使用浏览器访问用户界面，访问地址默认为 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) 。如果已修改环境变量，则为 [.env.local / .env ](env)中的ROOT_URL 。 

![登录页](/assets/login_noemail.png)

> 上方显示“邮件服务未配置，点击查看帮助”，点击可查看如何通过配置开通发邮件功能。可参考 [steedos-config](steedos_config#邮件配置) 。

### 注册一个账户

第一次使用本项目时，数据库为空。您需要点击“注册”，用邮箱注册一个新账户。

![登录页](/assets/login_register.png)

![输入邮件](/assets/register_email.png)

![输入验证码](/assets/register_verify.png)

> 如果已开通发邮件功能，可到邮箱中取验证码；如果尚未配置，则到终端上取验证码：

> ![注册](/assets/register_code.png)

![输入验证码](/assets/register_name.png)

### 创建一个企业

填写姓名后，输入企业名称，

![创建企业](/assets/register_space.png)

![创建完毕](/assets/register_ok.png)

即可完成企业的创建。

点击“首页”即可进入系统主页面。

### 浏览系统主页面

![PC界面展示](/assets/mainpage.png)

![移动端界面展示](/assets/guide_2.png)

要进入系统，可以通过验证码登陆。也可以给账户设置密码。

### 设置登录密码

在设置 > 个人账户设置 > 我的资料 中，可以更改密码。

![设置密码](/assets/userset_password.png)

更多的系统设置及使用，请参考 [如何设置组织](/help/organization) 、 [如何设置审批](/help/workflow/admin_form) 、 [如何使用审批](/help/workflow/instance_add) 。

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程1、创建项目](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson1) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson1
yarn
```

### 启动教程1项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程1项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程1项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。