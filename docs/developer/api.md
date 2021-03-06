---
title: 系统集成 API
sidebar_label: 概述
---

使用华炎魔方开发的业务系统，内置的完整的API，可以轻松实现与第三方应用系统的集成。

#### 数据库集成

如果需要查询甚至修改第三方业务系统中的数据，只需配置数据源指向第三方业务系统，并配置业务对象描述第三方业务系统中的数据表，即可将第三方业务系统中的数据集成进来。

#### [ODATA API](/developer/api/odata.md)

开放数据协议（Open Data Protocol，缩写OData）是一种描述如何创建和访问 REST 服务的OASIS开放工业标准。华炎魔方为你定义的业务对象自动生成标准 HTTP API 接口，开发人员可以通过标准 OData 语法，实现各种条件的数据的查询与修改操作。

#### [GraphQL API](/developer/api/graphql.md)

GraphQL 是 Facebook 推出的数据查询接口，是一种用于 API 的查询语言。华炎魔方为你定义的业务对象自动生成标准 GraphQL 接口，可以快速实现各种条件的数据的查询与修改操作。
