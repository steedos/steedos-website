---
title: 第三方系统接口集成
---

下面，我们举一个与用友NC系统的接口实例，来简要介绍下华炎魔方是如何与第三方系统实现接口对接的。

## 第三方系统集成的案例

### 申请付款的操作要求

在某集团OA平台的的合同应用中，付款记录由经办人在台账中进行填写。数据填写并完成“关联发票”操作后，可以点击“申请付款”按钮，通过接口将付款记录数据和发票附件传入用友系统，进入用友系统内部的付款审批流程。

![申请付款置](/assets/paybill_async.png)

### 用友NC接口

用友NC提供了一系列的WebService接口，其中包括了基于NC付款单的付款单新增接口，可以从外部系统发起用友NC内部的付款审批流程。

 - 地址: http://*.*.*.*:9999/uapws/service/nc.itf.pubapp.IPubApp?wsdl

 - 调用方法: ReceOAXml(String type, String data);

    - type: 接口类型, "PayBillSave"即为"付款单新增保存"
    - data: 接口数据 

## 调用NC接口，发起申请付款

### 增加申请付款按钮

在src/triggers/account_payment.object.js中，增加“申请付款”按钮。

``` javascript
Creator.Objects.account_payment.actions = {
  ncPayment: {
    label: "申请付款",
    visible: function (object_name, record_id, record_permissions) {
      return perms["allowEdit"];
    },
    on: "record",
    todo: function (object_name, record_id, fields) {
      $("body").addClass("loading");
      var userSession = Creator.USER_CONTEXT;
      // 申请付款请求的URL
      var url = Meteor.absoluteUrl("/api/odata/v4/" + userSession.spaceId + "/account_payment/" + record_id + "/ncPayment");
      try {
        var authorization = "Bearer " + userSession.spaceId + "," + userSession.user.authToken;
        var fetchParams = {
          record_id: record_id
        };
        var headers = [{
          name: 'Content-Type',
          value: 'application/json'
        }, {
          name: 'Authorization',
          value: authorization
        }];
        // 执行ajax请求
        $.ajax({
          type: "POST",
          url: url,
          data: JSON.stringify(fetchParams),
          dataType: "json",
          contentType: 'application/json',
          beforeSend: function (XHR) {
            if (headers && headers.length) {
              return headers.forEach(function (header) {
                return XHR.setRequestHeader(header.name, header.value);
              });
            }
          },
          success: function (data) {
            payAction.is_requesting = false;
            console.log(data);
            $("body").removeClass("loading");
            var logInfo = "操作已成功！";
            toastr.success(logInfo);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            payAction.is_requesting = false;
            $("body").removeClass("loading");
            console.error(XMLHttpRequest.responseJSON);
            if (XMLHttpRequest.responseJSON && XMLHttpRequest.responseJSON.error) {
              toastr.error(XMLHttpRequest.responseJSON.error.message);
            } else {
              toastr.error(XMLHttpRequest.responseJSON);
            }
          }
        });
      } catch (err) {
        payAction.is_requesting = false;
        console.error(err);
        toastr.error(err);
        $("body").removeClass("loading");
      }

    }
  }
}
```

### 增加申请付款的执行

在src/triggers/account_payment.object.js中，继续增加“申请付款”请求的执行。

```javascript
const ReceOAXmlAsync = require('../../lib/nc/soap/api').ReceOAXmlAsync;
const manager = require('../../lib/manager/accountPaymentManager');

Creator.Objects.account_payment.methods = {
  ncPayment: async function (req, res) {
    try {
      const params = req.params;
      const steedosSchema = objectql.getSteedosSchema();
      var account_payment = await steedosSchema.getObject('account_payment').findOne(params._id);
      // 以下分别取得contract、company、supplier等值，这里略去

      // 构建data的值
      var data = manager._makeData({
        account_payment,
        company,
        owner_organization,
        cowner,
        contract,
        business_category,
        pk_currtype,
        owner,
        instance,
        supplier_bank,
        supplier
      });

      // 通过ReceOAXmlAsync方法，调用NC接口，发出申请付款的请求
      // PayBillSave：付款单新增保存
      var result = await ReceOAXmlAsync('PayBillSave', JSON.stringify(data));
      // 将ReceOAXmlAsync的返回值，计入对象记录
      await steedosSchema.getObject('account_payment').update(account_payment._id, {
        nc_billid: result.billid,
        nc_billno: result.billno,
        nc_billstatus: result.billstatus + '',
        nc_approvestatus: result.approvestatus + '',
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({
        'error': {
          'details': error.stack,
          'message': error.message,
        }
      });
    }
  }
};
```

### 增加调用接口的具体执行

在lib/nc/soap/api.js文件中，编写ReceOAXmlAsync的处理逻辑代码，核心就是调用NC接口，并传入所需数据。

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const soap = require("soap");
async function ReceOAXmlAsync(type, data) {
    let url = Meteor.settings.dzug.soapUrl;
    if (!url) {
        console.error('ReceOAXmlAsync: ', 'no soapUrl!!!');
        return;
    }
    let client = await soap.createClientAsync(url);
    // 通过ReceOAXmlAsync方法，发出申请付款的请求
    let resultArray = await client.ReceOAXmlAsync({ 'string': type, 'string1': data });
    if (!resultArray[0]) {
        return;
    }
    let returnStr = resultArray[0].return;
    if (type == 'QueryAraprec' || type == 'QueryPay') {
        let recordResult = JSON.parse(returnStr);
        if (recordResult) {
            return recordResult;
        }
        else {
            console.error('ReceOAXmlAsync: ', 'can not find approvals');
            console.error('ReceOAXmlAsync: ', `${JSON.stringify(data)}`);
            return [];
        }
    }
    else {
        let recordResult = JSON.parse(returnStr).bill[0];
        if (recordResult.result == "0") {
            return recordResult;
        }
        else {
            console.error('ReceOAXmlAsync: ', recordResult.message);
            console.error(data);
            throw new Meteor.Error(400, _formatMessage(recordResult.message));
        }
    }
}
exports.ReceOAXmlAsync = ReceOAXmlAsync;
```

## 查看接口的实际运行效果

![申请付款](/assets/account_payment.png)

点击“付款申请”,则发起用友NC系统的付款申请，并接收到返回的NC单据号、状态等信息。

实际的系统中，我们还增加了实时同步的机制。所以，当NC系统处理完毕后，再查看这张付款记录时，审批状态已实时更新为“通过态”。

![申请付款](/assets/account_payment2.png)



