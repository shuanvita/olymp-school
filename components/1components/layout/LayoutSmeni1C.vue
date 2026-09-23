<script setup lang='ts'>
const props = 
  defineProps<{
    info?: any
  }>()


</script>

<template>
  <BaseSection
    aria-labelledby="gallery-heading"
    class="mt-primary-between-sections-r space-y-primary-between-section-heading-r md:!scroll-mt-6 !scroll-mt-4 xl:pl-42 xl:pr-38.5 px-primary-padding-layout-r"
    type="none"
  >
    <div class="flex items-center justify-between gap-8 max-md:flex-col">
      <img class="max-w-[400px] w-full" src="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/logo1c-1.png" alt="1c">
      <p class="text-primary-paragraph-r">
        Фирма 1С — российский разработчик программного обеспечения, основанный в апреле 1991 года, известна своими решениями в области автоматизации бизнеса и управления предприятием. Компания 1С активно занимается образованием школьников и совместно с МФТИ проводит олимпиады по программированию, способствуя развитию IT-образования в России. Их инициативы направлены на поддержку талантливой молодёжи и формирование будущих профессионалов в области информационных технологий.
      </p>
    </div>

  </BaseSection>
</template>
