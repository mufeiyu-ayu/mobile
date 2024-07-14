<script setup lang="ts">
const initHeight = headerHeightState()
const theme = changeThemeState()
const router = useRouter()
const dataInfoBol = ref(false)
const headerBg = headerBgState()
const scrollPosition = ref(0)
const imgSHow = ref(false)
const iconColor = computed(() => {
  return theme.value === 'dark' ? '#fff' : '#282828'
})

/* @description 监听页面滚动 */
const handleScroll = () => {
  scrollPosition.value = window.scrollY || document.documentElement.scrollTop
  if (scrollPosition.value > initHeight.value) {
    console.log(11)
    if (theme.value === 'dark') {
      headerBg.value = '#141414cc'
    } else {
      headerBg.value = '#fffc'
    }
    imgSHow.value = true
  } else {
    headerBg.value = ''
    imgSHow.value = false
  }
}

/* @description 监听页面点击 */
const handleClick = (e: Event) => {
  const elementType = (e.target as HTMLElement)!.tagName
  if (elementType !== 'IMG') {
    dataInfoBol.value = false
  }
}

const loginOut = () => {
  //...
  router.push('/login')
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', handleClick)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClick)
})
</script>

<template>
  <div>
    <div class="theme1">
      <a href="/" class="h-1/2 w-1/2">
        <!--        <img class="w-auto h-full" src="/images/logo_text.png" alt="Bangumi Online" />-->
        <van-image v-show="imgSHow" src="/images/logo_text.png" width="100%" height="100%">
          <template #error>
            <span>图片加载失败</span>
          </template>
        </van-image>
      </a>
      <div class="flex w-1/2 items-center">
        <div class="relative">
          <a class="block p-[6.5px] text-center text-[#61666d]" @click="$router.push('/search')">
            <van-icon class="!font-extrabold" :color="iconColor" size="22px" name="search" />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="/alert" class="block p-[6.5px] text-center text-[#61666d]">
            <van-icon class="!font-extrabold" :color="iconColor" size="22px" name="envelop-o" />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a href="" class="block p-[6.5px] text-center text-[#61666d]">
            <Icon size="22px" mode="css" color="red" name="ic:baseline-translate" />
          </a>
        </div>
        <div class="mx-[8px] relative">
          <a class="block text-center text-[#61666d]" @click="dataInfoBol = !dataInfoBol">
            <!--            <img class="w-[35px] rounded-full" src="/images/login_right.webp" alt="" />-->
            <van-image src="/images/login_right.webp" round width="35px" height="35" />
          </a>
          <div v-if="dataInfoBol" class="absolute min-w-[120px] top-[35px] right-0 pt-[18px] ml-[-100%]">
            <ul
              class="bg-[#fff] rounded-md shadow-[0_12px_32px_#0000001a,0_2px_6px_#00000014] overflow-hidden z-[9999999]"
            >
              <li
                class="flex text-[#ff7a51] dark:bg-dark-user border-b dark:border-dark-userB border-[#d0d7de] w-[120px]"
              >
                <div class="flex items-center ml-[10px]">
                  <Icon size="20" name="majesticons:user" />
                </div>

                <p class="block text-[12px] p-[10px] truncate line-clamp-1">zhaoluxihuanxijiao</p>
              </li>
              <li
                class="flex text-[#ff7a51] dark:bg-dark-user justify-between border-b border-[#d0d7de] dark:border-dark-userB w-[120px]"
                @click="$router.push('/mine')"
              >
                <div class="flex items-center ml-[10px]">
                  <Icon size="20" name="fa6-solid:message" />
                </div>
                <p class="block text-[12px] text-right p-[10px] truncate line-clamp-1">个人资料</p>
              </li>
              <li
                class="flex text-[#ff7a51] dark:bg-dark-user justify-between items-center border-b border-[#d0d7de dark:border-dark-userB w-[120px]"
                @click="loginOut"
              >
                <div class="flex items-center ml-[10px]">
                  <Icon size="20" name="uiw:backward" />
                </div>
                <p class="block text-[12px] text-right p-[10px] truncate line-clamp-1">登出</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <slot />
    <setting />
    <div class="pt-[10px] mb-[10px] dark:bg-dark-bg1">
      <div class="text-xs text-center">
        <div class="dark:text-dark-text">意见请回复:support@banggumi.online</div>
        <div class="dark:text-dark-text">Copyleft ©2024 2024 アニメ新番組 bangumi.online</div>
      </div>
    </div>
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
  z-index: 10000;
  box-shadow: 0 2px 4px #00000014;
  background-color: v-bind(headerBg);
}

.iconify {
  color: v-bind(iconColor);
  font-weight: 800;
}

.aa {
  position: absolute !important;
}
</style>
