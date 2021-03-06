---
title: 通知操作
---

通知操作允许您自动发送工作流通知给指定人员。您可以将工作流通知与工作流规则、批准过程关联。

## 创建工作流通知的途径

- 您可以在[新建、编辑工作流规则](/help/auto_workflow/create)时选择已有通知选项或创建新的通知操作并与之通过对象关联。
- 您可以在[新建、编辑批准过程，批准步骤](/help/approval/create)时选择已有通知选项或创建新的通知操作并与之通过对象关联。
- 您也可以在设置应用中定位到菜单`流程自动化-工作流操作-工作流通知`，然后新建通知或编辑某条已有的通知记录。这些记录都可以作为工作流规则、批准过程或其他自动过程的备选通知操作。

## 创建工作流通知

![创建工作流通知](/assets/help/auto_actions/workflow_notify/add_workflow_notification.png)

- **对象**：该通知操作记录所基于的对象。
- **API 名称**：在 API 中输入引用该组件的唯一名称。API 名称只能包含小写字母、数字，必须以字母开头，不能以下划线字符结尾或包含两个连续的下划线字符，下拉框选项或列表界面将显示该名称。
- **标题公式、正文公式**：根据公式动态生成标题和正文，关于如何填写公式内容，请参考[通过公式计算字段值](/help/formula/summary)。值得注意的是此处公式内容可引用的字段是所选**对象**的字段。
- **选择分配的用户**：指定通知的接受者，可以是固定的人员，也可以根据对象的人员字段动态指定。

## 在工作流规则和批准过程中使用工作流通知

您可以在[新建、编辑工作流规则](/help/auto_workflow/create)或[新建、编辑批准过程，批准步骤](/help/approval/create)时，在各种**操作**分组中选择已有工作流通知选项或创建新的工作流通知操作。

有新消息到达时，Steedos 在页面右上角显示推送通知提醒，点击推送通知**小铃铛**图标，可以查看通知中心。

![推送通知](/assets/help/auto_actions/workflow_notify/notification.png)

