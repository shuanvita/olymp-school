<script setup lang="ts">
import { openForm } from './PipFormModal.vue'
</script>
<template>
  <div class="space-y-8 max-w-(--breakpoint-layout) mx-auto">
    <p class="text-center text-primary-paragraph-r px-5">
      Хочешь принять участие в летних сменах и пообщаться с легендами? <br> Принимай участие в конкурсе!
    </p>
    <div class="flex flex-row flex-nowrap md:gap-x-[15px] gap-x-2 items-center">
      <div class="border-b-4 border-primary w-full rounded-[4px]" />
      <button
        @click="openForm = true"
        type="button"
        class="md:py-4.5 py-3 md:px-8 px-6 rounded-[40px] font-bold text-primary-paragraph-r bg-primary text-nowrap text-white cursor-pointer hover:bg-primary/70 transition-colors"
      >
        Принять участие
      </button>
      <div class="border-b-4 border-primary w-full rounded-[4px]" />
    </div>
  </div>
</template>
