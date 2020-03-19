---
title: 配置触发器
---

在上一期中，我们创建了一个新的业务对象：合同。合同的字段中有5个与金额相关的字段，分别是：合同金额、已支付总金额、未支付总金额、已收款总金额、未收款总金额，这5个字段分别由用户自行录入。

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

在src项目源码中创建一个名为contracts.trigger.js文件，配置以下2个触发器：

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

在scontracts.trigger.js文件中，编写caculateAmount的处理逻辑代码。

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

