---
title: 验证登录状态
---

调用 validate 接口，验证用户是否登录，如果用户已登录，则返回用户基本信息。

### URL

```js
POST 'http://localhost:5000/api/v4/users/validate'
```

### 请求参数

通过 Header Authorization 传入 API Key 的值。

例如：

```shell
Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

### 返回结果

如果当前用户已登录，则返回 userContext。
