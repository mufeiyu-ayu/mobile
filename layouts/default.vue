<script setup lang="ts">
const initHeight = headerHeightState()
const theme = changeThemeState()
const bgColor = ref('')
// const bottmContentBol = ref(false)
const scrollPosition = ref(0)
const iconColor = computed(() => {
  return theme.value === 'dark' ? '#fff' : '#282828'
})


/* @description 监听页面滚动 */
const handleScroll = () => {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop
  if (scrollPosition.value > initHeight.value) {
    if (theme.value === 'dark') {
      bgColor.value = '#141414cc'
    } else {
      bgColor.value = '#fffc'
    }
  } else {
    bgColor.value = ''
  }

  // bottmContentBol.value = scrollPosition.value > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="theme1">
      <a href="#" class="h-1/2 w-1/2">
        <img
          class="w-auto h-full"
          src="/images/logo_text.png"
          alt="Bangumi Online"
        >
      </a>
      <div class="flex w-1/2 items-center">
        <div class="relative">
          <a href="" class="block p-[6.5px] text-center text-[#61666d]">
            <van-icon
              class="!font-extrabold"
              :color="iconColor"
              size="22px"
              name="search"
            />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class="block p-[6.5px] text-center text-[#61666d]">
            <van-icon
              class="!font-extrabold"
              :color="iconColor"
              size="22px"
              name="envelop-o"
            />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class="block p-[6.5px] text-center text-[#61666d]">
            <Icon
              size="22px"
              mode="css"
              color="red"
              name="ic:baseline-translate"
            />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class="block text-center text-[#61666d]">
            <img
              class="w-[35px] rounded-full"
              src="/images/login_right.webp"
              alt=""
            >
          </a>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: none; /* 去掉最大宽度限制 */
}

.theme1 {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  transition: all 0.3s linear;
  width: 100%;
  z-index: 9;
  box-shadow: 0 2px 4px #00000014;
  background-color: v-bind(bgColor);
}

.iconify {
  color: v-bind(iconColor);
  font-weight: 800;
}
</style>
