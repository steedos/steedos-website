---
title:  可以让某一步的人员无法修改某个字段吗？
sidebar_label: 不让修改某些字段
hide_table_of_contents: true
--- 

管理员设置好了表单和流程后，如果不加限制，每一步的处理人都可以修改表单上的内容。例如这个付款申请单：

![付款](/assets/workflow/payment.png)

但是依据实际的管理要求，每一步的处理人对于表单内容修改权限应该各不相同。上图中的“实际付款日期”就应该等到出纳付款之时才能填写，之前或之后的处理人都没有填写的权限。

对于某一步的人员能或是不能修改某个字段，诸如此类的需求，可以由管理员在后台进行操作，设置好步骤与字段编辑权限的对应关系。


- 管理员进入系统后，切换“设置-审批-流程”，点击“流程设计器”按钮，进入到流程设计界面。

- 点击流程，切换进入“流程”设计，点击字段“申请部门”，并在右侧栏里切换到“属性”栏。
 
- 依次选中各节点，并在右侧点击“权限”，将某个字段勾选去掉，即完成禁止修改该字段的设置。如果勾选上，则表示可以修改该字段。

![禁止修改字段](/assets/workflow/forbidden.png)

- 例如付款申请，“出纳付款”审批，只可编辑字段“实际付款日期”，故权限仅勾选该字段，其他字段的勾选都去掉即完成禁止修改其他字段。

- 全部设置完成后，保存即可。


关于字段填写权限，请参考 [审批王流程设计-表单字段](/help/workflow/admin_flow#%E8%A1%A8%E5%8D%95%E5%AD%97%E6%AE%B5)。