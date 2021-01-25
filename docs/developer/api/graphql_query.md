---
title: 通过GraphQL API查询数据
---
<!-- ### 在graphql界面中查询
- 查询条件接受5个参数，可根据需要搭配使用
    - filters:String类型
    - fields:Array类型
    - top:Int类型
    - skip:Int类型
    - sort:String类型
- 如：

```graphql
query {
  organizations(filters:"_id ne -1", fields:["name"], top:1, skip:1, sort:"name desc") {
    _id
    name
    fullname
    sort_no
    is_company
    is_group
    hidden
  }
}
```

- 查询结果
```json
{
  "data": {
    "organizations": [
      {
        "_id": "cYzsXtT7CQoDaYkpb",
        "name": "财务部",
        "fullname": null,
        "sort_no": null,
        "is_company": null,
        "is_group": null,
        "hidden": null
      }
    ]
  }
}
``` -->

GraphQL API中的查询数据，查询条件接受以下5个参数，可以根据需要一起使用。

- filters: text or array
- fields: array
- top: number
- skip: number
- sort: text

如下图方框内参数所示：

```yml
leads(filters:[["status", "=", "Qualified"]], top:1, sort:"name desc")
```

当在steedos中访问GraphQL API时，只能看到有权查看的数据，详情见[GraphQL 简介](/developer/api/graphql)。

## 过滤器 Filters

可以将对象名称后添加查询过滤器，过滤器表达式可以是阵列作为`Steedos Filters`，类似于`[["status", "=", "Qualified"]]`或文本作为标准的[OData过滤字符串](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter)类似于`"status eq 'Qualified'"`等。

示例如下：

```yml
query{
  leads(filters:[["status", "=", "Qualified"]]){
    name,
    title,
    status
  }
}
```

或

```yml
query{
  leads(filters:"status eq 'Qualified'"){
    name,
    title,
    status
  }
}
```

## 字段结构

在GraphQL查询中，必须在对象名称和方括号的末尾定义字段结构信息，且可以无限扩展字段以查询相关字段值。

示例如下：

请求所有潜在顾客记录以及属于相关对象的扩展字段信息：

```yml
query{
  leads{
    name,
    title,
    status,
    converted_account {
      name,
      rating
    },
    converted_contact {
      name,
      account{
        name
      }
    },
    converted
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
        "status": "Qualified",
        "converted_account": {
          "name": "Account B",
          "rating": "Hot"
        },
        "converted_contact": {
          "name": "Contact M",
          "account": {
            "name": "Account N"
          }
        },
        "converted": true
      },
      {
        "name": "Lead B",
        "title": "purchasing manager",
        "status": "New",
        "converted_account": null,
        "converted_contact": null,
        "converted": null
      }
    ]
  }
}
```

### 后缀 Suffix_label

如果GraqhQL脚本具有一些返回日期，日期时间，布尔值，选择等的字段，并且您想直接向客户显示它们，则需要在字段名称后添加后缀`__label`以表明您要格式化该字段值，否则它将直接返回存储在数据库中的字段的内容。

#### Date/DateTime

例如，该`created`字段指示创建时间，它将返回非语义值（例如）`1608621469293`，但`created__label`将返回格式化后的格式`2020-12-22 15:17`（具有良好的阅读体验结果）。

如果该`created`字段是一个空值，则它将返回`null`，而`created__label`则返回一个空字符串`""`。

#### Boolean

例如，该`converted`字段指示它是否为转换后的记录，它将返回诸如`true`或`false`的字符，但是`converted__label`将会返回具有良好阅读体验的结果，如`"Yes"`或`"No"`。

如果该`converted`字段为空值，则它将返回`null`，而`converted__label`则返回一个字符串`"No"`。

#### Select

例如，该`salutation`字段表示某人是“男性”或“女性”，它可能会返回诸如`1`或`0`的字符，但是`salutation__label`会返回具有良好阅读体验的结果，例如`"Male"`或`"Female"`。

如果该`salutation`字段是一个空值，则它将返回`null`，而`salutation__label`则返回一个空字符串`""`。

示例：

