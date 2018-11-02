/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
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
  title: 'Stix', // Title for your website.
  tagline: 'A module-based, TypeScript-first Node.js® framework.',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  customDocsPath: './stix-website/docs',
  // Used for publishing and more
  projectName: 'stix',
  organizationName: 'SpoonX',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'the-basics/about-stix', label: 'Docs'},
    {doc: 'modules/stix-gates/gates-about', label: 'Modules'},
    {doc: 'api', label: 'API'},
    {page: 'help', label: 'Help'},
    // {page: 'api', label: 'API 2'},
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_name.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/logo.ico',
  disableHeaderTitle: true,

  /* Colors for website */
  colors: {
    white: '#ffffff',
    offWhite: '#f7f7f7',
    primaryColor: '#1DD882',
    secondaryColor: '#232345',
  },

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
  copyright: `Copyright © ${new Date().getFullYear()} SpoonX`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'obsidian',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/stix.png',
  twitterImage: 'img/logo.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/SpoonX/stix',
};

module.exports = siteConfig;
