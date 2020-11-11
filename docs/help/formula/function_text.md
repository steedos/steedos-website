---
title: 文本函数
---

## BEGINS

确定文本是否以特定字符开头，如果是则返回 TRUE（真）。如果不是，则返回 FALSE（假）。

**使用：** BEGINS(文本, 比较文本)

**参数：**

- *文本:* `text`
您希望进行比较的字符全文或字段。
- *比较文本:* `text`
用于比较的文本片断。

**返回值：** 布尔

```js
IF(BEGINS (Product_type__c , “ICU”), “Medical”, “Technical”)
```

如果产品类型自定义文本字段中的文本以“ICU”开头，则此示例返回文本“Medical”（医疗）。对于所有其他产品显示“Technical”（技术）。

:::note 技巧提示

- ■ 此函数区分大小写，因此，请确保比较文本值的大小写正确无误。
- ■ 在验证规则或工作流规则中使用此函数时，留空的字段被视为有效。例如，如果您的验证规则要测试资产序列号是否以“3”开始，则序列号为空的所有资产都将视为有效。
:::

## BR

在文本字符串中插入一个换行符。

**使用：** BR()

```js
CASE(ShippingCountry,
"USA",
  ShippingStreet & BR() &
  ShippingCity & ",
  " & ShippingState & " " &
  ShippingPostalCode & BR()
  & ShippingCountry,
"France",
  ShippingStreet & BR() &
  ShippingPostalCode & " " &
  ShippingCity & BR() &
  ShippingCountry, "etc")
```

此公式字段以标准格式显示联系人的带格式邮寄地址，根据所在的国家/地区，可能会在该地址的适当位置中包含空格和换行符。

:::note 技巧提示

- ■ 请勿删除函数名称后面的括号。
- ■ 保留括号为空。括号中不必包含值。
- ■ 请勿忘记在 BR() 两侧加上串联运算符：&。
:::

## CASESAFEID

将 15 个字符的 ID 转换成区分大小写的 18 个字符 ID。

**使用：** CASESAFEID(id)

**参数：**

- *id:* `text`
用对象 ID 替代 id。

```js
CASESAFEID (Id)
```

此公式将 15 个字符的 ID 替换为 18 个字符、区分大小写的 ID。
假设Id值为abcdefghijklmno，该公式将返回"abcdefghijklmnoAAA"。

:::note 技巧提示

- ■ 请勿删除函数名称后面的括号。
- ■ 保留括号为空。括号中不必包含值。
- ■ 请勿忘记在 BR() 两侧加上串联运算符：&。
:::
