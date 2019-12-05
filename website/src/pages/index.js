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
        华炎应用引擎是一套企业管理软件开发工具，开发人员只需编写少量代码，就能构建功能强大的企业管理软件。
      </>
    ),
  },
  {
    title: <>华炎应用引擎能做什么？</>,
    imageUrl: 'img/undraw_react.svg',
    description: (
      <>
        华炎应用引擎内置了企业管理软件常用的数十项功能，包括用户登录、组织管理、流程审批、权限控制、统计分析等。
      </>
    ),
  },
  {
    title: <>我如何使用？</>,
    imageUrl: 'img/undraw_programming.svg',
    description: (
      <>
        你可以参考我们的项目模版，或是按照快速向导，创建一个空项目，定义业务对象，就可以快速生成功能强大的管理系统。
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
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 padding-vert--lg">
              <h2>如何快速开发合同管理系统</h2>
              <iframe
                width="100%"
                height="315"
                src="https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/contracts-demo.mp4"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="text--center padding-vert--lg">
                <Link
                  className="button button--primary button--lg"
                  to={useBaseUrl('docs/developer/index')}
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