---
title: GraphQL脚本
sidebar_label: GraphQL脚本
---

## 如何编写GraphQL脚本抓取想要的数据？

华炎魔方提供了GraphQL控制台，任何登录华炎魔方的用户都可以在该控制台编写查询脚本来查看相关数据，且只能查看其有权限查看的数据。

假设您已经启动了一个端口为3000的华炎魔方本地服务，在浏览器中输入地址`http://localhost:3000/graphql`即可进入GraphQL控制台，只要在左侧面板中输入GraphQL脚本，然后点击左上角的”运行“图标按钮即可在右侧面板看到对应的查询结果。

![GraphQL脚本](/assets/help/word_template/graphql_script.png)

您可以查看右侧面板中返回的查询结果来随时修正GraphQL脚本内容，直到右侧返回的数据满足您需要打印的数据期望，然后您就可以把左侧脚本内容拷贝到之前新建打印模板窗口中。

关于如何编写GraphQL脚本请参考 [Query by GraphQL](https://www.steedos.org/docs/api/graphql_query)。

## 如何编写GraphQL脚本中的过滤条件 ？

您可以在上述GraphQL脚本中的对象名称之后添加过滤条件表达式，过滤条件表达式推荐使用华炎魔方提供的数组格式 [筛选条件](/developer/object_filter)，如`[["status"、"="、"Qualified"]]`，也可以使用OData过滤条件表达式，如`"status eq 'Qualified'"`，详情请参考 [filters](https://www.steedos.org/docs/api/graphql_query#filters)
