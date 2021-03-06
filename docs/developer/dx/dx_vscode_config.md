---
title: 设置环境变量
---

## 配置 APIKEY

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

### 故障排除

- 当未配置环境变量时会有如下错误提醒

```yml
Error: Please config with steedos source:config
```

- 当没有购买许可证或需要升级许可证时会有如下提醒

```yml
Error: Please upgrade the platform license to Enterprise Edition
```

## 设置默认软件包路径，用于同步数据

打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择
“Set Default Package Path”

![subscription](/assets/dx/vs_extension/vs_extension03.png)

![subscription](/assets/dx/vs_extension/vs_extension04.png)
