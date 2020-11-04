import React from 'react';

class FAQ extends React.Component {
  
    render() {
        return (
            <div class="bg-white">
              <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
                <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
                  常见问题解答
                </h2>
                <div class="mt-6 border-t-2 border-gray-100 pt-10">
                  <dl class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          什么是华炎魔方？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                          华炎魔方是新一代的低代码开发平台，基于商业智能和模型驱动，开发人员只需编写少量代码就可以构建功能强大的个性化应用。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          华炎魔方的优势是什么？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                            华炎魔方创新的使用配置文件定义业务模型，通过低代码编写业务逻辑，您开发的项目源码可以保存到版本库中实现版本迭代，对于大型项目也方便多人协作。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          为什么开源？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                            每个软件公司都需要一套低代码开发工具，但是单独开发和维护一套这样的平台成本巨大。华炎希望与开源社区共同打造中国最优秀的低代码开发平台。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          开源社区版有什么限制？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                            <a href="https://github.com/steedos/steedos-platform/" target="_blank" class=" text-gray-700">华炎魔方开源社区版（标准版）</a>基于<a href="https://choosealicense.com/licenses/mit/" target="_blank" class=" text-gray-700">MIT协议</a>，内置华炎魔方十大引擎，完全免费。基于华炎魔方开发的解决方案，可以单独定价销售。
                          </p>
                        </dd>
                      </div>
                    </div>
                    <div class="mt-12 md:mt-0">
                      <div>
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          传统开发方式不好吗？为什么要学习低代码开发平台？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                          传统模式开发企业软件系统需要大量的投资，需要业务部门提出精准的业务需求，一旦系统建成后，就很难修改和升级，使企业背负沉重的数字债务。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          什么是低代码开发平台？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                          低代码开发是一种全新的开发方式，通过把标准功能组件化，业务需求配置化，改变应用交付和管理的模式，大大缩减应用交付的周期。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          使用华炎魔方开发系统有什么好处？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                            使用华炎魔方开发的业务系统，基于模型驱动，兼具敏捷性、灵活性和开放性，可以根据业务需求随时调整、无缝迭代，帮助业务加速创新，提升竞争力。
                          </p>
                        </dd>
                      </div>
                      <div class="mt-12">
                        <dt class="text-lg leading-6 font-medium text-gray-900">
                          华炎魔方适合开发哪一类系统？
                        </dt>
                        <dd class="mt-2">
                          <p class="text-base leading-6 text-gray-500">
                            华炎魔方比较适合开发企业管理类的应用，例如OA、CRM、进销存、ERP、项目管理、订单管理、库存管理，也可以作为各种智能化业务系统的后台数据平台。
                          </p>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            
            
        )
        }
    }


export default FAQ;