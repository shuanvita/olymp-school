<script setup lang='ts'>
defineProps<{
  items: any
}>()
const month = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
</script>

<template>
  
  <div
    aria-label="Список смен"
    class="mt-primary-between-sections-r md:space-y-10 space-y-7"
  >
    <HeadlessTabGroup>
      <HeadlessTabList
        class="flex flex-row text-[#8B8B8B] outline-0 focus-visible:!outline-none focus-visible:!outline-0 md:text-[32px] md:leading-[1.1em] not-md:text-primary-heading-md md:gap-x-5 gap-x-2 font-bold flex-wrap gap-y-2 xl:pl-43 xl:pr-36 lg:px-20 px-5"
      >
        <HeadlessTab
          v-for="(item, i) in items"
          :key="i"
          v-slot="{ selected }"
          as="div"
        >
          <button
            :class="{ 'text-primary border-b-4 border-b-primary': selected }"
            class="uppercase cursor-pointer text-nowrap hover:text-primary-dark outline-0 focus-visible:!outline-0 focus-visible:!outline-none"
            v-html="item.smenname"
          />
        </HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels class="relative px-primary-padding-layout-r">
        <HeadlessTabPanel
          v-for="(item, i) in items"
          :key="i"
        >
          <div class="relative flex xmd:flex-row flex-col justify-between gap-x-40 gap-y-[43px]">
            <section class="xmd:ml-9 ml-2">
              <h3 class="md:text-[32px] text-primary-heading-md font-bold">
                ДАТЫ
              </h3>

              <div class="xmd:mt-16 mt-11 relative text-primary-paragraph-r size-fit xmd:ml-10 ml-1">
                <span
                  class="absolute uppercase xmd:-top-4 -top-2.5 xmd:-left-10 -left-1 -translate-y-full"
                  v-html="new Date(item.smendatestart).getDate() + ' ' + month[new Date(item.smendatestart).getMonth()]"
                />
                <NuxtImg 
                  src="/Smeni/SmenList/arrow_1.svg"
                  alt=""
                  class="w-[195px] aspect-[1.60] not-xmd:hidden"
                  loading="lazy"
                />
                <NuxtImg 
                  src="/Smeni/SmenList/arrow_2.svg"
                  alt=""
                  class="w-[155px] aspect-[0.91] xmd:hidden"
                  loading="lazy"
                />
                <span
                  class="absolute uppercase -right-2.5 xmd:-bottom-2 bottom-0 translate-x-full"
                  v-html="new Date(item.smendateend).getDate() + ' ' + month[new Date(item.smendateend).getMonth()]"
                />
              </div>
              <span class="mt-8 flex text-base">Продолжительность смены {{ (new Date(item.smendateend) - new Date(item.smendatestart))/ (1000 * 60 * 60 * 24) + 1 }} дней</span>

              <b v-if="item.idAdmMer == 424" class="mt-2 max-w-[300px] flex text-base">Обращаем ваше внимание, что смена «Июль» совпадает с плановым отключением горячей воды.</b>
              <NuxtLink to="#filter-heading" class="flex mt-8 not-xmd:hidden justify-center cursor-pointer focus-visible:outline-offset-4 text-primary-paragraph-r text-nowrap bg-primary font-bold text-white py-4.5 px-10 rounded-xl hover:bg-primary-light transition-colors">
                Хочу на смену
              </NuxtLink>
            </section>

            <section class="md:space-y-6 space-y-5 mr-5">
              <h3 class="md:text-[32px] text-primary-heading-md font-bold">
                ПРЕДМЕТЫ
              </h3>

              <div class="flex flex-col xmd:gap-y-2.5 gap-y-4.5 max-w-max">
                <div
                  v-for="(subject, j) in item.napravlenie"
                  :key="j"
                  class="grid grid-cols-3 xmd:gap-x-8 gap-x-4 text-primary-paragraph-r items-center"
                >
                  <span
                    class="py-2.5 col-span-2 border-2 border-primary xmd:px-15 px-6 rounded-[27px] text-center"
                    v-html="subject.napnametitle"
                  />
                  <span
                    class="text-nowrap ml-auto"
                    v-html="Math.min.apply(null, subject.smennapclass.split(',')) != Math.max.apply(null, subject.smennapclass.split(',')) ? Math.min.apply(null, subject.smennapclass.split(',')) +' - '+ Math.max.apply(null, subject.smennapclass.split(',')) + ' КЛАСС':Math.min.apply(null, subject.smennapclass.split(',')) + ' КЛАСС'"
                  />
                </div>
              </div>
            </section>
          </div>

          <button class="xmd:hidden cursor-pointer focus-visible:outline-offset-4 text-primary-paragraph-r text-nowrap bg-primary font-bold text-white py-3 px-6 rounded-xl hover:bg-primary-light transition-colors mt-5">
            Хочу на смену
          </button>

          <div class="not-xmd:hidden absolute -bottom-15 w-full max-w-[1114px] border-t-3 border-primary" />
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
  </div>
</template>
