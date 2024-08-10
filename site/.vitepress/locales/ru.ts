import type { DefaultTheme, LocaleSpecificConfig, LocaleConfig} from 'vitepress'

export const configRu = {
    nav: [
        { text: 'Home', link: '/ru/' },
        { text: 'Introducing', link: '/ru/start/p1' }
    ],

    editLink: {
        pattern: 'https://github.com/PBModular/wiki/edit/master/site/:path',
        text: 'Предложить изменения для данной страницы',
    },

    search: {
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            displayDetails: 'Отобразить подробный список',
            noResultsText: 'Ничего не нашли',
            resetButtonTitle: 'Сбросить поиск',
            footer: {
              selectText: 'для выбора',
              selectKeyAriaLabel: 'enter',
              navigateText: 'для навигации',
              navigateUpKeyAriaLabel: 'стрелка вверх',
              navigateDownKeyAriaLabel: 'стрелка вниз',
              closeText: 'закрыть',
              closeKeyAriaLabel: 'escape',
            },
          },
        },
      },
    },

    outline: {
        label: 'В этом параграфе',
        level: 'deep',
    },

    docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница',
    },

    lastUpdated: {
        text: 'Обновлен в ',
        formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
        }
    },

    sidebar: [
      {
        text: '👋 Ознакомление',
        link: '/ru/start/p1',
      },
      {
        text: '📲 Начало Разработки',
        items: [
          { text: 'Part 1', link: '/ru/module_start/p1' },
        ]
      },
      {
        text: '✏️ Создание Модуля',
        items: [
          { text: 'Part 1', link: '/ru/module_medium/p1' },
        ]
      },
      {
        text: '✨ Расширенное Использование',
        items: [
          { text: 'Part 1', link: '/ru/module_advanced/p1' },
        ]
      }
  ]
}


export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "PBModular Wiki",
    description: "Здесь вы узнаете, как работает телеграм-бот PBmodular и как с ним работать",
    themeConfig: configRu,
}