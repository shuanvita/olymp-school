<template>
    <BaseSection aria-labelledby="about-heading">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="pobeda-heading" class="">
                Учебная программа
            </BaseHeading>

            <div class="mt-6">
                <span>Это проект программы, которая будет корректироваться под уровень группы.</span>
                <div class="grid grid-cols-1 mt-2">
                    <div class="flex flex-col">
                        <span
                            class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">9-10
                            КЛАССЫ</span>
                        <div class="flex flex-col border-primary px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                            <ul class="grid grid-cols-3 min-[580px]:grid-flow-col grid-rows-5 max-[850px]:grid-cols-2 max-[850px]:grid-rows-8 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Юридические аспекты информационной безопасности</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Работа в операционной системе Linux. Настройка систем разграничения доступа</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Командный интерпретатор bash. Написание скриптов</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Хранение и представление данных в компьютере</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Реверс-инжиниринг</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Архитектура ARM, x86_64, NVidia, Эльбрус, Loongson</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Перехват управления (PWN)</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Сети. Средства защиты информации. Настройка межсетевых экранов. Web-безопасность</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Инъекции SQL, команд, log</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Симметричная, асимметричная и постквантовая криптография</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Безопасность промышленных контроллеров</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Поиск данных в открытых источниках (osint)</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Разработка проектов для ВсОШ и "Старта в науку"</li>
                            </ul>
                        </div>
                    </div>

                    <BaseButton @click="openFormReg()" class="max-w-[260px] mt-10 flex justify-center text-center">Зарегистрироваться</BaseButton>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<script setup>

const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>