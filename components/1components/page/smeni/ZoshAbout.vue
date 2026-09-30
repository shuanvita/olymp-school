<script setup lang="ts">
defineProps<{
  title: string
  textAbout: string
  levels: {
    levelname: string
    levelhard: boolean
    leveldescr: string
  }[]
  subjects: {
    name: string
    imgdiscip: any
  }[]
}>();

const items = [
  {
    img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/Group-7539-1.png',
    title: 'Смена «Кампус» <br/>на кампусе МФТИ',
    desrc: 'Погрузись в уникальную атмосферу Физтеха — это идеальный баланс между интенсивной учёбой и насыщенной жизнью на кампусе. <br/>Здесь ты сможешь почувствовать себя студентом МФТИ, найти друзей и вывести свои знания на новый уровень.',
    level: 'Уровни: Базовый и Продвинутый<br/><br/><br/>8-11 классы<br/><br/>Информатика, математика, физика'
  },
  {
    img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/Group-7537-2.png',
    title: 'Смена «Профи» <br/>на кампусе МФТИ',
    desrc: 'Смена пройдет на кампусе Физтеха. Это возможность полностью посвятить себя решению сложнейших задач и интенсивной подготовке в кругу сильнейших участников и сделать мощный прорыв к самым высоким результатам. ',
    level: 'Уровень Профи для призеров и победителей регионального этапа ВСОШ и РСОШ I&nbsp;и&nbsp;II&nbsp;уровня<br/><br/>9-11 классы<br/><br/>Информатика, математика, физика'
  }

];
</script>

<template>
  <BaseSection aria-labelledby="about-heading" type="primary">

    <BaseHeading id="about-heading">
      О ФОРМАТАХ СМЕНЫ
    </BaseHeading>

    <div class="text-primary-paragraph-r">
     Олимпиадные школы МФТИ — первый и единственный официальный университетский лагерь МФТИ для школьников. Мы будем рады всем — и тем, кто уже имеет успешный опыт участия в олимпиадах, и тем, кто только начинает свой путь. Мы гарантируем неизменно высокое качество обучения - каждый участник найдёт у нас именно то, что важно для него, независимо от целей: подготовка к ВСОШ или другим значимым интеллектуальным соревнованиям, таким как МОШ, Технокубок, Физтех, олимпиады им. Леонарда Эйлера, М. Келдыша, Дж. Кл. Максвелла и другим.
    </div>


    <div class="flex justify-center max-md:grid-cols-1 gap-5 max-md:gap-8">
      <div v-for="(value, index) in items"
        :class="['bg-white w-full relative max-w-[351px] max-md:max-w-[420px] max-sm:max-w-[300px] max-md:mx-auto', index == 1 ? '' : '']">
        <span
          class="rounded-4xl bg-[#FF8800] text-white p-2.5 text-primary-paragraph-r leading-6 z-3 absolute top-0 left-1/2 -translate-1/2"
          v-if="index == 1">Новинка!</span>
        <img class="relative z-2" :src="value.img" :alt="value.title" style="box-shadow: 0px 5px 6px 5px #ffffff;">
        <div
          class="text-primary-paragraph-r -mt-2 font-nunito-sans relative z-1 px-6 py-7 border-2 border-primary rounded-b-3xl">
          <span class="font-bold mb-4 block text-primary-paragraph-r" v-html="value.title"></span>
          <p class="block mb-6 text-primary-paragraph-r" v-html="value.desrc"></p>
          <p class="italic text-primary-paragraph-r" v-html="value.level"></p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
