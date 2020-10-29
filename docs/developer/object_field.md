---
title: 基本类型字段
---

字段用于定义业务对象的属性。包括前台用户的填写界面和后台数据库的保存格式。

Steedos支持以下字段类型。

- 文本(text)
- 多行文本(textarea)
- 日期(date)
- 日期时间(datetime)
- 下拉(select): 界面生成下拉框，需配合options属性使用。
- 布尔(boolean): 界面生成勾选框。
- 数值(number): 只能输入数值内容，可以指定小数位数。
- 金额(currency): 只能输入数值内容，默认2位小数，也可以指定小数位数。
- 引用(lookup): 可以引用其他相关对象中的记录，联合reference_to字段，从关联表中选择记录。
- 网址(url): 在只读时， 点击会以窗口形式打开网址。
- 邮件地址(email): 在只读时，点击会自动打开邮件客户端，并将字段值带入收件人中。
- 主表/子表(master_detail): 主表子表字段类型是引用字段类型的一种扩展，将当前记录链接到主表成为子记录。
- 表格(grid)：表格字段类型包含多个列字段，在界面上显示为一个表格。
- 自动编号(autonumber)：设置公式formula后，无需手动输入，由系统直接生成编号值。
- 开关(toggle): 界面生成类似勾选框的开关键。
- 公式(formula)：设置返回值类型data_type和公式formula后，此字段无需手动输入，由系统自动计算得出。
- 汇总(summary)：定义子表中的某个字段值，在主表中显示汇总值，主要用于数字和金额的sum累加计算。

![表单编辑效果](/assets/field_guide.png)

例如以下例子定义了一个owner字段:

```yaml
owner:
  label: 责任人
  type: lookup
  reference_to: users
  defaultValue:
  required: true
  inlineHelpText: 请选择此任务的责任人，相关人员会收到待办提醒。
  is_wide: false
  searchable: true
  index: true
  omit: false
  hidden: false
```

## 字段基本属性

### 字段名 name

字段在数据库中保存的名称，区分大小写，建议全部使用小写字母。

当使用OData或GraphQL API查询和更新对象数据时，也使用字段名。

### 显示名 label

字段在最终用户界面上的显示名称。显示名称支持国际化，如果系统检测到i18n文件中包含 "{objectname}_{fieldname}"，以翻译为准。

### 默认值 defaultValue

设定字段的默认值，可以是固定值，也可以可配置默认值[公式](object_field_formula.md)，例如 {userId}, {spaceId} 等

```yaml
owner:
  defaultValue: {userId}
```

### 必填 required

设定当前字段必填，在新增和修改界面如果当前字段未填写则不能报错。当调用OData接口操作数据时，必填字段也必须传入。

### 帮助文本 inlineHelpText

可配置表单填写时显示的一段描述，帮助业务人员理解该字段的作用。

在表单填写时，在字段名右侧显示为一个Info图标，业务人员点击此图标可以看到帮助文本。

### 宽字段 is_wide

对于宽屏幕，Steedo显示表单时会显示为两列。宽字段始终占两列宽度，窄字段占一列宽度。

### 分组 group

在记录的显示页面和编辑页面，将字段分组显示。

group值相同的字段被分到同一组，分组标题为group的值，分组内的字段顺序为字段在表单上定义时的先后顺序。

### 多选 multiple

文本、选择类、lookup、master/detail 型字段添加此属性，可以实现多选功能，数据库中保存也是对应的数组类型。

### 可搜索 seachable

系统进行快捷搜索时，默认只搜索name字段的内容。如果配置了此属性，当用户在此对象中执行搜索时，会同时搜索此字段的内容。

注意，对lookup类型的字段如果配置了 searchable，不能同时搜索相关表中的name属性。

### 可排序 sortable

考虑到数据库的性能，只有设定了可排序的字段，在列表视图中才能按照此字段进行排序。
可排序字段系统会自动创建索引。默认为不可排序

### 索引 index

配置是否在数据库中为此字段创建索引，默认为不创建索引。对于大多数数据库引擎，索引字段配置的太多会导致数据库性能下降。

通常建议为以下类型的字段配置索引：

- 需要搜索的字段
- 在列表视图或报表中需要过滤的字段
- 相关表的字段

### 唯一 unique

为此字段创建唯一索引，字段值在数据库中不得重复。

### 只读 readonly

