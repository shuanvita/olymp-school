<script setup lang='ts'>
const props = 
  defineProps<{
    infoVideo?: any,
    infoText?: any
  }>()
import { Autoplay, Grid, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/grid'

const videoReviews = [
  {
    image: '/Layout/review-video-2.webp',
    name: 'Иван Каспари',
    iframe: '<iframe class="rounded-[10px] w-full aspect-video" src="https://vkvideo.ru/video_ext.php?oid=-213948708&id=456239021&hd=2&autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>',
  },
  {
    image: '/Layout/review-video-1.webp',
    name: 'Абулхаирова Екатерина',
    iframe: '<iframe class="rounded-[10px] w-full aspect-video" src="https://vkvideo.ru/video_ext.php?oid=-213948708&id=456239023&hd=2&autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>',
  },
]


const textReviews = [
  {
    name: 'Виталий Лавренев',
    text: '«Фундаментальные знания, круглосуточная поддержка кураторов, новейшие разработки, нет устаревшей информации.»',
  },
  {
    name: 'Александр Радуляк',
    text: '«Курсом доволен. Выбирал из-за того что хотелось больше узнать о ИИ и нейронных сетях. Осталось осилить практику, к сожалению мало практики в программировании, надеюсь справлюсь. Успехов Вам в дальнейших начинаниях. Так держать!»',
  },
  {
    name: 'Ольга Кузницына',
    text: '«Всё очень понравилось. Лекции, учебный материал, дополнительная литература — всё грамотно, познавательно и научно изложено. Материал очень интересный и пригодится для работы с учащимися.»',
  },
  {
    name: 'Екатерина Степанова',
    text: '«Не первый раз прохожу курс от МФТИ. Организация обучения и предоставленные материалы и знания полученные в ходе курса неоднократно применяю в процессе своей педагогической деятельности.»',
  },
]

const isOpen = ref(false)
const videoItemActive = ref('')

function openModal(iframe: string) {
  isOpen.value = true
  videoItemActive.value = iframe
}

function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <BaseSection
    aria-labelledby="review-heading"
  >
    <BaseHeading id="review-heading">
      Отзывы
    </BaseHeading>
    <div class="flex md:flex-row flex-col font-onest gap-8 h-full">
      <div v-if="props.infoVideo" class="lg:w-1/3 md:w-[45%] space-y-5 grow h-full not-md:max-w-80 min-[360px]:mx-auto">
        <Swiper
          :slides-per-view="1"
          :space-between="10"
          :pagination="{
            el: '.swiper-pagination-review-video',
            clickable: true,
          }"
          :centered-slides="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :modules="[Autoplay, Pagination]"
        >
          <SwiperSlide
            v-for="(item, i) in props.infoVideo.videoRewiev.nodes"
            :key="i"
            :lazy="true"
          >
            <div
              class="cursor-pointer max-h-[565px] relative rounded-[10px] overflow-hidden"
              @click="openModal(item.videoreviewsoderz.iframe)"
            >
              <NuxtImg 
                :src="'https://it-edu.com'+item.videoreviewsoderz.prewiew.node.filePath"
                loading="lazy"
                :alt="item.title"
                class="size-full object-cover"
              />
              <span class="absolute w-full rounded-t-base text-white text-primary-paragraph bg-primary-light bottom-0 p-3.5 text-center">
                {{ item.title }}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-pagination-review-video min-[400px]:gap-x-2 gap-x-1.5 flex justify-center min-[400px]:mt-5 mt-4 mx-auto [--swiper-pagination-bullet-horizontal-gap:0] w-full" />
      </div>

      <div :class="[!props.infoVideo ? 'w-full':'lg:w-[calc(67%-32px)] md:w-[calc(55%-32px)']">
        <Swiper
          :slides-per-view="1"
          :breakpoints="{
            1200: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: 'row',
              },
              autoHeight: false,
            },
            768: {
              spaceBetween: 30,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },
            0: {
              slidesPerView: 1,
              grid: {
                fill: 'row',
                rows: 1,
              },
              autoHeight: true,
              spaceBetween: 20,
            },
          }"
          :pagination="{
            el: '.swiper-pagination-review-text',
            clickable: true,
          }"
          :modules="[Grid, Pagination]"
          :space-between="20"
        >
          <SwiperSlide
            v-for="(item, i) in props.infoText.videoRewiev.nodes"
            :key="i"
          >
            <div class="flex flex-col lg:h-full">
              <span class="text-center text-xl py-3 text-white bg-primary-light rounded-t-base">
                {{ item.title }}
              </span>
              <div class="text-primary-paragraph py-5 px-4 my-auto" v-html="item.review.text">
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="min-[1200px]:hidden swiper-pagination-review-text min-[400px]:gap-x-2 gap-x-1.5 flex justify-center min-[400px]:mt-5 mt-4 mx-auto [--swiper-pagination-bullet-horizontal-gap:0] w-full" />
      </div>
    </div>

    <HeadlessTransitionRoot
      appear
      :show="isOpen"
      as="template"
    >
      <HeadlessDialog
        as="div"
        class="relative z-[9999]"
        @close="closeModal"
      >
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/50" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex h-full items-center justify-center p-3 text-center">
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="relative max-w-[850px] w-full transform md:rounded-[50px] bg-white rounded-[10px] text-left align-middle shadow-xl transition-all"
              >
                <BaseModalButton
                  class="absolute -top-3 -translate-y-full right-0"
                  @click="closeModal"
                >
                  <span class="sr-only">Закрыть модальное окно</span>
                  <iconify-icon
                    icon="iconamoon:close-light"
                    class="text-white md:text-4xl text-3xl"
                    aria-hidden="true"
                  />
                </BaseModalButton>
                <div
                  class="rounded-xl"
                  v-html="videoItemActive"
                />
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </BaseSection>
</template>

<style>
@reference "../../assets/css/main.css";

.swiper-pagination-review-video .swiper-pagination-bullet,
.swiper-pagination-review-text  .swiper-pagination-bullet {
  @apply min-[400px]:size-3 size-2 rounded-full cursor-pointer;
}

.swiper-pagination-review-video .swiper-pagination-bullet.swiper-pagination-bullet-active,
.swiper-pagination-review-text  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-primary;
}

.swiper-pagination-review-video .swiper-pagination-bullet:not(.swiper-pagination-bullet-active),
.swiper-pagination-review-text  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  @apply bg-swiper-inactive-bullet;
}
</style>
