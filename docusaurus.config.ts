import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import htmlPagesPlugin from './plugins/html-pages';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Momentum',
  tagline:
    'A hub for self-improvement: notes, systems and experiments for getting a little better every week.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://momentum-hub.example.com',
  baseUrl: '/',

  organizationName: 'your-username',
  projectName: 'momentum-hub',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    },
  ],

  plugins: [htmlPagesPlugin],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/your-username/momentum-hub/tree/main/',
        },
        blog: {
          blogTitle: 'Essays',
          blogDescription:
            'Longer-form notes on habits, focus, energy and the slow work of getting better.',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/your-username/momentum-hub/tree/main/',
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

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'self improvement, habits, focus, deep work, dopamine, sleep, learning, weekly review, personal growth',
      },
      {name: 'author', content: 'Momentum'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'start-here',
      content:
        'New here? Begin with <a href="/docs/intro">How this hub works</a> or skip to the <a href="/docs/toolkit/templates">templates</a>.',
      backgroundColor: '#141026',
      textColor: '#ded7ff',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: 'Momentum',
      logo: {
        alt: 'Momentum logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hubSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/blog', label: 'Essays', position: 'left'},
        {
          type: 'dropdown',
          label: 'Start here',
          position: 'left',
          items: [
            {label: 'How this hub works', to: '/docs/intro'},
            {label: 'The five pillars', to: '/docs/foundations/identity'},
            {label: 'The weekly review', to: '/docs/systems/weekly-review'},
            {label: 'Templates & checklists', to: '/docs/toolkit/templates'},
            {
              label: 'Dopamine 101 walkthrough',
              to: '/html/dopamine-walkthrough',
            },
          ],
        },
        {
          href: 'https://github.com/your-username/momentum-hub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Start here', to: '/docs/intro'},
            {label: 'Essays', to: '/blog'},
            {
              label: 'Dopamine 101 walkthrough',
              to: '/html/dopamine-walkthrough',
            },
          ],
        },
        {
          title: 'The pillars',
          items: [
            {label: 'Foundations', to: '/docs/foundations/identity'},
            {label: 'Systems & rituals', to: '/docs/systems/weekly-review'},
            {label: 'Body & energy', to: '/docs/health/sleep'},
            {label: 'Learning & thinking', to: '/docs/learning/learning-how-to-learn'},
            {label: 'Toolkit', to: '/docs/toolkit/templates'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'All tags', to: '/blog/tags'},
            {label: 'Archive', to: '/blog/archive'},
            {label: 'GitHub', href: 'https://github.com/your-username/momentum-hub'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Momentum. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
