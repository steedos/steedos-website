---
title: 合同审批自动进入合同台账
sidebar_label: 审批自动进入台账
---

在华炎云平台中定义的业务对象，可以与华炎云平台中定义的审批流程进行集成。这样的信息同步包括两种方式：
- 从业务对象台账中发起业务审批流程；
- 将华炎云平台中的业务流程归档到业务对象台账中。

在之前的培训教程中，我们学会了配置合同台账，可以在系统中增加和编辑合同记录；我们也配置了合同审批流程，在正式签署合同之前，可以由相关部门审批并决定是否签署合同。如果在合同审批流转时，自动在合同台账中增加这样的合同记录、并附上最新的合同文本，不但能有效降低信息录入的工作量，也使得合同台账记录更加及时、准确。

下面，我们就来看下，如何使得合同审批单能自动进入合同台账？

## 修改表单

对照合同审批单和合同台账，我们发现，表单上的“合作伙伴”字段需要作调整。目前的合同审批单上的“合作伙伴”是自己填写的，而台账里有“合作伙伴”这个对象，用于记录所有的合作伙伴。所以，合同审批单上的字段“合作伙伴”需调整为从“合作伙伴”这个对象来读取数据。

### 读取合作伙伴数据

进入合同审批流程的“表单设计器”，删去原来的字段“对方单位”，并重建一个Odata类型的字段“对方单位”

![表单设计器](/assets/guide_sc_field.png)

图中的Odata API为 http://localhost:5000/api/odata/v4/5dfde903c57fd41abc81496d/accounts?%24top=50&%24select=name&%24count=true， 其中的“5dfde903c57fd41abc81496d”需替换为当前的工作区的spaceID

## 修改系统配置

在根目录下的steedos-config.yml中，给系统增加一配置项，设置对象流程的同步频率instancerecordqueue_interval 。

``` bash
cron:
  instancerecordqueue_interval: 10000
```

## 修改应用

业务对象默认不使用配置对象流程，如果要使用，必须打开这一开关。

### 打开合同的配置对象流程开关

在contracts.object.yml中，给合同对象增加一个属性：配置对象流程开关enable_workflow 。

``` bash
enable_workflow: true
```

### 修改合同状态字段

在contracts.object.yml中，用默认/自动的审批状态字段instance_state替代手动维护的原合同状态字段contract_state 。这样，流程审批时，审批中、已核准、已驳回、已取消等审批状态就能同步为合同的即时状态。

``` bash
  // contract_state:
  instance_state:
    type: select
    label: 合同状态
    searchable: true
    omit: false
    hidden: false
```

## 重启服务

重启服务后，系统及合同对象的上述配置修改才会生效。

## 配置对象流程

在设置里，进行对象流程的配置。新增一个合同审批同步到合同给台账的 对象流程记录，具体设置如下：

![对象流程](/assets/guide_sc_objectflow.png)

## 运行合同审批同步

### 提交合同审批单，确认同步情况

在审批里提交一个合同审批单，并附上合同文本。

![提交](/assets/guide_sc_flow1.png)

提交后，在合同应用里，可以看到已经自动生成了一条合同台账记录，同时也附上了合同文本。

![合同记录](/assets/guide_sc_contract1.png)

可以看到，合同状态为“审批中”。

### 处理直至核准合同审批单，确认同步情况

继续在审批里处理这个合同审批，当总经理核准后，再看合同台账。

![合同记录](/assets/guide_sc_contract2.png)

可以看到，合同状态已同步为“已核准”了，同时合同文本也是审批过程中的最新版本。

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程8、合同审批自动进入合同台账](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson8) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson8
yarn
```

### 启动教程8项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程8项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程8项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
