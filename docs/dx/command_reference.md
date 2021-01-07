---
title: Steedos CLI Command Reference
sidebar_label: 命令指南
---

## source命令

使用source命令可以实现源数据和非源数据的双向同步, 同时本地将生成源格式的元数据文件。

您也可以运行--help来获取source命令的更多信息

```yml
steedos source --help
```

展示结果：

```yml
USAGE
  $ steedos source:COMMAND
COMMANDS
  source:config
  source:convert
  source:delete
  source:deploy      
  source:retrieve  
```

### source:retrieve

从服务器获取源格式的元数据并下载到本地steedos DX项目中，该命令会直接覆盖掉您本地的文件。

该命令包含的可选参数

- [-m | metadata]

```yml
 MetaDataList:
["Client","CustomAction","CustomApplication",
"CustomField","CustomListview","CustomObject",
"CustomPermission","CustomPermissionset","CustomProfile",
"CustomReport","CustomValidationRule","Function",
"Layout","Router","Server","Trigger","Workflow"]
```

- [-p | source path]

根据地址来检索获取服务器数据

- [-y | manifest]

根据本地配置文件（package.yml）从服务器获取所需源格式的文件

您也可以运行--help来获取 source:retrieve 命令的更多信息：

```yml
steedos source:retrieve --help
```

#### 使用示例

##### 根据matedata

获取对象  CustomObject

- CustomObject：*，表示获取所有对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:*
```

- CustomObject:accounts，表示获取accounts对象及其包含的字段，列表，视图等

```yml
steedos source:retrieve -m CustomObject:accounts
```

获取某一对象的字段 Field

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

### source:deploy

将本地文件部署到服务器

该命令包含的可选参数

[-p | local file path]   您需要部署到服务器的本地文件路径

您也可以运行--help来获取 source:deploy 命令的更多信息：

```yml
steedos source:deploy --help
```

#### 使用示例

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

### source:convert

将旧文件格式转化并本地生成metadata要求的新格式yml文件

该命令包含两个参数：

- 【-o | convertpath】需要转化的旧文件路径

- 【-t | targetPath】新格式文件生成的路径

您也可以运行--help来获取 source:convert 命令的更多信息：

```yml
steedos source:convert --help
```

示例如下：

```yml
steedos source:convert -o C:\GitHub\steedos-app-contract\src -t C:\GitHub\steedos-app-contract
```

### source:config

配置环境变量，同时会生成.env.local文件

```yml
steedos source:config
metadata server:(http://localhost:5000/)
metadata api key:OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe
```

其中：

```yml
METADATA_SERVER  默认是http://localhost:5000/
METADATA_APIKEY  可通过本地服务中的个人账户设置中获取到 APIKEY
```

## 此处暂缺一张动图

## package命令

### package:build

将本地文件打包成.package

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

## i18n

### steedos:i18n

生成项目下对象的国际化文件

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

## 另请参阅

- [设置指南](/dx/setup_guide)
- [开发者指南](/dx/developer_guide)
- [Steedos DX](/dx/summary)
