---
title: 零代码 - 外部数据源
sidebar_label: 外部数据源
---

数据源用于定义数据库连接方式，业务对象通过对应的数据源保存数据。除了使用默认数据源，华炎魔方零代码功能，可以通过填写表单的形式，配置数据源的相关信息，即可完成外部数据源的连接，包括SQL Server、Oracle、MySQL、PostgreSQL等。

## 创建外部数据源-SQL Server

进入“设置”-“对象设置”-“外部数据源”，新建一个drivertest外部数据源，数据库类型选择“SqlServer”，并依次输入名称(一般为英文)、显示名称、连接数据库的url，url格式为：mssql://管理员账号:密码@服务器地址:1433/数据库。

![零代码-外部数据源Sql](/assets/no-code/sqlserver_new.png)

## 创建外部数据源-MySQL

跟SQL一样，再新建一个driver_test外部数据源，数据库类型选择“MySql”，并依次输入名称(一般为英文)、显示名称，并配置分组项【其他连接选项】：服务器地址、端口、数据库、用户名、密码，来替代上面的连接数据库的url，保存并进行测试链接，提示连接成功即完成。

![零代码-外部数据源MySql](/assets/no-code/mysql_new.png)

![零代码-外部数据源MySql](/assets/no-code/mysql_datasource.png)

当点击测试链接后，出现如下图提示时，请在项目终端中输入'yarn add mysql'进行mysql插件安装，并重启服务运行，再次尝试测试链接即可提示“连接成功”。

![零代码-外部数据源MySql](/assets/no-code/mysql_error.png)

![零代码-外部数据源MySql](/assets/no-code/mysql_yarn.png)