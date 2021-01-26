---
title: 授权GraphQL API
sidebar_label: GraphQL身份验证
---

<!-- 每当用户想要访问受保护的路由或资源时，通常使用Authorization header。header的内容应如下所示：
`Authorization: Bearer <token>`
token是用户登陆后在前端设置的cookie里的`X-Auth-Token`或者是local storage中的`Meteor.loginToken` -->

为了实现GraphQL API的权限控制，您需要先授权GraphQL API，以便该API可以识别当前用户。

## 请求header

当用户想要访问受保护的路由或资源时，授权的请求header通常用作API请求header。

header的内容格式如下：`Authorization: Bearer <token>`。其中，`token`
是用户登录后，浏览器cookie中的`X-Auth-Token`的值。

## UserSession 参数

您还可以通过GraphQL API在Steedos上请求数据，并通过如下的代码传递userSession参数：

```yml
var { graphql } = require('graphql');
var getSteedosSchema = require("@steedos/objectql").getSteedosSchema;
var schema = getSteedosSchema().getDataSource().getGraphQLSchema();

let query = `
    query{
        leads(filters:[["status", "=", "Qualified"]]){
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
`;
graphql(schema, query, null, { user: userSession }).then((response) => {
    console.log(response);
});
```

它将基于当前用户的权限返回结果。
