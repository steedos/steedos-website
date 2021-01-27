---
title: GraphQL 简介
---
<!-- 
当你在 Steedos 中配置了对象以后，Steedos 为你自动生成 [GraphQL](http://www.graphql.org/) API。

例如你定义了对象 Post

```yaml
name: Post
fields:
  name:
    type: String
  description:
    type: String
  isPublished:
    type: Boolean
  owner:
    label: Author
    type: master_detail
    reference_to: User
```

Steedos 自动生成以下 GraphQL Schema
```graphql
type User {
  id: ID,
  name: String
  username: String
}
type Post {
  id: ID
  name: String
  description: String
  isPublished: String
  author: User
}

type Query {
  Posts(where): [Post]
  Post(id: String): Post
}

type Mutation {
  createPost(data):Post
  updatePost(data):Post
  deletePost(id: String):Post
}
```

### 运行一个graphql服务器
- 使用`@steedos/objectql`包提供的方法`getSteedosSchema`获取到schema对象
- 使用schema对象的`addDataSource`方法添加数据源
- 添加好数据源之后调用`@steedos/objectql`包提供的`getGraphQLRoutes`方法获取`express.Router()`对象, 示例如下：
```js
import { getSteedosSchema, getGraphQLRoutes } from '@steedos/objectql';
import express = require('express');

let schema = getSteedosSchema();
// 添加默认数据源 default即为此数据源的name
schema.addDataSource('default', {
    driver: "mongo",
    url: 'mongodb://127.0.0.1:27017/steedos',
    objects: {
        post: {
            fields: {
                title: {
                    type: "text",
                    inlineHelpText: "fsdafas"
                }
            }
        }
    }
})
// 获取根据传入的datasource生成的express的router对象
let route = getGraphQLRoutes(schema.getDataSource('default'));

// 将获取的route绑定到自定义的express对象中
let app = express();
app.use('/customUrl', route);
app.listen(3000)
```
- 通过`http://localhost:3000/customUrl/default`即可访问到graphql客户端控制台
 -->

在Steedos中配置对象时，会自动为您生成[GraphQL API](https://graphql.org/)。

使用GraphQL API，您可以要求所需的确切信息。详情参考[GraphQL](https://graphql.org/)。

## 数据权限

Steedos支持多种权限配置，例如[Permission Set](/docs/metadata/permission_set)，[Profile](/docs/metadata/profile)，[Permission](/docs/metadata/object/permission)等。您可以使用它们来实现不同的权限，以使不同的人有权访问不同的对象和字段，以及可以返回，插入，编辑，删除哪些数据。GraphQL API的控制由这些权限配置控制。【TODO：元数据-权限集、元数据-个人资料、元数据-目的-允许 链接未加】

为了支持权限控制，您应该根据要求传递`token`或`userSession`标识当前用户，请参阅[授权GraphQL API](/developer/api/graphql_auth)以获取更多信息。

您可以使用GraphQL API来[查询](/developer/api/graphql_query)，[插入](/developer/api/graphql_add)，[编辑](/developer/api/graphql_edit)和[删除](/developer/api/graphql_delete)您有权访问的数据。

## GraphQL客户端

假设您已经使用端口3000启动了Steedos的本地服务，那么您可以使用`http://localhost:3000/graphql`来访问GraphQL客户端。

在GraphQL客户端中，您可以在左侧面板中输入GraphQL脚本，然后通过单击页面顶部的运行按钮来运行它。

以下是一些可以直接在客户端上运行的示例。

### 示例

询问所有帐户：

```yml
query{
  contacts {
    name,
    amount
  }
}
```

:::note 提示
您也可以省略请求头的‘query’，返回结果相同。

```yml
{
  contacts {
    name,
    amount
  }
}
```

:::

结果如下：

```yml
{
  "data": {
    "accounts": [
      {
        "name": "Phase 2 Construction Contract",
        "amount": 70000
      },
      {
        "name": "2021 OA Project Maintenance Contract",
        "amount": 89000
      }
    ]
  }
}
```

### 扩展查询

您可以在对象名称和括号之后定义字段结构，扩展字段并查询相关字段值。

字段结构定义如下：

```yml
query{
  contracts {
    name
    amount
    // highlight-start
    othercompany{
      name
      owner{
        name
      }
    }
    // highlight-end
  } 
}
```

返回结果如下：

```json
{
  "data": {
    "contracts": [
      {
        "name": "Phase 2 Construction Contract",
        "amount": 70000,
        "othercompany": {
          "name": "3M",
          "owner": {
            "name": "Litant"
          }
        }
      },
      {
        "name": "2021 OA Project Maintenance Contract",
        "amount": 89000
      }
    ]
  }
}
```

详情见[通过GraphQL API查询数据](/developer/api/graphql_query)。

### 查询数据

您可以通过 GraphQL API 使用 `filters`，`fields`，`top`，`skip`和`sort`查询数据的记录，详见[通过GraphQL API查询数据](/developer/api/graphql_query)

示例：

查询所有`status`属性值为`Qualified`的线索：

```yml
query{
  leads(filters:[["status", "=", "Qualified"]], top:1,
  sort:"name desc"){
    name,
    title,
    status
  }
}
```

结果如下：

```yml
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        "status": "Qualified"
      }
    ]
  }
}
```

:::note 提示
您也可以使用 filters:"status eq 'Qualified'" 替换 filters:[["status", "=" "Qualified"]]，它是一个标准的[OData过滤字符串](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter)。
:::
