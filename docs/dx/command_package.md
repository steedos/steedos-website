---
title: 软件包
---

## 什么是软件包?

如果您是打包的新产品，可以将软件包视为用元数据填充的包含一组相关功能的单个组件或一组相关应用大小的东西的容器。利用该软件包可以帮助您快速的添加、删除和编辑元数据，以快速的创建自己的项目。您可以多次重复包开发周期，也可以更改元数据、创建包版本、测试包版本，然后将其分发给其他 Steedos 用户和组织，包括公司外部的用户和组织。

### 通过软件包开发管理变更

随着项目功能的递增，其发布也随之越来越复杂。为了提高您的开发和管理，特提供基于软件包的开发模式。

包开发的优势：

- 改进团队发展和协作
- 模块化的开发过程，包含包之间的依赖项规范
- 版本控制有助于更改管理
- 促进自动化测试和持续集成
- 能够直接从源构建项目
- 敏捷发布模型允许更频繁、更独立的发布操作

软件包版本包含创建时与包版本关联的特定元数据和功能。在包上迭代并添加、删除或更改打包的元数据时，可以创建许多包版本。

您可以在试用版、开发人员版本中安装包版本。安装包版本类似于部署元数据。每个包版本都有一个版本号，订阅者可以通过包升级将新的包版本安装到其组织中。

您可以多次重复包开发周期，也可以更改元数据、创建包版本、测试包版本，然后将其分发给其他 Steedos 用户和组织，包括公司外部的用户和组织。通过这一独特的应用开发生命周期，您可以准确控制元数据的推出内容、时间以及推出方法。在已安装的组织中，您可以检查哪些元数据来自哪个包以及与特定包关联的所有元数据集。

## 生成

### package命令

#### package:build

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

## 使用

将.package文件拷贝到项目根路径的steedos-packages文件夹下，重启服务。

## 升级

删除本地解压文件和对应的.package文件，然后下载最新的.package文件，拷贝到项目根路径的steedos-packages文件夹下，并重启服务。

## 卸载

删除本地解压文件和对应的.package文件
