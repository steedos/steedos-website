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

## -（减）

计算两个值的差。

**使用：** `值 1 - 值 2`，并合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```js
Amount - Discount_Amount__c
```

此公式计算产品 Amount（金额）减去 Discount Amount（折扣金额）的差。请注意，Discount Amount（折扣金额）是一个自定义币种字段。

## *（乘）

乘以其值。

**使用：** `值1 * 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```js
Consulting_Days__c * 1200
```

此公式计算咨询天数乘以 1200 的数值，假定此公式字段是货币数据类型且咨询按每天 1200 美元的价格收费。请注意，Consulting Days（咨询天数）是一个自定义字段。

## /（除）

除以其值。

**使用：** `值1 / 值2`，用合并字段、表达式或其他数值替换每个值。

**返回值：** 数值

```js
AnnualRevenue/ NumberOfEmployees
```

此公式使用币种字段计算每个员工的收入金额。

```js
IF(NumberOfOpportunities > 0,
  NumberOfWonOpportunities / NumberOfOpportunities, null)
```

此公式计算市场活动中业务机会的客户赢得率。

## ^（幂）

使一个数字变成指定数字的幂。

**使用：** `数字^整数`，用合并字段、表达式或其他数值替换数字，用包含整数的合并字段、表达式或任何整数替换整数。

**返回值：** 数值

```js
NumberOfEmployees^4
```

计算员工数的四次幂。

> 避免使用负整数。

## ()（左括号和右括号）

指定先计算左括号和右括号内的表达式。所有其他表达式均使用标准运算符优先权进行评估。

**使用：** `(表达式1) 表达式2...`，用合并字段、表达式或其他数值替换每个表达式。

```js
(Unit_Value__c - Old_Value__c) / New_Value__c
```

计算旧值与新值的差值，并除以新值。
