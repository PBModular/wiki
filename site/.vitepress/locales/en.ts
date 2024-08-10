import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const ConfigEn: LocaleSpecificConfig<DefaultTheme.Config> = {
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Introducing', link: '/start/p1' }
    ],
    
    editLink: {
        pattern: 'https://github.com/PBModular/wiki/edit/master/site/:path',
        text: 'Suggest changes for this page',
    },
    
    search: {
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            displayDetails: 'Show detailed list',
            noResultsText: 'Nothing was found',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'for selection',
              selectKeyAriaLabel: 'enter',
              navigateText: 'for navigation',
              navigateUpKeyAriaLabel: 'up arrow',
              navigateDownKeyAriaLabel: 'down arrow',
              closeText: 'closed',
              closeKeyAriaLabel: 'escape',
            },
          },
        },
      },
    },

    outline: {
        label: 'In this paragraph.',
        level: 'deep',
    },

    docFooter: {
        prev: 'Previous page',
        next: 'Next page',
    },

    lastUpdated: {
        text: 'Updated in ',
        formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
        }
    },

    sidebar: [
        {
          text: '👋 Introducing',
          link: '/start/p1',
        },
        {
          text: '📲 Beginning of development',
          items: [
            { text: 'Part 1', link: '/module_start/p1' },
          ]
        },
        {
          text: '✏️ Module Creation',
          items: [
            { text: 'Part 1', link: '/module_medium/p1' },
          ]
        },
        {
          text: '✨ Advanced Usage',
          items: [
            { text: 'Part 1', link: '/module_advanced/p1' },
          ]
        }
    ]
}


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "PBModular Official Wiki",
    description: "Here you will learn how PBmodular telegram bot works and how to work with it",
    themeConfig: ConfigEn,
}