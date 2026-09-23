<script setup lang="ts">
defineProps<{ steps: { text: string }[] }>()
</script>

<template>
  <section
    aria-labelledby="how-to-get-involved-heading"
    class="mt-primary-between-sections-r space-y-5"
  >
    <BaseHeading
      id="how-to-get-involved-heading"
      class="xl:px-43 px-primary-padding-layout-r"
    >
      КАК СТАТЬ УЧАСТНИКОМ
    </BaseHeading>

    <div class="xl:px-12 px-5 relative flex flex-col items-start not-min-[1100px]:grid not-min-[1100px]:min-[360px]:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] sm:gap-4 gap-10">
      <NuxtImg 
        src="/Smeni/HowToGetInvolved/bg-desktop-1.webp"
        alt="Как стать участником"
        class="absolute left-[50%] -translate-x-1/2 top-[10%] pointer-events-none z-10 w-full max-w-[979px] not-min-[1100px]:hidden"
      />
      <NuxtImg 
        src="/Smeni/HowToGetInvolved/bg-mobile-1.svg"
        alt="Как стать участником"
        class="absolute min-[450px]:left-[25%] left-[10%] min-[450px]:top-0 top-10 pointer-events-none z-30 w-full min-[450px]:max-w-[315px] max-w-70 sm:hidden"
      />
      <div
        v-for="(item, inx) in steps"
        :key="inx"
        class="relative flex items-center gap-2 bg-white z-20"
        :class="[inx === 0 ? 'min-[1100px]:ml-[5%] max-w-[247px]' : '', inx === 1 ? 'min-[1100px]:ml-[18%] max-w-[313px]' : '', inx === 2 ? 'min-[1100px]:ml-[38%] max-w-[325px]' : '', inx === 3 ? 'min-[1100px]:ml-[60%] min-[1100px]:-mt-[3%] max-w-[280px]' : '', inx === 4 ? 'min-[1100px]:ml-auto max-w-[360px]' : '', { 'not-sm:ml-auto': inx % 2 }]"
      >
        <span class="md:text-[72px] text-[60px] leading-[1.1em] text-[#97DFB06B]">
          {{ inx + 1 }}
        </span>
        <div class="text-primary-paragraph-r" v-html="item.text"
        />
      </div>
    </div>
  </section>
</template>
