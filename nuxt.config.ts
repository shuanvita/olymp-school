// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2026-02-19',
  devtools: { enabled: true },
  app: {
    baseURL: '/olymp-school/',
    buildAssetsDir: '/assets/',
    head: {
      script: [
        { src: 'https://widget.novofon.ru/novofon.js?k=GdNfZlH5wSX_Wn8WV1I3aGEYAwnABGdR', tagPosition: 'bodyClose' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://it-edu.com/mipt-school/wp-content/themes/mipt_school/favicon.ico' }]
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['iconify-icon', 'swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  css: ['~/assets/css/fonts.css','./assets/css/main.css'],
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     // временно не прерывать билд при ошибках prerender
  //     failOnError: false,
  //     // (опционально) явные маршруты, которые всё‑равно хотите прогнать
  //     // routes: ['/','/about','/services/...']
  //   }
  // },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: false, // Отключает создание sourcemaps для всего билда
    },
    css: {
      devSourcemap: false // Отключает sourcemaps конкретно для CSS
    }
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
    'vue-yandex-maps/nuxt',
    'reka-ui/nuxt',
    'yandex-metrika-module-nuxt3',
  ],
  yandexMetrika: {
    id: '96083258',
    debug: process.env.NODE_ENV !== "production",
    delay: 0,
    cdn: false,
    verification: null, 
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    options: {
     webvisor: true
    },
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    google: {
      families: [
        {
          name: 'Nunito Sans',
          // Указываем все необходимые жирности (weights)
          // 200: ExtraLight, 300: Light, 400: Regular, 500: Medium,
          // 600: SemiBold, 700: Bold, 800: ExtraBold, 900: Black
          weights: [200, 300, 400, 500, 600, 700, 800, 900],
          // Указываем нужные стили (styles)
          // 'normal' - обычное начертание
          // 'italic' - курсивное начертание
          styles: ['normal', 'italic'] 
        }
      ],
      // Дополнительные настройки для всех Google Fonts (опционально)
      display: 'swap', // 'swap' - шрифт будет загружен асинхронно
      // preload: true, // Предварительная загрузка (по умолчанию true)
    },
    // local: [
    //   // Если у вас есть локальные шрифты
    // ],
    // providers: {
    //   // Для настройки Fontsource или других провайдеров
    // }
  },
  yandexMaps: {
    apikey: 'a91fa4b8-dbd9-485a-89ea-d5993f328064',
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  
})

// https://nuxt.com/docs/api/configuration/nuxt-config