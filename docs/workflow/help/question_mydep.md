---
title:  申请人的所在部门如何自动显示在申请单上？
sidebar_label: 自动显示申请人所在部门
--- 

 字段公式

 - 申请人所在部门（当申请人属于多个部门时，为所在主部门的全路径）： {applicant.organization.fullname}
 - 申请人所在部门（最底层部门名）： {applicant.organization.name}

 可参考下图实例：

 岗位招聘申请表，“申请部门”设置为系统最底层部门名，{applicant.organization.name}。
 ![部门公式](/assets/workflow/department.png)