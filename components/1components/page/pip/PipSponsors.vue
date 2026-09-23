<template>
  <div class="flex flex-wrap max-w-(--breakpoint-layout) mx-auto px-primary-padding-layout-r justify-between gap-10">
    <section aria-labelledby="sponsors-heading-1">
      <BaseHeading
        id="sponsors-heading-1"
        class="md:mb-8 mb-5"
      >
        ОРГАНИЗАТОР КОНКУРСА
      </BaseHeading>
      <PagePipSponsorsModalItem
        alt="ЦРИТО"
        content="Центр развития ИТ-образования МФТИ был создан в&nbsp;2010&nbsp;году. За&nbsp;14&nbsp;лет своего существования ЦРИТО прошёл путь от&nbsp;экспериментального проекта небольшой группы энтузиастов до&nbsp;получения ЦРИТО статуса Центра дополнительного образования МФТИ и&nbsp;Международного центра подготовки к&nbsp;соревнованиям по&nbsp;программированию и&nbsp;олимпиадам"
      >
        <template #picture>
          <NuxtImg 
            src="/Pip/crito.png"
            loading="lazy"
            alt="ЦРИТО"
            class="md:w-[285px] w-50 aspect-[2.23]"
          />
        </template>
        <template #modal-picture>
          <NuxtImg 
            src="/Pip/crito.png"
            loading="lazy"
            alt="ЦРИТО"
            class="md:w-[209px] w-50 aspect-[2.23]"
          />
        </template>
      </PagePipSponsorsModalItem>
    </section>
    <section aria-labelledby="sponsors-heading-2">
      <BaseHeading
        id="sponsors-heading-2"
        class="md:mb-12.5 mb-8"
      >
        ПРИ ПОДДЕРЖКЕ
      </BaseHeading>
      <PagePipSponsorsModalItem
        src="/Pip/sber.png"
        alt="СБЕР"
        content="Сбер предоставляет гранты на&nbsp;оплату обучения в&nbsp;рамках летних смен Олимпиадных школ МФТИ участникам конкурса, проводимого среди победителей и&nbsp;призёров Заключительного этапа Всероссийской олимпиады школьников по&nbsp;математике, физике, информатике и&nbsp;химии"
      >
        <template #picture>
          <NuxtImg 
            src="/Pip/sber.png"
            loading="lazy"
            alt="СБЕР"
            class="md:w-[346px] w-65 aspect-[3.76]"
          />
        </template>
        <template #modal-picture>
          <NuxtImg 
            src="/Pip/sber.png"
            loading="lazy"
            alt="СБЕР"
            class="md:w-[274px] w-50 aspect-[3.76]"
          />
        </template>
      </PagePipSponsorsModalItem>
    </section>
  </div>
</template>
