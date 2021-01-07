---
title: 项目设置
---

Steedos DX为您提供了不同的选项来创建Steedos DX项目，您可以同时使用喜欢的版本控制系统，如Git，以此来管理团队的开发进程。

|  创建方法   | 创建方式  |
|  ----  | ----  |
| 使用GitHub上的示例项目  | 使用示例项目来了解Steedos DX的功能 |
| 创建Steedos DX项目  | 通过命令直接创建Steedos DX 项目 |
| 通过现有项目创建Steedos DX  | 通过将现有项目转换成新格式开始Steedos DX项目开发 |

### GitHub上的示例

利用Git 克隆示例项目到本地

```yml
git clone https://github.com/steedos/steedos-app-contract.git
```

### 创建Steedos DX项目

- 1、创建名为my-app 的项目

```yml
npx create-steedos-app my-app
```

- 2、切换到my-app项目目录

```yml
cd my-app
```

- 3、安装依赖

```yml
yarn
```

- 3、启动

```yml
yarn start
```

### Steedos DX项目结构和源格式

steedos DX项目具有特定的项目结构和格式，项目创建后，您的项目文件结构如图所示：

![subscription](/assets/dx/project_setup/project_setup01.png)

### 通过现有项目创建Steedos DX

如果您已经是Steedos开发人员或已经在Steedos上创建了自己的应用程序，您可以通过下面的方式实现现有项目转为Steedos DX项目。

#### source:convert命令

将旧文件格式转化并本地生成metadata要求的新格式yml文件

该命令包含两个参数：

- 【-o | oldProjectPath】需要转化的旧文件路径
- 【-t | targetPath】新格式文件生成的路径，可选，默认生成位置与需要转化的旧文件路径【src】同级

示例如下：

```yml
steedos source:convert -o C:\GitHub\steedos-app-contract\src -t C:\GitHub\steedos-app-contract
```

如下图所示，转换前现有项目的结构是：

![subscription](/assets/dx/project_setup/project_setup02.png)

转换成新格式的项目目录结构图：

![subscription](/assets/dx/project_setup/project_setup03.png)

其中，steedos-app 为生成的新格式元数据所在的目录，位置为命令中【-t】所指的路径，若未选，默认与需要转化的旧文件路径【src】同级。

## 另请参阅

- [数据同步](/dx/data_synchronization)
- [项目转化](/dx/convert_project)
- [开发者指南](/dx/developer_guide)
- [命令指南](/dx/command_reference)
- [设置指南](/dx/setup_guide)
- [入门指南](/dx/get_start)
- [Steedos DX](/dx/summary)
