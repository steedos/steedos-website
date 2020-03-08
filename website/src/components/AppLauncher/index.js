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
									description="华炎云是深受公司员工喜爱的云端企业管理软件。"
                                    title="华炎办公"
                                    href="/docs/products/home"
                                    iconNode={<Icon
                                        assistiveText=""
                                        category="standard"
                                        name="customers"
                                        size="large"
                                    />}
								/>
                                <AppLauncherTile
                                    description="审批王是企业级的在线审批系统。"
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
                                    description="华炎应用引擎是配置式的应用开发平台"
                                    title="应用引擎"
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