<script lang="ts" setup="">
const images = [
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png'
]
const divContainer = ref<HTMLElement | null>(null)

const height = headerHeightState()
onMounted(() => {
  nextTick(() => {
    const initHeight = divContainer.value?.clientHeight
    setTimeout(() => {
      const res = divContainer.value?.clientHeight! - initHeight!
      height.value = res!
    }, 0)
  })
})
</script>

<template>
  <div ref="divContainer" class="pb-[32px] h-full dark:bg-dark-bg1">
    <van-swipe :touchable="false" :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <van-image v-lazy="image" height="100%" :src="image">
          <template #error>
            <span>图片加载失败</span>
          </template>
        </van-image>
      </van-swipe-item>
      <template #indicator />
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped></style>
