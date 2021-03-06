---
title: 桌面客户端
---

## 桌面客户端下载

华炎魔方桌面客户端提供开机自启动、文档在线编辑、待办文件弹出提醒等扩展功能。请先下载客户端后，按安装向导把客户端软件安装到您的mac或windows系统电脑上。

<div className="flex items-start flex-wrap">
<div className="w-1/2 py-6">

#### Windows 客户端

- ![Windows](/img/desktop-windows.png)

<br/>

<a class="bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3" href="https://www-steedos-com.oss-accelerate.aliyuncs.com/apps/messenger/desktop/4.4.2/steedos-4.4.2-win.exe" target="_blank">
下载
</a>

</div>
<div className="w-1/2 py-6">

#### Mac 客户端

- ![Mac](/img/desktop-mac.png)

<br/>

<a class="bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3" href="https://www-steedos-com.oss-accelerate.aliyuncs.com/apps/messenger/desktop/4.3.2/steedos-4.3.2-mac.dmg" target="_blank">
下载
</a>

</div>
</div>

## 配置服务地址

安装完成后并打开软件，会出现新增服务器页面，输入以下信息并点击保存来应用该配置：

- 服务器显示名：一般为公司名称或或产品简称。例如：华炎魔方。

- 服务器URL：请输入要访问的华炎魔方地址，比如：http://localhost:3000/

配置完成后，点击需进入的服务器项或者右上角的“X”号，即可进入华炎魔方系统。

:::note 提示
华炎魔方客户端相当于一款浏览器客户端，您可以通过点击客户端左上角的菜单按钮，点击“文件->设置”菜单进入设置界面来管理服务器列表。
:::

## 为什么要使用客户端

华炎魔方支持浏览器直接访问，推荐使用chrome浏览器，在浏览器上使用华炎魔方基本上具备包括推送通知在内的所有功能，那么为什么还要安装使用客户端呢？

### 使用浏览器的限制

华炎魔方在开发之初就优先考虑在chrome浏览器上的表现，测试也基本上是在这个浏览器上进行。但是其他浏览器几乎很少考虑，比如包括IE11在内的所有IE系列浏览器都明确不被华炎魔方所支持，但是windows上的Edge及mac上的safari浏览器还是支持的，不过在某些地方其表现可能没有在chrome上好。

:::note 浏览器兼容性
华炎魔方只支持Chrome、Safari和Edge浏览器，我们推荐使用华炎魔方客户端。
:::

### 推送通知

华炎魔方虽然考虑了浏览器上的推送通知功能，但是其推送通知功能的用户体验并没有客户端好，另外浏览器进程及界面必须一直开着才能收到推送通知，而客户端是可以在后台运行时收到推送通知的。

需要注意的是，如果您自行部署华炎魔方而不是使用我们的云平台，请部署到https域名服务上，而不是http域名服务，否则将收不到推送通知。

### 客户端独有功能

虽然华炎魔方初始版本的开发和测试都是基于chrome浏览器，但是我们最终还是以支持客户端为优先考虑目标，而且客户端上也会支持一些额外的独特功能。

在桌面客户端上，华炎魔方目前额外支持的功能主要是以doc、docx后缀的office文件的在线编辑功能，在[审批王](/help/workflow/instance_approve#附件查看)应用中，您在申请单详细界面只要点击某个正文或附件的链接，华炎魔方就能帮您打开本地安装的office客户端软件来在线查看和编辑这些文件，而且只会在您有这些文件的编辑权限时才放开编辑功能，否则只能用office软件在线查看这些文件。

其外，华炎魔方还有一些其他独特功能也只会在桌面客户端上被支持，比如doc、docx文件转pdf，pdf文件加锁或签章等。
