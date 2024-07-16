import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-config.cjs';

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
  plugins: [tailwindPlugin],
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
    announcementBar: {
      id: 'notice',
      content:
        'A hufilter.hu tartalma kialakítás alatt van. Az oldal jelenleg tesztüzemben működik.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
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
        {
          to: 'filtering-policy',
          label: 'Szűrési irányelvek',
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
              to: '/contributors',
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
            {
              label: 'Jogi nyilatkozat',
              to: '/legal',
            }
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
