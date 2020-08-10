---
title: 过滤器
---

定义视图或报表时，可以同时定义筛选条件，只有符合筛选条件的数据才显示在视图/报表中。

## 用代码定义筛选条件
开发人员可以用代码设定每个列表视图或报表的[过滤条件(filters)](object_filter.md)，只有符合过滤条件的数据才会显示在列表中。

### 列表视图

```yaml
list_views:
  priority_high:
    label: 重要客户
    columns:
      - name
      - priority
      - owner
      - modified
    filters: [["priority", "=", "high"]]
    filter_fields: ["priority", "owner", "modified"]
    sort: [["modified", "asc"]]
```
其中filter_fields表示默认筛选条件字段，用户点开过滤器，默认就有这些默认的过滤字段，可快速设置过滤条件，显示出符合条件的数据。

### 报表

```yaml
_id : contracts-jsr
name: 年度合同统计
report_type: jsreport
object_name : contracts
data_source : odata
fields : 
  - amount
  - is_important
  - is_bidding
  - is_solid_investment
  - contract_type
  - contract_state
  - is_connected_transaction
filters: [["is_important", "=", true]]
filter_fields: [{
  field: "company_id",
  required: true
},{
  field: "signed_date",
  required: true
},{
  field: "amount"
},{
  field: "contract_type"
},{
  field: "contract_state"
}]
```
其中filter_fields表示默认筛选条件字段，用户点开过滤器，默认就有这些默认的过滤字段，可快速设置筛选条件，显示出符合条件的数据。

> 报表的filter_fields中可以额外指定某个条件是否必填，只有这些必填的字段都设置好筛选条件时才会显示数据。

## 在过滤器界面上定义临时筛选条件

业务人员也可以在前台界面，即对象列表视图或报表详细界面右侧过滤器中修改筛选条件。

![视图过滤器](/assets/listview_filters.jpg)

### 临时筛选条件
在过滤器界面上定义的筛选条件只作为当前用户设置的临时筛选条件，不影响其他用户显示数据的筛选规则，除非该筛选条件被保存到数据库中。

### 保存筛选条件
对视图或报表有修改权限的管理员可以把过滤器中设置的过滤条件保存到视图或报表中，类似于代码级的过滤条件，保存后的筛选条件将应用到所有用户查看数据的规则中。

![视图过滤器](/assets/listview_filters_save.jpg)

## 代码 & 过滤器界面中的筛选条件

- 用代码定义的筛选条件将作为基本筛选条件，应用到所有用户查看数据的规则中。
- 过滤器中定义的筛选条件，只作为当前用户设置的临时筛选条件，只影响当前用户查看数据。
- 过滤器中定义的筛选条件被保存到列表视图或报表后，也将作为基本筛选条件，应用到所有用户查看数据的规则中。
- 如果在对象列表视图或报表中已经用代码定义过筛选条件的话，则视图/报表中将取其与过滤器界面定义的临时筛选条件用AND逻辑与连接起来筛选数据。
- 如果在对象列表视图或报表中有在过滤器界面保存过的筛选条件，则视图/报表中将取其与过滤器界面定义的临时筛选条件用AND逻辑与连接起来筛选数据。