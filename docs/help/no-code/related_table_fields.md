---
title: 相关表字段类型
---

当我们需要描述两个对象之间的关联关系时，可以在其中一个对象中创建一个“相关表”字段来关联两个对象。比如每个“报价”记录都应该有对应的“所属客户”与之关联，此时我们可以在“报价”对象上创建一个“报价客户”字段跟“客户”对象关联起来。

![编辑相关表字段](/img/object_settings/编辑相关表字段.png)

- **引用对象：**该相关表字段要关联到的另一个对象，这里设置了“客户”表示通过该相关表字段把“报价”与“客户”两个对象关联起来。
- **过滤器函数：**默认情况下，用户在新建和编辑对象记录界面上填写相关表字段值时会列出相关表的所有记录供选择，可以在这里配置可选项范围，比如输入以下内容作为过滤器函数值可让用户在新建和编辑 “报价” 记录界面上填写“报价客户”字段值时只列出有效客户供选择。

``` js
function(){
    return ("state eq 'active'");
          }
```

关于该函数返回值，目前只推荐使用[oData过滤条件](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter)格式的字符串语法。

- **选择项函数：**与上述过滤器函数类似，你可以在这里描述用户在填写相关表字段值列出哪些选项供选择，比如输入以下内容作为选择项函数值可以实现上述过滤器函数中内容同样的效果。

``` js
var result = [];
var queryFilters = [["state", "=", "active"]];
var steedosFilters = require("@steedos/filters");
var odataFilter = steedosFilters.formatFiltersToODataQuery(queryFilters);
var options = {
  $select: 'name'
};
options.$filter = odataFilter;
var accounts = Creator.odata.query('accounts', options, true);
accounts.forEach(function (item) {
  result.push({
    label: item.name,
    value: item._id
  });
});
return result;
```

- **多选：**如果对象使用的是华炎魔方默认数据源，即使用的是mongodb数据库，那么可以勾选该属性来允许用户选择多个关联值，比如用户可以在新建或编辑某个“报价”记录界面上，选择多个“报价客户”来关联到该“报价”记录。

![报价客户](/img/object_settings/报价客户.png)
