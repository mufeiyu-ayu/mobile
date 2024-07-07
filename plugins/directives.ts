import { Lazyload } from 'vant'

export default defineNuxtPlugin(({ vueApp }) => {
  // Doing something with nuxtApp
  console.log(Lazyload, 33333)
  vueApp.use(Lazyload, {
    lazyComponent: true
  })
})
