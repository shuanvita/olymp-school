<script setup>
const variants = [
  {
    image: '/Programs/EducationVariants/variant_1.webp',
    name: 'Летние смены на&nbsp;кампусе МФТИ',
    class: '7-11 класс',
    date: 'Июнь-август',
    duration: '13 дней',
    description: 'Интенсивная подготовка в летние каникулы с максимальным погружением.',
    directions: 'математика, физика, информатика, биоинформатика, Физтех.Инженер',
    levels: 'базовый, продвинутый, «Профи»',
    buttonText: 'Подробнее о смене',
    buttonHref: 'https://edu.mipt.ru/olymp-school/programs/losh_mipt',
    active: false,
    styleImg: 'object-[0_0]',
  },
  {
    image: '/Programs/EducationVariants/variant_2.webp',
    name: 'Летние <br> онлайн-смены',
    class: '7-11 класс',
    date: 'Июнь-август',
    duration: '10 дней',
    description: 'Сочетание качественной подготовки с возможностью учиться, не выходя из дома.',
    directions: 'математика, физика, информатика',
    levels: 'базовый, продвинутый',
    buttonText: 'Подробнее о смене',
    buttonHref: 'https://edu.mipt.ru/olymp-school/programs/losh_online',
    active: false,
    styleImg: 'object-[0_0]',
  },
  // {
  //   image: '/Programs/EducationVariants/variant_1.webp',
  //   name: 'Летние дневные<br/> смены на базе офиса 1С',
  //   class: '7-10 класс',
  //   date: 'Июль',
  //   duration: '10 дней',
  //   description: 'Отличный вариант для тех,  кто проживает в Москве и Подмосковье и  планирует продолжать олимпиадную подготовку летом.',
  //   directions: 'математика, информатика',
  //   levels: 'базовый, продвинутый',
  //   buttonText: 'Подробнее о смене',
  //   buttonHref: 'https://edu.mipt.ru/olymp-school/programs/losh_day1c',
  //   active: true,
  //   styleImg: 'object-[0_0]',
  // },
  {
    image: '/Programs/EducationVariants/variant_4.webp',
    name: 'Онлайн-курсы <br> Олимпиадной подготовки',
    class: '7-11 класс',
    date: 'Октябрь-апрель',
    duration: '7 месяцев',
    description: 'Подготовка к олимпиадам в течение всего года без отрыва от учёбы.',
    directions: 'математика, физика, информатика',
    levels: 'базовый, продвинутый',
    buttonText: 'Подробнее о курсах',
    buttonHref: 'https://it-edu.com/mipt-school/online-course',
    active: true,
    styleImg: 'object-[0_0]',
  },
  {
    image: '/Programs/EducationVariants/variant_5.webp',
    name: 'Турниры <br> Олимпиадных школ',
    class: '7-11 класс',
    date: 'Ноябрь-апрель',
    duration: '',
    description: 'Отличная возможность в конце сезона проверить свои знания и посоревноваться.',
    directions: 'математика, физика, информатика',
    levels: '',
    buttonText: 'Подробнее о турнирах',
    buttonHref: 'https://it-edu.com/mipt-school/tournaments24/',
    active: true,
    styleImg: 'object-[0_0]',
  },
  {
    image: '/Programs/EducationVariants/variant_3.webp',
    name: 'Зимние смены &nbsp;МФТИ',
    class: '7-11 класс',
    date: 'Январь',
    duration: '9 дней',
    description: 'Идеальный вариант подготовиться к заключительным турам ключевых олимпиад.',
    directions: 'математика, физика, информатика',
    levels: 'базовый, продвинутый, «Профи»',
    buttonText: 'Подробнее о смене',
    buttonHref: 'https://it-edu.com/mipt-school/zosh',
    active: true,
    styleImg: 'object-[0_0]',
  },
]
</script>

<template>
  <BaseSection
    aria-labelledby="variants-heading"
    type="none"
  >
    <BaseHeading
      id="variants-heading"
      class="px-primary-padding-layout-r"
    >
      Варианты обучения
    </BaseHeading>

    <div class="xl:px-24 lg:px-10 px-[14px] grid lg:grid-cols-3 min-[560px]:grid-cols-2 grid-cols-1 xl:gap-x-[25px] gap-x-3 gap-y-5">
      <article
        v-for="(item, i) in variants"
        :key="i"
        class="relative sm:pb-[29px] pb-5 sm:pt-[21px] pt-[15px] px-[17px] bg-primary rounded-2xl text-white flex flex-col"
      >
        <div class="relative">
          <NuxtImg 
            :src="item.image"
            alt=""
            class="w-full sm:h-[371px] h-[340px] object-cover rounded-lg"
            loading="lazy"
            :class="item.styleImg"
          />

          <div class="absolute right-0 bottom-0 flex flex-col md:gap-y-[23px] gap-y-4 bg-primary text-primary-paragraph-r md:pb-3 pb-4 md:pt-7.5 pt-6.5 md:pl-7.5 pl-3.5 not-md:pr-5 rounded-tl-3xl">
            <span
              class="h-[1lh]"
              v-html="item.class"
            />
            <span
              class="h-[1lh]"
              v-html="item.date"
            />
            <span
              class="h-[1lh]"
              v-html="item.duration"
            />
          </div>
        </div>

        <div class="flex flex-col grow justify-between">
          <div class="space-y-3.5 md:pl-3.5 mt-4">
            <h3
              class="md:text-[24px] md:leading-[1.1em] text-primary-paragraph font-bold"
              v-html="item.name"
            />

            <p
              class="text-primary-paragraph-r"
              v-html="item.description"
            />

            <div class="text-primary-paragraph-r">
              <p v-if="item.directions">
                <span class="font-bold">
                  Направления:
                </span>
                <span v-html="item.directions" />
              </p>
              <p v-if="item.levels">
                <span class="font-bold">
                  Уровни подготовки:
                </span>
                <span v-html="item.levels" />
              </p>
            </div>
          </div>

          <a
            :href="item.buttonHref"
            class="text-primary md:mt-12 mt-6 md:py-5 py-4.5 text-primary-paragraph bg-white rounded-[67px] w-full font-bold block text-center hover:bg-gray-200 transition-colors px-2"
          >
            {{ item.buttonText }}
        </a>
        </div>

        <span
          v-if="item.active"
          class="absolute grid place-items-center size-20 bg-[#FF4C00] text-[17px] leading-[1.1em] font-bold rounded-full xl:-top-[39px] -top-[15px] xl:-left-[23px] -left-2.5"
        >
          Идёт <br> набор
        </span>
      </article>
    </div>
  </BaseSection>
</template>
