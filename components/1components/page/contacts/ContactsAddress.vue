<template>
  <address class="not-italic px-primary-padding-layout-r grid min-[1100px]:grid-cols-[auto_auto] grid-cols-1 md:gap-y-15 gap-y-10 md:mt-31.5 mt-8 gap-x-[13.7%]">
    <section
      aria-labelledby="operation-mode-heading"
      class="md:space-y-8 space-y-3"
    >
      <BaseHeading id="operation-mode-heading">
        Режим работы
      </BaseHeading>

      <span class="text-nowrap text-primary-paragraph-r">10:00-18:00</span>
    </section>

    <section
      aria-labelledby="contact-us-heading"
      class="md:space-y-8 space-y-3"
    >
      <BaseHeading id="contact-us-heading">
        Связаться с&nbsp;нами
      </BaseHeading>

      <div class="flex flex-col gap-y-3 text-primary-paragraph-r">
        <NuxtLink
          class="hover:underline text-nowrap size-fit"
          to="mailto:it-education@phystech.edu"
        >
          it-education@phystech.edu
        </NuxtLink>
        
        <NuxtLink
          class="hover:underline text-nowrap size-fit"
          to="tel:+74954085618"
        >
          +7 (495) 408-56-18
        </NuxtLink>
        <NuxtLink
          class="hover:underline text-nowrap size-fit"
          to="tel:+79675550436"
        >
          +7 (967) 555-04-36
        </NuxtLink>
      </div>
    </section>

    <section
      aria-labelledby="follow-news-heading"
      class="md:space-y-11 space-y-3"
    >
      <BaseHeading id="follow-news-heading">
        Следите за&nbsp;новостями
      </BaseHeading>

      <div class="flex sm:flex-row flex-col gap-x-32.5">
        <NuxtLink
          href="https://vk.com/miptschool"
          class="text-[47px] flex flex-row sm:gap-x-3 gap-x-2 hover:underline items-center"
        >
          <iconify-icon
            aria-hidden="true"
            icon="ri:vk-fill"
            class="text-[#0077FF]"
          />
          <span class="text-primary-paragraph-r text-nowrap">Наше сообщество <br> Вконтакте</span>
        </NuxtLink>
        <NuxtLink
          href="https://t.me/miptschool"
          class="text-[43px] flex flex-row sm:gap-x-3 gap-x-2 hover:underline items-center"
        >
          <iconify-icon
            aria-hidden="true"
            icon="ic:baseline-telegram"
            class="text-[#2AABEE]"
          />
          <span class="text-primary-paragraph-r text-nowrap">Наш канал <br> в телеграме</span>
        </NuxtLink>
      </div>
    </section>

    <section
      aria-labelledby="address-heading"
      class="md:space-y-8 space-y-3"
    >
      <BaseHeading id="address-heading">
        Адрес
      </BaseHeading>

      <p class="text-primary-paragraph-r">
        141701, Россия, Московская&nbsp;область, г.&nbsp;Долгопрудный, Научный&nbsp;пер., д.&nbsp;4 корпус&nbsp;1 «Физтех.Цифра», ауд.&nbsp;3.30
      </p>
    </section>
  </address>
</template>
