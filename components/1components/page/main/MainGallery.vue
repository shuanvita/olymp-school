<script setup lang="ts">
const props = 
  defineProps<{
    info?: any
  }>()


const items: string | any[] = []
props.info.photomain25.nodes.forEach(item => {
  items.push(item.filePath);
});

const isOpen = ref(false)

const imageItemActive = ref({
  index: 0,
  src: '',
})

function openModal(item: { index: number, src: string }) {
  imageItemActive.value = item
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

function next() {
  if (imageItemActive.value.index < items.length - 1) {
    imageItemActive.value.src = items[imageItemActive.value.index + 1]
    imageItemActive.value.index++
  }
}

function prev() {
  if (imageItemActive.value.index > 0) {
    imageItemActive.value.src = items[imageItemActive.value.index - 1]
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
    class="not-md:px-1.5 relative"
  >
    <BaseHeading
      id="gallery-heading"
      class="not-md:px-3.5"
    >
      Фотоальбом
    </BaseHeading>

    <div class="grid grid-cols-100 md:gap-y-9 gap-y-3">
      <div
        v-for="(src, index) in items"
        :key="index"
        :class="[
          (Math.floor(index / 2) % 2 === 0)
            ? (index % 2
              ? 'col-span-38 justify-self-end md:pl-6 pl-2'
              : 'col-span-62')
            : (index % 2
              ? 'col-span-62 justify-self-end md:pl-6 pl-2'
              : 'col-span-38'),
        ]"
        class="size-full cursor-pointer"
        @click="openModal({ src, index })"
      >
        <NuxtImg 
          loading="lazy"
          alt=""
          :src="'https://it-edu.com'+src"
          :class="[
            (Math.floor(index / 2) % 2 === 0)
              ? (index % 2
                ? 'w-[391px] aspect-[0.92]'
                : 'w-[667px] aspect-[1.57]')
              : (index % 2
                ? 'w-[667px] aspect-[1.57]'
                : 'w-[391px] aspect-[0.92]'),
          ]"
          class="min-[450px]:rounded-base rounded-[7px] object-cover size-full"
        />
      </div>
    </div>

    <svg
      aria-hidden="true"
      class="absolute -z-10 inset-0 top-[62%] -translate-y-1/2 w-[100%] left-[0%]"
      viewBox="0 0 1729 901"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M570.735 56.2729C560.881 66.0059 550.942 75.9372 540.792 85.4377C492.45 130.064 436.533 161.03 378.15 169.107C318.923 177.315 259.32 161.892 199.854 155.858C140.389 149.825 77.2029 154.381 27.2391 197.729C16.0142 207.442 5.20814 219.872 1.2068 237.135C-2.64707 254.514 3.65576 276.716 16.6591 280.866C27.6393 284.216 38.1053 274.435 47.8736 266.756C88.6768 234.748 139.46 237.121 185.785 249.503C232.111 261.885 277.837 283.074 325.015 286.053C378.053 289.142 430.714 268.601 478.074 236.459C525.434 204.316 567.935 160.919 609.13 115.964C631.163 91.9653 658.236 65.8416 685.483 77.2404C713.932 89.0556 725.647 138.326 718.526 177.258C711.257 216.073 690.672 247.31 672.153 278.32C633.658 342.374 599.558 417.845 599.498 500.789C599.547 515.94 601.133 532.569 609.302 542.984C643.875 586.671 681.616 410.132 691.485 385.563C715.555 325.785 754.373 275.774 766.982 209.614C776.878 157.225 768.06 98.8372 743.753 55.552C730.074 31.2486 711.478 11.5549 689.624 4.14136C662.669 -5.17041 634.051 5.1533 609.622 22.7549C595.741 32.2312 583.207 44.0947 570.735 56.2729Z"
        fill="#B745CF"
      />
      <path
        d="M570.735 56.2729C560.881 66.0059 550.942 75.9372 540.792 85.4377C492.45 130.064 436.533 161.03 378.15 169.107C318.923 177.315 259.32 161.892 199.854 155.858C140.389 149.825 77.2029 154.381 27.2391 197.729C16.0142 207.442 5.20814 219.872 1.2068 237.135C-2.64707 254.514 3.65576 276.716 16.6591 280.866C27.6393 284.216 38.1053 274.435 47.8736 266.756C88.6768 234.748 139.46 237.121 185.785 249.503C232.111 261.885 277.837 283.074 325.015 286.053C378.053 289.142 430.714 268.601 478.074 236.459C525.434 204.316 567.935 160.919 609.13 115.964C631.163 91.9653 658.236 65.8416 685.483 77.2404C713.932 89.0556 725.647 138.326 718.526 177.258C711.257 216.073 690.672 247.31 672.153 278.32C633.658 342.374 599.558 417.845 599.498 500.789C599.547 515.94 601.133 532.569 609.302 542.984C643.875 586.671 681.616 410.132 691.485 385.563C715.555 325.785 754.373 275.774 766.982 209.614C776.878 157.225 768.06 98.8372 743.753 55.552C730.074 31.2486 711.478 11.5549 689.624 4.14136C662.669 -5.17041 634.051 5.1533 609.622 22.7549C595.741 32.2312 583.207 44.0947 570.735 56.2729Z"
        fill="#B745CF"
      />
      <path
        d="M1530.08 267.533C1518.28 273.378 1506.37 279.386 1494.3 284.889C1436.88 310.481 1373.39 319.689 1310.54 305.351C1246.78 290.82 1185.97 252.81 1123.97 224.125C1061.98 195.44 994.546 175.79 935.597 199.5C922.357 204.802 909.175 212.947 902.5 228.464C895.965 244.153 899.482 268.486 912.638 277.553C923.769 285.059 936.216 279.4 947.629 275.55C995.289 259.537 1048.63 281.289 1095.84 311.221C1143.05 341.153 1188.38 379.554 1237.82 400.526C1293.44 423.847 1352.01 423.69 1406.62 410.05C1461.23 396.409 1512.29 369.799 1562.2 341.15C1588.89 325.873 1621.21 310.423 1648.39 332.093C1676.78 354.633 1682.19 407.765 1669.15 443.488C1655.97 479.039 1629.78 502.018 1605.82 525.563C1556.06 574.103 1478.81 583.003 1497.51 717.48C1530.56 846.985 1706.26 900.972 1706.26 900.972C1706.26 900.972 1534.32 729.415 1558.5 660C1582.68 590.585 1692.77 555.672 1715.78 493.958C1733.66 446.008 1732.61 384.98 1713.05 332.946C1702.03 303.719 1685.17 277.164 1663.12 261.491C1635.95 241.994 1604.24 241.251 1575.93 249.296C1559.91 253.349 1544.98 260.273 1530.08 267.533Z"
        fill="#B745CF"
      />
      />
    </svg>

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
                class="relative lg:h-[80vh] max-w-[1100px] transform md:rounded-[50px] rounded-[30px] transition-all md:mx-15 max-h-3/4"
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
                  :src="'https://it-edu.com'+imageItemActive.src"
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
                  :disabled="imageItemActive.index === items.length - 1"
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
