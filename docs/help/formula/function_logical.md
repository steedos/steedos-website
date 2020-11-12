---
title: 逻辑函数
---

## AND

如果所有的值均为真，则返回 TRUE（真）响应；如果一个或多个值为假，则返回 FALSE（假）响应。使用此函数作为运算符 && (AND) 的备选。

**使用：** AND(逻辑1,逻辑2...)

**参数：**
用您希望计算的值替换逻辑1,逻辑2...。

```js
IF(AND(Price<1,Quantity<1),“Small”, null)
```

如果价格和数量小于 1，此公式将显示“Small”。如果资产有大于 1 的价格或数量，则此字段为空。

## BLANKVALUE

判断表达式是否具有值，如果没有值则返回一个置换表达式。如果表达式具有值，则返回表达式的值。

**使用：** BLANKVALUE(表达式, 置换表达式)

**参数：**

- *表达式:* `text`
您希望计算的表达式。
- *置换表达式:* `text`
您希望替换任何空白值的值。

```js
BLANKVALUE(Department, "Undesignated")
```

如果部门字段包含值则此公式返回部门字段的值。如果部门字段为空，则此公式返回词语未指定。

```js
BLANKVALUE(Payment_Due_Date__c, StartDate +5)
```

此公式返回当 Payment Due Date（付款到期日期）为空时，合同开始日期之后第五天的日期。Payment Due Date（付款到期日期）是自定义日期字段。

:::note 技巧提示

