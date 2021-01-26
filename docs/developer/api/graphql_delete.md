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

要通过GraphQL API删除Steedos上的数据，应在脚本前加上前缀，`mutation`而不是`query`

示例：

```yml
mutation {
  tasks_DELETE_ONE(_id:"5cb98489d09a343e14daae95")
}
```

这表示您应该将上面的`tasks`替换为您要删除记录的对象名，并将上面的`_id`值`5cb98489d09a343e14daae95`替换为您要删除的记录的`_id`。

关键字`DELETE_ONE`表示通过GraphQL API删除Steedos上的一条记录。

返回结果如下：

```yml
{
  "data": {
    "tasks_DELETE_ONE": null
  }
}
```

当通过Steedos上的GraphQL API删除记录时，只能删除具有删除权限的对象的记录，详情见[数据权限](/developer/api/graphql)。
