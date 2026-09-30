<script setup lang="ts">
import { ref } from 'vue'

const props = 
  defineProps<{
    info?: any
  }>()

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

// Данные о стоимости
const pricing = {
  monthly: {
    price: props.info.priceMon,
    period: "в месяц",
    total: props.info.price3Mon,
    totalPeriod: "за 3 месяца"
  },
  full: {
    price: props.info.priceCourse,
    period: "за курс"
  },
  taxDeduction: {
    title: "Налоговый вычет",
    description: "Вы можете получить налоговый вычет за обучение.",
    linkText: "Полную информацию можно получить",
    linkWord: "здесь"
  },
  maternityCapital: {
    title: "Материнский капитал",
    description: "Средства материнского капитала можно использовать для оплаты <br/>дополнительного образования или курсов (только при полной оплате).",
    linkText: "Полную информацию можно получить",
    linkWord: "здесь"
  }
}
const smen = {idAdmMer: 489};
</script>

<template>
  <BaseSection
    aria-labelledby="pricing-heading"
    class="bg-white"
    type="none"
  >
  <PageSmeniPopup :is-open="isOpen" :smen="smen" :close-modal="closeModal" />
    <div class="px-primary-padding-layout-r">
      <!-- Заголовок -->
      <BaseHeading
        id="pricing-heading"
        class="mb-12"
      >
        СТОИМОСТЬ
      </BaseHeading>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 items-end relative">
        <!-- Левая колонка: Цены и информация -->
        <div class="space-y-6 col-span-3 relative z-2">
          <!-- Цены -->
          <div class="space-y-2">
            
            <!-- Первая строка: месячная цена и цена за курс -->
            <div class="flex flex-wrap items-center  gap-2 text-gray-900 leading-tight">
              <!-- <span class="text-lg text-[#9A9A9A] w-[52%] font-semibold line-through text-nowrap">{{ props.info.priceCourse }} ₽ за курс</span> -->
              <!-- <span class="text-lg font-normal">специальная цена на раннее бронирование <br/>до 22 августа</span> -->

              <!-- <span class="text-4xl font-semibold">{{ props.info.priceMon }} ₽</span>
              <span class="text-lg font-normal">в месяц</span>
              <span class="text-lg font-normal text-[#5045CF]">или</span>
              <span class="text-4xl font-semibold">{{ props.info.priceCourse }} ₽</span>
              <span class="text-lg font-normal">за курс</span> -->

              
            </div>
            <div class="flex not-md:flex-col not-md:items-start items-center gap-2 text-gray-900 leading-tight">
              <span class="text-3xl font-semibold text-nowrap">{{props.info.priceCourseOnePay}} ₽</span>
              <span class="text-lg font-normal"> одним платежом за весь курс </span>
              <span class="text-lg font-normal text-[#5045CF]">или</span>
              <span class="text-lg font-normal"><b class="text-3xl text-nowrap font-semibold">{{ props.info.priceMon }} ₽</b>/мес ({{props.info.price3Mon}}&nbsp;₽&nbsp;за&nbsp;3&nbsp;месяца)</span>

           
              
            </div>
            
            <!-- Вторая строка: общая стоимость -->
            <!-- <div class="text-2xl text-[##4f4f4f] font-semibold mt-5">
              {{props.info.price3Mon}} ₽ <span class="text-lg font-normal ml-1">за 3 месяца</span>
            </div> -->

            
          </div>

          <!-- Информационные блоки -->
          <div class="space-y-4 col-span-1 mt-8">
            <!-- Налоговый вычет -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 mt-1">
                <!-- Иконка свиньи-копилки -->
                <svg class="w-full h-full text-gray-600" xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                  <path d="M9.79999 8.66504C4.29999 9.96504 1 14.765 1 20.665C1 25.365 2.9 29.565 6 31.665C6.6 32.065 7 32.765 7 33.565V37.765H12V34.765C12 34.165 12.5 33.765 13 33.765H23C23.6 33.765 24 34.265 24 34.765V37.765H29V33.265C29 32.665 29.3 32.165 29.7 31.765C31.4 30.465 33.2 29.1651 34.2 26.8651C34.5 26.1651 35.2 25.765 35.9 25.765H36C36.9 25.765 37.7 25.165 38 24.265L39 18.765C39 17.765 38.5 16.765 37.3 16.765H36.1C35.4 16.765 34.7 16.365 34.4 15.765C33.7 14.165 32.5 13.365 31.1 12.065V6.66504C31.1 6.06504 30.4 5.76504 30 6.16504L27.4 8.76505H26" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.89999 13.665C6.19999 15.365 5.1 17.7651 5 20.3651" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5 12.665C20.5376 12.665 23 10.2026 23 7.16504C23 4.12747 20.5376 1.66504 17.5 1.66504C14.4624 1.66504 12 4.12747 12 7.16504C12 10.2026 14.4624 12.665 17.5 12.665Z" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M31 15.665V17.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg text-[##4f4f4f] mb-1">
                  {{ pricing.taxDeduction.title }}
                </h3>
                <p class="text-gray-700 text-base leading-snug mb-1" v-html="pricing.taxDeduction.description">
      
                </p>
                <p class="text-gray-700 text-base leading-snug">
                  {{ pricing.taxDeduction.linkText }}
                  <a 
                    href="https://disk.yandex.ru/i/8xkLlN8ZDPs9qA"
                    target="_blank"
                    class="text-[#5045CF] hover:text-[#5045CF]/80 transition-colors"
                  >
                    {{ pricing.taxDeduction.linkWord }}
                  </a>.
                </p>
              </div>
            </div>

            <!-- Материнский капитал -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 mt-1">
                <!-- Иконка человека -->
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 30 45" fill="none">
                <path d="M23 13.665H12V16.665H7" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 27.665V31.465C20 32.165 20.6 32.665 21.2 32.665H24.2C26.9 32.665 29 34.865 29 37.465V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 36.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 36.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 33.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 43.665V37.465C1 34.765 3.2 32.665 5.8 32.665H7.9C9 32.665 10 31.765 10 30.565V27.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 13.665V21.265C23 25.665 19.4 29.265 15 29.265C10.6 29.265 7 25.665 7 21.265V16.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 24.665H16" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.8 31.3652C18.5 32.7652 16.7 33.6652 14.6 33.6652C12.7 33.6652 11 32.8652 9.7 31.6652" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 32.665V13.165C3 6.76504 8.1 1.66504 14.5 1.66504C20.9 1.66504 26 6.76504 26 13.165V32.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-lg text-[##4f4f4f] mb-1">
                  {{ pricing.maternityCapital.title }}
                </h3>
                <p class="text-gray-700 text-base leading-snug" v-html="pricing.maternityCapital.description">
       
                </p>
                <p class="text-gray-700 text-base leading-snug">
                  {{ pricing.taxDeduction.linkText }}
                  <a 
                    href="https://disk.yandex.ru/i/lkgxvPpjS4w8bA"
                    target="_blank"
                    class="text-[#5045CF] hover:text-[#5045CF]/80 transition-colors"
                  >
                    {{ pricing.taxDeduction.linkWord }}
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <!-- Кнопка записаться -->
          <div class="pt-6">
            <button @click="openModal" class="cursor-pointer bg-[#5045CF] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#5045CF]/90 transition-colors text-lg">
              Записаться
            </button>
          </div>
        </div>

        <!-- Правая колонка: Иллюстрация -->
        <div class="flex justify-center lg:justify-end items-start">
          <div class="md:absolute md:bottom-0 z-1 max-w-[400px] w-full">
            <!-- Основная иллюстрация -->
            <div class="relative">
              <img 
                src="https://it-edu.com/mipt-school/wp-content/uploads/2025/08/crowdfunding-composition-with-doodl.jpg"
                alt="Человек с ноутбуком и деньгами"
                class="w-full h-auto object-contain"
                loading="lazy"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
/* Дополнительные стили для адаптивности */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .text-base {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .text-5xl {
    font-size: 2rem;
  }
  
  .gap-2 {
    gap: 0.25rem;
  }
}
</style> 