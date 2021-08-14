import React from "react";
import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/solid'
import Layout from '@theme/Layout';
import Customers from '@site/src/components/Customers';
import Trial from '@site/src/components/Trial';
import FAQ from '@site/src/components/FAQ';

const tiers = [
  { 
    name: 'Basic', 
    label: '平台入门版',
    href: '/form/buy', 
    priceMonthly: 10, 
    description: '快速构建部门级自定义应用程序。' 
  },
  {
    name: 'Essential',
    label: '平台专业版',
    href: '/form/buy',
    priceMonthly: 20,
    description: '为每个部门实现业务流程数字化。',
  },
  {
    name: 'Premium',
    label: '平台企业版',
    href: '/form/buy',
    priceMonthly: 80,
    description: '转变整个组织的应用程序开发过程。',
  },
]
const sections = [
  {
    name: '快速构建应用程序',
    features: [
      { name: '自定义对象', tiers: { Basic: '20个', Essential: '100个', Premium: '无限' } },
      { name: '自定义应用', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '自定义页面布局', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '应用市场', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '移动客户端', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '文件存储', tiers: { Basic: '1GB/用户', Essential: '2GB/用户', Premium: '5GB/用户' } },
    ],
  },
  {
    name: '业务流程自动化',
    features: [
      { name: '审批流程', tiers: { Basic: '10个', Essential: '50个', Premium: '无限' } },
      { name: '批准过程', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '工作流规则', tiers: { Basic: true, Essential: true, Premium: true } },
    ],
  },
  {
    name: '角色与权限',
    features: [
      { name: '权限集与简档', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '对象权限', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '页面布局', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '字段修改历史', tiers: { Basic: true, Essential: true, Premium: true } },
    ],
  },
  {
    name: '报表与仪表盘',
    features: [
      { name: '自定义报表', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '自定义图表', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '仪表盘', tiers: { Basic: true, Essential: true, Premium: true } },
    ],
  },
  {
    name: '与外部系统集成',
    features: [
      { name: 'Web Services API ', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '单点登录（企业微信、钉钉、API）', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '组织机构同步（企业微信、钉钉、API）', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: '平台事件 API', tiers: { Essential: true, Premium: true } },
      { name: '应用集成开发工具', tiers: { Premium: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlatformCloud() {
  return (
    <Layout
      title="华炎魔方平台 云服务定价"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
    >
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              华炎魔方平台 云服务定价
              </h2>
              <p className="mt-5 text-xl text-indigo-300">
              点击鼠标就能开通华炎魔方。您只需使用，服务的安装、部署、升级与维护的工作交给我们。
              </p>
            </div>
            <div className="mt-10 w-full max-w-xs lg:mt-0">
              <label htmlFor="currency" className="block text-base font-medium text-indigo-300">
                可选区域
              </label>
              <div className="mt-1.5 relative">
                <select
                  id="currency"
                  name="currency"
                  className="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md"
                  defaultValue="United States (USD)"
                >
                  <option className="bg-gray-900">亚马逊 (宁夏)</option>
                  <option className="bg-gray-900">更多区域即将上线...</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <ChevronDownIcon className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        {/* xs to lg */}
        <div className="space-y-24 lg:hidden">
          {tiers.map((tier) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.label}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <a
                  href={tier.href}
                  className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  购买 {tier.label}
                </a>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full table">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700 text-right">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div className="border-t border-gray-200 px-4 pt-5">
                <a
                  href="#"
                  className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  购买 {tier.label}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>版本</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th className="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left" scope="row">
                  报价
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-4xl font-extrabold text-gray-900">¥{tier.priceMonthly}</span>
                          <span className="text-base font-medium text-gray-500">/月/用户</span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                      </div>
                      <a
                        href={tier.href}
                        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:text-white hover:to-pink-600"
                      >
                        免费试用 {tier.label}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href="#"
                      className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white hover:text-white text-center hover:to-pink-600"
                    >
                      免费试用 {tier.label}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <Customers/>
      <Trial/>
    </Layout>
  )
}