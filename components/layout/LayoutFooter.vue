<script setup>
defineProps(['items'])
import { ym_event } from '../../composables/metrika'

</script>

<template>
  <footer class="bg-primary-dark">
    <BaseSection aria-labelledby="footer-heading" :aria-label="'Подвал'"
      class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative mt-0!">
      <div
        class="sm:pb-4 pb-8.5 sm:pt-6.5 pt-9 mx-auto  text-white md:text-[16px] md:leading-5.5 not-md:text-primary-paragraph-md sm:space-y-11 space-y-8  transition-colors">
        <div class="">
          <div class="flex xmd:flex-row flex-col justify-between gap-11">
            <div class="flex sm:flex-row flex-col gap-x-13.5 gap-y-7.5 max-[660px]:justify-center">
              <div class="flex flex-col max-xmd:flex-row max-xmd:items-center gap-y-8 gap-x-3 max-[660px]:justify-center not-sm:items-center">
                <NuxtLink to="https://mipt.ru/" target="blank">
                  <NuxtImg   src="/Logo/mipt.svg" loading="lazy" alt="МФТИ"
                    class="w-[75px] aspect-[3.38] brightness-0 invert-100" />
                </NuxtLink>
                <NuxtLink to="/">
                  <NuxtImg   src="/Logo/osh.svg" loading="lazy" alt="Олимпиадные школы МФТИ"
                    class="w-[129px] aspect-[3.18] brightness-0 invert-100" />
                </NuxtLink>
                <NuxtLink to="https://edu.mipt.ru/" target="blank">
                  <NuxtImg   src="/Logo/crito.svg" loading="lazy" alt="ЦРИТО"
                    class="w-[80px] aspect-[2.24] brightness-0 invert-100" />
                </NuxtLink>


              </div>
              <ul role="list" class="max-xmd:hidden tracking-[0.02em] sm:pt-1.5 space-y-3 not-sm:pl-2">
                <li v-for="({ text, href, list }, i) in items" :key="i">
                  <NuxtLink class="hover:underline" :to="href">
                    {{ text }}
                  </NuxtLink>
                  <ul v-if="list.enabled" role="list" class="space-y-3 mt-3 pl-4">
                    <li v-for="(item, j) in list.content" :key="j">
                      <NuxtLink class="hover:underline" :to="item.href">
                        {{ item.text }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <address
              class="not-italic sm:text-right text-left xmd:max-w-[553px] w-full flex max-[660px]:flex-col max-[660px]:items-center justify-between gap-y-5 not-sm:pl-2 max-xmd:pl-0 xmd:pt-2">
              
              <ul role="list" class="xmd:hidden text-left max-[660px]:text-center tracking-[0.02em] sm:pt-1.5 space-y-3 not-sm:pl-2">
                <li v-for="({ text, href, list }, i) in items" :key="i">
                  <NuxtLink class="hover:underline" :to="href">
                    {{ text }}
                  </NuxtLink>
                  <ul v-if="list.enabled" role="list" class="space-y-3 mt-3 pl-4">
                    <li v-for="(item, j) in list.content" :key="j">
                      <NuxtLink class="hover:underline" :to="item.href">
                        {{ item.text }}
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="flex flex-col items-start text-left gap-y-5 max-[660px]:items-center max-[660px]:text-center">

                <div class="flex flex-col gap-y-5">
                  <NuxtLink @copy="ym_event('copy_email')" @click="ym_event('click_email')"
                    class="tracking-[0.02em] text-xl max-xmd:text-base hover:underline" to="mailto:it-education@phystech.edu">
                    it-education@phystech.edu
                  </NuxtLink>

                  <div class="flex flex-col">
                    <NuxtLink @copy="ym_event('copy_phone')" @click="ym_event('click_phone')"
                      class="text-xl max-xmd:text-base hover:underline" to="tel:+79675550436">
                      +7 (967) 555-04-36
                    </NuxtLink>
                    <!-- <NuxtLink @copy="ym_event('copy_phone')" @click="ym_event('click_phone')"
                      class="text-xl max-xmd:text-base hover:underline" to="tel:+74954085618">
                      +7 (495) 408-56-18
                    </NuxtLink> -->
                    <span class="tracking-[0.02em] text-[12px]">Режим работы (пн-пт): 10:00-18:00</span>
                  </div>
                </div>
                <p class="text-[12px] tracking-[0.02em] not-sm:mt-2">
                  141701, Россия, Московская область, <br>
                  г. Долгопрудный, Научный пер., д.&nbsp;4&nbsp;корпус&nbsp;1 <br>
                  «Физтех.Цифра», ауд. 3.30
                </p>
              </div>

              <div class="max-w-[205px] max-xmd:max-w-[220px] flex flex-col gap-y-5.5">
                <div
                  class="text-primary-paragraph-md flex flex-col sm:gap-y-5.5 gap-y-4.5 not-sm:text-right max-[660px]:text-center not-sm:mt-3">
                  <NuxtLink class=" underline hover:no-underline"
                    href="https://mipt.ru/docs/download.php?code=politika_obrabotki_personalnykh_dannykh"
                    target="_blank">
                    Политика обработки персональных данных МФТИ
                  </NuxtLink>
                  <NuxtLink class=" underline hover:no-underline" href="https://new.mipt.ru/sveden/common"
                    target="_blank">
                    Сведения об образовательной организации
                  </NuxtLink>
                  <NuxtLink class=" underline hover:no-underline"
                    href="https://new.mipt.ru/sveden/files/Licen_11.04.19.pdf" target="_blank">
                    Лицензия на осуществление образовательной&nbsp;деятельности
                  </NuxtLink>
                </div>
                <div
                  class="sm:mt-1.5 mt-4 flex sm:flex-row flex-col gap-x-5 gap-y-3.5 items-center sm:justify-end justify-center">
                  <div class="flex flex-row gap-x-5">
                    <NuxtLink @click="ym_event('click_vk')" href="https://vk.com/miptschool"
                      class="hover:scale-120 transition-transform text-4xl">
                      <span class="sr-only">вконтакте</span>
                      <iconify-icon aria-hidden="true" icon="ri:vk-fill" />
                    </NuxtLink>
                    <NuxtLink @click="ym_event('click_tg')" href="https://t.me/miptschool"
                      class="hover:scale-120 transition-transform text-4xl">
                      <span class="sr-only">телеграм</span>
                      <iconify-icon aria-hidden="true" icon="ic:baseline-telegram" />
                    </NuxtLink>
                    <NuxtLink @click="ym_event('click_max')" href="https://max.ru/miptschool"
                      class="hover:scale-120 transition-transform text-4xl p-1">
                      <span class="sr-only">Max</span>
                      <img class="max-w-[29px]" src="/img/max_white.svg" alt="Max">
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </address>
          </div>
        </div>

        <p class="sm:text-left text-center font-montserrat text-primary-paragraph-md">
          Copyright © 2026 МФТИ
        </p>
      </div>
      </BaseSection>
  </footer>
</template>
