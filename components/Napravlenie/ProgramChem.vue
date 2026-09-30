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
                            <ul class="grid grid-cols-3 min-[580px]:grid-flow-col grid-rows-3 max-[850px]:grid-cols-2 max-[850px]:grid-rows-4 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Общие
                                    закономерности в химии металлов. Комплексные соединения</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Приемы
                                    решения расчетных задач в неорганической химии</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Химия
                                    окислительно-восстановительных превращений на примере Cr и Mn</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Практикум
                                    «Синтез тригидрата триоксалатохромата (III) калия и железного купороса»</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Свойства
                                    соединений железа и никеля</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Методы
                                    решения задач-угадаек</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Методы
                                    предсказания геометрии и структуры молекул</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Элементы
                                    органической химии — закономерности, аналогии и отличия с неорганической химией</li>
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