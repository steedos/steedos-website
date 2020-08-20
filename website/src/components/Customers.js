import React from 'react';
import Video from '@site/src/components/Video';

class Customers extends React.Component {
  
    render() {
        return (

<div class="bg-gray-100">
  <div class="py-8 lg:py-12 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          成功案例
        </h2>
        <p class="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
          华炎魔方已经成功应用于许多大型企业与政府机构。
        </p>
        <div className="max-w-xl my-3 relative lg:max-w-md">
          <div className="relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline">
            <Video 
              poster="https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/cases.jpeg"
              autoplay={false}
              urls={[
                  {name:"高清", url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/cases.mp4"},
              ]}/>
          </div>
        </div>
        {/* <div class="mt-8 sm:flex">
          <div class="rounded-md shadow">
            <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Create Account
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
              Contact Us
            </a>
          </div>
        </div> */}
      </div>
      <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2" data-theme='light'>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-black dark:bg-white">
          <img class="max-h-12" src="/assets/customers/dzug.png" alt="大众公用"/>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <img class="max-h-12" src="/assets/customers/want_want.png" alt="旺旺投资"/>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <img class="max-h-12" src="/assets/customers/picc.png" alt="人保资产"/>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <img class="max-h-12" src="/assets/customers/petro_china.png" alt="抚顺石化"/>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <img class="max-h-12" src="/assets/customers/shanghai_gas.png" alt="上海燃气"/>
        </div>
        <div class="col-span-1 flex justify-center py-8 px-8 bg-white">
          <img class="max-h-12" src="/assets/customers/shanghai_caijing.png" alt="上海财经大学"/>
        </div>
      </div>
    </div>
  </div>
</div>


        )
        }
    }

export default Customers;