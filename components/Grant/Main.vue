<template>
    <BaseSection aria-labelledby="main-heading"
        class="mt-0! relative overflow-hidden rounded-b-base">
        <div class="space-y-9 relative mt-4 overflow-hidden max-w-(--breakpoint-layout) rounded-4xl mx-auto pt-10 pl-15 max-xmd:pl-5 max-xmd:pr-5 pb-6">
            <h1 class="font-bold relative z-20 flex flex-col text-[80px] font-nauryzRedKeds text-white max-xmd:text-[50px] max-[768px]:text-[40px] max-[450px]:text-[35px]">
                Гранты от сбера
                <span class="text-[40px] leading-[45px] max-xmd:text-[30px] max-xmd:leading-[33px] max-[768px]:text-[27px] max-[768px]:leading-[30px] max-[450px]:text-[25px]">на летние смены Олимпиадных <br/>школ МФТИ</span>
            </h1>
            
            <div class="relative z-20 bg-white max-[768px]:bg-[#ffffffe3] flex flex-col items-start gap-5 rounded-4xl max-w-[615px] pt-9 pl-13 pr-13 pb-6 max-xmd:pl-5  max-xmd:pr-5 max-xmd:pt-6 max-[768px]:mt-60 max-[450px]:mt-0  max-[768px]:mb-0">
                <span class="absolute top-0 right-0 bg-primary text-white p-2 font-simibold rounded-xl -translate-y-1/2 translate-x-5 max-xmd:translate-x-0 max-xmd:text-base max-[450px]:text-sm">Заявки принимаются до 3 мая 2026</span>
                <p class="text-xl max-xmd:text-base">Сбер предоставляет призёрам и победителям (ПиПам) заключительного и регионального этапов ВсОШ 250 грантов на оплату обучения в рамках очных смен Олимпиадных школ МФТИ</p>
                <BaseButton :type="'a'" href="https://it-edu.com/mipt-school/wp-content/uploads/2026/05/Результаты_конкурса_на_получение_грантов_2026.pdf" target="_blank" class="relative max-[500px]:w-full">Результаты</BaseButton>
            </div>
            <img class="w-full h-full absolute top-0 left-0" src="/Grant/main.png" alt="">
            <img class="w-full max-w-[483px] max-[450px]:hidden absolute bottom-0 right-0" src="/Grant/maingirl.png" alt="">
        </div>
    </BaseSection>
</template>
<script setup></script>
<style scoped>
.bg-gradient{
    background: #249FDD;
background: linear-gradient(167deg,rgba(36, 159, 221, 1) 0%, rgba(121, 214, 171, 1) 50%, rgba(254, 249, 66, 1) 100%);
}</style>