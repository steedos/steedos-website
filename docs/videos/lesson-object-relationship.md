---
title: 低代码开发教程：如何创建子表
sidebar_label: 业务对象关联
hide_table_of_contents: true
hide_title: true
background: /img/banner/service-overview-lg.png
---

<video src="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-relationship.mp4" controls="controls" poster="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-relationship.jpg" width="100%" loop="loop" autoplay="autoplay">
your browser does not support the video tag
</video>

## 华炎魔方低代码开发教程：如何创建子表

华炎魔方是新一代低代码开发平台，本教程以合同管理为例，为您演示如何为合同创建一个付款子表。

主要包括以下内容：
第一步，创建一个付款业务对象；
第二步，将付款设置为合同表的子表，并添加相关字段；
第三步，配置付款列表视图；
第四步，配置应用程序；

下面我为大家演示一下具体的操作过程。

首先登录华炎魔方，进入到管理员设置界面。

### 第一步，创建一个付款业务对象

点击对象管理。新建一个付款业务对象，依次输入对象名，显示名称，选择合适图标，点击完成。

### 第二步，将付款设置为合同表的子表，并添加相关字段

为了把付款挂到合同表下面作为子表，我们需要创建一个“相关合同”的字段，字段类型选择“主表/子表”，在引用对象中选择“合同”。

通过设置“主表/子表”类型的字段，两个表之间自动创建了关联关系。

点击进入合同列表，选择一个合同，进入详情页，可以看到，除了之前的附件子表，多了一个付款子表，点击新建可以直接为当前合同创建一条“付款”记录。

对于付款的业务来说，我们还必须要添加相关的业务字段，例如收款方、计划付款时间、付款金额、已完成等。

### 第三步，配置付款列表视图

在付款业务对象下，点击编辑列表视图，把需要显示在列表页上的新增字段依次添加进去。

### 第四步，配置应用程序

点击应用程序设置，点击进入合同管理详情页，菜单项选择加上刚创建的“付款”。

点击进入新版的合同管理应用，可以看到新增的主菜单栏：付款。

在合同列表页选中一个合同，可以查看与该合同相关的付款记录，并且可以快速创建。

点击付款可以直接查看付款的总列表，汇总显示了所有合同的付款记录。
