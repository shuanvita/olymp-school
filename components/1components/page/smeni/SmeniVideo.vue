<script setup lang="ts">
const props = 
  defineProps<{
    info?: any
  }>()

import { Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'


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
    aria-labelledby="video-heading"
    type="none"
    class="xl:pl-42.5 xl:pr-38 min-[520px]:px-primary-padding-layout-r"
  >
    <BaseHeading
      id="video-heading"
      class="not-min-[520px]:px-5"
    >
      Видео
    </BaseHeading>

    <div class="relative">
      <ClientOnly>
      <Swiper
        :navigation="{
          enabled: true,
          prevEl: '.swiper-navigation-custom-video-prev',
          nextEl: '.swiper-navigation-custom-video-next',
        }"
        :auto-height="true"
        :pagination="{
          enabled: true,
          clickable: true,
          el: '.swiper-pagination-custom-video',
        }"
        :modules="[Navigation, Pagination]"
      >
        <SwiperSlide
          v-for="(item, i) in props.info"
          :key="i"
        >
          <div class="flex flex-col md:gap-y-8 gap-y-5">
            <div
              class="relative grid place-items-center cursor-pointer group"
              @click="openModal(item.videoItem)"
            >
              <NuxtImg 
                loading="lazy"
                alt=""
                :src="'https://it-edu.com'+item.videoimgPreview.node.filePath"
                class="object-cover sm:aspect-[1.79] aspect-[0.97] w-[1117px] rounded-base brightness-55"
              />
              <iconify-icon
                icon="lsicon:play-filled"
                class="absolute text-white text-5xl group-hover:scale-120 transition-transform"
              />
            </div>
            <div class="flex flex-col gap-y-4 text-center not-min-[520px]:px-5">
              <h3
                class="font-bold md:text-[24px] text-primary-heading-md"
                v-html="item.videoName"
              />
              <p
                class="md:text-[24px] text-primary-paragraph-md"
                v-html="item.videoDescr"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <button
        v-for="i in 2"
        :key="i"
        class="absolute top-1/2 -translate-y-1/2 disabled:text-primary-inactive disabled:pointer-events-none hover:bg-gray-200 transition-colors size-[50px] cursor-pointer rounded-md text-primary grid place-items-center"
        :class="[
          i === 1
            ? 'rotate-180 -left-5 -translate-x-full swiper-navigation-custom-video-prev'
            : '-right-5 translate-x-full swiper-navigation-custom-video-next',
        ]"
      >
        <iconify-icon
          icon="iconamoon:arrow-right-2-duotone"
          class="text-5xl"
        />
      </button>
    </ClientOnly>
      <div class="swiper-pagination-custom-video min-[400px]:gap-x-2 gap-x-1.5 flex justify-center min-[400px]:mt-7 mt-4 mx-auto [--swiper-pagination-bullet-horizontal-gap:0] w-full" />
    </div>

    <HeadlessTransitionRoot
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
@reference "../../../assets/css/main.css";

.swiper-pagination-custom-video .swiper-pagination-bullet {
  @apply min-[400px]:size-3 size-2 rounded-full cursor-pointer shrink-0;
}

.swiper-pagination-custom-video .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-primary;
}

.swiper-pagination-custom-video .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
  @apply bg-swiper-inactive-bullet;
}
</style>
