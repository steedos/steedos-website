---
title: 表单事件
---

## 表单触发器

### initialValues

表单初始化数据时执行。

initialValues 可以定义为同步函数或是异步函数。

```yml
form:
  initialValues: function () {
      return {
          name: "Hello World",
          code: "hello_world
      }
  }
```

### validate

- 表单字段修改时执行。
- 参数: 传入表单中的字段值。
- 返回值：
  - `return false`: 终止提交
  - `return {字段名1: 错误原因1, 字段名2: 错误原因2}`: 终止提交，根据字段名将错误原因显示在编辑窗口的字段下
  - `throw new Error('需要显示的错误信息')`: 终止提交，并自动在页面右上角报错信息

validate 可以定义为同步函数或是异步函数。

```yml
form:
  validate: function (formValues) {
      return {
          // 调用 ajax 查询服务端
          code: "code 字段不能重复"
      }
  }
```

### beforeInsert
- 新增记录提交到服务端之前执行
- 无参函数，所属数据可从this中获取: 
  ```
  {
    userId: 当前用户唯一标识, 
    spaceId: 当前工作区唯一标识, 
    object_name: 当前对象名称,
    doc: 新增的记录
  }
  ```
- 返回值：
  - `return false`: 终止提交
  - `return {字段名1: 错误原因1, 字段名2: 错误原因2}`: 终止提交，根据字段名将错误原因显示在编辑窗口的字段下
  - `throw new Error('需要显示的错误信息')`: 终止提交，并自动在页面右上角报错信息
- 示例：
  ```yml
    # xxx.object.yml
    form:
      beforeInsert: !!js/function |
        function(){
          ...
          toastr.error('禁止新建');
          return false;
        }
  ```

### beforeUpdate
- 修改记录提交到服务端之前执行
- 无参函数，所属数据可从this中获取: 
  ```
  {
    id: 记录唯一标识,
    userId: 当前用户唯一标识,
    spaceId: 当前工作区唯一标识,
    object_name: 当前对象名称,
    doc: 修改的记录
  }
  ```
- 返回值：
  - `return false`: 终止提交
  - `return {字段名1: 错误原因1, 字段名2: 错误原因2}`: 终止提交，根据字段名将错误原因显示在编辑窗口的字段下
  - `throw new Error('需要显示的错误信息')`: 终止提交，并自动在页面右上角报错信息
- 示例：
  ```yml
    # xxx.object.yml
    form:
      beforeUpdate: !!js/function |
        function(){
          ...
          return {name: '名称不能包含特殊字符'}
        }
  ```
### beforeDelete
- 删除记录提交到服务端之前执行
- 无参函数，所属数据可从this中获取:
  ```
    {
      id: 记录唯一标识,
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 删除的完整记录
    }
  ```
- 返回值：
  - `return false`: 终止提交
  - `return {字段名1: 错误原因1, 字段名2: 错误原因2}`: 终止提交，根据字段名将错误原因显示在编辑窗口的字段下
  - `throw new Error('需要显示的错误信息')`: 终止提交，并自动在页面右上角报错信息
- 示例：
  ```yml
    # xxx.object.yml
    form:
      beforeDelete: !!js/function |
        function(){
          ...
          throw new Error('禁止删除');
        }
  ```
### afterInsert
- 新增记录成功后执行
- 无参函数，所属数据可从this中获取:
  ```
    {
      id: 记录唯一标识,
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 新增后的完整记录
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      afterInsert: !!js/function |
        function(){
          ...
          window.open('xxx');
        }
  ```
### afterUpdate
- 修改记录成功后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      id: 记录唯一标识,
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 修改后的完整记录,
      previousDoc: 修改前的完整记录
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      afterUpdate: !!js/function |
        function(){
          ...
          window.open('xxx');
        }
  ```
### afterDelete
- 删除记录成功后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      id: 记录唯一标识,
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      previousDoc: 删除前的完整记录
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      afterDelete: !!js/function |
        function(){
          ...
          window.open('xxx');
        }
  ```
### errorInsert
- 删除记录成功后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 新增的记录,
      error: 错误信息
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      errorInsert: !!js/function |
        function(){
          ...
        }
  ```
### errorUpdate
- 删除记录成功后执行
- 无参函数，所属数据可从this中获取:
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 修改的记录,
      error: 错误信息
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      errorUpdate: !!js/function |
        function(){
          ...
        }
  ```
### errorDelete
- 删除记录成功后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 要删除的完整记录,
      error: 错误信息
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      errorUpdate: !!js/function |
        function(){
          ...
        }
  ```