---
title: 多分部权限控制
---

## 现状与目标

### 现状

在之前的课程中，我们已经定义了合作伙伴、合同这两个业务对象，同时也对业务对象的权集进行了定义。

合作伙伴的权限集定义如下：

```bash
permission_set:
  user:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: true
    viewAllRecords: true
```

因此，对于所有用户（user），可以查看并修改所有记录，也可以新建、修改、删除自己的记录。

合同的权限集定义如下：

``` bash
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

因此，不同层级的用户的权限有所不同：
 - 系统管理员（admin），可以查看并修改所有合同，也可以新建、修改、删除自己的合同。
 - 合同管理员（contract_manager），可以查看并修改所有合同，也可以新建、修改、删除自己的合同。
 - 其他的普通用户（user），可以查看、新建、修改、删除自己的合同，但不能查看/修改其他人的合同。

### 目标：各分部管控各自合同

按现状，特殊权限的人员（合同管理员、系统管理员）可以看到公司的所有合同。如果组织相对复杂，总公司下辖多个分公司（分部），这时，所有的账户要看到自己的合同、要么看到整个公司的合同。如果能实现按分公司（分部）的管控，更合理也更方便。

具体思路包括：

 - 对于合作伙伴，改为由各分部的合同管理员来维护（新建、修改、删除）。除管理员外的其他人员，只能看到本分部范围内的合作伙伴，而看不到其他分部的合作伙伴。

 - 对于合同，用户可维护（新建、修改、删除）自己的合同、但看不本分部的其他合同及外分部的合同；合同管理员可维护本分部的所有合同、但看不到外分部的合同；管理员可维护所有分部的所有合同。

华炎的解决方案就包含了分分部的管理模式，我们一起看下具体的做法。

> 请注意，要启用本文涉及的多分部权限控制的功能，请与华炎魔方签署使用协议，并将授权文件加入到项目中。

## 修改合作伙伴

### 启用分部字段

在accounts.object.yml中，启用默认的所属分部字段company_id 。

```bash
fields:
  company_id:
    label: 所属分部
    required: true
    omit: false
    hidden: false
    sortable: true
```

### 视图中显示分部字段

在accounts.object.yml中，修改视图配置。

```bash
list_views:
  all:
    label: 所有业务伙伴
    columns:
      - name
      - priority
      - owner
      - company_id
      - modified
    filter_scope: space
```

### 修改权限控制

修改accounts.object.yml中的权限集设置。

```bash
permission_set:
  user:
    allowCreate: false
    allowDelete: false
    allowEdit: false
    allowRead: true
    viewCompanyRecords: true
    modifyCompanyRecords: false
    modifyAllRecords: false
    viewAllRecords: false 
  contract_manager:
    allowCreate: true
    allowEdit: true
    allowDelete: true
    allowRead: true
    viewCompanyRecords: true
    modifyCompanyRecords: true
    modifyAllRecords: false
    viewAllRecords: false
  admin:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    viewCompanyRecords: true
    modifyCompanyRecords: true
    modifyAllRecords: true
    viewAllRecords: true
```

不同层级的用户的权限有所不同：
 - 管理员（admin），可以查看并修改所有分部的所有合作伙伴，也可以新建、修改、删除自己的合作伙伴。
 - 合同管理员（contract_manager），可以查看并修改本分部的所有合作伙伴，也可以新建、修改、删除合作伙伴，但其他分部的合作伙伴不能查看/修改。
 - 其他的普通用户（user），可以查看本分部的所有合作伙伴但不能修改，不可以新建、修改、删除合作伙伴，更不能查看/修改其他分部的合作伙伴。

## 修改合同

### 启用分部字段

在contracts.object.yml中，启用默认的所属分部字段company_id 。

```bash
fields:
  company_id:
    label: 所属分部
    required: true
    omit: false
    hidden: false
    sortable: true
```

### 视图中显示分部字段

在contracts.object.yml中，修改视图配置。

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
      - field: company_id
        width: 120
    filter_scope: space
    filter_fields:
      - company_id
      - contract_type
      - signed_date
      - othercompany
      - contract_state
    sort:
      - - create_date
        - desc
```

### 修改权限控制

修改contracts.object.yml中的权限集设置。

```bash
permission_set:
  user:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    viewCompanyRecords: false
    modifyCompanyRecords: false
    modifyAllRecords: false
    viewAllRecords: false 
  contract_manager:
    allowCreate: true
    allowEdit: true
    allowDelete: true
    allowRead: true
    viewCompanyRecords: true
    modifyCompanyRecords: true
    modifyAllRecords: false
    viewAllRecords: false
  admin:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    viewCompanyRecords: true
    modifyCompanyRecords: true
    modifyAllRecords: true
    viewAllRecords: true
```

不同层级的用户的权限有所不同：
 - 管理员（admin），可以查看并修改所有分部的所有合同，也可以新建、修改、删除自己的合同。
 - 合同管理员（contract_manager），可以查看并修改本分部的所有合同，也可以新建、修改、删除合同，但其他分部的合同不能查看/修改。
 - 其他的普通用户（user），可以查看并修改自己的合同，不可以查看本分部的其他合同，也不能查看其他分部的合同。

## 重启服务

重启服务后，业务对象的上述配置修改才会生效。

## 多分部的设置

为确认效果，首先要在前台页面中进行相应设置。

### 配置分部

可以在设置的分部里新建分部，并与部门关联。

![分部](/assets/lesson_companies.png)

### 配置人员所属分部

无需特别配置，部门的所属人员会自动赋值所属分部。

![分部](/assets/lesson_orgnizations.png)

### 配置权限集对应的人员

在权限集里，新增权限集contract_manager（合同管理员），并加进各分部的合同管理员。

![分部](/assets/lesson_permissionsets.png)

## 确认权限控制的效果

用不同的账户进去，就可以看到不同的效果。

### 确认普通用户的权限

普通用户登陆后，可看到本分部的合作伙伴。

![合作伙伴](/assets/lesson_accounts_user.png)

可看到自己的合同，也能新建合同。

![合同](/assets/lesson_contracts_user.png)

新建合同时，所属分部默认为本人的所属分部。

### 确认合同管理员的权限

各分部的合同管理员登陆后，可看到本分部的合作伙伴和合同。

![合作伙伴](/assets/lesson_accounts_cm.png)

![合同](/assets/lesson_contracts_cm.png)

### 确认系统管理员的权限

系统管理员登陆后，可看到所有分部的合作伙伴和合同。

![合作伙伴](/assets/lesson_accounts_m.png)

![合同](/assets/lesson_contracts_m.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程9、多分部权限控制](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson9) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson9
yarn
```

### 启动教程9项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程9项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程9项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
