---
title: 高级函数
---

## REGEX

将文本字段与正则表达式进行比较，如果匹配则返回 TRUE（真）。反之，返回 FALSE（假）。正则表达式是一个字符串，它根据一定语法规则描述字符串的格式。

**使用：** REGEX(文本, regex_text)

**参数：**

- *文本:* `text`
您希望进行比较的字符全文或字段。
- *比较文本:* `text`
您要匹配的正则表达式。

**返回值：** 布尔

***验证规则示例：***

本示例确保名为 SSN 的字段与表示有效社会保险号的正则表达式匹配，即具备 999-99-9999 数字格式。

```js
NOT(
 OR(
  LEN (SSN__c) = 0,
  REGEX(SSN__c, "[0-9]{3}-[0-9]{2}-[0-9]{4}")
 )
)
```

:::note 技巧提示

- ■ 正则表达式的语法基于Java Platform SE 6 语法。但是，转义字符 (\) 未被支持，更改为两个反斜杠 (\\)一样不支持，需要匹配特殊符号请用中括号包裹，比如要匹配符号点`.`可以写为`[.]`。
- ■ 公式中正则表达式引擎匹配整个字符串，而不是在字符串内查找匹配。例如，如果您在搜索姓名 Marc Benioff，那么使用正则表达式.*Marc Benioff.*在如下字符串中找到匹配：
`According to Marc Benioff, the social enterprise increases customer success.`
如果使用正则表达式 `Marc Benioff`，则它只会匹配到以下字符串：
`Marc Benioff`
- ■ 公式中正则表达式引擎匹配的是整个字符串，这表示正则表达起始^结尾$占位符默认是已经加在表达式的起止位置的，您不需要再加上这些占位符。
- ■ 捕获分组和替换都将被忽略。
- ■ 不支持\w、\d等表达试语法[a-zA-Z0-9_]、[0-9]代替。
:::
