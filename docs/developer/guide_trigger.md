---
title: 配置触发器
---

在前两期中，我们创建了一个新的业务对象：合同。合同的字段中有5个与金额相关的字段，分别是：合同金额、已支付总金额、未支付总金额、已收款总金额、未收款总金额，这5个字段分别由用户自行录入。

这样存在一个隐患，对于收款合同，因为是手工录入，合同金额可能不等于已收款总金额与未收款总金额之和。要解决这个问题，可以通过触发器机制来实现。

## 修改业务对象的字段

在contracts.object.yml中，修改合同对象包含的2个金额字段，将之设为只读。

``` bash
fields:
  unpaid_amount:
    label: 未支付总金额
    type: number
    scale: 2
    readonly: true
    sortable: true
    defaultValue: 0
  unreceived_amount:
    label: 未收款总金额
    type: number
    scale: 2
    readonly: true
    sortable: true
    defaultValue: 0
```

## 创建触发器

在src项目源码的contract目录中创建一个名为contracts.trigger.js文件，配置以下2个触发器：

```javascript
module.exports = {

  listenTo: 'contracts',

  afterInsert: async function () {
    await caculateAmount(this.doc._id);
  },

  afterUpdate: async function () {
    await caculateAmount(this.id);
  }
};
```
上述2个触发器分别在新建合同和修改合同时触发，执行caculateAmount 。

## 编写触发的执行代码

在contracts.trigger.js文件中，编写caculateAmount的处理逻辑代码。

```javascript
const objectql = require('@steedos/objectql');

async function caculateAmount(contractId) {
  if (!contractId) {
    console.error(`未提供contractId`);
    return;
  }

  const steedosSchema = objectql.getSteedosSchema();
  let contractObj = steedosSchema.getObject('contracts');
  let contract = await contractObj.findOne(contractId);
  if (!contract) {
    console.error(`未找到合同：${contractId}`);
    return;
  }

  let bop = contract.bop;
  let cAmount = contract.amount;
  let paidAmount = contract.paid_amount;
  let receivedAmount = contract.received_amount;

  if (bop == '付款合同') {
    let unPaidAmount = cAmount - paidAmount;
    let unReceivedAmount = 0;
    receivedAmount = 0;
    await contractObj.directUpdate(contractId, { 
      unpaid_amount: unPaidAmount, 
      unreceived_amount: unReceivedAmount, 
      received_amount: receivedAmount });
  } else if (bop == '收款合同') {
    let unReceivedAmount = cAmount - receivedAmount;
    let unPaidAmount = 0;
    paidAmount = 0;
    await contractObj.directUpdate(contractId, { 
      unreceived_amount: unReceivedAmount, 
      unpaid_amount: unPaidAmount, 
      paid_amount: paidAmount });
  }
}
```

这里的基本逻辑就是：对于是付款合同，未付款总金额 = 合同金额 - 已付款总金额 ；对于收款合同，未收款总金额 = 合同金额 - 已收款总金额 。

## 重启服务运行并查看效果

![触发器](/assets/trigger0.png)

![触发器](/assets/trigger1.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程4、配置触发器](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson4) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson4
yarn
```

### 启动教程4项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程4项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程4项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
