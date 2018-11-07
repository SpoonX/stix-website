const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Stix',
  tagline: 'A module-based, TypeScript-first Node.js® framework.',
  url: 'https://stixjs.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'stix',
  organizationName: 'SpoonX',
  headerLinks: [
    {doc: 'the-basics/about-stix', label: 'Docs'},
    {doc: 'modules/stix-gates/gates-about', label: 'Modules'},
    {doc: 'api', label: 'API'},
    {page: 'help', label: 'Help'},
    // { search: true }
    // {page: 'api', label: 'API 2'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  headerIcon: 'img/logo_name.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/logo.ico',
  disableHeaderTitle: true,
  cube: 'img/cube.svg',
  halfCube: 'img/half_cube.svg',
  colors: {
    background: '#F3F3F3',
    offWhite: '#f7f7f7',
    primaryColor: '#1DD882',
    secondaryColor: '#232345',
    title: '#474747',
    text: '#646464'
  },
  copyright: `Built with 💚 by SpoonX, © ${new Date().getFullYear()}`,
  highlight: { // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'obsidian',
  },
  gaTrackingId: 'UA-127345876-2',
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/stix.png',
  twitterImage: 'img/stix.png',
  repoUrl: 'https://github.com/SpoonX/stix',
  stylesheets: ['https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,500,700'],
  scripts: ['js/nav.js']
  // algolia: {
  //   apiKey: 'c0bb5f865609b0fa0ff4d99f27700b81',
  //   indexName: 'stix',
  //   algoliaOptions: {
  //     facetFilters: [ "version:VERSION" ]
  //   } // Optional, if provided by Algolia
  // },
};

module.exports = siteConfig;
