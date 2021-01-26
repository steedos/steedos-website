---
title: 通过GraphQL API删除数据
---
<!-- ### 在graphql界面中删除数据
- 方法名格式为： {定义的object.name}_DELETE_ONE
- 接受参数
    - _id:String类型
- 如：
```graphql
mutation {
  organizations_DELETE_ONE(_id:"5cb98489d09a343e14daae95")
}
```

- 结果：
```json
{
  "data": {
    "organizations_DELETE_ONE": null
  }
}
``` -->

在 Steedos 中通过 GraphQL API 进行数据删除时，需将前缀`query`替换为`mutation`

示例：

```yml
mutation {
  tasks_DELETE_ONE(_id:"5cb98489d09a343e14daae95")
}
```

其中，`tasks`代表要删除记录的对象名，`_id`的值`5cb98489d09a343e14daae95`代表要删除的记录的`_id`

关键字`DELETE_ONE`表示通过 GraphQL API 在 Steedos 上删除一条记录。

结果如下：

```yml
{
  "data": {
    "tasks_DELETE_ONE": null
  }
}
```

当通过 Steedos 上的 GraphQL API 删除记录时，只能删除具有删除权限的对象的记录，详情见[数据权限](/developer/api/graphql)。
