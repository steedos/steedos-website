---
title: 登录
---

调用用户登录接口，获取用户登录信息。

以下示例需确认 Steedos 服务 运行于 http://localhost:5000 。

### URL

```js
POST 'http://localhost:5000/accounts/password/login'
```

### 请求参数

以 JSON 格式传入请求参数。

|  Param   |  Required   | Type  | Description  |
|  ----  |  ----  |  ----  |  ----  |
|  user   | true  | string | 可传入用户名、邮箱或手机号 |
|  password   | true  | string | 用户密码 |
|  spaceId   | false  | string | 需要登录的工作区 Id，如果不传入，自动选中第一个工作区 |

示例如下：

```json
POST：http://192.168.0.95:5080/accounts/password/login

{
  "user": "yinlianghui@hotoa.com",
  "password": "123456",
  "spaceId": "KCBjAEGRNQbfMBSpu"
}
```

### Body 返回结果

如果登录成功，Body 返回 userContext 对象。

```yaml
{
    "sessionId": "60139cd4a31008d9b075b74e",
    "token": "5b99cb8a226395c8c42f5ad839c2f1d3ceb738012a01c3d7f0c13c922a2969c911ac40d6ad8085cdecabf1",
    "tokens": {
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTE4OTgwNjgsImV4cCI6MTYxMjUwMjg2OH0.gvHgtZ45J4UwgAA7UMPNnIvT9YqgE1s6DzpA3urz7_I",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRva2VuIjoiNWI5OWNiOGEyMjYzOTVjOGM0MmY1YWQ4MzljMmYxZDNjZWI3MzgwMTJhMDFjM2Q3ZjBjMTNjOTIyYTI5NjljOTExYWM0MGQ2YWQ4MDg1Y2RlY2FiZjEiLCJpc0ltcGVyc29uYXRlZCI6ZmFsc2UsInVzZXJJZCI6IjVmZGJlMmE2NzQ0N2ZmMTFlZDU4NTFlNSJ9LCJpYXQiOjE2MTE4OTgwNjgsImV4cCI6MTYxOTY3NDA2OH0.MFvxalr2DA3AS39Ehstq4x_4rpm66Uhxgs2tv449nyM"
    },
    "user": {
        "_id": "5fdbe2a67447ff11ed5851e5",
        "name": "Litant",
        "locale": "zh-cn",
        "verifyCode": "",
        "created": "2020-12-17T22:58:46.908Z",
        "modified": "2020-12-17T22:58:46.908Z",
        "email": "yinlianghui@hotoa.com",
        "email_verified": null,
        "emails": [
            {
                "address": "yinlianghui@hotoa.com",
                "verified": null
            }
        ],
        "steedos_id": "5fdbe2a67447ff11ed5851e5",
        "utcOffset": 8,
        "last_logon": "2021-01-29T05:19:07.666Z",
        "lockout": false,
        "login_failed_number": 0,
        "id": "5fdbe2a67447ff11ed5851e5"
    }
}
```
