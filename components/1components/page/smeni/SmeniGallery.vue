<script setup lang='ts'>
const props = 
  defineProps<{
    info?: any
  }>()

  let tabs = [];
  props.info.forEach(element => {
    const items = [];
    items.push(element.gallery.nodes);

    const gallery = [];
    element.gallery.nodes.forEach(element1 => {
      gallery.push('https://it-edu.com'+element1.filePath);
    }); 
    tabs[element.name] = gallery;
  });
  
const tabs1: { [key: string]: string[] } = {
  Ботаем: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
  Едим: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
  Живём: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
  Развлекаемся: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
  Общаемся: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
  Встречаемся: [
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
    '/Smeni/Gallery/1.webp',
  ],
}

const isOpen = ref(false)
const currentTab = ref('Ботаем')
const isExpandedMobile = ref(false)

const imageItemActive = ref({
  index: 0,
  src: '',
})

function handleTab(el: string) {
  currentTab.value = el
  isExpandedMobile.value = false
}

function handleExpandGalleryMobile() {
  isExpandedMobile.value = !isExpandedMobile.value
}

function openModal(item: { index: number, src: string }) {
  imageItemActive.value = item
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

function next() {
  if (imageItemActive.value.index < tabs[currentTab.value].length - 1) {
    imageItemActive.value.src = tabs[currentTab.value][imageItemActive.value.index + 1]
    imageItemActive.value.index++
  }
}

function prev() {
  if (imageItemActive.value.index > 0) {
    imageItemActive.value.src = tabs[currentTab.value][imageItemActive.value.index - 1]
    imageItemActive.value.index--
  }
}

function handleKeyDown(event: KeyboardEvent) {
  if (isOpen.value) {
    if (event.key === 'ArrowRight') {
      next()
    }
    if (event.key === 'ArrowLeft') {
      prev()
    }
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    window.addEventListener('keydown', handleKeyDown)
  } else {
    window.removeEventListener('keydown', handleKeyDown)
  }
})
</script>

