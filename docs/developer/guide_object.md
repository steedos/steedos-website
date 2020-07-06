---
title: 配置业务对象
---

Steedos 的神奇之处正在于此，你只需要修改业务对象配置文件并重新启动服务，整个系统的功能都会自动随之变化。

如果你不需要相关的业务对象，直接删除即可。

## 创建业务对象：合同

在src项目源码中创建一个名为contracts.object.yml文件，开头配置以下内容：

```bash
name: contracts
label: 合同
icon: contract
```
## 添加字段：合同名称、合同编号、合同金额...

在contracts.object.yml中，继续配置相关字段:

```bash
fields:
  name:
    label: 合同名称
    type: text
    required: true
    searchable: true
    index: true
    is_wide: true
  "no":
    type: autonumber
    formula: "{YYYY}-{000} "
    label: 合同编号
    sortable: true
    filterable: true
    omit: true
    readonly: true
  othercompany:
    type: text
    label: 业务伙伴
    searchable: true
    required: true
  create_date:
    label: 登记日期
    type: date
    sortable: true
    filterable: true
    defaultValue: "{now}"
  bop:
    type: select
    label: 收支类别
    options:
      - label: 付款合同
        value: 付款合同
      - label: 收款合同
        value: 收款合同
    allowedValues:
      - 付款合同
      - 收款合同
    required: true
    defaultValue: 收款合同
  subject:
    type: textarea
    label: 合同主要内容
    is_wide: true
  amount:
    label: 合同金额
    type: number
    scale: 2
    required: true
    sortable: true
  contract_state:
    type: select
    label: 合同状态
    searchable: true
    options:
      - label: 审批中
        value: pending
      - label: 已核准
        value: approved
      - label: 已驳回
        value: rejected
      - label: 已取消
        value: terminated
      - label: 已签订
        value: signed
      - label: 已归档
        value: archived
      - label: 已作废
        value: droped
      - label: 已完成
        value: completed
 ```

## 设置视图：所有合同

在contracts.object.yml中，继续配置业务对象的视图:

```bash
list_views:
  all:
    label: 所有合同
    columns:
      - field: create_date
        width: 120
        wrap: true
      - field: name
        width: 280
        wrap: true
      - field: othercompany
        width: 200
      - field: amount
        width: 120
      - field: contract_type
        width: 120
      - field: bop
        width: 120
      - field: start_date
        width: 120
      - field: end_date
        width: 120
      - field: owner
        width: 120
    filter_scope: space
    filter_fields:
      - contract_type
      - signed_date
      - othercompany
      - contract_state
    sort:
      - - create_date
        - desc
```

## 新增视图：我的合同

```bash
mine:
    label: 我的合同
    filter_scope: mine
    filter_fields:
      - contract_type
      - signed_date
      - othercompany
      - contract_state
    sort:
      - - create_date
        - desc
```

## 定义权限

在contracts.object.yml中，继续配置业务对象的权限集:普通用户只能查看自己的合同，合同管理员和系统管理员可以查看所有合同

```bash
permission_set:
  user:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: false
    viewAllRecords: false 
  contract_manager:
    allowCreate: true
    allowEdit: true
    allowDelete: true
    allowRead: true
    modifyAllRecords: true
    viewAllRecords: true
  admin:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: true
    viewAllRecords: true
```

## 修改应用：增加合同

修改src下的oa.app.yml，增加：合同 contracts

```bash
objects: 
  - contracts 
  - instances
  - cms_posts
  - announcements
  - space_users
  - tasks
  - events
```

## 运行并查看效果

![合同](/assets/contract/contract.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程2、配置业务对象](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson2) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson2
yarn
```

### 启动教程2项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程2项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程2项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
