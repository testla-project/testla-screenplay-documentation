import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const baseUrl = process.env.BASE_URL || '/';

const config: Config = {
  title: 'Write tests your business can read',
  tagline: 'Stop writing brittle UI tests. Leverage the Screenplay Pattern to keep your test suite maintainable, extensible, and scalable',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://testla-project.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'testla-project', // Usually your GitHub org/user name.
  projectName: 'testla-screenplay-documentation', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/testla-project/testla-screenplay-documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/testla-project/testla-screenplay-documentation/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'modules',
          path: 'modules',
          routeBasePath: 'modules',
          sidebarPath: require.resolve('./sidebars.ts'),
        },
      ],
    ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Testla Screenplay',
      logo: {
        alt: 'Testla Screenplay Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
          {
            type: 'docSidebar',
            sidebarId: 'modulesSidebar',
            docsPluginId: 'modules',
            position: 'left',
            label: 'Modules & API',
            href: '/modules/testla-screenplay-playwright/introduction'
          },
        {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/testla/screenplay',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Screenplay Pattern Overview',
              to: '/docs/screenplay-pattern',
            },
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorial-basics/introduction',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Discord',
              href: 'https://discord.com/channels/1194567305489813554/1194607548427411467',
            },
            // {
            //   label: 'X',
            //   href: 'https://x.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/testla-project',
            // },
            {
              label: 'Credits',
              to: '/credits',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Testla Screenplay Project`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
