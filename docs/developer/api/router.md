---
title: 自定义API
sidebar_label: API
---
在系统中，可以调用自定义API处理相关的业务逻辑并返回结果。

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
```js
  const express = require("express");
  const router = express.Router();
  const core = require('@steedos/core');

  router.get('/path', core.requireAuthentication, async function (req, res) {
      res.status(200).send({message: 'test ok'});
  });
  exports.default = router;
```