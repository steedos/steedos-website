---
title: 阿里云部署
---

## 系统启用

在阿里云市场中购买免费的[华炎魔方](https://market.aliyun.com/products/55530001/cmjj00044629.html)商品。

点击 **立即购买**：

![立即购买](/assets/help/deploy/aliyun/立即购买.png)

根据需要选择计费模式、地域、和可用区，实例的配置可根据需要自行选择，华炎魔方对系统配置无特别要求：

![计费模式](/assets/help/deploy/aliyun/计费模式.png)

确认镜像名称为**华炎魔方**，确认之后点击 **下一步：网络和安全组**：

![确认镜像](/assets/help/deploy/aliyun/确认镜像.png)

网络默认即可，公网 IP 勾选**分配公网 IPV4 地址**、带宽计费模式选择**按使用流量**，带宽峰值调整至 **80Mbps**：

![确认公网地址和带宽](/assets/help/deploy/aliyun/确认公网地址和带宽.png)

**新建安全组**，网络选择与此页面保持一致，其他默认即可，点击**创建安全组**：

![点击新建安全组](/assets/help/deploy/aliyun/点击新建安全组.png)

创建之后回到安全组配置中选择刚刚创建的安全组，确认之后点击 **下一步：系统配置**：

![选择安全组](/assets/help/deploy/aliyun/选择安全组.png)

设置实例名称和密码，设置之后点击 **确认订单**：

![设置实例名称和密码](/assets/help/deploy/aliyun/设置实例名称和密码.png)

确认配置信息之后，勾选 **《云服务器 ECS 服务条款》 | 《镜像商品使用条款》** ，点击 **创建实例**

待实例启动后即可通过在浏览器中输入分配的公网 IP 访问华炎魔方，创建账号。

![公网地址](/assets/help/deploy/aliyun/公网地址.png)

![创建账户](/assets/help/deploy/aliyun/创建账户.png)

华炎魔方帮助文档：https://www.steedos.com/help/

## 系统开发及配置说明

提供在浏览器中远程开发的方式进行代码开发。

首先编辑实例所在安全组的入站规则，添加 8080 端口

在实例列表点击实例 ID 进入实例详细信息页面：

![打开实例详细信息页面](/assets/help/deploy/aliyun/打开实例详细信息页面.png)

编辑入站规则：

![编辑规则](/assets/help/deploy/aliyun/编辑规则.png)

**手动添加**入站规则：

![添加远程开发入站规则](/assets/help/deploy/aliyun/添加远程开发入站规则.png)

| 授权策略 | 优先级 | 协议类型   | 端口范围  | 授权对象  |
| -------- | ------ | ---------- | --------- | --------- |
| 自定义   | 1      | 自定义 TCP | 8080/8080 | 0.0.0.0/0 |

添加之后可在浏览器中访问 `http://{公网IP}:8080/` ， MAC 请使用 Safari 浏览器，Windows 建议使用 Chrome 浏览器

由于是 HTTP 访问，浏览器会提示警告，请点击**访问此网站**，进入输入密码界面：

![输入编辑器密码](/assets/help/deploy/aliyun/输入编辑器密码.png)

密码需要登录进实例查看，打开本地终端输入：

```bash
ssh root@{公网IP}
# 密码为新建实例时设置的实例密码
```

进入实例后运行：

```bash
cat /root/.config/code-server/config.yaml
```

在输出的内容中 **password:** 后字符串即为打开远程开发编辑器的密码（此密码在实例重启后会重置），输入密码后可看到编辑页面。

### 编辑器中可打开终端执行服务的停止、启动命令

![打开终端](/assets/help/deploy/aliyun/打开终端.png)

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
