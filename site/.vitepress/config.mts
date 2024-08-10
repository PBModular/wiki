import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { telegram } from '../../site/icons'

import { ruConfig } from './locales/ru'
import { enConfig } from './locales/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PBModular Official Wiki",
  description: "Here you will learn how PBmodular telegram bot works and how to work with it",
  lastUpdated: true,
  scrollOffset: 'header',
  cleanUrls: true,
  base: '/wiki/',
  
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'lack-translucent',
      },
    ],
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PBModular/bot' },
      { icon: {svg: telegram}, link: 'https://t.me/PBModular_chat' },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      ...enConfig,
    },
    ru: {
      label: 'Russian',
      lang: 'ru',
      link: '/ru/',
      ...ruConfig,
    },
  },
})
