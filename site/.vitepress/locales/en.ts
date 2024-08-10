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
        text: 'Updated in',
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
            { text: '🖥️ Bot structure', link: '/module_start/p1' },
            { text: '📓 Module structure', link: '/module_start/p2' },
          ]
        },
        {
          text: '✏️ Module Creation',
          items: [
            { text: '💻 Initial structure and a simple handler', link: '/module_medium/p1' },
            { text: '🌎 Traslations', link: '/module_medium/p2' },
            { text: '📁 Multifiling', link: '/module_medium/p3' },
            { text: '☑️ Using /start', link: '/module_medium/p4' },
            { text: '📃 Help page', link: '/module_medium/p5' },
            { text: '✅ Command permission system', link: '/module_medium/p6' },
            { text: '🐍 Using 3rd party python packages', link: '/module_medium/p7' },
            { text: '📋 Getting the list of loaded modules', link: '/module_medium/p8' },
          ]
        },
        {
          text: '✨ Advanced Usage',
          items: [
            { text: '☑️ Module permissions', link: '/module_advanced/p1' },
            { text: '💽 Database usage', link: '/module_advanced/p2' },
            { text: '🔃 Callback functions', link: '/module_advanced/p3' },
            { text: '▶️ Loader usage', link: '/module_advanced/p4' },
            { text: '📥 Load module', link: '/module_advanced/p5' },
            { text: '📤 Unload module', link: '/module_advanced/p6' },
            { text: '✅ Downloading module', link: '/module_advanced/p7' },
            { text: '🔄 Updating a module/extension', link: '/module_advanced/p8' },
            { text: '🗑️ Deleting a module', link: '/module_advanced/p9' },
            { text: '⬇️ Getting an internal name from a common name', link: '/module_advanced/p10' },
          ]
        },
        {
          text: '💬 Publishing',
          items: [
            { text: '💬 Publishing modules', link: '/publishing' }
          ]
        }
    ]
}


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "PBModular Official Wiki",
    description: "Here you will learn how PBModular bot works and how to develop",
    themeConfig: ConfigEn,
}