<script setup>
const items = [
    {
        title: 'Кампус',
        priceText: '',
        priceCurrent: '116 000₽',
        priceFull: '',
        sale: ['Я олимпиадник', 'Нас много', 'Я вернулся', 'ЗФТШ'],

    },
    {
        title: 'Профи',
        priceText: '',
        priceCurrent: '105 000₽',
        priceFull: '',
        sale: ['Я олимпиадник', 'Нас много'],
    }
];

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

</script>
<template>
    <BaseSection aria-labelledby="calendar-heading" type="primary">
        <BaseHeading id="calendar-heading">
            СТОИМОСТЬ
        </BaseHeading>
        <div class="grid grid-cols-3 items-center max-md:grid-cols-1 gap-x-6 gap-y-14 max-md:gap-y-6 pt-6">
            <div v-for="(value, index) in items"
                class="flex flex-col px-4 pt-6 pb-4 border-2 rounded-2xl border-primary">
                <div class="font-bold text-3xl max-md:text-xl mb-6 max-md:mb-4">
                    <span>{{ value.title }}</span>
                </div>
                <p class="text-primary-paragraph-r mb-6  max-md:mb-4" v-if="value.priceText" v-html="value.priceText"></p>
                <div :class="['flex items-center text-3xl mb-14  max-md:mb-4 gap-4']">
                    <span class="font-bold" v-html="value.priceCurrent"></span>
                    <s class="text-[#C0C0C0]" v-html="value.priceFull"></s>
                </div>
                <div>
                    <p class="text-primary-paragraph-r mb-6   max-md:mb-4">Дополнительные скидки:</p>
                    <div :class="[index == 1 ? 'flex-col items-start' : '', 'gap-2 flex flex-wrap mb-14  max-md:mb-6']">
                        <span class="px-2.5 py-1.5 rounded-xl text-primary-paragraph-r bg-[#C2C4F1]" v-for="value_sale in value.sale">
                            {{ value_sale }}
                        </span>
                    </div>
                </div>
                <span
                    class="w-full py-1.5 text-center text-primary-paragraph-r text-white rounded-2xl bg-[#444] mb-4">Есть
                    налоговый вычет 13%</span>
                <button @click="openModal"
                    class="w-full inline-flex items-center justify-center text-primary-paragraph-r px-8 py-4 bg-[#5045CF] text-white font-medium rounded-full cursor-pointer hover:bg-[#5045CF]/90 transition-colors">
                    Узнать больше
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-9 max-md:gap-3">
            <p class="text-primary-paragraph-r mb-6">Скидки различных категории суммируются. Максимальный размер скидки 30%
                от базовых цен. Запрос на скидку
                можно оформить в личном кабинете участника.</p>

            <p class="flex items-center gap-4 max-md:gap-3">
            <div class="max-w-[37px] max-h-[42px] max-md:max-w-[29px] w-full">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 30 45"
                    fill="none">
                    <path d="M23 13.665H12V16.665H7" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M20 27.665V31.465C20 32.165 20.6 32.665 21.2 32.665H24.2C26.9 32.665 29 34.865 29 37.465V43.665"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M7 36.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23 36.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 33.665V43.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 43.665V37.465C1 34.765 3.2 32.665 5.8 32.665H7.9C9 32.665 10 31.765 10 30.565V27.665"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M23 13.665V21.265C23 25.665 19.4 29.265 15 29.265C10.6 29.265 7 25.665 7 21.265V16.665"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M13 24.665H16" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.8 31.3652C18.5 32.7652 16.7 33.6652 14.6 33.6652C12.7 33.6652 11 32.8652 9.7 31.6652"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M3 32.665V13.165C3 6.76504 8.1 1.66504 14.5 1.66504C20.9 1.66504 26 6.76504 26 13.165V32.665"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <a class="text-primary-paragraph-r underline" href="https://disk.yandex.ru/i/lkgxvPpjS4w8bA"
                target="_blank">Про материнский капитал</a>
            </p>
            <p class="flex items-center gap-4 max-md:gap-3">
            <div class="max-w-[37px]  max-h-[36px]  max-md:max-w-[29px] w-full">
                <svg class="w-full text-gray-600" xmlns="http://www.w3.org/2000/svg" width="40" height="39"
                    viewBox="0 0 40 39" fill="none">
                    <path
                        d="M9.79999 8.66504C4.29999 9.96504 1 14.765 1 20.665C1 25.365 2.9 29.565 6 31.665C6.6 32.065 7 32.765 7 33.565V37.765H12V34.765C12 34.165 12.5 33.765 13 33.765H23C23.6 33.765 24 34.265 24 34.765V37.765H29V33.265C29 32.665 29.3 32.165 29.7 31.765C31.4 30.465 33.2 29.1651 34.2 26.8651C34.5 26.1651 35.2 25.765 35.9 25.765H36C36.9 25.765 37.7 25.165 38 24.265L39 18.765C39 17.765 38.5 16.765 37.3 16.765H36.1C35.4 16.765 34.7 16.365 34.4 15.765C33.7 14.165 32.5 13.365 31.1 12.065V6.66504C31.1 6.06504 30.4 5.76504 30 6.16504L27.4 8.76505H26"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M7.89999 13.665C6.19999 15.365 5.1 17.7651 5 20.3651" stroke="#444444" stroke-width="1.5"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M17.5 12.665C20.5376 12.665 23 10.2026 23 7.16504C23 4.12747 20.5376 1.66504 17.5 1.66504C14.4624 1.66504 12 4.12747 12 7.16504C12 10.2026 14.4624 12.665 17.5 12.665Z"
                        stroke="#444444" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M31 15.665V17.665" stroke="#444444" stroke-width="1.5" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <a class="text-primary-paragraph-r underline" href="https://disk.yandex.ru/i/8xkLlN8ZDPs9qA"
                target="_blank">Про налоговый вычет</a>
            </p>
        </div>

    </BaseSection>
    <PageSmeniPopupZoshPrice :is-open="isOpen" :smen="smen" :close-modal="closeModal" />
</template>
