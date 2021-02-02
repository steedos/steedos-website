import React from 'react';
import Video from '@site/src/components/Video';

class Customers extends React.Component {
  
    render() {
        return (

<div class="bg-gray-100">
  <div class="py-8 lg:py-12 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
    <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
      20年来，深受客户信赖
    </h2>
    <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8" data-theme='light'>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/dzug.png" alt="大众公用"/>
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/want_want.png" alt="旺旺投资"/>
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/picc.png" alt="人保资产"/>
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/petro_china.png" alt="抚顺石化"/>
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/shanghai_gas.png" alt="上海燃气"/>
      </div>
      <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
        <img class="max-h-12" src="/assets/customers/hebei_port.png" alt="河北港口集团"/>
      </div>
    </div>
  </div>
</div>


        )
        }
    }

export default Customers;