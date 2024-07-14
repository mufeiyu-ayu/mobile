<script lang="ts" setup>
const router = useRouter()
const loginInfo = reactive({
  username: '',
  password: ''
})

const onSubmit = (value: any) => {
  router.push('/')
}
</script>

<template>
  <div class="w-[100vw]">
    <div class="mt-[30px] flex flex-col items-center">
      <div>
        <!--        <img-->
        <!--          class="w-[130px] h-[130px] rounded-full border-[#f5f5f5] border-[1px] border-solid"-->
        <!--          src="/images/th.jpeg"-->
        <!--        />-->
        <van-image src="/images/th.jpeg" width="130" height="130" round>
          <template #error>
            <span>图片加载失败</span>
          </template>
        </van-image>
      </div>
      <div class="mt-[20px] mb-[20px] text-[#b0b0b0] text-[14px]">欢迎进入二次元世界</div>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="loginInfo.username"
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="mt-[10px] flex justify-center" style="margin: 16px">
        <div class="w-4/5">
          <van-button round block color="#0ac1ff" native-type="submit">登录</van-button>
        </div>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-button__text) {
  color: #fff;
}
</style>
