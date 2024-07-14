<script lang="ts" setup="">
const imgUrl = ref('/images/swiper1.png')
const message = ref('')
</script>

<template>
  <div class="w-[100vw] pt-[20px] px-[10px] dark:bg-dark-bg1">
    <p class="w-4/5 text-base font-extrabold line-clamp-2 dark:text-dark-border">
      斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约斗破苍穹之三年之约
    </p>
    <div class="flex flex-col min-h-[150px] items-end">
      <div class="w-full bg-[#f1f2f3] dark:bg-dark-bg1 rounded-md ml-[30px] mt-[20px] px-[15px] py-[15px]">
        <p class="line-clamp-1 font-bold pb-[10px] dark:text-dark-border">本篇</p>
        <div class="max-h-[200px] overflow-y-auto py-0">
          <ul>
            <li v-for="item in 6" class="mb-[10px]">
              <a href="" class="flex items-center">
                <van-image v-lazy="imgUrl" width="106" height="60" :src="imgUrl">
                  <template #error>
                    <span>图片加载失败</span>
                  </template>
                </van-image>
                <div class="shrink-1 text-sm font-bold ml-[10px] w-full">
                  <div class="dark:text-dark-text">第一话1 第二话</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <p class="w-4/5 py-[25px] text-base font-extrabold dark:text-dark-border">评论</p>
      <div class="flex">
        <van-image v-lazy="imgUrl" round width="50" height="50" :src="imgUrl" />
        <div class="w-[300px]">
          <van-cell-group inset>
            <van-field v-model="message" border rows="3" autosize type="textarea" placeholder="请输入留言" />
          </van-cell-group>
        </div>
      </div>
    </div>
    <div />
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-image__img) {
  border-radius: 4px;
}

:deep(.van-cell__value) {
  border: 1px solid #c9ccd0;
  border-radius: 4px;
}
</style>
