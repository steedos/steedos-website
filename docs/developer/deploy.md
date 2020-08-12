---
title: 如何安装华炎魔方？
sidebar_label: 安装
---

华炎魔方是低代码开发工具，使用华炎魔方开发的项目可以部署到本地运行。部署过程包括安装运行环境、克隆并运行项目。

## 安装运行环境

华炎魔方基于 [nodejs](https://nodejs.org/en/) 开发，使用 [mongodb](https://docs.mongodb.com/manual/installation/) 数据库，需先部署相应的运行环境。

## 克隆并运行项目

你可以部署以下模版项目，或是 [使用命令行创建你自己的项目](/developer/guide_create)。

- [华炎办公](https://github.com/steedos/steedos-project-oa)
- [华炎合同管理系统](https://github.com/steedos/steedos-contracts-app)
- [华炎采购管理系统](https://github.com/steedos/steedos-app-purchase)

> 以上项目如需个性化定制，请在项目主页右上角点[Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)，然后将Fork到个人账户下的项目克隆到本地，以便提交修改。

部署过程请参考

- [部署到 Windows](./deploy_windows.md): 通常用于部署开发环境，生产环境建议使用Ubuntu。
- [部署到 Mac](./deploy_mac.md): 通常用于部署开发环境，生产环境建议使用Ubuntu。
- [部署到 Ubuntu](./deploy_ubuntu.md): 部署到Ubuntu，并支持远程开发与调试。
- [部署到 Heroku](./deploy_heroku.md): 利用Salesforce提供的免费云服务，部署开发环境。
- [Docker 部署](./deploy_docker.md): 可选使用docker方式部署生产环境。
- [集群部署](./deploy_cluster.md): 对于用户量大的系统，还可以采用多服务器集群部署模式。