import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FeaturesWide from '@site/src/components/FeaturesWide';
import FAQ from '@site/src/components/FAQ';
import Customers from '@site/src/components/Customers';
import * as Icons from '@site/src/components/HeroIcons/outline';

export default function Landing() {
  return (
<Layout
      title="华炎魔方,华炎办公,审批王,低代码,零代码,快速开发工具,企业PaaS平台"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
>
        
<section className="flex bg-cover bg-no-repeat bg-blue-200">
  <div className="mx-auto max-w-screen-xl px-4 my-12">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div className="text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base lg:text-sm xl:text-base">
          新一代低代码开发平台
        </div>
        <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
          华炎魔方
          <br className="hidden md:inline"/>
          <span className="text-blue-700">助力企业数字化转型</span>
        </h2>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          华炎魔方特有的敏捷性、灵活性和开放性，帮助业务加速创新，提升竞争力.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="http://oss.steedos.com/apps/pdfviewer/web/viewer.html?file=http://oss.steedos.com/docs/%E5%8D%8E%E7%82%8E%E9%AD%94%E6%96%B9%E6%8A%80%E6%9C%AF%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white">
              技术白皮书
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/form/trial/" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-teal focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              预约演示
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div className="relative mx-auto w-full lg:max-w-md">
          <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
            <Video 
              poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.jpg"
              autoplay={false}
              urls={[
                  {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.mp4"},
              ]}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<FeaturesWide 
  title="全新低代码开发方式，为你的企业提供可扩展的协作及管理工具"
  description="华炎魔方是一款可随企业发展而扩展的业务管理软件，可以帮助企业加强对自身的管控。借助该软件，企业能够简化关键流程，更深入地洞悉企业运营状况，并基于实时信息制定决策，最终推动盈利性增长。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.mp4"
  containerClass="bg-gray-50"
  theme="blue"
  items={[
    {
      icon: Icons.InboxIn,
      title: (<a href="/products/workflow" target="_blank">流程</a>), 
      description: "帮助用户基于企业业务模式和管理模式，自行定义所需要的各种流程应用，快速构建企业自身的流程管控体系，同时也为建设企业整体协同平台夯实基础。"
    },
    {
      icon: Icons.Gift,
      title: (<a href="/products/sales" target="_blank">销售</a>), 
      description: "您的销售团队能够借助一系列销售工具，以前所未有的方式完成交易。这些工具可提高工作效率，为销售漏斗填充可靠的销售线索，并提高销售成功率。"
    },
    {
      icon: Icons.ShoppingCart,
      title: (<a href="/products/purchase" target="_blank">采购</a>),
      description: "集中采购管理平台构建起从供应商的认证、采购需求、采购计划、采购招投标、签署合同、采购订单到供应商对账付款的全程电子化采购管理体系。"
    },
    {
      icon: Icons.DocumentText,
      title: (<a href="/products/contract" target="_blank">合同</a>),
      description: "涵盖合同订立、执行、跟踪、变更、验收、付款、监督、统计的整个管理过程，并打通了合同管理系统与财务管理系统的数据与流程联动，实现企业合同的全闭环、自动化、一体化管理。"
    },
    {
      icon: Icons.CurrencyYen,
      title: (<a href="/products/cost" target="_blank">费控</a>),
      description: "建立全面融合的费控管理体系，从全流程驱动到全面的集成功能，将多管控方案融合，达到预算与费用一体化的目的，华炎魔方提供核心的费控解决方案。"
    },
    {
      href: "/platform",
      icon: Icons.ViewGrid,
      title: (<a href="/platform" target="_blank">自定义应用</a>),
      description: "华炎魔方是新一代低代码开发平台，基于商业智能和模型驱动，业务部门可以根据实际需求，轻松便捷的创建智能化、移动化、个性化的应用程序。"
    },
  ]}
/>



<FeaturesWide 
  title="快速部署、有效监控并持续优化各类业务流程"
  description="审批王广泛应用于企业内部员工（决策层/管理层/执行层）及外部用户（客户/供应商/经销商）的各类工作场景。通过工作流程管理的有效实施，可以帮助企业提升效率、规范管理。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.mp4"  
  theme="indigo"
  containerClass="bg-white"
  items={[
    {
      icon: Icons.CurrencyYen,
      title: "财务管理", 
      description: "外出/出差/报销申请、费控管理、预算管理、固定资产管理、发票管理、付款管理、资金管理"},
    {
      icon: Icons.Gift,
      title: "销售管理", 
      description: "客户主数据管理、产品主数据管理、商品促销方案审定、报价管理、销售订单管理、合同管理、报价管理、市场费用管理"},
    {
      icon: Icons.ShoppingCart,
      title: "采购管理", 
      description: "供应商主数据管理、采购计划管理、供应商认证和评估管理、采购订单管理、采购付款管理、采购验收"},
    {
      icon: Icons.UserGroup,
      title: "人事管理", 
      description: "招聘申请、新员工入职、培训申请、转正申请、加班申请、请假申请、岗位异动申请、离职申请"},
    {
      icon: Icons.OfficeBuilding,
      title: "行政管理", 
      description: "公文管理、资产管理、会议管理、车辆管理、客户接待、礼品管理、名片申请、证照管理"},
    {
      icon: Icons.DesktopComputer,
      title: "信息管理", 
      description: "IT桌面支持服务、网络资源管理、IT故障管理、系统账号管理、IT应用开发管理"},
    {
      icon: Icons.LightBulb,
      title: "质量管理", 
      description: "用户质量申诉、纠正预防措施、原材料检验、不合格品处理、退货处理"},
    {
      icon: Icons.EmojiHappy,
      title: "客户服务", 
      description: "客户投诉管理、客户技术支持管理、客户服务质量跟踪管理"},
  ]}
/>
{/* 
<FeaturesWide
  header=""
  title="合同管理"
  description="利用安全的电子存储和搜索工具，你可以按需访问合同，随时跟踪合同动态。此外，你可以使用预先批准的模板和法规条款，快速、轻松地创建合同。"
  containerClass="bg-gray-50"
  theme="green"
  items={[
    {
      icon: Icons.BadgeCheck,
      title: "规范和控制合同审批流程", 
      description: "华炎魔方内置专业的流程引擎，对于合同管理中的各种事项，只需简单配置，就能实现电子化审批。"
    },
    {
      icon: Icons.Collection,
      title: "合同范本管理", 
      description: "在一个中央数据库中集中维护整个企业的标准条款、合同模板和政策规则。"
    },
    {
      icon: Icons.Bell,
      title: "及时续约", 
      description: "你可以在供应商合同的重要里程碑日期之前收到通知，充分把握业务机会。"
    },
    {
      icon: Icons.CursorClick,
      title: "支持电子签名，节约成本", 
      description: "通过添加电子签名功能，你可以省去邮寄和签署多份合同副本的步骤，节约时间和成本。"
    },
    {
      icon: Icons.ChartSquareBar,
      title: "全面可视性", 
      description: "利用自动警报、便捷的仪表盘和可配置报告，你可以在整个合同周期及时了解合同动态。"
    },
    {
      icon: Icons.Key,
      title: "更出色的合规性", 
      description: "借助华炎合同管理解决方案，你可以实施严格控制的流程、自动追踪和全面的审计跟踪，及时了解合同外活动，进而强化合规活动。"
    },
    {
      icon: Icons.LightBulb,
      title: "自动化通知", 
      description: "如果预先批准的合同范本或合同条款发生改变，你将立即收到警报。这项功能可以帮助你控制非标准协议。"
    },
    {
      icon: Icons.Chip,
      title: "系统集成", 
      description: "通过将合同流程与其他华炎魔方解决方案、你的 ERP 系统或其他第三方系统集成，你可以最大限度地提高合同合规性和控制力"
    },
  ]}
/>

<FeaturesWide 
  title="费控管理"
  description="华炎费控管理解决方案，从全流程驱动到全面的集成功能，将多管控方案融合，达到预算与费用一体化的目的。系统基于商业智能和模型驱动，兼具敏捷性、灵活性和开放性，可以根据业务需求随心调整、无缝迭代，帮助业务加速创新，提升竞争力。"
  containerClass="bg-gray-100"
  theme="teal"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-object-manager.jpg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-object-manager.mp4"
  items={[
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="user-add w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>),
      title: "财务报账", 
      description: "日常报销、差旅报销、营销业务、培训会务、借支付款等"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="eye w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
      title: "费用执行控制", 
      description: "预算控制、事前控制、超额控制、审批控制、预警提醒等、"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="home w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
      title: "财务定额标准", 
      description: "标准管理、城市标准、职级标准、住宿标准、更多标准等"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="document-duplicate w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>),
      title: "费用预算管理", 
      description: "预算编审、控制方案、预算调整、预实对比、多维分析、"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="lock-closed w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
      title: "业务应用集成", 
      description: "财务核算接口、资金支付接口、商旅出行接口、影像档案接口、全面预算接口"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="switch-horizontal w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>),
      title: "业务扩展实现", 
      description: "采购至付款、销售至收款、资产与资金、总账与报表、票据与档案"
    },
  ]}
/>

<FeaturesWide 
  title="销售管理"
  description="您的销售团队能够借助一系列销售工具，以前所未有的方式完成交易。这些工具可提高工作效率，为销售漏斗填充可靠的销售线索，并提高销售成功率。"
  containerClass="bg-white"
  theme="blue"  
  items={[
    {
      icon: Icons.Identification,
      title: "360˚客户画像", 
      description: "为每个客户建立专属的客户档案，商机、历史成交、跟进记录、信用账户等清晰可见，通过智能客户分级，实现精细化运营。"
    },
    {
      icon: Icons.AcademicCap,
      title: "商机管理", 
      description: "通过流程引擎，定义企业标准的商机跟进阶段及动作，规范销售行为，缩短销售周期，提升商机赢率。"
    },
    {
      icon: Icons.Filter,
      title: "销售预测与销售漏斗", 
      description: "历史数据综合分析，智能评估商机赢率，帮助企业管理者清晰了解每一个商机成交可能性，精准预测销售业绩。"
    },
    {
      icon: Icons.Cube,
      title: "产品管理", 
      description: "产品支持SPU和SKU多规格管理，深度支持复杂商品模式，灵活应对业务需求。"
    },
    {
      icon: Icons.ShoppingCart,
      title: "订单管理", 
      description: "支持APP、H5多端移动订货，实时下单，自主设定订单审核流程，保证订单数据有效、准确。"
    },
    {
      icon: Icons.CurrencyYen,
      title: "回款管理", 
      description: "支持分期计划回款，清晰记录回款及账期，规范管理企业的现金流和应收账款，保障业绩准确、真实、有效"
    },
    {
      icon: Icons.ThumbUp,
      title: "目标与绩效管理", 
      description: "定制目标考核的维度、指标，首页预置目标达成进度，可实时调整，确保目标高效达成。"
    },
    {
      icon: Icons.Mail,
      title: "邮件管理", 
      description: "自动记录纷享邮箱中所有员工与客户的往来邮件，留存每一次触达客户的重要业务数据。"
    },
  ]}
/>


<FeaturesWide 
  title="采购管理"
  description="不论您是想端到端地完善整个采购到结算流程，还是只想完善其中某些环节，华炎魔方采购管理解决方案都能帮助您在采购流程中加强对成本和风险的控制。"
  containerClass="bg-gray-50"
  theme="indigo"
  items={[
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="user-add w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>),
      title: "供应商管理", 
      description: "一站式管理供应商信息、生命周期、绩效和风险的端到端解决方案产品组合，并且能够与其他采购流程相集成。"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="eye w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
      title: "采购管理", 
      description: "你可以高效管理从寻源到结算的整个采购流程，同时有效控制采购支出，找到新的省钱之道，并打造健康的供应链。"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="home w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>),
      title: "供应商门户", 
      description: "实现采购信息公开，一站式展现所有采购需求；提供在线报价、投标、签署合同，对账单、历史订单查询等功能，工作打通，协同一体。"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="document-duplicate w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>),
      title: "采购招标", 
      description: "实现从采购需求，采购计划，招投标申请，询比价，到合同签署，全流程化驱动，通过流程驱动制度落地，使得采购过程更规范、更透明。"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="lock-closed w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>),
      title: "印控中心", 
      description: "实现采购招标文件、投标文件、询报价文件、合同、采购订单、对账单、收发货等文件的电子化签署 ，是全过程电子化，实现采购全程无纸化。"
    },
    {
      icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="switch-horizontal w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>),
      title: "系统集成", 
      description: "对接办公系统，实现单点登录；对接ERP订单管理，实现采购协议与订单一体化；对接财务，实现采购的付款申请一体化。"
    },
  ]}
/> */}

<div class="bg-gray-200">
  <div class="max-w-screen-xl mx-auto text-center py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      开放源码、随心定制
    </h2>
    <p class="mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
      华炎协同办公解决方案基于低代码技术、完全开源。可以根据业务需求随心调整、无缝迭代，帮助业务加速创新，提升竞争力。
    </p>
      <div class="mt-8 flex flex justify-center justify-start">
        <div class="rounded-md shadow">
          <a href="https://github.com/steedos/steedos-project-oa" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            查看源码
          </a>
        </div>
        <div class="ml-3 rounded-md shadow">
          <a href="/form/trial" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
            预约产品演示
          </a>
        </div>
      </div>
  </div>
</div>

<Features 
  title="只需数次点击，即可构建应用程序"
  description="华炎魔方基于模型驱动，可以任意配置业务字段、列表视图、页面布局，即使是不懂编程的业务人员，也能快速定制。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.mp4"
  imagePosition="left"
  containerClass="bg-gray-50"
  theme="blue"
  items={[
    {title: "业务对象", description: "业务对象相当于数据库中的表，用于保存业务系统中的核心数据。"},
    {title: "列表视图", description: "通过配置列表视图，最终用户可以快捷的切换多个查询条件。"},
    {title: "页面布局", description: "页面布局控制了记录的显示方式，可以按照用户权限分配不同的页面布局。"},
  ]}
/>

<Features 
  title="图形化流程设计工具"
  description="华炎魔方内置了流程设计、管理维护、统计分析与流程优化等各类工具，帮助企业快速部署、有效监控并持续优化业务流程。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.jpg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.mp4"
  imagePosition="right"
  theme="blue"
  items={[
    {title: "流程设计", description: "图形化流程设计工具，通过拖拽的方式就能创建业务流程。"},
    {title: "效率统计", description: "系统会实时监控用户的审批效率数据，并进行效率分析、生成效率报表。"},
    {title: "数据同步", description: "只需简单配置，就能实现审批单与业务台账双向同步。"},
  ]}
/>


<Features 
  title="为业务定制个性化的统计报表"
  description="使用华炎魔方的报表引擎，您可以快速配置统计图表，包括数据列表、分组报表、数据透视图、柱状图、饼图等，方便查看、分析和决策。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.mp4"
  imagePosition="left"
  containerClass="bg-gray-50"
  theme="blue"
  items={[
    {title: "报表设计", description: "可视化界面，业务人员可自主配置统计报表，分析业务数据。"},
    {title: "报表显示", description: "自动按当前用户权限过滤报表数据，动态显示业务统计结果。"},
    {title: "导出Excel", description: "华炎魔方中的所有数据及统计报表均可导出为Excel，以便进一步分析。"},
  ]}
/>

<Features 
  title="PC、移动一体化"
  description="华炎办公的各项功能，包括对流程发起、审批和监控都可以扩展到移动端，即时领导出差，一部手机，即可实现随时随地管理合同、使用签章、监控执行、预警风险。签署更高效，管理更便捷。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.mp4"
  imagePosition="right"
  theme="blue"
  items={[
    {title: "消息推送", description: "有新的待处理事项时，华炎魔方手机客户端会自动弹出推送提醒。"},
    {title: "个性化手机界面", description: "只需简单配置，就能定制你的专属手机客户端。"},
  ]}
/>



<Customers/>

<FAQ/>

</Layout>
  );
}
