---
title: 工作流
sidebar_label: 概述
---

## 什么是工作流

工作流可让您自动化标准内部过程和进程，以在贵组织范围内节省时间。工作流规则是一组工作流指示的主要容器。这些指示始终可以用“如果/则”语句概括。

例如：如果下雨，请带雨伞。

工作流规则可以分为两个主要组成部分。

- 条件：“如果/则”语句的“如果”部分。换言之，记录内容必须为真，才能让工作流规则执行关联操作。
- 操作：“如果/则”语句的“则”部分。换言之，在记录满足条件时执行的操作。

在下雨示例中，条件是“如果下雨”，则操作是“带雨伞”。如果条件未满足（未下雨），则不会执行操作（无需带雨伞）。

在记录满足工作流规则的所有条件时，则将会执行规则的操作，请参考[执行自动操作](/help/auto_actions/summary)来了解华炎魔方目前支持的操作。

![工作流规则](/assets/help/auto_workflow/工作流规则.png)

## 工作流注意事项

- 每个工作流规则适用于单个对象。
- 删除自定义对象时，将同时删除自定义对象上的工作流规则（暂时未实现）。
- 并不保证单个操作和操作类型执行的顺序。首先，执行字段更新操作，然后是其他操作。
- 在新建或编辑对象时，会先执行该对象的验证规则，再执行该对象的工作流规则，但是就目前来说，工作流规则中的操作，比如字段更新并不会再次触发验证规则。

## 何时触发工作流规则

- 保存记录或创建记录时都可以触发工作流规则，这取决于您的规则条件。在保存记录后创建的规则不会追溯地影响这些记录。
- 修改或创建记录可能会触发多个规则。
- 工作流规则自动触发且用户不可见。

## 工作流术语

当描述工作流特性和功能时，使用了以下术语。

**工作流规则**
满足其指定的条件时，工作流规则将使工作流开始操作。您可以配置工作流操作，使其在某记录符合工作流规则中的条件时立即执行，或设置时间触发器，使其在特定日执行工作流操作。

**工作流操作**
工作流操作是在满足工作流规则条件时触发的相关操作，华炎魔方暂时只支持字段更新这一种操作，未来可能会扩展更多操作类型，比如发送出站消息或电子邮件等。

**字段更新**
字段更新是使用新值自动更新字段的操作。

**出站消息**
出站消息会将信息发送到指定端点，例如外部服务。

:::note 提示

华炎魔方暂时未支持基于时间的工作流规则。

:::
