<script setup lang="ts">
const props = defineProps<{ categories: any }>()
</script>

<template>
  <BaseSection
    aria-labelledby="price-heading"
  >
    <BaseHeading id="price-heading">
      СТОИМОСТЬ И СКИДКИ
    </BaseHeading>

    <div class="w-full border-3 border-primary-light rounded-xl space-y-5 md:pt-9 pt-4">
      <h3
        class="md:text-[24px] text-primary-paragraph font-bold xmd:hidden text-left px-[25px]"
      >
        Стоимость участия в летней очной смене&nbsp;2025&nbsp;г.
      </h3>
{{ props }}
      <HeadlessTabGroup
        class="flex xmd:flex-row flex-col md:gap-y-10 gap-y-5 not-xmd:px-[25px]"
        as="div"
      >
        <HeadlessTabList class="flex flex-col justify-center gap-3">
          <HeadlessTab
            v-for="category in Object.keys(categories)"
            :key="category"
            v-slot="{ selected }"
            as="template"
          >
            <button
              class="text-nowrap rounded-r-xl xmd:py-6 py-7 pl-2 pr-10 border-2 xmd:border-l-0 text-primary-paragraph-r text-left cursor-pointer not-ui-focus-visible:outline-none transition-colors not-xmd:rounded-[10px]"
              :class="[!selected
                ? 'bg-secondary-light border-secondary-light hover:bg-white hover:border-primary'
                : 'bg-white border-primary',
              ]"
            >
              {{ category }}
            </button>
          </HeadlessTab>
        </HeadlessTabList>

        <HeadlessTabPanels>
          <HeadlessTabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            class="flex flex-col justify-between items-stretch md:pb-14 pb-5 xmd:pl-14 xmd:pr-16"
          >
            <div class="flex flex-col">
              <h3
                class="md:text-[24px] text-primary-paragraph font-bold mb-12 not-xmd:hidden"
              >
                Стоимость участия в летней очной смене&nbsp;2025&nbsp;г.
              </h3>
              <ul class="flex flex-col md:gap-20 gap-5">
                <li
                  v-for="(price_item, indx) in posts.price"
                  :key="indx"
                  class="flex md:gap-x-10 min-[330px]:gap-x-6.5 gap-x-3 items-center"
                >
                  <span class="md:text-secondary-heading-md text-primary-paragraph" v-html="price_item.price+'₽'">
                    
                  </span>
                  <p
                    class="text-primary-paragraph-r"
                    v-html="price_item.descr"
                  />
                </li>
              </ul>
            </div>
          </HeadlessTabPanel>
        </HeadlessTabPanels>
      </HeadlessTabGroup>

      <div class="xmd:ml-8 mb-6 xmd:mr-16 mx-[25px] space-y-5.5 text-primary-paragraph-md">
        <p class="font-medium">
          *Скидка 30% за ранее бронирование при оплате до 15.04.2025
        </p>
        <p>
          *Скидки различных категории суммируются. Максимальный размер скидки 30% от базовых цен. В период действия
          скидок за раннее бронирование максимальный размер скидки 30% от цен с учётом скидки за ранее бронирование.
        </p>
      </div>
    </div>
  </BaseSection>
</template>
