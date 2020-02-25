---
title: 账务系统
---

Steedos 支持SAAS多租户的运行模式。

- 一个公司对应一个工作区。
- 每个人对应一个用户，一个用户可以属于多个工作区。
- 用户可以编辑自己的信息，工作区管理员可以编辑工作区中的所有用户信息。

## 数据结构

### spaces 工作区（租户）

- name 工作区名称

### users 用户

- name 姓名
- username 用户名
- emails
  - address 邮件
  - verified 邮件已验证
- email
- mobile
- username
- utcOffset
- locale 语言: zh-cn, en-us

### space_user 工作区用户

- name 姓名
- username 用户名
- email 邮件
- email_verified 邮件已校验
- mobile 手机
- mobile_verified 手机已校验
- locale 语言: zh-cn, en-us
- user_accepted: 有效。工作区管理员可以修改
- invite_state: pending/refused/accepted 接受邀请，加入此工作区
- last_logon: 最近登录时间，用户登录时，所有工作区同步设置。

## 用户注册

如果用户没有 Steedos 账户，可以自主注册用户(users)账户。

用户注册时必须输入邮箱，如果 Steedos 配置了`注册后发送邮件`参数，则会自动给用户发送验证邮件。

## 创建工作区

用户第一次登录时，如果不属于任何工作区，系统会提示创建一个工作区。当前用户自动成为新工作区的管理员。

用户也可以手工创建新的工作区。

## 工作区邀请用户注册

工作区可以生成邀请用户的链接，通过邮件或微信发送，邀请本公司员工注册。使用邀请链接注册的用户会自动加入此工作区，接受邀请字段自动为true。
/accounts/a/#/space_invite?X-Space-Id=xxx

- 如果当前用户已登录，自动加入此工作区，并显示 Steedos 首页，选中此工作区。
- 如果当前用户未登录
  - 如果你已有账户？[登录]，登录后自动加入此工作区
  - 显示用户注册界面，注册后自动加入此工作区

## 管理员添加用户

- 自动给用户邮箱发送邀请确认邮件：XXX邀请你加入华炎工作区：YYY
- 对于邮件地址未验证的用户，

## 修改用户

- 对于 SAAS 版，只有 invite_state == accepted ，管理员才能修改用户信息，否则提示：正在等待此用户加入此工作区，请提示对方查收邮件。
- 对于落地版，管理员可以随时修改用户信息。

管理员可以修改用户的所有信息，包括姓名、用户名、手机、邮箱、密码等。本人也可以在设置界面中自己修改。

管理员/用户修改的都是 space_user 表，users 表由系统自动维护，不提供修改界面。

### 修改邮件

- space_user.email 字段唯一，修改时同时更新 user.emails 字段
- 如果邮件有修改，user.emails.verified及space_user.email_verified 设置为 false
- 如果新邮件地址未验证，给用户邮箱发送邮件，验证邮件地址。
- 如果邮件地址验证通过，则更新 user.email 字段

### 修改手机

- space_user.mobile 字段唯一，修改时同时更新 user.phone 字段
- 如果手机号有修改，user.phone.verified及space_user.mobile_verified 设置为 false
- 如果手机号码验证通过，则更新 user.mobile 字段

### 修改用户名

- space_user.username 字段唯一，修改时同时更新 user.username 字段

### 邮件验证

- 用户可以在用户资料界面，点击邮件验证
- 点击系统发送邮件验证码到邮箱
- 用户输入邮件验证码，如果校验正确，邮件验证通过。

### 手机验证

同邮件验证

### 重置密码

管理员选择一个人员，可以点击重置密码按钮，系统自动发送重置密码链接到对应的邮箱中。

## 管理员删除用户

管理员禁止删除用户，只能设置为无效。
