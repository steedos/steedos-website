---
title: 入门
---

## 什么是Steedos DX项目？

steedos DX项目是一个源格式的元数据的本地目录结构，且允许使用steedos DX的工具来开发和测试。它包括配置文件和源格式的元数据，当您使用创建新的steedos DX项目时，它会为您创建项目目录结构，以此开始steedos DX项目的功能体验。

## Steedos将如何改变您的工作方式？

Steedos是新一代的低代码开发平台，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。

### 亮点

- 您可以使用所熟悉的开发工具和技术
- 您可以通过使用命令行来实现与Steedos合作开发，持续集成和项目部署
- Steedos 创新的使用元数据定义业务模型，并可在必要时编写代码，您开发的项目源码也可以保存到版本库中实现版本迭代，对于大型项目也方便多人协作
- Steedos 提供了VS Code扩展，可视化的部署和获取源文件，方便实现双向同步，同时您也可以通过VS Code的命令行面板，创建特殊格式的文件，如router，trigger等。

### 您准备好开始了吗？

以下是使用Steedos DX工作流，这些步骤包括最常见的CLI命令，对于Steedos CLI支持的所有命令，请参阅 [命令指南](/dx/command_reference)

- 安装Steedos CLI [Steedos CLI](/dx/setup_guide)
- 使用示例项目入门
- 创建新的应用程序
- 通过现有项目开始Steedos DX项目

#### 系统要求

为了更好的使用steedos DX，请您在开始之前检查是否符合以下要求，如不符请先升级版本，再进行后续操作

- steedos platform 1.23 +
- mongodb 4.2 +

### 开始第一个项目

Steedos DX为您提供了不同的选项来创建Steedos DX项目，您可以同时使用喜欢的版本控制系统，如Git，以此来管理团队的开发进程。

|  序号   |  创建方法   | 创建方式  |
|  ----  |  ----  |  ----  |
|  1   | 使用GitHub上的示例项目  | 使用示例项目来了解Steedos DX的功能 |
|  2   | 创建Steedos DX项目  | 通过命令直接创建Steedos DX 项目 |
|  3   | 通过现有项目创建Steedos DX  | 通过将现有项目转换成新格式开始Steedos DX项目开发 |

#### 1、使用GitHub上的示例项目

- 打开终端或命令控制符窗口，克隆GITHub上的示例steedos-app-contract

```yml
git clone https://github.com/steedos/steedos-app-contract.git
```

- 将源码clone到本地文件夹后，在终端或命令控制符窗口执行以下代码，切换目录. 

```yml
cd steedos-app-contract
```

- 安装依赖

```yml
yarn
```

- 启动

```yml
yarn start
```

#### 2、创建Steedos DX项目

- 创建名为my-app 的项目

```yml
npx create-steedos-app my-app
```

- 切换到my-app项目目录

```yml
cd my-app
```

- 安装依赖

```yml
yarn
```

- 启动

```yml
yarn start
```

steedos DX项目具有特定的项目结构和格式，项目创建后，您的项目文件结构如图所示：

![subscription](/assets/dx/project_setup/project_setup01.png)

#### 3、通过现有项目创建Steedos DX

如果您已经是Steedos开发人员或已经在Steedos上创建了自己的应用程序，您还可以通过[项目转化](/dx/convert_project)的方式实现现有项目转为Steedos DX项目。

## 创建开发者账户

项目启动后就可以

- 打开华炎魔方开发者网站根据要求注册开发者账号 [华炎魔方--开发者网站](https://huayan.my.steedos.com:8443)

![subscription](/assets/dx/developer_guide/developer_guide01.png)

- 账号登录成功后，点击设置，打开“API Key”并点击右上角“创建API Key”按钮，此时创建成功，并点击“复制API Key”按钮，如图

![subscription](/assets/dx/developer_guide/developer_guide02.png)

![subscription](/assets/dx/developer_guide/developer_guide03.png)

- 再次打开本地服务，将复制的许可证添加到如图所示的公司设置中，至此开发者账户创建成功

![subscription](/assets/dx/developer_guide/developer_guide04.png)

## 如何测试，构建和发布

如何测试、生成和发布包来继续开发是当前应用程序生命周期的转变，但现在可以选择软件包的开发模型。最终目标是使用易于维护、更新、安装和升级的目录创建包。您可以在整个包开发生命周期内使用 steedos CLI。持续集成 （CI） 是关于针对合并到应用程序的每组更改自动执行一致的测试运行。这一重要过程可确保在任何损坏的更改进入源存储库之前的应用程序质量。

尽管软件包开发是管理元数据中更改的一种有效方式，但我们仍然支持与当前方法并行的生成和部署过程。我们可以使用 steedos CLI 命令来处理生成和部署用例，source:deploy。创建并测试应用或自定义项后，即可创建部署项目。您可以部署所有源或部署已更改的文件。

## 生成并发布您的软件

编写好代码后，下一步就是部署，我们目前支持：

- 元数据API生成和发布应用：通过steedos CLI命令来执行打包操作，包括JS在内的所有文件
- 通过页面的软件包管理来生成和发布：不包括JS文件
