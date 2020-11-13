---
title: 验证规则示例
---

请按您的实际目的，查看以下有参考价值的验证规则示例。用户保存记录之前，验证规则会验证用户在记录中输入的数据是否符合您指定的标准。
有关这些示例中使用的任何公式函数的详细信息，请参阅 [公式运算符和函数](/help/formula/functions)。

## 示例客户验证规则

### 客户编号为数字

- **说明：** 验证非空客户编号是否为数字。
- **公式：**

```js
AND(
   NOT(ISBLANK(AccountNumber)),
   NOT(ISNUMBER(AccountNumber))
)
```

- **错误消息：**客户编号不为数字。
- **错误位置：**客户编号

:::note 提示

华炎魔方公式引擎暂时不支持ISNUMBER函数，可以用正规代替，请参考 [REGEX](url) ,该示例可替换为：

```js
AND(
   NOT(ISBLANK(AccountNumber)),
   NOT(REGEX(AccountNumber, "[0-9]+(.[0-9]+)*"))
)
```

:::

### 客户编号长度

- **说明：** 验证客户编号恰好是 7 位数字。数字 7 仅表示示例性说明。您可以将其更改为您喜欢的任意数字。
- **允许为空时公式：**

```js
AND(
   NOT(ISBLANK(AccountNumber)),
   LEN(AccountNumber) <> 7
)
```

- **不允许为空时公式：**

```js
LEN(AccountNumber) <> 7
```

或

```js
OR(
   ISBLANK(AccountNumber),
   LEN(AccountNumber) <> 7
)
```

- **错误消息：**客户编号必须是 7 位数字。
- **错误位置：**客户编号

### 年收入范围

- **说明：** 验证客户年收入不是负数且不超过 1000 亿美元。设计该极限的目的是发现打字错误。
- **公式：**

```js
OR(
   AnnualRevenue < 0,
   AnnualRevenue > 100000000000
)
```

- **错误消息：**年收入不能超过 1000 亿。
- **错误位置：**年收入

## 示例社区验证规则

### 防止问题中的冒犯性语言
