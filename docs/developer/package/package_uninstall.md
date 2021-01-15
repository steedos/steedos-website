---
title: 软件包卸载
sidebar_label: 卸载
---

### 卸载步骤

- 1、在steedos-packages文件夹中，删除.package文件以及其编译生成的同名文件夹即可完成卸载

![subscription](/assets/developer/package/package05.png)

- 2、重启项目

```yml
yarn start
```

### 示例

- 未卸载项目管理软件包时，应用中有项目模块

![subscription](/assets/developer/package/package04.png)

- 在steedos-packages文件夹中，删除project-management-app.package文件以及project-management-app文件夹，并重启项目

![subscription](/assets/developer/package/package06.png)

- 应用中没有了项目模块，卸载成功

![subscription](/assets/developer/package/package03.png)
