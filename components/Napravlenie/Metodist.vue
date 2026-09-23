<template>
    <BaseSection aria-labelledby="about-heading" class="mt-10!">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <ClientOnly>
                <Swiper :autoHeight="true" :autoplay="{
                    delay: 4500,
                    disableOnInteraction: true,
                }" :slidesPerView="1" :navigation="{
                    enabled: true,
                    prevEl: '.swiper-navigation-metodist-prev',
                    nextEl: '.swiper-navigation-metodist-next',
                }" :pagination="{
                    clickable: true,
                    enabled: true,
                    el: '.swiper-pagination-custom-metodist',
                }" :spaceBetween="24" :modules="modules" :lazy="true" class="mySwiperMetodist">
                    <SwiperSlide class="bg-primary-light rounded-4xl relative overflow-hidden"
                        v-for="item in props.slides">
                        <img src="/Metod/bg.png" class="absolute w-full top-0 left-0 z-10" alt="">
                        <div
                            class="grid grid-cols-2 max-[800px]:grid-cols-3 max-[750px]:grid-cols-1 px-10 py-10 items-start justify-between gap-18 max-[900px]:gap-8 relative z-20 max-[750px]:px-5 max-[750px]:py-5">
                            <div class="relative max-[800px]:col-span-1">
                                <img :src="item.photo"
                                    class="w-full max-w-[500px] max-[900px]:max-w-[400px] max-[800px]:max-w-[300px] max-[750px]:max-w-[400px] max-[750px]:mx-auto"
                                    alt="">
                            </div>
                            <div class="flex flex-col gap-3 max-[800px]:col-span-2">
                                <h3 class="text-4xl leading-[48px] max-[900px]:text-2xl max-[900px]:leading-[38px] font-semibold relative z-20"
                                    v-html="item.name"></h3>
                                <span class="text-base italic font-bold">{{ item.doljn }}</span>
                                <div class="text-base flex mt-2" v-html="item.descr"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="flex items-center gap-4 max-w-[300px] mx-auto justify-between mt-2">
                    <button ref="prevEl" class="swiper-navigation-metodist-prev">
                        <iconify-icon icon="iconamoon:arrow-right-2-duotone" class="text-5xl rotate-180 text-primary" />
                    </button>

                    <div ref="paginationEl" class="swiper-pagination-custom-metodist justify-center gap-3 flex"></div>

                    <button ref="nextEl" class="swiper-navigation-metodist-next">
                        <iconify-icon icon="iconamoon:arrow-right-2-duotone" class="text-5xl text-primary" />
                    </button>
                </div>
            </ClientOnly>
        </div>
    </BaseSection>
</template>
<script setup>
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps(['slides']);

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const modules = [Pagination, Navigation, Autoplay];


</script>
<style>
.swiper-button-disabled *{
    color: #D7D7D7;
}
.swiper-pagination-custom-metodist .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
}
.swiper-pagination-custom-metodist .swiper-pagination-bullet-active{
    background: var(--color-primary);
}
</style>