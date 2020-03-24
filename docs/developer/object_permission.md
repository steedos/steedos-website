---
title: 对象权限
---

## 基本概念

### 对象权限

在以 .object.yml 结尾的[业务对象](object)描述文件中，可以为[权限组](platform/permission_set)对应的用户设定对象级别的权限。

```yml
permission_set:
  user:
    allowCreate: true
    allowRead: true
    allowEdit: true
    allowDelete: false
  admin:
    allowCreate: false
    allowRead: true
    allowEdit: true
    allowDelete: true
    modifyCompanyRecords: true
    viewCompanyRecords: true 
    modifyAllRecords: true
    viewAllRecords: true 
```

在上面的yml文件中，就给user、admin这两个权限组指定了对象权限。主要选项的意义如下：

![权限设置](/assets/platform/permisson_options.png)

配置后，系统前台显示这一业务对象的列表视图时，会根据用户所属权限组找到对象权限集，并依此显示全部或部分记录、显示/隐藏部分操作按钮。显示对象记录详情时，也是如此。

![权限设置](/assets/platform/permisson_display.png)

某个权限组对于某个对象的对象权限的概念，可参考如下的示意图。

![权限设置](/assets/platform/permisson_set.png)

### 对象权限叠加

当一个用户属于多个权限组时，实际拥有的权限为各权限组权限的叠加。

![权限设置](/assets/platform/permisson_multiple.png)

### 对象权限扩展

拥有某些权限后，可能会默认自动拥有别的一些权限，具体如下表：

![权限设置](/assets/platform/permisson_extend.png)

上图中的每一行表示一种情况：如果拥有红勾的权限，则自动拥有了灰勾的权限。以第一行为例，如果允许创建（allowCreate），则自动允许查看自己的记录（allowRead）。这样的设置就更精简 。

## 对象权限的配置

### 权限组 permission_set

对应的权限组。

### 允许创建 allowCreate

用户可以创建记录。在列表视图的右上角，显示新建按钮。调用API接口创建记录时，服务端也会判断此权限。

> Steedos 为每个业务对象内置了 所有者(owner) 字段，默认值为记录的创建人。下面3个配置项，即为所有者权限。

### 允许查看 allowRead

用户可以查看所有者是自己的记录。

### 允许修改 allowEdit

用户可以查看、编辑所有者是自己的记录。

### 允许删除 allowDelete

用户可以查看、编辑并删除所有者是自己的记录。

> Steedos 为每个业务对象内置了 所属单位(company_ids) 字段，默认值为记录创建人的所属单位。下面2个配置项，即为单位级权限。

### 查看本单位 viewCompanyRecords

用户可以查看本单位的记录。

### 修改本单位 modifyCompanyRecords

用户可以查看并修改本单位的记录，也可以执行删除操作。

> 通过配置以下2个权限，授权用户查看/修改所有单位的业务记录，即为全局管理权限。

### 查看所有记录 viewAllRecords

用户可以查看对象中所有单位的所有记录。

### 修改所有记录 modifyAllRecords

用户可以查看并修改对象中所有单位的所有记录。

> 上述配置项最为常用。后面列出的配置项，可根据实际需要进行选配。

### 可见字段 fields

指定用户在界面上可以查看的字段。

值为字段名数组。数组中字段的先后顺序也是查看界面上字段显示的先后顺序。

```yml
permission_set:
  user:
    fields:
      - field: amount
        readable: true
        editable: true
      - field: company_id
        readable: false
        editable: true
```

### 可见列表视图 listViews

设定用户可以查看的[列表视图](./listview.md)。

值为列表视图名数组。数组中的顺序，就是界面上显示的列表视图可选项顺序。其中第一个为默认列表视图。

```yml
permission_set:
  user:
    listViews:
      - all
      - mine
      - recent
```

如果未配置，表示可以查看所有列表视图。此时界面上列表视图的显示顺序以业务对象中定义的顺序为准。

### 可见相关对象 relatedList

设定记录查看界面，用户可以查看到的相关记录列表。

值为对象名数组，数组中的对象名先后顺序，就是用户界面上相关记录显示的先后顺序。

```yml
permission_set:
  user:
    relatedList: ['files', 'tasks', 'payments']
```

以上配置表示：普通用户在查看记录时，可以查看到相关的 文件(files)、任务(tasks)、付款(payments) 记录。

### 可见操作按钮 actions

设定记录查看界面，用户可以查看到的 [操作按钮](./object_action.md)。

值为操作按钮名，数组中的操作按钮先后顺序，就是用户界面上操作按钮显示的先后顺序。

```yml
permission_set:
  user:
    actions: ['standard_edit', 'upgrade']
```

以上配置表示：普通用户在查看记录时，可以查看到标准的编辑(standard_edit)按钮和自定义的升级(updade)按钮。

如果未配置，表示可以查看所有操作按钮。此时界面上操作按钮的显示顺序以业务对象中定义的顺序为准。

## 对象权限的特例

在本系统中，几乎所有对象的权限控制，都由它自身的对象权限集来控制。只有唯一的一个特例，那就是“附件”。

附件都是作为其他对象的子对象存在的。这里，我们暂且称其他对象为“父对象”。在父对象记录显示时，相关附件的操作权限如下：

- 允许创建：对父对象 allowEdit 允许修改。
- 允许查看：对父对象 allowRead 允许查看，查看父对象下的所有附件。
- 允许修改：对父对象 allowEdit 允许修改，修改父对象下本人的附件。
- 允许删除：对父对象 allowEdit 允许修改，删除父对象下本人的附件。

> 管理员可删除所有附件。