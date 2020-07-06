---
title: 业务对象关联
---

## 创建业务对象：付款计划

在src项目源码中新建文件夹contract，将contracts.object.yml移动到该目录，并创建一个名为contract_payments.object.yml文件，开头配置以下内容：

``` bash
name: contract_payments
label: 付款计划
icon: orders
enable_follow: true
```

## 添加字段

在contract_payments.object.yml中，继续配置此对象包含的字段:

``` bash
fields:
  name:
    label: 名称
    type: text
    required: true
    searchable: true
    is_wide: true
    name: name
  amount_description:
    label: 付款说明
    type: textarea
    is_wide: true
    name: description
    rows: 2
  amount:
    label: 付款金额
    type: currency
    required: true
    sortable: true
    name: amount
  due_date:
    label: 计划付款时间
    type: date
    sortable: true
    name: due_date
  contract:
    label: 合同
    type: master_detail
    reference_to: contracts
    required: true
    sortable: true
    name: contract
    filterable: true
```

## 配置视图：所有付款计划、最近查看

在contract_payments.object.yml中，继续配置此对象的2个视图:

``` bash
list_views:
  all:
    label: 所有
    columns:
      - contract
      - name
      - amount
      - due_date
    filter_scope: space
    sort:
      - - due_date
        - desc
  recent:
    label: 最近查看
    filter_scope: space
```

## 定义权限

在contracts.object.yml中，继续配置此对象的权限集:普通用户只能查看自己的合同，合同管理员和系统管理员可以查看所有的合同

``` bash

permission_set:
  user:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: false
    viewAllRecords: false
  admin:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: true
    viewAllRecords: true
```

## 修改默认应用：去掉合同

修改src下的oa.app.yml（即华炎办公）,删除：合同 contracts

```bash
sort: 100
objects: 
  - instances
  - cms_posts
  - announcements
  - space_users
  - tasks
  - events
mobile_objects: 
  - instances
  - cms_posts
  - announcements
  - space_users
  - tasks
  - events
```

## 新建自定义应用：合同

src下，增加文件contract.app.yml,增加：合同 contracts、付款计划 contract_payments

```bash
_id: contracts
name: 合同
description: 合同、付款计划。
icon_slds: approval
is_creator: true
sort: 200
objects: 
  - contracts
  - contract_payments
mobile_objects:
  - contracts
  - contract_payments
```

## 重启服务运行并查看效果

![合同应用](/assets/guide_5.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程3、业务对象关联](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson3) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson3
yarn
```

### 启动教程3项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程3项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程3项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
