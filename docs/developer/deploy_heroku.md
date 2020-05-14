---
title: 项目发布至heroku
---

本页面描述如何将[steedos-project-saas](https://github.com/steedos/steedos-project-saas)项目发布至heroku并启动服务，通过外网https://steedos-project-saas.herokuapp.com即可访问的过程。

heroku官方[向导](https://devcenter.heroku.com/articles/getting-started-with-nodejs) 。

## 准备工作

注册[heroku](https://www.heroku.com/)账号

安装heroku[命令行工具](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)， 根据操作系统选择安装

终端登录heroku账号：

```bash
heroku login
```

fork[steedos-project-saas](https://github.com/steedos/steedos-project-saas)，并clone至本地

## 发布过程

进入本地steedos-project-saas项目目录：

```bash
cd steedos-project-saas
```

创建app：

```bash
heroku create steedos-project-saas
```

> 如果只执行`heroku create`未指定app名称，则会被分配一个随机生成的名称，app的名称影响将来访问的地址， 名称是唯一的

添加[mongodb数据库插件](https://elements.heroku.com/addons/mongolab)，获取数据库连接地址MONGODB_URI：

```bash
heroku addons:create mongolab:sandbox
```

> 这里添加数据库插件的免费版本时heroku会要求验证账户，添加信用卡信息。

浏览器访问app管理页面Settings标签页配置环境变量：

![配置环境变量](/assets/heroku/配置环境变量.png)

```env
MAIL_URL:              smtps://邮件发送服务地址:465/
MONGODB_URI:           添加数据库插件后获取的值，无需改动
MONGO_URL:             MONGODB_URI的值
NPM_CONFIG_PRODUCTION: false
PORT:                  5040
ROOT_URL:              https://steedos-project-saas.herokuapp.com
STEEDOS_CFS_STORE:         local
STEEDOS_STORAGE_DIR:   ./storage
YARN_PRODUCTION:       false
```

将本地的项目发布到heroku：

```bash
git push heroku master
```

发布成功后，执行`heroku open`使用系统默认浏览器打开刚发布的项目

## 连接github自动发布

浏览器访问app管理页面Deploy标签页设置自动发布，在`Deployment method`栏选择Github：

![连接github](/assets/heroku/连接github.png)

## 免费版限制

数据库容量496 MB