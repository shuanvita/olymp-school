<template>
  <div class="overflow-x-hidden -translate-y-1/2 max-xmd:translate-none max-xmd:pb-10 max-xmd:px-5">
    <div class="max-w-(--breakpoint-layout) mx-auto">
      <ClientOnly>
        <Swiper :pagination="{ type: 'progressbar' }" :slides-per-view="2" :breakpoints="{
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
            }" :autoplay="{ delay: 4500, disableOnInteraction: true }" :spaceBetween="30" :modules="modules" :lazy="true" class="mySwiper pb-5!">
          <SwiperSlide class="cursor-pointer" v-for="item in storiesData" @click="openStories(item.id)">
            <div class="flex">
              <img class="w-full" :src="withBase(item.src)" :alt="item.caption" />
            </div>
          </SwiperSlide>
        </Swiper>
        <template #fallback>
          <div class="grid grid-cols-2 gap-[30px] max-xmd:grid-cols-2">
            <div v-for="n in 4" :key="n" class="aspect-square rounded-2xl bg-primary-light/30 animate-pulse"></div>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
    <MainInstaPopup :open="isOpen" :start="startPosition" :is-open="isOpen" :close-modal="closeModalForm" />
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const storiesData = ref([
    { id: 1, type: 'image', src: '/Insta/Preview 1.png', caption: 'История 1' },
    // { id: 2, type: 'image', src: '/Insta/Preview 21.png', caption: 'История 2' },
    // { id: 3, type: 'image', src: '/Insta/Preview 2.png', caption: 'История 2' },
    { id: 4, type: 'image', src: '/Insta/Preview 3.png', caption: 'История 3' },
    { id: 5, type: 'image', src: '/Insta/Preview 4.png', caption: 'История 4' },
    { id: 6, type: 'image', src: '/Insta/Preview 5.png', caption: 'История 5' },
    // { id: 9, type: 'image', src: '/Insta/Preview 6.png', caption: 'История 6' },
    { id: 11, type: 'image', src: '/Insta/Preview 8.png', caption: 'История 8' },
     //{ id: 9, type: 'image', src: '/Insta/Preview 71.png', caption: 'История 7' },
    //{ id: 10, type: 'image', src: '/Insta/Preview 7.png', caption: 'История 71' },
]);


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const modules = [Pagination, Navigation, Autoplay];


const isOpen = ref(false);
const startPosition = ref(0);
function openStories(index) {
    isOpen.value = true;
    startPosition.value = index;
    console.log('isOpen '+isOpen.value);
    console.log('startPosition '+startPosition.value);
}




function openModal() {
  openForm.value = false;
  isOpen.value = true;
  window.localStorage.setItem('clickFortuna', 'true');
}

function closeModalForm() {
  isOpen.value = false
}
</script>
<style scoped>
/* Перемещаем прогресс-бар вниз */
:deep(.swiper-pagination-progressbar) {
    top: auto !important;
    bottom: 0px !important;
    height: 6px;
    /* Можно настроить высоту */
    background: #EDD9FF;
    /* Цвет подложки */
}

/* Цвет самой заполняющей полоски */
:deep(.swiper-pagination-progressbar-fill) {
    border-radius: 10px;
    background: #B745CF !important;
    /* Ваш цвет (например, зеленый) */
}

.slider-wrap {
    overflow: visible;
    /* важно — иначе обрежет */
    padding: 0 48px;
    /* отступы по бокам, чтобы боковые слайды были видны */
}

/* Иногда нужно явно переопределить дефолт Swiper */
.mySwiper,
.mySwiper .swiper-wrapper {
    overflow: visible !important;
}
</style>