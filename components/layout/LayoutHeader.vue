<script setup lang="ts">
import { ym_event } from '../../composables/metrika'
const props = defineProps(['items', 'type'])

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
let openPP = ref(false);

function closePopover() {
  openPP.value = false
}

</script>

<template>
  <div class="sticky top-0 left-0 bg-white z-[90] shad">
    <BaseSection aria-labelledby="header-heading" :aria-label="'Шапка сайта'"
      class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative mt-0!">
      <header
        class="max-w-(--breakpoint-layout) mx-auto sm:pt-7 pt-4 sm:pb-7 pb-2.5 flex flex-row justify-between items-center gap-x-10">
        <div class="flex flex-row items-center xl:justify-between xl:gap-x-20 sm:gap-x-4 gap-x-2 grow">
          <div class="flex flex-row items-center gap-x-20 justify-between w-full">
            <div class="flex items-center gap-4">
              <NuxtLink @click="ym_event('main_logo_btn')" to="/">
                <NuxtImg   src="/Logo/osh.svg" alt="Олимпиадные школы МФТИ" class="w-[139px] max-[768px]:w-[110px]" />
              </NuxtLink>
              <NuxtLink to="https://mipt.ru/" target="blank">
                <NuxtImg   src="/Logo/mipt.svg" alt="МФТИ" class="w-[85px] max-[768px]:w-[75px] aspect-[3.43]" />
              </NuxtLink>
              <div v-if="props.type == 'grants'">
                <NuxtImg   src="/Logo/sber.png" alt="Сбер" class="w-[104px] max-[768px]:w-[95px]" />
              </div>
            </div>

            <div class="transition-colors not-xl:hidden text-lg font-semibold">
              <ul role="list" class="flex flex-row gap-x-10 gap-y-2 flex-wrap text-[#000C1F] justify-center">
                <li v-for="({ text, href, list }, i) in items" :key="i" class="text-nowrap">
                  <HeadlessPopover v-if="list.enabled" v-slot="{ close }" class="relative" @mouseover="openPP = true"
                    @mouseleave="closePopover()">
                    <HeadlessPopoverButton @click="$nuxt.$router.replace({ path: '/programs/' })"
                      :class="[openPP ? 'text-primary-dark' : 'text-white']"
                      class="hover:text-primary-dark transition-colors cursor-pointer not-ui-focus-visible:outline-none ui-focus-visible:outline-offset-4">
                      {{ text }}
                    </HeadlessPopoverButton>

                    <Transition enter-active-class="transition duration-200 ease-out"
                      enter-from-class="translate-y-3 opacity-0" enter-to-class="translate-y-0 opacity-100"
                      leave-active-class="transition duration-150 ease-in" leave-from-class="translate-y-0 opacity-100"
                      leave-to-class="translate-y-3 opacity-0">
                      <HeadlessPopoverPanel v-show="openPP" static
                        class="absolute pt-3 bottom-0 translate-y-full  z-[9999]">
                        <ul role="list"
                          class="space-y-4 bg-white p-4 rounded-base shadow-[0_12px_32px_rgba(0,0,0,.1),_0_2px_6px_rgba(0,0,0,0.08)]">
                          <li v-for="(item, j) in list.content" :key="j">
                            <NuxtLink :to="item.href" class="hover:text-primary transition-colors" @click="close">
                              {{ item.text }}
                            </NuxtLink>
                          </li>
                        </ul>
                      </HeadlessPopoverPanel>
                    </Transition>
                  </HeadlessPopover>

                  <NuxtLink v-else
                    class="hover:text-primary-dark text-[#000C1F] transition-colors focus-visible:outline-offset-4"
                    :to="href">
                    {{ text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-row items-center justify-between max-w-[190px] w-full not-xl:hidden">
            <NuxtLink @click="ym_event('vhod_btn')" to="https://edu.mipt.ru/member/"
              class="not-xl:hidden text-base leading-5 font-bold py-2.5 px-4.5 border-2 border-primary rounded-[55px] transition-colors text-primary hover:bg-primary hover:text-white focus-visible:outline-offset-4">
              Личный кабинет
            </NuxtLink>


          </div>
        </div>

        <button class="xl:hidden cursor-pointer text-primary hover:text-primary-dark transition-colors"
          @click="openModal">
          <span class="sr-only">Открыть меню</span>
          <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.15918 1.80078H27" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M2.15918 7.80078H27" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M2.15918 13.8008H27" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            <path d="M2.15918 19.8008H27" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          </svg>
        </button>

        <HeadlessTransitionRoot :show="isOpen" as="template">
          <HeadlessDialog as="div" class="relative z-[9999]" @close="closeModal">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
              enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-black/50" />
            </HeadlessTransitionChild>

            <HeadlessTransitionChild enter="duration-300 sa ease-out" enter-from="opacity-0" enter-to="opacity-100"
              leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed right-0 bg-white inset-y-0 sm:px-20 px-5 sm:pt-8 pt-4 space-y-6 shadow-2xl">
                <div class="flex flex-row items-center justify-between gap-x-8">
                  <div class="flex flex-row items-center gap-x-4">
                    <NuxtLink to="/">
                      <NuxtImg   src="/Logo/osh.svg" alt="Олимпиадные школы МФТИ" class="w-[151px]" />
                    </NuxtLink>
                    <NuxtLink to="https://mipt.ru/" target="blank">
                      <NuxtImg   src="/Logo/mipt.svg" alt="МФТИ" class="w-30 aspect-[3.43]" />
                    </NuxtLink>
                  </div>

                  <button
                    class="cursor-pointer text-primary hover:text-primary-dark transition-colors rounded-md grid place-items-center"
                    @click="closeModal">
                    <span class="sr-only">Закрыть меню</span>
                    <iconify-icon icon="iconamoon:close-light" class="text-4xl" aria-hidden="true" />
                  </button>
                </div>

                <ul role="list" class="text-primary-paragraph space-y-[21px]">
                  <li v-for="({ text, href, list }, i) in items" :key="i">
                    <NuxtLink class="hover:text-primary" :to="href" @click="closeModal">
                      {{ text }}
                    </NuxtLink>
                    <ul v-if="list.enabled" role="list" class="text-primary-paragraph-r space-y-3 mt-[21px] pl-4">
                      <li v-for="(item, j) in list.content" :key="j">
                        <NuxtLink class="hover:text-primary" :to="item.href" @click="closeModal">
                          {{ item.text }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>

                <NuxtLink @click="ym_event('vhod_btn')" to="https://edu.mipt.ru/member/"
                  class="mt-3 text-base leading-5 font-bold py-[5px] px-4.5 border-2 border-primary rounded-[55px] text-primary hover:bg-primary hover:text-white block size-fit transition-colors focus-visible:outline-offset-4">
                  Личный кабинет
                </NuxtLink>
              </div>
            </HeadlessTransitionChild>
          </HeadlessDialog>
        </HeadlessTransitionRoot>
      </header>
    </BaseSection>
  </div>
</template>
<style>
.shad {
  box-shadow: 0px 1px 9px 0px rgba(183, 149, 203, 0.286)
}
</style>