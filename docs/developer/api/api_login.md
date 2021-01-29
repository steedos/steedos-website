---
title: 登录
---

以下示例需确认 Steedos 服务 运行于 http://localhost:5000 。

调用用户登录接口，获取用户登录信息。

### URL

```js
POST 'http://localhost:5000/api/v4/users/login'
```

### 请求参数

通过 Header Authorization 传入 API Key 的值。

例如：

```shell
Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

### 返回结果

如果当前用户登录的相关信息。
