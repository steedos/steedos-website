---
title: 流程触发器
---

当用户提交提交某些申请单时，需要执行额外的操作，如发送短信、发送邮件等。关于此类额外操作，管理员可通过配置 流程触发器 来完成。

## 配置

在系统设置页面，管理员需要对相关参数进行配置。

- 配置参数
  - 流程：选择配置的流程，数据库中保存流程 ID
  - URL：触发的 URL 路径
  - 激活：默认不激活，只有激活状态的 流程触发器 才会触发操作
  - 描述：操作的文字描述内容

## 触发条件

当用户操作申请单时（包括发送、传阅、取回等），系统将查找当前申请单配置的 流程触发器，如查到且是激活状态，则触发 流程触发器。即向配置的 URL 发送 POST 请求。其中，请求的 body 数据主要有以下部分。

- action：触发此 hook 时的操作，其值域如下：

  draft_submit：草稿箱提交,

  engine_submit：待审核提交,

  reassign：转签核,

  relocate：重定位,

  retrieve：取回,

  terminate：取消申请,

  cc_do：传阅给他人,

  cc_submit：被传阅提交

- current_approve：当前步骤，即用户执行提交操作时的 approve 数据

- instance：提交申请单操作完成后最新的完整实例数据

- from_user：值为当前操作者。如： A 提交申请单给 B 那么 from_user 值就是 A 的相关信息

  - \_id：用户在审批王的唯一标识符

  - email：用户在审批王的唯一主邮箱（space_users 表字段）

  - username：用户在审批王的登录名

  - mobile：用户在审批王的手机号（space_users 表字段）

- to_users：值为当前下一步骤处理人集合,集合内对象的属性与 from_user 相同。

请求的 body 数据示例如下：

```json
{
  "action": "draft_submit",
  "from_user": {
    "_id": "TPWYx597AuLSksSDH",
    "email": "AAA@hotoa.com",
    "username": "AAA",
    "mobile": "171****6263"
  },
  "to_users": [
    {
      "_id": "snLab9tq6bHquJjof",
      "email": "BBB@hotoa.com",
      "username": "BBB",
      "mobile": "171****6263"
    },
    {
      "_id": "hJChDEqfCh5MQ2tGj",
      "email": "CCC@hotoa.com",
      "username": "CCC",
      "mobile": "171****6263"
    }
  ],
  "current_approve": {
    "_id": "8ecbd6be43193e650e8d913f",
    "instance": "HjHvRxp5vFL5fn7uK",
    "trace": "b0f6eadb4b7909538778d766",
    "is_finished": false,
    "user": "hPgDcEd9vKQxwndQR",
    "user_name": "MJ",
    "handler": "hPgDcEd9vKQxwndQR",
    "handler_name": "MJ",
    "handler_organization": "593b97230cda012fa65270f9",
    "handler_organization_name": "华炎软件",
    "handler_organization_fullname": "华炎软件",
    "type": "draft",
    "is_read": true,
    "is_error": false,
    "description": "",
    "values": {
      "拟稿人": "MJ",
      "日期-时间": "",
      "日期": "",
      "文件标题": "公司发文",
      "下拉框": "",
      "多选": ""
    },
    "judge": "submitted",
    "next_steps": [
      {
        "step": "b65e5d4a-3d52-4aa6-a7c9-260cb7242ca6",
        "users": ["hPgDcEd9vKQxwndQR"]
      }
    ]
  },
  "instance": {
    "_id": "HjHvRxp5vFL5fn7uK",
    "space": "Af8eM6mAHo7wMDqD3",
    "flow": "0c09ae80-6e44-4d77-96f7-c1efa19e26ce",
    "flow_version": "561295cb-c262-4ee3-9659-2f6350155406",
    "form": "6B0DCFC3-1E39-4F70-8C5D-E80C135CD70D",
    "form_version": "672de6ce-e372-48e9-b1d3-830b46819b0b",
    "name": "公司发文",
    "submitter": "hPgDcEd9vKQxwndQR",
    "submitter_name": "MJ",
    "applicant": "hPgDcEd9vKQxwndQR",
    "applicant_name": "MJ",
    "applicant_organization": "593b97230cda012fa65270f9",
    "applicant_organization_name": "华炎软件",
    "applicant_organization_fullname": "华炎软件",
    "state": "pending",
    "code": "21",
    "is_archived": false,
    "is_deleted": false,
    "values": {
      "拟稿人": "MJ",
      "日期-时间": "",
      "日期": "",
      "文件标题": "公司发文",
      "下拉框": "",
      "多选": ""
    },
    "traces": [
      {
        "_id": "b0f6eadb4b7909538778d766",
        "instance": "HjHvRxp5vFL5fn7uK",
        "is_finished": true,
        "step": "9b680fbe-0429-4dc8-913e-688c4cbebd3b",
        "name": "拟稿人拟稿",
        "start_date": "2017-12-08T09:00:52.422Z",
        "approves": [
          {
            "_id": "8ecbd6be43193e650e8d913f",
            "instance": "HjHvRxp5vFL5fn7uK",
            "trace": "b0f6eadb4b7909538778d766",
            "is_finished": true,
            "user": "hPgDcEd9vKQxwndQR",
            "user_name": "MJ",
            "handler": "hPgDcEd9vKQxwndQR",
            "handler_name": "MJ",
            "handler_organization": "593b97230cda012fa65270f9",
            "handler_organization_name": "华炎软件",
            "handler_organization_fullname": "华炎软件",
            "type": "draft",
            "is_read": true,
            "is_error": false,
            "description": "",
            "values": {
              "拟稿人": "MJ",
              "日期-时间": "",
              "日期": "",
              "文件标题": "公司发文",
              "下拉框": "",
              "多选": ""
            },
            "judge": "submitted",
            "next_steps": [
              {
                "step": "b65e5d4a-3d52-4aa6-a7c9-260cb7242ca6",
                "users": ["hPgDcEd9vKQxwndQR"]
              }
            ],
            "cost_time": 177759
          }
        ],
        "judge": "submitted"
      }
    ],
    "inbox_users": ["hPgDcEd9vKQxwndQR"],
    "current_step_name": "主任签发",
    "submit_date": "2017-12-08T09:03:50.189Z",
    "outbox_users": [],
    "keywords": ""
  }
}
```

