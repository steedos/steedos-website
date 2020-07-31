---
title: 删除
---

通过 DELETE 请求删除业务数据。

### 接口信息

- 请求方法：DELETE

- 请求接口：/api/v4/{object_name}/{record_id}

- 接口说明：

  - object_name：删除对象的对象名
  - record_id：删除记录的主键 ID

- 请求参数说明：

  - 无

- response 说明：

  - 删除成功后，将返回状态码 200

- 示例如下：

  - HTTP 请求

  ```bash
   curl \
     -X DELETE https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts/hbysEccFT2fXjHtpd \
     -b 'X-Space-Token=55090bbe52...aXpwo'
  ```
