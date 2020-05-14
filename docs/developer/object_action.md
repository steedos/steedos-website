---
title: 操作按钮
---

系统内置三个基本操作：新增(`standard_new`)、修改(`standard_edit`)、删除(`standard_delete`)。

在此基础上，用户可以自定义按钮，并编写javascript脚本执行想要的操作。
### 声明对象的操作按钮
- label: 按钮显示标签
- on: 显示位置 
  - "list" 为列表定义action，只显示在列表右上角
  - "record" 为记录定义action，显示在记录查看页右上角，以及列表视图中每项的下拉菜单中
  - "record_more" 为记录定义action，显示在记录查看页右上角的“更多”下拉菜单中，以及列表视图中每项的下拉菜单中
  - "list_item" 为记录定义action，只显示在列表视图中每项的下拉菜单中
  - "record_only" 为记录定义action，只显示在记录查看页右上角
- sort: 排序号，显示时，按照从小到达顺序排列。编辑action的sort默认为0

### 创建按钮的动作
- listenTo: 对象名称，选填。如果没有定义此属性，则取文件名中第一个.之前的文字作为listenTo的值
- [操作按钮名称]: Function, 按钮点击后要执行的javascript脚本
- [操作按钮名称]Visible: Function | boolean, 用户控制按钮是否显示

### 使用代码编写操作按钮实例
`cost_recognition.object.yml`
```yml
...
actions:
  makePayableOrder:
    label: 生成应付记录
    on: record
  standard_new:
    visible: false //禁用新增
```

`cost_recognition.action.js`
```javascript
module.exports = {
    makePayableOrder: function (object_name, record_id, fields) {
      var collection_name, object, record, contract, cmDoc;
      contract = this.action.tempContract;
      record = this.action.tempRecord;
      object = Creator.getObject('account_payable');
      collection_name = object.label;
      cmDoc = {
        'company_id': record.company_id, // 付款单位
        'money': record.cost_amount, // 应付金额
        'pk_currtype': record.currency_type, // 币种
        'scomment': record.scomment, // 应付说明
        'supplier': record.supplier, // 收款单位
        'contract': record.contract, // 合同
        'taxrate': record.taxrate, // 税率
        'cost_recognition': record._id, // 确认成本
      };
      if (record) {
        Session.set('cmDoc', cmDoc);
        Session.set("action_collection", "Creator.Collections.account_payable");
        Session.set("action_collection_name", collection_name);
        Session.set("action_save_and_insert", false);
        Session.set('cmIsMultipleUpdate', false);
        Meteor.defer(function () {
          return $(".creator-add-related").click();
        });
      }
  },
  makePayableOrderVisible: function(object_name, record_id, record_permissions){
      if (Session.get("object_name") != 'contracts') {
        return false;
      }
      // 如果合同业务类型时·房屋租赁（承租方）（编码006）·显示此按钮
      var record = Creator.getObjectRecord(object_name, record_id);
      if (record && record.account_payable) { // 已经生成应付记录的确认成本记录，不能再次生成应付记录
        return false;
      }
      if (record && record.contract) {
        this.tempRecord = record;
        var contract = Creator.getObjectRecord('contracts', record.contract);
        if (contract && contract.business_category) {
          this.tempContract = contract;
          var business_category = Creator.getObjectRecord('business_categories', contract.business_category, 'code');
          if (business_category.code == '006') {
            return true;
          }
        }
      }
      return false;
  }
}
```