---
title:  如何实现申请单的自动文件编号？
sidebar_label: 公文编号自动生成
hide_table_of_contents: true
--- 

以发文流程为典型，很多申请单都需要自动编号功能。

 ![流程编号](/assets/workflow/autonumber_1.png)

例如上图的发文单，就实现了依据表头字段、自动生成文件编号的功能。

其设置方法如下：

- 打开流程设计器，在需要自动生成编号的字段配置好的公式：auto_number({标头})。“标头”代表表单上标头字段，文件自动编号会根据不同的标头值来生成不同的文件编号。

![流程编号](/assets/workflow/autonumber_2.png)

![流程编号](/assets/workflow/autonumber_3.png)

- 进入“设置”，选择“流程编号”。

![流程编号](/assets/workflow/autonumber_4.png)

- 点击进入到编号设置规则界面后，点击“新建”来新建用户编号规则。

  - 名称：即表单标头字段的可取值。
  - 年份：文件编号中涉及到年份需设置好编号开始年份。
  - 起始序号：文件编号中文件的开始的编号。
  - 序号：文件当前在系统中待编号的序号。
  - 编号规则：需要配置好的公式会根据此规则格式来进行自动编号。

![流程编号](/assets/workflow/autonumber_5.png)

以上图为例子简要说明目前编号规则情况:

  - [{YYYY}]：代表自动生成的年份。即取值“年份”。
  - {NUMBER}：代表文件需要显示的编号，即取值“序号”。

编号规则：河北港口党办字[{YYYY}]{NUMBER}号，在表单上显示的标号样式为：河北港口党办字[2017]392号。

可参考 [审批王流程设计-流程编号设置](/docs/workflow/help/admin_flow#%E6%B5%81%E7%A8%8B%E7%BC%96%E5%8F%B7%E8%AE%BE%E7%BD%AE) 。