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
  <BaseSection
    :aria-labelledby="title ? 'map-heading' : ''"
    :aria-label="title ? '' : 'Мы на карте'"
    class="xl:px-39 px-primary-padding-layout-r"
  >
    <BaseHeading
      v-if="title"
      id="map-heading"
    >
      {{ title }}
    </BaseHeading>

    <div class="xmd:h-[740px] h-120">
      <YandexMap
        v-model="map"
        :settings="{
          location: {
            center: [37.518898, 55.928597],
            zoom: 14,
          },
          behaviors: enabledBehaviors,
        }"
      >
        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />
        <YandexMapControls :settings="{ position: 'right' }">
          <YandexMapZoomControl />
        </YandexMapControls>
        <YandexMapControls
          :settings="{ position: 'left top' }"
        >
          <YandexMapControl>
            <iframe
              class="xmd:h-[710px] min-[1200px]:w-[450px] w-100 not-xmd:hidden box-border rounded-lg border border-[#e6e6e6]"
              src="https://yandex.ru/maps-reviews-widget/222677797433?comments"
            />
          </YandexMapControl>
        </YandexMapControls>
        <YandexMapMarker
          v-for="(marker, index) in markersGeoJsonSource"
          :key="index"
          :settings="marker"
        >
          <div class="flex -translate-y-full items-start justify-between">
            <div class="flex flex-col items-center justify-center">
              <div class="point flex size-12 items-center justify-center rounded-full bg-red-500">
                <svg
                  class="text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.568 2.108l-10.3 5.436a.524.524 0 0 0 0 .912l10.3 5.436a.921.921 0 0 0 .864 0l4.875-2.572-5.226-2.412a1 1 0 0 1-.336-1.564l6.244 2.974a2.3 2.3 0 0 1 1.311 2.076v1.892a1 1 0 1 0 1.4 0v-1.892c0-.896-.323-1.742-.883-2.399l2.916-1.539a.524.524 0 0 0 0-.912l-10.3-5.436a.921.921 0 0 0-.865 0z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 12.5v.678c-.677 1.666-1.82 4.76-1.986 7.02-1.098.471-2.432.802-4.014.802-5.5 0-8-4-8-4v-5.5l7.284 3.642c.263.131.394.197.532.223a.998.998 0 0 0 .368 0c.138-.026.27-.092.532-.223L18 12.5z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.548 16.267A1.996 1.996 0 0 1 20 17a1.996 1.996 0 0 1-1.548-.733c-.428 1.104-.952 2.756-.952 4.233 0 0 1 1.5 2.5 1.5s2.5-1.5 2.5-1.5c0-1.477-.524-3.129-.952-4.233z"
                    fill="currentColor"
                  />
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
