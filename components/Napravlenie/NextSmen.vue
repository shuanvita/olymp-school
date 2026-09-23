<template>
    <BaseSection aria-labelledby="nextsmen-heading" class="mt-10!">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <ClientOnly>
                <Swiper :autoHeight="true" :autoplay="{
                    delay: 4500,
                    disableOnInteraction: true,
                }" :slidesPerView="1" :navigation="{
                    enabled: true,
                    prevEl: '.swiper-navigation-nextsmen-prev',
                    nextEl: '.swiper-navigation-nextsmen-next',
                }" :pagination="{
                    clickable: true,
                    enabled: true,
                    el: '.swiper-pagination-custom-nextsmen',
                }" :spaceBetween="24" :modules="modules" :lazy="true" class="mySwiperNextSmen">
                    <SwiperSlide v-if="props.type == 'inf'">
                        <div class="flex flex-col px-10 py-10 max-[800px]:px-8 max-[800px]:py-8 items-start relativerounded-base overflow-hidden">
                            <img class="w-full h-full absolute top-0 left-0 -z-10" src="/NextSmen/bg_new.png" alt="">
                            <BaseHeading class="text-white">
                                Пробуй новые направления с нами
                            </BaseHeading>
                            <p class="text-white font-semibold max-w-[412px] mb-10">Научись создавать реальные сервисы и работать с инструментами, которые используют в индустрии прямо сейчас</p>
                            <div class="grid grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:w-full gap-10 max-[800px]:gap-6">
                                <div class="bg-white rounded-4xl text-[#FF9900] px-12 py-8 max-[800px]:px-6 max-[800px]:py-6">
                                    <h3 class="text-2xl leading-7 font-semibold max-w-[280px] font-nunito-sans max-[800px]:text-xl max-[800px]:leading-6">
                                        Промышленная разработка
                                    </h3>
                                    <p class="text-base mt-3">смена август 1.0, 9-10 класс</p>
                                </div>
                                <div class="bg-white rounded-4xl text-[#FF9900] px-12 py-8 max-[800px]:px-6 max-[800px]:py-6">
                                    <h3 class="text-2xl leading-7 font-semibold max-w-[280px] font-nunito-sans max-[800px]:text-xl max-[800px]:leading-6">
                                        Язык программирования Go
                                    </h3>
                                    <p class="text-base mt-3">смена август 2.0, 9-10 класс</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div class="grid grid-cols-5 items-start bg-primary rounded-base overflow-hidden">
                            <div
                                :class="[props.type != 'fiz1' ? 'col-span-4':'col-span-3', ' px-10 max-[900px]:px-5 py-10 pb-0 flex flex-col items-start gap-5 max-[800px]:col-span-5 max-[800px]:order-2']">
                                <BaseHeading  id="pobeda-heading" class="text-[#B689FF] max-[1000px]:text-center bg-[#FDF9F6] rounded-3xl  px-6 py-5 pb-3.5 mb-6">
                                    Упс, все смены уже раскупили
                                </BaseHeading>
                                
                                <!-- <span  v-if="props.type == 'fiz1'" class="text-white font-semibold text-2xl w-full text-center">г. Долгопрудный, МФТИ</span> -->
                                <!-- <BaseHeading  v-if="props.type == 'ml' || props.type == 'inf'" id="pobeda-heading" class="text-[#B689FF] max-[1000px]:text-center bg-[#FDF9F6] rounded-3xl  px-6 py-5 pb-3.5">
                                    поторопись
                                    <br/><span class="font-normal text-base leading-6 max-w-[450px] flex font-nunito-sans">Количество мест на летние смены уменьшается в геометрической прогрессии</span>
                                </BaseHeading> -->
                                
                                <!-- <span  v-if="props.type == 'math' || props.type == 'chem' || props.type == 'fiz'" class="text-white font-semibold text-xl ml-6 max-w-[360px]">Не грусти, ты еще можешь оставить заявку и попасть в Зарегистрироваться!</span> -->
                                <div :class="[props.type == 'fiz1' ? 'grid-cols-1':'grid-cols-2', 'grid  ml-6 max-w-[550px] justify-start max-[420px]:grid-cols-1 max-[900px]:ml-0 gap-4 w-full']">
                                    <div v-if="props.type != 'fiz1'"
                                        class="flex flex-col items-center font-semibold text-white rounded-2xl bg px-5 max-[800px]:px-2 py-1.5 w-full relative">
                                        <i class="px-2 py-1 -translate-1/3 bg-[#FDF9F6] text-[#B468E0] rounded-3xl absolute top-0 left-0">мест нет</i>
                                        <span class="text-xl max-[950px]:text-base max-[550px]:text-sm">17-29
                                            июня</span>
                                        <span v-if="props.type == 'math' || props.type == 'inf'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">7-10 класс</span>
                                        <span v-if="props.type == 'ml'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'fiz'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">7-8 класс</span>
                                        <span v-if="props.type == 'chem'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                    </div>
                                    <div v-if="props.type != 'fiz1'"
                                        class="flex flex-col items-center font-semibold text-white rounded-2xl bg px-5 max-[800px]:px-2 py-1.5 w-full relative">
                                        <i 
                                            class="px-2 py-1 -translate-1/3 bg-[#FDF9F6] text-[#B468E0] rounded-3xl absolute top-0 left-0">мест нет</i>
                                        <span class="text-xl max-[950px]:text-base max-[550px]:text-sm">16-28
                                            июля</span>
                                        <span v-if="props.type == 'math'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'inf'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">7-10 класс</span>
                                        <span v-if="props.type == 'ml'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'fiz'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'chem'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                    </div>
                                    <div v-if="props.type != 'chem' && props.type != 'fiz1'"
                                        class="flex flex-col items-center font-semibold text-white rounded-2xl bg px-5 max-[800px]:px-2 py-1.5 w-full relative">
                                        <i class="px-2 py-1 -translate-1/3 bg-[#FDF9F6] text-[#B468E0] rounded-3xl absolute top-0 left-0">мест нет</i>
                                        <i v-if="props.type == 'inf'"
                                            class="w-4 h-4 -translate-x-2/3 bg-[#FF9F0F] rounded-full absolute top-0 right-0"></i>
                                        <span class="text-xl max-[950px]:text-base max-[550px]:text-sm relative">
                                            31 июля —
                                            12 августа</span>
                                        <span v-if="props.type == 'math' || props.type == 'inf'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'ml'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'fiz'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                    </div>
                                    <div v-if="props.type != 'chem' || props.type != 'fiz1'"
                                        class="flex flex-col items-center font-semibold text-white rounded-2xl bg px-5 max-[800px]:px-2 py-1.5 w-full relative">
                                        <i 
                                            class="px-2 py-1 -translate-1/3 bg-[#FDF9F6] text-[#B468E0] rounded-3xl absolute top-0 left-0">мест нет</i>
                                        <i v-if="props.type == 'inf'"
                                            class="w-4 h-4 -translate-x-2/3 bg-[#FF9F0F] rounded-full absolute top-0 right-0"></i>
                                        <span class="text-xl max-[950px]:text-base max-[550px]:text-sm">15-27
                                            августа</span>
                                        <span v-if="props.type == 'math'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">7-8 класс</span>
                                        <span v-if="props.type == 'inf'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs relative">7-10
                                            класс</span>
                                        <span v-if="props.type == 'ml'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                        <span v-if="props.type == 'fiz'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">7-10 класс</span>
                                        <span v-if="props.type == 'fiz1'"
                                            class="text-base max-[950px]:text-sm max-[550px]:text-xs">9-10 класс</span>
                                    </div>
                                </div>

                                <BaseButton as="a" @click="openFormReg"
                                    class="w-full text-[22px]!  ml-6  max-w-[550px] mb-4 flex justify-center text-center max-[900px]:mb-5 max-[900px]:ml-0">
                                    Зарегистрироваться
                                </BaseButton>
                            </div>
                            <div :class="[props.type != 'fiz1' ? 'col-span-1':'col-span-2', 'max-[800px]:col-span-5 max-[800px]:order-1 h-full relative']">
                                <img v-if="props.type != 'fiz1'" src="/NextSmen/bg1.png"
                                    class="max-w-[381px] max-h-[85%] absolute right-4 bottom-10"
                                    alt="">

                                <!-- <img  src="/NextSmen/bg.png"
                                    class="max-w-[381px] w-full h-full absolute top-0 right-0"
                                    alt=""> -->
                                 <img src="/NextSmen/bg2.png"
                                    class="max-w-[417px] max-h-[85%] absolute right-4 bottom-10"
                                    alt="">
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                 <div v-if="props.type == 'inf'" class="flex items-center gap-4 max-w-[300px] mx-auto justify-between mt-2">
                    <button ref="prevEl" class="swiper-navigation-nextsmen-prev">
                        <iconify-icon icon="iconamoon:arrow-right-2-duotone" class="text-5xl rotate-180 text-primary" />
                    </button>

                    <div ref="paginationEl" class="swiper-pagination-custom-nextsmen justify-center gap-3 flex"></div>

                    <button ref="nextEl" class="swiper-navigation-nextsmen-next">
                        <iconify-icon icon="iconamoon:arrow-right-2-duotone" class="text-5xl text-primary" />
                    </button>
                </div>
            </ClientOnly>
        </div>
    </BaseSection>
</template>
<script setup>
const props = defineProps(['type']);
const emit = defineEmits(['openFormReg'])
function openFormReg() {
    emit('openFormReg');
}

import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const modules = [Pagination, Navigation, Autoplay];
</script>
<style>
.bg {
    background: linear-gradient(98deg, rgba(107, 52, 171, 0.54) 34.43%, rgba(148, 35, 227, 0.60) 116.93%);
}
.swiper-button-disabled *{
    color: #D7D7D7;
}
.swiper-pagination-custom-nextsmen .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
}
.swiper-pagination-custom-nextsmen .swiper-pagination-bullet-active{
    background: var(--color-primary);
}
</style>