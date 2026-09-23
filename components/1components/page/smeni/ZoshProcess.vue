<script setup lang='ts'>
import CourseButton from '~/components/base/BaseButton.vue'
import { ref } from 'Vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

// Статические данные для этапов курса
const courseSteps = [
  {
    number: 1,
    title: "Зарегистрироваться"
  },
  {
    number: 2,
    title: "Заполнить анкету <br/>в личном кабинете"
  },
  {
    number: 3,
    title: "Оплатить обучение"
  },
  {
    number: 4,
    title: "Подписать договор"
  },
  {
    number: 5,
    title: "Начать обучение на смене"
  }
]
const smen = {idAdmMer: 509};
</script>

<template>
  <PageSmeniPopupZosh :is-open="isOpen" :smen="smen" :close-modal="closeModal" />
  <BaseSection
    aria-labelledby="course-process-heading"
    class="bg-white"
    type="none"
  >
    <div class="px-primary-padding-layout-r">
      <!-- Заголовок -->
      <BaseHeading
        id="course-process-heading"
        class="mb-16"
      >
        КАК СТАТЬ УЧАСТНИКОМ
      </BaseHeading>

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Первый ряд: 3 карточки -->
        <div class="md:col-span-1">
          <article class="bg-[#5045CF] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm shadow-md mr-4">
                {{ courseSteps[0].number }}
              </div>
              <h3 class="text-white font-semibold text-lg" v-html="courseSteps[0].title">
              </h3>
            </div>
            
            <!-- Изображение календаря в правом нижнем углу -->
            <div class="absolute -bottom-12 right-4">
              <img 
                src="/CourseGoing/Group.png" 
                alt="Календарь с лекциями"
                class="w-54 h-54 object-contain block"
                loading="lazy"
              />
            </div>
          </article>
        </div>

        <div class="md:col-span-1">
          <article class="bg-[#6459E4] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm shadow-md mr-4">
                {{ courseSteps[1].number }}
              </div>
              <h3 class="text-white font-semibold text-lg" v-html="courseSteps[1].title">
              </h3>
            </div>
            
            <!-- Изображение домашних заданий в правом нижнем углу -->
            <div class="absolute -bottom-12 right-4">
              <img 
                src="/CourseGoing/Group-3.png" 
                alt="Домашние задания"
                class="w-50 h-50 object-contain block"
                loading="lazy"
              />
            </div>
          </article>
        </div>

        <div class="md:col-span-1">
          <article class="bg-[#827AE0] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm shadow-md mr-4">
                {{ courseSteps[2].number }}
              </div>
              <h3 class="text-white font-semibold text-lg">
                {{ courseSteps[2].title }}
              </h3>
            </div>
            
            <!-- Изображение дорешек с преподавателями в правом нижнем углу -->
            <div class="absolute -bottom-12 right-0">
              <img 
                src="/CourseGoing/Group-7508.png" 
                alt="Дорешки с преподавателями"
                class="w-46 h-46 object-contain block"
                loading="lazy"
              />
            </div>
          </article>
        </div>

        <!-- Второй ряд: 2 карточки в одной строке -->
        <div class="md:col-span-1">
          <article class="bg-[#8E86E8] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold text-sm shadow-md mr-4">
                {{ courseSteps[3].number }}
              </div>
              <h3 class="text-white font-semibold text-lg">
                {{ courseSteps[3].title }}
              </h3>
            </div>
            
            <!-- Иконка лупы -->
            <div class="absolute bottom-6 right-38">
              <img 
                src="/CourseGoing/Speech_Bubble_2.png" 
                alt="Речевой пузырь"
                class="w-24 h-24 object-contain block"
                loading="lazy"
              />
            </div>
            
            <!-- Сертификат справа -->
            <div class="absolute -bottom-5 right-4">
              <img 
                src="/CourseGoing/Group-2.png" 
                alt="Сертификат МФТИ"
                class="w-34 h-34 object-contain block"
                loading="lazy"
              />
            </div>
          </article>
        </div>

        <div class="md:col-span-2">
          <article class="bg-[#D1D2F6] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-[#5045CF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md mr-4">
                {{ courseSteps[4].number }}
              </div>
              <h3 class="text-[#5045CF] font-semibold text-lg">
                {{ courseSteps[4].title }}
              </h3>
            </div>
            
            <!-- Иконка сертификата -->
            <div class="absolute -bottom-8 left-4">
              <img 
                src="/CourseGoing/Group-5.png" 
                alt="Сертификат МФТИ"
                class="w-34 h-34 object-contain block"
                loading="lazy"
              />
            </div>

            <div class="absolute -bottom-10 right-2">
              <img 
                src="/CourseGoing/Group-6.png" 
                alt="Сертификат МФТИ"
                class="w-52 h-52 object-contain block"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </div>

      <!-- Кнопка "Хочу на курс" -->
      <div class="mt-12">
        <button @click="openModal" class="w-full inline-flex text-primary-paragraph-r items-center justify-center px-8 py-4 bg-[#5045CF] text-white font-medium rounded-full cursor-pointer hover:bg-[#5045CF]/90 transition-colors">
          Хочу на курс
        </button> 
        
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
/* Дополнительные стили для адаптивности */
@media (max-width: 768px) {
  .grid {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .grid {
    gap: 1rem;
  }
}
</style> 