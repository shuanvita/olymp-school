<script setup lang="ts">
const props = 
  defineProps<{
    info?: any
    title?: any
  }>()

import { Pagination, Navigation } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const items = props.info.comandmain.nodes;

</script>

<template>
  <BaseSection
    aria-labelledby="team-heading"
  >
    <BaseHeading
      id="team-heading"
    >

      {{ title }}
    </BaseHeading>
    <ClientOnly>
      <div class="relative">
        <Swiper
          :grab-cursor="true"
          :slidesPerVieww="3"
          :space-between="44"
          :breakpoints="{
            900: {
              slidesPerView: 3,
              navigation: {
                enabled: true,
                prevEl: '.swiper-navigation-mainTeam-prev',
                nextEl: '.swiper-navigation-mainTeam-next',
              },
            },
            768: {
              slidesPerView: 2,
              navigation: {
                enabled: true,
                prevEl: '.swiper-navigation-mainTeam-prev',
                nextEl: '.swiper-navigation-mainTeam-next',
              },
            },
            340: {
              slidesPerView: 1,
            },
            230: {
              slidesPerView: 'auto',
            },
          }"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
            enabled: true,
            el: '.swiper-pagination-custom-main-team',
          }"
         
          :modules="[Pagination, Navigation]"
        >
        
          <SwiperSlide
            v-for="(item, ind) in items"
            :key="ind"
            :lazy="true"
            class="swiper-team-slide"
          >
            <article class="space-y-4">
              <div class="bg-primary relative rounded-base overflow-hidden">
              
                <NuxtImg 
                  :src="'https://it-edu.com'+item.preps.photo.node.filePath"
                  alt=""
                  class="w-swiper-team-slide-width aspect-[1.04] object-contain object-[50%_10px] mx-auto rounded-base z-20 relative"
                  loading="lazy"
                />

                <svg
                  aria-hidden="true"
                  class="absolute inset-0 pointer-events-none"
                  viewBox="0 0 340 326"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M193.88 139.025C188.461 141.63 183.007 144.314 177.372 146.744C150.466 158.015 117.215 161.051 79.9955 152.475C42.2403 143.781 1.80212 123.562 -37.5776 107.921C-76.9573 92.279 -117.67 80.97 -145.764 91.2756C-152.078 93.5788 -157.84 97.2872 -158.667 104.791C-159.387 112.383 -152.989 124.484 -144.086 129.275C-136.584 133.246 -130.771 130.748 -125.197 129.118C-101.903 122.345 -68.5599 134.357 -37.0898 150.263C-5.61967 166.168 26.3685 186.211 57.4245 197.744C92.3116 210.586 124.516 211.902 152.068 206.466C179.621 201.03 202.846 189.104 225.06 176.145C236.945 169.235 251.897 162.375 270.831 173.724C290.591 185.531 303.308 211.898 302.681 229.229C301.947 246.472 291.751 257.196 282.879 268.253C264.396 291.039 249.954 320.295 258.468 360.451C260.063 367.799 262.811 376.191 269.21 382.983C296.249 411.535 302.64 334.112 306.539 324.324C316.063 300.523 336.205 284.607 337.6 255.263C338.648 232.009 326.879 201.846 306.573 175.684C295.151 160.988 280.999 147.473 265.991 139.208C247.463 128.933 229.875 127.811 215.768 131.11C207.698 132.73 200.752 135.794 193.88 139.025Z"
                    fill="white"
                  />
                  <path
                    d="M176.607 49.217C181.18 45.3119 185.766 41.3226 190.592 37.5321C213.719 19.7536 245.088 8.31374 283.263 7.08541C321.986 5.8331 366.251 15.0359 408.321 20.0849C450.392 25.134 492.643 25.6536 517.166 8.50491C522.682 4.66332 527.303 -0.395288 526.183 -7.86161C524.937 -15.3852 515.657 -25.4466 505.825 -27.8011C497.557 -29.7217 492.576 -25.8198 487.604 -22.8184C466.818 -10.3129 431.511 -13.3966 397.02 -20.7236C362.528 -28.0507 326.478 -39.2451 293.505 -42.4517C256.493 -45.9424 225.024 -38.9782 199.778 -26.6756C174.532 -14.3729 155.13 3.09635 136.97 21.3067C127.247 31.0261 114.548 41.4825 93.3407 35.3544C71.2178 28.9942 52.18 6.75702 48.3529 -10.1577C44.6528 -27.0152 51.7658 -39.9909 57.5148 -52.9488C69.5554 -79.705 76.0338 -111.682 57.5317 -148.324C54.1112 -155.02 49.3076 -162.43 41.3846 -167.359C7.94201 -188.046 21.5659 -111.563 20.3004 -101.104C17.1814 -75.6583 1.77967 -55.1192 7.93668 -26.3949C12.872 -3.6462 31.9643 22.5032 58.2866 42.6009C73.0875 53.8865 90.2247 63.3325 106.848 67.4838C127.388 72.6781 144.677 69.264 157.472 62.4668C164.859 58.8365 170.79 54.0975 176.607 49.217Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="space-y-2 text-center text-primary-paragraph">
                <h3 class="font-bold" v-html="item.preps.doljn"> 
                </h3>
                <div v-html="item.preps.descr">
                </div>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
        <button
          v-for="j in 2"
          :key="j"
          class="absolute top-1/2 -translate-y-1/2 disabled:text-primary-inactive disabled:pointer-events-none hover:bg-gray-200 transition-colors size-[50px] cursor-pointer rounded-md text-primary grid place-items-center"
          :class="[
            j === 1
              ? 'rotate-180 -left-[23px] -translate-x-full  swiper-navigation-mainTeam-prev'
              : '-right-[23px] translate-x-full swiper-navigation-mainTeam-next',
          ]"
        >
          <iconify-icon
            icon="iconamoon:arrow-right-2-duotone"
            class="text-5xl"
          />
        </button>

        <div class="swiper-pagination-custom-main-team min-[400px]:gap-x-2 gap-x-1.5 flex justify-center min-[400px]:mt-5 mt-4 mx-auto [--swiper-pagination-bullet-horizontal-gap:0] w-full" />
      </div>
    </ClientOnly>
  </BaseSection>
</template>

<style>
@reference "../../../assets/css/main.css";

.swiper-team-slide {
  @apply w-swiper-team-slide-width;
}

.swiper-pagination-custom-main-team .swiper-pagination-bullet {
  @apply min-[400px]:size-3 size-2 rounded-full cursor-pointer shrink-0;
}

.swiper-pagination-custom-main-team .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-primary;
}

.swiper-pagination-custom-main-team .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  @apply bg-swiper-inactive-bullet;
}

.swiper-pagination-custom-main-team .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  transform: translateX(0);
}
</style>
