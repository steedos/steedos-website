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

要通过GraphQL API将数据插入Steedos，您应该在脚本前加上`mutation`而不是`query`

示例：

```yml
mutation {
  tasks_INSERT_ONE(data:{name:"Task One"})
}
```

这表示您应将`tasks`上面的内容替换为要插入记录的对象名称，并将`{name:"Task One"}`上面的内容替换为要插入的JSON数据。

关键字`INSERT_ONE`表示通过GraphQL API将一条记录插入Steedos。

返回结果如下：

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

当通过Steedos上的GraphQL API插入数据时，只能插入具有插入权限的对象的记录，详情见[数据权限](/developer/api/graphql)。
