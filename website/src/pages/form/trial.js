import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FAQ from '@site/src/components/FAQ';

export default function TrialForm() {
  return (

<Layout
      title="预约演示"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
>
<div class="relative bg-white container">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pr-12">
    <div>
        <h2 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
          联系我们，预约产品演示
        </h2>
        <div class="mt-8">
          <span class="text-xl font-extrabold leading-7 text-gray-500">
            您可以通过以下方式联系我们，或填写右侧预约表格。
          </span>
        </div>
        <div class="mt-9">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-3 text-lg leading-6 text-gray-500">
                <a href="tel://4008201612">400-820-1612</a>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="ml-3 text-lg leading-6 text-gray-500">
              上海市九新公路76号嘉和阳光大厦505
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="flex-shrink-0">
              <svg class="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-3 text-lg leading-6 text-gray-500">
                使用微信扫描以下二维码:
              <img class="mt-3" src="/assets/contact_by_weixin.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <h2 class="text-xl leading-8 tracking-tight text-gray-900 sm:leading-9">
          预约产品演示
        </h2>
        <p class="leading-8 tracking-tight text-gray-900 sm:leading-9">
          请填写以下表格，我们的产品顾问会主动与您联系。
          （请填写所有字段）
        </p>

        <form action="https://huayan.my.steedos.com:8443/api/v4/leads/web_forms" class="grid grid-cols-1 row-gap-4" method="POST">
          <input type="hidden" name="steedos_form_id" value="BuuaurNfewcanQC73"/>
          <input type="hidden" name="return_url" value="https://www.steedos.com/form/success/"/>
          <input type="hidden" name="lead_source" value="Website"/>
          <div>
            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">姓名</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="name" name="name" class="bg-cool-gray-200 text-black form-input py-2 px-2 block w-full transition ease-in-out duration-150" required/>
            </div>
          </div>
          {/* <div>
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">邮件</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="email" name="email" class="bg-black text-white form-input py-2 px-2 block w-full transition ease-in-out duration-150" title="邮件格式不正确，请重新输入！" pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required/>
            </div>
          </div> */}
          <div>
            <label for="title" class="block text-sm font-medium leading-5 text-gray-700">职务</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="title" name="title" class="bg-cool-gray-200 text-black form-input py-2 px-2 block w-full transition ease-in-out duration-150" required/>
            </div>
          </div>
          <div>
            <label for="company" class="block text-sm font-medium leading-5 text-gray-700">公司</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="company" name="company" class="bg-cool-gray-200 text-black form-input py-2 px-2 block w-full transition ease-in-out duration-150" required/>
            </div>
          </div>
          <div>
            <label for="mobilephone" class="block text-sm font-medium leading-5 text-gray-700">手机</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="mobilephone" name="mobilephone" class="bg-cool-gray-200 text-black form-input py-2 px-2 block w-full transition ease-in-out duration-150" title="手机号不正确，请重新输入！" pattern="^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$" required/>
            </div>
          </div>
          <div>            
            <label for="address" class="block text-sm font-medium leading-5 text-gray-700">需求说明</label>
            <div class="relative rounded-md shadow-sm">
              <textarea id="address" name="address" rows="3" class="bg-cool-gray-200 text-black form-input block w-full py-2 px-2 placeholder-gray-500 transition ease-in-out duration-150"></textarea>
            </div>
          </div>
          <div class="">
            <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150">
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</Layout>
)};

