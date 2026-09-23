<script setup lang="ts">
const items = [
  {
    index: 0,
    sectionStyles: 'md:space-y-3.5 space-y-4 md:max-w-[358px] max-w-[224px]',
  },
  {
    index: 1,
    sectionStyles: 'md:space-y-3.5 space-y-4 md:max-w-[358px] max-w-[224px] not-xmd:ml-auto',
  },
  {
    index: 2,
    sectionStyles: 'md:space-y-3.5 space-y-4 md:max-w-[358px] max-w-[224px]',
  },
  {
    index: 3,
    sectionStyles: 'md:space-y-3.5 space-y-4 md:max-w-[358px] max-w-[224px] not-xmd:ml-auto',
  },
]
const props = 
  defineProps<{
    info?: any
  }>()
</script>

<template>
  <BaseSection aria-labelledby="numbers-heading">
    <BaseHeading id="numbers-heading">
      Цифры
    </BaseHeading>
    <div class="md:mt-16 flex flex-col md:gap-y-3 gap-y-8 not-md:min-[590px]:px-20">
      <div
        v-for="i in Math.round(items.length / 2)"
        :key="i"
        class="flex xmd:flex-row flex-col gap-x-10 max-w-[850px] justify-between gap-y-3"
        :class="[i % 2 ? '' : 'w-full ml-auto']"
      >
        <section
          v-for="(item, j) in items.slice(2 * (i - 1), 2 * i)"
          :key="j"
          :class="item.sectionStyles"
        >
          <BaseHeading
            class="relative before:absolute before:border-t sm:before:-bottom-1 before:-bottom-1.5 before:w-full sm:before:max-w-[322px] before:max-w-[224px] text-nowrap"
          >
            {{ props.info.cifriItems[item.index].cifra }}
          </BaseHeading>

          <div
            class="text-primary-paragraph-r"
            v-html="props.info.cifriItems[item.index].descr"
          />
        </section>
      </div>
    </div>
  </BaseSection>
</template>
