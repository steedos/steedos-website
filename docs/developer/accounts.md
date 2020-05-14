---
title: 账户管理
---

**华炎魔方**支持**SAAS**多租户的运行模式。

- 一个公司对应一个工作区。
- 每个人对应一个用户，一个用户可以属于多个工作区。
- 用户可以编辑自己的信息，工作区管理员可以编辑工作区中的所有用户信息。

## 数据结构

### spaces 工作区（企业）

- name 工作区名称

### users 用户

- name 姓名
- username 用户名
- email: 邮箱
- mobile_verified: 邮件已校验
- mobile: 手机号
- mobile_verified: 手机已校验
- locale: 语言: zh-cn, en-us
- avatar: 头像
- last_logon: 最近登录时间，用户登录时，所有工作区同步设置。
- email_notification: 开启邮件通知
- sms_notification: 开启短信通知
- utcOffset

### space_user 工作区用户

- name 姓名，必填
- username 用户名
- email 邮件，必填
- email_verified 邮件已校验
- mobile 手机
- mobile_verified 手机已校验
- locale 语言: zh-cn, en-us
- avatar: 头像
- last_logon: 最近登录时间，用户登录时，所有工作区同步设置。
- email_notification: 开启邮件通知
- sms_notification: 开启短信通知
- user_accepted: 有效。工作区管理员可以修改

## 用户注册
### 密码注册
配置文件[steedos-config.yml](/developer/steedos_config#登录界面配置)中按照以下方式配置: 
```yml
...
tenant:
  ...
  enable_register: true
  enable_create_tenant: true
  enable_password_login: true
  enable_bind_email: false 
  enable_bind_mobile: false
...
```
### 邮箱+验证码注册
配置文件[steedos-config.yml](/developer/steedos_config#登录界面配置)中按照以下方式配置: 
```yml
...
tenant:
  ...
  enable_register: true
  enable_create_tenant: true
  enable_password_login: true
  enable_bind_email: true 
  enable_bind_mobile: false
...
```
### 手机号+验证码注册
配置文件[steedos-config.yml](/developer/steedos_config#登录界面配置)中按照以下方式配置: 
```yml
...
tenant:
  ...
  enable_register: true
  enable_create_tenant: true
  enable_password_login: true
  enable_bind_email: false 
  enable_bind_mobile: true
...
```
## 用户登录
### 密码登录
配置文件[steedos-config.yml](/developer/steedos_config#登录界面配置)中按照以下方式配置: 
```yml
...
tenant:
  ...
  enable_password_login: true
...
```
### 邮箱+验证码登录
配置文件[steedos-config.yml](/developer/steedos_config#登录界面配置)中按照以下方式配置: 
```yml
...
tenant:
  ...
  enable_forget_password: true
...
```
### 手机号+验证码登录
```yml
...
tenant:
  ...
  enable_forget_password: true
  enable_bind_mobile: true
...
```

## 创建企业

用户第一次登录时，如果不属于任何企业，系统会提示创建一个企业。当前用户自动成为新企业的管理员。

## 企业邀请用户注册

使用企业管理员账户登录系统，点击 设置 -> 公司设置 -> 部门与用户。
点击用户列表右上角的"邀请注册"会自动复制邀请链接到粘贴板，通过邮件或微信发送，邀请本公司员工注册。使用邀请链接注册的用户会自动加入此企业。

## 管理员添加用户

- 如果邮件重复，禁止新增
- 如果手机重复，禁止新增
- 如果用户名重复，禁止新增

## 修改用户

管理员可以修改用户的所有信息，包括姓名、用户名、手机、邮箱、密码等。本人也可以在设置界面中自己修改。

管理员/用户修改的都是 space_user 表，自动同步到 users 表对应的字段。

### 修改邮件

- space_user.email 字段唯一，修改时同时更新 user.email, user.emails 字段
- 如果邮件有修改，user.emails.verified及space_user.email_verified 设置为 false
- 如果新邮件地址未验证，给用户邮箱发送邮件，验证邮件地址。
- 如果邮件地址验证通过，则更新 user.email 字段

### 修改手机

- space_user.mobile 字段唯一，修改时同时更新 user.mobile 字段
- 如果手机号有修改，user.mobile_verified及space_user.mobile_verified 设置为 false
- 如果手机号码验证通过，则更新 user.mobile_verified及space_user.mobile_verified 设置为 true

## 管理员删除用户

管理员禁止删除用户，只能设置为无效。
