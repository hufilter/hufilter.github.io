import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'hufilter',
  tagline: 'A magyar reklámszűrő lista',
  favicon: 'img/favicon.ico',
  url: 'https://hufilter.hu',
  baseUrl: '/',
  organizationName: 'hufilter',
  trailingSlash: false,
  projectName: 'hufilter',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // TODO: Add English translation
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/hufilter/hufilter.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hufilter/hufilter.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      title: 'hufilter',
      logo: {
        alt: 'Hufilter Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'about',
          label: 'A hufilter projekt',
          position: 'left',
        },
        {
          to: 'filters',
          label: 'Szűrőlisták',
          position: 'left',
        },
        {
          to: 'docs/adblockers',
          label: 'Reklámblokkoló gyorstalpaló',
          position: 'left',
        },
        // TODO: Consider a dropdown or something for the Wiki
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Wiki',
        // },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/hufilter/hufilter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Támogatás',
          items: [
            {
              label: 'Probléma bejelentése',
              href: 'https://github.com/hufilter/hufilter-dev/issues/new',
            },
            {
              label: 'Kapcsolatfelvétel',
              href: 'mailto:hufilter@protonmail.com',
            }
          ],
        },
        {
          title: 'Közösség',
          items: [
            {
              label: 'Témaindítás',
              href: 'https://github.com/hufilter/hufilter-dev/discussions',
            },
            {
              label: 'Közreműködők',
              href: 'https://github.com/hufilter/hufilter-dev/graphs/contributors',
            }
          ],
        },
        {
          title: 'Egyéb',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hufilter/hufilter',
            },
          ],
        },
      ],
      copyright: `Copyright © 2007-${new Date().getFullYear()} Hufilter Contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
