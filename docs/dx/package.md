---
title: Package
sidebar_label: 打包
---

## 生成

打开终端或命令提示符，运行package:build命令实现将本地文件打包成.package文件，示例如下：

```yml
steedos package:build -n steedos-app-contract -p C:\GitHub\steedos-app-contract\steedos-app
```

该命令包含两个参数：

- 【-n | packageName】打包好的package名称
- 【-p | appPath】需要打包的本地文件地址
- 【-l | loglevel(debug|info|warn)】可选参数，用于控制是否打印已打包文件清单，默认"warn"不打印，只打印未打包文件清单

更多信息可参考 [命令指南](/dx/command_reference) 中package:build命令。

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

## 使用

将.package文件拷贝到项目根路径的steedos-packages文件夹下，重启服务。

## 升级

删除本地解压文件和对应的.package文件，然后下载最新的.package文件，拷贝到项目根路径的steedos-packages文件夹下，并重启服务。

## 卸载

删除本地解压文件和对应的.package文件
