---
title: 总览
---

在华炎魔方中，您还可以使用API接口的形式来查询数据，目前有两种方式，分别为restful风格的OData API，以及更加简洁的GraphQL API。

## 接口验证

不论是使用哪种接口调用方式，都需要先进行接口的身份验证。华炎魔方采用API Key来作为 Token，可以使您更加方便地进行接口调用。不仅如此，您还可以实现单点登录、验证登录状态以及注销等功能，让您的使用更加地灵活与便捷。

### 获取 API Key

由于接口验证是以 API Key 作为 Token 进行验证，因此需要先获取 API Key。

默认以“ip：localhost”，“端口：5000”启动本地服务后，登录并打开页面：http://localhost:5000/app/admin/api_keys/grid/all， 点击右上角“创建API Key”，然后点击“复制API Key”即可获取 API Key。

### 设置 Header

获取到 API Key 之后设置在请求头 Header 当中就可以进行接口调用了。

```yml
Authorization : Bearer apikey,${apikey}
```

**${apikey}**： 获取到的 API Key。

例如：

```yml
Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd
```

## OData

OData协定（Open Data Protocol），它是一个开源的协定，以简单和标准的方法，来建造或消除可查询和可操作的RESTful API。这个协定开启了REST API的消涨，允许资源使用URL来识别并且定义在资料模型中，借由简单的HTTP讯息, 能够被网络上的客户端发行及编辑。它和JDBC以及ODBC类似，但是OData不局限在关联式数据库。

详情见[OData API](/developer/api/odata)

## GraphQL

GraphQL相较于REST以及其他web service架构提供了一种更加高效、强大和灵活的开发web APIs的方式。它通过由客户端根据所需定义数据结构，同时由服务端负责返回相同数据结构的对应数据的方式避免了服务端大量冗余数据的返回，但与此同时也意味着这种方式不能有效利用起查询结果的web缓存。GraphQL这种查询语言所带来的灵活性和丰富性的同时也增加了复杂性，导致简单的APIs有可能并不适合这种方式。GraphQL支持数据读取、写入（操作）和数据变更订阅（实时更新）。

详情见[GraphQL API](/developer/api/graphql)
