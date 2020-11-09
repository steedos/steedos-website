---
title: 文本运算符
---

## &（串联）

连接两个或两个以上字符串。

**使用：** `字符串1&字符串2`，用合并字段、表达式或其他值替换每个字符串。

**返回值：** 布尔

```js
"Expense-" & Trip_Name__c & "-" & ExpenseNum__c
```

此公式在行程名称和支出编号前显示文本“Expense-”。这是使用支出编号自定义字段的文本公式字段。