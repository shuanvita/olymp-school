<script setup lang="ts">
import { ym_event } from '../../../composables/metrika'
const props = 
  defineProps<{
    info?: any
  }>()

const items = [];
  props.info.forEach(element => {
    let itemsEl = [];
    itemsEl = element;
    let itemsDisclosures = [];
      itemsDisclosures.push({
        name: 'Направления',
        items: element.naprav,
        direction: 'column',
      });
      itemsDisclosures.push({
        name: 'Уровни подготовки',
        items: element.levels,
        direction: 'column',
      });
      
      itemsEl['disclosures'] = itemsDisclosures;
      items.push(itemsEl);
  });

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-coverflow';

const swiper = ref(null)

const slides = [
  {
    name: 'Летние смены на&nbsp;кампусе МФТИ',
    class: '7-10 класс',
    date: 'Июнь-август',
    disclosures: [
      {
        name: 'Направления',
        items: ['математика', 'физика', 'информатика', 'искусственный интеллект', 'биоинформатика', 'Физтех.Инженер'],
        direction: 'column',
      },
      {
        name: 'Уровни подготовки',
        items: ['Базовый', 'Продвинутый', 'Профи'],
        direction: 'row',
      },
    ],
  },
  {
    name: 'Летние <br> онлайн-смены',
    class: '7-10 класс',
    date: 'Июнь-август',
    disclosures: [
      {
        name: 'Направления',
        items: ['математика', 'физика', 'информатика'],
        direction: 'column',
      },
      {
        name: 'Уровни подготовки',
        items: ['Базовый', 'Продвинутый'],
        direction: 'row',
      },
    ],
  },
  {
    name: 'Зимние смены на кампусе МФТИ',
    class: '7-10 класс',
    date: 'Январь',
    disclosures: [
      {
        name: 'Направления',
        items: ['математика', 'физика', 'информатика'],
        direction: 'column',
      },
      {
        name: 'Уровни подготовки',
        items: ['Базовый', 'Продвинутый', 'Профи'],
        direction: 'row',
      },
    ],
  },
  {
    name: 'Курс олимпиадной подготовки',
    class: '7-10 класс',
    date: 'Октябрь-апрель',
    disclosures: [
      {
        name: 'Направления',
        items: ['математика', 'физика', 'информатика'],
        direction: 'column',
      },
      {
        name: 'Уровни подготовки',
        items: ['Базовый', 'Продвинутый'],
        direction: 'row',
      },
    ],
  },
  {
    name: 'Олимпиада «Турниры Олимпиадных школ»',
    class: '7-10 класс',
    date: 'Отборочный тур: ноябрь-февраль <br> Финальный тур: март-апрель',
    disclosures: [
      {
        name: 'Направления',
        items: ['математика', 'физика', 'информатика'],
        direction: 'column',
      },
      {
        name: 'Уровни подготовки',
        items: ['Для всех желающих'],
        direction: 'row',
      },
    ],
  },
]

const modules = [EffectCoverflow, Navigation, Autoplay]
</script>

