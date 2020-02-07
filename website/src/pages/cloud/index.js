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
    title: <>什么是华炎应用引擎?</>,
    imageUrl: 'img/undraw_building_blocks.svg',
    description: (
      <>
        华炎应用引擎是一套管理软件开发工具，开发人员只需编写业务配置文件，描述业务对象，就能生成全功能的业务管理系统。
      </>
    ),
  },
  {
    title: <>华炎应用引擎可以做什么？</>,
    imageUrl: 'img/undraw_react.svg',
    description: (
      <>
        开发人员只需编写业务配置文件，华炎应用引擎自动生成手机、平板、电脑三合一的业务台账，包括用户登录、查询统计、流程审批、权限控制等。
      </>
    ),
  },
  {
    title: <>需求变更怎么办？</>,
    imageUrl: 'img/undraw_programming.svg',
    description: (
      <>
        当业务需求发生变更时，开发人员只需修改配置文件，华炎应用引擎会重新编译和运行，业务系统界面与功能也会自动随之调整。
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