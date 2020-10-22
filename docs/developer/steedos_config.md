---
title: steedos-config
---

steedos-config.yml 用于配置系统参数，位于项目的根目录。

## 数据源

```yml
datasources:
  default:
    connection:
      url: mongodb://127.0.0.1/steedos

```

## 插件

配置当前项目中启用的插件。
> 请注意，在启用插件前，请确保插件源码通过 yarn add 的方式加入到项目中。

```yml
plugins:
  - "@steedos/app-contracts"
  - "@steedos/accounts"
```

## 登录界面配置

配置登录界面相关参数，例如是否允许注册、是否允许修改密码、是否允许创建企业。

```yml
tenant:
  _id:
  name: Steedos
  logo_url:
  background_url:
  saas: false
  enable_register: true
  enable_create_tenant: true
  enable_password_login: true
  enable_bind_email: false
  enable_bind_mobile: false
  enable_mobile_code_login: false
  enable_email_code_login: false
```

- enable_register: 允许创建账户，默认true
- enable_bind_mobile: 强制绑定邮箱，默认false
- enable_bind_email: 强制绑定邮箱，默认false
- enable_create_tenant: 允许创建企业，默认true
- enable_password_login: 允许使用密码登录，启用时，注册和登录都默认使用密码。默认true
- enable_mobile_code_login: 允许使用手机验证码登录，启用时，注册和登录都默认使用验证码。
- enable_email_code_login: 允许使用邮箱验证码登录，启用时，注册和登录都默认使用验证码。

## Web服务URL

```yml
services:
  steedos: /
```

## 文件存储

配置附件存储的相关参数。

附件可以保存在本地，也可以保存在阿里云或是AWS S3服务中。

```yml
public:
  cfs:
    storage: local
cfs:
  local:
    folder: /storage
  aliyun:
    region:
    internal: false,
    bucket:
    folder:
    accessKeyId:
    secretAccessKey:
  aws:
    region:
    bucket:
    folder:
    accessKeyId:
    secretAccessKey:
```

## 邮件配置

配置SMTP服务的相关参数，用于系统发送推送邮件。

```yml
email:
  host:
  port: 465
  username:
  password:
  secure: true
  from:
```

## 发送短信配置

配置手机短信服务，用于通过手机短信登录和接受账户提醒消息。

```yml
sms:
  qcloud:
    smsqueue_interval: 1000
    sdkappid:
    appkey:
    signname:
```

## 密码规则配置

配置密码的校验规则，例如最小长度，是否必须包含数字、大写字母、小写字母和字符。

```yml
password:
  minimum_length: 10
  lowercase: true
  number: true
  uppercase: true
  symbol: true
```

## 定时任务配置

配置定时任务的属性。

```yml
cron:
  statistics: 0 0 0 * * *
  mailqueue_interval: 1000
  push_interval: 1000
  calendar_dav_interval: 30000
  calendar_remind: 60000
  webhookqueue_interval: 1000
  instancerecordqueue_interval: 10000
```

- statistics: 流程统计的执行时间，如上面的“0 0 0 * * *”意为每天的00:00:00 
- mailqueue_interval: 邮件队列的轮询间隔(单位毫秒)
- push_interval: 消息推送的轮询间隔(单位毫秒)
- calendar_dav_interval: 日历同步的轮询间隔(单位毫秒)
- calendar_remind: 日程提醒的轮询间隔(单位毫秒)
- webhookqueue_interval: 流程触发器队列的轮询间隔(单位毫秒)
- instancerecordqueue_interval: 对象流程队列的轮询间隔(单位毫秒)