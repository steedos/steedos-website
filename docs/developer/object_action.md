---
title: 操作按钮
---

系统内置三个基本操作：新增(`standard_new`)、修改(`standard_edit`)、删除(`standard_delete`)。

在此基础上，用户可以自定义按钮，并编写javascript脚本执行想要的操作。
### 声明对象的操作按钮
`xxx.object.yml`
- label: 按钮显示标签
- on: 显示位置 
  - "list" 为列表定义action，只显示在列表右上角
  - "record" 为记录定义action，显示在记录查看页右上角，以及列表视图中每项的下拉菜单中
  - "record_more" 为记录定义action，显示在记录查看页右上角的“更多”下拉菜单中，以及列表视图中每项的下拉菜单中
  - "list_item" 为记录定义action，只显示在列表视图中每项的下拉菜单中
  - "record_only" 为记录定义action，只显示在记录查看页右上角
- sort: 排序号，显示时，按照从小到达顺序排列。编辑action的sort默认为0

### 声明操作按钮的动作
`xxx.action.js`
- listenTo: 对象名称，选填。如果没有定义此属性，则取文件名中第一个 `.` 之前的文字作为listenTo的值
- [操作按钮名称]: Function(object_name, record_id), 按钮点击后要执行的javascript脚本
  - 参数
    - object_name: 对象名称
    - record_id: 记录唯一标识
  - this
    - object_name: 对象名称
    - record_id: 记录唯一标识, 仅`on`为`record`、`record_more`、`record_only`时存在
    - object: 对象
    - action: 操作
    - record: 当前记录, 仅`on`为`record`、`record_more`、`record_only`时存在
- [操作按钮名称]Visible: Function(object_name, record_id, record_permissions) | boolean, 用户控制按钮是否显示
  - 返回值： boolean;
  - 参数
    - object_name: 对象名称
    - record_id: 记录唯一标识
    - record_permissions: 记录权限

### 使用代码编写操作按钮实例
`test.object.yml`
```yml
...
actions:
  openWindow:
    label: 打开网站
    on: list
  standard_new:
    visible: false //禁用新增
```

`test.action.js`
```javascript
module.exports = {
  openWindow: function(){
    window.open('https://www.steedos.com');
  },

  openWindowVisible: function(){
    //... 控制此action是否显示
    return true
  }
}
```