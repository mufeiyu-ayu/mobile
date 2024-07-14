<template>
  <NuxtLayout name="default">
    <div class="mt-[60px]">
      <Artplayer :option="option" @get-instance="getInstance" />
      <video-info />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import VideoInfo from '~/components/video-info.vue'
// import artplayerPluginVttThumbnail from 'artplayer-plugin-vtt-thumbnail'

const option = reactive({
  url: '/images/video.mp4',
  autoplay: true, //自动播放
  muted: false, //静音，
  autoSize: false, // 自适应容器
  fullscreen: true, //全屏
  setting: true,
  // useSSR: true,  //使用 ssr 报错
  // playsInline: true,
  aspectRatio: true,
  subtitleOffset: true,
  fastForward: true, // 移动端常按快进
  autoOrientation: true, // 自动横屏
  thumbnails: {
    // 进度条设置预览图
    url: '/images/swipper1.png',
    number: 60,
    column: 10
  }
  // plugins: [
  //   artplayerPluginVttThumbnail({
  //     // vtt: '/assets/sample/bbb-thumbnails.vtt' // // vtt: '/assets/sample/bbb-thumbnails.vtt' // vtt 格式的字幕文件
  //   })
  // ]
})

const getInstance = (art: any) => {
  console.info(art)
}
</script>
