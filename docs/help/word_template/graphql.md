---
title: 如何编写打印模板GraphQL脚本？
sidebar_label: GraphQL脚本
---

## 在控制台调式脚本

华炎魔方提供了GraphQL控制台，任何登录华炎魔方的用户都可以在该控制台编写查询脚本来查看相关数据，且只能查看其有权限查看的数据。

假设您已经启动了一个端口为3000的华炎魔方本地服务，在浏览器中输入地址`http://localhost:3000/graphql`即可进入GraphQL控制台，只要在左侧面板中输入GraphQL脚本，然后点击左上角的”运行“图标按钮即可在右侧面板看到对应的查询结果。

![GraphQL脚本](/assets/help/word_template/graphql_script.png)

您可以查看右侧面板中返回的查询结果来随时修正GraphQL脚本内容，直到右侧返回的数据满足您需要打印的数据期望。

关于如何编写GraphQL脚本请参考 [Query by GraphQL](https://www.steedos.org/docs/api/graphql_query)。

### 编写过滤条件

您可以在上述GraphQL脚本中的对象名称之后添加过滤条件表达式，过滤条件表达式推荐使用华炎魔方提供的数组格式 [筛选条件](/developer/object_filter)，如`[["status"、"="、"Qualified"]]`，也可以使用OData过滤条件表达式，如`"status eq 'Qualified'"`，详情请参考 [Filters](https://www.steedos.org/docs/api/graphql_query#filters)。

### 编写要获取哪些字段

您需要在上述GraphQL脚本中的对象名称之后用大括号来包裹要查询对象的哪些字段信息，每行一个字段或用逗号分隔每个字段，如果字段关联到其他对象则可以在其字段名称后面也加上大括号并在大括号内列出要级联查询的相关字段，依此类推，您可以自由无限扩展您希望级联查询的相关字段信息，详细请参考 [Field Structure Detail](https://www.steedos.org/docs/api/graphql_query/#field-structure-detail)。

### 特殊字段显示格式

如果GraqhQL脚本中有返回日期、日期时间、布尔、选择框等字段类型，需要给字段名称后面加上`__label`后缀来表示希望格式化显示字段内容，否则它将直接返回数据库中保存的字段内容。

比如`created__label`表示创建时间，返回的结果为`2020-12-22 15:17`。如果直接写作`created`，会返回为`1608621469293`这种无语义的数值。

详情请参考 [Suffix __label](https://www.steedos.org/docs/api/graphql_query/#suffix-__label)。

### 查询关联子表数据

如果想在GraphQL中查询关联的子表对象数据，需要在大括号中的字段集中添加一个子表关联字段来查询关联子表信息，语法是使用`related__`前缀拼接要查询的子表对象名称。

比如主表对象“潜在客户leads”上有关联子表对象“任务tasks”，就可以在GraphQL脚本中加上一个字段`related__tasks`来使GraphQL接口返回的每条“潜在客户”记录都带上其关联子表“任务”列表数据。

详情请参考 [Prefix related__](https://www.steedos.org/docs/api/graphql_query#prefix-related__)。

## 应用GraphQL脚本

在上述控制台调式完GraphQL脚本后，您就可以把控制台左侧脚本内容拷贝到之前新建打印模板窗口中来应用调式好的脚本内容。
