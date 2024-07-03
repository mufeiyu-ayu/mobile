<script lang="ts" setup="">
const images = [
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
  './images/swiper1.png',
]
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div class="mb-[30px]">
        <van-swipe :touchable="false" :autoplay="3000" lazy-render>
          <van-swipe-item v-for="image in images" :key="image">
            <img :src="image">
          </van-swipe-item>
          <template #indicator/>
        </van-swipe>
      </div>
      <main-content/>

    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>

</style>