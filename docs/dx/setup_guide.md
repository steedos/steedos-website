---
title: Steedos CLI
sidebar_label: 概述
---

我们提供的一个工具是灵活而强大的 Steedos 命令行接口 （CLI）。您可以使用 CLI 从命令行管理包开发过程。CLI 结合了来自多个 Steedos API 的许多功能，例如元数据 API、工具 API 和数据 （SOAP） API。它还支持 Ant 迁移工具的功能，该工具允许编写元数据任务的脚本。借助新的和改进的 CLI，所有重要 API 的所有开发任务都可在一个位置提供。您可以编写从组织创建到数据导入和导出的所有内容，这些内容是管理整个开发生命周期所需的一切。想想你可以创建的所有很酷的脚本，使重复开发任务更容易！

:::note 提示
企业版的才可以使用Steedos CLI相关功能，请提前升级为企业版。
:::

## 安装

### 前期准备

为了更好的使用 Steedos CLI，请您在开始之前检查是否符合以下要求，如不符请先升级版本，再进行后续操作

- Steedos Platform 1.23 +
- Mongodb 4.2 +

### 安装命令

- 打开终端或命令提示符窗口，使用npm安装

```yml
npm install steedos-cli@next --global
```

- 或使用 yarn 安装

```yml
yarn global add  steedos-cli@next
```

### 验证安装

- 打开终端或命令提示符窗口，运行此命令

```yml
steedos --version
```

展示结果：

```yml
steedos-cli/1.23.0-alpha.7 win32-x64 node-v12.20.0
```

- 运行steedos命令，可以查看Steedos CLI所包含的所有命令

```yml
steedos
```

展示结果：

```yml
COMMANDS 
  auth
  convert  Create steedos project object i18n
  data
  help     display help for steedos
  i18n     Create steedos project object i18n
  package
  source
```

## 配置和提示

### 配置

- 您可以通过source:config命令来设置环境变量，通过以下步骤会自动生成.env.local文件

```yml
steedos source:config
```

展示结果(可自行设置与修改相关配置，具体操作见下文):

```yml
metadata server:(http://localhost:5000/)
metadata api key:OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe
```

- 以下为.env.local文件中内容，如果需要更改METADATA_SERVER值，可自行修改

```yml
[metadata]
METADATA_SERVER=http://localhost:5000/
METADATA_APIKEY=OwOFMQOcRilzJpu0Q8ix0XOZjiJAT_B_CklKc6XULVe
```

- 其中：

```yml
METADATA_SERVER  默认是localhost:5000
METADATA_APIKEY  可通过本地服务获取到 APIKEY
```

![subscription](/assets/dx/setup_guide/API_key.gif)

### 提示

- 在每个级层中都可以通过help来查看更多信息

```yml
steedos --help                    // 顶级列表
steedos source --help             // source包含的所有命令列表
steedos package --help            // package包含的所有命令列表
steedos source:deploy --help      // source:deploy命令的详情
steedos package:build --help      // package:build命令的详情
```

## 更新

- 如果需要通过npm更新Steedos CLI，请运行：

```yml
npm install steedos-cli@next -global
```

### 故障排除

- 当未配置环境变量时会有如下错误提醒

```yml
Error: Please config with steedos source:config
```

- 当没有购买许可证或需要升级许可证时会有如下提醒

```yml
Error: Please upgrade the platform license to Enterprise Edition
```
