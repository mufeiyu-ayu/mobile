export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        }
      ]
    }
  },

  css: ['~/assets/style.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@vant/nuxt', '@nuxt/icon'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/validate.scss" as *;'
        }
      }
    }
  },

  postcss: {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, // 设计稿根字体大小
        propList: ['*'] // 需要转换的属性
      }
    }
  },

  compatibilityDate: '2024-07-03'
})
