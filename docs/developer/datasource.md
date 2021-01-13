---
title: 外部数据源
# title: 数据源
---

数据源用于定义数据库连接方式，业务对象通过对应的数据源保存数据。Steedos系统层使用MongoDB数据库，Steedos的标准对象都保存在默认数据源中。开发人员也可以通过配置文件连接其他常用的数据源，包括SQL Server、Oracle、MySQL、PostgreSQL。

## 使用steedos-config配置数据源

开发人员可以在项目配置文件（steedos-config.yml）中定义数据源。

mongodb是必选的默认数据源，不可删除，但可以配置多个额外的第三方数据源。

```yaml
datasources:
  default:
    connection:
      driver: mongo
      url: mongodb://192.168.0.21/steedos
  drivertest:
    connection:
      driver: mysql
      url: mysql://admin:password@192.168.0.198:3306/driver-test
  forecast:
    connection:
      driver: mssql
      host: 192.168.0.190
      port: 1433
      username: sa
      password: password
      database: forecast
    objectFiles:
      - "./forecast/**" 
```

## 加载业务对象

在定义数据源时，通过配置 objectFiles 属性，可以加载[业务对象](./object.md)到数据源中。

```yaml
datasources:
  default:
    connection:
      url: mongodb://192.168.0.21/steedos
    objectFiles:
      - "./src/default/"
  mattermost:
    connection:
      driver: postgres
      url: postgresql://user:password@192.168.0.21:5432/mattermost
    objectFiles:
      - "./src/mattermost/"
```

## 使用代码定义数据源

最简单和最常用的方法是使用`createConnection`和`createConnections`函数。

`createConnection` 创建单个连接：

```typescript
import { createConnection, Connection } from "@steedos/objectql";

const connection = await createConnection({
  name: "mysql",
  driver: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test"
});
```

只使用`url`和`type`也可以进行连接。

```js
createConnection({
  name: "postgres",  
  driver: "postgres",
  url: "postgres://test:test@localhost/test"
});
```

## 默认数据源

默认数据源使用MongoDB数据库，以default命名，Steedos的内核[标准业务对象](./standard_objects)均运行于此数据源中。

```yaml
datasources:
  default:
    connection:
      url: mongodb://192.168.0.21/steedos
```

配置指定数据库用户名和密码，例如给steedos数据库配置用户：steedos  密码：pwd，具有读写权限

```
use steedos
db.createUser({user: "steedos", pwd: "pwd", roles: [ { role: "readWrite", db: "steedos" } ] } )
```

用户权限配置：

```
Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限
```

通过修改数据库配置文件mongod.conf，设置auth=true，开启用户验证

```
auth=true
```

当数据库配置了用户验证时，需要在连接时配置用户名和密码

```yaml
datasources:
  default:
    connection:
      url: mongodb://user:password@192.168.0.21/steedos
```

当数据库是以集群方式起服务时，连接时还需要配置replicaSet名称，例如replicaSet为steedos

```yaml
datasources:
  default:
    connection:
      url: mongodb://user:password@192.168.0.21/steedos?replicaSet=steedos
```

## 定义空库初始化建表的语言

在创建表时可指定数据库中表的语言

```yaml
datasources:
  default:
    locale: zh # 值来源 https://docs.mongodb.com/manual/reference/collation-locales-defaults/#collation-languages-locales
    connection:
      url: mongodb://192.168.0.21/steedos
    objectFiles:
      - "./src/default/"
```