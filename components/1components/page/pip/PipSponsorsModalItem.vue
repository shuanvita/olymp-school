<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="cursor-pointer">
      <slot name="picture" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-[99999]" />
      <DialogContent class="data-[state=open]:animate-contentShow focus:outline-none fixed top-1/2 left-1/2 -translate-1/2 max-h-[85vh] w-[90vw] max-w-[1005px] z-[99999] sm:p-12.5 p-5">
        <div class="bg-white md:px-[73px] px-10 md:pt-10 pt-8 md:pb-[57px] pb-10 md:rounded-[50px] rounded-[30px] relative">
          <DialogTitle>
            <slot name="modal-picture" />
          </DialogTitle>
          <DialogDescription
            class="mt-[25px] text-primary-paragraph-r"
            v-html="content"
          />
          <DialogClose
            class="absolute -top-2 sm:right-0 right-5 translate-x-full -translate-y-7 bg-white rounded-full sm:size-12 size-9 grid place-items-center cursor-pointer"
            aria-label="Закрыть модальное окно"
          >
            <svg
              aria-hidden="true"
              class="sm:size-7 size-5"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 2.00049L24.9832 23.8577"
                stroke="#FF9900"
                stroke-width="3.23081"
                stroke-linecap="round"
              />
              <path
                d="M24 2.00049L1.85077 23.6895"
                stroke="#FF9900"
                stroke-width="3.23081"
                stroke-linecap="round"
              />
            </svg>
          </DialogClose>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
