
module.exports = 
{
  "关于华炎": ["company/about-us", "company/customers", "company/contact-us"],
  "华炎办公": ["oa", "oa/function", "oa/scenario", "oa/cases", "oa/price", 
  {
    "type": "link",
    "href": "/help/download",
    "label": "下载客户端"
  }, 
  {
    "type": "link",
    "href": "/help",
    "label": "帮助文档"
  }],
  "审批王": ["solutions/workflow", "solutions/workflow/function", "solutions/workflow/scenario", "solutions/workflow/cases", "solutions/workflow/price", 
    {
      "type": "link",
      "href": "/help/download",
      "label": "下载客户端"
    }, 
    {
      "type": "link",
      "href": "/help",
      "label": "帮助文档"
    }],
  "集团管控":["solutions/group","solutions/group/features","solutions/group/scenario","solutions/group/case"],
  "Steedos Workflow": ["us", "us/training", "us/price", "us/download"],
  "华炎费控": ["solutions/cost","solutions/cost/project","solutions/cost/costcases"],
  "华炎合同": ["products/contract","products/contract/features","products/contract/opensource", "products/contract/case"],
  "销售管理":{
    "销售管理": ["solutions/sales/home","solutions/sales/reason"],
    "功能": ["solutions/sales/contacts","solutions/sales/business","solutions/sales/clue","solutions/sales/mobile","solutions/sales/im","solutions/sales/mobile_office","solutions/sales/libraries","solutions/sales/report","solutions/sales/forecast"],
    "按角色": ["solutions/sales/role_professional","solutions/sales/role_supervisor","solutions/sales/role_operate","solutions/sales/role_manager","solutions/sales/role_expert","solutions/sales/role_service","solutions/sales/role_FAQ"]
  },
  "华炎知识管理": ["solutions/knowledge","solutions/knowledge/management","solutions/knowledge/case"],
  // "华炎魔方": [
  //   "platform", 
  //   "platform/features", 
  //   "platform/pricing", 
  //   "platform/cases", 
  //   "platform/try",
  //   {
  //     "type": "link",
  //     "href": "https://github.com/steedos/steedos-platform",
  //     "label": "开源社区版"
  // }],
  "开发人员": {
    "快速向导": [
      "developer",
      {
         "安装": ["developer/deploy", "developer/deploy_windows", "developer/deploy_mac", "developer/deploy_ubuntu", "developer/deploy_heroku", "developer/deploy_docker", "developer/deploy_cluster"]
      },
      "developer/steedos_server"
    ],
    "开发教程": ["developer/guide_create", "developer/guide_object","developer/guide_relationship","developer/guide_trigger","developer/guide_button","developer/guide_report","developer/guide_flow","developer/guide_sync","developer/guide_companies","developer/guide_nc"],
    "开发文档": ["developer/datasource", "developer/object", "developer/object_field", "developer/listview", "developer/object_filter_conditions", "developer/object_permission", "developer/object_action", "developer/object_form", "developer/app", "developer/object_workflow", "developer/reports", "developer/report_jsreport"],
    "高级开发": ["developer/steedos_config", "developer/env", "developer/objectql_connection", "developer/objectql_object", "developer/object_filter", "developer/object_trigger", "developer/object_field_formula", "developer/standard_objects"],
    "插件": ["plugins/index",  "plugins/plugin_webapp", "plugins/plugin_webapp_functions"],
    
    "API": [
      "developer/api",
      {
        "OData": ["developer/api/odata", "developer/api/odata_auth", "developer/api/odata_query", "developer/api/odata_get", "developer/api/odata_add", "developer/api/odata_edit", "developer/api/odata_delete", "developer/api/odata_functions", "developer/api/odata_metadata"],
        "GraphQL": ["developer/api/graphql", "developer/api/graphql_auth", "developer/api/graphql_query", "developer/api/graphql_add", "developer/api/graphql_edit", "developer/api/graphql_delete"],
        "高级": ["developer/api/api_jwt", "developer/api/router"]
      }]
  },
  "文档": {
    "用户手册": ["help/user", "help/download",
    {
      "流程审批": ["help/workflow/instance_add", "help/workflow/instance_approve", "help/workflow/instance_carboncopy", "help/workflow/instance_distribute", "help/workflow/instance_forward", "help/workflow/instance_print", "help/workflow/instance_search", "help/workflow/instance_monitor", "help/workflow/instance_export" ],
      "数据台账": ["help/record_list", "help/record_view", "help/record_report", "help/notifications"],  
    }
    ],
    "管理员手册": ["help/admin", 
      {
        "公司设置": ["help/organization", "help/profile", "help/permission_set", "help/permission_share"],
        "流程设置": ["help/workflow/admin_form", "help/workflow/admin_flow", "help/workflow/admin_positions", "help/workflow/admin_picturesignature"],
        "对象设置": ["help/no-code/object", "help/no-code/object_subtable", "help/no-code/object_workflows", "help/no-code/object_datasources", "help/no-code/object_web_forms"]
      }
      , "help/workflow/faq"    ]
  },
  "Steedos Help": {
    "Quick Guide": ["us/help/workflow/README", "us/help/workflow/guide_setup", "us/help/workflow/guide_user", "us/help/workflow/guide_admin", "us/help/workflow/guide_permissions", "us/help/workflow/guide_versions", "us/help/workflow/mp4", "us/help/workflow/faq"],
    "How to use Steedos Workflow": ["us/help/workflow/quickguide_user", "us/help/workflow/instance_add", "us/help/workflow/instance_approve", "us/help/workflow/instance_carboncopy", "us/help/workflow/instance_forward", "us/help/workflow/instance_retrieve", "us/help/workflow/instance_reassign", "us/help/workflow/instance_relocate", "us/help/workflow/instance_attachment", "us/help/workflow/instance_search", "us/help/workflow/instance_cancel", "us/help/workflow/instance_print", "us/help/workflow/instance_monitor", "us/help/workflow/instance_export"],
    "Settings": ["us/help/workflow/admin_space", "us/help/workflow/admin_organizations", "us/help/workflow/admin_space_users", "us/help/workflow/admin_roles" ],
    "How to design a form": ["us/help/workflow/quickguide_flow", "us/help/workflow/form_category", "us/help/workflow/form_design", "us/help/workflow/form_fields", "us/help/workflow/form_table", "us/help/workflow/form_formula", "us/help/workflow/form_name_formula", "us/help/workflow/form_scripts"],
    "How to design a flow": ["us/help/workflow/flow_design", "us/help/workflow/flow_permissions", "us/help/workflow/flow_step_approve", "us/help/workflow/flow_step_input", "us/help/workflow/flow_step_counter_sign", "us/help/workflow/flow_step_condition", "us/help/workflow/flow_step_user", "us/help/workflow/flow_step_permissions", "us/help/workflow/flow_state"]
  },
  "华炎API": {    
  },
  "华信": ["messenger/index", "messenger/download"],
  // "视频": {
  //   "华炎魔方总览": ["videos/steedos-digital-transformation", "videos/steedos-platform-features"],
  //   "低代码开发培训": ["videos/lesson-object","videos/lesson-object-relationship"]
  // }
}
