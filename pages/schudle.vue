<script lang="ts" setup>
const items = ref(
  [
    { date: '7-1', day: '周日' },
    { date: '6-31', day: '周六' },
    { date: '6-30', day: '周五' },
    { date: '6-29', day: '周四' },
    { date: '6-28', day: '周三' },
    { date: '6-27', day: '周二' },
    { date: '6-26', day: '周一' }
  ].reverse()
)

const currentIndex = ref(0)

const maxIndex = computed(() => items.value.length - 1)

const showPrev = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value += 1
  }
}

const showNext = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}
</script>
<template>
  <NuxtLayout name="default">
    <div class="pt-[80px] w-[100vw] dark:bg-dark-bg1 box-border">
      <!--      /* @description 顶部日期切换 */-->
      <div class="relative w-full">
        <a href="javascript:void(0)" class="a_left a_common" @click="showNext" />
        <div class="overflow-hidden pl-[50px] h-[60px] relative">
          <ul :style="{ transform: `translateX(-${currentIndex * 100}%)` }" class="whitespace-nowrap h-[56px]">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="inline-block w-full align-bottom pb-[8px] relative transition-all duration-1000"
            >
              <em class="bilibili" />
              <p class="inline-block pl-[10px] align-bottom">
                <span class="text-xs block ml-[-3px] dark:text-dark-white2">{{ item.date }}</span>
                <span class="text-[13px] block dark:text-dark-white2">{{ item.day }}</span>
              </p>
              <div
                class="inline-block ml-[15px] mt-[-8px] align-middle w-[64%] border-[#dedede] border-[1px] border-solid"
              />
              <i class="w-[100px] h-[5px] bg-[#ff7a51] rounded-[5px] bottom-0 left-0 absolute" />
            </li>
          </ul>
        </div>
        <a href="javascript:void(0)" class="a_right a_common" @click="showPrev" />
      </div>

      <!--      /* @description 视频记录切换 */-->
      <div class="overflow-hidden pl-[10px]">
        <ul class="whitespace-nowrap">
          <li
            v-for="item in 7"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            class="w-full inline-block align-top inline-block w-full align-bottom pb-[8px] relative transition-all duration-1000"
          >
            <div v-for="item in 12" class="flex py-0 pl-[40px] pr-[2px]">
              <div class="content-div">
                <em class="content-em" />
                21:30
              </div>
              <div>
                <a href="" class="flex pt-[20px] relative">
                  <div class="content-movie">
                    <!--                    <img-->
                    <!--                      class="bottom-0 top-0 my-auto mx-0 absolute"-->
                    <!--                      src="https://cover.bangumi.online/season/agmOy25X7jFjZgen.webp?v=1659975719175"-->
                    <!--                      alt=""-->
                    <!--                    />-->
                    <div>
                      <van-image
                        width="100%"
                        height="100%"
                        src="https://cover.bangumi.online/season/agmOy25X7jFjZgen.webp?v=1659975719175"
                      >
                        <template #error>
                          <span>图片加载失败</span>
                        </template>
                      </van-image>
                    </div>
                  </div>
                  <div class="flex flex-col justify-between py-[2px] px-0 whitespace-normal">
                    <p class="w-[180px] text-sm line-clamp-1 dark:text-dark-white2">
                      我的隔壁领居喜欢晚上约我出去洗脚按摩大保健总之就是非常多的特殊服务，让我每天都能学习到很多健康小知识
                    </p>
                    <p class="text-[#ff7a5e] text-xs">第12话</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.li_before {
  border-bottom: 1px solid #dedede;
  bottom: 17px;
  content: '';
  height: 1px;
  left: -45px;
  position: absolute;
  width: 30px;
}

.bgImage {
  width: 38px;
  height: 36px;
  background: url('/images/jinlin.png') no-repeat -146px -324px;
  background-size: 247px 663px;
  display: inline-block;
  vertical-align: bottom;
}

.a_left {
  background-position: -77px -542px;
  left: 1px;
}

.a_right {
  background-position: -152px -542px;
  right: 3px;
}

.a_common {
  background-image: url('/images/jinlin.png');
  background-repeat: no-repeat;
  background-size: 247px 663px;
  top: 50%;
  transform: translateY(-33%);
  height: 26px;
  position: absolute;
  width: 20px;
  z-index: 1;
}

.bilibili {
  width: 50px;
  height: 48px;
  background-position: -56px -468px;
  background-image: url('/images/jinlin.png');
  background-repeat: no-repeat;
  background-size: 247px 663px;
  display: inline-block;
  vertical-align: bottom;
}

.content-div {
  color: #aaa;
  flex-shrink: 0;
  padding: 20px 0 0 5px;
  position: relative;
  /* @description 需要对 border 颜色进行切换 */
  border-left-color: #ff7a5e;
  border-left-width: 1px;
  border-left-style: solid;
}

.content-em {
  background-color: rgb(231, 231, 231);
  /* @description 需要对 border 颜色进行切换 */
  border-color: #ff7a5e;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  height: 3px;
  left: -3px;
  position: absolute;
  top: 24px;
  width: 3px;
}

.content-movie {
  border-radius: 4px;
  box-shadow: 0 0 6px #0003;
  flex-shrink: 0;
  height: 72px;
  margin: 0 6px;
  overflow: hidden;
  position: relative;
  width: 72px;
}
</style>
