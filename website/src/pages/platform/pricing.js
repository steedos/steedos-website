import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import FAQ from '@site/src/components/FAQ';

export default function Landing() {
  return (
<Layout
      title="华炎魔方版本与报价">

<div class="bg-gray-100">
  <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
    <div class="text-center">
      {/* <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
        版本与报价
      </h2> */}
      <p class="mt- text-3xl leading-9 font-extrabold text-black sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
        华炎魔方版本与报价
      </p>
      <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-500 sm:mt-5 sm:text-2xl sm:leading-8">
        华炎魔方是<a href="https://github.com/steedos/steedos-platform/" target="_blank" class=" text-gray-700">开源低代码开发平台</a>，
        开源社区版基于MIT协议，您可以免费使用。
        <br></br>
        华炎魔方商业版本内置流程引擎，并提供更专业的支持服务。
      </p>
    </div>
  </div>

  <div class="mt-16 pb-12 lg:mt-20 lg:pb-20">
    <div class="relative z-0">
      <div class="absolute inset-0 h-5/6 bg-gray-100 lg:h-2/3"></div>
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative lg:grid lg:grid-cols-7">
          <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
              <div class="flex-1 flex flex-col">
                <div class="bg-white px-6 py-10">
                  <div>
                    <h3 class="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-hobby">
                      开源社区版
                    </h3>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span class="mt-2 mr-2 text-4xl font-medium">
                          ￥
                        </span>
                        <span class="font-extrabold">
                          0
                        </span>
                      </span>
                      <span class="text-2xl leading-8 font-medium text-gray-500">
                        （完全免费）
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <ul>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        低代码建模引擎
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        低代码开发引擎
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        移动引擎
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        报表引擎
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        安全引擎
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        数据 API
                      </p>
                    </li>
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        私有化部署
                      </p>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <div class="rounded-lg shadow-md">
                      <a href="/developer" class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150" aria-describedby="tier-scale">
                        下载试用
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
            <div class="relative z-10 rounded-lg shadow-xl">
              <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600"></div>
              <div class="absolute inset-x-0 top-0 transform translate-y-px">
                <div class="flex justify-center transform -translate-y-1/2">
                  <span class="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                    最热门
                  </span>
                </div>
              </div>
              <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 class="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    专业版
                  </h3>
                  <div class="mt-4 flex items-center justify-center">
                    <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span class="mt-2 mr-2 text-4xl font-medium">
                        ￥
                      </span>
                      <span class="font-extrabold">
                        20
                      </span>
                    </span>
                    <span class="text-2xl leading-8 font-medium text-gray-500">
                      /用户/月
                    </span>
                  </div>
                </div>
              </div>
              <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                <div class="pb-6 font-bold text-base leading-6 text-gray-500">包含开源社区版的全部功能，以及：</div>
                <ul>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      零代码建模引擎（10个自定义业务对象）
                    </p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      流程引擎（20个自定义流程）
                    </p>
                  </li>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      图形化流程设计工具
                    </p>
                  </li>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      流程转数据
                    </p>
                  </li>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      数据转流程
                    </p>
                  </li>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      流程 API
                    </p>
                  </li>
                  <li class="mt-0 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      单点登录 API
                    </p>
                  </li>
                </ul>
                <div class="mt-10">
                  <div class="rounded-lg shadow-md">
                    <a href="/form/trial" target="_blank" class="block w-full text-center rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150" aria-describedby="tier-growth">
                      预约演示
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
            <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
              <div class="flex-1 flex flex-col">
                <div class="bg-white px-6 py-10">
                  <div>
                    <h3 class="text-center text-2xl leading-8 font-medium text-gray-900" id="tier-scale">
                      企业版
                    </h3>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span class="mt-2 mr-2 text-4xl font-medium">
                          ￥
                        </span>
                        <span class="font-extrabold">
                          80
                        </span>
                      </span>
                      <span class="text-xl leading-7 font-medium text-gray-500">
                        /用户/月
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <div class="pb-6 font-bold text-base leading-6 text-gray-500">包含专业版的全部功能，以及：</div>
                  <ul>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        零代码建模引擎（110个自定义业务对象）
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        流程引擎（无限）
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        外部数据源
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        集团多公司管理
                      </p>
                    </li>
                    <li class="mt-0 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        集群部署
                      </p>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <div class="rounded-lg shadow-md">
                      <a href="/form/trial" target="_blank" class="block w-full text-center rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150" aria-describedby="tier-growth">
                        预约演示
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<FAQ/>

</Layout>
  );
}
