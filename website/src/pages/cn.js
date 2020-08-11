import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';

export default function Landing() {
  return (
<Layout
      title="华炎魔方,华炎办公,审批王,低代码,零代码,快速开发工具,企业PaaS平台"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      permalink="/">
<section class="flex bg-cover bg-no-repeat bg-blue-200">
  <div class="mx-auto max-w-screen-xl px-4 my-12">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">
      <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <div class="text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base lg:text-sm xl:text-base">
          新一代低代码开发平台
        </div>
        <h2 class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
          华炎魔方
          <br class="hidden md:inline"/>
          <span class="text-blue-700">助力企业数字化转型</span>
        </h2>
        <p class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          华炎魔方特有的敏捷性、灵活性和开放性，帮助业务加速创新，提升竞争力.
        </p>

        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a href="/videos/steedos-platform-features/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white">
              视频演示
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="/developer/guide/" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              开发教程
            </a>
          </div>
        </div>
      </div>
      <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div class="relative mx-auto w-full lg:max-w-md">
          <div class="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
            <Video 
              poster="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-guide.jpg"
              autoplay={false}
              urls={[
                  {name:"高清", url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-guide.mp4"},
              ]}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="py-16 bg-gray-50 overflow-hidden">
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg>

    <div class="relative">
      <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      新一代低代码开发平台，代码量减少90%，开发效率提升十倍
      </h3>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
      华炎魔方基于商业智能和模型驱动，开发人员只需编写少量代码，就能轻松便捷地创建智能化、移动化的个性化应用。
      </p>
    </div>

    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div class="relative">
        <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          零代码构建业务模型
        </h4>
        <p class="mt-3 text-lg leading-7 text-gray-500">
        华炎魔方内置功能强大的建模引擎，可以任意配置业务字段、列表视图、页面布局，即使是不懂编程的业务人员，也能快速创建智能化、移动化的企业应用程序。
        </p>

        <ul class="mt-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">数据建模</h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                可视化界面配置业务数据表、字段，短短几天就能搭建项目原型 1.0 
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-medium text-gray-900">无缝迭代</h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                与业务部门沟通项目原型，不断完善业务字段和页面布局，配置业务权限、审批流程和统计报表，实现项目原型 2.0
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-10 -mx-4 relative lg:mt-0">
        <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
      <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
        <div class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
          <Video 
              poster="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-manager.jpg"
              autoplay={false}
              urls={[
                  {name:"高清", url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-manager.mp4"},
              ]}/>
        </div>
      </div>

      </div>
    </div>

    <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg>

    <div class="relative mt-12 sm:mt-16 lg:mt-24">
      <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="lg:col-start-2">
          <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          低代码开发业务逻辑
          </h4>
          <p class="mt-3 text-lg leading-7 text-gray-500">
          华炎魔方提供了低代码开发的入口，开发人员通过编写代码，就能实现特定条件下的自动运行、截停、回滚等业务逻辑，让业务在无人值守的情况下自动运转，驱动效率提升。
          </p>

          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">触发器</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                  当服务端执行数据增删改查时，自动触发相关代码。
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">操作按钮</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                  基本的增删改按钮的基础上，为业务对象增加自定义的操作按钮，配合服务端API，实现个性化的业务逻辑。
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg>
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <div class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
              <Video 
                poster="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.jpg"
                autoplay={false}
                urls={[
                    {name:"标清", url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"},
                    {name:"高清", url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.mp4"},
                ]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="relative bg-gray-700">
  <div class="max-w-screen-xl mx-auto py-8 px-4 lg:flex lg:items-center lg:justify-between">
    <div class="">
      <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
        对于华炎魔方低代码开发平台有疑问？？
      </div>
      <div class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
        微信扫描二维码，我们的技术专家会为您解答。
      </div>
      <p class="mt-3 text-lg leading-7 text-gray-300">
        我们的技术专家拥有十年以上的管理软件开发经验，无论您询问有关华炎魔方开发平台的功能、定价、实施或任何其他方面的问题，他们都将随时准备为您提供帮助。
      </p>
    </div>
    <div class="flex lg:flex-shrink-0">
      <img class="h-32 w-32 m-4" src="/assets/contact_by_weixin.png"/>
    </div>
  </div>
</div>

</Layout>
  );
}
