<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
const testinfo = [
  {
    text: '第一话',
    title: '一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj',
    imgUrl: 'https://cover.bangumi.online/episode/dRxOGqmvn4UQ0Qbp.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/GNvgwLbyW5TM8nwq.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/XGgXezzw3ySeRkWB.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/6y1RpZzpKxCVpber.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/KGlKVx77YoHBEM8e.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/qnJ6bE16KJhoOnJe.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/r0Kdzx2wa7CxYxw1.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title: '一天无数次霸王赵露',
    imgUrl: 'https://cover.bangumi.online/episode/6y1VL6RKmrcV01qG.webp?t=1673926151340',
    play: 10
  },
  {
    text: '第一话',
    title:
      '一天无数次霸王赵露一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj一天无数次霸王赵露daj',
    imgUrl: 'https://cover.bangumi.online/episode/maR14aq1VdUyynBe.webp?t=1673926151340s',
    play: 10
  }
]
</script>

<template>
  <NuxtLayout name="default">
    <div class="pt-[95px] px-[30px] w-[100vw] flex justify-center dark:bg-dark-bg1">
      <div class="flex flex-col justify-center">
        <div class="mb-[10px] w-[90vw] flex items-center">
          <div
            class="bg-no-repeat bg-center bg-cover bg-[url('//static.bangumi.online/img/user_default.png')] rounded-full shadow-[0_0_5px_#0000001a] block h-20 overflow-hidden w-20"
          >
            <img class="rounded-full" src="https://bangumi.online/avatar/ytjhkkjhtyj.webp?t=1720243258029" />
          </div>
          <p class="block ml-[20px] text-3xl dark:text-dark-text text-bold w-[200px] truncate line-clamp-1">
            zhaoluxihuanxijiaoadadadadadasdasdsadas
          </p>
        </div>
        <div class="flex items-center text-bold">
          <div class="divItem beforeContent">
            <p class="p1">金钱</p>
            <p class="p2">-1金-1银-3铜</p>
          </div>
          <div class="divItem beforeContent">
            <p class="p1">邀请</p>
            <p class="p2">-1</p>
          </div>
          <div class="divItem">
            <p class="p1">番组计划</p>
            <p class="p2">未绑定</p>
          </div>
        </div>
        <div class="flex items-center mt-[40px]">
          <div class="flex">
            <Icon size="30" name="material-symbols:history" />
          </div>
          <div class="font-extrabold text-[22px] dark:text-dark-text">观看历史</div>
        </div>

        <div>
          <van-grid :column-num="2" :border="false">
            <van-grid-item v-for="item in testinfo">
              <a href="" class="block dark:bg-dark-bg1 bg-[#fff] rounded">
                <div class="reactive rounded-t rounded-tr-4 overflow-hidden relative">
                  <img :src="item.imgUrl" alt="" />
                  <div class="absolute w-full px-[10px] bottom-[5px] flex justify-between">
                    <span style="text-shadow: 0 0 2px rgba(0, 0, 0, 0.5)" class="text-[#fff]">第10话</span>
                    <span class="bg-[#0009] rounded-sm px-[6px] py-[2px] text-[#fff]">01:08</span>
                  </div>
                </div>
                <div class="flex items-center space-between px-[8px] py-[4px]">
                  <span class="text-sm dark:text-dark-white1 leading-[1.2em] truncate line-clamp-1 whitespace-normal">
                    {{ item.title }}
                  </span>
                </div>
              </a>
            </van-grid-item>
          </van-grid>
        </div>
        <div />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.divItem {
  @apply relative px-[12px] text-center;
}

.p1 {
  @apply text-[15px] font-bold text-nowrap dark:text-dark-text;
}

.p2 {
  @apply text-[20px] font-extrabold mt-[5px] text-[#ff7a5e];
}

.beforeContent::before {
  background: #bbb;
  bottom: 12px;
  content: '';
  position: absolute;
  right: -1px;
  top: 12px;
  width: 2px;
}

::v-deep .van-grid-item__content {
  padding-top: 0;
}
</style>
