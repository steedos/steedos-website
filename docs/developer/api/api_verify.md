---
title: 接口验证
---

调用 Steedos API 需要进行先接口验证。

## 获取 API Key

接口验证是根据 API Key 进行验证，因此需要先获取 API Key。

启动本地服务后，登录并打开页面：http://localhost:5080/app/admin/api_keys/grid/all， 点击右上角“创建API Key”，然后点击“复制API Key”即可获取 API Key。

## 设置 Header

获取到 API Key 之后设置在请求头 Header 当中就可以进行接口调用了。

```yml
Authorization : apikey,${apikey}
```

**${apikey}**： 获取到的 API Key。

例如：

```yml
Authorization : apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```
