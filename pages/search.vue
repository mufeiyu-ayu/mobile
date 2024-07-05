<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

const searchValue = ref('')
const handleSearch = () => {
  console.log(searchValue, 'searchValue')
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="mt-[95px] w-[100vw] flex justify-center">
      <div class="w-[96vw] transition-all duration-200">
        <van-search v-model="searchValue" show-action placeholder="搜索" @search="handleSearch">
          <template #action />
          <template #right-icon>
            <van-button color="#ff7a51" @click="handleSearch">搜索</van-button>
          </template>
        </van-search>
      </div>
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
}

::v-deep .vans-field__left-icon {
  color: red;
  font-size: 14px;
}
</style>
