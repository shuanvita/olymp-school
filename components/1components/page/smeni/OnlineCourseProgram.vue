<script setup lang='ts'>
import { ref } from 'vue'
const props = 
  defineProps<{
    info?: any
  }>()

const smen = {idAdmMer: 489};
const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

const tabs = [
  {
    type: 'Продвинутый',
    subjects: [
      {
        type: 'Математика',
        program: [
          {
            topics: 28,
            hours: 20,
            title: 'Продвинутая математика. Тема 1',
            content: 'Углублённое изучение математики: методы решения сложных задач, подготовка к олимпиадам.',
          },
        ],
      },
      {
        type: 'Физика',
        program: [
          {
            topics: 28,
            hours: 20,
            title: 'Продвинутая физика. Тема 1',
            content: 'Основы квантовой механики и релятивистской физики для продвинутого уровня.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Продвинутая физика. Тема 2',
            content: 'Практические задачи по электродинамике и термодинамике с олимпиадным уклоном.',
          },
        ],
      },
    ],
  },
  {
    type: 'Базовый',
    subjects: [
      {
        type: 'Математика',
        program: [
          {
            topics: 28,
            hours: 20,
            title: 'Базовая математика. Тема 1',
            content: 'Изучение основ арифметики, простых уравнений и элементарной геометрии.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая математика. Тема 2',
            content: 'Решение задач на проценты, пропорции и подготовка к базовым экзаменам.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая математика. Тема 3',
            content: 'Основы алгебры: многочлены, дроби, упрощение выражений.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая математика. Тема 4',
            content: 'Начала тригонометрии и применение формул в простых задачах.',
          },
        ],
      },
      {
        type: 'Информатика',
        program: [
          {
            topics: 28,
            hours: 20,
            title: 'Базовая информатика. Тема 1',
            content: 'Введение в информатику: устройство компьютера, операционные системы.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая информатика. Тема 2',
            content: 'Основы программирования: переменные, условия, циклы.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая информатика. Тема 3',
            content: 'Работа с текстовыми и табличными процессорами, практические навыки.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая информатика. Тема 4',
            content: 'Алгоритмика: написание простых алгоритмов и решение логических задач.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая информатика. Тема 5',
            content: 'Основы сетей и интернет-безопасности для начинающих.',
          },
        ],
      },
      {
        type: 'Физика',
        program: [
          {
            topics: 28,
            hours: 20,
            title: 'Базовая физика. Тема 1',
            content: 'Механика: законы Ньютона, движение тел, сила тяжести.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая физика. Тема 2',
            content: 'Основы термодинамики: температура, теплообмен, агрегатные состояния вещества.',
          },
          {
            topics: 28,
            hours: 20,
            title: 'Базовая физика. Тема 3',
            content: 'Электричество и магнетизм: простые цепи, законы Ома и Кирхгофа.',
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <section
    class="
      mx-auto max-w-[1440px] px-5 font-nunito-sans

      lg:px-20

      xl:px-42
    "
  >
    <h2
      class="
        mb-6 text-[20px] leading-[1.1] font-bold text-[#232323] uppercase

        md:text-[40px]
      "
    >
      Программа
    </h2>

    <div>
      <TabsRoot
        default-value="Базовый"
      >
        <TabsList class="flex w-full flex-row flex-wrap gap-5">
   
          <TabsTrigger
            v-for="{ name } in props.info"
            :key="name"
            :value="name"
            class="
              h-9 flex-1 rounded-sm px-[17px] font-nunito-sans text-[20px]
              leading-[1.1] transition-colors

              data-[state=active]:bg-[#5045CF]
              data-[state=active]:text-[#FFFFFFD9]

              data-[state=inactive]:bg-[#C2C4F1]
              data-[state=inactive]:text-[#343338]

              hover:data-[state=inactive]:bg-[#C2C4F1]/80

              enabled:data-[state=inactive]:cursor-pointer
            "
          >
            {{ name }}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          v-for="tab in props.info"
          :key="tab.name"
          :value="tab.name"
          class="
            mt-5

            md:mt-10
          "
        >
          <TabsRoot default-value="Математика">
            <TabsList
              class="
                flex flex-row flex-wrap gap-2

                md:gap-4.5
              "
            >
              <TabsTrigger
                v-for="{ name } in tab.naprav"
                :key="name"
                :value="name"
                class="
                  h-9 rounded-sm px-3 font-nunito-sans text-[14px] leading-[1.1]
                  transition-colors

                  data-[state=active]:bg-[#5045CF]
                  data-[state=active]:text-[#FFFFFFD9]

                  data-[state=inactive]:bg-[#C2C4F1]
                  data-[state=inactive]:text-[#343338]

                  hover:data-[state=inactive]:bg-[#C2C4F1]/80

                  enabled:data-[state=inactive]:cursor-pointer

                  md:text-[20px]
                "
              >
                {{ name }}
              </TabsTrigger>
            </TabsList>

            <TabsContent
              v-for="(content) in tab.naprav"
              :key="content.name"
              class="
                mt-5.25

                md:mt-7
              "
              :value="content.name"
            >
              <AccordionRoot
                type="multiple"
                class="
                  flex flex-col gap-y-4.5

                  md:gap-y-7
                "
              >
                <AccordionItem
                  v-for="(item, i) in content.module"
                  :key="item.name"
                  :value="item.name"
                  class="group rounded-[20px] border border-[#A5A6A9]"
                >
                  <AccordionTrigger
                    class="
                      flex w-full flex-col gap-y-[15px] px-9 py-7

                      enabled:cursor-pointer

                      md:gap-y-5
                    "
                  >
                    <div
                      class="
                        flex flex-col gap-x-5 gap-y-[15px]

                        md:flex-row md:justify-between
                      "
                    >
                      <div
                        class="
                          flex flex-row text-[14px] leading-[1.1] text-nowrap
                          text-[#000000D9]

                          min-[450px]:text-[16px]
                        "
                      >
                        <span>
                          {{ item.theme }} тем
                        </span>
                        <span aria-hidden="true">
                          ・
                        </span>
                        <span>
                          {{ item.time }}
                          <span class="sr-only">
                            академических часов
                          </span>
                          <span aria-hidden="true">
                            ак.ч.
                          </span>
                        </span>
                      </div>

                      <span
                        class="
                          text-left text-[14px] leading-[1.1] font-bold
                          text-nowrap text-[#5045CF]

                          min-[450px]:text-[18px]
                        "
                      >
                        модуль {{ i + 1 }}
                      </span>
                    </div>

                    <div
                      class="
                        flex flex-col items-start justify-between gap-x-5
                        gap-y-[15px]

                        sm:flex-row
                      "
                    >
                      <AccordionHeader
                        class="
                          text-left text-[14px] leading-[1.1] font-bold
                          text-[#000000D9]

                          min-[450px]:text-[20px]
                        "
                      >
                        {{ item.name }}
                      </AccordionHeader>

                      <svg
                        aria-hidden="true"
                        class="
                          size-6 transition-transform duration-300

                          group-data-[state=open]:-rotate-180

                          min-[450px]:size-8
                        "
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3066_377)">
                          <g clip-path="url(#clip1_3066_377)">
                            <path
                              d="M2.09961 8.30859L16.8074 23.0164L31.5153 8.30859"
                              stroke="#5045CF"
                              stroke-width="2"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_3066_377">
                            <rect
                              width="32"
                              height="32"
                              fill="white"
                              transform="translate(0.5)"
                            />
                          </clipPath>
                          <clipPath id="clip1_3066_377">
                            <rect
                              width="32"
                              height="16"
                              fill="white"
                              transform="translate(0.5 8)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent
                    class="
                      overflow-hidden

                      data-[state=closed]:animate-slideUp

                      data-[state=open]:animate-slideDown
                    "
                  >
                    <div class="px-9 pb-7">
                      <p
                        class="
                          text-[14px] leading-[1.1]

                          min-[450px]:text-[18px]
                        "
                        v-html="item.descr"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </TabsContent>
          </TabsRoot>
        </TabsContent>
      </TabsRoot>

      <button
        type="button"
        @click="openModal"
        class="
          mt-4.5 h-14.5 w-full rounded-[47px] bg-[#5045CF] text-center
          text-[20px] leading-[1.1] text-white transition-colors

          enabled:cursor-pointer enabled:hover:bg-[#5045CF]/90

          md:mt-6
        "
      >
        Хочу на курс
      </button>
      <PageSmeniPopup :is-open="isOpen" :smen="smen" :close-modal="closeModal" />
    </div>
  </section>
</template>
