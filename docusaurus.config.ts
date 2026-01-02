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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en'],
    localeConfigs: {
      hu: {
        label: 'Magyar',
        direction: 'ltr',
        htmlLang: 'hu',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },
  plugins: [
    tailwindPlugin,
    () => ({
      name: 'locale-redirect-plugin',
      getClientModules() {
        return ['./src/clientModules/localeRedirect.ts'];
      },
    }),
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/hufilter/hufilter.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
