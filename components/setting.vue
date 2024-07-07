<script lang="ts" setup>
import { headerHeightState } from '~/composables/states'

const theme = ref('light')
const themeICON = ref('teenyicons:moon-outline')
const vantTheme = changeThemeState()
const headerBg = headerBgState()
const scrollPosition = ref(0)
const showToHeader = ref(false)
onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'light'
  applyTheme()
})

/* @description 主题切换 */
const toggleTheme = () => {
  vantTheme.value = theme.value = theme.value === 'light' ? 'dark' : 'light'
  themeICON.value = theme.value === 'light' ? 'teenyicons:moon-outline' : 'teenyicons:sun-outline'
  headerBg.value = theme.value === 'light' ? '#fff' : '#141414cc'
  localStorage.setItem('theme', theme.value)
  applyTheme()
}

/* @description 显示隐藏顶部 */
const handleScroll = () => {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop

  showToHeader.value = scrollPosition.value > 300
}
const applyTheme = () => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const handleToHeader = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="fixed bottom-[40px] right-[20px] z-[20] flex flex-col">
    <div class="theme-btn">
      <Icon size="15" name="la:donate" />
      <span>捐赠</span>
    </div>
    <div class="theme-btn" @click="toggleTheme">
      <Icon size="15" :name="themeICON" />
      <span>主题</span>
    </div>
    <div v-if="showToHeader" class="theme-btn" @click="handleToHeader">
      <Icon size="15" name="mingcute:triangle-fill" />
      <span>顶部</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iconify {
  padding-bottom: 12px;
}
</style>
