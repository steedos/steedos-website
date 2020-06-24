---
title: 环境变量
---

.env，用于配置环境变量，位于项目的根目录。

如果是多人协作同一个项目的时候，推荐各自新建 .env.local 来替代 .env 。

> 如果存在文件.env.local，系统启动时，就从文件.env.local中读取环境变量。反之，如果不存在文件.env.local，系统启动时，则从文件.env中读取环境变量。

## 默认的环境变量

项目创建后，默认的环境变量包括：

```yml
MONGO_URL=mongodb://127.0.0.1:27017/steedos
PORT=5000
ROOT_URL=http://127.0.0.1:5000
```

可按需修改这些环境变量的值。修改后，重启服务即生效。
- MONGO_URL ： MongoDB的连接URL
- PORT ： 系统的端口号 
- ROOT_URL ： 系统的访问网址，建议改用本机的IP地址。这样，在其他机器就可以用ROOT_URL来访问系统了。

## 自定义环境变量

可以在.env.local / .env 中，按需配置自定义的环境变量。 自定义的环境变量主要服务于[steedos-config.yml](https://www.steedos.com/developer/steedos_config) 。

例如，在.env.local中添加自定义的环境变量

```yml
ENV_CFS_STORE=local
```

定义环境变量ENV_CFS_STORE=local 后，就可以在steedos-config.yml 里引用它。

```yml
public:
  cfs:
    storage: ${ENV_CFS_STORE} # 通过${ENV_CFS_STORE}获取在.env.local中添加的变量的值
```