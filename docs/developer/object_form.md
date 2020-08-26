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
      errorDelete: !!js/function |
        function(){
          ...
        }
  ```
### beforeView
- 记录详细页面：记录显示前执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 要显示的记录,
      schema: Schema
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      beforeView: !!js/function |
        function(){
          if(this.doc.is_trial){
            this.doc.name = this.doc.name + "(试用)";
          }
        }
  ```
### afterView
- 记录详细页面：记录显示之后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 要显示的记录,
      schema: Schema
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      afterView: !!js/function |
        function(){
          //如果当前记录的is_trial为true，则修改详细页面header背景颜色、字体颜色
          if(this.doc.is_trial){
            $(".slds-page-header_bleed").css('background-color', '#4CAF50').css('color', '#ffffff');
          }
        }
  ```
### beforeEdit
- 记录详细页面：编辑页面显示之前执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 要显示的记录,
      schema: Schema
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      beforeEdit: !!js/function |
        function(){
          //如果当前记录的is_trial为true，则试用截止日期必填
          if(this.doc.is_trial){
            this.schema._schema.trial_end_date.optional = false
          }
        }
  ```
### afterEdit
- 记录详细页面：编辑字段值后执行
- 无参函数，所属数据可从this中获取: 
  ```
    {
      userId: 当前用户唯一标识,
      spaceId: 当前工作区唯一标识,
      object_name: 当前对象名称,
      doc: 要显示的记录,
      schema: Schema
    }
  ```
- 示例：
  ```yml
    # xxx.object.yml
    form:
      afterEdit: !!js/function |
        function(){
          //如果当前记录的is_trial为true且字段trial_end_date没有值时，给字段赋值。
          if(this.doc.is_trial && !this.doc.trial_end_date){
            this.doc.trial_end_date = moment().add(1, 'years').format('L')
          }else if(!this.doc.is_trial){ // 非试用时，清理试用截止日期
            delete this.doc.trial_end_date
          }
        }
  ```