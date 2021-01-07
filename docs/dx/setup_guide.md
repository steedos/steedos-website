---
title: Steedos CLI Setup Guide
sidebar_label: 设置指南
---


## 安装

### 前期准备

为了更好的使用steedos CLI，请您在开始之前检查是否符合以下要求，如不符请先升级版本，再进行后续操作

- steedos platform 1.23 +
- mongodb 4.2 +

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
error: Please upgrade the platform license to Enterprise Edition
```

## 另请参阅

- [命令指南](/dx/command_reference)