请求所有潜在客户记录，其中包含一些`__label`后缀字段：

```yml
query{
  leads{
    name,
    title,
    converted,
    converted__label,
    created,
    created__label,
    salutation,
    salutation__label
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
        "converted": true,
        "converted__label": "Yes",
        "created": "1597979950012",
        "created__label": "2020-08-21 11:19",
        "salutation": "1",
        "salutation__label": "Male"
      },
      {
        "name": "Lead B",
        "title": "purchasing manager",
        "converted": false,
        "converted__label": "No",
        "created": "1597988499634",
        "created__label": "2020-08-21 13:41",
        "salutation": "0",
        "salutation__label": "Female"
      },
      {
        "name": "Lead C",
        "title": "CMO",
        "converted": null,
        "converted__label": "No",
        "created": null,
        "created__label": "",
        "salutation": null,
        "salutation__label": ""
      }
    ]
  }
}
```

:::note 提示
如果您使用GraphQL API来获取数据并将其显示在Steedos页面中，则不应在字段名称后添加后缀`__label`，因为Steedos页面会自动将其格式化。

仅当您想直接向客户显示字段值时，才需要在字段名称后添加后缀`__label`。
:::

### 前缀 Prefix related__

如果希望在GraphQL API接口返回的列表中，每个记录都包含关联的子对象记录信息，则可以将`related__`用作前缀来拼接关联的子对象的名称，以实现目标。

什么是子对象？这意味着您有两个通过`Master Detail`关系字段关联的对象，一个是主对象，另一个是明细对象，而子对象正是明细对象。

示例：

请求所有潜在顾客记录，并带有一些`related__`前缀字段以获取每个记录的子对象记录：

```yml
query{
  leads{
    name,
    title,


----------------------------------------------------

    related__tasks{
      name,
      assignees{
        name
      },
      due_date,
      due_date__label
    }

----------------------------------------------------


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


----------------------------------------------------

        "related__tasks": [
          {
            "name": "Task 1",
            "assignees": [
              {
                "name": "Litant"
              }
            ],
            "due_date": "1611964800000",
            "due_date__label": "2021-01-30"
          }
        ]

----------------------------------------------------


      },
      {
        "name": "Lead B",
        "title": "purchasing manager",


----------------------------------------------------

        "related__tasks": [
          {
            "name": "Task 2",
            "assignees": [
              {
                "name": "John"
              }
            ],
            "due_date": "1611964800000",
            "due_date__label": "2021-01-30"
          }
        ]

----------------------------------------------------


      }
    ]
  }
}
```

:::note 提示
上面示例中的字段名称related__tasks基于一个名为'tasks'的对象，该对象具有与Master Object Leads相关联的master-detail字段。
:::

## 定位 Top and Skip

您可以定义一个`skip`要跳过多少条记录，以及一个单词要返回多少条记录`top`。

下面的查询将仅返回第二条记录。

```yml
query{
  leads(fields:["name"], top:1, skip:1){
    name,
    title
  }
}
```

## 排序 Sort

您可以定义如何用`sort`对结果进行排序。

关键字`desc`表示降序，关键字`asc`表示升序。

示例：

按字段`name`降序排序

```yml
query{
  leads(fields:["name"], sort:"name desc"){
    name,
    title
  }
}
```

## 字段 Fields

您可以在对象名称之后添加查询字段，该字段表示要查询的对象上的字段。

默认忽略此属性，因为您必须在对象名称和方括号的末尾定义字段结构的详细信息，因此我们建议您忽略此属性。

示例：

```yml
query{
  leads(fields:["name"]){
    name,
    title
  }
}
```

结果如下：

```yml
{
  "data": {
    "leads": [
      {
        "name": "T1",
        "title": null
      },
      {
        "name": "T2",
        "title": null
      }
    ]
  }
}
```

:::note 提示
如您所见，如果[字段结构](/developer/api/graphql_query#%E5%AD%97%E6%AE%B5%E7%BB%93%E6%9E%84)中有某些字段未在fields属性中定义，则这些遗漏的字段将被忽略，并返回空值。
:::
