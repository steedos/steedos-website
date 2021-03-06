---
title:  不同部门的员工有不同的部门经理，审批时如何按提交者的不同自动发给对应的部门经理？
sidebar_label: 自动发给各自的经理
hide_table_of_contents: true
--- 

每个组织由多个部门组成，每个部门除成员外会有1个部门经理。下图为组织内的2个部门组成人员的简单例子。

![部门成员](/assets/workflow/departs.png)

员工提交差旅费用报销时，先发给“部门经理”。如果是技术部的员工，则发给技术部经理；如果是行政部的员工，则应发给行政部经理。这里的“部门经理”，在系统中的对应概念就是“审批岗位”。

不同的员工提交后，自动发给自己的部门经理，需要预先做好的工作包括：

- 设置：每个部门对应的“部门经理”是谁？

这里的主要工作，是新建一个名叫“部门经理”的“审批岗位”，并给每个部门指定好谁是这个部门的“部门经理”。

- 设置：差旅费用报销流程中的“部门审批”节点的处理人是这样的“部门经理”。

就是把流程的这个步骤的“处理人”设为“指定审批岗位”，“审批岗位”则设为“部门经理”。这样，系统就会根据申请人所在部门，自动定位到对应的“部门经理”。

具体操作如下：

- 管理员进入系统后，切换“设置-审批-审批岗位”，点击“新建”按钮。

![审批岗位](/assets/workflow/role_set1.png)

- 岗位名称中录入“部门经理”。

![审批岗位](/assets/workflow/role_set2.png)

- 点击“保存”按钮，即新建岗位成功。

- 切换到“设置-审批-岗位成员”，点击“新建”按钮。

![岗位成员](/assets/workflow/role_set3.png)

- 岗位选择“部门经理”、岗位成员选择“王武兹”、审批范围选择“技术部”。

![岗位成员](/assets/workflow/role_set4.png)

- 点击“保存”按钮，即制定技术部的部门经理成功。然后再依次制定其他部门的部门经理。

- 切换“设置-审批-流程”，点击“流程设计器”按钮，进入到流程设计界面。

- 点击流程“差旅费用报销”，切换进入“流程”设计。

- 点击的流程审批环节“部门审批”，“处理人”选择“指定审批岗位”，“审批岗位”设置为“部门经理”即可。

![部门经理](/assets/workflow/manager.png)

关于审批岗位，具体可参考 [审批王审批岗位](/help/workflow/admin_positions) 。