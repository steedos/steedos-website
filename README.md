# Steedos 网站

网站使用Markdown语法编写，基于 docusaurus 搭建，网站源码位于 [website](./website)，网站内容位于 [docs](./docs)

## 项目运行

### 初始化

```bash
cd website
yarn
yarn start
```

### 开发模式运行

```bash
cd website
yarn start
```

### 编译并在本地测试

```bash
cd website
yarn build
node nginx
```

### 发布为 steedos.github.io

```bash
cd website
set GIT_USER=hotlong
yarn deploy
```

## Markdown 语法

### Markdown 文件头

Markdown 文件头部分用来控制网页的显示。

- title: 网页标题
- sidebar_label: 左侧导航标题
- hide_title: 隐藏标题
- hide_table_of_contents: 隐藏右侧导航
- image: 图片
- background: 背景图，显示在菜单以下。
- description: 网页描述，显示在搜索引擎中，如果未定义，取 Markdown 正文的第一行。
- keywords: 关键词，数组，是搜索引擎建立索引的重要参数。搜索引擎也会考虑 title 和 description

```markdown
---
title: 审批王：快速部署、有效监控并持续优化各类业务流程
sidebar_label: 概览
hide_table_of_contents: true
background: /img/banner/service-overview-lg.png
description: 审批王是开源业务流程开发工具，提供图形化的表单与流程设计界面，可以快速地将公司各类审批业务转换为可严格执行的电子流程。
keywords:
  - 审批王
  - BPM
---
```

## 问题处理

### theme 不生效

可能是 webpack 缓存所致，删除 node_modules/.cache