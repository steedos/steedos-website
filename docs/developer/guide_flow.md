---
title: 设置合同审批流程
---

系统提供了功能强大的流程审批功能，能快速部署、有效监控并持续优化各类业务流程。通过图形化的表单与流程设计界面，可以快速地将公司各类审批业务转换为严格执行的电子流程。

## 配置表单

设计表单的操作就是对照实际的申请单，从系统中选择相应的字段类型，逐一添加，形成一张电子申请单的样式。

例如，对于我们要设置的合同审批流程而言，就是要配置处如下的合同审批单。

![合同审批单](/assets/guide_wf_instance.png)

### 配置表单包含的字段

在系统提供的“流程设计器”里，可完成表单的字段设置。

![表单字段](/assets/guide_wf_fields.png)

## 配置流程

设计完表单后，管理员要设计流程的走向，即文件的审批过程及每一步相应的处理人。这一系列的设置，仍然在“流程设计器”里进行操作。

### 配置流程包含的节点

每个审批环节我们称为“节点”，节点与节点之间用连线进行串联。

![流程节点](/assets/guide_wf_steps.png)

## 配置权限

### 配置流程的操作权限

![流程权限](/assets/guide_wf_operators.png)

### 配置节点的字段权限

![字段权限](/assets/guide_wf_stepfields.png)

## 运行合同审批流程

### 提交合同审批单

![提交](/assets/guide_wf_add.png)

### 处理合同审批单

![处理](/assets/guide_wf_approve.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程7、设置合同审批流程](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson7) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson7
yarn
```

### 启动教程7项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程7项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程7项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
