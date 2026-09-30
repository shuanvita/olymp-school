<template>
  <BaseSection :aria-labelledby="'faq-heading'" :aria-label="'FAQ'"
    class="overflow-hidden max-w-(--breakpoint-layout) mx-auto">
  <!-- <div class="space-y-15 mt-15 overflow-hidden max-w-(--breakpoint-layout) mx-auto"> -->
    <BaseHeading id="faq" class="text-[40px]">
      FAQ
    </BaseHeading>

    <HeadlessTabGroup as="div" class="md:space-y-10 space-y-5">
     
      <HeadlessTabPanels class="h-full">
        <HeadlessTabPanel v-for="(item, i) in info.data.page.faq25ql.faq25" :key="i" as="ul"
          class="space-y-[15px] max-w-[850px]">
          <HeadlessDisclosure v-for="(el, j) in item.question25" :key="j" as="li"
            class="text-primary-paragraph-r md:space-y-3 space-y-2">
            <HeadlessDisclosureButton v-slot="{ open }"
              class="md:py-4 border-2 border-primary py-2 md:px-7 px-4 w-full text-left md:rounded-[30px] rounded-xl flex flex-row justify-between items-center cursor-pointer focus:outline-offset-4">
              {{ el.question }}

              <svg v-if="!open" class="md:size-7 size-5 transition-transform" xmlns="http://www.w3.org/2000/svg"
                width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path
                  d="M19.4318 28.2102V11.3352H22.2955V28.2102H19.4318ZM12.4261 21.2045V18.3409H29.3011V21.2045H12.4261Z"
                  fill="#882ABF" />
                <circle cx="20.5" cy="20.5" r="19.5" stroke="#882ABF" stroke-width="2" />
              </svg>
              <svg v-else class="md:size-7 size-5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M29 20V23H11V20H29Z" fill="#882ABF" />
                <circle cx="20.5" cy="20.5" r="19" stroke="#882ABF" stroke-width="3" />
              </svg>
            </HeadlessDisclosureButton>
            <HeadlessDisclosurePanel as="div" class="md:px-7 px-4 faq_panel">
              <div v-html="el.answer"></div>
            </HeadlessDisclosurePanel>
          </HeadlessDisclosure>
        </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
    <!-- </div> -->
  </BaseSection>
</template>
<style>
.faq_panel ul {
  padding-left: 22px;
  list-style: disc;
}

.faq_panel a {
  text-decoration: underline;
}
</style>
<script setup>
const response = await fetch('https://it-edu.com/mipt-school/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: 'query GetFaq {page(id: "12033", idType: DATABASE_ID) {faq25ql {textpage faq25 {faqgroupname question25 {answer question}}}}}',
    variables: {},
  }),
});

const info = await response.json();
</script>