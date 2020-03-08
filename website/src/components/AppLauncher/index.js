import React from 'react';

import {AppLauncher, AppLauncherLink, AppLauncherTile, 
    AppLauncherExpandableSection, Button, Icon} from '@salesforce/design-system-react'; 

class SteedosAppLauncher extends React.Component {

	render() {
        
		const headerButton = <Button label="App Exchange" />;

		return (
						<div class="slds-app-launcher-container">
							<AppLauncherExpandableSection title="华炎应用" nonCollapsible={true}>
								<AppLauncherTile
									description="SAAS 云端企业管理软件"
                                    title="华炎云"
                                    href="/docs/products/home"
                                    iconNode={<Icon
                                        assistiveText=""
                                        category="standard"
                                        name="apps"
                                        size="large"
                                    />}
								/>
                                <AppLauncherTile
                                    description="BPM 业务流程管理工具"
                                    title="审批王"
                                    href="/docs/workflow/home"
                                    iconNode={<Icon
                                        assistiveText=""
                                        category="standard"
                                        name="lead_list"
                                        size="large"
                                    />}
                                />
                                <AppLauncherTile
                                    description="私有云即时通讯解决方案"
                                    title="即时通讯"
                                    href="/docs/products/messenger"
                                    iconNode={<Icon
                                        assistiveText=""
                                        category="standard"
                                        name="messaging_conversation"
                                        size="large"
                                    />}
                                />
                                <AppLauncherTile
                                    description="低代码，极速构建企业应用"
                                    title="开发平台"
                                    href="/docs/platform/home"
                                    iconNode={<Icon
                                        assistiveText=""
                                        category="standard"
                                        name="system_and_global_variable"
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