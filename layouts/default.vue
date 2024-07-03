<script setup lang="ts">

</script>

<template>
  <div>
    <div class="theme1">
      <a href="#" class="h-1/2 w-1/2">
        <img class="w-auto h-full" src="/images/logo_text.png" alt="Bangumi Online">
      </a>
      <div class="flex w-1/2 items-center">
        <div class="relative">
          <a href="" class=" block p-[6.5px] text-center text-[#61666d]">
            <van-icon class="!font-extrabold" color="#282828" size="22px" name="search"/>
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class=" block p-[6.5px] text-center text-[#61666d]">
            <van-icon class="!font-extrabold" color="#282828" size="22px" name="envelop-o"/>
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class=" block p-[6.5px] text-center text-[#61666d]">
            <Icon size="22px" mode="css" color="red" name="ic:baseline-translate"/>
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class="block text-center text-[#61666d]">
            <img class="w-[35px] rounded-full" src="/images/login_right.webp" alt="">
          </a>
        </div>
      </div>
    </div>
    <slot/>
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
  transition: all .3s linear;
  width: 100%;
  z-index: 9;
  box-shadow: 0 2px 4px #00000014;
}

.iconify {
  color: #61666d;
  font-weight: 800;
}
</style>