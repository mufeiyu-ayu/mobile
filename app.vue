<script setup lang="ts">

const theme = changeThemeState()
</script>

<template>
  <NuxtLayout name="layout">
    <van-config-provider :theme="theme">
      <NuxtPage />
    </van-config-provider>
  </NuxtLayout>
</template>
