/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

module.exports = function(context) {
  const {siteConfig} = context;
  const {themeConfig} = siteConfig;
  const {baiduAnalytics} = themeConfig || {};

  if (!baiduAnalytics) {
    throw new Error(
      `You need to specify 'baiduAnalytics' object in 'themeConfig' with 'trackingId' field in it to use docusaurus-plugin-baidu-analytics`,
    );
  }

  const {trackingID, anonymizeIP} = baiduAnalytics;

  if (!trackingID) {
    throw new Error(
      'You specified the `baiduAnalytics` object in `themeConfig` but the `trackingID` field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-baidu-analytics',

    getClientModules() {
      return isProd ? [path.resolve(__dirname, './analytics')] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${trackingID}";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }
        ],
      };
    },
  };
};
