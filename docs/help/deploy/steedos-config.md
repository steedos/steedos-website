---
title: 配置文件
---

华炎魔方使用位于项目根目录的`steedos-config.yml`文件作为配置文件，可在其中配置各种参数。

## 必须配置的参数

要使用华炎魔方，以下参数配置不可缺少否则某些功能将不能正常使用。

- [ROOT_URL](#环境变量特定参数)：项目访问地址，如果该参数配置不正确，将不能正常访问服务。
- [PORT](#环境变量特定参数)：项目占用服务器端口号，如果该参数配置不正确，将不能正常访问服务。
- [华炎魔方ID](#登录规则)：自定义登录界面LOGO等功能，需要设置该参数，否则不生效。

## 环境变量

华炎魔方使用`.env`或`.env.local`作为环境变量配置文件，它们可以与`steedos-config.yml`文件一起配合使用来定义整个项目相关参数。

### 环境变量特定参数

以下两个特定参数只能在`.env`或`.env.local`环境变量文件中定义，且这两个参数必须定义缺一不可。

```yml
ROOT_URL=http://192.168.0.95:3000
PORT=3000
```

- ROOT_URL: 项目访问地址，通常使用ip地址加端口号来表示项目访问的网络地址。
- PORT: 项目服务所占用的服务器端口号。

:::note 提示
`127.0.0.1`为本机服务的ip地址，`http://127.0.0.1:3000/`与`http://localhost:3000/`等效，通常来说不建议把ROOT_URL配置为该地址，比如手机客户端上就无法连接该地址。
:::

### 配合使用

可以在`steedos-config.yml`中配置相关参数指向某个环境变量，比如以下配置将取环境变量MONGO_URL的值作为默认数据源的访问地址。

```yml
datasources:
  default:
    connection:
      url: ${MONGO_URL}
```

关于目前支持配置哪些参数请参考下面的 [参数说明](#参数说明)，你也可以查看下面的 [综合示例](#综合示例) 来了解完整的配置文件应该是怎么样的。

### `.env`与`.env.local`区别

`.env`与`.env.local`都是用来定义环境变量的，当两个文件同时存在时，如果某个环境变量同时在两个文件中定义过，会优先使用`.env.local`中的值。

`.env.local`文件并不是必须的，无论是开发环境还是生产环境，通常来说你应该尽量多的把常用环境变量写入`.env`文件，并提交到代码仓库中，然后在本地开发环境或服务器生产环境中复制一份`.env`中的内容到`.env.local`文件中，并在`.env.local`文件中配置本地差异化的参数值。

:::note 注意
因为`.env`通常会提交到代码仓库中，所以该文件中不应该写入敏感信息，比如数据库密码，邮件或短信服务密码等，您应该把这些敏感信息写入到`.env.local`文件中。
:::

## 参数说明

### 数据源

配置当前项目需要引用的数据源，其中`default`数据源为必须配置的默认数据源，且该数据源作为系统内核数据源只能使用mongodb数据库。

```yml
datasources:
  default:
    connection:
      url: mongodb://127.0.0.1/steedos
    objectFiles:
      - "./src/**"
    appFiles:
      - "./src/**"
```

在数据源中可配置要连接到哪个数据库，要加载哪些业务对象，以及要显示哪些应用。

- 使用`connection`参数配置要连接到的数据库信息，可定义每个数据源的数据库连接地址、账户及密码等。
- 使用`objectFiles`参数配置要加载该数据源下哪些业务对象，用于指定要加载的对象配置文件所在地址。
- 使用`appFiles`参数配置要加载哪些应用，用于指定要加载的应用配置文件所在地址。

:::note 提示

- 业务对象通过所在数据源指定的数据库来保存数据。
- 系统内核数据源只能使用mongodb数据库，所有华炎魔方标准对象都保存在其中。
- 华炎魔方支持连接到其他常用数据库作为第三方数据源，目前已支持`SQL Server`、`Oracle`、`MySQL`、`PostgreSQL`、`Sqlite`。
:::

### 引用插件

配置当前项目中需要启用的插件，以下配置会启用华炎客户关系管理系统和华炎合同管理系统作为插件，项目也因此会拥有这些插件内的功能。

```yml
plugins:
  - "@steedos/app-crm"
  - "@steedos/app-contracts"
```

:::note 提示
请注意，在启用插件前，请确保这些插件都已经正确安装到项目中。
:::

### 登录规则

配置登录界面相关参数，例如是否允许注册、是否允许修改密码、是否允许创建企业。

```yml
tenant:
  _id:
  name: Steedos
  logo_url:
  background_url:
  saas: false
  enable_register: true
  enable_create_tenant: true
  enable_password_login: true
  enable_bind_email: false
  enable_bind_mobile: false
  enable_mobile_code_login: false
  enable_email_code_login: false
```

- _id: 华炎魔方ID， 值可从 设置-公司设置-许可证-复制魔方ID 获得。
- name: 项目名称
- logo_url: logo图片地址
- background_url: 背影图片地址
- saas: 是否开启多租户模式
- enable_register: 允许创建账户，默认true
- enable_create_tenant: 允许创建企业，默认true
- enable_password_login: 允许使用密码登录，启用时，注册和登录都默认使用密码。默认true
- enable_bind_email: 强制绑定邮箱，默认false
- enable_bind_mobile: 强制绑定邮箱，默认false
- enable_mobile_code_login: 允许使用手机验证码登录，启用时，注册和登录都默认使用验证码。
- enable_email_code_login: 允许使用邮箱验证码登录，启用时，注册和登录都默认使用验证码。

:::note 华炎魔方ID的提示

- 它是安装华炎魔方后首次注册账户时创建的团队唯一识别码，如果有多个团队每个团队也分别有自己的魔方ID。
- 为华炎魔方购买的许可证也使用魔方ID作为识别凭证，只要创建团队就可以免费获得魔方ID，详细请参考 [许可证](/help/company/license)。
- `logo_url`、`background_url`等功能配置需要设置华炎魔方ID值，否则不生效。
:::

### 密码规则

配置密码的校验规则，例如最小长度，是否必须包含数字、大写字母、小写字母和字符。

```yml
password:
  minimum_length: 10
  lowercase: true
  number: true
  uppercase: true
  symbol: true
```

### 账户相关

配置账户相关参数。

```yml
accounts:
  mobile_phone_locales: ['zh-CN']
  mobile_regexp: '^[0-9]{11}$'
```

- mobile_phone_locales: 手机号本地化，配置为`zh-CN`表示使用中国的11位手机号，要支持其他国家手机号请参考 [validator](https://www.npmjs.com/package/validator)。
- mobile_regexp: 手机号格式正则表达式，使用一个正则表达式来描述正确的手机号格式。

:::note 提示
当同时配置了`mobile_phone_locales`和`mobile_regexp`参数时，优先使用`mobile_phone_locales`。
:::

### Web服务URL

```yml
webservices:
  steedos: /
```

### 文件存储

配置附件存储的相关参数。

附件可以保存在本地，也可以保存在阿里云或AWS S3服务中。

```yml
public:
  cfs:
    store: "local"
    local: 
      folder: "./storage"
cfs:
  aliyun:
    region:
    internal:
    bucket:
    folder:
    accessKeyId:
    secretAccessKey:
  aws:
    endpoint:
    bucket:
    accessKeyId:
    secretAccessKey:
    s3ForcePathStyle:
    signatureVersion:

```

- `public.cfs.store`: 配置附件存储在什么地方，目前支持三个选项，`local`表示存储在本地，`OSS`表示存到阿里云，`S3`表示存到AWS​，默认值为`local`。
- `public.cfs.local.folder`: 当配置附件存在本地时，需要配置文件夹路径。
- `cfs.aliyun`: 当配置附件存在阿里云时，需要购买阿里云服务并配置相关参数。
- `cfs.aws`: 当配置附件存在AWS时，需要购买AWS云服务并配置相关参数。

### 邮件配置

配置SMTP服务的相关参数，用于系统发送推送邮件。

```yml
email:
  from:
  host:
  port: 465
  username:
  password:
```

或

```yml
email:
  from:
  url:
```

- `from`: 邮件发送者账户，华炎魔方每封邮件发出去后发件人都显示为该账户。
- `host`: 邮件服务域名地址。
- `port`: 邮件服务端口号。
- `username`: 邮件服务使用的账户名。
- `password`: 邮件服务使用的账户密码。
- `url`: 邮件服务的URL地址，格式为`smtps://USERNAME:PASSWORD@HOST:PORT`，比如`smtps://username:password@email-smtp.us-east-1.amazonaws.com:465/`。

### 发送短信

配置手机短信服务，用于通过手机短信登录和接受账户提醒消息。

```yml
sms:
  qcloud:
    smsqueue_interval: 1000
    sdkappid:
    appkey:
    signname:
```

使用的是腾讯云短信服务`sdkappid`是应用ID，`appkey`是分配的密钥，`signname`是短信签名显示在短信的开头，如:【华炎云】您的验证码是：8888

### 定时任务

以下是某些定时任务相关的参数。

```yml
cron:
  statistics: 0 0 0 * * *
  mailqueue_interval: 1000
  push_interval: 1000
  calendar_dav_interval: 30000
  calendar_remind: 60000
  webhookqueue_interval: 1000
  instancerecordqueue_interval: 10000
```

- statistics: 流程统计的执行时间，如上面的“0 0 0 * * *”意为每天的00:00:00 
- mailqueue_interval: 邮件队列的轮询间隔(单位毫秒)
- push_interval: 消息推送的轮询间隔(单位毫秒)
- calendar_dav_interval: 日历同步的轮询间隔(单位毫秒)
- calendar_remind: 日程提醒的轮询间隔(单位毫秒)
- webhookqueue_interval: 流程触发器队列的轮询间隔(单位毫秒)
- instancerecordqueue_interval: 对象流程队列的轮询间隔(单位毫秒)

## 综合示例

```yml title="steedos-config.yml"
datasources:
  default:
    connection:
      url: ${MONGO_URL}
    objectFiles:
      - "./src/**"
    appFiles:
      - "./src/**"
public:
  cfs:
    store: "local"
    local: 
      folder: "./storage"
plugins:
  - "@steedos/app-crm"
  - "@steedos/app-contracts"
tenant:
  _id: {STEEDOS_TENANT_ID}
  enable_register: true
  enable_forget_password: false
  saas: false
  enable_password_login: true
  enable_mobile_code_login: false
  enable_email_code_login: false
  enable_bind_mobile: false
sms:
  qcloud:
    smsqueue_interval: 1000
    sdkappid: ${STEEDOS_SMS_QCLOUD_SDKAPPID}
    appkey: ${STEEDOS_SMS_QCLOUD_APPKEY}
    signname: ${STEEDOS_SMS_QCLOUD_SIGNNAME}
email:
  from: 华炎魔方 <support@steedos.com>
  url: ${MAIL_URL}
cron:
  instancerecordqueue_interval: 10000
```

```yml title=".env"
MONGO_URL=mongodb://127.0.0.1:27017/steedos
PORT=3000
ROOT_URL=http://127.0.0.1:3000/
STEEDOS_TENANT_ID=
STEEDOS_SMS_QCLOUD_SDKAPPID=
STEEDOS_SMS_QCLOUD_APPKEY=
STEEDOS_SMS_QCLOUD_SIGNNAME=
```

```yml title=".env.local"
MONGO_URL=mongodb://127.0.0.1:27017/steedos
PORT=3000
ROOT_URL=http://127.0.0.1:3000/
STEEDOS_TENANT_ID=519f004e8e296a1c5f00001d
STEEDOS_SMS_QCLOUD_SDKAPPID=xxx
STEEDOS_SMS_QCLOUD_APPKEY=xxx
STEEDOS_SMS_QCLOUD_SIGNNAME=xxx
```
