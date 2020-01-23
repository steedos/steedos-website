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
    title: <>业务审批</>,
    imageUrl: 'img/svg-icons/workflow.svg',
    href: 'workflow',
    description: (
      <>
        审批王可以快速的将公司的各类审批业务转换为可严格执行的电子流程。
      </>
    ),
  },
  {
    title: <>业务开发和集成</>,
    imageUrl: 'img/svg-icons/developer.svg',
    href: 'developer',
    description: (
      <>
        华炎业务开发平台支持你大规模开展创新、实现互联和构建智能。
      </>
    ),
  },
  {
    title: <>商业分析</>,
    imageUrl: 'img/svg-icons/report.svg',
    description: (
      <>
        发现深入的洞察，简化对关键信息的访问，并赋能企业中的每一个人。
      </>
    ),
  },
  // {
  //   title: <>智能技术</>,
  //   imageUrl: 'img/svg-icons/ai.svg',
  //   description: (
  //     <>
  //       借助不断改进的内置企业人工智能和信息管理功能，实现数据智能。
  //     </>
  //   ),
  // },
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
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
      <main>
        {features && features.length && (
          <section className={classnames('hero hero--dark', styles.features)}>
            <div className="container">
              <div className="row">
                {features.map(({ imageUrl, title, description, href }, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4 text--center', styles.feature)}
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

                    <Link
                      className={classnames(
                        'button button--secondary button--lg',
                        styles.getStarted,
                      )}
                      to={useBaseUrl(href)}
                    >
                    了解更多
                  </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </Layout>
  );
}

export default Home;