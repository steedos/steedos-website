---
title: 公式中的运算符和函数
---

在构建公式时使用这些运算符和函数。除非另行指定，否则所有的函数都可用在任何能够包含公式（例如，公式字段、验证规则、批准过程和工作流规则）的位置。

## 数学运算符

- [**`+`（加）：**](operator_math#`+`（加) )计算两个值的和。
- [**`-`（减）：**](operator_math#`-`（减）) 计算两个值的差。
- [**`*`（乘）：**](operator_math#`*`（乘）) 乘以其值。
- [**`/`（除）：**](operator_math#`/`（除）) 除以其值。
- [**`^`（幂）：**](operator_math#`^`（幂）) 使一个数字变成指定数字的幂。
- [**`()`（左括号和右括号）：**](operator_math#`()`（左括号和右括号）) 指定先计算左括号和右括号内的表达式。所有其他表达式均使用标准运算符优先权进行评估。

## 逻辑运算符

- [**`=` 与 `==`（等于）：**](operator_logical#等于) 计算两个值是否相等。 `=` 和 `==` 运算符可以互换。
- [**`<>` 与 `!=`（不等于）：**](operator_logical#不等于) 计算两个值是否不相等。
- [**`<`（小于）：**](operator_logical#`<`（小于）) 计算一个值是否小于此符号后面的值。
- [**`>`（大于）：**](operator_logical#`>`（大于））) 计算一个值是否大于此符号后面的值。
- [**`<=`（小于或等于）：**](operator_logical#`<=`（小于或等于）) 计算一个值是否小于或等于此符号后面的值。
- [**`>=`（大于或等于）：**](operator_logical#`>=`（大于或等于）) 计算一个值是否大于或等于此符号后面的值。
- [**`&&`（与）：**](operator_logical#`&&`（与）) 评估两个值或表达式是否都为真。使用此运算符作为逻辑函数 AND 的备选。
- [**`||`（或）：**](operator_logical#`||`（或）) 评估多个值或表达式中是否至少有一个为真。使用此运算符作为逻辑函数 OR 的备选。

## 文本运算符

- [**`&`（串联）：**](operator_text#`&`（串联）) 链接两个或两个以上字符串。

## 日期和时间函数

- [**ADDMONTHS：**](function_date#addmonths) 返回的日期是，指定日期之前或之后的指定月数。如果剩余月的天数比起始月少，函数会返回剩余月的最后一天。否则，结果包含与指定日期相同的日组件。
- [**DATE：**](function_date#date) 从您输入的年、月和日值返回一个日期值。如果公式字段中的 DATE 函数值是无效日期，如非闰年的 2 月 29 日，公式并不会报错，而是返回数值意义上最接近的日期，比如DATE(2021,2,29)将返回2021-03-01，DATE(2021,121,29)将返回2031-01-29。
- [**DATEVALUE：**](function_date#datevalue) 为日期/时间或文本表达式返回日期值。
- [**DATETIMEVALUE：**](function_date#datetimevalue) 返回年份、月份、日和 GMT 时间值。
- [**DAY：**](function_date#day) 以 1 与 31 之间的一个数字形式返回一个月中的某一天。
- [**HOUR：**](function_date#hour) 以 0-23 的数字格式返回当前时间GMT时区小时值（无日期）。
- [**MILLISECOND：**](function_date#millisecond) 以 0 与 999 之间的数字形式，返回毫秒值。
- [**MINUTE：**](function_date#minute) 以 0 与 60 之间的数字形式，返回分钟值。
- [**MONTH：**](function_date#month) 以给定日期的数字格式返回月份，即 1（一月）与 12（十二月）之间的一个数字。
- [**NOW：**](function_date#now) 返回表示当前时刻的日期/时间。
- [**SECOND：**](function_date#second) 以 0 与 60 之间的数字形式，返回秒值。
- [**TIMENOW：**](function_date#timenow) 返回表示当前时刻的时间值 (GMT)。如果您仅想要跟踪时间，而非日期，使用此函数，而不是 NOW 函数，华炎魔方暂时不支持时间类型，所以需要用TEXT函数输出文本值。
- [**TIMEVALUE：**](function_date#timevalue) 返回没有日期的当地时间值，例如工作时间，华炎魔方暂时不支持时间类型，所以需要用TEXT函数输出文本值。
- [**TODAY：**](function_date#today) 将当前日期返回为日期数据类型。
- [**WEEKDAY：**](function_date#weekday) 返回指定日期是周几，用 1 表示周日，2 表示周一，以此类推，7 表示周六。
- [**YEAR：**](function_date#year) 以给定日期的数字格式返回四位数字表示的年份。

## 逻辑函数

- [**AND：**](function_logical#and) 如果所有的值均为真，则返回 TRUE（真）响应；如果一个或多个值为假，则返回 FALSE（假）响应。
- [**BLANKVALUE：**](function_logical#blankvalue) 判断表达式是否具有值，如果没有值则返回一个置换表达式。如果表达式具有值，则返回表达式的值。
- [**CASE：**](function_logical#case) 根据一系列值检查一个给定表达式。如果表达式等于其中一个值，则返回相应结果。如果它不等于任何值，则返回其他结果。
- [**IF：**](function_logical#if) 确定表达式为真或为假。如果为真则返回一个给定值，如果为假则返回另一个值。
- [**ISBLANK：**](function_logical#isblank) 判断表达式是否具有值，如果没有值则返回 TRUE（真）。如果它包含一个值，则该函数返回 FALSE（假）。
- [**ISNULL：**](function_logical#isnull) 确定表达式是否为空（空白），如果是则返回 TRUE（真）。如果它包含一个值，则该函数返回 FALSE（假），不推荐该函数了，请用ISBLANK 替代 ISNULL。
- [**NOT：**](function_logical#not) 对于 TRUE（真）返回 FALSE（假），对于 FALSE（假）返回 TRUE（真）。
- [**NULLVALUE：**](function_logical#nullvalue) 确定一个表达式是否为空（空白），如果为空则返回一个置换表达式。如果表达式不为空，则返回表达式的值。
- [**OR：**](function_logical#or) 确定表达式为真或为假。如果任何表达式为真，则返回 TRUE（真）。如果所有表达式均为假，则返回 FALSE（假）。

## 数学函数

- [**ABS（绝对值）：**](function_math#abs) 计算一个数字的绝对值。数字的绝对值是不含正、负号的数字。
- [**CEILING：**](function_math#ceiling) 将数字向上四舍五入为最接近的整数；如果是负数，先把正数部分舍入为最接近的整数然后加上负号前缀。
- [**EXP：**](function_math#exp) 返回一个值，该值等于所指定数字的 e 幂。
- [**FLOOR：**](function_math#fioor) 返回向下舍入为最接近整数的数字；如果是负数，按整数部分舍入后加负号。
- [**LN：**](function_math#ln) 返回一个指定数值的自然对数。自然对数以常数 e（值为 2.71828182845904）为底。
- [**LOG：**](function_math#log) 返回数字以 10 为底的对数。
- [**MAX：**](function_math#max) 返回一系列数字中的最大数字。
- [**MCEILING：**](function_math#mceiling) 将数字向上四舍五入为最接近的整数；如果是负数，一样按值大小向上舍入为最接近的负整数。
- [**MFLOOR：**](function_math#mfloor) 将数字向下四舍五入为最接近的整数；如果是负数，一样按值大小向下舍入为最接近的负整数。
- [**MIN：**](function_math#min) 返回一系列数字中的最小数字。
- [**MOD：**](function_math#mod) 返回一个数字除以指定除数后的余数。
- [**ROUND：**](function_math#round) 返回与所指定的数字最接近的一个数字，并通过指定的位数来约束新数字。
- [**SQRT：**](function_math#sqrt) 返回给定数字的正平方根。

## 文本函数

- [**BEGINS：**](function_text#begins) 确定文本是否以特定字符开头，如果是则返回 TRUE（真）。如果不是，则返回 FALSE（假）。
- [**BR：**](function_text#br) 在文本字符串中插入一个换行符。
- [**CASESAFEID：**](function_text#casesafeid) 将 15 个字符的 ID 转换成区分大小写的 18 个字符 ID。
- [**CONTAINS：**](function_text#contains) 比较两个文本参数，如果第一个参数包含第二个参数，则返回 TRUE（真）。如果不包含，则返回 FALSE（假）。
- [**FIND：**](function_text#find) 返回某个字符串在文本字符串内的位置（以数字形式表示）。
- [**HYPERLINK：**](function_text#hyperlink) 从指定文本创建一个到可链接的指定 URL 的链接，华炎魔方在界面上暂时不支持把该函数返回值显示为链接。
- [**LEFT：**](function_text#left) 返回从文本字符串开头算起的指定数量的字符。
- [**LEN：**](function_text#len) 返回指定的文本字符串中所含的字符数。
- [**LOWER：**](function_text#lower) 将指定文本字符串中的所有字母转换为小写。不是字母的任何字符不受此函数的影响。
- [**LPAD：**](function_text#lpad) 将指定的字符插入文本字符串的左侧。
- [**MID：**](function_text#mid) 从文本字符串中间返回从给定的起始位置算起的指定数量的字符。
- [**RIGHT：**](function_text#right) 返回从文本字符串右边算起的指定数量的字符。
- [**RPAD：**](function_text#rpad) 将指定的字符插入文本字符串的右侧。
- [**SUBSTITUTE：**](function_text#substitute) 用新文本替换文本字符串中的旧文本。
- [**TEXT：**](function_text#text) 在使用公式的任何地方将百分比、数字、日期、日期/时间或货币类型字段转换为文本。
- [**TRIM：**](function_text#trim) 删除文本字符串开头和末尾处的空格和制表符。
- [**UPPER：**](function_text#upper) 将指定文本字符串中的所有字母转换为大写。不是字母的任何字符不受此函数的影响。

## 高级函数

- **REGEX：** 将文本字段与正则表达式进行比较，如果匹配则返回 TRUE（真）。反之，返回 FALSE（假）。正则表达式是一个字符串，它根据一定语法规则描述字符串的格式。
