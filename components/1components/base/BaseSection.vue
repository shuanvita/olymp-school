<script setup lang='ts'>
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'none'
  }>(),
  {
    type: 'primary',
  },
)
</script>

<template>
  <section
    class="mt-primary-between-sections-r space-y-primary-between-section-heading-r md:scroll-mt-15 scroll-mt-10"
    :class="[
      type === 'primary'
        ? 'px-primary-padding-layout-r'
        : type === 'secondary'
          ? 'px-secondary-padding-layout-r'
          : '',
    ]"
  >
    <slot />
  </section>
</template>
