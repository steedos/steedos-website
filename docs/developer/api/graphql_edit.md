---
title: 通过GraphQL API编辑数据
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

要通过GraphQL API在Steedos上编辑数据，需为脚本加上前缀，`mutation`而不是`query`

示例：

```yml
mutation {
  tasks_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"Task Important"})
}
```

这表示您应将`tasks`上面的内容替换为要编辑记录的对象名，将上面的`_id`值替换为要编辑记录的对象名，并将`5cb98489d09a343e14daae95`上面的值`_id`替换为`{name:"Task Important"}`，需另存为的新JSON数据。

关键字`UPDATE_ONE`表示通过GraphQL API在Steedos上编辑一条记录。

返回结果如下：

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

当通过Steedos上的GraphQL API更新数据时，只能编辑具有更新权限的对象和字段的记录，详情见[数据权限](/developer/api/graphql)。
