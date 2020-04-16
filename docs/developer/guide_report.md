---
title: 设置报表
---

系统内置功能强大的报表统计与分析功能。通过简单设定，即可配置出功能强大的统计报表。

## 修改合同应用：增加报表reports

修改src\contracts下的contract.app.yml,增加：系统内置的业务对象 reports

```bash
_id: contracts
name: 合同
description: 合同、业务伙伴。
icon_slds: approval
is_creator: true
sort: 200
objects: 
  - contracts
  - accounts
  - reports
mobile_objects:
  - contracts
  - accounts
  - reports
```

## 重启服务运行并查看效果

重启服务运行，待进入系统后，点击“报表”进入到系统报表界面。用户可以看到自己有权限的报表，同时也可以创建自己的数据报表。

![报表](/assets/report1.png)

## 定义矩阵型报表：合同年度统计

我们试着定义一个矩阵类型报表，基于合同记录，按不同的合同类型统计每一年的合同总金额。

![报表](/assets/report2.png)

### 报表设置相关字段

- 报表名称：自定义报表的名称；
- 报表类型：分为列表（表格）、分组报表（摘要）、二维表（矩阵），可根据用户的实际使用需求选择对应的报表类型；
- 对象名：报表统计的主对象；
- 字段：在报表中需要使用的字段；
- 行：行字段，可以为多个，报表中点击左侧行标题可以逐层展开
- 列：列字段，可以为多个，报表中点击上面的列标题可以逐层展开
- 统计字段：选中的字段显示在中间统计区域中
- 默认过滤字段：显示报表时，在过滤器里默认显示的过滤字段；
- 显示图表：在报表顶部用图形化方式显示统计数据；
- 显示总计：显示统计数据的总数（包含计数)；
- 显示记录数：显示统计数据的个数。

## 查看报表执行效果

![报表](/assets/report3.png)

### 报表筛选机制

运行报表时，还可以启用筛选器。

![报表](/assets/report4.png)

输入筛选条件后，可查看基于筛选后的数据的统计报表。

![报表](/assets/report5.png)

## 教程源码及下载运行

本教程的系列代码在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 项目下，我们已将代码开源，供您下载运行，及做参考。本教程为 [教程6、设置报表](https://github.com/steedos/steedos-lesson-contracts/tree/master/lesson6) 。

### 下载源码

请在 [steedos-lesson-contracts](https://github.com/steedos/steedos-lesson-contracts) 页面，点击“Clone or download”，并选择“Open in Desktop”，即可在GitHub Desktop中clone这个项目到本地文件夹。

![clone源码](/assets/clone.png)

如之前已下载此项目源码，无须再次下载。

### 安装依赖包
源码clone到本地文件夹后，在终端执行以下代码：
```bash
# 进入实际的本地文件夹
cd d:\github\steedos-lesson-contracts
cd lesson6
yarn
```

### 启动教程6项目
yarn完成后，继续执行：
```bash
yarn start
```

### 使用教程6项目

在浏览器中，访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问本项目的前台页面。

### 停止教程6项目
如果要停止项目，在终端上同时按住键盘上的Ctrl + C，
```bash
终止批处理操作吗(Y/N)? y
```
输入y即停止服务。
