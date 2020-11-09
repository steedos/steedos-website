---
title: 日期和时间函数
---


## DATEVALUE
为日期、日期时间或文本表达式返回日期值。

**使用：** DATEVALUE(表达式)

**参数：** `date/datetime/text` 
日期、日期时间或日期、日期时间格式的文本值的合并字段或表达式

```js
DATEVALUE(ClosedDate)
```

基于结束日期时间字段值显示日期值，参数ClosedDate可以是日期、日期时间类型，也可以是日期、日期时间格式的字符串类型。


```js
DATEVALUE("2005-1-15 12:30")
```
以日期值形式返回“2005-01-15”。

:::note 技巧提示
- ■ 如果该函数中所引用的字段不是有效的文本或日期/时间字段，则该公式中的字段可能显示为异常字符串或错误信息，比如DATEVALUE("2005-111-15") 将返回NaN-NaN-NaN。
- ■ 当输入日期时，请将日期放在引号内，并使用如下格式：YYYY-MM-DD，即，四位数字年份、两位数字月份和两位数字日期。
- ■ 如果表达式不在有效的日期范围内（例如，MM 不在 01 和 12 之间），则该公式中的字段将显示“NaN-NaN-NaN”。
- ■ 该公式始终会返回utc（协调世界时间）0点值，且除非传入的参数明确带了时区信息，否则将始终使用用户的时区计算，比如DATEVALUE('2018-12-12 06:06:06')返回的是2018-12-11，而DATEVALUE('2018-12-12T06:06:06Z')返回的是2018-12-12。
:::

## DATETIMEVALUE
返回年份、月份、日和 GMT 时间值。

**使用：** DATETIMEVALUE（表达式）

**参数：** `text` 
不带TZ字符的日期时间格式的文本值、合并字段或表达式

```js
DATETIMEVALUE(TEXT(ClosedDate))
```
基于结束日期字段值显示日期时间值，参数ClosedDate必须是日期类型，而不可以是日期时间类型， 因为如果ClosedDate是日期时间类型，TEXT(ClosedDate)返回的会是"2020-11-04 03:45:00Z"这种带Z的字符串。

```js
DATETIMEVALUE("2005-11-15 17:00:00") 
```
以日期和时间值形式返回“2005-11-15T17:00:00.000Z”（即utc时间2005 年 11 月 15 日17点整）。

:::note 技巧提示
- ■ 始终使用 GMT 时区计算 DATETIMEVALUE，而且不能更改。
- ■ 当输入特定日期时，请将日期放在引号内，并使用如下格式：YYYY-MM-DD，即，四位数字年份、两位数字月份和两位数字日期。
- ■ 如果表达式不在有效的日期范围内（例如，MM 不在 01 和 12 之间），则该公式中的字段将返回错误信息。
- ■ DATETIMEVALUE不支持带TZ的字符串写法，其返回值本身就按utc值来的，而DATEVALUE是同时支持带TZ和不带TZ字符串两种写法的，而且不带TZ的会按本地时区规则返回日期值（即可能返回前一天的日期值）。
- ■ DATETIMEVALUE只接受日期或日期时间字段转换为文本后的值作为参数，即不可以传入非文本值作为参数，而DATEVALUE同时支持传入日期、日期时间类型，或者日期、日期时间格式的字符串类型。
- ■ 因为TEXT(NOW())返回的格式是带Z的，所以DATETIMEVALUE(TEXT(NOW()))将直接报错，可以使用DATETIMEVALUE(TEXT(TODAY()))或DATETIMEVALUE(TEXT(DATEVALUE(NOW())))代替。
:::