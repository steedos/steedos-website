---
title: 项目转化
---

## 旧项目转换成新格式

### source:convert

将旧文件格式转化并本地生成metadata要求的新格式yml文件

该命令包含两个参数：

- 【-o | oldProjetcPath】需要转化的旧文件路径
- 【-t | targetPath】新格式文件生成的路径，可选，默认生成位置与需要转化的旧文件路径【src】同级

示例如下：

```yml
steedos source:convert -o C:\GitHub\steedos-app-contract\src -t C:\GitHub\steedos-app-contract
```

如下图所示，转换前现有项目的结构是：

![subscription](/assets/dx/convert_project/convert_project01.png)

转换成新格式的项目目录结构图：

![subscription](/assets/dx/convert_project/convert_project02.png)

其中，steedos-app 为生成的新格式元数据所在的目录，位置为命令中【-t】所指的路径，若未指定，默认与需要转化的旧文件路径【src】同级。

转换成功后，会输出“已转化文件清单”和“未转换文件清单"

![subscription](/assets/dx/convert_project/convert_project03.png)
