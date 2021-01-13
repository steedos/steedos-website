---
title: 创建项目
---

## 系统要求

为了更好的使用Steedos DX，请您在开始之前检查是否符合以下要求，如不符请先升级版本，再进行后续操作

- Steedos Platform 1.23 +
- Mongodb 4.2 +

## 创建空项目

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

Steedos DX项目具有特定的项目结构和格式，项目创建后，您的项目文件结构如图所示：

![subscription](/assets/dx/project_setup/project_setup01.png)

## 克隆模版项目

[GITHub 示例项目](https://github.com/steedos/awesome-steedos-apps)

- 打开终端或命令控制符窗口，这里以Contract Management为例克隆GITHub上的示例项目steedos-app-contract

```yml
git clone https://github.com/steedos/steedos-app-contract.git
```

- 将源码clone到本地文件夹后，在终端或命令控制符窗口执行以下代码，切换目录

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

## 项目结构简介

项目创建后，您的项目文件夹内容如图如下：

![文件夹结构](/assets/文件夹结构1.png)

其中

- **src**: 项目源码
- **.env**: 环境变量配置文件，可以配置端口、URL等环境变量。

> 建议修改.env.local中的ROOT_URL，其默认值中的IP为“127.0.0.1”，可改用本机的IP地址。这样，在其他机器就可以用ROOT_URL来访问系统了。
> 如果是多人协作同一个项目的时候，推荐各自新建 .env.local 来替代 .env 。如果存在文件.env.local 。 系统启动时，就从文件.env.local中读取环境变量。反之，如果不存在文件.env.local，系统启动时，则从文件.env中读取环境变量。

- **steedos-config.yml**: 项目配置文件，可以配置数据源、插件等参数。
- **package.json**: 主要用于配置本项目依赖的npm包。

## 设置环境变量

.env，用于配置环境变量，位于项目的根目录。

如果是多人协作同一个项目的时候，推荐各自新建 .env.local 来替代 .env 。

> 如果存在文件.env.local，系统启动时，就从文件.env.local中读取环境变量。反之，如果不存在文件.env.local，系统启动时，则从文件.env中读取环境变量。

### 默认的环境变量

项目创建后，默认的环境变量包括：

```yml
MONGO_URL=mongodb://127.0.0.1:27017/steedos
PORT=5000
ROOT_URL=http://127.0.0.1:5000
```

可按需修改这些环境变量的值。修改后，重启服务即生效。

- MONGO_URL ： MongoDB的连接URL
- PORT ： 系统的端口号
- ROOT_URL ： 系统的访问网址，建议改用本机的IP地址。这样，在其他机器就可以用ROOT_URL来访问系统了。

### 自定义环境变量

可以在.env.local / .env 中，按需配置自定义的环境变量。 自定义的环境变量主要服务于[steedos-config.yml](https://www.steedos.com/developer/steedos_config) 。

例如，在.env.local中添加自定义的环境变量

```yml
ENV_CFS_STORE=local
```

定义环境变量ENV_CFS_STORE=local 后，就可以在steedos-config.yml 里引用它。

```yml
public:
  cfs:
    storage: ${ENV_CFS_STORE} # 通过${ENV_CFS_STORE}获取在.env.local中添加的变量的值
```

## 项目运行

### 启动服务

终端执行以下代码：

```bash
yarn start
```

### 停止服务

如果要停止项目，在终端上同时按住键盘上的Ctrl + C，输入y即停止服务。

```bash
终止批处理操作吗(Y/N)? y
```
