<script setup lang="ts">
const items = [
  {
    title: 'Кто может принять участие?',
    content: 'В&nbsp;конкурсе могут принять участие школьники <br>9–10&nbsp;классов, которые стали победителями или призёрами Заключительного этапа Всероссийской олимпиады школьников по математике, физике, информатике, трудам (технологии) по профилям «информационная&nbsp;безопасность» и «робототехника» и химии в 2023/2024 или 2024/2025 учебном году.<br><br>Также принять участие в конкурсе смогут:<br>- ПиПы Московской олимпиады школьников (математика, физика, информатика)<br>- Победители олимпиады “Технокубок”<br>- Победители Ночной лиги 2024&nbsp;года<br>- Победители Турниров Олимпиадных школ МФТИ 2024&nbsp;года <br>- ПиПы олимпиад им.&nbsp;Леонарда&nbsp;Эйлера, М.&nbsp;Келдыша, Дж.&nbsp;Кл.&nbsp;Максвелла2023/2024&nbsp;годов'
  },
  {
    title: 'Как принять участие?',
    content: 'Для участия в&nbsp;конкурсе необходимо заполнить форму на&nbsp;сайте, прикрепить к&nbsp;ней скан документа, подтверждающего призовое место, и&nbsp;портретное фото, а&nbsp;также записать небольшой видео-рассказ о&nbsp;себе (не&nbsp;дольше 2,5&nbsp;минут), рассказать свою историю успеха в&nbsp;олимпиадах и&nbsp;дать советы будущим победителям и&nbsp;призёрам Всероссийской олимпиады школьников.',
  },
  {
    title: 'Какие призы получат победители конкурса?',
    content: '70&nbsp;победителей получат право на&nbsp;бесплатное участие в&nbsp;одной из&nbsp;очных летних смен Олимпиадных школ МФТИ. Победители будут выбраны путём распределения мест среди представленных конкурсных работ Конкурсной комиссией.',
  },
  {
    title: 'В&nbsp;какие сроки проходит конкурс?',
    content: 'Направить заявку на&nbsp;участие в&nbsp;конкурсе необходимо не&nbsp;позднее 15&nbsp;мая 2025&nbsp;года, результаты будут объявлены не&nbsp;позднее 20&nbsp;мая 2025&nbsp;года.',
  },
]
</script>

