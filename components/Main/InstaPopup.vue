    <template>
          <HeadlessTransitionRoot :show="props.isOpen" as="template">
            <HeadlessDialog as="div" class="relative z-[9999]" @close="props.closeModal">
              <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/70" />
              </HeadlessTransitionChild>

              <div class="fixed inset-0 overflow-y-auto ">
                <div class="flex h-full items-center justify-center p-3 text-center">
                  <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <HeadlessDialogPanel
                      class="relative transform transition-all max-w-[650px] w-full">
                      <BaseModalButton class="absolute top-0 z-20 right-0" @click="props.closeModal">
                        <span class="sr-only">Закрыть модальное окно</span>
                        <iconify-icon icon="iconamoon:close-light" class="text-white text-4xl" aria-hidden="true" />
                      </BaseModalButton>
                   
                      <ClientOnly>
                        <div class="relative">
                          <Swiper :slides-per-view="1" :space-between="20" :auto-height="true" @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            class="w-full max-w-[450px] h-full max-h-[90vh] mx-auto swiper-insta">
                            <!-- Прогресс-бары -->
                            <div class="absolute top-0 left-0 right-0 flex space-x-1 z-1000">
                              <div v-for="(story, index) in currentStoriesList" :key="story.id"
                                class="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
                                <div class="h-full bg-primary transition-all duration-100 ease-linear"
                                  :style="{ width: index === activeStoryIndex ? progress + '%' : (index < activeStoryIndex ? '100%' : '0%') }">
                                  {{ index  }} {{ activeStoryIndex }}
                                </div>
                              </div>
                            </div>


                            <SwiperSlide v-for="story in currentStoriesList" :key="story.id">
                              <div class="flex flex-col relative items-center justify-center h-full p-4 px-0 w-fit mx-auto">
                                <img v-if="story.type === 'image'" :src="story.src"
                                  class="max-w-full max-h-[90vh] object-contain rounded-md max-w-[412px]" />
                                  <BaseButton @click="btnActionClick()" v-if="story.link" :href="story.link" :class="['w-[90%] bottom-10 max-w-[300px] left-1/2 -translate-x-1/2 absolute!', btnStyle]">{{ story.btnName }}</BaseButton>
                              </div>
                            </SwiperSlide>


                          </Swiper>
                          <!-- Кнопки навигации -->
                          <BaseModalButton
                            class="absolute inset-y-0 w-[45px] h-[45px] top-1/2 -translate-y-1/2 flex justify-center items-center left-0 -translate-x-full z-10 cursor-pointer"
                            @click="prevStory">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19"
                              fill="none">
                              <path d="M9.58594 1L1.41431 9.17163L9.58594 17.3433" stroke="#EDD9FF" stroke-width="3"
                                stroke-linecap="round" />
                            </svg>
                          </BaseModalButton>
                          <BaseModalButton
                            class="absolute inset-y-0 w-[45px] h-[45px] top-1/2 -translate-y-1/2 flex justify-center items-center right-0 translate-x-full z-10 cursor-pointer"
                            @click="nextStory">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19"
                              fill="none">
                              <path d="M1 1L9.17163 9.17163L1 17.3433" stroke="#EDD9FF" stroke-width="2"
                                stroke-linecap="round" />
                            </svg>
                          </BaseModalButton>
                        </div>
                      </ClientOnly>
                      <!-- </div> -->
                    </HeadlessDialogPanel>
                  </HeadlessTransitionChild>
                </div>
              </div>
            </HeadlessDialog>
          </HeadlessTransitionRoot>
    </template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // Базовые стили Swiper

const props = defineProps<{ isOpen: boolean, closeModal: () => void, start: int }>()
//const props = defineProps(['open', 'start', 'closeModal']);

const isOpen = ref(false);
const startPosition = ref(0);
const swiperInstance = ref(null);
const activeStoryIndex = ref(0);
const progress = ref(0);
let timer = null;
const storyDuration = 50000; // 5 секунд на историю

