---
title: MongoDB可视化工具--Robo 3T 使用教程
---

### 1、打开Robo 3T，点击左上角的 create创建一个连接，给该连接起个名字，如：localhost, 使用默认地址 localhost 和 端口27017 即可，点击save保存。如下图所示

![subscription](/assets/developer/install/robo3t01.png)

### 2、点击保存后，就会在界面看到如下图所示

![subscription](/assets/developer/install/robo3t02.png)

### 3、双击 localhost 连接到 MongoDB 并进入交互界面; 我们可以看到我们本地数据库的表信息如下：

![subscription](/assets/developer/install/robo3t03.png)

### 4、右键数据库打开Shell

![subscription](/assets/developer/install/robo3t04.png)

### 5、批量插入（默认是不支批量操作，只能用for循环）

在刚刚打开的shell窗口输入如下代码, 如下所示：

![subscription](/assets/developer/install/robo3t05.png)

数据插入完成后，我们再来看下数据库会新增上面几条数据，如下所示：

![subscription](/assets/developer/install/robo3t06.png)

### 6、查询数据

- 6.1、根据查询条件来查询数据，如下方法所示：

```yml
{<字段名>:<字段值>}
```

查询语句：

```yml
 db.users.find({userName: 'longen---0'});
```

如下所示：

![subscription](/assets/developer/install/robo3t07.png)

- 6.2、可以在查询选择器中指定需要查询的字段并限定字段值的范围，如下方法所示：

```yml
{<字段名>:{$in:[<字段值1>,<字段值2>...]}}
```

如下所示：

![subscription](/assets/developer/install/robo3t08.png)

- 6.3、指定多个字段进行查询

现在我们来查询这些数据中 type 字段值等于 'food', 且 price字段值小于10的数据，如下代码所示：

```yml
db.users.find({type:'food', price:{$lt:10}});
```

如下所示：

![subscription](/assets/developer/install/robo3t09.png)

等等，查询语句和mongodb查询语句类型相同。
