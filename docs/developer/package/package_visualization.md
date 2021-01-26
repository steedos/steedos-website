---
title: 可视化打包
---

<!-- ## 准备工作

### 设置环境变量

```yml
STEEDOS_DEVELOPER_SERVER=https://huayan-beta.my.steedos.com:8443/
```

### 开发者账户 -->

:::note 提示
若未注册开发者账户，请先注册，否则无法正常打包
:::

- [注册开发者账户](/developer/register/index)

### 打包

- 打开本地服务，进入到 “设置”-“应用程序”-“软件包”-“软件包管理器” 页面，点击“新建”，创建一个新的软件包

<!-- ![subscription](/assets/developer/package/package07.png) -->

- 当软件包新建完成后，此时为空包，需要加入自定义的组件，进入该软件包的详情页面，点击左上角有“软件包组件”

![subscription](/assets/developer/package/package08.png)

- 点击右上角的“新建”按钮，创建一个新的软件包组件

<!-- ![subscription](/assets/developer/package/package09.png) -->

- 此时可以自定义添加已定义的对象、应用、视图等，点击“保存”，一个带有自定义功能的软件包则打包完成

![subscription](/assets/developer/package/package10.png)

### 发布

- 为了使您的软件包可以供他人使用，此时需要发布到服务器上，即“上载”，进入该软件包的详情页面，点击右上角的“上载”，填写当前版本信息后点击“保存”，即可完成发布

![subscription](/assets/developer/package/package11.png)

- 进入详情页面，点击左上角的“软件包版本”，可以查询到已发布的软件包

![subscription](/assets/developer/package/package12.png)

- 查看某个已发布的软件包，可以看到该软件包的ID及密码（密码为可选），根据ID及密码可以实现软件包的[可视化安装](/developer/package/package_deploy_visualization)

![subscription](/assets/developer/package/package13.png)

### 故障排除

- 在上载时，如果API Key有误则会有如下错误提醒

```yml
Error: API Key无效
```

- 解决方案：API Key无效说明未注册开发者账户或者注册过程有误，重新[注册开发者账户](/developer/register/index)即可
