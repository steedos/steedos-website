var path = require('path');
const { truncate } = require('fs');

// docusaurus.config.js
module.exports = {

  title: '华炎魔方', // Title for your website.
  tagline: '华炎魔方是一个随需应变的管理软件开发工具，旨在通过其强大的敏捷性、灵活性和开放性帮助企业创新、扩展和集成企业业务系统。基于该平台，您可以快速创建智能化、移动化的企业应用。',
  url: 'https://www.steedos.com', // Your website URL
  customFields: {
    keywords: ['oa', '开发平台', '开发工具', '低代码', '快速开发平台', '开源'], 
  },
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'steedos.github.io',
  organizationName: 'steedos',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  // headerLinks: [
  //   {doc: 'platform/index', label: '开发平台'},
  //   {doc: 'developer/guide', label: '开始使用'},
  //   {doc: 'api/index', label: 'API'},
  //   {search: true},
  //   {href: 'https://cn.steedos.com/', label: '华炎云'},
  //   //{doc: 'record_list', label: '用户手册'},
  //   //{doc: 'api', label: 'API'},
  //   //{blog: true, label: '动态'},
  //   // {
  //   //   href: 'https://github.com/steedos/',
  //   //   label: '开源',
  //   // },
  // ],

  // If you have users set above, you add it here:
  //users,
  /* path to images for header/footer */
  // headerIcon: 'img/icon_blue.png',
  // footerIcon: 'img/icon_blue.png',
  favicon: 'img/icon_blue.png',

  /* Colors for website */
  // colors: {
  //   primaryColor: 'rgba(0, 0, 0, 0.8)',
  //   secondaryColor: 'rgba(34,34,34,0.8)',
  // },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: `Copyright © ${new Date().getFullYear()} 上海华炎软件科技有限公司`,

  // highlight: {
  //   // Highlight.js theme to use for syntax highlighting in code blocks.
  //   //theme: 'atom-one-dark',
  // },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://cdn.jsdelivr.net/npm/xgplayer@2.9.6/browser/index.js",
  ],

  // On page navigation for the current documentation page.
  // onPageNav: 'separate',
  // No .html extensions for paths.
  // cleanUrl: true,

  // Open Graph and Twitter card images.
  // ogImage: 'img/docusaurus.png',
  // twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/steedos/steedos-platform',
  // scrollToTop: true,
  // enableUpdateTime: true,
  // enableUpdateBy: true,
  // docsSideNavCollapsible: true,


  // useEnglishUrl: false,

  themeConfig: {
    image: 'img/icon_platform.png',
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: '华炎魔方',
        src: 'img/icon_platform.png',
        srcDark:  'img/icon_platform_white.png',
        href: '/cn/'
      },
      items: [
        {to: 'platform/', label: '平台', position: 'left', activeBasePath: '/platform/',},
        {label: '解决方案', position: 'left',
          items: [
            // {to: 'solutions/sales/home', label: '销售管理', position: 'left', activeBasePath: 'sales'},
            {to: 'products/oa/', label: '协同办公', position: 'left'},
            {to: 'products/contract/', label:'合同管理',position: 'left'},
            {to: 'products/purchase/', label:'采购管理',position: 'left'},
            // {to: 'solutions/group/', label:'集团管控',position: 'left'},
            {to: 'products/cost/', label: '费控管理', position: 'left'},
          ]
        },
        {to: '/help/', label: '文档', position: 'left',
        items: [
          {to: '/videos/', label:'视频',position: 'left'},
          {to: '/help/user/', label: '用户手册', position: 'left'},
          {to: '/help/admin/', label: '管理员手册', position: 'left'},
          {to: '/help/download', label: '下载客户端', position: 'left'},
        ]},
        {to: '/developer/', label: '开发', position: 'left',},
        {to: '/platform/pricing', label: '报价', position: 'left',},
        //{to: 'videos/', label: '视频', position: 'left',},
        {to: 'products/oa', label: '华炎办公', position: 'right'},
        {to: 'us/', label: 'EN', position: 'right'},
        {
          href: 'https://github.com/steedos/steedos-platform/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      // links_us: [
      //   {to: '/us/', label: 'Home', position: 'left'},
      //   {to: '/us/help/workflow/README', label: 'Docs', position: 'left'},
      //   {to: '/cn', label: '中文', position: 'right'},
      //   {to: '/us/login', label: 'Login', position: 'right'}
      // ],
    },
    algolia: {
      apiKey: 'eaa8e1c86ac084b5cac664d9d996856c',
      indexName: 'steedos',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    baiduAnalytics: {
      trackingID: '8e30e1c152eed21154e2090d348e7dec',
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs folder path relative to website dir.
          path: '../docs',
          routeBasePath: '/', // Set this value to '/'.
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl: 'https://github.com/steedos/steedos-website/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './src/plugins/plugin-baidu-analytics'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects: function (path) {
        },
        redirects: [
          {
            from: ['/oa/', '/oa/function', '/oa/features', '/oa/scenario', '/oa/cases'],
            to: '/products/oa',
          },
        ],
      },
    ],
  ],

  stylesheets: [
    '/website/libs/tailwind.min.css',
  ],
  customFields: {
    navbar_items_us: [
      {to: '/us/', label: 'Home', position: 'left'},
      {to: '/us/help/workflow/README', label: 'Docs', position: 'left'},
      {to: '/us/login', label: 'Login', position: 'right'},
      {to: 'cn/',label: '中文', position: 'right'},
      {
        href: 'https://github.com/steedos/',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      },
    ],
  },
};