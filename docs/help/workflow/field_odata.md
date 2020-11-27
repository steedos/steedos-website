---
title: odata字段
hide_table_of_contents: true
---

选择类型字段，除了设置默认值选项的下拉框外，还有odata字段：可通过API配置系统中的其他数据源，或外部数据库、其他业务系统接口，并填写字段名、可搜索字段、公式这4个字段属性可预置选择项，再根据实际应用，增加过滤条件。

以‘XX公司单车核算明细表’为例，现有车牌号台账，为queue_import数据导入，使用部门为“信息管理部”的车牌号如下图所示：

![odata](/assets/workflow/odata_2.png)

odata字段“车牌号码”，配置 [过滤条件-函数支持] (#函数支持) 实例，根据申请人分部带出对应车牌号。

![odata](/assets/workflow/odata_1.png)

可参照下图，进行配置：

- “设置-流程设置-流程”，点击流程名“XX单车核算明细表”进入流程详细页，点击右上角按钮“表单设计器”，打开新版表单设计器编辑表单。
- 点击右侧新建Odata字段，勾选必填，并输入必填属性：字段名、Odata API、可搜索字段、公式等。

## 字段属性

![odata属性](/assets/workflow/odata.png)

- 必填：必填打勾后，提交的申请单不允许为空，表单上以红色“*”标记。若不打勾，则在提交申请单时可以为空。
- 字段名：**必填项**，实际存放在数据库中的名字，此名字在同一张申请单中不可重复，示例：number_plate_id。**注：字段名必须为下拉数据的id。**
- 显示名称：审批单中实际显示的名字，同一张申请单中可重复，默认的显示名和字段名相同，用户也可自行修改。
- 描述：申请单上鼠标放在该字段上面，显示的说明文字。
- Odata API：**必填项**，申请单中该字段选项值保存所在位置，即下拉数据的URL地址，示例：`http://sh.steedos.com.cn:3057/creator/api/odata/v4/jYgTB7xC3ScqmXYdW/number_plate`。

![odata属性](/assets/workflow/odata_3.png)

- 详细页面URL：必须包含{_id}标识，示例：`http://cn.steedos.com/app/-/contracts/view/{_id}`。
- 过滤条件：按需可配置某个属性的条件，支持js脚本，示例：state eq '启用'。
- 可搜索字段：**必填项**，配置下拉数据相关属性值，示例：company。
- 宽字段：打勾后，字段显示宽度跨两列，不打勾，字段显示宽度只有一列。
- 列表显示：打勾后，在任何地方，进入高级搜索界面后，选择该字段所在的流程，会在列表显示的时候就会多一列显示此字段的内容。
- 多选：打勾后，该字段可以选择多个下拉选项。
- 公式：**必填项**，配置下拉数据的显示名，示例：{number_plate_id.name}。

## 过滤条件

OData支持一组内置过滤器操作，比如：

### 运算符

- "eq": 等于，state eq '启用'，即显示状态等于启用的数据。
- "gt": 大于，amount gt 10000，即显示金额大于1万的数据。
- "in": 属于，in array，即属于数组。

### 组合过滤

- "and": 逻辑与，state eq '启用' and amount gt 10000，即显示状态等于启用同时金额也要大于1万的数据。
- "or": 逻辑或，amount lt 1000 or amount gt 10000，即显示金额小于1千或者金额大于1万的数据。

### 函数支持

支持js脚本，实例：
```yml
function () {
    var ins = WorkflowManager.getInstance();
    if (ins && ins.applicant_company) {
        return `(company eq '${ins.applicant_company}') and (state eq '启用')`
    }
}
```

> 详细运算符的使用可参考 [odata $filter](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_BuiltinFilterOperations) 官方网站。
