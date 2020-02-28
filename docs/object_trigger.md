---
title: 触发器
---

对于记录的增删改操作，可设定自动执行的脚本。同一个事件可以定义多个trigger。

文件名称以.trigger.js结尾

触发器模板：

```javascript
module.exports = {
    listenTo: '对象名称',
    beforeInsert: [async] Function,
    beforeUpdate: [async] Function,
    beforeDelete: [async] Function,
    afterInsert: [async] Function,
    afterUpdate: [async] Function,
    afterDelete: [async] Function,
}
```

文件内容说明：

- `listenTo`: 对象名称，必填
- `beforeInsert`: 数据新增前执行, 选填
- `beforeUpdate`: 数据修改前执行, 选填
- `beforeDelete`: 数据删除前执行, 选填
- `afterInsert`: 数据新增后执行, 选填
- `afterUpdate`: 数据修改后执行, 选填
- `afterDelete`: 数据删除后执行, 选填

参数说明：
所有脚本函数均为无参函数，所属数据可从`this`中获取，`this`结构如下

- id?: 记录的唯一标识[string],
- userId?: 当前用户唯一标识[string],
- doc?: 需要新增/修改的记录内容[json],
- previousDoc?: 修改/删除前的记录[json],  //仅afterUpdate, afterDelete时存在此属性
- object_name: 当前对象名称[string],
- datasource_name: 数据源名称[string],
- getObject: function(object_name: string)

脚本返回值：
- 如果return的是false，则中断操作，如在before.insert里return false,则不执行insert操作。

例如，文件名称picklists.trigger.js

```javascript
module.exports = {

    listenTo: 'picklists',

    beforeInsert: async function () {
        var doc = this.doc
        if (doc.code) {
            let count = await this.getObject('picklists').count({ filters: [['space', '=', doc.space], ['code', '=', doc.code]] })
            if (count > 0) {
                throw new Error("唯一编码不能重复");
            }
        }
    },
    beforeUpdate: async function () {
        var doc = this.doc
        var id = this.id
        if (_.has(doc, 'code')) {
            let dbDoc = await this.getObject('picklists').findOne(id, { fields: { space: 1 } });
            if (dbDoc) {
                let count = await this.getObject('picklists').count({ filters: [['_id', '<>', id], ['space', '=', dbDoc.space], ['code', '=', doc.code]] })
                if (count > 0) {
                    throw new Error("唯一编码不能重复");
                }
            }
        }
    }
}
```