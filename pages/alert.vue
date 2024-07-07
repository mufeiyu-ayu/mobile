<script lang="ts" setup>
const active = ref(0)
const refreshing = ref(false)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const onRefresh = () => {
  // 清空列表数据
  finished.value = false

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true
  onLoad()
}

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = []
      refreshing.value = false
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }
    loading.value = false

    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <NuxtLayout name="default">
    <div class="pt-[60px]">
      <van-tabs v-model:active="active">
        <van-tab title="系统通知">
          <div>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in list" :key="item" :title="item" />
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
        <van-tab title="收到的回复">
          <div>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in list" :key="item" :title="item" />
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>

        <van-tab title="收到的赞">
          <div>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in list" :key="item" :title="item" />
              </van-list>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
