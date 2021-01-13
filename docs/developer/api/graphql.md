---
title: GraphQL
---

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