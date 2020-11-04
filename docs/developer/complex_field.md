---
title: 复杂类型字段
---

## 选择类型字段 select

选择类型的字段，用户输入时生成下拉框，需配合options属性使用。

```yaml
priority:
  type: select
  label: 优先级
  options: 高:high,中:normal,低:low
  defaultValue: normal
  filterable: true
```

### 多选 multiple

如果使用Steedos标准MongoDB数据源，选择类型字段可以定义多选(multiple)属性，实现多选功能。

```yaml
tags:
  type: select
  label: 类别
  options: 客户,供应商,合作伙伴,其他
  filterable: true
  multiple: true
```

![select类型字段多选](/assets/field_select_multiple.png)

### 可选项 options

可以用多种格式定义可选项(options)。

#### 完整格式

```yaml
options:
  - label: High
    value: high
    color: bad6f2
  - label: Normal
    value: normal
    color: aaaaaa
  - label: Low
    value: low
```
> color表示选项选中时的背景色，不是必须的，格式为6位16进制颜色值，不需要带上前缀#号。

#### 简易格式 (区分显示值、储存值和背景色)

```yaml
options: 
  - 高:high:bad6f2
  - 中:normal:aaaaaa
  - 低:low
```

### 可选项脚本 optionsFunction

通过脚本生成可选项的内容。函数需返回以下格式的数组：

```js
[{label: "Label A", value: "A", icon: "icon-a"}]
```

示例

```yaml
objects:
  label: 对象
  type: lookup
  required: true
  multiple: true
  optionsFunction: !!js/function |
    function () {
      var _options = [];
      _.forEach(Creator.objectsByName, function (o, object_name) {
        return _options.push({
          label: o.label,
          value: o.name,
          icon: o.icon
        });
      });

      return _options;
    }
  filterable: true
```

### 数据存储格式

单选字段在数据库中保存为字符串，多选字段在MongoDB数据库中保存为数组。

#### 单选

```js
tags: "客户"
```

#### 多选

```js
tags: ["客户","合作伙伴"]
```

>因为数据格式不同，如果把一个字段的属性从单选改为多选，会造成已有记录的值丢失，需要执行脚本变更数据库。

## 引用类型字段 lookup

引用类型的字段，用户输入时生成下拉框，用户可以从相关表搜索并选中记录。引用类型的字段保存在数据库中的值是被选中记录的的id。当配置为多选时，可以一次选中多条记录。

例如可以为联系人表定义了一个单位字段，此字段在显示时从accounts表的数据中选择，并需符合条件 priority == "normal"。

```yaml
account_id:
  type:"lookup"
  label:"单位"
  reference_to:"accounts"
  filters: [["priority", "eq", "normal"]]
```

![lookup类型字段](/assets/field_lookup.png)

### 引用对象(reference_to)

编辑时，从关联表中选择记录，如果引用的对象上配置了enable_tree属性，则以tree形式列出关联表中记录供选择。

### 过滤器(filters)

在reference_to对象中筛选可选项时，指定过滤条件，限定选择范围。

- 目前只支持`[["priority", "eq", "normal"]]`这种简单格式的过滤功能。
- 多个条件AND查询时，过滤条件可以像这样定义：`[["priority", "eq", "normal"], ["state", "eq", "active"]]`。
- 后续会整合为支持通用[过滤条件](object_filter.md)功能。

### 多选 multiple

如果使用Steedos标准MongoDB数据源，引用类型字段可以定义多选(multiple)属性，实现多选功能。

```yaml
contract_type:
  type: lookup
  label: 合同分类
  reference_to: contract_types
  required: true
  multiple: true
```

![lookup类型字段多选](/assets/field_lookup_multiple.png)

多选字段在MongoDB数据库中保存为数组，值为选中记录的ID：

```js
contract_type: ["id-1111111","id-2222222"]
```

### 默认图标(defaultIcon)

下拉选项中显示的默认图标，如果配置了reference_to，则显示引用对象的图标

### 依赖字段(depend_on)

此字段的值需要依赖其他字段的值，当depend_on中的字段值发生变化时，会重新计算当前字段值/可选项。

## 主表/子表类型字段 master/detail

在引用字段的基础上，额外创建一个对象间的特殊父子关系，配置语法与lookup类型相同。当前表为子表，字段reference_to的表为主表。在显示主表记录时，系统会自动生成子表列表视图。

规则：

- 所有子表记录的关系字段必填。
- 子表记录的所有权和共享由主记录确定。
- 当用户删除主记录时，将删除所有子表记录。
- 您可以在主记录上创建累计汇总字段以汇总子表信息记录。
- 您最多可以有 3 个自定义子表等级。

例如，可以为联系人的表创建一个 master/detail 字段，指向单位表。点开单位记录时，可以查看此单位中的联系人清单。

```yaml
  account:
    label: 单位
    type: master_detail
    reference_to: accounts
    sortable: true
    name: account
    filterable: true
```

![master_detail类型字段多选](/assets/field_master_detail_guide.png)

## 表格类型字段 grid

表格字段类型包含多个列字段，在界面上显示为一个表格。

- 列字段可以是任何基本的字段类型。
- 每个列字段显示为表格中的一列。
- 用户有了表格字段的填写权限，就可以增删改其中的行。
- 如果配置了某个列字段隐藏，表格中看不到此字段。
- 如果配置了某个列字段只读，表格中不可修改此字段。

表格字段配置步骤

- 新增一个字段，类型选择为表格
- 逐个新增除表格字段的其他类型字段的列字段，字段名规范："表格字段名.$.列字段名"

表格字段与子表不同，在数据库中不会生成一个新的表，而是作为一个对象数组字段保存在记录中。所以只适用于表格行数(小于100行)比较少的业务场景。

