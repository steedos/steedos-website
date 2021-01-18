---
title: 使用package路径安装
---

### 部署步骤

- 1、将打包好的.package文件放入steedos-packages文件夹

![subscription](/assets/developer/package/package01.png)

- 2、启动项目

```yml
yarn start
```

### 示例

- 未部署项目管理软件包时，此时应用里没有项目模块

![subscription](/assets/developer/package/package02.png)

- 将项目管理软件包project-management-app.package放入steedos-packages文件夹中，并重启项目

![subscription](/assets/developer/package/package03.png)

- 此时应用中已新增项目模块，部署成功

![subscription](/assets/developer/package/package04.png)
