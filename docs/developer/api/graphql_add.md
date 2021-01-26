---
title: 通过GraphQL API插入数据
---
<!-- ### 在graphql界面中新增数据
- 方法名格式为： {定义的object.name}_INSERT_ONE
- 接受一个参数
    - data:JSON格式
- 如：
```graphql
mutation {
  organizations_INSERT_ONE(data:{name:"财务部"})
}
```

- 结果：
```json
{
  "data": {
    "organizations_INSERT_ONE": {
      "name": "财务部",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
```
 -->

在 Steedos 中通过 GraphQL API 进行数据插入时，需要将前缀`query`替换为`mutation`

示例：

```yml
mutation {
  tasks_INSERT_ONE(data:{name:"Task One"})
}
```

其中，`tasks`代表要插入记录的对象名称，`{name:"Task One"}`代表要插入的JSON数据

关键字`INSERT_ONE`表示通过 GraphQL API 在 Steedos 上插入一条记录。

结果如下：

```yml
{
  "data": {
    "tasks_INSERT_ONE": {
      "name": "Task One",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
```

当通过 Steedos 上的 GraphQL API 插入数据时，只能插入具有插入权限的对象的记录，详情见[数据权限](/developer/api/graphql)。
