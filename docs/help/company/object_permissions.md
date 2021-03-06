---
title: 对象权限
---

对象的操作权限包括查看、创建、编辑、删除。举例来说，当用户点击“删除”按钮时，系统会校验用户所属简档和权限集下的所有对象权限的设置：如果对当前对象有“删除”的操作权限，则可以进行下一步操作；反之则不能继续操作。

### 哪里可以设置对象权限？

在简档和权限集里，都可以设置对象权限。
在权限集里，点击某权限集名称、进入详情页，在对象权限一栏，点击具体对象后面的下拉框即可进行权限设置。对简档进行设置，也是同样的方式。

### 如何创建对象权限？

在简档和权限集，点击显示名称进入详情页，在对象权限右上角可以看到新建按钮，点击即可进行创建。
在权限集输入框选择将要授权的权限集，选择将要授权的对象，设定某类用户对特定对象的所拥有的操作权限。

![创建对象权限](/img/authority_management/创建对象权限.png)

- **允许查看**
      勾选后，supplier可以查看合同对象相关信息。
- **允许创建**
      勾选后，supplier有权限在合同对象里面创建一条合同记录。
- **允许编辑**
      勾选后，supplier有权限对合同信息进行编辑。
- **允许删除**
      勾选后，supplier有删除合同对象的权限。
- **查看所有记录**
      勾选后，supplier可以查看所有的合同记录，通常可以为管理员配置此权限。
- **修改所有记录**
      勾选后，supplier可以修改所有的合同记录，通常可以为管理员配置此权限。
- **查看本分部**
      勾选后，supplier只能查看所属分部的合同记录，普通用户通常设置为此权限。
- **修改本分部**
      勾选后，supplier只能修改本分部的合同记录，普通用户通常设置为此权限。

以上各对象权限选项的意义也可以参考此图。
![对象权限](/img/authority_management/对象权限.png)

- **禁用列表视图**
      启用后，将不能看到对象的这些列表视图。例如，普通用户可以禁用“所有记录”这一项，而只展示“我的记录”这一项列表视图。
- **禁用操作**
      启用后，将不显示对象的操作按钮，也就不可以进行这些操作。例如，可以对普通用户禁用“发起审批”操作。
- **不可见字段**
      用于隐藏对象的某些敏感字段。比如，对普通用户隐藏合同对象的“合同金额”字段后，这些用户访问合同记录时，将不会显示“合同金额”字段。
- **不可编辑字段**
      对某个字段启用了不可编辑后，即不能对该字段进行编辑修改。比如对合同对象设置了不能编辑“名称”字段后，用户就不能修改合同的“名称”了。
- **禁用关联对象**
      启用后，相关联的对象将不会被启用。比如可以禁用合同里面的付款或者附件对象。

### 权限叠加规则

虽然每个用户只属于一个简档，但是可能同时属于多个权限集，当一个用户属于多个权限集时，实际拥有的权限为各权限集权限的叠加。权限叠加规则请参考下图。
![权限叠加规则](/img/authority_management/权限叠加规则.png)

### 如何撤销用户权限

如果要撤销某个用户的权限，一般有两种方式：一是在简档或是权限集里面，把对象权限的范围缩小，比如不允许创建、不允许编辑或删除等，但这样做，同时也缩小了属于此简档的其他用户的权限。第二种是把这个用户移出权限集，再重新为他配置特定的权限集权限。
