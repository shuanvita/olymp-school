<template>
    <BaseSection aria-labelledby="grantkto-heading">
        <div class="space-y-9 mt-15 overflow-hidden max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="calendar" class="text-[40px]  max-[768px]:text-[34px] max-[550px]:text-[28px] max-[550px]:leading-[32px]">
                Календарь
            </BaseHeading>

            <div class="grid grid-cols-3 gap-6 max-[768px]:grid-cols-2 max-[500px]:grid-cols-1 max-[768px]:gap-3">
                <div class="flex flex-col items-center gap-2">
                    <div class="relative w-full flex justify-center items-center">
                        <img class="absolute w-full h-full left-0 top-0" src="/Grant/calendar.png" alt="">
                        <span
                            class="relative z-20 w-[80%] my-9 font-semibold bg-primary text-white rounded-4xl py-3 text-center">до
                            3 мая 2026</span>
                    </div>
                    <span class="text-base">Подача заявок </span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <div class="relative  w-full flex justify-center items-center">
                        <img class="absolute w-full h-full left-0 top-0" src="/Grant/calendar.png" alt="">
                        <span
                            class="relative z-20 w-[80%] my-9 font-semibold bg-primary text-white rounded-4xl py-3 text-center">3-15
                            мая 2026 </span>
                    </div>
                    <span class="text-base">Оценка заявок </span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <div class="relative  w-full flex justify-center items-center">
                        <img class="absolute w-full h-full left-0 top-0" src="/Grant/calendar.png" alt="">
                        <span
                            class="relative z-20 w-[80%] my-9 font-semibold bg-primary text-white rounded-4xl py-3 text-center">
                            до 15 мая 2026 </span>
                    </div>
                    <span class="text-base">Результаты </span>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<script setup></script>