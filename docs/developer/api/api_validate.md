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

示例如下：

```yml
 curl \
   -X POST：http://192.168.0.95:5080/api/v4/users/validate
   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

返回结果：

```yml
{
    "authToken": "apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd",
    "spaceId": "KCBjAEGRNQbfMBSpu",
    "userId": "5fdbe2a67447ff11ed5851e5",
    "name": "Litant",
    "email": "yinlianghui@hotoa.com",
    "utcOffset": 8,
    "steedos_id": "5fdbe2a67447ff11ed5851e5",
    "locale": "zh-cn",
    "roles": [
        "admin"
    ],
    "space": {
        "_id": "KCBjAEGRNQbfMBSpu",
        "name": "HOTOA",
        "admins": [
            "5fdbe2a67447ff11ed5851e5"
        ]
    },
    "spaces": [
        {
            "_id": "KCBjAEGRNQbfMBSpu",
            "name": "HOTOA"
        }
    ],
    "company": {
        "_id": "F5xsJeXJMW3XoGRkX",
        "name": "HOTOA",
        "organization": "F5xsJeXJMW3XoGRkX"
    },
    "companies": [
        {
            "_id": "F5xsJeXJMW3XoGRkX",
            "name": "HOTOA",
            "organization": "F5xsJeXJMW3XoGRkX"
        }
    ],
    "organization": {
        "_id": "F5xsJeXJMW3XoGRkX",
        "name": "HOTOA",
        "fullname": "HOTOA",
        "company_id": "F5xsJeXJMW3XoGRkX"
    },
    "organizations": [
        {
            "_id": "F5xsJeXJMW3XoGRkX",
            "name": "HOTOA",
            "fullname": "HOTOA",
            "company_id": "F5xsJeXJMW3XoGRkX"
        }
    ],
    "is_space_admin": true,
    "company_id": "F5xsJeXJMW3XoGRkX",
    "company_ids": [
        "F5xsJeXJMW3XoGRkX"
    ],
    "permission_shares": []
}
```
