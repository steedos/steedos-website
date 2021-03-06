---
title: Heroku 部署
---

本页面描述如何将[steedos-project-oa](https://github.com/steedos/steedos-project-oa)项目发布至 heroku 并启动服务，通过外网https://steedos-project-oa.herokuapp.com即可访问的过程。

heroku 官方[向导](https://devcenter.heroku.com/articles/getting-started-with-nodejs) 。

## 准备工作

注册[heroku](https://www.heroku.com/)账号

安装 heroku[命令行工具](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)， 根据操作系统选择安装

终端登录 heroku 账号：

```bash
heroku login
```

### 克隆项目

访问项目主页。例如：https://github.com/steedos/steedos-project-oa 。

> 对于华炎提供的项目模版，如需个性化定制，请在项目主页右上角点[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)，然后将Fork到个人账户下的项目克隆到本地，以便提交修改。

## 发布过程

进入本地 steedos-project-oa 项目目录：

```bash
cd steedos-project-oa
```

创建 app：

```bash
heroku create steedos-project-oa
```

> 如果只执行`heroku create`未指定 app 名称，则会被分配一个随机生成的名称，app 的名称影响将来访问的地址， 名称是唯一的

添加[mongodb 数据库插件](https://elements.heroku.com/addons/mongolab)，获取数据库连接地址 MONGODB_URI：

```bash
heroku addons:create mongolab:sandbox
```

> 这里添加数据库插件的免费版本时 heroku 会要求验证账户，添加信用卡信息。

浏览器访问 app 管理页面 Settings 标签页配置环境变量：

![配置环境变量](/assets/heroku/配置环境变量.png)

```env
MAIL_URL:              smtps://邮件发送服务地址:465/
MONGODB_URI:           添加数据库插件后获取的值，无需改动
MONGO_URL:             MONGODB_URI的值
NPM_CONFIG_PRODUCTION: false
PORT:                  5040
ROOT_URL:              https://steedos-project-oa.herokuapp.com
STEEDOS_CFS_STORE:         local
STEEDOS_STORAGE_DIR:   ./storage
YARN_PRODUCTION:       false
```

将本地的项目发布到 heroku：

```bash
git push heroku master
```

发布成功后，执行`heroku open`使用系统默认浏览器打开刚发布的项目

## 连接 github 自动发布

浏览器访问 app 管理页面 Deploy 标签页设置自动发布，在`Deployment method`栏选择 Github：

![连接github](/assets/heroku/连接github.png)

## 免费版限制

数据库容量 496 MB
