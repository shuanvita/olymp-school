<template>
    <BaseSection :aria-labelledby="'price-heading'"  :aria-label="'price'"
    class="max-w-(--breakpoint-layout) mx-auto">
    <!-- <div class="space-y-6 mt-15 overflow-hidden max-w-(--breakpoint-layout) mx-auto"> -->
        <BaseHeading id="price-heading" class="items-start flex gap-4 max-[700px]:flex-col max-[700px]:gap-1">
            Стоимость <span class="text-xl font-nunito-sans text-black lowercase font-medium  max-[700px]:text-base">*При оплате до 30 сентября 2026</span>
        </BaseHeading>
        <div class="grid grid-cols-2 bg-primary-light rounded-base max-[700px]:grid-cols-1">
            <div class="bg-primary rounded-base flex flex-col items-center space-y-6  px-12 py-13 max-xmd:px-6 max-xmd:py-6">
                <div class="text-white font-bold text-5xl max-xmd:text-3xl relative pt-9">
                    <s
                        class="absolute top-0 right-0 text-[#E69AFF] text-4xl max-xmd:text-3xl -translate-y-1/4 translate-x-1/2 max-xmd:translate-x-1/3 max-xmd:-translate-y-1/6">138 000 ₽</s>
                    128 000 ₽
                </div>
                <ul class="flex flex-wrap justify-center gap-x-1.5 gap-y-3  max-xmd:gap-y-1.5 text-center">
                    <li class="px-4 py-2.5 rounded-lg bg-white text-[13px] text-black">Образовательная программа</li>
                    <li class="px-4 py-2.5 rounded-lg bg-[#FFF5CF] text-[13px] text-black">5-разовое питание</li>
                    <li class="px-4 py-2.5 rounded-lg bg-[#FFF5CF] text-[13px] text-black">Проживание в общежитии
                        на кампусе МФТИ</li>
                    <li class="px-4 py-2.5 rounded-lg bg-white text-[13px] text-black">Мерч</li>
                    <li class="px-4 py-2.5 rounded-lg bg-white text-[13px] text-black">Кураторское сопровождение</li>
                    <li class="px-4 py-2.5 rounded-lg bg-[#FFF5CF] text-[13px] text-black">Вечернее мероприятие </li>
                    <li class="px-4 py-2.5 rounded-lg bg-white text-[13px] text-black">Сертификат</li>
                </ul>
            </div>
            <div class="flex flex-col justify-center px-8 py-8 max-[700px]:items-center">
                <p class="flex max-w-[440px] text-xl leading-7 max-xmd:text-base max-xmd:leading-6 max-[700px]:text-center">Мы ценим каждого участника и хотим сделать обучение
                    доступным. У нас действуют различные скидки, которые можно комбинировать.</p>
            </div>
        </div>
    <!-- </div> -->
    <div class="lg:flex lg:justify-center">
        <div class="space-y-6 mt-5 max-w-(--breakpoint-layout) mx-auto">
            <ClientOnly>
                <Swiper :pagination="{
                    type: 'progressbar',
                }" :slides-per-view="'auto'" :autoplay="{
                    delay: 4500,
                    disableOnInteraction: true,
                }" :spaceBetween="24" :modules="modules" :lazy="true" class="mySwiperPrice pb-5!">
                    <SwiperSlide class="max-w-[200px]" v-for="item in storiesData">
                        <div class="flex items-center gap-3 p-5 px-4 flex-col rounded-2xl bg-primary-light/20">
                            <div class="flex items-center justify-center h-7.5"><img :src="withBase(item.icon)" alt=""></div>
                            <h3 class="text-base font-bold">{{ item.name }}</h3>
                            <span class="text-xl font-bold">{{ item.procent }}</span>
                            <p class="text-center text-sm" v-html="item.descr"></p>
                            <a v-if="item.link" :href="item.link"><img src="/Price/arrow.svg" alt=""></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </ClientOnly>
        </div>
    </div>

      <div class="flex justify-center">
        <BaseButton v-if="props.type" as="a" href="#direction" class="max-w-[260px] flex justify-center text-center">Выбрать
          направление</BaseButton>
        <BaseButton v-if="!props.type" as="a" @click="openFormReg" class="max-w-[260px] flex justify-center text-center">Зарегистрироваться</BaseButton>
      </div>

    </BaseSection>
</template>
<script setup>
import { Swiper, SwiperSlide, } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}

const props = defineProps(['type']);

const storiesData = ref([
    //{ name: 'грант Сбера', procent: 'до 100%', descr: 'Учащиеся 9–10 классов, которые стали победителями или призёрами олимпиад', icon: '/Price/1.svg' },
    { name: 'я олимпиадник', procent: 'от 10 до 30%', descr: 'Победитель или призер профильной олимпиады', icon: '/Price/2.svg' },
    { name: 'я вернулся', procent: 'от 5 до 20 %', descr: 'Участники Олимпиадных школ, которые приезжают в третий и более раз', icon: '/Price/3.svg' },
    { name: 'нас много', procent: 'от 10 до 30 %', descr: 'Дети из многодетных семей', icon: '/Price/4.svg' },
    { name: 'учусь в ЗФТШ', procent: '10%', descr: 'Учащиеся в ЗФТШ МФТИ', icon: '/Price/5.svg' },
    //{ name: 'вместе веселее', procent: 'до 10%', descr: 'Скидка для группы участников из одного региона/школы', icon: '/Price/6.svg' }
]);
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const modules = [Pagination, Navigation, Autoplay];

</script>
<style scoped>
/* Перемещаем прогресс-бар вниз */
:deep(.swiper-pagination-progressbar) {
    top: auto !important;
    bottom: 0px !important;
    height: 6px;
    /* Можно настроить высоту */
    background: #EDD9FF;
    /* Цвет подложки */
}

/* Цвет самой заполняющей полоски */
:deep(.swiper-pagination-progressbar-fill) {
    border-radius: 10px;
    background: #B745CF !important;
    /* Ваш цвет (например, зеленый) */
}

.slider-wrap {
    overflow: visible;
    /* важно — иначе обрежет */
    padding: 0 48px;
    /* отступы по бокам, чтобы боковые слайды были видны */
}

/* Иногда нужно явно переопределить дефолт Swiper */
.mySwiper,
.mySwiper .swiper-wrapper {
    overflow: visible !important;
}
</style>
<style>
.mySwiperPrice .swiper-wrapper {
    overflow: visible !important;
    display: flex;
    align-items: stretch;
}
.mySwiperPrice .swiper-wrapper .swiper-slide{
    display: flex;
    height: auto;
}</style>