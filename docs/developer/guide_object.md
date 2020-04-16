---
title: 配置业务对象
---

模板项目内置了几个 [业务对象](object.md) 描述文件，以 .object.yml 结尾。

Steedos 的神奇之处正在于此，你只需要修改业务对象配置文件并重新启动服务，整个系统的功能都会自动随之变化。

如果你不需要相关的业务对象，直接删除即可。

## 创建业务对象：业务伙伴

在src项目源码中创建一个名为accounts.object.yml文件，开头配置以下内容：

```bash
name: accounts
lable: 业务伙伴
icon: accounts
```
## 添加字段：名称、电话、邮箱...

在accounts.object.yml中，继续配置相关字段:

```bash
fields:
  name:
    label: 名称
    type: text
    defaultValue: ''
    description: ''
    inlineHelpText: ''
    searchable: true
    required: true
    sortable: true
  credit_code:
    type: text
    label: 统一社会信用代码
    inlineHelpText: '系统按照此字段校验重复，避免重复录入单位信息。'
    required: true
  priority:
    label: 优先级
    type: select
    sortable: true
    options:
      - label: 高
        value: high
      - label: 中
        value: normal
      - label: 低
        value: low
    filterable: true
  registered_capital:
    type: currency
    label: 注册资金
    scale: 2
  website:
    type: url
    label: 网址
  phone:
    type: text
    label: 电话
    defaultValue: ''
  email:
    type: text
    label: 邮箱
  description:
    label: 备注
    type: textarea
    is_wide: true
    name: description
 ```

## 设置视图：所有业务伙伴

在accounts.object.yml中，继续配置业务对象的视图:

```bash
list_views:
  all:
    label: 所有业务伙伴
    columns:
      - name
      - priority
      - owner
      - modified
    filter_scope: space
```

## 定义权限：所有人都能增删改

在accounts.object.yml中，继续配置业务对象的权限集:

```bash
permission_set:
	user:
		allowCreate: true
		allowDelete: true
		allowEdit: true
		allowRead: true
		modifyAllRecords: true
		viewAllRecords: true
```

## 修改应用：增加业务伙伴

修改src下的oa.app.yml，增加：业务伙伴 accounts

```bash
objects: 
  - instances
  - accounts
  - cms_posts
  - announcements
  - space_users
  - tasks
  - events
```

## 运行并查看效果

![业务伙伴](/assets/guide_3.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程2、配置业务对象](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson2) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson2
yarn
```

### 启动教程2项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程2项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程2项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