此字段只显示在查看页面或列表页面上，新增和修改页面都不显示。（此属性即将作废，不建议使用。）

### 隐藏 hidden

对于一些后台计算用的字段，可以设置为隐藏。隐藏字段在列表、查看、编辑、过滤界面等都不显示，但是可以通过脚本操作，也可以配置在过滤条件中。

### 编辑时忽略 omit

只是新建和编辑表单中不显示，列表、表单详细界面等可能显示。

### 标题字段 is_name

系统默认字段名为name的字段为标题字段，在列表显示时，标题字段会自动加上链接，点击进入记录查看界面。

如果当前表没有name字段，需要指定其他字段为标题字段，可以设置此属性。

### 禁用 disabled

在编辑时禁用此字段。（此属性即将作废，不建议使用。）

### 黑箱字段 blackbox

如果配置了此属性，Steedos在验证数据格式时，忽略此字段的内容。

### 范围限制 min/max

- 如果type为number或currency，则这些规则定义了最小或最大值。
- 如果type为text或textarea，则这些规则定义最小或最大字符串长度。
- 如果type为date, datetime，则这些规则定义了最小或最大日期（包括首尾两天）

```yaml
  title:
    type: text
    min: 5
    max: 10
  range_slider:
    type: number 
    min: 0
    max: 100
  date:
    label: Date
    type: date
    min: !<tag:yaml.org,2002:js/function> |-
      function (){
        return (new Date(Date.UTC(2020, 0, 1)));
      }
    max: !<tag:yaml.org,2002:js/function> |-
       function (){
         return (new Date(Date.UTC(2020, 11, 31)));
       }
```

### 主键 primary

默认数据源使用mongodb数据库，默认使用_id作为主键。如使用第三方SQL数据源，需要手工指定主键字段。

### 选项列表值集 picklist

指定字段的选择项，适用于select类型字段。指定的picklist记录存在时，覆盖字段定义的options属性

```yaml
country:
  type: select
  picklist: countryList
```

![选项列表值集](/assets/field_picklist.png)

## 基本类型字段

### 文本 text

```yaml
name:
  label: 问题标题
  type: text
  is_wide: true
  required: true
  searchable: true
  index: true
```

备注：

- 如果配置了多选(multiple)属性，自动升级为文本数组类型，以数组的形式保存在数据库中，用户界面上可以输入多个文本。
- 如果定义为文本且选择建立索引，则最多支持300个字符(不区分中英文)

### 多行文本 textarea

```yaml

description:
  label: 问题描述
  type: textarea
  is_wide: true
  rows: 4
```

参数rows代表编辑时文本框默认显示的行数。
多行文本类型不支持建立索引。

### 日期 date

日期类型的字段，用户输入时自动弹出日期选择框。

```yaml
deadline:
  label: '截止日期'
  type: 'date'
```

![日期类型字段](/assets/field_date.png)

### 日期时间 datetime

日期时间类型的字段，用户输入时自动弹出日期时间选择框。

```yaml
starttime:
  label: '开始时间'
  type: 'datetime'
```

![日期时间类型字段](/assets/field_datetime.png)

### 布尔 boolean

布尔类型的字段，界面生成勾选框。

```yaml
is_done:
  type: boolean
  label: 已完成
  defaultValue: false
```
### 开关 toggle

开关类型字段，界面生成类似勾选框的开关键。

```yaml
is_enabled:
  type: toggle
  label: 已启用
  defaultValue: true
```

### 数值 number

数值类型在界面上显示为数字输入框，并可使用scale属性来配置显示的小数位数（默认为0）

```yaml
comment_count:
  label: 评论数
  type: number
  scale: 2
  required: true
```

### 金额 currency

金额类型在界面上显示为数字输入框，并可使用scale属性来配置显示的小数位数（默认为2）

```yaml
amount:
  label: 总金额
  type: currency
  scale: 4
  required: true
```

### 网址 url

网址类型的字段编辑时可输入网址，在只读界面点击网址，弹出到对应的。

```yaml
website:
  type: "url"
  label: "网址"
```

### 邮件 email

邮件类型字段编辑时，字段内可输入邮件地址，系统会校验邮件格式是否合法。在只读界面，点击邮件会自动打开邮件客户端，进入写邮件界面。

```yaml
mail:
  type: "email"
  label: "邮件"
```
