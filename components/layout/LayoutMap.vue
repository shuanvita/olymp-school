<script setup lang="ts">
import type { BehaviorType, LngLat, YMap } from '@yandex/ymaps3-types'

import {
  YandexMap,
  YandexMapControl,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps'

defineProps(['title'])

// Аналогично включены по умолчанию в самой Яндекс Карте
const enabledBehaviors = ref<BehaviorType[]>(['drag', 'pinchZoom', 'dblClick'])

const markersGeoJsonSource = [
  {
    coordinates: [37.518608, 55.929089] as LngLat,
    title: 'Олимпиадные школы МФТИ',
    subtitle: 'Дополнительное образование',
    color: '#FF0000',
  },
]

// Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)
</script>

<template>
  <BaseSection aria-labelledby="map-heading" :aria-label="'Мы на карте'"
      class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative">
    <BaseHeading v-if="title" id="map-heading">
      {{ title }}
    </BaseHeading>

    <div class="grid grid-cols-2 gap-8 max-w-[730px] max-[550px]:grid-cols-1">
      <div class="flex flex-col gap-2 text-2xl leading-6.5 max-xmd:text-xl">
        <a @copy="ym_event('copy_phone')"  @click="ym_event('click_phone')" href="tel:+7(967) 555-04-36">+7(967) 555-04-36</a>
        <!-- <a @copy="ym_event('copy_phone')"  @click="ym_event('click_phone')" href="tel:+7(495) 408-56-18">+7(495) 408-56-18</a> -->
        <span class="text-base">10:00-18:00 Мск (пн-пт)</span>
      </div>
      <div class="flex flex-col justify-start">
        <a @copy="ym_event('copy_email')"  @click="ym_event('click_email')" class="text-[#882ABF] text-2xl max-xmd:text-xl max-[550px]:text-2xl" href="mailto:it-education@phystech.edu">it-education@phystech.edu</a>
      </div>

      <p class="flex flex-col justify-start text-base max-xmd:text-sm max-w-[297px]">
        141701, Россия, Московская область, г. Долгопрудный, Научный пер., д. 4 корпус 1 «Физтех.Цифра», ауд. 3.30
      </p>

      <div class="flex gap-6 max-[550px]:flex-col">
          <a href="https://t.me/miptschool" rel="noopener noreferrer"
            class="text-[35px] flex flex-row sm:gap-x-3 gap-x-2 hover:underline items-center">
            <iconify-icon
              aria-hidden="true" icon="ic:baseline-telegram" class="text-primary"></iconify-icon>
            <span
              class="text-base leading-5 max-xmd:text-sm text-nowrap max-[768px]:hidden max-[550px]:inline">Наш канал <br> в телеграме</span></a>

          <a href="https://vk.com/miptschool" rel="noopener noreferrer"
            class="text-[35px] flex flex-row sm:gap-x-3 gap-x-2 hover:underline items-center">
            <iconify-icon
              aria-hidden="true" icon="ri:vk-fill" class="text-primary rounded-full"></iconify-icon>
            <span
              class="text-base leading-5 max-xmd:text-sm text-nowrap max-[768px]:hidden max-[550px]:inline">Наше сообщество <br> Вконтакте</span></a>
          <a href="https://max.ru/miptschool" rel="noopener noreferrer"
            class="text-[35px] flex flex-row sm:gap-x-3 gap-x-2 hover:underline items-center">
              <div class="p-1">
                <img class="max-w-[26px]" src="/img/max.svg" alt="Max">
              </div>
            <span
              class="text-base leading-5 max-xmd:text-sm text-nowrap max-[768px]:hidden max-[550px]:inline">Наш канал  <br> в MAX</span></a>
      </div>
    </div>

    <div class="xmd:h-[740px] h-120">
      <YandexMap v-model="map" :settings="{
        location: {
          center: [37.518898, 55.928597],
          zoom: 14,
        },
        behaviors: enabledBehaviors,
      }">
        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />
        <YandexMapControls :settings="{ position: 'right' }">
          <YandexMapZoomControl />
        </YandexMapControls>
        <YandexMapControls :settings="{ position: 'left top' }">
          <YandexMapControl>
            <iframe
              class="xmd:h-[710px] min-[1200px]:w-[450px] w-100 not-xmd:hidden box-border rounded-lg border border-[#e6e6e6]"
              src="https://yandex.ru/maps-reviews-widget/222677797433?comments" />
          </YandexMapControl>
        </YandexMapControls>
        <YandexMapMarker v-for="(marker, index) in markersGeoJsonSource" :key="index" :settings="marker">
          <div class="flex -translate-y-full items-start justify-between">
            <div class="flex flex-col items-center justify-center">
              <div class="point flex size-12 items-center justify-center rounded-full bg-red-500">
                <svg class="text-white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.568 2.108l-10.3 5.436a.524.524 0 0 0 0 .912l10.3 5.436a.921.921 0 0 0 .864 0l4.875-2.572-5.226-2.412a1 1 0 0 1-.336-1.564l6.244 2.974a2.3 2.3 0 0 1 1.311 2.076v1.892a1 1 0 1 0 1.4 0v-1.892c0-.896-.323-1.742-.883-2.399l2.916-1.539a.524.524 0 0 0 0-.912l-10.3-5.436a.921.921 0 0 0-.865 0z"
                    fill="currentColor" />
                  <path
                    d="M18 12.5v.678c-.677 1.666-1.82 4.76-1.986 7.02-1.098.471-2.432.802-4.014.802-5.5 0-8-4-8-4v-5.5l7.284 3.642c.263.131.394.197.532.223a.998.998 0 0 0 .368 0c.138-.026.27-.092.532-.223L18 12.5z"
                    fill="currentColor" />
                  <path
                    d="M21.548 16.267A1.996 1.996 0 0 1 20 17a1.996 1.996 0 0 1-1.548-.733c-.428 1.104-.952 2.756-.952 4.233 0 0 1 1.5 2.5 1.5s2.5-1.5 2.5-1.5c0-1.477-.524-3.129-.952-4.233z"
                    fill="currentColor" />
                </svg>
              </div>
              <div class="mt-2 size-[11px] rounded-full border-2 border-white bg-red-500" />
            </div>
            <div class="ml-5 flex w-[260px] flex-col rounded-lg bg-[#f9f7fa] p-3 text-[#333]">
              <span class="text-base font-medium">{{ marker.title }}</span>
              <span class="text-xs">{{ marker.subtitle }}</span>
            </div>
          </div>
        </YandexMapMarker>
      </YandexMap>
    </div>
  </BaseSection>
</template>
