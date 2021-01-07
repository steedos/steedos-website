---
title: Metadata And Database Synchronization
sidebar_label: 数据同步
---

## 元数据与数据库的双向同步

### 检索源数据到本地 source:retrieve

从服务器获取源格式的元数据并下载到本地steedos DX项目中，该命令会直接覆盖掉您本地的文件。

该命令包含的可选参数

- [-m | metadata]

```yml
可选metadata:
"CustomAction","CustomApplication",
"CustomField","CustomListview",
"CustomObject","CustomPermission",
"CustomPermissionset","CustomProfile",
"CustomValidationRule","Layout","Workflow"
```

- [-p | source path]

根据地址来检索获取服务器数据

- [-y | manifest]

根据本地配置文件（package.yml）从服务器获取所需源格式的文件

#### 示例

##### 根据matedata

###### 获取对象  CustomObject

- CustomObject：*，表示获取所有对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:*
```

- CustomObject:accounts，表示获取accounts对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:accounts
```

###### 获取某一对象的字段 Field

- CustomField:accounts.*，表示获取accounts对象的所有字段

```yml
steedos source:retrieve -m CustomField:accounts.*
```

- CustomField:accounts.boolean，表示获取accounts对象的某一字段

```yml
steedos source:retrieve -m CustomField:accounts.boolean
```

- CustomField:accounts.boolean,accounts.owner，表示获取accounts对象的多个字段

```yml
steedos source:retrieve -m
CustomField:accounts.boolean,accounts.owner
```

##### 根据路径获取

- 获取该路径下所有

```yml
steedos source:retrieve -p path/to/source
```

- 获取某一确定文件

```yml
steedos source:retrieve -p "path/to/custom/objects/myObject.object.yml"
```

- 获取某一确定对象文件及其包含子文件

```yml
steedos source:retrieve -p "path/to/source/objects/myObject"
```

### 部署元数据到服务器source:deploy

将本地文件部署到服务器，您部署的数据将会覆盖原有的数据结构
该命令包含的可选参数

[-p | local file path]

您需要部署到服务器的本地文件路径

#### 示例

- 部署steedos项目下所有文件到服务器

```yml
steedos source:deploy -p steedos-app\main\default
```

- 部署所有对象文件夹下的所有文件到服务器

```yml
steedos source:deploy -p steedos-app\main\default\objects
```

- 部署某一文件到服务器

```yml
steedos source:deploy -p steedos-app\main\default\object\note__c\fields\name.field.yml
```

- 或直接单文件名

```yml
steedos source:deploy -p name.field.yml
```

## 另请参阅

- [项目设置](/dx/project_setup)
- [项目转化](/dx/convert_project)
- [开发者指南](/dx/developer_guide)
- [设置指南](/dx/setup_guide)
- [命令指南](/dx/command_reference)
- [入门指南](/dx/get_start)
- [Steedos DX](/dx/summary)
