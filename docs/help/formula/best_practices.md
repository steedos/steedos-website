---
title: 公式最佳实践
---

在华炎魔方中，您如果需要构建更复杂的公式，请参考这些提示，以帮您筹划公式逻辑，并更轻松地对错误进行故障排除。

## 将每个函数放在单独行上

轻松培养将整个公式保持在一行中的习惯，特别是在公式较小时。将每个函数放在各自的行上，这将使公式更易于读取和排除故障。这些示例显示相同公式，一个是没有换行符，另一个是将每个函数放在单独行上。

```js
IF(AND(ISBLANK(myDate_c),active_c=true),"Missing Date","Not Applicable")
```

```js
IF(
AND(
ISBLANK(myDate_c),
active_c=true
),
"Missing Date",
"Not Applicable"
)
```

## 括号中的缩进部分

在公式涉及多个函数时，缩进有助于在视觉上隔离每个函数，并更容易找出错误，例如错放字符。

在此示例中，通过缩进，您将看到公式的大部分在单个 IF 语句中，并且 AND 语句包含两个函数。在 AND 语句中，函数 ISBLANK 包含在括号内。

```js
IF(
  AND(
    ISBLANK(myDate_c),
    active_c=true
  ),
  "Missing Date",
  "Not Applicable"
)
```

缩进也可帮您集中注意力解决错误。通过采用平面布局，难以发现在 ISBLANK 语句后包含的额外 ")”，且没有关于如何构建公式的视觉提示。

```js
IF(
AND(
ISBLANK(myDate_c)
),
active_c=true
),
"Missing Date",
"Not Applicable"
)
```

通过缩进布局，您可以轻松查看公式的结构。我们可以快速找到并移除多余字符，以便正确格式化 AND 语句。

```js
IF(
  AND(
    ISBLANK(myDate_c)
    ),
    active_c=true
  ),
  "Missing Date",
  "Not Applicable"
)
```

## 使用大写字母写入语句和函数名称

此处所有示例对语句和函数名称使用大写字母，例如 IF、AND 和 ISBLANK，对这些术语使用大写字母可以明确区分函数与参数，并使复杂公式更容易辨别。
