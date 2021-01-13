---
title: 生成国际化文件
---

## i18n

### steedos:i18n

生成项目下对象的国际化文件

该命令包含以下参数：

- 【lng】 需要生成国际化的语言, 必填 (en | zh-CN)
- 【-p | packageDir】打包好的package名称
- 【-s | serverDir】项目所在路径, 默认为当前目录, 选填

您也可以运行--help来获取 steedos:i18n 命令的更多信息：

```yml
Create steedos project object i18n
```

展示结果：

```yml
USAGE
  $ steedos i18n NAME

ARGUMENTS
  NAME  language

OPTIONS
  -p, --packageDir=packageDir  Steedos Package Dir
  -s, --serverDir=serverDir    Steedos Server Dir 
```

示例如下

```yml
steedos i18n en -s . -p ./steedos-app
```
