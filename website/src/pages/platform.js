import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FeaturesWide from '@site/src/components/FeaturesWide';
import FAQ from '@site/src/components/FAQ';
import Customers from '@site/src/components/Customers';
import * as Icons from '@site/src/components/HeroIcons/outline';
import Trial from '@site/src/components/Trial';

export default function Landing() {
  return (
<Layout
      title="华炎魔方低代码开发平台官网"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
>
        

<main class="flex bg-cover bg-no-repeat bg-blue-100">
  <div class="mx-auto px-4 my-12 max-w-screen-xl">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:mx-auto lg:col-span-6 lg:text-left lg:self-center">
        <div className="text-lg font-semibold uppercase tracking-wide text-gray-700 sm:text-lg xl:text-xl">
          {/* 华炎魔方 */}
        </div>
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
          赋能企业
          <br/>
          <span class="text-blue-600">打造数字驱动型组织</span>
        </h2>
        <p class="mt-3 mx-auto text-lg text-gray-700 sm:text-xl md:mt-5">
 
          华炎魔方将低代码技术与企业业务场景结合，
          助力企业在最短时间内开发数字化解决方案，
          帮助企业快速落地现有业务战略，
          以及催生未来创新。

        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="/platform/cases" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              客户案例
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="/form/trial" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              在线试用
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
</main>

{/* 
<main class="py-12 sm:py-12 bg-gray-100">
  <div class="text-center px-4 max-w-7xl mx-auto ">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
      <span class="">华炎魔方</span>
      <span class="text-green-600">开源</span>
      <span class="">低代码平台</span>
    </h1>
    <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
      基于商业智能和模型驱动，即使是不懂编程的业务人员，也能轻松便捷地创建智能化、移动化的企业应用。
    </p>
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div className="rounded-md shadow">
        <a href="http://oss.steedos.com/apps/pdfviewer/web/viewer.html?file=http://oss.steedos.com/docs/%E5%8D%8E%E7%82%8E%E9%AD%94%E6%96%B9%E6%8A%80%E6%9C%AF%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white">
          技术白皮书
        </a>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <a href="/form/trial/" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-700 bg-green-200 hover:text-green-600 hover:bg-green-300 focus:outline-none focus:shadow-outline-teal focus:border-green-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
          预约演示
        </a>
      </div>
    </div>
    <div className="relative mx-auto w-full lg:max-w-3xl mt-4">
      <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
        <Video 
            poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.jpg"
            autoplay={false}
            urls={[
                {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.mp4"},
                {name:"标清", url:"https://vod.steedos.com/ef86bfc1c9314dc086e54cc934efcf75/13d008f336514d028756488d84be7d4d-c89dc504a68a67604ae88b9690fcd8f2-ld.mp4"},
            ]}/>
      </div>
    </div>
  </div>
</main> */}


<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
      企业级低代码的核心特点
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
      助力企业数字化转型
      </p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
              可视化设计
              </p>
              <p class="mt-3 text-base text-gray-500">
              可通过图形界面（而不是传统的计算机编程）来创建业务应用程序，通过拖拽式的UI组件及可视化模型来代替一部分甚至全部的编码工作。
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
              快速构建
              </p>
              <p class="mt-3 text-base text-gray-500">
              使用大量的组件和封装的接口进行开发，使得低代码能够提升30%以上的开发效率，并大幅降低开发成本。可在短时间内搭建业务系统，快速实现企业数字化转型。
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt=""/>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
              灵活复用
              </p>
              <p class="mt-3 text-base text-gray-500">
              企业变化是不可避免的，低代码开发平台使更改应用程序以及让它们适应新要求变得非常容易。无论是简单的审批表单还是复杂的业务需求，用户都无需编写代码即可实现。
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<FeaturesWide
  title="点击鼠标、就能编程"
  description="华炎魔方使用元数据定义对象，字段，配置，代码，逻辑和页面布局，元数据可以导入到华炎魔方中，可以在可视化界面中进行修改，也可以同步到源码进行深度开发。"
  containerClass="bg-white"
  imageUrl="https://vod.steedos.com/image/cover/273D6FB669D94148889E5FE7A26A3D13-6-2.png"
  videoUrl="https://vod.steedos.com/video/40072181-177297095c2-0000-0000-009-c59e0.mp4"
  theme="green"
  items={[
    {
      icon: Icons.BadgeCheck,
      title: "数据结构", 
      description: "创建自定义对象，以存储贵组织独有的信息。"
    },
    {
      icon: Icons.Collection,
      title: "验证规则", 
      description: "验证用户在记录中输入的数据是否符合您的要求。"
    },
    {
      icon: Icons.Bell,
      title: "工作流规则", 
      description: "通过工作流，您可以自动化标准的内部流程，以节省整个组织的时间。"
    },
    {
      icon: Icons.CursorClick,
      title: "自动化操作", 
      description: "自动执行某些操作，例如更新字段或发送电子邮件。"
    },
    {
      icon: Icons.ChartSquareBar,
      title: "批准过程", 
      description: "比工作流规则更进了一步，您可以指定批准记录所需的一系列步骤。"
    },
    {
      icon: Icons.Key,
      title: "统计报表", 
      description: "帮助您分析和理解数据并及时采取行动。"
    },
    {
      icon: Icons.LightBulb,
      title: "数据权限", 
      description: "定义了一套企业级的权限模型，帮助用户锁定私有数据。"
    },
    {
      icon: Icons.Chip,
      title: "高级业务逻辑", 
      description: "使用代码实现高级业务逻辑，例如触发器、与第三方系统接口等。"
    },
  ]}
/>

<Features 
  title="5分钟创建自定义应用程序"
  description="华炎魔方内置功能强大的建模引擎，可以任意配置业务字段、列表视图、页面布局，即使是不懂编程的业务人员，也能快速创建智能化、移动化的企业应用程序。"
  imageUrl="https://vod.steedos.com/image/cover/D97E503BEA3441D7BD807AF1AC9A95B5-6-2.png"
  videoUrl="https://vod.steedos.com/ee84c21369c14f58affc3d73aad0f3aa/03dde2aadf164967884697473b985d06-2b35c89e35b0cb2abbca9b19bb09a7fd-ld.mp4"
  imagePosition="left"  
  containerClass="bg-gray-50"
  // items={[
  //   {title: "业务对象", description: "业务对象相当于数据库中的表，用于保存业务系统中的核心数据。"},
  //   {title: "列表视图", description: "通过配置列表视图，最终用户可以快捷的切换多个查询条件。"},
  //   {title: "页面布局", description: "页面布局控制了记录的显示方式，可以按照用户权限分配不同的页面布局。"},
  // ]}
/>


{/* <Features 
  title="使用公式执行自动计算"
  description="华炎魔方内置了类似Excel的公式引擎，通过引入公式，可以为您的应用程序增加业务的自动化判断、计算和处理的过程。"
  imageUrl="https://vod.steedos.com/image/cover/5ED534383E544E8E908BAF76FA7E0828-6-2.png"
  videoUrl="https://vod.steedos.com/6f072b894c4045678aa2ad2d5d42a9ae/5700fb41b78241d0bbd1d33d961a215b-be9e268baac6f6619c47773d6d7284bc-ld.mp4"
  imagePosition="right"
  containerClass="bg-white"
  // items={[
  //   {title: "引用相关表", description: "可以在定义公式，引用相关表的数据。"},
  //   {title: "计算与条件判断", description: "通过计算与条件判断函数，实现相对复杂的业务逻辑。"},
  //   {title: "累计汇总", description: "自动汇总计算子表中的相关数据。"},
  // ]}
/> */}

<Features 
  title="从一开始就让应用程序移动化"
  description="使用移动应用程序，实现业务的全面转型。 提高员工生产力，加强客户联系，帮助合作伙伴取得更大成功。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.mp4"
  containerClass="bg-gray-100"
  // items={[
  //   {title: "消息推送", description: "有新的待处理事项时，华炎魔方手机客户端会自动弹出推送提醒。"},
  //   {title: "个性化手机界面", description: "只需简单配置，就能定制你的专属手机客户端。"},
  // ]}
/>

<Features 
  title="可视化配置业务流程"
  description="涵盖了流程设计、流程运行、管理维护、统计分析与流程优化等各类工具，帮助企业快速部署、有效监控并持续优化业务流程。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.mp4"
  imagePosition="left"
  // items={[
  //   {title: "流程设计", description: "图形化流程设计工具，通过拖拽的方式就能创建业务流程。"},
  //   {title: "流程运行", description: "电脑、平板、手机三合一操作界面，随时随地处理待办文件。"},
  //   {title: "数据同步", description: "只需简单配置，就能实现审批单与业务台账双向同步。"},
  // ]}
/>

<Features 
  containerClass="bg-white"
  title="实时分析业务数据"
  description="使用华炎魔方的报表引擎，您可以快速配置统计图表，包括数据列表、分组报表、数据透视图、柱状图、饼图等，方便查看、分析和决策。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.mp4"
  imagePosition="right"
  // items={[
  //   {title: "报表设计", description: "可视化界面，业务人员可自主配置统计报表，分析业务数据。"},
  //   {title: "报表显示", description: "自动按当前用户权限过滤报表数据，动态显示业务统计结果。"},
  //   {title: "导出Excel", description: "华炎魔方中的所有数据及统计报表均可导出为Excel，以便进一步分析。"},
  // ]}
/>

<div class="bg-gray-200">
  <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      想要了解更多？
      <br/>
      在线预约我们的技术专家，为您做产品演示。
    </h2>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md shadow">
        <a href="/form/trial" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:text-white hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          预约产品演示
        </a>
      </div>
    </div>
  </div>
</div>



{/* 
<Features 
  title="支持元数据版本管理，支撑大型企业应用开发"
  description="可视化配置的元数据可以和代码中的元数据双向同步，开发人员可以使用熟悉的工具编写代码，管理版本。"
  imageUrl="https://vod.steedos.com/image/cover/936FB7A788854ED19E7CDCFBBF675A42-6-2.png"
  videoUrl="https://vod.steedos.com/15b90c474b5144059fa8853c6e6c2149/b772b095c1dc409dbb3601b171e44c33-6c8da88acd355e4122795056acd0d054-ld.mp4"
  imagePosition="left"
  containerClass="bg-gray-50"
  // items={[
  //   {title: "源码驱动开发", description: "用你熟悉和喜爱的工具（Github、VS Code 等等）进行构建。"},
  //   {title: "VS Code 插件", description: "源码高亮显示、错误提示、代码段生成、Git版本管理"},
  //   {title: "编码调试与测试", description: "和传统企业软件开发一样，编写触发器、服务端API、表单事件等代码，满足个性化需求。"},
  // ]}
/> */}

<Features 
  title="支持传统开发模式，处理复杂业务逻辑"
  description="华炎魔方提供了低代码开发的入口，开发人员通过编写代码，就能实现特定条件下的自动运行、截停、回滚等业务逻辑，让业务在无人值守的情况下自动运转，驱动效率提升。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.mp4"
  imagePosition="right"
  containerClass="bg-gray-100"
  // items={[
  //   {title: "触发器", description: "当服务端执行数据增删改查时，自动触发相关代码。"},
  //   {title: "操作按钮", description: "基本的增删改按钮的基础上，为业务对象增加自定义的操作按钮。"},
  //   {title: "服务端API", description: "自定义服务端API，编写微服务，实现自动化的业务处理。"},
  // ]}
/>



<Customers/>

<Trial/>

</Layout>
  );
}
