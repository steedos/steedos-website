import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FAQ from '@site/src/components/FAQ';

export default function Landing() {
  return (
<Layout
      title="华炎魔方低代码开发平台官网"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
      >
<section className="flex bg-cover bg-no-repeat bg-teal-200">
  <div className="mx-auto max-w-screen-xl px-4 my-12">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div className="text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base lg:text-sm xl:text-base">
          新一代低代码开发平台
        </div>
        <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
          华炎魔方
          <br className="hidden md:inline"/>
          <span className="text-teal-700">助力企业数字化转型</span>
        </h2>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          华炎魔方特有的敏捷性、灵活性和开放性，帮助业务加速创新，提升竞争力.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="/videos/steedos-platform-features/" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white">
              视频演示
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/form/trial/" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
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
</section>

<div className="py-16 bg-gray-50 overflow-hidden bg-gray-100">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>

    <div className="relative">
      <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      全新低代码开发方式，代码量减少90%，开发效率提升十倍
      </h3>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
      华炎魔方基于商业智能和模型驱动，只需编写少量代码，就能轻松便捷地创建智能化、移动化的企业应用。
      </p>

      <div className="relative mx-auto w-full lg:max-w-md mt-4">
        <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
          <Video 
            poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.jpeg"
            autoplay={false}
            urls={[
                {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.mp4"},
            ]}/>
        </div>
      </div>
      {/* <a href="/videos/steedos-platform-features/" className="w-full flex items-center justify-center px-8 py-8 border border-transparent text-base leading-6 font-medium rounded-md text-teal-500 hover:text-teal-700 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
        <svg className="h-10 w-10 mx-4" fill="currentColor" viewBox="0 0 84 84">
          <circle opacity="0.9" cx="42" cy="42" r="42" fill="#EFEFEF" />
          <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
        </svg>
        查看华炎魔方解决方案概览
      </a> */}
    </div>

    </div>
</div>

<Features 
  title="数据建模"
  description="华炎魔方内置功能强大的建模引擎，可以任意配置业务字段、列表视图、页面布局，即使是不懂编程的业务人员，也能快速创建智能化、移动化的企业应用程序。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.mp4"
  imagePosition="left"
  items={[
    {title: "业务对象", description: "业务对象相当于数据库中的表，用于保存业务系统中的核心数据。"},
    {title: "列表视图", description: "通过配置列表视图，最终用户可以快捷的切换多个查询条件。"},
    {title: "页面布局", description: "页面布局控制了记录的显示方式，可以按照用户权限分配不同的页面布局。"},
  ]}
/>

<Features 
  title="模型驱动界面"
  description="数据建模完成之后，业务系统的原型也就自动生成了。华炎魔方根据业务模型，动态生成业务系统的后端服务接口和前端操作界面。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-ui.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-ui.mp4"
  items={[
    {title: "列表视图", description: "在列表视图中浏览、筛选、编辑业务数据。"},
    {title: "记录查看视图", description: "显示当前记录详细信息，以及相关的子表数据。"},
  ]}
/>

<Features 
  title="低代码开发业务逻辑"
  description="华炎魔方提供了低代码开发的入口，开发人员通过编写代码，就能实现特定条件下的自动运行、截停、回滚等业务逻辑，让业务在无人值守的情况下自动运转，驱动效率提升。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.mp4"
  imagePosition="left"
  containerClass="bg-gray-100"
  items={[
    {title: "触发器", description: "当服务端执行数据增删改查时，自动触发相关代码。"},
    {title: "操作按钮", description: "基本的增删改按钮的基础上，为业务对象增加自定义的操作按钮。"},
    {title: "服务端API", description: "自定义服务端API，编写微服务，实现自动化的业务处理。"},
  ]}
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


<Features 
  title="从一开始就让应用程序移动化"
  description="使用移动应用程序，实现业务的全面转型。 提高员工生产力，加强客户联系，帮助合作伙伴取得更大成功。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.mp4"
  containerClass="bg-gray-100"
  items={[
    {title: "消息推送", description: "有新的待处理事项时，华炎魔方手机客户端会自动弹出推送提醒。"},
    {title: "个性化手机界面", description: "只需简单配置，就能定制你的专属手机客户端。"},
  ]}
/>

<Features 
  title="流程引擎"
  description="涵盖了流程设计、流程运行、管理维护、统计分析与流程优化等各类工具，帮助企业快速部署、有效监控并持续优化业务流程。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.mp4"
  imagePosition="left"
  items={[
    {title: "流程设计", description: "图形化流程设计工具，通过拖拽的方式就能创建业务流程。"},
    {title: "流程运行", description: "电脑、平板、手机三合一操作界面，随时随地处理待办文件。"},
    {title: "数据同步", description: "只需简单配置，就能实现审批单与业务台账双向同步。"},
  ]}
/>

<Features 
  title="报表引擎"
  description="使用华炎魔方的报表引擎，您可以快速配置统计图表，包括数据列表、分组报表、数据透视图、柱状图、饼图等，方便查看、分析和决策。"
  imageUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.jpeg"
  videoUrl="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.mp4"
  imagePosition="right"
  items={[
    {title: "报表设计", description: "可视化界面，业务人员可自主配置统计报表，分析业务数据。"},
    {title: "报表显示", description: "自动按当前用户权限过滤报表数据，动态显示业务统计结果。"},
    {title: "导出Excel", description: "华炎魔方中的所有数据及统计报表均可导出为Excel，以便进一步分析。"},
  ]}
/>

<div className="py-12 bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">案例分享</p>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        了解华炎魔方如何帮助业务加速创新
      </h3>
      <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        每一天，有超过 15 万人在使用我们全球首屈一指的华炎魔方构建的解决方案，并且他们正不断提升员工工作效率、改进团队协作能力、增强客户忠诚度并扩展业务规模。
      </p>
      <div className="max-w-xl mt-6 relative mx-auto w-full lg:max-w-md mt-4">
        <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
          <Video 
            poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/cases.jpeg"
            autoplay={false}
            urls={[
                {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/cases.mp4"},
            ]}/>
        </div>
      </div>
    </div>
  </div>
</div>

<FAQ/>

</Layout>
  );
}
