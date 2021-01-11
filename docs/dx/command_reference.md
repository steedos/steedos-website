---
title: 命令指南
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

详见 - [数据同步](/dx/data_synchronization)

### source:deploy

将本地文件部署到服务器

详见 - [数据同步](/dx/data_synchronization)

### source:convert

将旧文件格式转化并本地生成metadata要求的新格式yml文件

详见 - [项目转化](/dx/convert_project)

### source:config

配置环境变量，同时会生成.env.local文件，一般在安装 Steedos CLI 时已配置

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

## package命令

### package:build

将本地文件打包成.package

详见 - [项目打包](/dx/command_package)

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
