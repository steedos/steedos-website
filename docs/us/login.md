---
title: Login to Steedos
---

Please select a region. The data in each region is completely independent.

import {Icon, Card} from '@salesforce/design-system-react';

<Card
    heading="Global Region"
    bodyClassName="slds-card__body slds-card__body_inner"
    icon={<Icon category="standard" name="channel_programs" size="small" />}
    footer={<a href="https://us.steedos.com">Login to Global Region</a>}
>
    Global Server located at AWS.
</Card>

<Card
    heading="China Region"
    bodyClassName="slds-card__body slds-card__body_inner"
    icon={<Icon category="standard" name="channel_programs" size="small" />}
    footer={<a href="https://cn.steedos.com">Login to China Region</a>}
>
    China Server located at Aliyun, Faster access within China.
</Card>
