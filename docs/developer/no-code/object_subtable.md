---
title: 零代码 - 业务对象子表
sidebar_label: 业务对象关联
---

下面，以资产调拨为例，为资产台账创建一个子表，记录资产的调拨信息。

## 创建业务对象：资产调拨

进入“设置”-“业务对象”-“对象管理”，新建一个资产调拨业务对象，依次输入对象名（一般为英文），显示名称，选择合适图标。

![零代码-新建](/assets/no-code/assetallocation_new.png)

保存完成创建，并进入资产调拨详情页。

![零代码-资产](/assets/no-code/assetallocation_1.png)

## 设置为资产表的子表，并添加相关字段

可以看到刚创建的资产调拨有一个默认字段：名称，我们可以将此字段改名为调拨说明。

![零代码-字段](/assets/no-code/assetallocation_2.png)

为了把资产调拨挂到资产表下面作为子表，我们需要创建一个“相关资产”的字段，字段类型选择“主表/子表”，在引用对象中选择“资产”。通过设置“主表/子表”类型的字段，两个表之间自动创建了关联关系。

![零代码-字段](/assets/no-code/assetallocation_3.png)

最后可以为资产调拨添加其他字段例如调拨日期、调出部门、调入部门等。

## 配置列表视图

返回资产调拨对象管理界面，点击系统自动创建的列表视图：“所有”，可以看到显示的字段只有名称。把需要显示在列表页上的新增字段依次添加进去：相关资产、调拨日期、调出部门、调入部门。

![零代码-视图](/assets/no-code/assetallocation_4.png)

## 配置应用程序

点击应用程序设置，点击进入资产管理详情页，主菜单项选择加上刚创建的“资产调拨”，保存完成资产管理台账中新增资产调拨。

![零代码-应用](/assets/no-code/assetallocation_5.png)

## 试用新版资产管理应用

点击进入新版的资产管理应用，可以看到两个主菜单栏：资产、资产调拨。

点击进入资产列表，选择“打印机”，进入打印机详情页，可以看到，此时多了一个资产调拨子表，点击新建可以直接为当前资产创建一条“资产调拨”记录。

![零代码-应用](/assets/no-code/assetallocation_6.png)

点击主菜单的资产调拨选项卡，可以查看所有资产的调拨明细。