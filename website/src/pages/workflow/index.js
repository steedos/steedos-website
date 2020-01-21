/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>规范业务过程</>,
    imageUrl: 'img/undraw_building_blocks.svg',
    description: (
      <>
        审批王帮助您将各项规章制度转化为可严格执行的电子流程。避免工作人员办事随心所欲。
      </>
    ),
  },
  {
    title: <>降低沟通成本</>,
    imageUrl: 'img/undraw_react.svg',
    description: (
      <>
        有了审批王，员工不再到处找领导各种签字，帮您大幅节省纸张、传真、电话、沟通、查询等各种成本。
      </>
    ),
  },
  {
    title: <>记录随时可查</>,
    imageUrl: 'img/undraw_programming.svg',
    description: (
      <>
        审批王永久保存您的申请单，您可以像百度一样随时调阅已审批的记录，资料不再遗失。
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">有了审批王，全世界都是你的办公室！</h1>
          <p className="hero__subtitle">审批王是全新的企业级在线审批系统，可以快速的将公司的各类审批业务转换为可严格执行的电子流程。</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://www.steedos.com/cn/help/workflow/')}
            >
              快速向导
            </Link>
          </div>

            <div class="col-md-12 text-center">
                <img src="/assets/workflow/home_intro.png" style={{width: "75%"}}/>
            </div>
        </div>
      </header>
      <main>

        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}
                  >
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={useBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">审批王可以定制任何您想要的管理流程</h1>
          <p className="hero__subtitle">出差、报销、请假、采购、 付款、订单、客服、会议、公文、投诉、报告...</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/developer/index')}
            >
              快速向导
            </Link>
          </div>
        </div>
      </header>

        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 padding-vert--lg">
              <h2>如何使用审批王，实施新一代费用报销流程</h2>
              <video 
                width="100%"
                height="315"
                src="http://oss.steedos.com/videos/case/expense.mp4"
                controls="controls">
              您的浏览器不支持 video 标签。
              </video>
              <div className="text--center padding-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to={useBaseUrl('https://www.steedos.com/cn/help/workflow/')}
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;