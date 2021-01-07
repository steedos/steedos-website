---
title: Steedos DX Developer Guide
sidebar_label: 开发者指南
---

## Steedos将如何改变您的工作方式？

Steedos是新一代的低代码开发平台，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。

### 亮点

- 您可以使用所熟悉的开发工具和技术
- 您可以通过使用命令行来实现与Steedos合作开发，持续集成和项目部署
- Steedos 创新的使用元数据定义业务模型，并可在必要时编写代码，您开发的项目源码也可以保存到版本库中实现版本迭代，对于大型项目也方便多人协作
- Steedos 提供了VS Code扩展，可视化的部署和获取源文件，方便实现双向同步，同时您也可以通过VS Code的命令行面板，创建特殊格式的文件，如router，trigger等。

### 您准备好开始了吗？

以下是使用Steedos DX工作流，这些步骤包括最常见的CLI命令，对于Steedos CLI支持的所有命令，请参阅 [命令指南](/dx/command_reference)

- 安装Steedos CLI [设置指南](/dx/setup_guide)
- 使用示例项目入门
- 创建新的应用程序
- 通过现有项目开始Steedos DX项目

#### 系统要求

为了更好的使用steedos DX，请您在开始之前检查是否符合以下要求，如不符请先升级版本，再进行后续操作

- steedos platform 1.23 +
- mongodb 4.2 +

### 使用示例项目入门

- 1、打开终端或命令控制符窗口，克隆GITHub上的示例steedos-app-contract

```yml
git clone https://github.com/steedos/steedos-app-contract.git
--or--
git clone git@github.com:steedos/steedos-app-contract.git
```

- 2、将源码clone到本地文件夹后，在终端或命令控制符窗口执行以下代码，切换目录. 

```yml
cd steedos-app-contract
```

- 3、安装依赖

```yml
yarn
```

- 4、启动

```yml
yarn start
```

### 创建一个应用程序

从零开始创建并开发Steedos平台上运行的应用时，请遵循以下基本工作流：

- 1.创建项目 [项目设置](/dx/project_setup)
- 2.运行
- 3.元数据与数据库的双向同步 [数据同步](/dx/data_synchronization)

### 通过现有项目开始

- 1.创建项目 [项目设置](/dx/project_setup)
- 2.将现有的Steedos项目转换成新格式 [项目转化](/dx/convert_project)
- 3.运行
- 4.元数据与数据库的双向同步 [数据同步](/dx/data_synchronization)

## 创建开发者账户

- 开启本地服务，在公司设置下的许可证处，复制魔方ID，用于后面创建API KEY

![subscription](/assets/dx/developer_guide/developer_guide01.png)

- 打开华炎魔方开发者网站注册开发者账号并创建API KEY [华炎魔方--开发者网站](/help/company/organization)

![subscription](/assets/dx/developer_guide/developer_guide02.png)

![subscription](/assets/dx/developer_guide/developer_guide03.png)

![subscription](/assets/dx/developer_guide/developer_guide04.png)

- 将复制的许可证添加到本地服务的公司设置中，至此开发者账户创建成功

![subscription](/assets/dx/developer_guide/developer_guide05.png)

## 元数据覆盖率

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

## 生成并发布您的软件

编写好代码后，下一步就是部署，我们目前支持：

- 元数据API生成和发布应用：通过steedos CLI命令来执行打包操作，包括JS在内的所有文件
- 通过页面的软件包管理来生成和发布：不包括JS文件

## 另请参阅

- [入门指南](/dx/get_start)
- [项目设置](/dx/project_setup)
- [数据同步](/dx/data_synchronization)
- [项目转化](/dx/convert_project)
- [命令指南](/dx/command_reference)
- [设置指南](/dx/setup_guide)
- [Steedos DX](/dx/summary)
