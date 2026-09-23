<script setup lang='ts'>
import type { AcceptableValue } from 'reka-ui'

const items = [
  {
    title: 'Уникальная система Физтеха',
    content: 'В&nbsp;лучших традициях Физтеха мы&nbsp;помогаем школьникам раскрыть свои таланты и&nbsp;открываем возможности для получения качественного высшего образования. Уже более 15&nbsp;000 человек прошли обучение по&nbsp;нашим программам.',
  },
  {
    title: 'Поступление в топовые вузы',
    content: 'В&nbsp;2024 году каждый 5-ый из&nbsp;числа победителей и&nbsp;призеров заключительного этапа ВсОШ по&nbsp;профильным предметам являлся участником Олимпиадных школ. Среди наших также немало победителей международных олимпиад.',
  },
  {
    title: 'Сообщество талантов',
    content: 'По&nbsp;данным опросов, проведённых в&nbsp;2023&ndash;2024&nbsp;годах, 98% наших выпускников поступили в&nbsp;топовые вузы.&nbsp;230 поступили на&nbsp;Физтех&nbsp;&mdash; каждый четвёртый первокурсник МФТИ 2024 года наш ученик.',
  },
  {
    title: 'Победы в Олимпиадах',
    content: 'Олимпиадные школы&nbsp;&mdash; это не&nbsp;только качественное образование, но&nbsp;и&nbsp;возможность стать частью комьюнити таких&nbsp;же талантливых и&nbsp;увлечённых школьников из&nbsp;России и&nbsp;других стран.',
  },
]

const bubbles = [
  {
    content: {
      number: '177',
      text: 'участников Олимпиадных школ стали победителями и призёрами заключительного этапа ВсОШ в 2024 году',
    },
  },
  {
    content: {
      number: '230',
      text: 'наших учеников стали первокурсниками Физтеха в&nbsp;2024 году',
    },
  },
  {
    content: {
      number: '15000+',
      text: 'школьников прошли обучение у&nbsp;нас с 2013 года',
    },
  },
  {
    content: {
      number: '944',
      text: 'учебных заведения из 75 регионов были представлены на&nbsp;сменах в 2023 году',
    },
  },
]

const activeDescription = ref<AcceptableValue>(items[0].content)
</script>

<template>
  <BaseSection
    aria-labelledby="about-heading"
    class="xl:px-11.5 max-w-(--breakpoint-layout) mx-auto"
    type="none"
  >
    <div class="-mb-10">
      <div
        class="relative z-20 not-sm:[clip-path:inset(0_round_var(--radius-base))]"
      >
        <div class="bg-primary rounded-base sm:pt-11.5 pt-5 xl:pl-30 lg:pl-10 px-5 sm:pb-14 pb-10">
          <BaseHeading
            id="about-heading"
            class="text-white relative z-20"
          >
            Главное
          </BaseHeading>

          <div class="sm:space-y-9 space-y-6 relative z-20 text-white text-primary-paragraph-r not-sm:max-w-[450px] sm:mt-9 mt-6 not-md:max-w-140">
            <p class="max-w-[613px]">
              Олимпиадные школы МФТИ&nbsp;&mdash; первый в&nbsp;России, крупнейший и&nbsp;единственный официальный университетский лагерь МФТИ для школьников <span class="text-nowrap">7-11</span>&nbsp;классов, увлеченных изучением точных и&nbsp;естественных наук.
            </p>
            <ToggleGroupRoot
              class="md:gap-y-5 gap-2 md:gap-x-4 flex flex-wrap text-black max-w-[663px]"
              :model-value="activeDescription"
              @update:model-value="
                (val) => {
                  if (val) activeDescription = val
                }"
            >
              <ToggleGroupItem
                v-for="(text, ind) in items"
                :key="ind"
                :value="text.content"
                class="sm:p-4 p-3 rounded-[40px] text-center cursor-pointer transition-colors data-[state=on]:bg-[#C7F4CE] bg-white"
              >
                {{ text.title }}
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <p
              class="max-w-[674px] rounded-xl sm:mt-13 mt-6"
              v-html="activeDescription"
            />
          </div>
        </div>

        <div>
          <div class="absolute h-full right-0 top-0">
            <NuxtImg 
              src="/Pip/pip_about.webp"
              loading="lazy"
              alt=""
              class="size-full object-cover rounded-r-xl not-lg:opacity-85"
            />
            <div
              class="absolute inset-0 bg-gradient-to-l from-transparent to-[#239F36] via-[#91cf9b]/[0.13]"
            />
          </div>

          <svg
            class="absolute top-0 right-0 max-[850px]:hidden"
            aria-hidden="true"
            width="176"
            height="261"
            viewBox="0 0 176 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.0219 103.246C53.3668 104.035 58.7905 104.797 64.1448 105.759C89.4676 110.517 112.822 121.919 130.233 140.749C147.901 159.846 158.873 185.828 172.508 209.078C186.143 232.328 203.784 253.902 229.159 259.613C234.852 260.903 241.218 261.266 247.215 257.785C253.206 254.218 257.959 245.598 255.792 239.705C253.917 234.773 248.4 233.777 243.668 232.434C223.921 226.801 211.477 207.739 203.063 187.433C194.649 167.127 188.921 144.523 177.584 126.593C164.763 106.51 145.248 93.311 123.767 85.3435C102.287 77.376 78.8272 74.3807 55.2568 72.3032C42.6637 71.1791 28.1568 68.8371 24.391 55.7184C20.4345 42.0458 31.5696 23.7367 44.6015 15.1988C57.6382 6.74737 71.9381 5.2805 85.6386 3.13056C114.001 -1.22268 144.509 -10.4271 168.368 -34.0879C172.71 -38.4316 177.081 -43.7536 177.963 -49.685C181.585 -74.6751 121.083 -37.9311 111.47 -34.4886C88.0647 -26.1344 63.6556 -25.9078 41.3785 -11.5818C23.7611 -0.206194 9.25614 19.6575 3.09589 40.8162C-0.354738 52.7076 -1.20954 65.0627 2.30793 75.0912C6.59788 87.5079 16.9622 94.9205 28.3361 98.7388C34.6479 101.058 41.2978 102.208 48.0219 103.246Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div class="flex flex-col relative -top-10 z-10 rounded-base border-primary md:border-5 border-4 w-full xl:px-21 px-5 md:pt-21 pt-14 sm:pb-10 pb-5">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-[11.7%] md:gap-y-[34px] gap-y-7">
          <div
            v-for="({ content }, ind) in bubbles"
            :key="ind"
            class="flex flex-row md:gap-x-12 gap-x-4.5 items-center"
          >
            <h3
              class="bg-primary rounded-full text-white md:size-[154px] size-30 shrink-0 flex items-center justify-center md:text-primary-heading text-secondary-heading-md font-bold"
            >
              {{ content.number }}
            </h3>
            <p
              class="text-primary-paragraph-r md:max-w-[450px] max-w-[360px]"
              v-html="content.text"
            />
          </div>
        </div>

        <NuxtLink
          class="sm:px-8 px-6 sm:py-4.5 py-3 border-3 border-primary text-primary-paragraph-r rounded-[40px] cursor-pointer hover:bg-primary hover:text-white transition-colors disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-offset-4 mx-auto sm:mt-12 mt-8"
          to="/about"
        >
          Узнать подробнее
        </NuxtLink>
      </div>
    </div>
  </BaseSection>
</template>
