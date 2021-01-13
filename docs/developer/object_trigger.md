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

### 文件内容说明

- `listenTo`: 对象名称，选填。如果没有定义此属性，则取文件名中第一个 `.` 之前的文字作为listenTo的值
- `beforeInsert`: 数据新增前执行, 选填
- `beforeUpdate`: 数据修改前执行, 选填
- `beforeDelete`: 数据删除前执行, 选填
- `beforeFind`  : 查询数据之前执行, 选填
- `afterInsert`: 数据新增后执行, 选填
- `afterUpdate`: 数据修改后执行, 选填
- `afterDelete`: 数据删除后执行, 选填

### 参数说明

所有脚本函数均为无参函数，所属数据可从`this`中获取，`this`结构如下

- `id`: 记录的唯一标识[string],
- `userId`: 当前用户唯一标识[string],
- `spaceId`: 当前工作区[string],
- `doc`: 需要新增/修改的记录内容[json],
- `previousDoc`: 修改/删除前的记录[json],  //仅afterUpdate, afterDelete时存在此属性
- `object_name`: 当前对象名称[string],
- `datasource_name`: 数据源名称[string],
- `getObject`: function(object_name: string)
- `query`: 查询数据相关参数[json], //仅beforeFind时存在此属性

### 脚本返回值

- 如果return的是false，则中断操作，如在before.insert里return false,则不执行insert操作。

### 触发器实例picklists.trigger.js

```javascript
const Filters = require('@steedos/filters');

module.exports = {

    listenTo: 'picklists',
    beforeFind: function(){
        let userId = this.userId;
        let spaceId = this.spaceId;
        if(userId && spaceId){
            //获取原始的查询条件
            let filters = this.query.filters; 
            //自定义生成用户权限查询条件
            const permissionsFilters = [ 
                    [ "owner", "=", userId],
                    "or", [ "submitter", "=", userId],
                    "or", [ "applicant", "=", userId]
                ];
            //修改查询条件; formatFiltersToODataQuery函数将数组形式的filters转换为字符串filters
            this.query.filters = `(${filters}) and (${Filters.formatFiltersToODataQuery(permissionsFilters)})` 
        }
    }

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

### 使用 DX 插件创建 Trigger 文件

- 1、打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择“Create Object trigger”

![subscription](/assets/dx/vs_extension/vs_extension09.png)

- 2、根据提示填写文件名称并回车

![subscription](/assets/dx/vs_extension/vs_extension10.png)

- 3、选择需要的trigger，可多选，点击“OK”

![subscription](/assets/dx/vs_extension/vs_extension11.png)

- 4、选择生成的目标目录，默认是“triggers”文件夹下，选择该目录并回车

![subscription](/assets/dx/vs_extension/vs_extension12.png)

- 5、生成trigger文件，内容如图

![subscription](/assets/dx/vs_extension/vs_extension13.png)
