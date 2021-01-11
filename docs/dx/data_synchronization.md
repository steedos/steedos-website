---
title: 数据同步
---

## 元数据与数据库的双向同步

### 检索源数据到本地

#### source:retrieve

从服务器获取源格式的元数据并下载到本地 Steedos DX项目中，该命令会直接覆盖掉您本地的文件。

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

##### 参数说明

- CustomApplication

自定义应用程序，包括自定义或标准应用程序

- CustomField

自定义对象字段包括自定义或标准对象字段

- CustomListview

自定义对象列表，包括自定义或标准对象列表，如all，recent等

- CustomAction

自定义对象按钮，包括自定义的对象操作按钮

- CustomObject

自定义对象，用户自定义对象名称会自动加__c后缀，以此和系统对象进行区别

- CustomPermission

自定义对象权限，包括用户自定义或标准对象权限，如user，admin

- CustomPermissionset

自定义权限集，包括用户自定义权限集

- CustomProfile

自定义简档，包括用户自定义或系统标准简档，如user，customer等

- CustomReport

自定义报表

- CustomValidationRule

自定义对象验证规则

- Layout

- Workflow

工作流规则

- [-p | source path]

根据地址来检索获取服务器数据

- [-y | manifest]

根据本地配置文件（package.yml）从服务器获取所需源格式的文件

#### 示例

##### 根据metadata

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

### 部署元数据到服务器

#### source:deploy

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
