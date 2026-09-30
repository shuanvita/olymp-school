<script setup lang='ts'>
const props =
  defineProps<{
    info?: any
  }>()

const items = props.info.talant;
</script>

<template>
  <BaseSection aria-labelledby="support-talent-heading"
    class="relative bg-(color:--color-block) rounded-base pt-10 min-[1100px]:pb-[6.1%] min-[450px]:pb-[47%] pb-[64%] overflow-hidden [--color-block-light:#FFF5CF] [--color-block:#FF9900]">
    <div class="md:space-y-3 space-y-7">
      <div class="flex justify-between items-center mb-10 max-md:flex-col-reverse max-md:justify-start max-md:items-start">
        <BaseHeading id="support-talent-heading" type="secondary" class="text-white">
          Поддержка <br> талантов
        </BaseHeading>
        <img class="max-w-[400px] max-md:ml-auto max-md:max-w-[134px] w-full" src="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/sber-1.png"
          alt="Сбер">
      </div>

      <div
        class="grid min-[560px]:grid-cols-2 grid-cols-1 md:gap-x-6.5 md:gap-y-6 gap-2 min-[1100px]:max-w-[761px] min-[1100px]:ml-auto">
        <div v-for="(item, ind) in items" :key="ind"
          class="bg-(color:--color-block-light) max-md:col-span-1 md:rounded-base rounded-[10px] flex items-center py-4 px-4.5">
          <p class="text-primary-paragraph-r" v-html="item.descr" />
        </div>
        <!-- <div class="min-md:col-span-2">
          <NuxtLink to="https://edu.mipt.ru/olymp-school/horizon"
            class="min-w-[280px] max-sm:min-w-[200px] text-center justify-self-end justify-center text-xl max-md:text-lg max-sm:text-sm bg-(color:--color-block-light) md:rounded-base rounded-[10px] flex items-center py-4 px-4.5">Узнать больше</NuxtLink>
        </div> -->

      </div>

      <div class="text-(color:--color-block-light)">
        <svg aria-hidden="true" style="transform: scale(1, -1)" class="absolute right-0 bottom-0 w-[16.6%] not-layout-mobile:hidden rounded-tr-base"
          viewBox="0 0 240 298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.3541 -38.7511C30.5198 -23.0069 50.8356 -8.01253 70.5889 8.49754C101.466 34.3048 130.911 62.7753 173.22 64.6348C205.115 66.0365 188.126 34.4002 172.776 21.6252C154.649 6.53844 126.094 -5.11765 102.103 2.42855C81.1277 9.02592 69.4614 38.9144 71.5618 58.9166C75.9791 100.984 110.689 137.829 145.568 157.759C169.718 171.559 195.446 174.512 222.999 174.336C250.389 174.162 270.791 175.091 268.414 142.952C266.316 114.577 218.338 123.462 199.066 126.208C185.73 128.109 154.111 146.332 157.813 163.479C168.552 213.224 202.397 261.502 245.141 288.173"
            stroke="currentColor" stroke-width="19" stroke-linecap="round" />
        </svg>

        <svg aria-hidden="true" class="absolute right-0 top-0 layout-mobile:hidden w-[37%] rounded-tr-base"
          viewBox="0 0 143 277" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.69594 -59.8985C29.8616 -44.1544 50.1774 -29.16 69.9307 -12.6499C100.808 13.1573 130.253 41.6279 172.562 43.4873C204.456 44.889 187.468 13.2527 172.118 0.477747C153.99 -14.609 125.436 -26.2651 101.444 -18.7189C80.4695 -12.1215 68.8032 17.7669 70.9036 37.7692C75.3209 79.8363 110.031 116.682 144.909 136.612C169.06 150.411 194.787 153.364 222.341 153.189C249.731 153.014 270.133 153.943 267.756 121.805C265.657 93.4299 217.68 102.314 198.408 105.061C185.072 106.961 153.453 125.185 157.155 142.332C167.894 192.077 201.738 240.355 244.483 267.025"
            stroke="currentColor" stroke-width="19" stroke-linecap="round" />
        </svg>

        <svg aria-hidden="true"
          class="absolute left-0 bottom-0 min-[1200px]:w-[25.6%] min-[1100px]:w-1/5 min-[450px]:w-[23.5%] w-[52%] rounded-bl-base max-[450px]:-left-6"
          viewBox="0 0 368 397" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M352.449 25.3576C351.542 10.7502 338.965 -0.356119 324.358 0.550943L86.3161 15.3324C71.7087 16.2394 60.6024 28.8164 61.5094 43.4238C62.4165 58.0312 74.9935 69.1376 89.6009 68.2305L301.193 55.0914L314.332 266.684C315.239 281.291 327.816 292.398 342.424 291.491C357.031 290.583 368.138 278.007 367.23 263.399L352.449 25.3576ZM-50.2594 413.047C-59.947 424.017 -58.9071 440.764 -47.9367 450.451C-36.9663 460.139 -20.2197 459.099 -10.5321 448.129L-50.2594 413.047ZM306.136 9.45903L-50.2594 413.047L-10.5321 448.129L345.864 44.541L306.136 9.45903Z"
            fill="currentColor" />
        </svg>
      </div>
    </div>
  </BaseSection>
</template>
