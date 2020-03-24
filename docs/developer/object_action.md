---
title: 操作按钮
---

系统内置三个基本操作：新增、修改、删除。

```javascript
Creator.Objects.account_receipt.actions = {
  standard_new: {
    label: "新建",
    sort: 0,
    visible: function (object_name, record_id, record_permissions) {
      return false;
    },
    on: "list",
    todo: "standard_new"
  },
};
```

在此基础上，用户可以自定义按钮，并编写javascript脚本执行想要的操作。

- name: 名称
- label: 按钮显示标签
- on: 显示位置 
  - "list" 为列表定义action，只显示在列表右上角
  - "record" 为记录定义action，显示在记录查看页右上角，以及列表视图中每项的下拉菜单中
  - "record_more" 为记录定义action，显示在记录查看页右上角的“更多”下拉菜单中，以及列表视图中每项的下拉菜单中
  - "list_item" 为记录定义action，只显示在列表视图中每项的下拉菜单中
  - "record_only" 为记录定义action，只显示在记录查看页右上角
- sort: 排序号，显示时，按照从小到达顺序排列。编辑action的sort默认为0
- todo: 脚本内容，脚本中可以使用以下变量
  - this.object_name
  - this.object
  - this.action

### 使用代码编写操作按钮实例

```javascript
Creator.Objects.cost_recognition.actions = {
  makePayableOrder: {
    label: "生成应付记录",
    visible: function (object_name, record_id, record_permissions) {
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
    },
    on: "record",
    todo: function (object_name, record_id, fields) {
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
    }
  },
  standard_new: {
    label: "新建",
    visible: function () {
      return false;
    },
    on: "list",
    todo: "standard_new"
  }
};
```