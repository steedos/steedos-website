---
title: 配置应用
---

将一组业务对象放在一起即构成一个应用，而应用可以把业务对象按功能、按业务类型进行分类。例如合同管理系统定义了以下应用：合同、付款、收款、设置等。应用描述文件必须以 .app.yml 结尾。

管理员可以针对应用进行授权，授权给具体的业务人员或是部门使用。

![电脑、手机界面展示](/assets/mac_mobile_list.png)

华炎标准模板项目内置了一个 [应用](./app.md) 描述文件 src/crm.app.yml ，您可以尝试修改此文件。

```yaml
_id: crm
name: 客户
description: 管理客户，以及相关的联系人、任务和日程。
icon_slds: folder
is_creator: true
objects:
  - accounts
  - contacts
  - tasks
  - events  
  - reports
mobile_objects:
  - accounts
  - contacts
  - tasks
  - events  
  - reports
```

示例应用中引用了以下业务对象：

- accounts
- contacts
- tasks
- events  
- reports

其中，tasks, events, reports 属于 steedos 内置的[标准业务对象](./standard_objects.md)，无需在项目中定义即可使用。

建议您增加引用instances，这样，在这个默认应用中就可以使用审批王系统来进行流程审批了。

```yaml
objects:
  - accounts
  - contacts
  - tasks
  - events  
  - reports
  - instances
```

修改应用描述文件之后，只需重新启动服务，即可生效。

那么例如合同管理系统，需要自定义菜单时，应该如何配置呢？比如，合同需要定义以下业务对象：首页、合同、签约对象、联系人、付款计划、收款计划、应付记录、应收记录、审批、任务、日程、报表等。

## 应用contract.app.yml

```yaml
_id: contracts
name: 合同
description: 合同、收付款、单位、联系人、任务、日历
icon_slds: approval
is_creator: true
objects: 
  - contracts_home
  - contracts
  - accounts
  - contacts
  - contract_payments
  - contract_receipts
  - account_payable
  - account_receivable
  - instances
  - tasks
  - events
  - reports
mobile_objects: 
  - contracts_home
  - instances
  - contracts
  - accounts
  - contacts
  - tasks
  - events
admin_menus:
  - _id: contracts
    name: 合同
    permission_sets:
      - admin
    expanded: false
  - _id: contract_types
    name: 合同分类
    object_name: contract_types
    parent: contracts
  - _id: department
    name: 经办部门
    object_name: department
    parent: contracts
  - _id: account_project
    name: 核算项目
    object_name: account_project
    parent: contracts
  - _id: currency
    name: 币种
    object_name: currency
    parent: contracts
  - _id: currency_rate
    name: 汇率
    object_name: currency_rate
    parent: contracts
  - _id: bank
    name: 银行
    object_name: bank
    parent: contracts
  - _id: bank_type
    name: 银行类别
    object_name: bank_type
    parent: contracts
  - _id: account_tax
    name: 税码
    object_name: account_tax
    parent: contracts
```

### _id

应用的API名称为contracts。

### 应用名称 name

应用在界面上的显示名称为合同。

### 应用图标 icon_slds

应用程序启动器的显示图标为approval，必须配置。

### 电脑端菜单 objects

使用数组格式定义此应用中显示的对象清单，系统按照定义的先后顺序显示为业务对象Tab，所以定义的首页、合同等和contracts_home、contracts一一对应。点击业务对象名称，进入业务对象列表界面。

除了可以配置当前项目中的业务对象，也可以配置系统内置的[标准业务对象](standard_objects.md)。

### 手机端菜单 mobile_objects

使用数组格式定义在手机端主菜单中显示的对象清单，系统按照定义的先后顺序显示为业务对象菜单。

### 自定义主数据 admin_menus

首先定义合同主数据API即_id为contracts，权限permission_sets为admin，即管理员可访问，可扩展的expanded为false；再定义每一个主数据的API即_id和字段名object_name为contract_types，名称name为合同分类，最后父节点parent为contracts，故该字段为合同下的主数据。

配置完成后，需重新启动服务，即可生效。显示效果如下：

![合同应用](/assets/contract_app_yml.png)