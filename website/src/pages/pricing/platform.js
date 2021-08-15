import React from "react";
import { Fragment } from 'react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  MinusIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PlusIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'
import Layout from '@theme/Layout';
import Customers from '@site/src/components/Customers';
import Trial from '@site/src/components/Trial';
import FAQ from '@site/src/components/FAQ';

const features = [
  '可视化构建应用程序',
  '自动化业务流程',
  '报表与仪表盘',
  '移动客户端，企业微信、钉钉、飞书集成',
  '不限制用户数、存储容量',
  '基于云原生的微服务架构',
  '元数据与源码同步',
  '高级业务逻辑开发',
  '应用集成开发工具',
  '自动化测试、部署工具',
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlatformCloud() {
  return (
    <Layout
      title="华炎魔方平台 私有部署定价"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
    >
      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-white sm:text-center">华炎魔方平台 私有部署版</h1>
            <p className="mt-5 text-xl text-gray-300 sm:text-center">
            使用全新的低代码技术，助力企业在最短时间内开发数字化解决方案，快速落地现有业务战略，催生未来创新。
            </p>
            <div className="relative mt-6 bg-gray-200 rounded-lg p-1 flex self-center sm:mt-8">
              <a
                href='/pricing/platform'
                className="relative bg-white border-gray-200 rounded-md shadow-sm py-2 w-1/2 text-sm font-medium text-blue-600 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8"
              >
                私有部署
              </a>
              <a
                href='/pricing/platform-cloud'
                className="ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium text-gray-600 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8"
              >
                云服务
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Pricing section with single price and feature list */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">华炎魔方平台 私有部署版</span>
                <span className="text-blue-600"> 完全免费</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                包括华炎魔方低代码开发工具的所有功能，不限容量，不限用户数，不限时间。
              </p>
            </div>
            <a
              href="/help/deploy"
              className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              立刻开始
            </a>
          </div>
          <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">私有部署、开源、免费</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">全功能的低代码开发平台</p>
              <p className="mt-4 text-lg text-gray-500">
              华炎魔方将低代码技术与企业业务场景结合，助力企业在最短时间内开发数字化解决方案，帮助企业快速落地现有业务战略，催生未来创新。
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul className="divide-y divide-gray-200">
                {features.slice(0, 5).map((feature, featureIdx) => (
                  <li key={feature} className={classNames(featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'py-4 flex')}>
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                {features.slice(5).map((feature, featureIdx) => (
                  <li
                    key={feature}
                    className={classNames(featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'py-4 flex')}
                  >
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">开发者支持服务</span>
            <span className="block text-blue-900"></span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
          我们为开发团队提供低代码开发全程辅导服务，帮助您的团队快速切换到全新的“低代码”开发模式。
          </p>
          <a
            href="/pricing/support-developer"
            className="mt-8 w-full bg-blue-50 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-blue-700 hover:bg-blue-100 sm:w-auto"
          >
           购买开发者支持服务
          </a>
        </div>
      </div>

      
      <Customers/>
      <FAQ/>
      <Trial/>
    </Layout>
  )
}