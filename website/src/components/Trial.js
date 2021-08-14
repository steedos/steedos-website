import React from 'react';

export default class Trial extends React.Component {
  
    render() {
        return (
            
    <div className="relative py-10">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1 bg-gray-50" />
        <div className="flex-1" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">想要了解更多?</span>
                <span className="block text-red-900">免费注册华炎魔方试用版.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-50">
              如果您有关于华炎魔方平台实施、集成等方面的问题，欢迎致电咨询 400-820-1612。我们客户代表都经过专业培训，随时可以为您解答。
              </p>
              <a
                href="/form/trial"
                className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
              >
                免费试用
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="/static/assets/workflow_design.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
            
        )
        }
    }

