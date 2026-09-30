<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    class="w-fit px-6 py-2 rounded-full font-medium text-white border-2 border-white bg-transparent hover:bg-white hover:text-[#5045CF] transition-colors"
  >
    {{ text }}
  </button>
</template> 