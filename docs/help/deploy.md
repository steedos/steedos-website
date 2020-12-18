---
title: 如何安装华炎魔方？
sidebar_label: 安装向导
---

华炎魔方是低代码开发工具，使用华炎魔方开发的项目可以部署到本地运行，也可以部署到云平台。

## 快速安装

可以使用我们推荐的 [Windows 快速安装](/help/deploy/deploy_windows_server) 直接开始您的华炎魔方之旅，以免去相关运行环境的安装过程。

我们也提供了免安装的云部署方式，请参考：

- [部署到 腾讯云](./deploy/deploy_tencent.md): 可在腾讯云市场中购买免费的华炎魔方来部署到云上，支持远程开发与调试。
- [部署到 Heroku](./deploy/deploy_heroku.md): 利用Salesforce提供的免费云服务，部署开发环境。

## 开发环境安装

华炎魔方基于 [nodejs](https://nodejs.org/en/) 开发，使用 [mongodb](https://docs.mongodb.com/manual/installation/) 数据库，如果不使用我们推荐的 [快速安装](#快速安装)，则需先部署相应的运行环境。

- [Windows](./deploy/deploy_windows.md): 通常用于部署开发环境，推荐使用上述 [Windows 快速安装](/help/deploy/deploy_windows_server)，以免去相关运行环境的安装过程，生产环境建议使用Ubuntu。
- [Mac](./deploy/deploy_mac.md): 通常用于部署开发环境，生产环境建议使用Ubuntu。
- [Ubuntu](./deploy/deploy_ubuntu.md): 部署到Ubuntu，支持远程开发与调试。

## 生产环境安装

- [Docker 部署](./deploy/deploy_docker.md): 可选使用docker方式部署生产环境。
- [集群部署](./deploy/deploy_cluster.md): 对于用户量大的系统，还可以采用多服务器集群部署模式。

## 配置文件

华炎魔方使用`steedos-config.yml`作为配置文件，可在其中配置数据源、启用插件、登录规则、邮件账户等，与`.env`或`.env.local`作为环境变量配置文件一起定义整个项目的访问地址、端口号等属性，详情请参考 [配置文件](./deploy/steedos-config)。

## 克隆并运行开源项目

您可以部署以下模版项目，或是 [使用命令行创建你自己的项目](/developer/guide_create)。

- [华炎项目管理系统](https://github.com/steedos/project-management-app)
- [华炎办公](https://github.com/steedos/steedos-project-oa)
- [华炎合同管理系统](https://github.com/steedos/steedos-app-contract)
- [华炎客户关系管理系统](https://github.com/steedos/steedos-app-crm)

更多开源项目请前往 [华炎魔方应用市场](https://www.steedos.com/appstore/)。

:::note 提示
以上项目如需个性化定制，请在项目主页右上角点 [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)，然后将Fork到个人账户下的项目克隆到本地，以便提交修改。
:::
