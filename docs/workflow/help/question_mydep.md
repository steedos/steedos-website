---
title:  申请人的所在部门如何自动显示在申请单上？
sidebar_label: 自动显示申请人所在部门
--- 

 给字段增加公式之后，填写审批单的时候，无需录入此字段的值，而是由系统根据公式得到相应的值。

 示例如下：

 岗位招聘申请表，“申请部门”设置为系统最底层部门名，{applicant.organization.name}。
 ![部门公式](/assets/workflow/department.png)

 字段公式

 - 申请人所在部门（当申请人属于多个部门时，为所在主部门的全路径）： {applicant.organization.fullname}
 - 申请人所在部门（最底层部门名）： {applicant.organization.name}

 可参考[审批王表单设计-字段公式](https://developer.steedos.com/docs/workflow/help/admin_form#%E5%AD%97%E6%AE%B5%E5%85%AC%E5%BC%8F)
