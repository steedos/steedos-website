// docusaurus.config.js
module.exports = {

  title: '华炎', // Title for your website.
  tagline: '随需定制的企业管理软件，快速满足业务部门的个性化需求。',
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
  //   {doc: 'platform/index', label: '应用引擎'},
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
  // editUrl: 'https://github.com/steedos/object-server/edit/develop/docs/',
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
    navbar: {
      hideOnScroll: true,
      title: '华炎',
      logo: {
        alt: '华炎',
        src: 'img/icon_blue.png',
      },
      links: [
        {to: 'workflow', label: '审批王', position: 'left'},
        {to: 'developer', label: '开发平台', position: 'left'},
        {to: 'docs/platform/index', label: '文档', position: 'left',
          items: [
            {to: 'docs/workflow/help/guide_sign', label: '审批王'},
            {to: 'docs/developer/index', label: '开发文档'},
           {to: 'docs/platform/index', label: '应用手册'},
           {to: 'docs/api/index', label: 'API'}
          ]
        },
        // {to: 'docs/pricing/index', label: '报价', position: 'left'},
        {to: 'blog', label: '动态', position: 'left'},
        {
          label: '社区',
          position: 'right',
          href: 'https://messenger.steedos.cn/',
        },
        {label: '客户登录', position: 'right',
         items: [
          {href: 'https://cn.steedos.com', label: '中国区域'},
          {href: 'https://us.steedos.com', label: '美国区域'}
         ]
        },
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
          title: '华炎应用引擎',
          items: [
            {
              label: '关于',
              to: 'docs/developer/index',
            },
            {
              label: '快速向导',
              to: 'docs/developer/guide',
            },
            {
              label: '我的应用',
              to: 'docs/platform/index',
            },
          ],
        },
        {
          title: '应用案例',
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
              label: '档案管理',
              href: 'https://github.com/steedos/steedos-records-app',
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
              label: '开发人员社区',
              to: 'https://messenger.steedos.cn/',
            },
            {
              label: '问题提交',
              href: 'https://github.com/steedos/object-server/issues',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};