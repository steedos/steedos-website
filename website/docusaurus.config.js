// docusaurus.config.js
module.exports = {

  title: '华炎云', // Title for your website.
  tagline: '华炎云是真正的一站式企业沟通与协作平台，整合审批、销售、采购、客户服务等功能于一体，打造高效的办公方式，加速企业成长。',
  url: 'https://www.steedos.com/', // Your website URL
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
  scripts: [],

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
  // repoUrl: 'https://github.com/steedos/object-server',
  // scrollToTop: true,
  // enableUpdateTime: true,
  // enableUpdateBy: true,
  // docsSideNavCollapsible: true,


  // useEnglishUrl: false,

  themeConfig: {
    disableDarkMode: true,
    navbar: {
      hideOnScroll: false,
      title: '华炎云',
      logo: {
        alt: '华炎',
        src: 'img/icon_blue.png',
      },
      links: [
        {to: '', label: '产品', position: 'left',
          items: [
            {to: 'docs/workflow/home', label: '流程审批', position: 'left', activeBasePath: 'docs/workflow/'},
            {to: 'docs/products/messenger', label: '即时通讯', position: 'left', activeBasePath: 'docs/messenger/'},
            {to: 'docs/platform/home', label: '开发平台', position: 'left', activeBasePath: 'docs/platform'}
              ]
        },
        {to: '', label: '解决方案', position: 'left',
          items: [
            {to: 'docs/group_management/home', label:'集团管控',position: 'left', activeBasePath: 'docs/group_management'},
            {to: 'docs/cost_control/home', label: '费控管理', position: 'left', activeBasePath: 'docs/cost_control/'},
          ]
        },
        {to: '', label: '技术支持', position: 'left',
          items: [
            {href: 'tel://4008201612', label: '400-820-1612'},
            {to: 'docs/help/home', label: '帮助文档', activeBasePath: 'docs/help'},
            {href: 'http://messenger.steedos.cn', label: '在线客服'},
          ]
        },
        {label: '登录', position: 'right', href: 'https://cn.steedos.com'},
      ],
      links_us: [
        {to: 'docs/us/home', label: 'Workflow', position: 'left'},
        {to: 'docs/us/help/workflow/README', label: 'Help', position: 'right'},
        {to: '/cn/', label: '中国区域', position: 'right'},
        {to: 'docs/us/login', label: 'US Region', position: 'right'}
      ],
    },
    footer: {
      style: 'dark',
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/icon_blue.png',
      // },

      links: [
        {
          title: '华炎产品',
          items: [
            {
              label: '审批王',
              to: 'docs/workflow/home',
            },
            {
              label: '开发平台',
              to: 'docs/platform/home',
            },
            {
              label: '华信',
              to: 'docs/products/messenger',
            },
          ],
        },
        {
          title: '开源项目',
          items: [
            {
              label: '合同管理',
              href: 'https://github.com/steedos/steedos-contracts-app',
            },
            {
              label: '会议管理',
              href: 'https://github.com/steedos/steedos-meeting-app',
            },
            {
              label: '华炎云',
              href: 'https://github.com/steedos/steedos-project-saas',
            },
          ],
        },
        {
          title: '技术支持',
          items: [
            {
              label: '销售热线：400-820-1612',
            },
            {
              label: '在线客服',
              href: 'https://messenger.steedos.cn/',
            },
            {
              label: '最新动态',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 上海华炎软件科技有限公司.`,
    },
    algolia: {
      apiKey: 'eaa8e1c86ac084b5cac664d9d996856c',
      indexName: 'steedos',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // docs folder path relative to website dir.
          path: '../docs',
          // sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.json'),
          // editUrl: 'https://github.com/steedos/steedos-website/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};