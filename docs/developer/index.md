---
title: 华炎开发平台
sidebar_label: 简介
---

> 华炎开发平台 (Steedos App Engine) 是新一代人工智能开发工具，开发人员只需描述业务需求，聪明的华炎就能理解并运行你的业务。

## 系统架构

以合同管理需求为例，开发人员只需要配置下图 <span style={{color:'green'}}>绿色</span> 部分的业务对象，华炎开发平台即可生成一套全功能的合同管理系统。

![合同管理案例](/assets/platform/engine-overview.png)

## 描述业务对象

华炎开发平台通过业务对象配置文件描述业务需求。包括

- 业务对象名称
- 功能开关
- 字段
- 列表视图
- 用户权限

```yaml
name: accounts
label: 单位
icon: person_account
description: 统一保存客户、合作伙伴、供应商数据
enable_files: true
enable_search: true
enable_tasks: true
enable_notes: false
enable_api: true
enable_share: true
enable_chatter: true
fields:
  name: 
    type: text
    label: 标题 
  priority:
    type: text
    label: 优先级
    options:
      - label: 高
        value: high
      - label: 中
        value: normal
      - label: 低
        value: low
  owner:
    label: 所有人
    type: lookup
    reference_to: users
list_views:
  recent:
    label: 最近查看
  all:
    label: 所有单位
    columns:
      - name
      - priority
      - owner
      - modified
    filter_fields:
      - priority
  high_priority:
    label: 重点关注
    filters: [["priority", "=", "high"]]
permission_set:
  user:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: false
    viewAllRecords: false
  admin:
    allowCreate: true
    allowDelete: true
    allowEdit: true
    allowRead: true
    modifyAllRecords: true
    viewAllRecords: true
```

## 自动生成应用系统

只需这样简单定义了你的业务需求，华炎开发平台就可以为你生成功能完整的业务管理系统。以下为界面效果图：

![对象显示效果](/assets/object_guide.png#bordered)

自动生成的系统功能一览：

- 数据查询
- 数据增删改
- 流程审批
- 权限管控
- 统计报表
- 通知消息
- 上传附件
- 安排任务
- 添加到日历
- 字段修改历史
- 数据导入导出
- API 接口

对于高级的定制需求，你还可以编写自定义代码：

- 触发器
- 操作按钮
- 表单事件
- 服务端API
- 客户端插件