## 示例

领导有审批意见时通知文书，给文书发送短信：

```js
JsonRoutes.add("post", "/api/flow_webhook/notify/wenshu", function (
  req,
  res,
  next
) {
  var current_approve,
    description,
    e,
    hashData,
    ins_description,
    ins_name,
    lang,
    name,
    params,
    user;
  try {
    hashData = req.body;
    if (hashData.action !== "engine_submit") {
      JsonRoutes.sendResult(res, {
        code: 200,
        data: {},
      });
      return;
    }
    if (
      _.isEmpty(hashData) ||
      _.isEmpty(hashData.instance) ||
      _.isEmpty(hashData.current_approve)
    ) {
      throw new Meteor.Error("error", "不具备hook执行条件");
    }
    current_approve = hashData.current_approve;
    if (current_approve.handler_name === "张总") {
      if (current_approve.description) {
        user = db.users.findOne(
          {
            "emails.address": "steedos@steedos.com",
          },
          {
            fields: {
              mobile: 1,
              locale: 1,
            },
          }
        );
        if (user && user.mobile) {
          //设置当前语言环境
          lang = "en";
          if (user.locale === "zh-cn") {
            lang = "zh-CN";
          }
          ins_name = hashData.instance.name;
          ins_description = current_approve.description;
          name =
            ins_name.length > 15 ? ins_name.substr(0, 12) + "..." : ins_name;
          description =
            ins_description.length > 15
              ? ins_description.substr(0, 12) + "..."
              : ins_description;
          params = {
            handler: current_approve.handler_name,
            instance: name,
            description: description,
          };
          // 发送手机短信
          SMSQueue.send({
            RecNum: user.mobile,
            msg: TAPi18n.__(
              "sms.notify_wenshu.template",
              {
                handler: params.handler,
                instance: ins_name,
                description: ins_description,
              },
              lang
            ),
          });
        }
      }
    }
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {},
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 500,
      data: {
        errors: [
          {
            errorMessage: e.message,
          },
        ],
      },
    });
  }
});
```
