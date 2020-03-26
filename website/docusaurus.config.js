// docusaurus.config.js
module.exports = {

  title: '华炎', // Title for your website.
  tagline: '华炎开发平台是新一代人工智能开发工具，开发人员只需要编写简单的配置文件就可以构建自定义应用程序，实现数据管理、权限控制、流程审批、统计分析，并与现有业务系统集成。',
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
      title: '华炎',
      logo: {
        alt: '华炎开发',
        src: 'img/icon_blue.png',
        href: '/cn/'
      },
      links: [
        {to: 'platform/', label: '开发平台', position: 'left', activeBasePath: 'platform/'},

        {to: '', label: '解决方案', position: 'left',
          items: [
            // {to: 'solutions/sales/home', label: '销售管理', position: 'left', activeBasePath: 'sales'},
            {to: 'solutions/workflow/', label: '审批王', position: 'left', activeBasePath: 'solutions/workflow/'},
            {to: 'solutions/group/home', label:'集团管控',position: 'left', activeBasePath: 'solutions/group/'},
            {to: 'solutions/cost/home', label: '费控管理', position: 'left', activeBasePath: 'solutions/cost/'},
            {to: 'solutions/knowledge/', label: '知识管理', position: 'left', activeBasePath: 'solutions/knowledge'},
            {to: 'solutions/contract/', label: '合同管理', position: 'left', activeBasePath: 'solutions/contract/'},
            {to: 'solutions/oa/', label: '办公自动化', position: 'left', activeBasePath: 'solutions/oa/'},
          ]
        },
        {to: '', label: '服务与支持', position: 'left',
          items: [
            {to: 'help/downloads', label: '下载客户端'},
            {to: 'help/home', label: '帮助文档'},
            {to: 'contact_us', label: '在线咨询'}
          ]
        },
        {to: '/us/', label: 'English', position: 'right'},
        {label: '登录', position: 'right', href: 'https://cn.steedos.com'},
      ],
      links_us: [
        {to: '/us/', label: 'Home', position: 'left'},
        {to: '/us/help/workflow/README', label: 'Docs', position: 'left'},
        {to: '/cn', label: '中文', position: 'right'},
        {to: '/us/login', label: 'Login', position: 'right'}
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
              to: 'workflow/home',
            },
            {
              label: '开发平台',
              to: 'platform/',
            },
            {
              label: '华信',
              to: 'products/messenger',
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
              label: '在线咨询',
              to: 'contact_us',
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
          routeBasePath: '/', // Set this value to '/'.
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