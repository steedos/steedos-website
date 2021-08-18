import React from "react";
import { Fragment } from 'react'
import { CheckIcon, ChevronDownIcon, MinusIcon } from '@heroicons/react/solid'
import Layout from '@theme/Layout';
import Customers from '@site/src/components/Customers';
import FAQ from '@site/src/components/FAQ';

const tiers = [
  { 
    name: 'Basic', 
    label: '金牌服务套餐',
    href: '/form/contact', 
    priceMonthly: '2万', 
    description: '适用于中小企业的运维服务。' 
  },
  {
    name: 'Essential',
    label: '铂金服务套餐',
    href: '/form/contact',
    priceMonthly: '5万',
    description: '适用于核心业务系统的运维服务。',
  },
  {
    name: 'Premium',
    label: '钻石服务套餐',
    href: '/form/contact',
    priceMonthly: '10万',
    description: '适用于高可用集群部署版本的运维服务。',
  },
]
const sections = [
  {
    name: '自助服务',
    features: [
      { name: '在线帮助', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '培训视频', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '电话咨询', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '在线工单', tiers: { Basic: true, Essential: true, Premium: true } },
    ],
  },
  {
    name: '人工服务',
    features: [
      { name: '远程服务', tiers: { Basic: '30次', Essential: '80次', Premium: '不限次数' } },
      { name: '现场服务', tiers: { Basic: false, Essential: '1次', Premium: '4次' } },
      { name: '专属服务顾问', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '服务时间', tiers: { Basic: '工作时间', Essential: '工作时间', Premium: '工作时间' } },
    ],
  },
  {
    name: '人工服务内容',
    features: [
      { name: '系统安装', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '系统定期升级', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: '系统调研与实施', tiers: { Basic: '1人天', Essential: '2人天', Premium: '5人天' } },
      { name: '系统培训', tiers: { Basic: '1人天', Essential: '2人天', Premium: '5人天' } },
      { name: '系统备份', tiers: { Basic: '每周', Essential: '每天', Premium: '每小时' } },
      { name: '系统重装', tiers: { Basic: false, Essential: '1次', Premium: '1次' } },
      { name: '系统迁移', tiers: { Basic: false, Essential: '1次', Premium: '1次' } },
      { name: '服务工作报告', tiers: { Basic: '每年', Essential: '每季度', Premium: '每月' } },
    ],
  },
  {
    name: '增值服务',
    features: [
      { name: '业务需求分析', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '推进项目落地', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '需求处理反馈', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '阶段业务诊断', tiers: { Basic: false, Essential: false, Premium: true } },
      { name: '定制化培训', tiers: { Basic: false, Essential: false, Premium: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlatformCloud() {
  return (
    <Layout
      title="客户成功计划"
      description="华炎魔方是一款随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。"
      keywords={["低代码,低代码开发,低代码开发平台,开源低代码开发平台,快速开发平台,快速开发工具,paas,零代码,零代码开发,零代码开发平台"]}
    >
      <div className="bg-cyan-900">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              客户成功计划
              </h2>
              <p className="mt-5 text-xl text-cyan-300">
              使用华炎魔方平台需要指导？无论是安装、实施、培训、运维，我们都可以为您提供所需支持。
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
                  <span className="text-4xl font-extrabold text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-base font-medium text-gray-500">元/年</span>
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
                          <span className="text-4xl font-extrabold text-gray-900">{tier.priceMonthly}</span>
                          <span className="text-base font-medium text-gray-500">元/年</span>
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
                      href={tier.href}
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
    </Layout>
  )
}