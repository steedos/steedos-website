---
title: 打包
---

## package:build

### 将本地文件打包成.package文件

该命令包含以下参数：

- 【-n | packageName】打包好的package名称
- 【-p | appPath】需要打包的本地文件地址
- 【-l | loglevel(debug|info|warn)】可选参数，用于控制是否打印已打包文件清单，默认"warn"不打印，只打印未打包文件清单

您也可以运行--help来获取 package:build 命令的更多信息：

```yml
steedos package:build --help
```

展示结果：

```yml
USAGE
  $ steedos package:build
OPTIONS
-l, --loglevel=loglevel        (debug|info|warn)  [default: warn] logging level for this command invocation
-n, --packageName=packageName  package name
-p, --appPath=appPath          appPath
```

示例如下：

```yml
steedos package:build -n steedos-app-contract -p C:\GitHub\steedos-app-contract\steedos-app
```

在控制台同时会打印打包相关的日志：

```yml
=== Steedos Package Build: Packaged files
TYPE                        PROJECT PATH
──────────────────   ──────────────────────────
CustomApplication    steedos-app\main\default\applications  
                     \projects.app.yml    

=== Steedos Package Build: Unpacked files
TYPE                         PROJECT PATH
──────────────────   ─────────────────────────────
```
