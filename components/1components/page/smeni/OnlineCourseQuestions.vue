<script setup lang='ts'>
import { ref } from 'vue'

const props = 
  defineProps<{
    info?: any
  }>()

// Состояние для аккордеона вопросов
const expandedQuestions = ref<number[]>([])

// Данные вопросов
const questions = [
  {
    id: 1,
    title: "Вопрос 1",
    answer: "Подробный ответ на первый вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 2,
    title: "Вопрос 2", 
    answer: "Подробный ответ на второй вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 3,
    title: "Вопрос 3",
    answer: "Подробный ответ на третий вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 4,
    title: "Вопрос 4",
    answer: "Подробный ответ на четвертый вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 5,
    title: "Вопрос 5",
    answer: "Подробный ответ на пятый вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 6,
    title: "Вопрос 6",
    answer: "Подробный ответ на шестой вопрос с детальным объяснением и дополнительной информацией."
  },
  {
    id: 7,
    title: "Вопрос 7",
    answer: "Подробный ответ на седьмой вопрос с детальным объяснением и дополнительной информацией."
  }
]

// Функция для переключения аккордеона
const toggleQuestion = (questionId: number) => {
  const index = expandedQuestions.value.indexOf(questionId)
  if (index > -1) {
    expandedQuestions.value.splice(index, 1)
  } else {
    expandedQuestions.value.push(questionId)
  }
}
</script>

<template>
  <BaseSection
    aria-labelledby="questions-heading"
    class="bg-white"
    type="none"
  >
    <div class="px-primary-padding-layout-r">
      <!-- Заголовок -->
      <BaseHeading
        id="questions-heading"
        class="mb-8"
      >
        ВОПРОСЫ
      </BaseHeading>
      <!-- Список вопросов -->
      <div class="space-y-8">
        <div
          v-for="(question, index) in props.info[0].question25"
          :key="index"
          class="bg-[#C2C4F1] border border-black-600 rounded-2xl overflow-hidden"
        >
       
          <!-- Заголовок вопроса -->
          <div 
            class="flex items-center justify-between p-6 cursor-pointer hover:bg-[#b4b7f0] transition-colors"
            @click="toggleQuestion(index)"
          >
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-black">
                {{ question.question }}
              </h3>
            </div>
            
            <!-- Стрелка -->
            <svg
              class="w-8 h-8 text-black transition-transform duration-200"
              :class="{ 'rotate-180': expandedQuestions.includes(index) }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Ответ на вопрос (скрыто/показано) -->
          <div
            v-show="expandedQuestions.includes(index)"
            class="px-6 pb-6 border-t border-white/20 bg-[#C2C4F1]"
          >
            <p class="leading-relaxed mt-4" v-html="question.answer">
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
/* Дополнительные стили для адаптивности */
@media (max-width: 768px) {
  .space-y-4 {
    gap: 0.75rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .p-6 {
    padding: 0.75rem;
  }
}
</style> 