## 自动编号类型字段 autonumber

对于用途为编号的字段，可以设置其字段类型为自动编号类型autonumber， 并设置公式formula。如此设置后，这个字段无需手动输入，而由系统直接得到编号值。

比如示例contracts合同对象中，配置了serial_number字段：

```yaml
  serial_number:
    type: autonumber
    formula: "{YYYY}-{0000}" 
    label: 合同编号
    filterable: true
    omit: true
    readonly: true
    searchable: true
```

### formula属性

如上，公式formula设置为“{YYYY}-{0000}”，合同对象记录的合同编号会自动生成，其形式类似于“2020-0001”。

在编号公式formula中， “{YYYY}”表示4位的年份，“{0000}”表示4位的流水号（不足4位会补足4位）。同样，还可以采用“{MM}”表示2位的月、“{DD}”表示2位的日。

也可以加入其他的字符串，例如“SN{YYYY}{MM}{DD}{000}” 或是“采购合同[{YYYY}]{000}号”。

### autonumber对象

对于自动编号字段，系统是通过autonumber对象记录来取得编号值的。

autonumber对象的字段包括：
- object_name: 对象名，如contracts
- field_name: 自动编号字段，如serial_number
- current_no: 当前编号值，如1000
- date_from: 日期范围开始日期，即编号规则生效开始时间，为空则表示不限制
- date_to：日期范围截止日期，即编号规则生效结束时间，为空则表示不限制

当系统为自动编号字段取值时，首先会查询对象autonumber：
- 如果没有查询到本字段的记录，则自动插入一条记录：当前编号值记为1，同时将1作为流水号、按formula格式赋值给自动编号字段；
- 如果查询到本字段的记录，则当前编号值+1，并作为流水号、按formula格式赋值给此自动编号字段。

对于autonumber对象，管理员可以在前台页面的`设置-业务对象-自动编号`中进行维护。

![自动编号](/assets/autonumber_set.png)

## 公式字段 formula

对于自动计算值的自定义公式字段，可以设置其字段类型为公式字段 formula， 并设置返回值类型data_type和公式formula。如此设置后，这个字段无需手动输入，而由系统自动计算得出。

比如示例quote_line_item 报价行条目对象中，配置了subtotal字段：

```yaml
  subtotal:
    label: 小计
    type: formula
    data_type: currency
    formula: "ROUND(unit_price * quantity,2)"
    inlineHelpText: 行项目的销售价格与数量相乘。
```

更多示例请参考[通过公式计算字段值](help/no-code/formula_field.md)。

### data_type属性
公式的数据类型决定预期从公式返回的数据的类型。

- text：返回字符串。除公式输出外，若也要显示文本，请将该文本放入引号中。对文本、文本区域、URL、电话、电子邮件、地址和自动编号字段使用文本数据类型。此数据类型对报表中的自定义汇总公式不可用。
- number：返回正负整数或小数。华炎魔方对公式字段使用四舍五入平分规则。例如，12.345 变为 12.35 和 −12.345 变为 −12.34。
- currency：返回金额格式数字（默认2位小数）。
- boolean：返回 True（真） 或 False（假）值。该字段在记录详细信息页面和报表中显示为复选框。使用 True 作为选中值，使用 False 作为未选中值。
- date：返回代表日历中某一天的日期。当前日期可通过在公式中调用内部函数 TODAY() 获得。此数据类型对报表中的自定义汇总公式不可用。
- datetime：返回表示时间中某一时刻的数据。日期/时间字段包括日期，还包括由小时、分钟和秒组成的一天中的时刻。您可以使用 NOW() 函数在公式中插入当前日期和时间。此数据类型对报表中的自定义汇总公式不可用。

### formula属性

如上，公式formula设置为"ROUND(unit_price * quantity,2)"，报价行条目对象记录的小计会自动生成，计算单价和数量相乘的值。

函数ROUND(数字,数字位数)，返回与所指定的数字最接近的一个数字，并通过指定的位数来约束新数字。

### formula_blank_value属性

空白字段处理，zeroes表示将空白字段视为零，blanks表示将空白字段视为空白，默认为zeroes。

## 汇总字段 summary

累计汇总字段会计算相关记录中的值，例如子表中的值。您可以创建累计汇总字段，它可根据某个子表中的字段值，在主表中显示汇总值。子表必须通过master/detail字段直接与主表相关联。例如，您要在报价单显示所有报价行项目子表中的总金额。

```yaml
  subtotal:
    type: summary
    label: 小计
    summary_object: quote_line_item
    summary_type: sum
    summary_field: "total_price"
    data_type: currency
    inlineHelpText: 报价行项目的总和。(只读)
```

### summary_type属性
汇总类型：

- COUNT：相关记录的总数；当汇总类型选择COUNT时，不需要配置summary_field属性。
- SUM：对在要聚合的字段选项中选择的字段中的值进行加总。仅数字、金额和百分比字段可用。
- MIN：显示所有直接相关记录中在要聚合的字段选项中选择的字段的最小值。仅数字、金额、百分比、日期和日期/时间字段可用。
- MAX：显示所有直接相关记录中在要聚合的字段选项中选择的字段的最大值。仅数字、金额、百分比、日期和日期/时间字段可用。

### summary_object属性

如上，汇总summary_object设置为quote_line_item，子表“报价行项目”对象，即要汇总的对象。

### summary_field属性

如上，汇总summary_field设置为"total_price"，子表“报价行项目”对象的字段“总价”，即汇总要聚合的字段。

### summary_filters属性

指要汇总的子表记录的[筛选条件(filters)](object_filter.md)，只有符合筛选条件的数据才会进行汇总。

### data_type属性
同如上公式字段。