---
title: VScode扩展
---

![subscription](/assets/dx/dx07.png)

![subscription](/assets/dx/dx06.png)

VS Code 的 Steedos 扩展支持软件包开发模型，包括创建项目。
软件包开发模型：允许您创建包含应用程序的软件包，该模式包括源代码管理、持续集成和部署。

借助 VS（Visual Studio） 代码的 Steedos 扩展，您可以获得强大的集成开发环境，该环境是为 Steedos DX 自定义开发而创建的。这些扩展提供：

- 与 Steedos CLI 交互的功能
- 为包开发创建项目的功能
- 访问顶点语言服务器以进行语法突出显示和代码完成
- 支持可视化强制页面和组件

它还预先与 Git 集成，也可以与其他版本控制系统一起使用。

## 开始

在开始之前，请先在计算机上安装所需的软件。

### VS Code的安装

[Visual Studio Code 下载](https://code.visualstudio.com)，等下载完成后，打开安装程序并按照步骤完成安装。

### Steedos Extension Pack安装

您可以通过 VS Code 的扩展商城快速安装 Steedos Extension Pack。在扩展商城中搜索框中输入 Steedos，选择“Steedos Extension Pack”并点击“install”开始安装，默认该扩展会同时安装“Steedos CLI Integration”扩展，所以不需要单独安装CLI扩展。

![subscription](/assets/dx/vs_extension/vs_extension01.png)

![subscription](/assets/dx/vs_extension/vs_extension02.png)

## 设置默认软件包路径，用于同步数据

打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择
“Set Default Package Path”

![subscription](/assets/dx/vs_extension/vs_extension03.png)

![subscription](/assets/dx/vs_extension/vs_extension04.png)

## 数据同步

### 获取源：retrieve source

- 当您安装好扩展后，在 VS Code 的左侧工具栏会出现下图的图标，单击该图标，则会自动展示可以下载的源清单，您只需要点击所需文件的右边下载图标便可将其下载到本地文件，需要注意的是，如果本地已经存在改文件则会直接覆盖。

![subscription](/assets/dx/vs_extension/vs_extension05.png)

在获取源文件时，如果 VS Code 右下角出现下图提示，请先根据提示的内容配置环境变量。

![subscription](/assets/dx/vs_extension/vs_extension06.png)

- 在 VS Code 中，右键单击某一元文件或目录，然后选择 Steedos:retrieve source，但仅获取当前文件或该目录包含的所有内容。

![subscription](/assets/dx/vs_extension/vs_extension07.png)

### 部署原文件：deploy source

- 在 VS Code 中，右键单击某一元文件或目录，然后选择 Steedos:deploy source，便可以将该单文件或该目录及包含的内容全部部署到服务器。

![subscription](/assets/dx/vs_extension/vs_extension08.png)

## 创建特殊格式文件

您还能够创建特殊格式的文件，可以更加快速地开发

### 创建Trigger文件

- 1、打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择“Create Object trigger”

![subscription](/assets/dx/vs_extension/vs_extension09.png)

- 2、根据提示填写文件名称并回车

![subscription](/assets/dx/vs_extension/vs_extension10.png)

- 3、选择需要的trigger，可多选，点击“OK”

![subscription](/assets/dx/vs_extension/vs_extension11.png)

- 4、选择生成的目标目录，默认是“triggers”文件夹下，选择该目录并回车

![subscription](/assets/dx/vs_extension/vs_extension12.png)

- 5、生成trigger文件，内容如图

![subscription](/assets/dx/vs_extension/vs_extension13.png)

### 创建Router文件

- 1、打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择“Create Router”

![subscription](/assets/dx/vs_extension/vs_extension14.png)

- 2、输入router 文件名称，输入回车

![subscription](/assets/dx/vs_extension/vs_extension15.png)

- 3、选择将要生成的目录

![subscription](/assets/dx/vs_extension/vs_extension16.png)

- 4、生成的router文件内容如图所示

![subscription](/assets/dx/vs_extension/vs_extension17.png)
