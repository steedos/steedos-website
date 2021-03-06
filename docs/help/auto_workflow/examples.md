---
title: 工作流示例
---

想要寻找方法让工作流规则帮助简化业务？观看这些示例。

## 自动启用新用户

- **对象：** 用户
- **描述：** 确保每个新用户为启用状态，以便用户可登录到华炎魔方。
- **评估条件：** 当记录进行以下操作时验证规则：新建时。
- **规则条件：** 公式：`active <> TRUE`
- **即时操作：** 字段更新：将启用设置为“真 (True)”。

  - *要更新的对象：用户*
  - *要更新的字段：active*
  - *新字段值类型：特定值*
  - *指定新字段值：勾选勾选框*

## 设置默认业务机会名称

一些公司的业务机会命名习惯是“客户名: 业务机会名称”。要在贵组织中自动确定每个业务机会的默认名称，请创建下列工作流规则。

- **对象：** 业务机会
- **描述：** 强制业务机会命名约定。
- **评估条件：** 当记录进行以下操作时验证规则：新建时，或编辑数据导致条件成立
- **规则条件：** 公式：`NOT(CONTAINS( Name, Account.Name ))`
- **即时操作：** 字段更新：将业务机会名称设置为指定公式值。

  - *要更新的对象：业务机会*
  - *要更新的字段：Name*
  - *新字段值类型：使用公式设置新值*
  - *公式：`Account.Name & ": " & Name`*

## 为个案设置目标解决日期

本示例会根据关联客户上的字段值设置个案解决日期。将会把客户对象上的“支持级别”字段设置为自定义选项列表字段，其中包含 3 个值：基础、标准和高级。此外，个案对象上的“目标解决日期”字段也是自定义日期字段。

使用下列三个工作流规则示例，以根据相关客户的支持级别设置个案的目标解决日期。

**a.设置基本支持的解决日期**

- **对象：** 个案
- **描述：** 为享受基本支持的客户设置个案目标解决日期：从现在起 30 日内。
- **评估条件：** 当记录进行以下操作时验证规则：新建时。
- **规则条件：**公式：`Account.Support_Level__c = "Basic"`
- **即时操作：**字段更新：设置目标解决日期为指定公式值。

  - *要更新的对象：个案*
  - *要更新的字段：Closed_Date__c*
  - *新字段值类型：使用公式设置新值*
  - *公式：`Today() + 30`*

**b.设置标准支持的解决日期**

- **对象：** 个案
- **描述：** 为享受标准支持的客户设置个案目标解决日期：从现在起 14 日内。
- **评估条件：** 当记录进行以下操作时验证规则：新建时。
- **规则条件：** 公式：`Account.Support_Level__c = "Standard"`
- **即时操作：** 字段更新：设置目标解决日期为指定公式值。

  - *要更新的对象：个案*
  - *要更新的字段：Closed_Date__c*
  - *新字段值类型：使用公式设置新值*
  - *公式：`Today() + 14`*

**c.设置高级支持的解决日期**

- **对象：** 个案
- **描述：** 为享受高级支持的客户设置个案目标解决日期：从现在起 5 日内。
- **评估条件：** 当记录进行以下操作时验证规则：新建时。
- **规则条件：** 公式：`Account.Support_Level__c = "Premium"`
- **即时操作：** 字段更新：设置目标解决日期为指定公式值。

  - *要更新的对象：个案*
  - *要更新的字段：Closed_Date__c*
  - *新字段值类型：使用公式设置新值*
  - *公式：`Today() + 5`*

## 候选人接受作业时更新应用程序记录

此工作流规则会在候选人接受任务时关闭应用程序记录。在主表/子表关系中的对象之间支持跨对象字段更新到主记录。

- **对象：** 候选人
- **描述：** 当自定义“候选人”对象的候选人状态字段更改为“已接受”时，为自定义“应用程序”对象将应用程序状态字段更改为“已关闭”。
- **评估条件：** 当记录进行以下操作时验证规则：新建时，或编辑数据导致条件成立
- **规则条件：** 公式：`Status = "Accepted"`
- **即时操作：** 字段更新：在父“应用程序”记录上更改应用程序状态字段为“已关闭”。

  - *要更新的对象：应用程序*
  - *要更新的字段：Status*
  - *新字段值类型：特定值*
  - *指定新字段值：选择框中选择“已关闭”选项*

## 覆盖默认业务机会结束日期

- **对象：** 业务机会
- **描述：** 将默认结束日期从该季度结束改写为业务机会创建后的 6 个月。
- **评估条件：** 当记录进行以下操作时验证规则：新建时
- **规则条件：**公式：`Closed = false`
- **即时操作：**字段更新：使用指定公式将业务机会关闭日期设置为创建日期之后六个月。

  - *要更新的对象：业务机会*
  - *要更新的字段：Close_Date*
  - *新字段值类型：使用公式设置新值*
  - *公式：`DATE( YEAR(TODAY()) , (MONTH(TODAY()) + 6), DAY(TODAY()))`*
