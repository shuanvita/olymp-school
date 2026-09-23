<script setup lang='ts'>
const props = 
  defineProps<{
    info?: any
  }>()
</script>

<template>
  <div class="px-primary-padding-layout-r space-y-15 mt-15">
    <div class="text-primary-paragraph-r max-w-200" v-html="info.data.page.faq25ql.textpage">
    </div>

    <HeadlessTabGroup
      as="div"
      class="md:space-y-10 space-y-5"
    >
      <HeadlessTabList
        class="flex flex-row text-[#8B8B8B] md:text-[32px] md:leading-[1.1em] not-md:text-primary-heading-md md:gap-x-5 gap-x-2 font-bold flex-wrap gap-y-2"
      >
        <HeadlessTab
          v-for="(item, i) in info.data.page.faq25ql.faq25"
          :key="i"
          v-slot="{ selected }"
          as="template"
        >
          <button
            :class="{ 'text-primary border-b-4 border-primary': selected }"
            class="uppercase cursor-pointer text-nowrap hover:text-primary-dark not-ui-focus-visible:outline-none ui-focus-visible:outline-offset-4 ui-focus-visible:outline-primary"
          >
            {{ item.faqgroupname }}
          </button>
        </HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels class="h-full">
        <HeadlessTabPanel
          v-for="(item, i) in info.data.page.faq25ql.faq25"
          :key="i"
          as="ul"
          class="space-y-[15px]"
        >
          <HeadlessDisclosure
            v-for="(el, j) in item.question25"
            :key="j"
            as="li"
            class="text-primary-paragraph-r md:space-y-3 space-y-2"
          >
            <HeadlessDisclosureButton
              v-slot="{ open }"
              class="md:py-8 py-5 md:px-7 px-4 w-full text-left md:rounded-[30px] rounded-xl flex flex-row justify-between items-center cursor-pointer focus:outline-offset-4"
              style="background: linear-gradient(269.91deg, rgba(183, 69, 207, 0.4) 59%, #D8A3E8 85.56%, #D7A3E8 112.12%)"
            >
              {{ el.question }}

              <svg
                :class="{ '-scale-100': open }"
                class="md:size-6 size-4 transition-transform"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5978 1.5L12.3326 13.5L2.0675 1.5"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </HeadlessDisclosureButton>
            <HeadlessDisclosurePanel
              as="div"
              class="md:px-7 px-4 faq_panel"
            >
              <div v-html="el.answer"></div>
            </HeadlessDisclosurePanel>
          </HeadlessDisclosure>
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
  </div>
</template>
<style>
.faq_panel ul{
  padding-left: 22px;
  list-style: disc;
}
.faq_panel a{
  text-decoration: underline;
}</style>
