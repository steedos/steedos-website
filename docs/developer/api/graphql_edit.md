---
title: 编辑
---
<!-- ### 在graphql界面中编辑数据
- 方法名格式为： {定义的object.name}_UPDATE_ONE
- 接受一个参数
    - _id:String类型
    - data:JSON类型
- 如：
```graphql
mutation {
  organizations_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"财务部"})
}
```

- 结果返回更新后的数据：
```json
{
  "data": {
    "organizations_UPDATE_ONE": {
      "name": "财务部",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
``` -->

在 Steedos 上通过 GraphQL API 进行数据编辑时，需要将前缀`query`替换为`mutation`

示例：

```yml
mutation {
  tasks_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"Task Important"})
}
```

其中，`tasks`代表要编辑记录的对象名称，`_id`的值`5cb98489d09a343e14daae95`代表要编辑的记录的`_id`，`{name:"Task Important"}`代表要更新的JSON数据。

关键字`UPDATE_ONE`表示通过 GraphQL API 在 Steedos 上编辑一条记录。

结果如下：

```yml
{
  "data": {
    "tasks_UPDATE_ONE": {
      "name": "Task Important",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
```

当通过 Steedos 上的 GraphQL API 更新数据时，只能编辑具有更新权限的对象和字段的记录，详情见[数据权限](/developer/api/graphql)。
