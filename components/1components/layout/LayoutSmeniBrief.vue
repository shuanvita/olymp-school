<script setup lang="ts">
const props = defineProps<{ info: any }>()
</script>

<template>
  <div
    aria-label="Краткая информация"
    class="flex flex-col md:gap-y-3 gap-y-5 md:mt-15 mt-10 lg:px-[25px] px-5"
  >
    <div
      v-for="i in Math.round(props.info.length / 2)"
      :key="i"
      class="flex sm:flex-row flex-col max-w-[1134px] sm:justify-between items-stretch gap-x-3 gap-y-3.5"
      :class="[i % 2 ? 'justify-self-start' : 'ml-auto w-full']"
    >
      <div
        v-for="(item, j) in props.info.slice(2 * (i - 1), 2 * i)"
        :key="j"
        class="border-3 md:min-h-[94px] border-primary md:p-5.5 py-5 px-2 max-w-[512px] w-full rounded-base grid place-items-center text-center mx-auto"
      >
        <p
          class="text-primary-paragraph-r"
          v-html="item.text"
        />
      </div>
    </div>

    <!-- <div class="flex flex-row max-w-[1134px] justify-between self-end w-full gap-x-3">
      <div
        v-for="(item, i) in items.slice(2)"
        :key="i"
        class="border-3 border-primary p-5.5 max-w-[512px] w-full rounded-base grid place-items-center text-center"
      >
        <p
          class="text-primary-paragraph-r"
          v-html="item"
        />
      </div>
    </div> -->
  </div>
</template>
