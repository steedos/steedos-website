---
title: steedos-server
---

package.json: 主要用于配置项目依赖的npm包，位于项目的根目录。

而升级 steedos-server 版本，可通过修改package.json中的"dependencies"下的"steedos-server"版本号，来更新发包的最新版本。

## 升级 steedos-server 版本

```yml
"dependencies": {
        "@steedos/accounts": "1.19.10",
        "@steedos/plugin-enterprise": "^1.20.15",
        "@steedos/steedos-plugin-workflow": "^2.0.10",
        "dotenv-flow": "^3.1.0",
        "steedos-server": "1.21.8"
```

例如："steedos-server"从"1.21.0"更改为最新版本"1.21.8"后，保存package.json文件，并在终端执行yarn安装相关依赖包后，继续执行：

```yml
yarn start
```

成功重启服务，即完成升级 steedos-server 版本。

> 查询最新 steedos-server 版本号，可通过 https://www.npmjs.com/package/steedos-server 访问。