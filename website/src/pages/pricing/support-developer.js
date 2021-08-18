import React from "react";
import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/solid'
import Layout from '@theme/Layout';
import Customers from '@site/src/components/Customers';
import FAQ from '@site/src/components/FAQ';

const tiers = [
  { 
    name: 'Basic', 
    label: '自助服务',
    href: '/form/contact', 
    priceMonthly: 0, 
    description: '个人、学生、开源爱好者可以借助开发社区获得免费开发服务。' 
  },
  {
    name: 'Essential',
    label: '标准开发者支持服务',
    href: '/form/contact',
    priceMonthly: 1000,
    description: '帮助您的团队快速切换到全新的低代码开发模式。',
  },
  {
    name: 'Premium',
    label: '高级开发者支持服务',
    href: '/form/contact',
    priceMonthly: 2000,
    description: '培训整套开发工具，转变整个组织的应用程序开发过程。',
  },
]
const sections = [
  {
    name: '自助服务',
    features: [
      { name: '开发文档', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '培训视频', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '电话咨询', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '在线工单', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '开发人员交流群', tiers: { Basic: true, Essential: true, Premium: true } },
    ],
  },
  {
    name: '人工服务',
    features: [
      { name: '1对1人工服务', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: '专属技术顾问', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '服务时间', tiers: { Basic: '工作时间', Essential: '工作时间', Premium: '工作时间' } },
    ],
  },
  {
    name: '人工服务内容',
    features: [
      { name: '可视化快速创建应用程序', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '元数据与代码同步', href: '/videos/lesson-metadata-synchronize/', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: '自定义按钮', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: '自定义路由', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: '自定义触发器', tiers: { Basic: false, Essential: true, Premium: true } },
      { name: 'jsreport 自定义报表', href: 'https://jsreport.net/', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: 'node-red 应用集成平台', href: 'https://nodered.org/', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: 'redash 数据分析平台', href:'https://redash.io', tiers: { Basic: false, Essential: false, Premium: true} },
    ],
  },
  {
    name: '增值服务',
    features: [
      { name: '业务需求分析', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '推进项目落地', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '需求处理反馈', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '阶段业务诊断', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '定制化培训', tiers: { Basic: false, Essential: false, Premium: '1人天' } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlatformCloud() {
  return (
    <Layout
      title="开发者支持服务"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
    >
      <div className="bg-green-900">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              开发者支持服务
              </h2>
              <p className="mt-5 text-xl text-green-300">
              我们为开发团队提供低代码开发全程辅导服务，帮助您的团队快速切换到全新的低代码开发模式。
              </p>
            </div>
            {/* <div className="mt-10 w-full max-w-xs lg:mt-0">
              <label htmlFor="currency" className="block text-base font-medium text-indigo-300">
                Currency
              </label>
              <div className="mt-1.5 relative">
                <select
                  id="currency"
                  name="currency"
                  className="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md"
                  defaultValue="United States (USD)"
                >
                  <option className="bg-gray-900">Argentina (ARS)</option>
                  <option className="bg-gray-900">Australia (AUD)</option>
                  <option className="bg-gray-900">United States (USD)</option>
                  <option className="bg-gray-900">Canada (CAD)</option>
                  <option className="bg-gray-900">France (EUR)</option>
                  <option className="bg-gray-900">Japan (JPY)</option>
                  <option className="bg-gray-900">Nigeria (NGN)</option>
                  <option className="bg-gray-900">Switzerland (CHF)</option>
                  <option className="bg-gray-900">United Kingdom (GBP)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <ChevronDownIcon className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                </div>
              </div> 
            </div> */}
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
                  <span className="text-base font-medium text-gray-500">/月</span>
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
                          {feature.href ? (
                            <a href={feature.href} target='_blank'>{feature.name}</a>
                          ) : (
                            <span>{feature.name}</span>
                          )}
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
                          <span className="text-base font-medium text-gray-500">/月/开发人员</span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                      </div>
                      <a
                        href={tier.href}
                        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:text-white hover:to-pink-600"
                      >
                        购买 {tier.label}
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
                          {feature.href ? (
                            <a href={feature.href} target='_blank'>{feature.name}</a>
                          ) : (
                            <span>{feature.name}</span>
                          )}
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
                      购买 {tier.label}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>


      <Customers/>
      <FAQ/>
    </Layout>
  )
}