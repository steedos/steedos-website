---
title: 注销
---

注销当前登录的用户。

### URL

```js
POST 'http://localhost:5000/accounts/logout'
```

### 请求参数

通过 Header Authorization 传入 API Key 的值。

例如：

```shell
Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

示例如下：

```yml
 curl \
   -X POST：http://192.168.0.95:5080/accounts/logout
   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

返回结果：

```yml
null
```
