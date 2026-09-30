<script setup lang="ts">
const items = [
  {
    headingId: '2013year-heading',
    sectionStyles: 'bg-primary md:space-y-[37px] space-y-[29px] text-white rounded-tr-[140px] not-md:pr-15 sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r not-sm:max-w-[258px]',
  },
  {
    headingId: '2014year-heading',
    sectionStyles: 'md:col-span-2 md:space-y-[37px] space-y-[29px] rounded-br-[140px] border-5 border-primary not-md:sm:pr-15 sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r sm:max-w-[358px] max-w-[152px]',
  },
  {
    headingId: '2015year-heading',
    sectionStyles: 'md:space-y-[37px] space-y-[29px] sm:rounded-tl-[140px] border-5 border-primary sm:text-right not-xmd:md:col-span-2 not-sm:rounded-tr-[140px] sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r not-sm:max-w-[152px]',
  },
  {
    headingId: '2020year-heading',
    sectionStyles: 'md:space-y-[37px] space-y-[29px] border-5 border-primary rounded-br-[140px] xmd:md:col-span-2 not-md:sm:pr-15 sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r sm:max-w-[358px] max-w-[152px]',
  },
  {
    headingId: '2021year-heading',
    sectionStyles: 'md:space-y-[37px] space-y-[29px] border-5 border-primary sm:text-right sm:rounded-tl-[140px] not-sm:rounded-tr-[140px] sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r not-sm:max-w-[127px]',
  },
  {
    headingId: '2021year-heading',
    sectionStyles: 'bg-primary md:space-y-[37px] space-y-[29px] text-white sm:rounded-tr-[140px] not-xmd:md:col-span-2 not-sm:rounded-br-[140px] sm:pt-6.5 pt-3.5 px-6 rounded-[5px]',
    paragraphStyles: 'text-primary-paragraph-r not-sm:max-w-[147px]',
  },
]

const props = 
  defineProps<{
    info?: any
  }>()
</script>

<template>
  <BaseSection
    aria-labelledby="history-heading"
  >
    <BaseHeading id="history-heading">
      История
    </BaseHeading>
    <div class="grid min-[1100px]:md:grid-cols-[285px_auto_285px_285px] xmd:md:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] sm:grid-cols-2 grid-cols-1 gap-x-3 sm:gap-y-5 gap-y-3 md:auto-rows-[265px] auto-rows-[145px]">
      <section
        v-for="(item, i) in items"
        :key="i"
        :aria-labelledby="item.headingId"
        :class="item.sectionStyles"
      >
        <BaseHeading
          :id="item.headingId"
          transform="normal-case"
          class="text-nowrap"
        >
          {{ props.info.historyItems[i].cifr }}
        </BaseHeading>

        <div
          :class="item.paragraphStyles"
          v-html="props.info.historyItems[i].descr"
        />
      </section>
    </div>
  </BaseSection>
</template>
