
module.exports = 
{
  "关于华炎": ["company/about-us", "company/customers", "company/contact-us"],
  "集团管控":["solutions/group","solutions/group/features","solutions/group/scenario","solutions/group/case"],
  "Steedos Workflow": ["us", "us/training", "us/price", "us/download"],
  "华炎费控": ["solutions/cost","solutions/cost/project","solutions/cost/costcases"],
  // "华炎合同": ["products/contract","products/contract/features","products/contract/opensource", "products/contract/case"],
  // "销售管理":{
  //   "销售管理": ["solutions/sales/home","solutions/sales/reason"],
  //   "功能": ["solutions/sales/contacts","solutions/sales/business","solutions/sales/clue","solutions/sales/mobile","solutions/sales/im","solutions/sales/mobile_office","solutions/sales/libraries","solutions/sales/report","solutions/sales/forecast"],
  //   "按角色": ["solutions/sales/role_professional","solutions/sales/role_supervisor","solutions/sales/role_operate","solutions/sales/role_manager","solutions/sales/role_expert","solutions/sales/role_service","solutions/sales/role_FAQ"]
  // },
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
      "developer/steedos_server"
    ],
    "开发教程": ["developer/guide_create", "developer/guide_object","developer/guide_relationship","developer/guide_trigger","developer/guide_button","developer/guide_report","developer/guide_flow","developer/guide_sync","developer/guide_companies","developer/guide_nc"],
    "开发文档": [
      "developer/datasource", "developer/object", 
      {
        "字段": ["developer/object_field", "developer/complex_field", "developer/inline_field"]
      },
      "developer/listview", "developer/object_filter_conditions", "developer/object_permission", "developer/object_action", "developer/object_form", "developer/app", "developer/object_workflow", "developer/reports", "developer/report_jsreport"
    ],
    "高级开发": ["developer/steedos_config", "developer/env", "developer/objectql_connection", "developer/objectql_object", "developer/object_filter", "developer/object_trigger", "developer/standard_objects"],
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
    "快速向导": ["help/about", {
      "服务端安装部署": ["help/deploy", "help/deploy/steedos-config"],
      "客户端": ["help/clients/desktop", "help/clients/mobile", "help/clients/wecom"]
    }],
    "使用入门": ["help/user", "help/login", "help/interface",{
      "管理您的数据": ["help/record_search", "help/record_view", "help/record_list", "help/record_edit"],
    }, "help/record_report",{
      // "数据台账": ["help/record_list", "help/record_view", "help/record_report", "help/notifications"],  
    }],
    "设置和维护华炎魔方": ["help/admin", 
      {
        "公司设置": ["help/company/organization", "help/company/profile", "help/company/permission_set", "help/company/permission_share", "help/workflow/admin_positions","help/company/license"],
        "自定义应用": ["help/no-code/object", "help/no-code/object_subtable"],
        "通过公式计算字段值": [
          "help/formula/summary",
          "help/formula/create", 
          "help/formula/tip", 
          "help/formula/summary_field",
          "help/formula/date",{
            "运算符和函数": ["help/formula/functions", "help/formula/operator_math", "help/formula/operator_logical", "help/formula/operator_text", "help/formula/function_date", "help/formula/function_logical", "help/formula/function_math", "help/formula/function_text", "help/formula/function_advanced"],
          }, 
          "help/formula/best_practices"//, "help/formula/examples"
        ],
        "通过验证规则校验字段值": [
          "help/validation_rules/summary",
          "help/validation_rules/notes", 
          "help/validation_rules/examples"
        ],
        "自动执行业务流程": [
          "help/auto_process/summary",{
          "工作流": ["help/auto_workflow/summary", "help/auto_workflow/create", "help/auto_workflow/examples"],
          "批准过程": ["help/approval/summary", "help/approval/create", "help/approval/examples", "help/approval/request"],
          "自动操作": ["help/auto_actions/summary", "help/auto_actions/field_update"]
        }],
        "打印模板": [
          "help/word_template/summary",
          "help/word_template/create", 
          "help/word_template/graphql",
          "help/word_template/script",
          "help/word_template/examples"],
        "系统集成": ["help/no-code/object_datasources", "help/no-code/object_web_forms"]
      }
    ]
  },
  "审批王": {
     "使用入门": [
        "help/workflow",
        "help/workflow/instance_add", 
        "help/workflow/instance_approve", 
        "help/workflow/instance_carboncopy", 
        "help/workflow/instance_distribute", 
        "help/workflow/instance_forward", 
        "help/workflow/instance_print", 
        "help/workflow/instance_search", 
        "help/workflow/instance_monitor", 
        "help/workflow/instance_export"],
     "设置和维护审批王": [
        "help/workflow/admin",
        "help/workflow/admin_form", 
        "help/workflow/admin_flow", 
        "help/no-code/object_workflows",
        "help/workflow/admin_picturesignature", 
        "help/workflow/faq"]
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
  // "报价": {
  //   "报价": ["pricing/platform"],
  // },
  // "应用市场": {
  //   "应用市场": [
  //     "appstore", 
  //     { 
  //       "标准应用": [
  //         "appstore/labs/contract",
  //         "appstore/labs/sales",
  //         "appstore/labs/purchase",
  //         "appstore/labs/cost",
  //         "appstore/labs/workflow",
  //       ],
  //     }
  //   ],
  // },
  "华炎魔方": {
    "华炎魔方": [
      "platform", 
      {
        "type": "link",
        "href": "http://oss.steedos.com/apps/pdfviewer/web/viewer.html?file=http://oss.steedos.com/docs/%E5%8D%8E%E7%82%8E%E9%AD%94%E6%96%B9%E6%8A%80%E6%9C%AF%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf",
        "label": "如何选择低代码平台？"
      },
      // "videos",
      "platform/cases", 
      "pricing/platform", 
      {
        "type": "link",
        "href": "/form/trial",
        "label": "试用"
      },
    ]
  }
}
