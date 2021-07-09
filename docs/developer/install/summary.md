---
title: 安装开发环境
---

## 安装 MongoDB

MongoDB 是华炎魔方内置数据库引擎，需先 [下载 MongoDB](https://docs.mongodb.com/v4.2/administration/install-community) 并 [安装](/help/deploy/deploy_windows) 。

:::note 提示
安装4.2版本以上的mongodb，并以集群模式启动，才可以支持多文档事务。
:::

## 安装 Nodejs

华炎魔方是基于NodeJS开发的，必须安装NodeJS开发环境。 [下载 NodeJS](https://nodejs.org/en/)

## 安装 yarn

安装或更新项目相关依赖库

```yml
npm i yarn --global
```

:::note 提示
当在linux中使用npm命令时，npm出于安全考试不支持以root用户运行，即使你用root用户身份运行了，npm会自动转成一个叫nobody的用户来运行，而这个用户几乎没有任何权限。这样的话如果你脚本里有一些需要权限的操作，比如写文件（尤其是写/root/.node-gyp），就会崩掉了。

为了避免这种情况，要么按照npm的规则来，专门建一个用于运行npm的高权限用户；要么加 --unsafe-perm 参数，这样就不会切换到nobody上，运行时是哪个用户就是哪个用户，即使是root。
:::

## 安装 Steedos Cli

安装或更新Steedos CLI命令工具

```yml
npm i steedos-cli@next --global
```

## 安装 Robot 3T

Robot 3T 是 MongoDB 数据库可视化查询工具。[下载Robot 3T](https://robomongo.org)

- [使用教程](/developer/install/robo3t_tutorial)

## 安装 VS Code

VS Code是代码编辑器。[下载VS Code](https://code.visualstudio.com)

## 安装 GitHub Desktop

GitHub Desktop 是 GitHub 桌面可视化工具。[下载GitHub Desktop](https://desktop.github.com)
