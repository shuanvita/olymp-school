<script setup lang='ts'>
import { ref } from 'vue'
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
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
    title: "Собрать документы для участия в смене",
    descr: "паспорт (или свидетельство о рождении), медицинская справка 079/у, справка об эпидемиологическом окружении (срок действия справки составляет 3 дня), полис ОМС и согласие родителей"
  },
  {
    number: 5,
    title: "Начать обучение на смене"
  }
]

</script>

<template>
  <BaseSection aria-labelledby="about-heading">
    <div class="max-w-(--breakpoint-layout) mx-auto">
      <!-- Заголовок -->
      <BaseHeading id="course-process-heading" class="mb-16">
        КАК СТАТЬ УЧАСТНИКОМ
      </BaseHeading>

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        <!-- Первый ряд: 3 карточки -->
        <div class="md:col-span-1">
          <article class="bg-[#AA5ED6] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-white rounded-full shrink-0 flex items-center justify-center text-[#5045CF] text-lg shadow-md mr-4">
                {{ courseSteps[0].number }}
              </div>
              <h3 class="text-white text-[22px] leading-[26px]" v-html="courseSteps[0].title">
              </h3>
            </div>

            <!-- Изображение календаря в правом нижнем углу -->
            <div class="absolute -bottom-12 right-4">
              <img src="/CourseGoing/Group.png" alt="Календарь с лекциями" class="w-54 h-54 object-contain block"
                loading="lazy" />
            </div>
          </article>
        </div>

        <div class="md:col-span-1">
          <article class="bg-[#BE72EA] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4 relative z-20">
              <div
                class="w-10 h-10 bg-white rounded-full shrink-0 flex items-center justify-center text-[#5045CF] text-lg shadow-md mr-4">
                {{ courseSteps[1].number }}
              </div>
              <h3 class="text-white text-[22px] leading-[26px]" v-html="courseSteps[1].title">
              </h3>
            </div>

            <!-- Изображение домашних заданий в правом нижнем углу -->
            <div class="absolute bottom-0 right-0 z-10">
              <img src="/CourseGoing/Group-3.png" alt="Домашние задания" class="w-full max-w-[160px] object-contain block"
                loading="lazy" />
            </div>
          </article>
        </div>

        <div class="md:col-span-1">
          <article class="bg-[#C87CF4] rounded-xl p-6 h-48 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-white rounded-full shrink-0 flex items-center justify-center text-[#5045CF] text-lg shadow-md mr-4">
                {{ courseSteps[2].number }}
              </div>
              <h3 class="text-white text-[22px] leading-[26px]">
                {{ courseSteps[2].title }}
              </h3>
            </div>

            <!-- Изображение дорешек с преподавателями в правом нижнем углу -->
            <div class="absolute -bottom-12 right-0">
              <img src="/CourseGoing/Group-7508.png" alt="Дорешки с преподавателями"
                class="w-46 h-46 object-contain block" loading="lazy" />
            </div>
          </article>
        </div>

        <!-- Второй ряд: 2 карточки в одной строке -->
        <div class="md:col-span-2">
          <article class="bg-[#DC90FF] rounded-xl p-6 flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-white rounded-full shrink-0 flex items-center justify-center text-[#5045CF] text-lg shadow-md mr-4">
                {{ courseSteps[3].number }}
              </div>
              <h3 class="text-[#000000] text-[22px] leading-[26px]">
                {{ courseSteps[3].title }}
              </h3>
            </div>
            <p class="relative z-20 ml-14 max-w-[330px]">{{ courseSteps[3].descr }}</p>

           

            <!-- Сертификат справа -->
            <div class="absolute -bottom-5 right-4">
              <img src="/CourseGoing/Group-2.png" alt="Сертификат МФТИ" class="w-full max-w-[256px] object-contain block"
                loading="lazy" />
            </div>
          </article>
        </div>

        <div class="md:col-span-1">
          <article class="bg-[#FFB8FF] md:h-full rounded-xl p-6 h-48 mx-md:h-48! flex flex-col relative overflow-hidden shadow-lg w-full">
            <!-- Номер и заголовок в одной строке -->
            <div class="flex items-center mb-4">
              <div
                class="w-10 h-10 bg-[#AA5ED6] shrink-0 rounded-full flex items-center justify-center text-white text-lg shadow-md mr-4">
                {{ courseSteps[4].number }}
              </div>
              <h3 class="text-black text-[22px] leading-[26px]">
                {{ courseSteps[4].title }}
              </h3>
            </div>

            <!-- Иконка сертификата -->

            <div class="absolute -bottom-12 right-0">
              <img src="/CourseGoing/Group-6.png" alt="Сертификат МФТИ" class="w-52 h-52 object-contain block"
                loading="lazy" />
            </div>
          </article>
        </div>
      </div>

      <!-- Кнопка "Хочу на курс" -->
      <div class="mt-12">
        <BaseButton @click="openFormReg">
        Зарегистрироваться</BaseButton> 

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