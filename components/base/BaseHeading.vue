<script setup lang='ts'>
const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'none'
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    transform?: 'uppercase' | 'normal-case' | 'lowercase'
  }>(),
  { type: 'primary', as: 'h2', transform: 'uppercase' },
)
</script>

<template>
  <component
    :is="as"
    class="font-bold text-primary-heading"
    :class="[
      props.type === 'primary'
        ? 'text-primary-heading-r font-nauryzRedKeds text-primary-dark'
        : props.type === 'secondary'
          ? 'text-secondary-heading-r font-nunito-sans' 
            : props.type === 'none'
            ? '' : 'font-nunito-sans',
      props.transform,
    ]"
  >
    <slot />
  </component>
</template>
