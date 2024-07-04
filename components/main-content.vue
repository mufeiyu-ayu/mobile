<script lang="ts" setup></script>

<template>
  <div class="dark:bg-dark-bg1">
    <div class="flex justify-between items-center px-[6px] mb-[10px]">
      <span
        class="text-2xl dark:text-dark-white1 leading-6 pl-[6px] font-normal border-l-4 border-solid border-[#ff7a5e]"
      >本季新番</span
      >
      <div class="flex items-center mr-[6px]">
        <a
          href="#"
          class="text-sm border-l-1 border-[1px] border-[#ff7a5e] dark:text-dark-white1 text-[#ff7a5e] rounded h-[22px] leading-[22px] ml-[15px] px-[15px] transition-all duration-200"
        >
          <span class="text-[#ff7a5e]">新番时间表</span>
          <van-icon name="arrow" />
        </a>
      </div>
    </div>
    <div>
      <van-grid :column-num="2" :border="false">
        <van-grid-item v-for="value in 24" :key="value">
          <a href="" class="block dark:bg-dark-bg1 bg-[#fff] shadow-md rounded">
            <div class="rounded-t rounded-tr-4 overflow-hidden relative">
              <img src="/images/griditem.webp" alt="" >
            </div>
            <div class="flex items-center space-between px-[8px] py-[4px]">
              <span
                class="text-sm dark:text-dark-white1 leading-[1.2em] truncate line-clamp-1 whitespace-normal"
              >拯救美少女战士的宇智波赵露是也</span
              >
              <span class="flex items-center ml-[0.5em] flex-shrink-0">
                <Icon size="12" name="mdi:eye" />
                <span class="text-xs dark:text-dark-white1 leading-[1.2em]"
                >2</span
                >
              </span>
            </div>
          </a>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .van-grid-item__content {
  padding-top: 0;
}

::v-deep .van-icon-arrow {
  transform: translateX(6px);
  font-weight: 600;
}

.iconify {
  line-height: 1.2em;
  margin-right: 5px;
}

.dark {
  --van-background-2: #3b3b3b;
}
</style>
