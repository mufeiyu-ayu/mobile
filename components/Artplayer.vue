<template>
  <div ref="artRef" class="w-[full] h-[210px]" />
</template>

<script setup>
import Artplayer from 'artplayer'

const props = defineProps({
  option: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['get-instance'])

const artRef = ref(null)
let instance = null

onMounted(() => {
  instance = new Artplayer({
    ...props.option,
    container: artRef.value
  })

  emit('get-instance', instance)
})

onBeforeUnmount(() => {
  if (instance && instance.destroy) {
    instance.destroy(false)
  }
})
</script>
