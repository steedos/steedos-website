---
title: 多租户架构介绍
---

## 概念

多租户技术，简称 SaaS，是一种软件架构技术，是实现如何在多用户环境下（此处的多用户一般是面向企业用户）共用相同的系统或程序组件，并且可确保各用户间数据的隔离性。

多租户技术可以实现多个租户之间共享系统实例，同时又可以实现租户的系统实例的个性化定制。通过使用多租户技术可以保证系统共性的部分被共享，个性的部分被单独隔离。通过在多个租户之间的资源复用，运营管理维护资源，有效节省开发应用的成本。而且，在租户之间共享应用程序的单个实例，可以实现当应用程序升级时，所有租户可以同时升级。同时，因为多个租户共享一份系统的核心代码，因此当系统升级时，只需要升级相同的核心代码即可。

## 实现方式

华炎魔方就是基于 SaaS 架构采用共享数据库，共享数据架构，通过 TenantID 区分租户的方案实现，具有维护和购置成本低，允许数据库支持的租户数量多的优点。

## 多租户数据分离

华炎魔方 SaaS 版本可以把用户划分为不同的工作区（企业），每个工作区可以配置独立的组织机构和权限控制。业务人员录入的每一条业务数据都会自动加入 space 属性，用于标记所属的工作区，如：

工作区表（spaces）结构：

```yml
  _id:
    label: ID
    type: text
    required: true
  name:
    label: Name
    type: text
    defaultValue: ''
    description: ''
    inlineHelpText: ''
    required: true
    searchable: true
    index: true
  ... ...
```

组织架构表（organizations）结构：

```yml
  _id:
    label: ID
    type: text
    required: true
  name:
    label: Name
    type: text
    defaultValue: ''
    description: ''
    inlineHelpText: ''
    required: true
    searchable: true
    index: true
  space: # 这个字段的值就是spaces._id的值，由系统内核维护
    type: text
    label: Space
    reference_to: spaces
    index: true
    hidden: true
    required: true
  ... ...
```

## 工作区（租户）

工作区可以理解为系统分配给租户单独的数据存贮空间，工作区之间互不干扰，是华炎魔方的基本组成单位。

- 一个公司对应一个工作区。
- 每个人对应一个用户，一个用户可以属于多个工作区。
- 用户可以编辑自己的信息，工作区管理员可以编辑工作区中的所有用户信息。
- 管理员可以设置公司信息、定制业务对象和业务流程。

### 创建工作区

如果用户没有 Steedos 账户，可以自主[注册](https://cn.steedos.com/)用户(users)账户。

用户注册时必须输入邮箱，Steedos 会自动给用户发送验证邮件。

用户第一次登录时，如果不属于任何工作区，系统会提示创建一个工作区。当前用户自动成为新工作区的管理员。

用户也可以手工创建新的工作区。

### 工作区邀请用户注册

工作区可以生成邀请用户的链接，通过邮件或微信发送，邀请本公司员工注册。使用邀请链接注册的用户会自动加入此工作区，接受邀请字段自动为 true。
`/accounts/a/#/space_invite?X-Space-Id=xxx`

- 如果当前用户已登录，自动加入此工作区，并显示 Steedos 首页，选中此工作区。
- 如果当前用户未登录
  - 如果你已有账户？[登录]，登录后自动加入此工作区
  - 显示用户注册界面，注册后自动加入此工作区
