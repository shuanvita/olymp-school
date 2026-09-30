<script setup lang="ts">
</script>
<template>
  <BaseSection :aria-labelledby="'faq-heading'" :aria-label="'FAQ'"
               class="overflow-hidden max-w-(--breakpoint-layout) mx-auto">
    <!-- <BaseSection aria-labelledby="datesmeni-heading" class=""> -->
    <div class="space-y-6 overflow-hidden max-w-(--breakpoint-layout) mx-auto">
      <BaseHeading id="date-heading">
        Даты замних смен
      </BaseHeading>

      <div class="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-primary-light font-inter">
        <div class="flex flex-col items-center justify-center shrink-0 rounded-2xl w-full md:w-[471px] py-10 px-6 bg-primary text-white">
          <div class="font-sans text-[32px] lg:text-[48px] font-semibold leading-none mb-3">
            4-12 января
          </div>
          <span class="rounded-lg bg-white px-5 py-2 text-[13px] font-medium text-[#000C1F]">
            очно, кампус МФТИ
          </span>
        </div>
        <div class="flex-1 py-8 px-6 sm:pl-9 sm:pr-6 space-y-5 text-lg lg:text-xl/[1.4]">
          <h3 class="text-primary font-bold">
            Пропуск школьных занятий
          </h3>
          <p class="text-[#000C1F]">
            Не переживайте из-за пропуска первых учебных дней в школе. Мы поможем подтвердить ваше участие в смене.
          </p>
          <p class="text-[#000C1F]">
            Все участники зимней смены пройдут обучение по дополнительной общеобразовательной программе. По завершении программы в личном кабинете участника будет доступен сертификат о прохождении обучения.
            При необходимости мы можем предоставить справку об участии в программе.

          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>