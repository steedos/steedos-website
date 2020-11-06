---
title: 批准过程术语
---

### 批准操作
执行批准过程时系统自动执行的批准操作，例如锁定记录、更新相关字段。

### 批准过程
批准过程用于配置记录如何在华炎魔方中批准。批准过程会指定批准的每个步骤，包括请求批准发起对象和过程中每个时间点或环节需要采取的操作。

### 批准通知
批准通知是应用程序通知，用于通知相关处理人，记录已提交待批准。

### 批准步骤
批准步骤定了一个特殊的批准过程的所有批准环节。每个步骤会决定
- 哪些记录可以转到该步骤
- 分配批准请求的处理人
第一步指定如果记录不前进到该步骤时应如何处理。后来的步骤指定如果批准者拒绝该请求会怎样。

### 分配的批准人
分配的批准人是负责响应某批准请求的用户。

### 重新分配批准人
重新分配批准人是由分配的批准人重新指定处理批准请求的人员。

### 初始提交操作
当用户第一次提交记录以待时，发生初始提交操作。默认情况下，记录被锁定。

### 最终批准操作
在完成所有必需批准时实施最终批准操作。

### 最终拒绝操作
当批准者拒绝请求并转为最终拒绝状态时发生最终拒绝操作。

### 批准过程实例（申请单）
批准过程实例代表批准过程的一个实例。每次记录提交待批准时，都会创建一个新的批准过程实例。

### 批准过程实例节点（签核历程）
批准过程实例节点代表批准过程步骤的一个实例。记录每次在批准过程中输入一个步骤时，系统均会创建过程实例节点。当记录不满足步骤条件时或批准过程实例在未输入步骤的情况下完成，则系统不会创建过程实例节点。

### 调回操作
当提交的批准请求被调回时，发生调回操作。默认情况下，记录解除锁定。

### 记录锁定
记录锁定防止用户编辑记录（无论字段级安全或共享设置如何）。默认情况下，华炎魔方锁定等待批准的记录。只有管理员可以编辑锁定的记录。