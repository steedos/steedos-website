---
title: 多单位权限控制
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

### 目标：不同单位管控各自的合同

按现状，特殊权限的人员（合同管理员、系统管理员）可以看到公司的所有合同。如果组织相对复杂，总公司下辖多个分公司（单位），这时，所有的账户要看到自己的合同、要么看到整个公司的合同。如果能实现按分公司（单位）的管控，更合理也更方便。

具体思路包括：

 - 对于合作伙伴，改为由各单位的合同管理员来维护（新建、修改、删除）。除管理员外的其他人员，只能看到本单位范围内的合作伙伴，而看不到其他单位的合作伙伴。

 - 对于合同，用户可维护（新建、修改、删除）自己的合同、但看不本单位的其他合同及外单位的合同；合同管理员可维护本单位的所有合同、但看不到外单位的合同；管理员可维护所有单位的所有合同。

华炎的解决方案就包含了分单位的管理模式，我们一起看下具体的做法。

## 修改合作伙伴

### 启用单位字段

在accounts.object.yml中，启用默认的所属单位字段company_id 。

```bash
fields:
  company_id:
    label: 所属单位
    required: true
    omit: false
    hidden: false
    sortable: true
```

### 视图中显示单位字段

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
 - 管理员（admin），可以查看并修改所有单位的所有合作伙伴，也可以新建、修改、删除自己的合作伙伴。
 - 合同管理员（contract_manager），可以查看并修改本单位的所有合作伙伴，也可以新建、修改、删除合作伙伴，但其他单位的合作伙伴不能查看/修改。
 - 其他的普通用户（user），可以查看本单位的所有合作伙伴但不能修改，不可以新建、修改、删除合作伙伴，更不能查看/修改其他单位的合作伙伴。

## 修改合同

### 启用单位字段

在contracts.object.yml中，启用默认的所属单位字段company_id 。

```bash
fields:
  company_id:
    label: 所属单位
    required: true
    omit: false
    hidden: false
    sortable: true
```

### 视图中显示单位字段

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
 - 管理员（admin），可以查看并修改所有单位的所有合同，也可以新建、修改、删除自己的合同。
 - 合同管理员（contract_manager），可以查看并修改本单位的所有合同，也可以新建、修改、删除合同，但其他单位的合同不能查看/修改。
 - 其他的普通用户（user），可以查看并修改自己的合同，不可以查看本单位的其他合同，也不能查看其他单位的合同。

## 重启服务

重启服务后，业务对象的上述配置修改才会生效。

## 多单位的设置

为确认效果，首先要在前台页面中进行相应设置。

### 配置单位

可以在设置的分部里新建单位，并与部门关联。

![单位](/assets/lesson_companies.png)

### 配置人员所属单位

无需特别配置，部门的所属人员会自动赋值所属单位。

![单位](/assets/lesson_orgnizations.png)

### 配置权限集对应的人员

在权限组里，新增权限组contract_manager（合同管理员），并加进各单位的合同管理员。

![单位](/assets/lesson_permissionsets.png)

## 确认权限控制的效果

用不同的账户进去，就可以看到不同的效果。

### 确认普通用户的权限

普通用户登陆后，可看到本单位的合作伙伴。

![合作伙伴](/assets/lesson_accounts_user.png)

可看到自己的合同，也能新建合同。

![合同](/assets/lesson_contracts_user.png)

新建合同时，所属单位默认为本人的所属单位。

### 确认单位的合同管理员的权限

合同管理员登陆后，可看到本单位的合作伙伴和合同。

![合作伙伴](/assets/lesson_accounts_cm.png)

![合同](/assets/lesson_contracts_cm.png)

### 确认系统管理员的权限

系统管理员登陆后，可看到所有单位的合作伙伴和合同。

![合作伙伴](/assets/lesson_accounts_m.png)

![合同](/assets/lesson_contracts_m.png)