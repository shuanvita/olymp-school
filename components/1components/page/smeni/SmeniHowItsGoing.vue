<script setup lang='ts'>
const props = 
  defineProps<{
    info?: any
  }>()


const items = [
  {
    imgStyles: 'sm:w-[225px] min-[360px]:w-[143px] w-25 h-max aspect-[1.05]',
  },
  {
    imgStyles: 'sm:w-[264px] min-[360px]:w-[143px] w-25 h-max aspect-[1.31]',
  },
  {
    imgStyles: 'sm:w-[230px] min-[360px]:w-[143px] w-25 h-max aspect-[1.18]',
  },
  {
    imgStyles: 'sm:w-[230px] min-[360px]:w-[143px] w-25 h-max aspect-[1.18]',
  },
  {
    imgStyles: 'sm:w-[230px] min-[360px]:w-[143px] w-25 h-max aspect-[1.18]',
  },
  {
    imgStyles: 'sm:w-[230px] min-[360px]:w-[143px] w-25 h-max aspect-[1.18]',
  },
]
</script>

<template>
  <BaseSection
    aria-labelledby="how-its-going-heading"
    type="none"
    class="xl:pl-42 xl:pr-38.5 px-primary-padding-layout-r"
  >
    <BaseHeading id="how-its-going-heading">
      КАК ПРОХОДИТ ОБУЧЕНИЕ
    </BaseHeading>
    <div class="grid sm:grid-cols-[repeat(auto-fit,minmax(265px,1fr))] grid-cols-1 md:gap-20 sm:gap-10 gap-3">
      <div
        v-for="(item, i) in props.info.kakprohodit"
        :key="i"
        class="flex sm:flex-col gap-y-6 gap-x-3.5 items-center"
        :class="[i % 2 ? 'flex-row-reverse' : 'flex-row']"
      >
        <NuxtImg 
          alt=""
          :class="items[i].imgStyles"
          loading="lazy"
          :src="'https://it-edu.com'+item.img.node.filePath"
        />
        <div
          class="text-primary-paragraph-r sm:mt-auto my-auto"
          v-html="item.descr"
        />
      </div>
    </div>
  </BaseSection>
</template>
