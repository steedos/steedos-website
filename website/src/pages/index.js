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
import { Icon } from '@salesforce/design-system-react';
import SteedosAppLauncher from '../components/AppLauncher';

const features = [
  {
    title: <>业务审批</>,
    iconName: 'accounts',
    href: 'docs/workflow/index',
    description: (
      <>
        审批王可以快速的将公司的各类审批业务转换为可严格执行的电子流程。
      </>
    ),
  },
  {
    title: <>业务数据</>,
    iconName: 'accounts',
    href: 'docs/platform/index',
    description: (
      <>
        借助不断改进的内置企业人工智能和信息管理功能，实现数据智能。
      </>
    ),
  },
  {
    title: <>业务开发</>,
    iconName: 'account',
    href: 'docs/developer/index',
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
      <header className={classnames('hero', styles.heroBanner)}>
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

        <div className={classnames('hero')}>
          <div className="container">
            <SteedosAppLauncher/>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;