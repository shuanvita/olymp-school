<script setup lang="ts">
defineProps<{
  title: string
  textAbout: string
  levels: {
    levelname: string
    levelhard: boolean
    leveldescr: string
  }[]
  subjects: {
    name: string
    imgdiscip: any
  }[]
}>()
</script>

<template>
  <section
    aria-labelledby="about-heading"
    class="md:mt-[77px] mt-15 md:space-y-10 space-y-4"
  >
    <div class="md:space-y-7 space-y-4.5 xl:pl-42 xl:pr-32 lg:px-20 px-5">
      <BaseHeading id="about-heading">
        {{ title }}
      </BaseHeading>

      <div
        class="text-primary-paragraph-r"
        v-html="textAbout"
      />
    </div>

    <div
      :style="{ '--cols': levels.length }"
      class="grid min-[500px]:grid-cols-[repeat(auto-fit,minmax(325px,1fr))] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xl:px-35 lg:px-10 px-5 gap-y-5"
      :class="[levels.length > 2 ? 'gap-x-[55px]' : 'gap-x-4']"
    >
      <div
        v-for="(item, i) in levels"
        :key="i"
        class="rounded-[88px] md:gap-x-2 layout-mobile:gap-x-[31px] gap-x-3 layout-mobile:py-3.5 py-2 layout-mobile:px-4.5 px-2 flex flex-row items-center not-md:max-w-md"
        :class="item.levelhard ? 'bg-[#FF9900]' : 'bg-primary'"
      >
        <span
          class="bg-white md:size-[147px] layout-mobile:size-29.5 size-20 rounded-full md:text-primary-heading-md layout-mobile:text-[16px] text-[10px] leading-[1.1em] font-bold shrink-0 grid place-items-center text-center"
          v-html="item.levelname"
        />

        <p
          class="layout-mobile:text-primary-paragraph-r text-[12px] text-white not-md:max-w-[181px]"
          v-html="item.leveldescr"
        />
      </div>
    </div>

    <div class="grid min-[500px]:grid-cols-[repeat(auto-fit,minmax(425px,1fr))] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 xl:px-43 lg:px-10 px-[15px] items-stretch not-md:pt-2">
      <div
        v-for="(item, i) in subjects"
        :key="i"
        class="flex flex-row justify-between md:pl-[43px] md:pr-[22px] layout-mobile:pl-7 pl-4 pr-4 py-2.5 rounded-2xl bg-primary items-center gap-x-5 w-full max-w-2xl"
      >
        <span
          class="layout-mobile:text-[clamp(20px,(100vw-400px)/(1440-400)*(24-20)+20px,24px)] text-primary-paragraph-md leading-[1.1em] text-white font-bold"
          :class="{ 'max-w-[260px]': !(subjects.length % 2 && subjects.length - 1 === i) }"
          v-html="item.name"
        />

        <NuxtImg 
          :src="'https://it-edu.com'+item.imgdiscip.node.filePath"
          class="sm:size-[101px] layout-mobile:size-14.5 size-10 pointer-events-none"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
