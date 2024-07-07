<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

const yearIndex = ref<null | number>(null)
const seasonIndex = ref<null | number>(null)
const searchValue = ref('')
const handleSearch = () => {
  console.log(searchValue, 'searchValue')
}

const cartoon = [
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/n3bGxm2rEnIyxEgR.webp?t=1673926151340s',
    movie: true
  },
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/jbqOVNpY5RTRW2nJ.webp?t=1673926151340',
    movie: true
  },
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/n3brRwNM0KipRk51.webp?t=1673926151340',
    movie: true
  },
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/r0Kbss',
    movie: false
  },
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/vvk12J0E5JsKKWEZ.webp?t=1673926151340s',
    movie: false
  },
  {
    title: '我的隔壁美女领居爱上我的票噢好睡觉啦快哦金老师几楼啊就是垃圾哦哦啊就是垃圾咯姜辣素睡觉啦就是了',
    //     播放量
    play: '4千次播放',
    description:
      ' 高校生兼ラノベ作家の和泉正宗には、引きこもりの妹がいる。和泉紗霧。一年前に妹になった彼女は、全く部屋から出てこない。そんなある日、衝撃の事実が正宗を襲う。\n' +
      '                彼の小説のイラストを描いてくれているイラストレーター『エロマンガ先生』、その正体が、なんと妹の紗霧だったのだ！\n' +
      '                一つ屋根の下でずっと引きこもっている可愛い妹が、いかがわしいPNで、えっちなイラストを描いていたなんて!?',
    imgUrl: 'https://cover.bangumi.online/season/5Jr0rRWMggHVz6pB.webp?t=1673926151340',
    movie: true
  }
]
const getYearData = computed(() => {
  return [1980, 1989, 1995, 2005, 2016, 2017, 2018, 2019, 2022, 2023, 2024]
})
const getSeason = computed(() => {
  return ['春', '夏', '秋', '冬']
})
</script>

<template>
  <NuxtLayout name="default">
    <div class="pt-[95px] w-[100vw] flex justify-center dark:bg-dark-bg1">
      <div class="w-[96vw] transition-all duration-200">
        <van-search v-model="searchValue" show-action placeholder="搜索" @search="handleSearch">
          <template #action />
          <template #right-icon>
            <van-button color="#ff7a51" @click="handleSearch">搜索</van-button>
          </template>
        </van-search>
      </div>
    </div>
    <div class="pb-[30px] py-[20px] dark:bg-dark-bg1">
      <div class="flex justify-between items-center box-border mx-[8px] mt-[10px] font-bold">
        <span class="text-nowrap dark:text-dark-white1 text-sm">年份</span>
        <div
          class="outline-4 rounded-[50px] ml-[10px] border-[1px] border-[#ccc] border-solid overflow-x-auto hide-scrollbar"
        >
          <ul class="flex">
            <li
              v-for="(item, index) in getYearData"
              :key="index"
              class="text-sm rounded-[50px] py-[5px] px-[15px] dark:text-dark-white1"
              :class="[yearIndex === index ? 'bg-[#ff7a51] text-[#fff]' : '']"
              @click="yearIndex = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center box-border mx-[8px] mt-[10px] font-bold">
        <span class="text-nowrap text-sm dark:text-dark-white1">季度</span>
        <div
          class="outline-4 rounded-[50px] ml-[10px] border-[1px] border-[#ccc] border-solid overflow-x-auto hide-scrollbar"
        >
          <ul class="flex mt-[4px]">
            <li
              v-for="(item, index) in getSeason"
              :key="item"
              class="text-sm rounded-[50px] py-[5px] px-[15px] dark:text-dark-white1"
              :class="[seasonIndex === index ? 'bg-[#ff7a51] text-[#fff]' : '']"
              @click="seasonIndex = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="h-[0.9px] mx-auto w-[97vw] mt-[35px] dark:bg-dark-border bg-[#f1f2f3]" />
    </div>
    <div class="dark:bg-dark-bg1">
      <ul class="grid">
        <li v-for="item in cartoon" class="flex py-[20px] px-[10px]">
          <div class="shrink-0 relative w-[150px]">
            <!--            <img :src="item.imgUrl" alt="" />-->
            <van-image v-lazy="item.imgUrl" show-error="图片加载失败" width="100%" height="100%" :src="item.imgUrl">
              <template #error>
                <span>图片加载失败</span>
              </template>
            </van-image>
          </div>
          <div class="flex flex-col justify-between pl-[15px]">
            <div>
              <p class="text-base font-semibold line-clamp-1 dark:text-dark-white2">
                {{ item.title }}
              </p>
              <p class="line-clamp-3 text-xs text-[#9499a0]">
                {{ item.description }}
              </p>
            </div>
            <div>
              <p class="text-[#61666d] text-[13px] mt-[5px]">{{ item.movie ? '电影' : '' }}</p>
              <p class="text-[#61666d] text-[13px] mt-[5px]">{{ item.play }}</p>
              <p class="w-[100px] mt-[10px]">
                <van-button color="#ff7a51" @click="$router.push('/watch')">立即观看</van-button>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
:root:root {
  --van-search-padding: 0;
}

::v-deep .van-search {
  border: 1px solid #f1f2f3;
  height: 50.5px;
  border-radius: 6px;
  transition: background-color 0.2s;
  width: 100%;
  background-color: #fff;
}

::v-deep .van-search__action {
  display: none;
}

::placeholder {
  color: red;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder {
  /* Edge 12 -18 */
  color: red;
}

::v-deep .van-search__field {
  height: 100%;
  background-color: #ffffff;
}

::v-deep .van-field__right-icon {
  padding: 0 5px;
}

::v-deep .van-search__content {
  background-color: #fff;
  padding-left: 0;
}

::v-deep .van-field__control {
  font-size: 18px;
}

::v-deep .van-button {
  position: none;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  display: block;
  font-size: 16px;
  padding: 0 33px;
  height: 38.5px;
  white-space: nowrap;
}

::v-deep .van-button__text {
  font-size: 16px;
  color: #fff;
}

::v-deep .vans-field__left-icon {
  color: red;
  font-size: 14px;
}
</style>
