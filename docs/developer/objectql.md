---
title: 什么是 ObjectQL？
---

ObjectQL是一种跨数据库的查询语法，目前支持 MongoDB、MySQL、PostgreSQL、SQL Server、Oracle 数据库。

ObjectQL 使用 steedos-config.yml 配置数据库连接。使用createConnection可以获取数据库连接。

```typescript
import {createConnection} from "@steedos/objectql";

createConnection('default').then(async connection => {

    let post = {
        name: "Hello how are you?",
        body: "hello",
        likesCount: 100
    }
    let postObject = connection.getObject("post");

    postObject
        .insert(post)
        .then(post => console.log("Post has been saved: ", post));

    connection.close();

}, error => console.log("Cannot connect: ", error));

```

## 查询语法

按指定条件查询记录，并返回记录数组。未找到时返回空数组[]。

查询条件包括以下参数：

- fields: 字段名数组
- filters: 查询条件数组
- sort: 排序规则
- top: 返回记录数
- skip: 跳过记录数，通常用于分页显示。

```typescript
  const posts = await connection.getObject("posts").find({
      fields: ['name', 'body', 'likesCount'],
      filters: [['likesCount', '>', 10], ['likesCount', '<', 20]],
      top: 20,
      skip: 0,
      sort: 'likesCount desc'
  });
  // SELECT TOP 20 name, body, likesCount
  // FROM posts
  // WHERE likesCount > 10 AND likesCount < 20
  // ORDER BY likesCount desc
```
