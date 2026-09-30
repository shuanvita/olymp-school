<script setup>
const items = [
    {
        title: '4 января',
        subtitle: 'Заезд и регистрация на сменах «Кампус» и «Профи»',
        descr: 'В первый день проходит открытие смены и тестирование участников',

    },
    {
        title: '5-9 <br class="max-md:hidden"/>января',
        subtitle: 'Учебные дни',
        descr: '2 пары утром и 1 вечером. На смене «Профи» факультативы вместо вечерней пары.  В учебные дни на всех сменах проходят консультации с преподавателем и сдача домашних заданий. На сменах «Кампус» и «Профи» предусмотрены спорт и вечерние мероприятия от вожатых и партнеров Олимпиадных школ',

    },
    {
        title: '10 января',
        subtitle: 'Олимпиадный день',
        descr: 'Олимпиада по предмету на выбор участника, разбор заданий и дискотека на сменах «Кампус» и «Профи»',

    },
    {
        title: '11 января',
        subtitle: 'Закрытие смены и отъезд',
        descr: '',

    }
];
const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}
const smen = 509;
</script>
<template>
    <BaseSection aria-labelledby="calendar-heading" type="primary">
        <BaseHeading id="calendar-heading" >
            Календарь
        </BaseHeading>
        <div class="relative">
            <img class="absolute -top-16 -right-12 max-w-[132px] max-md:max-w-[60px] max-md:-right-3 max-md:-top-3"
                src="https://it-edu.com/mipt-school/wp-content/uploads/2025/09/clock.png" alt="часы">
            <div class="flex flex-col rounded-3xl">
                <div :class="[index % 2 ? 'bg-[#827AE0]':'bg-primary', 'rounded-t-3xl px-6 py-8 pb-10 text-xl flex items-center gap-18 text-white', index==1 ? '-translate-y-5':'', index==2 ? '-translate-y-10':'', index==3 ? '-translate-y-15 rounded-b-3xl':'', 'max-md:flex-col max-md:gap-4']" v-for="(value, index) in items">
                    <span class="text-3xl max-md:text-xl max-md:text-center min-w-[180px] block font-bold uppercase" v-html="value.title"></span>
                    <div>
                        <h5 class="font-bold mb-1 block text-primary-paragraph-r" v-if="value.subtitle" v-html="value.subtitle"></h5>
                        <p class="text-primary-paragraph-r" v-html="value.descr"></p>
                    </div>
                </div>
            </div>
            <p class="-mt-4 block text-primary-paragraph-r">Остались вопросы?<br />Оставьте заявку, и мы вышлем программу обучения.</p>
            <button @click="openModal"
                class="w-full mt-6 inline-flex text-xl items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full cursor-pointer hover:bg-[#5045CF]/90 transition-colors">
                Запросить учебный план
            </button>

        </div>

    </BaseSection>
    <PageSmeniPopupZosh :is-open="isOpen" :smen="smen" :close-modal="closeModal" />
</template>
