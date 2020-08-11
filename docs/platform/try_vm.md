---
title: 专属试用环境
hide_title: true
sidebar_label: 试用
background: /img/banner/clouds-large-desktop.png
hide_table_of_contents: false
---

# 专属试用环境

和我们联系，可以在我们的服务器上为您开通专属的虚拟机环境，来进行华炎魔方的体验和试用。虚拟机上已部署好华炎魔方的系统，您可以在电脑和手机上直接试用。也可以体会如何通过修改系统配置或是代码，零代码/低代码达成您的开发需求。

专属试用虚拟机环境开通后，您将得到：

- 华炎魔方的试用网址，在电脑端和手机端都可以通过Internet来试用系统。
- 通过code-server访问华炎魔方代码的网址和密码，在电脑浏览器上就可以查看、维护代码，并可以重启系统服务。

## 电脑端访问系统

### 浏览器访问

在电脑上的浏览器中，输入华炎魔方的试用网址，就可以访问专属虚拟机上的华炎魔方系统。推荐使用Google Chrome浏览器。

![首页](/assets/try/vmtry_account.png)

### 初始化账户与工作区

首先，我们需要进行一些初始化的工作，包括创建账户和工作区。

点击“注册”，

![注册页](/assets/try/vmtry_signup.png)

输入姓名、邮箱和密码，点击“下一步”，

![新建企业](/assets/try/vmtry_space.png)

输入企业名称，点击“下一步”，这样就创建了您的工作区，并进入系统。

### 系统设置与使用

默认进入的是系统的“设置”页面。在“设置”中，您可以新建自己的流程，

![新建流程](/assets/try/vmtry_workflow.png)

也可以邀请同事一起试用。

![新建流程](/assets/try/vmtry_spaceuser.png)

要在设置和其他应用作切换，则点击左上角的切换图标。

![切换应用](/assets/try/vmtry_switch.png)

具体，如何进行设置与试用，可参考[系统帮助](/help/) 。

### 下载客户端

除了浏览器，您还可以下载客户端来试用系统。

<div className="slds-grid slds-wrap">
<div className="slds-col slds-size_1-of-2 slds-p-vertical_large">

#### Windows 客户端

- ![Windows](/img/desktop-windows.png)

<br/>

<a class="bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3" href="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/apps/messenger/desktop/4.4.2/steedos-4.4.2-win.exe" target="_blank">
下载
</a>

</div>
<div className="slds-col slds-size_1-of-2 slds-p-vertical_large">

#### Mac 客户端

- ![Mac](/img/desktop-mac.png)

<br/>

<a class="bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3" href="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/apps/messenger/desktop/4.3.2/steedos-4.3.2-mac.dmg" target="_blank">
下载
</a>

</div>
</div>

第一次进入客户端后，需配置下访问地址。

![切换应用](/assets/try/vmtry_client.png)

## 电脑端维护系统

### 进code-server，看代码

在电脑上的浏览器中，可通过code-server来查看华炎魔方代码。

推荐使用Google Chrome浏览器，输入代码网址

![登入](/assets/try/vmtry_cs_password.png)

输入密码，即可进入code-server

![codeserver](/assets/try/vmtry_cs_page.png)

### 改代码、重启服务、看效果

通过网页版的code-server，您可以修改系统代码，重启服务即可在浏览器中确认修改后的效果。

重启服务的方法如下：

（1）打开terminal窗口

![登入](/assets/try/vmtry_cs_newterminal.png)

![terminal](/assets/try/vmtry_cs_terminal.png)

（2）输入重启服务的命令，pm2 restart server.js

![命令](/assets/try/vmtry_cs_restart.png)

![反馈](/assets/try/vmtry_cs_restart2.png)

具体，如何进行代码的修改，可参考[开发教程](/developer/) 和 [配置文档](/developer/steedos_config)。

## 手机端访问系统

在手机上下载华炎办公手机客户端，可直接体验华炎魔方的手机版功能。您可以使用手机处理文件，也会收到待审批文件的推送提醒。同时，您还能在手机上查看和处理业务数据库台账信息及其附件。

### 下载App

<div className="slds-grid slds-wrap">
<div className="slds-col slds-size_1-of-2 slds-p-vertical_large">

#### iOS 客户端

- 使用‘微信’，扫描二维码下载：

<br/>

![苹果客户端](/assets/workflow/download-ios.png)

</div>
<div className="slds-col slds-size_1-of-2 slds-p-vertical_large">

#### Android 客户端

- 使用‘支付宝’，扫描二维码下载：

<br/>

![安卓客户端](/assets/workflow/download-android.png)

</div>
</div>

### 进入App

第一次进入App时，需配置下URL。

![切换应用](/assets/try/vmtry_app_page.png)

请选择“自定义服务器”，并输入华炎魔方的试用网址。

![切换应用](/assets/try/vmtry_app_login.png)

然后输入账户及密码，即可登陆系统。


import Section from '@site/src/components/Section';

<Section background="#215ca0" padding="50">
<div style={{color:"#FFFFFF"}}>

# 对于我们的快速开发工具有疑问？？
# 扫描以下二维码，我们的技术专家会为您解答。

我们的技术专家拥有十年以上的管理软件开发经验，无论您询问有关华炎魔方开发平台的功能、定价、实施或任何其他方面的问题，他们都将随时准备为您提供帮助。

![在线咨询](/assets/contact_by_weixin.png)

</div>
</Section>