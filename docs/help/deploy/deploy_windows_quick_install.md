---
title: Windows 快速安装
---

## 支持平台

项目支持在以下 64 位操作系统中运行：

- Windows Server 2019
- Windows 10 / Windows Server 2016
- Windows 8.1 / Windows Server 2012 R2
- Windows 8 / Windows Server 2012
- Windows 7 / Windows Server 2008 R2

## 下载

点击下载执行程序压缩包 [steedos-v1.23-win-x64.zip](https://www-steedos-com.oss-cn-beijing.aliyuncs.com/steedos/platform/steedos-v1.23-win-x64.zip)

**解压后目录主要结构为：**

![目录结构](/assets/windows/windows01.png)

- `bin` 存放系统依赖的执行程序；
- `db` 存放数据库数据；
- `node_modules` 存放系统运行所需二进制包；
- `public` 公共类；
- `steedos-app` 应用层；
- `steedos-packages` 存放安装的应用，如`steedos-app-crm.package`等`.package`后缀的文件；
- `storage` 存放系统中上传的文件；
- `.env` 是系统的配置文件可在此文件中配置端口、访问地址等；
- `.gitignore` git忽略文件；
- `.npmignore` npm忽略文件；
- `1-启动数据库.bat` 用于启动数据库服务；
- `2-启动华炎魔方.bat` 用于启动华炎魔方服务；
- `package.json` 服务配置；
- `README.md` 备注；
- `server.js` 服务脚本；
- `steedos-config.yml` 配合.env 文件使用的配置文件；
- `yarn.lock` yarn临时文件；

## 启动数据库

先双击运行 `1-启动数据库.bat`保持窗口打开，看到下图信息表示启动成功：

![数据库启动](/assets/windows/数据库启动.png)

## 安装应用

<!-- 您可以访问 [应用市场](https://www.steedos.com/appstore) 或下载示例应用 -->
**应用列表：**

- [审批王]
- [合同管理](https://github.com/steedos/steedos-app-contract/releases/download/v1.23.0-alpha.14/steedos-app-contract.package)
- [销售管理]
- [采购管理]
- [费控管理]
- [项目管理](https://github.com/steedos/project-management-app/releases/download/v1.23.0-alpha.16/project-management-app.package)

选择想要安装的应用，将下载好的 **.package** 文件移至本地的 **steedos-packages** 文件夹下

![subscription](/assets/windows/windows02.png)
**例如：** 选择下载项目管理，将项目管理的 **.package** 文件 **project-management-app.package** 移至本地的 **steedos-packages**文件夹下即可

![subscription](/assets/windows/windows03.png)

## 运行项目

然后确保数据库启动成功后，双击运行`2-启动华炎魔方.bat`保持窗口打开，看到下图信息表示服务启动成功:

![项目启动](/assets/windows/项目启动.png)

服务会自动使用默认浏览器打开地址 **http://127.0.0.1:5000/** ，创建账号后即可使用华炎魔方

:::note 提示
若弹出防火墙询问窗口，点击允许运行即可。
:::

## 常见问题解答

### Address already in use

启动数据库报错：`Failed to set up listener: SocketException: Address already in use`。

这是端口冲突，说明本地 27017 端口已经被占用，很有可能本地已经启动了一个 mongodb 服务，停掉即可

也可以编辑 **1-启动数据库.bat** 在行尾添加 `--port {非27017端口}`，同时修改**.env.local**文件中**MONGO_URL**中的端口

### 找不到 MSVCP140.dll

启动数据库报错：由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题。

缺少微软**VC++**运行库文件，去微软官网下载[最新支持的 Visual C++](https://support.microsoft.com/zh-cn/help/2977003/the-latest-supported-visual-c-downloads)

选择 64 位执行程序下载安装，安装后重新启动数据库：

![项目启动](/assets/windows/vc++.png)

### cannot write to indexes

启动服务，数据库报错：`MongoError: cannot write to 'steedos.system.indexes'`，报错后数据库自动停止了。

Mongodb 开了 replication 之后没初始化可能会遇到以上错误，请参考 [使用集群模式启动数据库](https://developer.steedos.com/help/deploy/deploy_ubuntu#%E4%BD%BF%E7%94%A8%E9%9B%86%E7%BE%A4%E6%A8%A1%E5%BC%8F%E5%90%AF%E5%8A%A8%E6%95%B0%E6%8D%AE%E5%BA%93)，来初始化数据库。

### Too many open files

您有可能遇到数据库报`Too many open files`的错误，错误日志信息可能如下所示：

```json
{
  "t": { "$date": "2020-08-04T10:58:36.840+08:00" },
  "s": "E",
  "c": "STORAGE",
  "id": 22435,
  "ctx": "initandlisten",
  "msg": "WiredTiger error",
  "attr": {
    "error": 24,
    "message": "[1596509916:840216][88959:0x10de0edc0], file:collection-0--5658530932290964009.wt, txn-recover: __wt_txn_recover, 852: Recovery failed: Too many open files"
  }
}
```

这通常是由于未设置`UNIX ulimit Settings`造成的，详细说明参考 [ulimit Considerations](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#run-mongodb-community-edition)。

`UNIX ulimit Settings`的推荐配置方式可以参考 [Recommended ulimit Settings](https://docs.mongodb.com/manual/reference/ulimit/#recommended-ulimit-settings)，里面有提到可能需要重启数据库才能生效，请不要忘记。

## 另请参考

- [参考文档](/help)