const storiesData = ref([
  { id: 1, type: 'image', src: '/Insta/Instagram story - 1.png', caption: 'История 1' },
  // { id: 2, type: 'image', src: '/Insta/Instagram story - 21.png', link:'engineering-physics', btnName: 'Подробнее', btnStyle:"bg-primary! text-white!" },
  // { id: 3, type: 'image', src: '/Insta/Instagram story - 2.png', link:'ml', btnName: 'Подробнее', btnStyle:"bg-primary! text-white!" },
  { id: 4, type: 'image', src: '/Insta/Instagram story - 3.1.png', link:'#direction', btnName: 'Выбирай свою смену!', btnStyle:"bg-primary! text-white!" },
  { id: 4, type: 'image', src: '/Insta/Instagram story - 3.2.png', link:'#direction', btnName: 'Выбирай свою смену!', btnStyle:"bg-primary! text-white!" },
  { id: 4, type: 'image', src: '/Insta/Instagram story - 3.3.png', link:'#direction', btnName: 'Выбирай свою смену!', btnStyle:"bg-primary! text-white!" },
  { id: 5, type: 'image', src: '/Insta/Instagram story - 4.png', caption: 'История 6' },
  { id: 6, type: 'image', src: '/Insta/Instagram story - 5.png' },
  // { id: 7, type: 'image', src: '/Insta/Instagram story - 6.png', link:'https://edu.mipt.ru/olymp-school/grants', btnName: 'Подробнее', btnStyle:"bg-primary! text-white!"},
  { id: 11, type: 'image', src: '/Insta/Instagram story - 8.png', link:'https://t.me/miptschool', btnName: 'Перейти в Telegram', btnStyle:"bg-primary! text-white!" },
  //{ id: 9, type: 'image', src: '/Insta/Instagram story - 71.png', link:'https://edu.mipt.ru/jd2k', btnName: 'Зарегистрироваться', btnStyle:"bg-primary! text-white!" },
  //{ id: 10, type: 'image', src: '/Insta/Instagram story - 7.png', link:'https://edu.mipt.ru/wd76', btnName: 'Зарегистрироваться', btnStyle:"bg-primary! text-white!" },
  
  
]);

// В реальном приложении у вас будет массив пользователей, у каждого из которых свой массив историй
const currentStoriesList = ref(storiesData.value); // Здесь должны быть истории текущего пользователя

function onSwiper(swiper) {
  swiperInstance.value = swiper;

  const startId = parseInt(props.start) || 0;
  let startIdx = currentStoriesList.value.findIndex(story => story.id === startId);
  if (startIdx === -1) startIdx = 0;

  activeStoryIndex.value = startIdx;
  swiper.slideTo(startIdx, 0);
  startStoryTimer();
}

function onSlideChange() {
  activeStoryIndex.value = swiperInstance.value.activeIndex;
  resetStoryTimer();
}
function btnActionClick(link) {
  props.closeModal();
}

function startStoryTimer() {
  clearInterval(timer);
  progress.value = 0;
  let startTime = Date.now();

  timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    progress.value = (elapsedTime / storyDuration) * 100;

    if (progress.value >= 100) {
      clearInterval(timer);
      nextStory();
    }
  }, 50); // Обновляем прогресс каждые 50мс
}

function resetStoryTimer() {
  clearInterval(timer);
  startStoryTimer();
}

function nextStory() {
  if (activeStoryIndex.value < currentStoriesList.value.length - 1) {
    swiperInstance.value.slideNext();
  } else {
    // Все истории пользователя просмотрены, можно закрыть или переключиться на следующего пользователя
    closeStories();
  }
}

function prevStory() {
  if (activeStoryIndex.value > 0) {
    swiperInstance.value.slidePrev();
  }
}

// function closeModal(){
//   isOpen.value = false;
//   clearInterval(timer); // Остановить таймер при закрытии
//   if (swiperInstance.value) {
//     swiperInstance.value.slideTo(0, 0); // Сброс слайдера на первый слайд
//   }
// }

function openStories() {
  isOpen.value = true;
  // При открытии, можно сбросить на первую историю
  activeStoryIndex.value = 0;
  progress.value = 0;
}

function closeStories() {
  isOpen.value = false;

  clearInterval(timer); // Остановить таймер при закрытии
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(0, 0); // Сброс слайдера на первый слайд
  }
}

// Очистка таймера при unmount компонента
onUnmounted(() => {
  clearInterval(timer);
});

// Watcher для перезапуска таймера при изменении activeStoryIndex (если меняем историю не через Swiper)
watch(activeStoryIndex, resetStoryTimer);

watch(() => props.start, (newOpen) => {
  startPosition.value = newOpen - 1;
}, { deep: true })

watch(() => props.open, (newOpen) => {
  isOpen.value = newOpen;
  activeStoryIndex.value = 0;
  progress.value = 0;
}, { deep: true })

</script>
<style>
/* Можно добавить дополнительные кастомные стили, если Tailwind не покрывает все */
.swiper-insta,
.swiper-insta .swiper-wrapper {
  /* overflow: visible !important; */

}
</style>