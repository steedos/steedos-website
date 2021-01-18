---
title: 主表/子表字段类型
---

在相关表字段的基础上，我们可以通过创建一个“主表/子表”字段来描述两个对象间的主从关系，需要注意的是应该把“主表/子表”字段添加到“子表”对象侧，来表示“子表”对象是通过这个字段来关联其“主表”的，而不是把“主表/子表”字段添加到“主表”对象侧。比如  “报价行条目”  都应该有对应的  “报价”  与之关联，此时我们可以在 ”报价行条目“ 对象上建立一个 “报价名称” 字段，类型为主表/子表跟 “报价” 对象关联起来。

**区别：**设置为主表/子表类型的字段可以在主表的“相关子表”里设置关联子表显示的列。

![编辑主表子表字段](/img/object_settings/编辑主表子表字段.png)

设置该对象相关子表：

![相关子表](/img/object_settings/相关子表.png)

- **引用对象：**该相关表字段要关联到的另一个对象，这里设置了“客户”表示通过该相关表字段把“报价”与“客户”两个对象关联起来。
- **过滤器函数：**默认情况下，用户在新建和编辑对象记录界面上填写相关表字段值时会列出相关表的所有记录供选择，可以在这里配置可选项范围，比如输入以下内容作为过滤器函数值可让用户在新建和编辑 “报价” 记录界面上填写“报价客户”字段值时只列出有效客户供选择。

``` js
function(){
  return ("state eq 'active'");
}
```

关于该函数返回值，目前只推荐使用[oData过滤函数](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter)格式的字符串语法。

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
