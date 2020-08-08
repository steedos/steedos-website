---
title: 自定义函数
---

在 OData 中，可以调用自定义方法处理相关的业务逻辑并返回结果。

### 声明自定义函数
`xxx.method.js`
- listenTo: 对象名称，选填。如果没有定义此属性，则取文件名中第一个 `.` 之前的文字作为listenTo的值

### 使用代码编写实例
```js
  module.exports = {
    test: async function(req, res){
        const params = req.params;
        res.send({message: params._id + 'test ok'})
    }
  }
```

### 接口信息

- 请求方法：GET | POST | PUT | DELETE

- 请求接口：/api/v4/{object_name}/{record_id}/{method_name}

- 接口说明：

  - req.userId: 当前用户 ID

    ```js
    //vip_order.method.js
    const objectql = require("@steedos/objectql");
    module.exports = {
      confirmReceipt: async function (req, res) {
        try {
          const params = req.params;
          const steedosSchema = objectql.getSteedosSchema();
          var order = await steedosSchema
            .getObject("vip_order")
            .findOne(params._id);
          res.status(200).send(order);
        } catch (error) {
          res.status(400).send({
            error: {
              details: error.stack,
              message: error.message,
            },
          });
        }
      }
    }
    ```

- 请求参数说明：

  - 对于方法中需要使用的参数，以 JSON 形式发送

- response 说明：

  - 成功后，将返回方法执行的结果

- 示例如下：

  - HTTP 请求

  ```bash
   url \
     -X POST https://beta.steedos.com/api/v4/vip_order/p6gGT6R3LXLSq97Kw/confirmReceipt \
     -H 'Content-type: application/json' \
     -b 'X-Space-Token=55090bbe52...aXpwo'
  ```

  - HTTP 响应

  ```json
   {
     "_id" : "p6gGT6R3LXLSq97Kw",
     "name" : "会员卡充值",
     "amount" : 0.01,
     "status" : "delivered",
     "store" : "3NoMAPkdJcPkAxxJm",
     "card" : "ktd9yru2ANYtaJm5j",
     "type" : "recharge",
     "owner" : "sufZtt93b9J49kvip",
     "space" : "3NoMAPkdJcPkAxxJm",
     "created" : ISODate("2018-06-06T06:18:28.659Z"),
     "modified" : ISODate("2018-06-06T06:18:47.172Z"),
     "created_by" : "sufZtt93b9J49kvip",
     "modified_by" : "sufZtt93b9J49kvip",
     "amount_paid" : 0.01
   }
  ```
