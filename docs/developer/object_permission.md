---
title: 对象权限
---

## 基本概念

### 对象权限

在以 .object.yml 结尾的[业务对象](object)描述文件中，可以为[权限组](/help/permission_set)对应的用户设定对象级别的权限。

```yml
permission_set:
  user:
    allowCreate: true
    allowRead: true
    allowEdit: true
    allowDelete: false
    modifyCompanyRecords: false
    viewCompanyRecords: false
    modifyAllRecords: false
    viewAllRecords: false
    disabled_list_views: []
    disabled_actions: []
    unreadable_fields: []
    uneditable_fields: []
    unrelated_objects: []
  admin:
    allowCreate: false
    allowRead: true
    allowEdit: true
    allowDelete: true
    modifyCompanyRecords: true
    viewCompanyRecords: true
    modifyAllRecords: true
    viewAllRecords: true
    disabled_list_views: []
    disabled_actions: []
    unreadable_fields: []
    uneditable_fields: []
    unrelated_objects: []
```

在上面的 yml 文件中，就给 user、admin 这两个权限组指定了对象权限。主要选项的意义如下：

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

用户可以创建记录。在列表视图的右上角，显示新建按钮。调用 API 接口创建记录时，服务端也会判断此权限。

> Steedos 为每个业务对象内置了 所有者(owner) 字段，默认值为记录的创建人。下面 3 个配置项，即为所有者权限。

### 允许查看 allowRead

用户可以查看所有者是自己的记录。

### 允许修改 allowEdit

用户可以查看、编辑所有者是自己的记录。

### 允许删除 allowDelete

用户可以查看、编辑并删除所有者是自己的记录。

> Steedos 为每个业务对象内置了 所属单位(company_ids) 字段，默认值为记录创建人的所属单位。下面 2 个配置项，即为单位级权限。

### 查看本单位 viewCompanyRecords

用户可以查看本单位的记录。

### 修改本单位 modifyCompanyRecords

用户可以查看并修改本单位的记录，也可以执行删除操作。

> 通过配置以下 2 个权限，授权用户查看/修改所有单位的业务记录，即为全局管理权限。

### 查看所有记录 viewAllRecords

用户可以查看对象中所有单位的所有记录。

### 修改所有记录 modifyAllRecords

用户可以查看并修改对象中所有单位的所有记录。

> 上述配置项最为常用。后面列出的配置项，可根据实际需要进行选配。

### 禁用对象列表视图 disabled_list_views

指定用户在界面上不显示的视图，如：

```yml
list_views:
  all:
    label: All
    filter_scope: space
    columns:
      - name
      - applicant
      - applicant_organization
      - modified
      - state
  inbox:
    label: Inbox
    filter_scope: space
    filters:
      - - inbox_users
        - =
        - "{userId}"
  outbox:
    label: Outbox
    filter_scope: space
    filters:
      - - outbox_users
        - =
        - "{userId}"
permission_set:
  user:
    disabled_list_views:
      - inbox
      - outbox
```

以上示例表示：普通用户只能看到 all 视图。

如果未配置，表示可以查看所有列表视图。此时界面上列表视图的显示顺序以业务对象中定义的顺序为准。

### 禁用对象操作 disabled_actions

设置对象记录禁止的操作，如：

```yml
actions:
  standard_query:
    label: Search
  standard_new:
    label: New
permission_set:
  user:
    disabled_actions:
      - standard_new
```

以上示例表示：普通用户不能进行标准新建操作。

### 不可见字段 unreadable_fields

设定记录查看界面，不显示的字段。

```yml
fields:
  name:
    label: Name
    type: text
  space:
    type: text
    label: Space
    reference_to: spaces
    hidden: true
    defaultValue: "{spaceId}"
permission_set:
  user:
    unreadable_fields: ["space"]
```

以上配置表示：普通用户在界面上看不到指定字段。

### 不可编辑字段 uneditable_fields

设定记录不可被编辑的字段。

```yml
fields:
  name:
    label: Name
    type: text
  space:
    type: text
    label: Space
    reference_to: spaces
    hidden: true
    defaultValue: "{spaceId}"
permission_set:
  user:
    uneditable_fields: ["space"]
```

以上配置表示：普通用户在界面上能看到指定字段，但是不可修改。

### 禁用关联对象 unrelated_objects

设定记录相关列表中，看不到的子表。

```yml
permission_set:
  user:
    unrelated_objects: ["{对象名}"]
```

以上配置表示：普通用户在记录相关列表中，看不到对应的子表。

## 对象权限的特例

在本系统中，几乎所有对象的权限控制，都由它自身的对象权限集来控制。只有唯一的一个特例，那就是“附件”。

附件都是作为其他对象的子对象存在的。这里，我们暂且称其他对象为“父对象”。在父对象记录显示时，相关附件的操作权限如下：

- 允许创建：对父对象 allowEdit 允许修改。
- 允许查看：对父对象 allowRead 允许查看，查看父对象下的所有附件。
- 允许修改：对父对象 allowEdit 允许修改，修改父对象下本人的附件。
- 允许删除：对父对象 allowEdit 允许修改，删除父对象下本人的附件。

> 管理员可删除所有附件。
