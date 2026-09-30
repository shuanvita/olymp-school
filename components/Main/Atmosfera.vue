<template>
    <BaseSection aria-labelledby="atmosfera-heading" class="bg-primary-light overflow-hidden">
        <div class="relative px-14 py-20 mx-auto border-base max-xmd:px-0 max-xmd:py-10">
            <div class="max-w-(--breakpoint-layout) mx-auto space-y-9">
                <BaseHeading id="atmosfera-heading">
                    АТМОСФЕРА ФИЗТЕХа
                </BaseHeading>

                <div class="flex flex-col space-y-6">
                    <div class="grid grid-cols-3 max-xmd:grid-cols-1 gap-10 max-xmd:gap-5 items-stretch">
                        <div class="col-span-1 max-xmd:order-2">
                            <ul class="flex flex-col justify-around h-full text-xl max-xmd:text-sm max-xmd:gap-3">
                                <li>Обучение на кампусе МФТИ</li>
                                <li>Инфраструктура одного из лучших технических вузов страны</li>
                                <li>Действующие олимпиадные тренеры</li>
                            </ul>
                        </div>
                        <div class="col-span-2 relative max-xmd:order-1">
                            <img class="w-full" src="/Atmosfera/1.png" alt="">
                            <img class="absolute -top-[15%] left-[2%] w-full scale-[1.1]" src="/Atmosfera/ring.png"
                                alt="">
                        </div>
                    </div>
                    <div class="grid grid-cols-3 max-xmd:grid-cols-1 gap-10 max-xmd:gap-5 items-stretch">
                        <div class="col-span-2 relative">
                            <img class="w-full relative z-20" src="/Atmosfera/2.png" alt="">
                            <img class="absolute -bottom-[18%] -left-[5%] w-full scale-[1.4] max-xmd:scale-[1] z-10"
                                src="/Atmosfera/ring.png" alt="">
                        </div>
                        <div class="col-span-1">
                            <ul class="flex flex-col justify-around h-full text-xl relative z-20 max-xmd:text-sm max-xmd:gap-3">
                                <li>Комфортное проживание в гостевом общежитии на кампусе</li>
                                <li>5-разовое питание</li>
                                <li>Безопасность</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<style scoped>
.shadow_custom {
    box-shadow: 0 4px 4px 0 #D77100;
}
</style>