<template>
    <BaseSection aria-labelledby="main-heading"
        class="xmd:bg-primary mt-0! relative overflow-hidden pb-20 rounded-b-base">
        <div class="max-xmd:relative max-xmd:px-5 max-xmd:rounded-b-base overflow-hidden">
            <picture  class="absolute top-0 left-0 w-full">
                <source media="(min-width:850px)" srcset="/Main/MainScreen/main.png">
                <source media="(min-width:680px)" srcset="/Main/MainScreen/main_medium.png">
                <img src="/Main/MainScreen/main_mob.png" class="w-full" alt="" />
            </picture>
            
            <div
                class="space-y-11 max-w-(--breakpoint-layout) mx-auto relative sm:pt-[111px] sm:pb-23 py-[39px_315px] max-[1100px]:pt-20! max-[700px]:pt-10! max-[1100px]:pb-0! max-[680px]:space-y-3">
                <h3
                    class="text-base mt-4 font-semibold text-white flex items-center gap-3 absolute left-0 top-4 max-xmd:justify-end  max-[700px]:flex  max-[700px]:items-start max-[700px]:left-0  max-[700px]:gap-2 max-[430px]:text-xs">
                    При поддержке <img class="max-w-[190px] max-xmd:max-w-[130px] max-[500px]:max-w-[70px] w-full relative z-20"
                        src="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/sber-1.png" alt="Сбер"></h3>


                <div class="flex gap-5 relative">

                    <h1 class="text-white text-primary-heading-mainscreen-r font-bold  max-[680px]:pt-8">
                        <span class="font-nauryzRedKeds text-primary-heading-mainscreen-r ">ОЛИМПИАДНЫЕ</span><br />
                        <span class="font-nunito-sans">ШКОЛЫ МФТИ</span>
                    </h1>
                    <span class="text-white text-base leading-6 pt-2 font-semibold max-[680px]:absolute max-[680px]:right-0 max-[680px]:top-4 max-[680px]:-translate-y-full max-[430px]:text-[10px] max-[430px]:leading-[12px]">Зимняя смена <br/>стартует с 4 января</span>
                </div>

                <div class="flex items-start justify-between max-[680px]:flex-col max-[680px]:gap-6">
                    <div class="flex flex-col items-start gap-7">
                        <p
                            class="text-2xl max-[1100px]:text-xl text-white font-bold max-w-md max-[800px]:max-w-[250px] max-[680px]:max-w-[260px] max-[750px]:text-base ">
                            Готовим победителей и призёров всероссийских школьных
                            олимпиад с 2013 года</p>
                        <BaseButton @click="ym_event('direction')" href="#direction" class="max-[680px]:hidden">Выбрать направление</BaseButton>

                         
                    </div>
                    <div
                        class="flex max-[680px]:mt-10 flex-col items-end  gap-12.5 max-[1100px]:gap-6 -translate-y-1/4 max-[680px]:-translate-y-0 -translate-x-10  max-[1300px]:-translate-x-36  max-[680px]:translate-x-0 max-[750px]:translate-x-0 max-[680px]:w-full">
                        <div class="flex gap-3 translate-x-36 max-xmd:items-center max-[750px]:translate-x-0">
                            <img src="/Main/arrow1.svg" class="max-xmd:size-8" alt="">
                            <span
                                class="bg-[#B468E0] px-12 py-4 max-xmd:px-5 max-xmd:py-2 text-2xl max-[1000px]:text-xl max-[850px]:text-lg max-[750px]:text-base  text-white font-bold">Поступи
                                в топ вуз</span>
                        </div>
                        <div class="flex gap-3 translate-x-18 max-xmd:items-center max-[750px]:-translate-x-5">
                            <img src="/Main/arrow2.svg" class="max-xmd:size-8" alt="">
                            <span
                                class="bg-[#B468E0] px-12 py-4 max-xmd:px-5 max-xmd:py-2 text-2xl max-[1000px]:text-xl max-[850px]:text-lg max-[750px]:text-base text-white font-bold">Победи
                                в олимпиаде</span>
                        </div>
                        <div class="flex gap-3 max-xmd:items-center max-[750px]:-translate-x-7">
                            <img src="/Main/arrow3.svg" class="max-xmd:size-8" alt="">
                            <span
                                class="bg-[#B468E0] px-12 py-4  max-xmd:px-5 max-xmd:py-2 text-2xl max-[1000px]:text-xl max-[850px]:text-lg max-[750px]:text-base text-white font-bold">Найди
                                единомышленников</span>
                        </div>
                    </div>
                    <BaseButton href="#direction" class="hidden max-[680px]:flex w-full text-center justify-center mb-10">Выбрать направление
                    </BaseButton>
                   
                </div>
            </div>
        </div>
    </BaseSection>
    <MainInsta />
</template>
<script setup>
import { ym_event } from '../../composables/metrika'
</script>