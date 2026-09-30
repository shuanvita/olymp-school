<script setup lang="ts">
defineProps<{
  title: string
  categories: any
}>()
</script>

<template>
  <BaseSection aria-labelledby="price-heading">
    <BaseHeading id="price-heading">
      СТОИМОСТЬ И СКИДКИ
    </BaseHeading>

    <div class="w-full border-3 border-primary-light rounded-base space-y-5 md:pt-9 pt-4">
      <h3 class="md:text-[24px] text-primary-paragraph font-bold xmd:hidden px-[25px]" v-html="title" />

      <HeadlessTabGroup class="flex xmd:flex-row flex-col md:gap-y-10 gap-y-5 not-xmd:px-[25px]" as="div">
        <HeadlessTabList class="flex flex-col justify-center md:gap-y-3 gap-y-2">
          <HeadlessTab v-for="category in categories.type" :key="category" v-slot="{ selected }" as="template">
            <button
              class="text-nowrap rounded-r-xl xmd:py-6 py-7 pl-2 pr-10 border-2 xmd:border-l-0 text-primary-paragraph-r text-left cursor-pointer not-ui-focus-visible:outline-none transition-colors not-xmd:rounded-[10px]"
              :class="[!selected
                ? 'bg-secondary-light border-secondary-light hover:bg-white hover:border-primary'
                : 'bg-white border-primary',
              ]">
              {{ category.tabName }}
            </button>
          </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels>
          <HeadlessTabPanel v-for="(posts, idx) in categories.type" :key="idx"
            class="flex flex-col justify-between items-stretch md:pb-14 pb-5 xmd:pl-14 xmd:pr-16">
            <div class="flex flex-col">
              <h3 class="md:text-[24px] text-primary-paragraph font-bold mb-12 not-xmd:hidden"
                v-html="posts.nameType" />
              <ul class="flex flex-col md:gap-20 gap-5">

                <li v-for="(price_item, indx) in posts.price" :key="indx"
                  class="flex md:gap-x-10 max-md:flex-col max-md:items-start max-md:gap-3 min-[330px]:gap-x-6.5 gap-x-3 items-center">
                  <div class="flex min-w-[155px] flex-col items-start gap-1">
                    <span
                      :class="[price_item.priceNumSale ? 'text-[#B9B9B9] relative before:h-[1.5px] before:w-full before:bg-[#B9B9B9] before:rotate-[10deg] before:absolute before:top-1/2 before:-left-1 !text-xl max-md:!text-lg' : '', 'md:text-secondary-heading-md text-primary-paragraph']"
                      v-html="price_item.priceNum">
                    </span>
                    <span v-if="price_item.priceNumSale" class="md:text-secondary-heading-md text-primary-paragraph"
                      v-html="price_item.priceNumSale">
                    </span>
                    <span v-if="price_item.priceNumSaleDescr"
                      class="text-xs max-md:text-[10px] max-w-[155px] max-md:max-w-[250px] max-md:text-xs font-nunito-sans"
                      v-html="price_item.priceNumSaleDescr">
                    </span>
                  </div>
                  <div class="text-primary-paragraph-r" v-html="price_item.descr" />
                </li>
              </ul>
            </div>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>

      <div class="xmd:ml-8 mb-6 xmd:mr-16 mx-[25px] space-y-5.5 text-primary-paragraph-md">
        <p>
          *Скидки различных категории суммируются. Максимальный размер скидки 30% от базовых цен. В период действия
          скидок за раннее бронирование максимальный размер скидки 30% от цен с учётом скидки за ранее бронирование.
        </p>
        <ul class="flex flex-col gap-3">
          <li><a class="flex items-center gap-3" target="_blank" href="https://disk.yandex.ru/i/lkgxvPpjS4w8bA">
              <svg class="w-[30px] max-sm:w-[20px] min-w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
              </svg>
              <span class="underline">Как оплатить обучение из средств материнского капитала</span></a></li>
          <li>
            <a class="flex items-center gap-3" target="_blank" href="https://disk.yandex.ru/i/8xkLlN8ZDPs9qA">
              <svg class="w-[30px] max-sm:w-[20px] min-w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z" />
              </svg>
              <span class="underline">Как оформить налоговый вычет</span></a>
          </li>
        </ul>
      </div>
    </div>
  </BaseSection>
</template>
