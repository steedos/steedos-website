import React from "react";

import Layout from '@theme/Layout';
import Video from '@site/src/components/Video';
import Features from '@site/src/components/Features';
import FAQ from '@site/src/components/FAQ';

export default function FormSuccess() {
  return (
<div>
  <div class="max-w-screen-xl mx-auto text-center py-24 px-4 sm:px-6 lg:py-36 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      感谢您填写此表单
      <br/>
      我们的客户经理会尽快联系您。
    </h2>

    <p class="mt-6 text-xl leading-6 text-gray-500">
        如有疑问，欢迎拨打咨询热线：400-820-1612。
    </p>
    <div class="mt-8 flex justify-center">
      <div class="inline-flex rounded-md shadow">
        <a href="/videos/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          视频演示
        </a>
      </div>
      <div class="ml-3 inline-flex">
        <a href="/help/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out">
          帮助文档
        </a>
      </div>
    </div>
  </div>
</div>

)};

