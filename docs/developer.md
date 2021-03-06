---
title: 华炎魔方开发人员
sidebar_label: 概览
hide_table_of_contents: true
---

华炎魔方是[开源低代码开发工具](https://github.com/steedos/steedos-platform)，基于NodeJS开发，使用yml文件定义[业务对象](/developer/object/)，使用 javascript 语法编写前端和后端业务逻辑脚本。系统内核（业务对象管理、账户管理、权限管理、流程引擎、报表引擎）需运行于 MongoDB 数据库，开发人员可以定义[第三方数据源](/developer/datasource/)，连接SQL Server、Oracle等现有的业务系统数据库。

import Video from '@site/src/components/Video';

<div class="my-8 relative mx-auto w-full rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:shadow-outline lg:max-w-md">
    <Video
        poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.jpg"
        autoplay={false}
        urls={[
            {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features.mp4"},
            {name:"标清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"},
        ]}/>
</div>

## 开发流程

### 1、[开发前准备](/developer/install/summary)

### 2、[创建一个新项目](/developer/create_project/index)

### 3、可视化建模

- [注册开发者用户](/developer/register/index)
- [自定义对象](/help/no-code/create_object)

### 4、同步元数据

- [安装 VS Code插件](/developer/dx/dx_vscode_install)
- [设置环境变量](/developer/dx/dx_vscode_config)
- [使用 VS Code 插件同步](/developer/dx/dx_vscode_synchronize)

### 5、代码开发

### 6、项目打包

- [可视化打包](/developer/package/package_visualization)
- [使用 steedos cli 命令打包](/developer/package/package_cli)

<!-- 本教程以合同管理为例，指导你如何使用华炎魔方创建项目，配置业务对象，编程脚本，处理业务部门的各种个性化需求。您开发的新业务系统可以部署在本地运行。

#### [准备：安装开发环境](/developer/deploy)

#### [教程1：创建项目](/developer/guide_create)

- 创建steedos项目
- 安装依赖包
- 运行空项目
- 文件夹结构
- 注册新账户
- 创建企业/工作区
- 系统主页面

#### [教程2：配置业务对象](/developer/guide_object)

- 创建业务对象：合同
- 添加字段
- 设置视图：所有合同
- 新增视图：我的合同
- 定义权限：普通用户只能查看自己的合同，合同管理员和系统管理员可以查看所有合同
- 修改应用：增加合同
- 重启服务运行并查看效果

#### [教程3：业务对象关联](/developer/guide_relationship)

- 创建业务对象：付款计划
- 添加字段
- 业务对象关联字段
- 配置默认视图和权限
- 修改默认应用：去掉合同
- 新建自定义应用：合同，配置相关的业务对象
- 重启服务运行并查看效果

#### [教程4：配置触发器](/developer/guide_trigger)

- 修改业务对象的字段
- 创建触发器
- 编写触发的执行代码：自动更新待收金额

#### [教程5：自定义操作按钮](/developer/guide_button)
- 创建自定义操作按钮
- 编写按钮的执行代码：发送邮件
- 重启服务运行并查看效果

#### [教程6：设置报表](/developer/guide_report)
- 修改合同应用：增加报表reports
- 重启服务运行并查看效果
- 定义矩阵型报表：合同年度统计

#### [教程7：设置合同审批流程](/developer/guide_flow)
- 配置表单
- 配置流程
- 配置权限
- 运行合同审批流程

#### [教程8：合同审批自动进入合同台账](/developer/guide_sync)
- 修改表单，读取合作伙伴数据
- 修改系统配置，设置同步频率
- 修改应用，打开合同的配置对象流程开关
- 重启服务
- 配置对象流程
- 运行合同审批流程，确认同步情况

#### [教程9：多分部权限控制](/developer/guide_companies)
- 修改合作伙伴，启用分部字段
- 修改合作伙伴，修改权限控制
- 修改合同，启用分部字段
- 修改合同，修改权限控制
- 重启服务
- 配置分部权限对应人员
- 确认多分部权限控制效果

#### [教程10：第三方系统接口集成](/developer/guide_nc)
- 增加申请付款按钮
- 增加申请付款的执行
- 增加调用接口的具体执行
- 查看接口的实际运行效果 -->