<template>
  <BaseSection
    aria-labelledby="education-programs-heading"
    class="flex flex-col"
    type="none"
  >
    <BaseHeading
      id="education-programs-heading"
      class="px-primary-padding-layout-r"
    >
      НАПРАВЛЕНИЯ ПОДГОТОВКИ
    </BaseHeading>

    <div class="lg:px-primary-padding-layout-r">
      <div class="relative">
        <Swiper
          :grab-cursor="true"
          :effect="'coverflow'"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :loop="true"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: true,
          }"
          :coverflow-effect="{
            rotate: 0,
            stretch: 98,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }"
          :modules="modules"
          :breakpoints="{
            1024: {
              navigation: {
                enabled: true,
                prevEl: '.swiper-navigation-education-programs-prev',
                nextEl: '.swiper-navigation-education-programs-next',
              },
            },
          }"
          @swiper="(instance) => swiper = instance"
        >
          <SwiperSlide
            v-for="(slide, i) in items"
            :key="i"
          >
            <div
              class="flex flex-col gap-y-5 md:px-10 px-4 pt-10 sm:rounded-base rounded-2xl md:aspect-[1.3] aspect-[0.52] @container w-full bg-primary text-white relative transition-colors"
            >
              <div class="contents">
                <BaseHeading
                  as="h3"
                  transform="normal-case"
                  class="text-white"
                  v-html="slide.smenname"
                />
                <div class="contents text-primary-paragraph-r">
                  <span>{{ slide.smenklass }}</span>
                  <span v-html="slide.smendate" />
                </div>
              </div>
              <div class="space-y-2.5 text-primary-paragraph-r">
                <HeadlessDisclosure
                  v-if="1==2"
                  v-for="(disclosure, j) in slide.disclosures"
                  :key="j"
                  v-slot="{ open }"
                  as="div"
                  class="space-y-2.5"
                >
                  <HeadlessDisclosureButton
                    :tabindex="swiper?.activeIndex === i ? 0 : -1"
                    class="px-6 @[265px]:py-5 py-4 text-left text-black font-bold bg-white hover:bg-gray-100 flex flex-row items-center justify-between @[265px]:rounded-2xl rounded-xl w-full cursor-pointer transition-colors"
                  >
                    <span>
                      {{ disclosure.name }}
                    </span>
                    <svg
                      class="transition-transform"
                      :class="open ? '-scale-100' : ''"
                      aria-hidden="true"
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6973 1.64149L13.3487 11.3047C12.5509 12.519 10.8063 12.6164 9.87836 11.4983L1.69727 1.64149"
                        stroke="black"
                        stroke-width="1.44123"
                        stroke-linecap="round"
                      />
                    </svg>
                  </HeadlessDisclosureButton>
                  <HeadlessDisclosurePanel
                    as="ul"
                    role="list"
                    :style="{ '--disclosure-direction': disclosure.direction }"
                    class="flex gap-3 [flex-direction:var(--disclosure-direction)]"
                  >
                    <li
                      v-for="(point, k) in disclosure.items"
                      :key="k"
                    >
                      {{ point }}
                    </li>
                  </HeadlessDisclosurePanel>
                </HeadlessDisclosure>

                <svg
                  aria-hidden="true"
                  class="absolute bottom-0 inset-x-0"
                  viewBox="0 0 548 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-4.75849 95.4456C-8.61066 99.8679 -12.4965 104.381 -16.4609 108.694C-35.3398 128.949 -57.0592 142.851 -79.5974 146.177C-102.461 149.557 -125.335 142.034 -148.21 138.843C-171.085 135.653 -195.453 137.322 -214.949 156.976C-219.329 161.38 -223.564 167.04 -225.204 174.976C-226.788 182.966 -224.487 193.251 -219.501 195.254C-215.29 196.875 -211.202 192.435 -207.395 188.959C-191.492 174.474 -171.942 175.916 -154.166 181.945C-136.39 187.975 -118.895 198.063 -100.736 199.76C-80.321 201.548 -59.9159 192.434 -41.4868 177.931C-23.0576 163.427 -6.43592 143.7 9.69168 123.244C18.317 112.324 28.8963 100.459 39.3282 105.904C50.2205 111.549 54.4521 134.358 51.4859 152.268C48.4635 170.124 40.3545 184.393 33.0427 198.571C17.8464 227.855 4.27795 262.437 3.78047 300.698C3.71248 307.688 4.22836 315.369 7.31608 320.23C20.3856 340.62 35.9346 259.441 39.8772 248.174C49.4922 220.764 64.7328 197.96 69.9685 167.526C74.0807 143.427 71.0174 116.432 61.9007 96.2984C56.7697 84.9935 49.7183 75.7814 41.3413 72.2118C31.0104 67.7316 19.9263 72.2979 10.4141 80.2501C5.01227 84.5264 0.115664 89.9132 -4.75849 95.4456Z"
                    fill="white"
                  />
                  <path
                    d="M547.721 47.3269C546.037 53.3905 544.358 59.5532 542.532 65.5829C533.726 94.0452 519.933 118.475 501.294 134.008C482.388 149.772 459.225 155.897 437.75 165.854C416.274 175.812 395.371 190.902 385.785 219.178C383.627 225.52 382.087 232.892 383.729 240.827C385.441 248.78 391.484 256.591 396.674 255.577C401.031 254.658 402.916 248.447 404.929 243.246C413.351 221.55 431.205 211.903 449.277 207.305C467.349 202.706 486.753 201.855 503.475 193.212C522.229 183.388 536.726 163.926 547.375 140.803C558.024 117.679 565.039 90.9441 571.333 63.8412C574.707 49.3643 579.441 32.9591 590.79 31.9471C602.623 30.8551 615.254 48.6648 619.609 66.1635C623.893 83.6453 622.281 100.796 621.338 117.421C619.307 151.812 620.781 189.98 635.249 224.099C637.913 230.32 641.362 236.826 645.987 239.4C665.492 250.133 647.613 169.644 646.711 157.476C644.534 127.861 649.129 99.176 641.902 69.3332C636.149 45.7205 622.921 23.5553 607.012 10.8404C598.069 3.70791 588.242 -0.500625 579.442 1.02211C568.559 2.83105 560.534 13.0623 555.22 25.4102C552.108 32.2104 549.876 39.7105 547.721 47.3269Z"
                    fill="white"
                  />
                </svg>
              </div>
              
              <BaseButton v-if="slide.link" @click="ym_event('vibrat_program')" :as="a" :href="slide.link" class="mx-auto mt-auto mb-8 border-white bg-white text-black z-10">
                {{ slide.btn_name }}
              </BaseButton>
            </div>
          </SwiperSlide>
          <SwiperSlide
            v-for="(slide, i) in items"
            :key="i"
          >
            <div
              class="flex flex-col gap-y-5 md:px-10 px-4 pt-10 sm:rounded-base rounded-2xl md:aspect-[1.3] aspect-[0.52] @container w-full bg-primary text-white relative transition-colors"
            >
              <div class="contents">
                <BaseHeading
                  as="h3"
                  transform="normal-case"
                  class="text-white"
                  v-html="slide.smenname"
                />
                <div class="contents text-primary-paragraph-r">
                  <span>{{ slide.smenklass }}</span>
                  <span v-html="slide.smendate" />
                </div>
              </div>
              <div  class="space-y-2.5 text-primary-paragraph-r">
                <HeadlessDisclosure
                v-if="1==2"
                  v-for="(disclosure, j) in slide.disclosures"
                  :key="j"
                  v-slot="{ open }"
                  as="div"
                  class="space-y-2.5"
                >
                  <HeadlessDisclosureButton
                    :tabindex="swiper?.activeIndex === i ? 0 : -1"
                    class="px-6 @[265px]:py-5 py-4 text-left text-black font-bold bg-white hover:bg-gray-100 flex flex-row items-center justify-between @[265px]:rounded-2xl rounded-xl w-full cursor-pointer transition-colors"
                  >
                    <span>
                      {{ disclosure.name }}
                    </span>
                    <svg
                      class="transition-transform"
                      :class="open ? '-scale-100' : ''"
                      aria-hidden="true"
                      width="21"
                      height="13"
                      viewBox="0 0 21 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6973 1.64149L13.3487 11.3047C12.5509 12.519 10.8063 12.6164 9.87836 11.4983L1.69727 1.64149"
                        stroke="black"
                        stroke-width="1.44123"
                        stroke-linecap="round"
                      />
                    </svg>
                  </HeadlessDisclosureButton>
                  <HeadlessDisclosurePanel
                    as="ul"
                    role="list"
                    :style="{ '--disclosure-direction': disclosure.direction }"
                    class="flex gap-3 [flex-direction:var(--disclosure-direction)]"
                  >
                    <li
                      v-for="(point, k) in disclosure.items"
                      :key="k"
                    >
                      {{ point }}
                    </li>
                  </HeadlessDisclosurePanel>
                </HeadlessDisclosure>

                <svg
                  aria-hidden="true"
                  class="absolute bottom-0 inset-x-0"
                  viewBox="0 0 548 206"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-4.75849 95.4456C-8.61066 99.8679 -12.4965 104.381 -16.4609 108.694C-35.3398 128.949 -57.0592 142.851 -79.5974 146.177C-102.461 149.557 -125.335 142.034 -148.21 138.843C-171.085 135.653 -195.453 137.322 -214.949 156.976C-219.329 161.38 -223.564 167.04 -225.204 174.976C-226.788 182.966 -224.487 193.251 -219.501 195.254C-215.29 196.875 -211.202 192.435 -207.395 188.959C-191.492 174.474 -171.942 175.916 -154.166 181.945C-136.39 187.975 -118.895 198.063 -100.736 199.76C-80.321 201.548 -59.9159 192.434 -41.4868 177.931C-23.0576 163.427 -6.43592 143.7 9.69168 123.244C18.317 112.324 28.8963 100.459 39.3282 105.904C50.2205 111.549 54.4521 134.358 51.4859 152.268C48.4635 170.124 40.3545 184.393 33.0427 198.571C17.8464 227.855 4.27795 262.437 3.78047 300.698C3.71248 307.688 4.22836 315.369 7.31608 320.23C20.3856 340.62 35.9346 259.441 39.8772 248.174C49.4922 220.764 64.7328 197.96 69.9685 167.526C74.0807 143.427 71.0174 116.432 61.9007 96.2984C56.7697 84.9935 49.7183 75.7814 41.3413 72.2118C31.0104 67.7316 19.9263 72.2979 10.4141 80.2501C5.01227 84.5264 0.115664 89.9132 -4.75849 95.4456Z"
                    fill="white"
                  />
                  <path
                    d="M547.721 47.3269C546.037 53.3905 544.358 59.5532 542.532 65.5829C533.726 94.0452 519.933 118.475 501.294 134.008C482.388 149.772 459.225 155.897 437.75 165.854C416.274 175.812 395.371 190.902 385.785 219.178C383.627 225.52 382.087 232.892 383.729 240.827C385.441 248.78 391.484 256.591 396.674 255.577C401.031 254.658 402.916 248.447 404.929 243.246C413.351 221.55 431.205 211.903 449.277 207.305C467.349 202.706 486.753 201.855 503.475 193.212C522.229 183.388 536.726 163.926 547.375 140.803C558.024 117.679 565.039 90.9441 571.333 63.8412C574.707 49.3643 579.441 32.9591 590.79 31.9471C602.623 30.8551 615.254 48.6648 619.609 66.1635C623.893 83.6453 622.281 100.796 621.338 117.421C619.307 151.812 620.781 189.98 635.249 224.099C637.913 230.32 641.362 236.826 645.987 239.4C665.492 250.133 647.613 169.644 646.711 157.476C644.534 127.861 649.129 99.176 641.902 69.3332C636.149 45.7205 622.921 23.5553 607.012 10.8404C598.069 3.70791 588.242 -0.500625 579.442 1.02211C568.559 2.83105 560.534 13.0623 555.22 25.4102C552.108 32.2104 549.876 39.7105 547.721 47.3269Z"
                    fill="white"
                  />
                </svg>
              </div>
              
              <BaseButton v-if="slide.link" :as="a" :href="slide.link" class="mx-auto mt-auto mb-8 border-white bg-white text-black z-10">
                {{ slide.btn_name }}
              </BaseButton>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          v-if="1==2"
          v-for="i in 2"
          :key="i"
          class="absolute top-1/2 -translate-y-1/2 disabled:text-primary-inactive disabled:pointer-events-none hover:bg-gray-200 transition-colors size-[50px] cursor-pointer rounded-md text-primary grid place-items-center"
          :class="[
            i === 1
              ? 'rotate-180 -left-[23px] -translate-x-full  swiper-navigation-education-programs-prev'
              : '-right-[23px] translate-x-full swiper-navigation-education-programs-next',
          ]"
        >
          <iconify-icon
            icon="iconamoon:arrow-right-2-duotone"
            class="text-5xl"
          />
        </button>
      </div>
    </div>

    <div v-if="1==2" class="px-primary-padding-layout-r flex">
      <BaseButton :as="a" :href="'programs'" class="mx-auto">
        Подробно об образовательных программах
      </BaseButton>
    </div>
  </BaseSection>
</template>

<style scoped>
.swiper-slide:not(.swiper-slide-active)::before {
  content: '';
  backdrop-filter: blur(1px);
  position: absolute;
  inset: 0;
  z-index: 10;
  border-radius: 20px;
}

.swiper-slide:not(.swiper-slide-active) > div {
  background-color: var(--color-primary-light);
}

.swiper-slide {
  width: 265px;
}

@media (width >= 24rem) {
  .swiper-slide {
    width: 310px;
  }
}

@media (width >= 48rem) {
  .swiper-slide {
    width: 547px;
  }
}
</style>
