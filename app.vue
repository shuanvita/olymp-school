<script setup lang='ts'>
import { register } from 'swiper/element'
import 'iconify-icon'

register()
provideHeadlessUseId(() => useId())

useHead({
  htmlAttrs: {
    lang: 'ru',
  },
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>