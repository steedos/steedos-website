---
title: 身份验证
---

有多种方式可以和 Steedos API 进行身份验证。

以下示例需确认 Steedos 服务 运行于 http://localhost:5000 。

## 获取 Token

调用用户登录接口，获取用户登录 Token

### URL

```js
POST 'http://localhost:5000/api/v4/users/login'
```

### 请求参数

以 JSON 格式传入请求参数。
|Param |Required |Type |Description |
|:-------- |:------- |:----- |----- |
|username |true |string |可传入用户名、邮箱或手机号。 |
|password |true |string |用户密码。 |
|spaceId |false |string |需要登录的工作区 Id，如果不传入，自动选中第一个工作区。 |

```json
{
  "username": "jack",
  "password": "iloveu",
  "spaceId": "i6thCRrKWYmdjxpzt"
}
```

### Body 返回结果

如果登录成功，Body 返回 userContext 对象。

```yaml
userId: dL4KFkLSqqGAozZ6C # 用户Id
spaceId: i6thCRrKWYmdjxpzt # 当前工作区Id
name: Jack Zhuang # 用户姓名
username: jack # 用户名
mobile: 1865201314 # 用户手机号
email: 1865201314@qq.com # 用户邮箱
utcOffset: 8 # 时区差，以小时为单位，北京时间为8
roles: ["role_name"] # 用户属于的所有权限组
space:
  _id: i6thCRrKWYmdjxpzt # 当前工作区Id
  name: Apple # 当前工作区名称
is_space_admin: true # 是否是当前工作区管理员
spaces: [space] # 数组，用户所属的所有工作区
company:
  _id: i6thCRrKWYmdjxpzt # 用户所属主单位
  name: Apple China # 用户所属主单位名称
  organization: xxx # 用户所属主单位关联组织id
companies: [company] # 数组，用户所属的所有单位
company_id: "xxx" # 用户所属主单位id值
company_ids: ["xxx"] # 数组，用户所属的所有单位id值
organization:
  _id: i6thCRrKWYmdjxpzt
  name: Sales # 用户所属部门
  fullname: Apple China/Sales # 用户所属部门的全称
  company_id: xxx # 用户所属部门关联单位id
organizations: [organization] # 数组，用户所属的所有部门
```

### Header 返回结果

Header 返回 X-Space-Token。

```shell
X-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_
```

### Cookie 返回结果

如果从浏览器登录，自动为浏览器设置以下 Cookie。

```shell
X-User-Id: dL4KFkLSqqGAozZ6C
X-Auth-Token: 392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_
X-Space-Id: i6thCRrKWYmdjxpzt
X-Space-Token: i6thCRrKWYmdjxpzt,392mkylUmFyNTRLR3aSTbsyM287On8bTULh-GDO1sH_
```

## 验证登录状态

这里测试调用 validate 接口，验证用户是否登录，如果用户已登录，则返回用户基本信息。

### URL

```js
POST 'http://localhost:5000/api/v4/users/validate'
```

### 请求参数

通过 Header Authorization 传入 cookie 中 X-Space-Token 的值。

```shell
Authorization: Bearer i6thCRrKWYmdjx...bsyM287On8bTULh-GDO1sH_
```

### 返回结果

如果当前用户已登录，则返回 userContext。

## 注销

注销当前登录的用户。

### URL

```js
POST 'http://localhost:5000/accounts/logout'
```

### 请求参数

无

### 返回结果

无
