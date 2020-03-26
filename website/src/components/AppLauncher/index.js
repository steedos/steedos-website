import React from 'react';

import {AppLauncher, AppLauncherLink, AppLauncherTile, 
	AppLauncherExpandableSection, Button, Icon} from '@salesforce/design-system-react'; 

class SteedosAppLauncher extends React.Component {

	render() {
		
		const headerButton = <Button label="App Exchange" />;

		return (
						<div className="slds-app-launcher-container">
							<AppLauncherExpandableSection title="华炎产品" nonCollapsible={true}>
								<AppLauncherTile
									description="BPM 业务流程管理工具"
									title="流程审批"
									href="/workflow/"
									iconNode={<Icon
										category="standard"
										name="lead_list"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="PAAS 企业应用开发平台"
									title="开发平台"
									href="/platform/"
									iconNode={<Icon
										category="standard"
										name="system_and_global_variable"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="合同审批、合同台账、统计分析"
									title="合同管理"
									href="/solutions/contract/"
									iconNode={<Icon
										category="standard"
										name="contract_line_item"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="通过更好的销售体验促进销量增长。"
									title="销售管理"
									iconNode={<Icon
										category="standard"
										name="opportunity"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="管理供应商信息、生命周期、绩效和风险。"
									title="供应商管理"
									iconNode={<Icon
										category="standard"
										name="account"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="私有云即时通讯解决方案"
									title="即时通讯"
									href="/products/messenger"
									iconNode={<Icon
										category="standard"
										name="messaging_conversation"
										size="large"
									/>}
								/>
							</AppLauncherExpandableSection>
							<AppLauncherExpandableSection title="解决方案" nonCollapsible={true}>
								<AppLauncherTile
									description="构建集团集权与分权的管理平台"
									title="集团管控"
									href="/solutions/group/home"
									iconNode={<Icon
										category="standard"
										name="hierarchy"
										size="large"
									/>}
								/>
								<AppLauncherTile
									description="提供高质量财务管理解决方案"
									title="费控管理"
									href="/solutions/cost/home"
									iconNode={<Icon
										category="standard"
										name="partner_marketing_budget"
										size="large"
									/>}
								/>
							</AppLauncherExpandableSection>
							{/* <hr />
							<AppLauncherExpandableSection title="All Items">
								<AppLauncherLink>
									Contacts
								</AppLauncherLink>
							</AppLauncherExpandableSection> */}
						</div>
		);
	}
}

export default SteedosAppLauncher;