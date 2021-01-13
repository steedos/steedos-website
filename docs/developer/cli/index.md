---
title: Steedos Cli 命令详解
sidebar_label: 概述
---

## 对象同步

### source:retrieve

**检索源数据到本地**

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

#### 参数说明

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

**根据metadata**

**获取对象 CustomObject**

- CustomObject：*，表示获取所有对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:*
```

- CustomObject:accounts，表示获取accounts对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:accounts
```

**获取某一对象的字段 Field**

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

**根据路径获取**

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

### source:deploy

**部署元数据到服务器**

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

## 打包

### package:build

**将本地文件打包成.package文件**

该命令包含以下参数：

- 【-n | packageName】打包好的package名称
- 【-p | appPath】需要打包的本地文件地址
- 【-l | loglevel(debug|info|warn)】可选参数，用于控制是否打印已打包文件清单，默认"warn"不打印，只打印未打包文件清单

您也可以运行--help来获取 package:build 命令的更多信息：

```yml
steedos package:build --help
```

展示结果：

```yml
USAGE
  $ steedos package:build
OPTIONS
-l, --loglevel=loglevel        (debug|info|warn)  [default: warn] logging level for this command invocation
-n, --packageName=packageName  package name
-p, --appPath=appPath          appPath
```

示例如下：

```yml
steedos package:build -n steedos-app-contract -p C:\GitHub\steedos-app-contract\steedos-app
```

在控制台同时会打印打包相关的日志：

```yml
=== Steedos Package Build: Packaged files
TYPE                        PROJECT PATH
──────────────────   ──────────────────────────
CustomApplication    steedos-app\main\default\applications  
                     \projects.app.yml    

=== Steedos Package Build: Unpacked files
TYPE                         PROJECT PATH
──────────────────   ─────────────────────────────
```

## 国际化

### steedos:i18n

**生成项目下对象的国际化文件**

该命令包含以下参数：

- 【lng】 需要生成国际化的语言, 必填 (en | zh-CN)
- 【-p | packageDir】打包好的package名称
- 【-s | serverDir】项目所在路径, 默认为当前目录, 选填

您也可以运行--help来获取 steedos:i18n 命令的更多信息：

```yml
Create steedos project object i18n
```

展示结果：

```yml
USAGE
  $ steedos i18n NAME

ARGUMENTS
  NAME  language

OPTIONS
  -p, --packageDir=packageDir  Steedos Package Dir
  -s, --serverDir=serverDir    Steedos Server Dir 
```

示例如下

```yml
steedos i18n en -s . -p ./steedos-app
```
