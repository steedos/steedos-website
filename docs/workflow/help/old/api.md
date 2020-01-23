
### Steedos API

审批王API可以帮助客户将现有系统与审批王集成。例如：
- 企业组织机构（机构、部门、员工等），与华炎云账户系统同步
- 将当前用户在审批王系统中的待办事项集成显示在内网门户中
- 将业务系统中需要审批的内容交给审批王，例如：
  - 在HR系统中，提请“新员工入职审批”流程，并在审批王中进行流程审批
  - HR系统中跟踪“新员工入职审批”流程的审批进展
  - “新员工入职审批”流程审批完成后，返回HR系统，并进行后续处理

备注：审批王标准版用户暂时未开通Steedos API访问权限。
{% video %}http://oss.steedos.com/videos/cn/开放API接口.mp4{% endvideo %}

### 接口调用说明
- 华炎云
 - [身份认证](auth.md)
 - [用户](SpaceUser.md)
 - [部门](Orgnization.md)
- 审批王
 - [申请单](instances.md)

### 实例
- [Nodejs](sample_nodejs.md)
