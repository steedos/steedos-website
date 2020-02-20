---
title: 如何在表单里增加领导意见栏？
sidebar_label: 表单添加领导意见栏
--- 
 
 配置意见栏公式，将流程某一步骤处理人的意见显示在申请单的某一栏上。 以下以发文流程为例介绍意见栏公式的配置过程：

 - 进入流程设计器，发文流程中有一步骤叫“领导签发”，需要领导在处理时填写个人意见。
 - 进入申请单设计，添加一个文本类型的字段，鼠标选中新加的文本字段，在右侧栏里切换到“属性”栏，将此字段命名为“领导批示”。
 - 下方“公式”栏里写{yijianlan:{step:"领导签发"}}，注意step.后面跟流程某一步骤名。
 - 保存之后，当“领导签发”步骤，领导可以在申请单上看到“领导批示”栏，在其右下角有“签批”按钮。
 
 示例如下：

 发文稿纸，将处理人“部门经理审核”的意见显示在申请单上，添加一个文本类型的字段“部门经理意见”，在右侧“属性”下方“公式”栏里写{yijianlan:{step:'部门经理审核'}}，保存即可。
 ![标题公式](/assets/workflow/comments.png)

 常见的意见栏公式

 - 一个步骤一个意见栏：“{yijianlan:{step:"领导签发"}}”。该步骤如果传阅给其他人，并勾选签批字段框，则发件者和收件者的意见都会出现在意见栏中。
 - 只显示传阅人员签批意见栏：“{yijianlan:{step:"集团文书处理",only_cc: true}}”。在文书处理步骤传阅给其他人，可在此意见栏上签批意见；该步骤如果传阅给其他人也只显示收件者的意见。
 - 只显示处理人员意见：“{yijianlan:{step:"领导批示", only_handler:true}}”
 - 多个步骤一个意见栏：“{yijianlan:{step:"股份公司领导意见"}};{yijianlan:{step:"集团公司领导意见"}}”。股份公司领导步骤签的意见和集团公司领导签的意见出现在同一个意见栏上。
 - 图片签名：“{yijianlan:{step:"领导批示", default:"已阅", image_sign: true, only_cc: false}}”，配置了图片签名的处理人，签批意见之后，申请单上会以图片签名结尾。
 - 配置默认意见：“{yijianlan:{step:"领导批示", default:"已阅"}}”，处理人在提交申请单后，在意见栏为空的情况下，系统会默认为您签下“已阅”的意见。

 可参考[审批王表单设计-签字意见设置](https://developer.steedos.com/docs/workflow/help/admin_form/#%E7%AD%BE%E5%AD%97%E6%84%8F%E8%A7%81%E8%AE%BE%E7%BD%AE)