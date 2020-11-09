---
title: 数学运算符
---


## +（加）
计算两个值的和。

**使用：** `值 1 + 值 2`，并用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值


```js
Amount + Maint_Amount__c + Services_Amount__c
```
此公式计算产品 Amount（金额）、维护金额与服务费的总和。请注意，Maint amount（维护金额）和 Service Fees（服务费）是自定义币种字段。

```js
Monday_Hours__c + 
Tuesday_Hours__c + 
Wednesday_Hours__c + 
Thursday_Hours__c + 
Friday_Hours__c > 40
```
使用如上验证规则中的公式，可以在为各个工作日输入的工作时间总和大于 40 时显示下面的错误消息：“总工作时间不能超过 40 个小时”。本示例要求自定义对象上有五个自定义字段，每个工作日一个。

