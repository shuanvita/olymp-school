<script setup lang='ts'>
import { twMerge } from 'tailwind-merge'
//import CourseStats from '../../base/CourseStats.vue'
//import BeseCourseLevel from '../base/BeseCourseLevel.vue'
//import BeseCourseLevel from '../base/BeseCourseLevel.vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
const props = defineProps<{ title: string, text: string, class?: string, btn?: boolean, href?: string }>()
const smen = {idAdmMer: 489};
</script>

<template>
  <section aria-labelledby="mainscreen-heading" :class="twMerge(
    'relative bg-primary rounded-t-[20px] xl:pl-31 px-5 lg:pb-[8.9%] sm:pb-[14%] min-[460px]:pb-[17%] pb-[27%] xl:pt-15.5 sm:pt-10 pt-4.5 rounded-base z-30 overflow-visible',
    props.class,
  )">
    <div class="text-white sm:space-y-6 space-y-4 z-30">
      <div class="max-md:gap-3 flex items-center gap-5">
        <span class="font-semibold text-lg max-md:text-sm font-nunito-sans">ПРИ ПОДДЕРЖКЕ</span>
        <img class="max-w-[150px] max-md:max-w-[90px] w-full"
          src="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/sber-1.png" alt="Сбер">
      </div>
      <h1 id="mainscreen-heading" class="font-extrabold text-7xl max-md:text-3xl"
        v-html="'ОНЛАЙН-КУРС <br/>ОЛИМПИАДНЫХ <br/>ШКОЛ МФТИ'" />
      

      <!-- Кнопки особенностей курса -->
      <div class="flex gap-3 sm:gap-4 max-w-2xl">
        <NuxtLink  :to="'#program'"
          class="w-fit cursor-pointer px-10 max-md:px-4 text-[clamp(16px,(100vw-400px)/(1440-400)*(32-16)+16px,20px)] leading-[1.1em] text py-2 rounded-full font-medium text-white border-2 border-white bg-transparent hover:bg-white hover:text-[#5045CF] transition-colors">
          Базовый
        </NuxtLink>
        <NuxtLink :to="'#program'"
          class="w-fit cursor-pointer px-10 max-md:px-4 text-[clamp(16px,(100vw-400px)/(1440-400)*(32-16)+16px,20px)] leading-[1.1em] py-2 rounded-full font-medium text-white border-2 border-white bg-transparent hover:bg-white hover:text-[#5045CF] transition-colors">
          Продвинутый
        </NuxtLink>
      </div>

      <p class="max-w-[553px] text-[clamp(16px,(100vw-400px)/(1440-400)*(32-16)+16px,20px)] leading-[1.1em]"
        v-html="'Подготовка школьников 8-10 классов к успешному участию во всероссийских и перечневых олимпиадах в удобном онлайн-формате от топовых преподавателей, тренеров и членов жюри олимпиад'" />

      <!-- Кнопка записи -->
      <div class="relative mt-8 sm:mt-12 lg:mt-16">
        <a v-if="btn"  @click="openModal" class="inline-flex items-center justify-center cursor-pointer px-6 py-3 sm:px-8 sm:py-4 
                 bg-white text-black font-medium rounded-full
                 border-2 sm:border-3 lg:border-4 border-white
                 hover:bg-primary hover:text-white hover:border-white
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary
                 text-sm sm:text-base lg:text-lg
                 w-full sm:w-auto sm:min-w-[200px]
                 relative z-20">
          Записаться
        </a>
      </div>
    </div>



    <div class="pointer-events-none">
      <!-- <img
        src="/public/Main/MainScreen/reosh25_main_mainscreen.webp"
        alt=""
        class="absolute min-[420px]:right-0 -right-13 bottom-0 z-10 lg:w-[69%] sm:w-[85%] min-[420px]:w-full w-[145%] aspect-[1.65] max-w-max"
      > -->


      <svg aria-hidden="true"
        class="max-[420px]:hidden layout:w-[35%] not-layout:lg:w-[35%] sm:w-[45%] w-[45%] absolute -right-32 -rotate-z-[5deg] -top-6"
        viewBox="0 0 789 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path xmlns="http://www.w3.org/2000/svg" d="M836.139 649.39C836.182 648.922 836.226 648.454 836.269 647.986C836.672 637.584 824.409 635.935 814.508 635.483C755.553 632.586 707.69 603.626 674.874 562.419C642.059 521.211 623.082 468.412 610.32 413.118C602.672 380.025 596.978 345.467 582.561 316.532C568.22 287.815 545.847 265.534 530.372 237.691C510.421 201.649 501.997 156.229 473.106 128.151C455.074 110.709 428.61 100.919 398.588 106.648C311.694 123.211 242.101 250.909 155.24 267.275C109.879 275.805 76.8266 249.931 48.047 225.14C38.0885 216.512 27.7845 207.478 24.5203 193.59C20.9721 178.287 26.4287 159.659 32.1875 141.905C45.7724 99.9171 64.7071 53.2298 102.795 25.1503C147.196 -7.5138 202.084 -2.73562 244.86 -38.0218C263.861 -53.6687 277.527 -74.9561 290.422 -95.5052C294.331 -101.703 298.298 -108.026 301.912 -114.484C313.09 -134.067 291.25 -145.019 276.46 -127.28C256.867 -103.852 238.807 -78.3644 215.228 -59.6404C170.652 -24.2198 114.687 -19.0643 70.7678 17.3656C22.532 57.3303 7.07203 118.218 1.31841 168.021C-6.63964 236.662 35.6335 268.439 82.477 296.525C94.7448 303.822 107.392 311.328 122.951 312.718C153.74 315.436 189.777 294.18 219.569 269.696C258.223 237.913 292.255 198.993 332.811 170.634C373.367 142.275 425.74 126.434 453.188 149.747C482.356 174.476 471.233 230.404 492.07 263.076C500.338 276.01 513.194 284.712 524.256 295.046C606.897 371.778 586.615 531.433 661.737 615.787C694.427 652.479 744.339 672.235 800.896 670.866C814.11 670.518 834.369 662.663 836.139 649.39Z" fill="white"/>
      </svg>

      
    </div>

    <!-- Статистика курса -->
    <div class="absolute -bottom-8 left-0 right-0 z-40">
      <BaseCourseStats />
    </div>
  </section>
  <PageSmeniPopup :is-open="isOpen" :smen="smen" :close-modal="closeModal" />

</template>
