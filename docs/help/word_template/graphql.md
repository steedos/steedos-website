---
title: GraphqL脚本
sidebar_label: GraphQL脚本
---

## 如何编写GraphQL脚本抓取想要的数据？

首先访问GraphQL客户端控制台地址，假设您已经启动了一个端口为3000的华炎魔方本地服务，那么您可以使用`http://localhost:3000/graphql`，在GraphQL客户端控制台中，您可以在左侧面板中输入GraphQL脚本，并通过单击页面左上角的run按钮来运行它，右侧会返回您需要打印的数据，如下图所示。您也可以参考 [Query by GraphQL](https://www.steedos.org/docs/api/graphql_query)

![graphql脚本](/assets/help/word_template/graphql_script.png)

如果右侧窗口是您想要打印的数据，就可以在华炎魔方打印模板--新建--Graphql脚本窗口粘贴脚本。

## 如何编写GraphQL脚本中的过滤条 ？

您可以在对象名称之后添加查询过滤器，过滤器表达式可以是一个数组作为华炎魔方过滤器，如`[“status”、“=”、“Qualified”]`或文本作为标准OData过滤字符串，如`status eq'Qualified`。详情请参考 [graphql_query](https://www.steedos.org/docs/api/graphql_query#filters)
