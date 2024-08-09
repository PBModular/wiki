import { defineConfig } from 'vitepress'
import { telegram } from '../../site/icons'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PBModular Official Wiki",
  description: "Here you will learn how PBmodular telegram bot works and how to work with it",
  base: '/wiki/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introducing', link: '/start/p1' }
    ],

    sidebar: [
      {
        text: 'Introducing',
        items: [
          { text: 'Part 1', link: '/start/p1' },
        ]
      },
      {
        text: 'Beginning of development',
        items: [
          { text: 'Part 1', link: '/module_start/p1' },
        ]
      },
      {
        text: 'Module Creation',
        items: [
          { text: 'Part 1', link: '/module_medium/p1' },
        ]
      },
      {
        text: 'Advanced Usage',
        items: [
          { text: 'Part 1', link: '/module_advanced/p1' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PBModular/bot' },
      { icon: {svg: telegram}, link: 'https://t.me/PBModular_chat' }
    ]
  }
})
