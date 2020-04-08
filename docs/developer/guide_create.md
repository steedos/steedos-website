---
title: 创建项目
---

## 创建Steedos项目

创建Steedos项目前，请[安装开发环境](https://developer.steedos.com/developer/install)

创建一个名为test的空项目

```bash
npx steedos create test
```

## 安装依赖包

```bash
cd test
yarn
```

## 运行空项目
终端执行以下代码：
```bash
yarn start
```
## 文件夹结构
项目创建后，您的项目文件夹内容如图如下：

![文件夹结构](/assets/文件夹结构1.png)

其中

- src: 项目源码
- [steedos-config.yml](steedos_config.md): 项目配置文件，可以配置数据源、插件等参数。
- package.json: 主要用于配置本项目以来的npm包。

## 注册一个新账户

使用浏览器访问地址 [http://127.0.0.1:5000/](http://127.0.0.1:5000/) ，即可访问用户界面。
第一次使用时，数据库为空。点击“注册”，用邮箱注册一个新账户。
![注册](/assets/注册.png)

## 创建一个企业

首次登入系统后，输入企业名称，即可完成企业的创建。
![创建企业](/assets/注册2.png)

## 浏览系统主页面

![PC界面展示](/assets/主页面.png)

![移动端界面展示](/assets/guide_2.png)



