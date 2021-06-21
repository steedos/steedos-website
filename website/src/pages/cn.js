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
        
<section className="flex bg-cover bg-no-repeat bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-16">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        {/* <div className="text-sm font-semibold uppercase tracking-wide text-gray-700 sm:text-base lg:text-sm xl:text-base">
          新一代低代码开发平台
        </div> */}
        <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl">
        高效搭建
          <br className="hidden md:inline"/>
          <span className="text-blue-700">企业应用的魔方</span>
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


<section className="flex bg-cover bg-no-repeat bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-16">
      <div class="relative">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2">
            <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            企业级应用平台的魔方
            </h3>
            <p class="mt-3 text-lg text-gray-500">
            借助华炎魔方平台，您可以快速创新、自信的扩展并赋能每个员工。
            </p>

            <dl class="mt-10 space-y-10">
                
                <div class="relative">
                  <dt>
                    <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p class="ml-9 text-lg leading-6 text-gray-900">基于领先的人工智能和现代计算技术，快速实施数字化转型，管理您的业务数据并实现自动化处理。</p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                  </dd>
                </div>
              
                <div class="relative">
                  <dt>
                    <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p class="ml-9 text-lg leading-6 text-gray-900">只需点击鼠标，就能进行应用系统的编码和设计，帮助业务人员和IT部门融合在一起，在一个平台上轻松协作，</p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                  </dd>
                </div>
              
                <div class="relative">
                  <dt>
                    <svg class="absolute h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p class="ml-9 text-lg leading-6 text-gray-900">提供开箱即用的安全性和治理功能，您可以在受信任、完全开源的平台上自信地扩展和构建。</p>
                  </dt>
                  <dd class="mt-2 ml-9 text-base text-gray-500">
                  </dd>
                </div>
              
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
              <defs>
                <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"></rect>
            </svg>
            <img class="relative mx-auto" width="490" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>
          </div>
        </div>
      </div>
  </div>
</section>

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
              “拖拉拽”开发组件来完成应用程序的构建
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
              可在短时间内搭建业务系统，快速实现企业数字化转型
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
              按需定制灵活修改，伴随企业一起成长
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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



<Customers/>

</Layout>
  );
}