<template>
  <section aria-labelledby="terms-heading-1" class=" relative">
    <div class="max-w-(--breakpoint-layout) mx-auto xl:pl-[164px] xl:pr-[73px] lg:px-10 px-5">
      <BaseHeading id="terms-heading-1" class="md:mb-[34px] mb-7">
        УСЛОВИЯ КОНКУРСА
      </BaseHeading>

      <div class="relative z-20 flex min-[950px]:flex-row flex-col-reverse gap-10 justify-between">
        <div class="w-full min-[950px]:max-w-[655px]">
          <AccordionRoot type="multiple" class="md:space-y-10 space-y-7">
            <AccordionItem v-for="(item, i) in items" :key="i" :value="`pip-terms-item-${i}`">
              <AccordionHeader>
                <AccordionTrigger class="w-full text-left group cursor-pointer">
                  <div class="flex flex-row justify-between gap-x-5">
                    <span class="text-primary-heading-r md:max-w-[calc(100%-94px)] max-w-[calc(100%-50px)]"
                      v-html="item.title" />
                    <svg
                      class="self-end group-data-[state=open]:rotate-180 transition-transform duration-300 md:w-[39px] w-[30px] mb-3.5"
                      aria-hidden="true" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M37 2L19.8431 23L2 2" stroke="black" stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="border-t mt-[11px] md:max-w-[calc(100%-94px)] max-w-[calc(100%-50px)]" />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent
                class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden md:max-w-[calc(100%-94px)] max-w-[calc(100%-50px)]">
                <p class="text-primary-paragraph-r mt-[13px]" v-html="item.content" />
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
          <NuxtLink target="_blank" href="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/положение_о_проведении_конкурса_за_счет_средств_ПАО_Сбербанк.pdf" type="file"
            class="text-primary-paragraph-r underline mt-6 block decoration-1 underline-offset-2">
            Положение о проведении конкурса «Олимпийские горизонты»
          </NuxtLink>
        </div>

        <div
          class="bg-primary min-[950px]:max-w-[472px] rounded-[20px] text-white md:mt-2 sm:px-8 px-6 min-[950px]:sm:py-[204px] sm:py-15 py-10 h-max relative">
          <h3 class="text-[clamp(40px,(100vw-400px)/(1440-400)*(180-40)+40px,180px)] font-bold leading-none">
            70
          </h3>
          <p class="text-[clamp(24px,(100vw-400px)/(1440-400)*(38-24)+24px,38px)] mt-1 leading-[1.1] font-medium">
            победителей конкурса получат право на&nbsp;бесплатное участие в&nbsp;одной из&nbsp;очных летних смен
            Олимпиадных школ МФТИ
          </p>

          <svg class="absolute top-0 right-0 pointer-events-none not-md:hidden" aria-hidden="true" width="172"
            height="155" viewBox="0 0 172 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M105.284 148.848C138.596 157.193 134.481 158.291 175.843 135.924L175.843 99.2143C119.274 152.358 59.6115 89.3338 35.9633 56.5522C34.3266 54.2676 32.745 52.2724 31.2704 50.4123C25.3873 42.9912 21.2087 37.7203 22.0456 24.8036L22.0574 24.6295C23.2549 6.9763 23.8498 0.52653 36.1879 -18.3547L11.8808 -18.3547C-16.5891 49.0899 14.5956 77.9055 51.8785 111.17C56.4408 115.24 61.0943 119.392 65.7411 123.708C76.9225 134.011 88.4559 144.612 105.284 148.848Z"
              fill="white" />
          </svg>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="pointer-events-none">
      <svg class="not-xl:hidden absolute left-0 top-100" width="126" height="1189" viewBox="0 0 126 1189" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-284.98 1186.48C-285.225 1186.18 -285.47 1185.87 -285.715 1185.57C-290.752 1178.29 -282.567 1165.6 -275.557 1156.01C-233.911 1098.73 -212.234 1032.63 -207.11 971.597C-201.986 910.562 -212.234 853.938 -228.148 801.292C-237.665 769.773 -249.275 739.004 -251.964 704.215C-254.607 669.658 -248.463 632.326 -249.881 597.351C-251.777 552.152 -266.35 510.832 -258.099 463.135C-252.911 433.426 -238.088 401.462 -213.596 377.597C-142.712 308.507 -33.7582 337.422 37.0098 268.218C73.9599 232.066 86.249 182.098 95.9185 136.925C99.2418 121.257 102.632 104.967 98.6772 91.689C94.2845 77.1031 81.8128 68.493 69.5193 60.809C40.4708 42.6043 5.38015 25.9441 -35.1841 40.9004C-82.4398 58.3865 -120.263 113.248 -167.53 127.284C-188.514 133.539 -208.182 130.65 -226.951 127.584C-232.626 126.677 -238.401 125.733 -243.98 124.359C-261.057 120.398 -250.134 91.9043 -231.265 91.1294C-206.302 90.0494 -181.516 91.9204 -155.793 83.6491C-107.153 68.0286 -64.0141 19.4723 -15.3921 5.20918C37.9878 -10.4892 77.0219 19.8762 103.927 51.1606C141.029 94.2516 124.711 157.19 103.379 221.687C97.7662 238.536 91.9713 255.893 81.2659 271.471C60.0665 302.272 24.1087 320.333 -8.76986 330.177C-51.4352 342.936 -93.9867 346.116 -136.477 363.175C-178.967 380.234 -224.361 417.563 -233.734 460.403C-243.715 505.894 -210.103 536.664 -210.39 580.211C-210.518 597.467 -215.919 615.9 -219.268 633.855C-244.506 767.654 -156.916 866.223 -173.198 998.599C-180.29 1056.19 -207.657 1117.43 -249.501 1169.32C-259.29 1181.43 -277.638 1194.6 -284.98 1186.48Z"
          fill="#FF9900" />
      </svg>
    </div>
  </section>
</template>