<template>
  <BaseSection
    aria-labelledby="gallery-heading"
    class="xl:pr-[145px] xl:pl-41 min-[520px]:px-primary-padding-layout-r"
    type="none"
  >
    <BaseHeading
      id="gallery-heading"
      class="not-min-[520px]:px-4.5"
    >
      Фотоальбом
    </BaseHeading>

    <HeadlessTabGroup as="div">
      <HeadlessTabList class="flex flex-wrap md:gap-x-7 gap-x-2 gap-y-2 not-min-[520px]:px-4.5">
        <HeadlessTab
          v-for="(item, i) in Object.keys(tabs)"
          v-slot="{ selected }"
          :key="i"
          as="template"
          @click="handleTab(item)"
        >
          <button
            class="text-primary-paragraph-r md:py-4 py-2.5 md:w-[164px] w-[160px] border-4 border-primary rounded-[67px] font-bold cursor-pointer not-ui-focus-visible:outline-0 ui-focus-visible:outline-offset-4 transition-colors"
            :class="selected ? 'bg-primary text-white' : 'hover:bg-primary-light hover:text-white'"
          >
            {{ item }}
          </button>
        </HeadlessTab>
      </HeadlessTabList>

      <HeadlessTabPanels class="md:mt-12 mt-5">
        <template
          v-for="(item, i) in Object.values(tabs)"
          :key="i"
        >
          <HeadlessTabPanel
            class="flex md:flex-row flex-col gap-x-4 xl:pl-2.5 xl:pr-5 gap-y-2.5"
          >
            <NuxtImg 
              class="cursor-pointer rounded-base aspect-[0.91] object-cover md:w-[748px] w-[500px] not-md:mx-auto"
              alt=""
              :src="item[0]"
              loading="lazy"
              @click="openModal({ src: item[0], index: 0 })"
            />
            <div
              v-if="item.length > 1"
              class="not-md:hidden flex flex-col gap-y-4"
            >
              <NuxtImg 
                class="cursor-pointer rounded-base aspect-[1.43] object-cover w-[331px]"
                alt=""
                :src="item[1]"
                loading="lazy"
                @click="openModal({ src: item[1], index: 1 })"
              />
              <div
                v-if="item.length > 2"
                class="grid grid-cols-2 gap-x-1 gap-y-4"
              >
                <NuxtImg 
                  v-for="(src, j) in item.slice(2)"
                  :key="j"
                  class="cursor-pointer rounded-xl aspect-[1.61] object-cover w-[164px]"
                  alt=""
                  :src="src"
                  loading="lazy"
                  @click="openModal({ src: item[j + 2], index: j + 2 })"
                />
              </div>
            </div>
            <div class="md:hidden space-y-1.5">
              <div class="grid grid-cols-3 gap-x-1 gap-y-2">
                <NuxtImg 
                  v-for="(src, j) in item.slice(1, 4)"
                  :key="j"
                  :src="src"
                  class="cursor-pointer object-cover rounded-xl aspect-[1.48]"
                  loading="lazy"
                  alt=""
                  @click="openModal({ src: item[j + 1], index: j + 1 })"
                />
                <template v-if="isExpandedMobile">
                  <NuxtImg 
                    v-for="(src, k) in item.slice(4)"
                    :key="k"
                    :src="src"
                    class="cursor-pointer object-cover rounded-xl aspect-[1.48]"
                    loading="lazy"
                    alt=""
                    @click="openModal({ src: item[k + 4], index: k + 4 })"
                  />
                </template>
              </div>
              <button
                v-if="item.length > 4"
                class="w-full py-1.5 cursor-pointer text-primary-dark hover:bg-gray-300 rounded-md transition-colors flex items-center justify-center"
                @click="handleExpandGalleryMobile"
              >
                <iconify-icon
                  :class="{ '-scale-100': isExpandedMobile }"
                  icon="icon-park-solid:down-one"
                />
              </button>
            </div>
          </HeadlessTabPanel>
        </template>
      </HeadlessTabPanels>
    </HeadlessTabGroup>

    <HeadlessTransitionRoot
      :show="isOpen"
      as="template"
    >
      <HeadlessDialog
        as="div"
        class="relative z-[9999]"
        @close="closeModal"
      >
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/70" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto ">
          <div class="flex h-full items-center justify-center p-3 text-center">
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="relative lg:h-[90vh] max-w-[1100px] transform md:rounded-[50px] rounded-[30px] transition-all md:mx-15 max-h-3/4"
              >
                <BaseModalButton
                  class="absolute -top-3 -translate-y-full right-0"
                  @click="closeModal"
                >
                  <span class="sr-only">Закрыть модальное окно</span>
                  <iconify-icon
                    icon="iconamoon:close-light"
                    class="text-white text-4xl"
                    aria-hidden="true"
                  />
                </BaseModalButton>

                <NuxtImg 
                  class="rounded-xl size-full object-cover"
                  loading="lazy"
                  alt=""
                  :src="imageItemActive.src"
                />

                <BaseModalButton
                  class="absolute md:-left-3 md:-translate-x-full md:-translate-y-1/2 md:top-1/2 left-0 not-md:translate-y-full not-md:-bottom-3"
                  :disabled="imageItemActive.index === 0"
                  @click="prev"
                >
                  <span class="sr-only">Предыдущая фотография</span>
                  <iconify-icon
                    icon="ant-design:left-outlined"
                    class="text-white text-4xl"
                    aria-hidden="true"
                  />
                </BaseModalButton>

                <BaseModalButton
                  class="absolute md:-right-3 md:translate-x-full md:top-1/2 md:-translate-y-1/2 right-0 not-md:-bottom-3 not-md:translate-y-full"
                  :disabled="imageItemActive.index === tabs[currentTab].length - 1"
                  @click="next"
                >
                  <span class="sr-only">Следующая фотография</span>
                  <iconify-icon
                    icon="ant-design:right-outlined"
                    class="text-white text-4xl"
                    aria-hidden="true"
                  />
                </BaseModalButton>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </BaseSection>
</template>
