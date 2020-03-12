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
import SteedosAppLauncher from '../../components/AppLauncher';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <header className={classnames('', styles.heroBanner)}>
        <div class="slds-p-top_x-large"></div>
        <div className="container">
          <h1 className="">{siteConfig.title}</h1>
          <p className="">{siteConfig.tagline}</p>
          <a class="slds-button slds-button_brand slds-m-right_medium slds-var-p-vertical_xx-small" href="http://oss.steedos.com/videos/case/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E8%AF%B7%E5%81%87%E6%B5%81%E7%A8%8B.mp4" target="_blank">
          视频演示
          </a>

          <a class="slds-button slds-button_brand slds-m-right_medium slds-var-p-vertical_xx-small" href="http://cn.steedos.com" target="_blank">
          注册试用
          </a>

          <div class="slds-p-top_xx-large"></div>
          <article class="slds-card">
            <div class="slds-card__header slds-grid">
              <header class="slds-media slds-media_center slds-has-flexi-truncate">
                <div class="slds-media__figure">
                  <span class="slds-icon_container slds-icon-standard-apps" title="account">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true">
                      <use href="/assets/icons/standard-sprite/svg/symbols.svg#apps"></use>
                    </svg>
                    <span class="slds-assistive-text">account</span>
                  </span>
                </div>
                <div class="slds-media__body">
                  <h2 class="slds-card__header-title">
                    <a href="/cn/" class="slds-card__header-link slds-truncate" title="Accounts">
                      <span>华炎云</span>
                    </a>
                  </h2>
                </div>
                <div class="slds-no-flex">
                  <a class="slds-button slds-button_neutral" href="/docs/help/home">使用手册</a>
                </div>
              </header>
            </div>
            <div class="slds-card__body slds-card__body_inner">
              <SteedosAppLauncher/>
            </div>
            <footer class="slds-card__footer">
              <a class="slds-card__footer-action" href="https://cn.steedos.com/">注册试用
              </a>
            </footer>
          </article>
          <div class="slds-p-top_x-large"></div>

          <div class="slds-p-top_x-large"></div>
        </div>
        
      </header>
      <main>

      </main>
    </Layout>
  );
}

export default Home;