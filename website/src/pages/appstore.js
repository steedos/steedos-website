import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FeaturesWide from '@site/src/components/FeaturesWide';
import FAQ from '@site/src/components/FAQ';
import Customers from '@site/src/components/Customers';
import * as Icons from '@site/src/components/HeroIcons/outline';
import Hero from '@site/src/components/Hero';

export default function Landing() {
  return (
<Layout
      title="解决方案"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
>
  
<Hero 
  title="解决方案" 
  description="华炎魔方使用元数据定义数据结构、界面和业务逻辑。基于华炎魔方开发的低代码应用，可以轻松定制。"
  items={[
    {
      icon: Icons.Cube,
      title: "合同管理", 
      description: "通过合同、收款、付款，管理合同的整个生命周期。",
      href: "/appstore/labs/contract",
    },
    {
      icon: Icons.Cube,
      title: "销售管理", 
      description: "通过客户、潜在客户、业务机会等管理销售流程。",
      href: "/appstore/labs/sales",
    },
    {
      icon: Icons.Cube,
      title: "采购管理", 
      description: "高效管理从寻源到结算的整个采购流程。",
      href: "/appstore/labs/purchase",
    },
    {
      icon: Icons.Cube,
      title: "费控管理", 
      description: "将多管控方案融合，达到预算与费用一体化的目的。",
      href: "/appstore/labs/cost",
    },
    {
      icon: Icons.Cube,
      title: "项目管理", 
      description: "通过项目、任务、里程碑，管理项目的整理生命周期。",
      href: "/appstore/labs/project",
    },
    {
      icon: Icons.Cube,
      title: "流程审批", 
      description: "快速部署、有效监控并持续优化各类业务流程。",
      href: "/appstore/labs/workflow",
    },
    {
      icon: Icons.Cube,
      title: "OKR 目标管理", 
      description: "帮助企业统一全体目标，激发员工积极性。",
      href: "/appstore/labs/okr",
    },
  ]}
/>


</Layout>
  );
}
