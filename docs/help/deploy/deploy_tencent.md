---
title: 腾讯云部署
---

## 系统启用

在腾讯云市场中购买免费的[华炎魔方](https://market.cloud.tencent.com/products/24142)商品。

点击 **立即购买**：

![立即购买](/assets/help/deploy/tencent/立即购买.png)

根据需要选择计费模式、地域、和可用区，网络默认即可，实例的配置可根据需要自行选择，华炎魔方对系统配置无特别要求

![计费模式](/assets/help/deploy/tencent/计费模式.png)

确认镜像名称为华炎魔方、公网带宽勾选免费分配独立公网 IP、带宽调整至 100Mbps，确认之后点击 **下一步：设置主机**：

![确认镜像和带宽](/assets/help/deploy/tencent/确认镜像和带宽.png)

在设置主机界面新建安全组，勾选 **TCP：80** 和 **TCP：443** 开放 web 访问端口：

![新建安全组](/assets/help/deploy/tencent/新建安全组.png)

设置实例名称和密码，设置之后点击 **下一步：确认配置信息**：

![设置实例名称和密码](/assets/help/deploy/tencent/设置实例名称和密码.png)

确认配置信息之后，勾选 **同意《腾讯云服务协议》** ，点击 **开通**

待实例启动后即可通过在浏览器中输入分配的公网 IP 访问华炎魔方，创建账号。

![公网IP](/assets/help/deploy/tencent/公网IP.png)

![创建账户](/assets/help/deploy/tencent/创建账户.png)

华炎魔方帮助文档：https://www.steedos.com/help/

## 系统开发及配置说明

提供在浏览器中远程开发的方式进行代码开发。

首先编辑实例所在安全组的入站规则，添加 8080 端口

在实例列表点击实例 ID 进入实例详细信息页面：

![打开实例详细信息页面](/assets/help/deploy/tencent/打开实例详细信息页面.png)

编辑入站规则：

![编辑规则](/assets/help/deploy/tencent/编辑规则.png)

添加入站规则：

![添加远程开发入站规则](/assets/help/deploy/tencent/添加远程开发入站规则.png)

| 类型   | 来源      | 协议端口 | 策略 |
| ------ | --------- | -------- | ---- |
| 自定义 | 0.0.0.0/0 | TCP:8080 | 允许 |

添加之后可在浏览器中访问 `http://{公网IP}:8080/` ， MAC 请使用 Safari 浏览器，Windows 建议使用 Chrome 浏览器

由于是 HTTP 访问，浏览器会提示警告，请点击**访问此网站**，进入输入密码界面：

![输入code-server密码](/assets/help/deploy/tencent/输入code-server密码.png)

密码需要登录进实例查看，打开本地终端输入：

```bash
ssh ubuntu@{公网IP}
# 密码为新建实例时设置的实例密码
```

进入实例后运行：

```bash
cat /home/ubuntu/.config/code-server/config.yaml
```

在输出的内容中 **password:** 后字符串即为打开远程开发编辑器的密码（此密码在实例重启后会重置），输入密码后可看到编辑页面。

### 编辑器中可打开终端执行服务的停止、启动命令

![打开终端](/assets/help/deploy/tencent/打开终端.png)

停止服务：

```bash
sudo pm2 stop server.js
```

启动服务：

```bash
sudo pm2 start server.js
```

如需要开机启动可执行以下命令：

```bash
sudo pm2 save
sudo pm2 startup
```

### 配置文件说明

**.env.local** 文件可配置服务的环境变量，方便用户自定义访问地址、连接指定数据库、使用自己的邮件及短信服务等。详细说明可访问 https://www.steedos.com/help/deploy/env

### 代码开发

代码开发可参考教程：https://www.steedos.com/developer/
