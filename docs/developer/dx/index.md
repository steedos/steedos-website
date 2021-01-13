---
title: 元数据与代码同步
sidebar_label: 概述
---

![subscription](/assets/dx/dx05.png)

## 安装 VS Code插件

### Steedos Extension Pack安装

您可以通过 VS Code 的扩展商城快速安装 Steedos Extension Pack。在扩展商城中搜索框中输入 Steedos，选择“Steedos Extension Pack”并点击“install”开始安装，默认该扩展会同时安装“Steedos CLI Integration”扩展，所以不需要单独安装CLI扩展。

![subscription](/assets/dx/vs_extension/vs_extension01.png)

![subscription](/assets/dx/vs_extension/vs_extension02.png)

## 设置环境变量

### 设置默认软件包路径，用于同步数据

打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择
“Set Default Package Path”

![subscription](/assets/dx/vs_extension/vs_extension03.png)

![subscription](/assets/dx/vs_extension/vs_extension04.png)

## 使用 VS Code 插件同步

### 获取源：retrieve source

- 当您安装好扩展后，在 VS Code 的左侧工具栏会出现下图的图标，单击该图标，则会自动展示可以下载的源清单，您只需要点击所需文件的右边下载图标便可将其下载到本地文件，需要注意的是，如果本地已经存在改文件则会直接覆盖。

![subscription](/assets/dx/vs_extension/vs_extension05.png)

在获取源文件时，如果 VS Code 右下角出现下图提示，请先根据提示的内容配置环境变量。

![subscription](/assets/dx/vs_extension/vs_extension06.png)
参考[创建项目](/developer/create_project/index)-设置环境变量

- 在 VS Code 中，右键单击某一元文件或目录，然后选择 ****Steedos:retrieve source**，但仅获取当前文件或该目录包含的所有内容。

![subscription](/assets/dx/vs_extension/vs_extension07.png)

### 部署原文件：deploy source

- 在 VS Code 中，右键单击某一元文件或目录，然后选择 **Steedos:deploy source**，便可以将该单文件或该目录及包含的内容全部部署到服务器。

![subscription](/assets/dx/vs_extension/vs_extension08.png)

### 浏览并下载元数据

#### 浏览元数据

左侧功能栏中选择已安装的Steedos即可浏览元数据。

![subscription](/assets/dx/vs_extension/vs_extension18.png)

#### 下载元数据

选中要下载的元数据，点击右侧下载按钮即可下载元数据。

![subscription](/assets/dx/vs_extension/vs_extension19.png)

### 更新指定文件夹

选择指定的文件夹即可更新该文件夹

![subscription](/assets/dx/vs_extension/vs_extension20.png)

### 更新指定文件

选择指定的文件即可更新该文件

![subscription](/assets/dx/vs_extension/vs_extension21.png)
