<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary'
    as?: 'button' | 'a'
    href?: string
  }>(),
  {
    type: 'primary',
  },
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="p-3 md:border-4 border-3 border-primary text-primary-paragraph-lg rounded-[40px] cursor-pointer hover:bg-primary hover:text-white transition-colors disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-offset-4"
  >
    <slot />
  </component>
</template>
