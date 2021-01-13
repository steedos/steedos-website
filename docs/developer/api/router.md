---
title: 服务端API
sidebar_label: 自定义服务端API
---
在系统中，可以定义API处理相关的业务逻辑并返回结果。

### 声明自定义API

文件规范

- 文件名称必须以 `.router.js` 结尾, 比如: `xxx.router.js`

- 文件必须使用 `exports.default ` 导出一个 [express.Router](http://expressjs.com/en/4x/api.html#router) 的实例

### 使用代码编写实例

```js
  const express = require("express");
  const router = express.Router();

  router.get('/path', async function (req, res) {
      res.status(200).send({message: 'test ok'});
  });
  exports.default = router;
```

### 使用代码编写实例 (登录认证)

- 认证处理器: `core.requireAuthentication`, 认证成功, 则可以在req中获取到当前用户信息`req.user` ; 认证失败, 则会返回401错误

```js
  const express = require("express");
  const router = express.Router();
  const core = require('@steedos/core');

  router.get('/path', core.requireAuthentication, async function (req, res) {
      res.status(200).send({message: 'test ok'});
  });
  exports.default = router;
```

### 使用 DX 插件创建 Router 文件

- 1、打开命令面板，在输入框中输入“Steedos:”,则会出现可选的命令列表，选择“Create Router”

![subscription](/assets/dx/vs_extension/vs_extension14.png)

- 2、输入router 文件名称，输入回车

![subscription](/assets/dx/vs_extension/vs_extension15.png)

- 3、选择将要生成的目录

![subscription](/assets/dx/vs_extension/vs_extension16.png)

- 4、生成的router文件内容如图所示

![subscription](/assets/dx/vs_extension/vs_extension17.png)
