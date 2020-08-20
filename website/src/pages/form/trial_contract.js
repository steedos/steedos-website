import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FAQ from '@site/src/components/FAQ';

export default function TrialForm() {
  return (

<div class="relative bg-white container">
  <div class="absolute inset-0">
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
  </div>
  <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pr-12">
      <div class="max-w-lg mx-auto">
        <h2 class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
          预约产品演示
        </h2>
        <p class="mt-3 text-xl leading-6 text-gray-500">
            华炎合同管理解决方案 - 企业版 <br/>
        </p>
        <div className="relative lg:max-w-md mt-4">
          <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
            <Video 
              poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.jpg"
              autoplay={false}
              urls={[
                  {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.mp4"},
              ]}/>
          </div>
        </div>
        <p class="mt-6 text-lg leading-6 text-gray-500">
         请填写以下表格，预约产品演示。
        </p>
        <h2 class="text-2l leading-8 font-extrabold tracking-tight text-gray-600 sm:leading-9">
          联系我们
        </h2>
        <p class="mt-6 text-lg leading-6 text-gray-500">
         拨打热线：400-820-1612，或微信扫描以下二维码：
        </p>
        <div className="flex lg:flex-shrink-0">
        <img className="h-40 w-40" src="/assets/contact_by_weixin.png"/>
        </div>
      </div>
    </div>
    <div class="bg-white py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 xl:pl-12">
      <div class="max-w-lg mx-auto lg:max-w-none">
        <h2 class="text-xl leading-8 tracking-tight text-gray-900 sm:leading-9">
          预约产品演示
        </h2>
        <p class="leading-8 tracking-tight text-gray-900 sm:leading-9">
          请填写所有字段.
        </p>

        <form action="https://cn.steedos.com/api/v4/leads/web_forms" class="grid grid-cols-1 row-gap-4" method="POST">
          <input type="hidden" name="steedos_form_id" value="BuuaurNfewcanQC73"/>
          <input type="hidden" name="return_url" value="https://www.steedos.com/form/success/"/>
          <input type="hidden" name="lead_source" value="Website"/>
          <div>
            <label for="name" class="block text-sm font-medium leading-5 text-gray-700">姓名</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="name" name="name" class="bg-black text-white form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">邮件</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="email" name="email" class="bg-black text-white form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
            </div>
          </div>
          <div>
            <label for="title" class="block text-sm font-medium leading-5 text-gray-700">职务</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="title" name="title" class="bg-black text-white form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
            </div>
          </div>
          <div>
            <label for="company" class="block text-sm font-medium leading-5 text-gray-700">公司</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="company" name="company" class="bg-black text-white form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
            </div>
          </div>
          <div>
            <label for="mobilephone" class="block text-sm font-medium leading-5 text-gray-700">手机</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input id="mobilephone" name="mobilephone" class="bg-black text-white form-input py-3 px-4 block w-full transition ease-in-out duration-150"/>
            </div>
          </div>
          <div>            
            <label for="address" class="block text-sm font-medium leading-5 text-gray-700">备注</label>
            <div class="relative rounded-md shadow-sm">
              <textarea id="address" name="address" rows="3" class="bg-black text-white form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"></textarea>
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

)};

