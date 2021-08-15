import React from 'react';

const faqs = [
  {
    id: 1,
    question: '什么是华炎魔方平台?',
    answer: '低代码是全新的开发模式，使用可视化工具编写代码，大幅降低应用开发门槛，提升效率。',
  },
  {
    id: 2,
    question: "华炎魔方有什么优点？",
    answer:
      "与无代码平台不同，华炎魔方将低代码技术与传统开发方式融合，可以通过编写代码满足各种复杂业务需求。",
  },
  {
    id: 3,
    question: '华炎魔方平台如何收费?',
    answer:
      '华炎魔方作为开发平台完全免费，并且我们开放所有源码。基于华炎魔方开发的应用由开发商定价收费。',
  },
  {
    id: 4,
    question: '什么是魔方应用?',
    answer:
      '基于华炎魔方开发的解决方案称为魔方应用，您可以自主开发应用，也可以从应用市场购买成熟的解决方案。',
  },
  {
    id: 5,
    question: "华炎魔方可以开发哪些应用?",
    answer:
      '华炎魔方比较适合开发数据管理类的应用，包括OA、CRM、ERP、销售管理、采购管理、库存管理、生产管理等。',
  },
  {
    id: 6,
    question: "魔方应用有什么优点?",
    answer:
      '魔方应用基于模型驱动，当需求变化时，可以使用可视化工具快速调整、无缝迭代，帮助业务加速创新，提升竞争力。',
  },
]

class FAQ extends React.Component {
 
    render() {
        return (
          
      <div className="bg-gray-50">
        {/* FAQ */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">常见问题解答</h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="space-y-2">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                  <dd className="text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
        )
        }
    }


export default FAQ;