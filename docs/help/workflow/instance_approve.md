---
title: 如何审批
---

如果您是审批流程中某个步骤的处理人，则申请流程转到您时，系统会向您发出审批提醒。此时，您需要进入系统来处理申请单。打开申请单后，您可以批准、退回、传阅等操作，也可打印申请单进行存档。该步骤的审批操作完成后，申请单会按设计的审批流程继续流转。

## 审批提醒

- 推送：当某个申请单需要您处理时，上一步处理人提交到达您的审批节点后，系统会弹出推送提醒您，推送持续时间15秒，您可以直接点击弹框推送进入申请单办理。如果不处理，推送时间结束后，该申请单会出现在您的流程“待审核”里，待您方便时处理。
- 邮件：系统默认状态下不发送邮件提醒。若已开启了“接受邮件通知”，则系统会自动向处理人册邮箱发送提醒邮件。

## 申请单查看

![申请单查看](/assets/workflow/申请单查看.png)

- 登录进入流程模块，“待审核”菜单中右侧的数字就是您的待审核申请单的数量。
- 点击“待审核”，右侧列出您的待审核申请单列表。未查看过的申请单会在申请单标题的左侧有蓝色圆点的标志，点击查看申请单后，圆点消失。
- 点击“搜索”框旁边的两个箭头。可选择按待办列表按照两列或三列显示查看。三列展示中，申请单可按照“提交时间”、“处理时间”、“接收时间”排序，方便您查找需要审批的申请单。

## 附件查看

![附件历史版本](/assets/workflow/附件历史版本.png)

- 在流程流转过程中，您可以通过点击附件名称来下载查看附件。

- 若附件需要修改，可修改后再次上传，系统支持附件版本记录；具体操作为：将鼠标移到附件名称上，点击“历史版本”在弹出窗口中添加修改后的附件文件。

- 此外，您如有需要也可上传其他相关附件。

## 流程图

您可以通过查看页面顶部的“流程图”来了解申请单的走向。流程图中加重颜色的节点即为当前申请单所处的当前步骤。

![流程图](/assets/workflow/流程图.png)

## 签核历程

您可以通过查看申请单下面的的“签核历程”来了解申请单的实际处理情况。签核历程中记录的是申请单经历的步骤和每一步的处理人、处理时间、处理状态、以及处理意见。

![签核历程](/assets/workflow/签核历程.png)

## 审批意见

点击签批按钮时，会直接跳到审批单底部的审批意见栏，在意见栏中填写审批意见。点击右下角的蓝色悬浮的圆形按钮，也可以跳到审批意见栏。

![悬浮签批](/assets/workflow/悬浮签批.png)

另外在弹出的签批框中也可点击意见窗口右侧的“常用意见”来维护您的常用意见，维护完成后，点击常用意见列表中的某一条意见后，该条意见就会出现在审批单中的意见栏中，这样在填写审批意见时，就不需要每次都要手动输入批示意见。

## 流程提交

在签核历程下的意见框中填写意见，可以直接同步到签核历程上。选择“核准”或“驳回”，将流程提交审批。

![意见栏](/assets/workflow/意见栏.png)

### 核准

- 在审批页面的底部会显示出系统设定的下一步骤及处理人。
如果您想更换掉系统给出的下一步骤，则点击下一步骤的选择框。在弹出的页面里，选择新的步骤即可。如果只有一个选项，说明下一步骤为特定步骤，不可选择。

- 如果您想更换掉系统给出的处理人（或处理人为空），则点击处理人的输入框。在弹出的页面里，选择新的处理人即可。若下一步骤为“会签”类型的节点，您可以选择多个处理人；否则，就只能选择一个处理人。

- 填写好意见、上传好附件、选择好下一步骤与处理人后，点击“提交”按钮，即可完成审批。 这时，这个文件就会被转到下一步骤的处理人。您则可以在“已审核”列表中看到这个申请单，而“待审核”列表中将不出现这个申请单。

### 驳回

- 当您不同意审批的申请，您可以选择将文件驳回到已经审批过的任意一个步骤。

- 点击“驳回”选项，选择下一步骤及处理人（如有必要），点击“发送”按钮，该文件会被系统驳回给指定步骤的处理人，并出现在下一步处理人的“待审核”列表中。该步骤处理人可以在“已审核”列表中看到这个申请单，其“待审核”列表中将不出现这个申请单。

## 批量审批

如果您使用的是企业版，并且在审批节点配置了“批量审批”，那么在待审核菜单选中该流程，在流程列表的底部会出现“批量核准”，点击出现弹窗，输入审批意见并点击确认完成流程的批量核准，不支持批量退回功能。

![批量审批](/assets/workflow/批量审批.png)

> 注：后续是单一路径，并且指定了处理人，才支持批量审核。