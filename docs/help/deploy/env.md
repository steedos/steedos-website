---
title: 环境变量说明
---

本页面描述项目下.env 或.env.local 文件中可填写的环境变量，方便用户自定义访问地址、连接指定数据库、使用自己的邮件及短信服务等。

## 系统访问

```env
PORT=5080
ROOT_URL=http://127.0.0.1:5080/
```

PORT 是服务启动端口
ROOT_URL 是服务的访问地址

## 数据源

```env
MONGO_URL=mongodb://127.0.0.1:27017/steedos
```

MONGO_URL 是服务连接的数据库地址包含数据库地址及名称

## 魔方ID

```env
STEEDOS_TENANT_ID=519f004e8e296a1c5f00001d
```

STEEDOS_TENANT_ID 是企业 ID，值可从 设置-公司设置-许可证-复制魔方 ID 获得:

![安装mongodb](/assets/help/deploy/STEEDOS_TENANT_ID.png)

## 邮件服务

```env
MAIL_FROM=华炎魔方 <noreply@steedos.com>
MAIL_URL=smtps://username:password@email-smtp.us-east-1.amazonaws.com:465/
```

MAIL_FROM 是邮件发送者
MAIL_URL 是邮件服务相关参数，包括账号、密码、邮件服务地址、端口，格式为 `smtps://USERNAME:PASSWORD@HOST:PORT`

## 短信服务

```env
STEEDOS_SMS_QCLOUD_SDKAPPID=
STEEDOS_SMS_QCLOUD_APPKEY=
STEEDOS_SMS_QCLOUD_SIGNNAME=
```

使用的是腾讯云短信服务
STEEDOS_SMS_QCLOUD_SDKAPPID 是应用 ID
STEEDOS_SMS_QCLOUD_APPKEY 是分配的密钥
STEEDOS_SMS_QCLOUD_SIGNNAME 是短信签名显示在短信的开头，如:【华炎云】您的验证码是：8888
