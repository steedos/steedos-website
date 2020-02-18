---
title:  如何实现申请单的自动文件编号？
sidebar_label: 自动编号
--- 

 - 进入系统‘设置-高级-自动编号’中；
 - 点击右上角的“新建”按钮后弹出新建自动编号弹出框，可设定编号公式: {YYYY}-{MM}-{DD}-{0000}，YYYY表示年，MM表示月，DD表示日，则此字段值为2020-0001、2020-0002、2020-0003以此类推。

 可参考下图实例：

 contracts对象中配置serial_number字段：
 - object_name: 对象名，如contracts;
 - field_name: 自动编号字段，如serial_number;
 - current_no: 当前编号值，如1000;
 - date_from: 日期范围开始日期，即编号规则生效开始时间，为空则表示不限制;
 - date_to：日期范围截止日期，即编号规则生效结束时间，为空则表示不限制;
 ![自动编号](/assets/workflow/serial_number.png)