<script setup lang="ts">
const props = 
  defineProps<{
    items?: any
  }>()
  
const sredaItems = [
  {
    name: 'ПРОЖИВАНИЕ',
    img: '/Smeni/Sreda/sreda2.webp',
    descr: 'Школьники будут жить в двух-, трёх- и четырёхместных номерах квартирного типа с удобствами в номере. В номерах есть электрические чайники, на этаже - кулеры с холодной и горячей водой. В корпусах 24/7 вместе с детьми будут находиться вожатые и медицинский персонал.',
  },
  {
    name: 'ПИТАНИЕ',
    img: '/Smeni/Sreda/sreda1.webp',
    descr: 'Мы предлагаем сбалансированное пятиразовое питание с возможностью выбора блюд в Комбинате студенческого питания МФТИ. Для детей, которым необходимо соблюдать диету, будет предложено специальное меню. Кром того, у детей будет возможность посещать супермаркет в сопровождении вожатых.',
  },
  {
    name: 'ОБУЧЕНИЕ',
    img: '/Smeni/Sreda/sreda3.webp',
    descr: 'Занятия проходят в оборудованных аудиториях учебных корпусов кампуса МФТИ. Стандартный учебный день состоит из трёх лекционных пар, домашних заданий, а также дневных и вечерних дорешек. Кроме того, у школьников на смене есть чат с преподавателями и ассистентами, в котором они могут задавать вопросы.',
  },
  {
    name: 'БЕЗОПАСНОСТЬ',
    img: '/Smeni/Sreda/sreda4.webp',
    descr: 'Территория кампуса круглосуточно охраняется. Вместе с детьми всегда находятся вожатые, которые несут ответственность за жизнь и здоровье детей. В связи с тем, что у кампуса МФТИ нет закрытой территории, все перемещения школьников между корпусами осуществляются только в сопровождении вожатых.',
  },
]
</script>

<template>
  <BaseSection
    aria-labelledby="comfortable-environment-heading"
  >
    <BaseHeading id="comfortable-environment-heading">
      КОМФОРТНАЯ СРЕДА
    </BaseHeading>
    <div class="grid min-[900px]:grid-cols-2 gap-4 grid-cols-1">
      <article
        v-for="(item, inx) in props.items"
        :key="inx"
        class="relative rounded-2xl overflow-hidden border-2 border-primary"
      >
        <NuxtImg 
          loading="lazy"
          :alt="item.name"
          :src="'https://it-edu.com/'+item.img.node.filePath"
          class="absolute bottom-0 left-0 max-h-[90%] z-10 pointer-events-none"
        />

        <div
          class="md:mt-8 mt-5 mb-11 flex flex-col items-end w-2/3 ml-auto bg-white relative z-20 rounded-b-2xl overflow-hidden text-primary-paragraph-r md:space-y-4 space-y-2"
        >
          <h3
            class="font-semibold w-full rounded-l-xl text-white bg-primary px-3 py-2 uppercase"
          >
            {{ item.name }}
          </h3>
          <div class="p-3 bg-white" v-html="item.descr">
          </div>
        </div>
      </article>
    </div>
  </BaseSection>
</template>
