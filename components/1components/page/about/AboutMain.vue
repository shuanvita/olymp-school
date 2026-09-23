<script setup lang="ts">
const props = 
  defineProps<{
    info?: any
  }>()
</script>
<template>
  <BaseSection aria-labelledby="main-heading">
    <BaseHeading id="main-heading">
      Главное
    </BaseHeading>
  
    <div class="text-primary-paragraph-r" v-html="props.info.descr">
    </div>
  </BaseSection>
</template>
