import { Lazyload } from 'vant'

export default defineNuxtPlugin(({ vueApp }) => {
  // Doing something with nuxtApp

  vueApp.use(Lazyload, {
    lazyComponent: true
  })
})
