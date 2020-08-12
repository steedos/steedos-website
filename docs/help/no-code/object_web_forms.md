---
title: 在线表单
---

在线表单（匿名提交数据），用于潜在客户注册、合作伙伴申请表、在线故障申报之类的需求。

## 配置在线表单

以潜在客户注册为例，具体操作如下：

- “设置-对象设置-在线表单”，点击右上角“新建”；

- 在弹窗中输入名称、选择某个业务对象，以及填写的字段，提交后返回地址等并保存。

![在线表单](/assets/workflow/web_forms_2.png)

### 字段

- 名称：必填，在线表单的标题。
- 关联对象：必填，选择自定义的业务对象，不能选择系统级的对象。
- 显示字段：必填，在线表单中显示的字段，目前只支持文本、数字、下拉框。
- 返回地址：必填，当用户提交表单后，自动跳转到此地址。
- 记录所有人：当用户提交表单时，自动更新对应记录的创建人以及所有人。
- 通知用户：当用户提交表单时，自动通知相关人员。

## 复制表单HTML

完成新建“潜在客户注册”在线表单后，点击右上角按钮“复制表单HTML”，复制系统根据设置自动生成的html代码。

![在线表单](/assets/workflow/web_forms_3.png)

网站维护人员可以将html代码复制到网页中，比如新建html网页，用代码编辑器打开粘贴复制的html代码，并调整表单样式。

```yml
<!--  ----------------------------------------------------------------------  -->
<!--  注意：请将以下 <META> 元素添加到您的网页 <HEAD> 中。如有必要，请修改 charset 参数以指定 HTML 页的字符集。    -->
<!--  ----------------------------------------------------------------------  -->
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
<!--  ----------------------------------------------------------------------  -->
<!--  注意：请将以下 <FORM> 元素添加到您的网页中。                                  -->
<!--  ----------------------------------------------------------------------  -->
<style>
input[type="text"] {
margin-left: 12px;
margin-top: 12px;
}
input[type="submit"] {
margin-top: 12px;
}
</style>
<form action="http://192.168.0.108/api/v4/leads/web_forms" method="POST">
    <input type=hidden name="steedos_form_id" value="Ls8afbucZWrY2TGbJ">
    <input type=hidden name="return_url" value="http://192.168.0.198:3000/">

    <label for="name">姓名</label><input id="name" name="name" type="text" /><br>

    <label for="company">公司</label><input id="company" name="company" type="text" /><br>

    <label for="mobilephone">手机</label><input id="mobilephone" name="mobilephone" type="text" /><br>

    <input type="submit" name="submit">
</form>
```

## 使用在线表单

用户填写表单后，调用华炎魔方接口，保存匿名数据到关联对象的数据库中。

![在线表单](/assets/workflow/web_forms_5.png)

## 跳转页面

当用户提交表单时，页面会跳转到在线表单的“提交后返回地址”；

![在线表单](/assets/workflow/web_forms_7.png)

## 推送通知用户

如果有设置 notification_users（通知用户），自动发送推送通知给对应的用户。

![在线表单](/assets/workflow/web_forms_6.png)

点击推送链接，可以看到在线表单提交的相关数据。

![在线表单](/assets/workflow/web_forms_8.png)
