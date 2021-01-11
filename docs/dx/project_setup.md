---
title: 项目创建（已去除）
---

Steedos DX为您提供了不同的选项来创建Steedos DX项目，您可以同时使用喜欢的版本控制系统，如Git，以此来管理团队的开发进程。

|  创建方法   | 创建方式  |
|  ----  | ----  |
| 使用GitHub上的示例项目  | 使用示例项目来了解Steedos DX的功能 |
| 创建Steedos DX项目  | 通过命令直接创建Steedos DX 项目 |
| 通过现有项目创建Steedos DX  | 通过将现有项目转换成新格式开始Steedos DX项目开发 |

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

如果您已经是Steedos开发人员或已经在Steedos上创建了自己的应用程序，您还可以通过[项目转化](/dx/convert_project)的方式实现现有项目转为Steedos DX项目。
