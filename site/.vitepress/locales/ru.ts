import type { DefaultTheme, LocaleSpecificConfig, LocaleConfig} from 'vitepress'

export const configRu = {
    nav: [
        { text: 'Главная', link: '/ru/' },
        { text: 'Ознакомление', link: '/ru/start/p1' }
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
        text: 'Обновлен в',
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
        text: '📲 Начало разработки',
        items: [
          { text: '🖥️ Структура бота', link: '/ru/module_start/p1' },
          { text: '📓 Структура модуля', link: '/ru/module_start/p2' },
        ]
      },
      {
        text: '✏️ Создание модуля',
        items: [
          { text: '💻 Начальная структура и простой обработчик', link: '/ru/module_medium/p1' },
          { text: '🌎 Переводы', link: '/ru/module_medium/p2' },
          { text: '📁 Многофайловость', link: '/ru/module_medium/p3' },
          { text: '☑️ Использование /start', link: '/ru/module_medium/p4' },
          { text: '📃 Справка', link: '/ru/module_medium/p5' },
          { text: '✅ Система разрешений на команды', link: '/ru/module_medium/p6' },
          { text: '🐍 Использование сторонних Python пакетов', link: '/ru/module_medium/p7' },
          { text: '📋 Получение списка загруженных модулей', link: '/ru/module_medium/p8' },
          { text: '🚦 Finite State Machine (FSM)', link: '/module_medium/p9' }
        ]
      },
      {
        text: '✨ Расширенное использование',
        items: [
          { text: '☑️ Разрешения модуля', link: '/ru/module_advanced/p1' },
          { text: '💽 Использование базы данных', link: '/ru/module_advanced/p2' },
          { text: '🔃 Callback-функции', link: '/ru/module_advanced/p3' },
          { text: '▶️ Использование загрузчика', link: '/ru/module_advanced/p4' },
          { text: '🤖 Дополнительные функции бота', link: '/module_advanced/p5' }
        ]
      },
      {
        text: '💬 Публикация',
        items: [
          { text: '💬 Публикация модулей', link: '/ru/publishing' }
        ]
      }
  ]
}


export const ruConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: "PBModular Вики",
    description: "Здесь вы узнаете, как работает PBModular и все его тонкости",
    themeConfig: configRu,
}