- ■ 如果字段包含字符、空白或零，则则字段不为空。例如，如果字段包含使用空格键插入的空格，则该字段不为空。
- ■ 如果字段没有值，则使用 BLANKVALUE 函数返回指定字符串；如果您只想检查字段是否有值，则使用[ISBLANK](function_logical#isblank)函数。
- ■ 如果您对数值字段使用该函数，则字段没有值且配置将空白字段处理为空白时，该函数才返回第二个参数中的指定表达式值，如果字段没有值且配置将空白字段处理为0时，刚按0值返回而不是返回第二个参数中的指定表达式值。
- ■ 因为我们的空白字段处理方式默认值是“将空白字段视为零”，所以低代码中要小心，不配置这个属性时，默认为按0值处理。零代码配置时问题不大，因为空白字段处理属性是必填的，不存在默认值问题。
:::

:::caution 注意
该函数与[ISBLANK](function_logical#isblank)很像，但是该函数会进一步返回字段值为空时的表达式，一般来说，如果您只是想判断字段值是否为空，应该使用后者而不是该函数。
:::

## CASE

根据一系列值检查一个给定表达式。如果表达式等于其中一个值，则返回相应结果。如果它不等于任何值，则返回其他结果。

**使用：** CASE(表达式,​值1, 结果1, 值2,​ 结果2,...,其他结果)

**参数：**

- *表达式:* `text`
用要与所指定的每个值进行比较的字段或值替换表达式。
- *值1:* `text`
必须用相等的值替换每个值和结果以返回结果项。
- *结果1:* `text`
当表达式不等于任何值时，用您希望返回的值替换其他结果。

这是一个自定义公式字段 Days Open 的示例，使用该示例可根据个案未处理的天数显示不同的文本：

```js
CASE(Days_Open__c, 3,
  "Reassign", 2, "Assign Task", "Maintain")
```

显示下面的文本：

为任何三天未处理的个案显示“Reassign”（重新指定）。

为任何有两天未处理的个案显示“Assign Task”（分配任务）。

为所有其他个案显示“Maintain”（维护）。

此公式字段显示上次活动的月份，如果没有活动，则显示“None”（无）。

```js
CASE(MONTH(LastActivityDate),
1, "January",
2, "February",
3, "March",
4, "April",
5, "May",
6, "June",
7, "July",
8, "August",
9, "September",
10, "October",
11, "November",
12, "December",
"None")
```

使用下面的默认值公式，可以根据业务机会创建人所在的部门在业务机会中插入另一个折扣率：

```js
CASE(User.Department,​​ "IT", 0.25, "Field", 0.15, 0)
```

在本示例中，该公式在“IT”部门的用户所创建的所有业务机会上插入了 25% 的折扣率，或在“Field”部门的人员所创建的所有业务机会上插入了 15% 的折扣率。如果创建者不属于其中任何一个部门，则折扣率为零。这是业务机会中使用标准用户字段 Department（部门）的自定义百分比字段。

您可能希望将产品与其语言关联起来，以便用户了解要包含的文档或适配器的类型。使用下面的默认值公式可根据创建某产品的用户所属的国家自动设置该产品的语言。在本示例中，如果用户所属国家是“Japan”（日本），则默认值为“Japanese”（日语），如果用户所属国家是“US”（美国），则默认值为“English”（英语）。如果两者都不是，则会将默认值“unknown”（未知）插入产品语言字段。

```js
CASE($User.Country ,​​ "Japan", "Japanese", "US", "English","unknown")
```

:::note 技巧提示

- ■ 请确保您的值1 和值2 等表达式属于相同的数据类型。
- ■ 请确保您的结果1 和结果2 等表达式属于相同的数据类型。
- ■ CASE 函数中不能包含返回真或假的函数，而应当确保真或假表达式返回数字，例如：

```js
CASE(1, IF(ISPICKVAL​ (Term__c, "12"),​ 1, 0),
 12 * Monthly_Commit__c,​​
 IF(ISPICKVAL(Term__c, "24"), 1, 0),​​
 24 * Monthly_Commit__c, 0)
```

在该公式中，Term（期限）是一个选项列表字段，当它包含表示真的值 1 时，将与“每月提交量”相乘。

- ■ 需包含其他结果值。
- ■ 如果任何表达式返回一个错误，那么，即使其他表达式返回的值正确，`CASE`函数也将返回一个错误。例如，在`CASE(Field__c,"Partner", "P",​ "Customer", "C", LEFT(Field__c, -5))` 公式中，即使其中字段的值是“Partner”（合作伙伴）或“Customer”（客户），该公式也会由于上一条语句不合逻辑而返回一个错误。
- ■ 如果 CASE 函数中的字段为空，它将返回其他结果值。例如，如果 Days Open（未处理天数）字段为空、0 或者 2 和 3 以外的任何值，`CASE(Days_Open__c, 3, "Reassign", 2,​ "Assign Task", "Maintain")`公式将显示“Maintain”（维护）。
- ■ 使用 CASE 函数可以确定选项列表值是否等于特定的值。例如，当 Term（期限）为 12 时，`CASE(Term__c, "12", 12 Monthly_Commit__c, "24",​ 24 * Monthly_Commit__c, 0)` 公式将 Monthly Commit（每月提交量）乘以 12；当 Term（期限）为 24 时，该公式将 Monthly Commit（每月提交量）乘以 24。否则，结果为零。
:::

## IF

确定表达式为真或为假。如果为真则返回一个给定值，如果为假则返回另一个值。

**使用：** IF(逻辑测试, value_if_true, value_if_false)

**参数：**

- *逻辑测试:* `text`
用要计算的表达式替换 逻辑测试。
- *value_if_true:* `text`
用您希望当表达式为真时所返回的值替换 value_if_true。
- *value_if_false:* `text`
用您希望表达式为假时所返回的值替换 value_if_false。

```js
IF(AND(Payment_Due_Date__c < TODAY(),​​Payment_Status__c =“UNPAID”) , “PAYMENT OVERDUE”, ​null)
```

此公式确定付款到期日期是否已过，以及付款状态是否为“UNPAID”（未付）。如果是，则返回文本“PAYMENT OVERDUE”（付款逾期）；如果不是，则保持该字段为空。本示例使用名为 Payment Due Date（付款到期日期）的自定义日期字段和一个名为 Payment Status（付款状态）的自定义文本字段。

使用该默认值公式可根据用户所在城市设置资产的税率。使用以下默认值创建自定义百分比字段：

```js
IF($user.city = "Napa", 0.0750,
 IF($user.city = "Paso Robles", 0.0725,
  IF($user.city = "Sutter Creek", 0.0725,
   IF($user.city = "Los Olivos", 0.0750,
    IF($user.city = "Livermore", 0.0875, null
    )
   )
  )
 )
)
```

:::note 技巧提示

- 请确保您的 value_if_true 和 value_if_false 表达式属于相同的数据类型。
:::

## ISBLANK

判断表达式是否具有值，如果没有值则返回 TRUE（真）。如果它包含一个值，则该函数返回 FALSE（假）。

**使用：** ISBLANK(表达式)

**参数：**

- *表达式:* `text/number/date/datetime`
用您希望计算的表达式替换表达式。

```js
(IF(ISBLANK(Maint_Amount__c), 0, 1) + ​
 IF(ISBLANK(Services_Amount__c), 0,1) + ​
  IF(ISBLANK(Discount_Percent__c), 0, 1) + ​
   IF(ISBLANK(Amount), 0, 1) +​
    IF(ISBLANK(Timeline__c), 0, 1)) / 5
```

此公式可提取一组字段，并计算人员所用的百分比。此公式字段检查五个字段以查看它们是否为空。如果为空，则该字段计数为 0。对于任何包含一个值的字段计数“1”，且该总和除以五（计算的字段数）。此公式需要您选中“空白字段处理”下面的将空白字段视为空白选项，否则公式中的ISBLANK会始终返回FALSE。

:::note 技巧提示

- ■ 在新公式中使用 ISBLANK 替代 ISNULL。ISBLANK 与 ISNULL 功能相同，但还支持文本字段。公式支持 ISNULL，但是推荐使用 ISBLANK。
- ■ 请不要用`MyDateTime__c == null`这种表达式判断空值，而应该使用`ISBLANK(MyDateTime__c)`。
- ■ 参数支持数据类型text, number, date, datetime等，但是不支持类型boolean。
- ■ 如果字段包含字符、空白或零，则字段不为空。例如，如果字段包含使用空格键插入的空格，则该字段不为空。
- ■ 如果字段没有值，则使用 [BLANKVALUE](function_logical#blankvalue) 函数返回指定表达式；如果您只想检查字段是否有值，则使用 ISBLANK 函数。
- ■ 如果您对数值字段使用该函数，则字段没有值且配置将空白字段处理为空白时，该函数才返回 TRUE。
- ■ 因为我们的空白字段处理方式默认值是“将空白字段视为零”，所以低代码中要小心，不配置这个属性时，默认为按0值处理。零代码配置时问题不大，因为空白字段处理属性是必填的，不存在默认值问题。
:::

## ISNULL

确定表达式是否为空（空白），如果是则返回 TRUE（真）。如果它包含一个值，则该函数返回 FALSE（假）。

**使用：** ISNULL(表达式)

**参数：**

- *表达式:* `text`
用您希望计算的表达式替换表达式。

:::caution 重要
在新公式中使用 ISBLANK 替代 ISNULL。ISBLANK 与 ISNULL 功能相同，但还支持文本字段。
:::

## NOT

对于 TRUE（真）返回 FALSE（假），对于 FALSE（假）返回 TRUE（真）。

**使用：** NOT(逻辑)

**参数：**

- *逻辑:* `text`
用您希望计算的表达式替换逻辑。

```js
IF(NOT(Status = "Closed"), ROUND(NOW()-CreatedDate, 0), null)
```

检查变量是否未处理；如果是，则通过从当前日期和时间减去创建日期和时间来计算它未被处理的天数。结果是舍入为零小数位的未处理天数。如果变量已处理，则此字段为空。

## NULLVALUE

确定一个表达式是否为空（空白），如果为空则返回一个置换表达式。如果表达式不为空，则返回表达式的值。

**使用：** NULLVALUE(表达式, 置换表达式)

**参数：**

- *表达式:* `text`
用您希望计算的表达式替换表达式。
- *置换表达式:* `text`
用您希望替换任何空白值的值替换置换表达式。

:::caution 重要
在新公式中使用 BLANKVALUE 替代 NULLVALUE。BLANKVALUE 与 NULLVALUE 功能相同，但还支持文本字段。
:::
