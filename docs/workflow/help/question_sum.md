---
title:  申请单上，如何自动得到几个数值字段的和？
sidebar_label: 数值字段自动求和
--- 

 ![自动求和](/assets/workflow/sum.png)

 如上图所示，当有多种类型费用需要报销填写时，餐费金额为1000，业务费为500，其他费用为300，合计自动计算为1800，无须单独填写，具体操作如下：

 - 管理员进入系统后，切换“设置-审批-流程”，点击“流程设计器”按钮，进入到流程设计界面。
 - 切换进入申请单设计，添加一个文本类型的字段，鼠标选中新加的文本字段，在右侧栏里切换到“属性”栏，将此字段命名为“合计”。
 - 下方“公式”栏里写{train_fee}+{traffic_fee}+{vehicle_fee}+{stay_fee}+{meals}+{office_fee}+{business_fee}+{o_fee}，所有费用字段累加，保存即可。

 示例如下：

 差旅费用报销单，明细有交通费、住宿费、餐费、办公费、业务费和其他，“合计”则是以上多个费用的累加，{train_fee}+{traffic_fee}+{vehicle_fee}+{stay_fee}+{meals}+{office_fee}+{business_fee}+{o_fee}。
 ![累加计算值](/assets/workflow/cal_value.png)

 基于数值字段的函数：
 
 {字段名1}+{字段名2}

 可参考[审批王表单设计-字段公式](https://developer.steedos.com/docs/workflow/help/admin_form/#%E5%AD%97%E6%AE%B5%E5%85%AC%E5%BC%8F)
