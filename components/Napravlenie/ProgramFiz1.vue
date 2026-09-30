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
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Входное тестирование и олимпиада/зачет</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Лекции по технической физике</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Разделы физики: аэрогидродинамика, физическая химия, кинетика, колебания и волны, цепи переменного тока</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Приложения: винтовой движитель, кавитация, лазерная абляция, супергидрофобность, радиолокация, трехфазный электродвигатель</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Семинарские занятия/решение задач: олимпиада «Физтех.Инженер» и классическая олимпиада Физтех по физике</li>
                                <li class=" text-base font-semibold leading-5 py-2"></li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Практические занятия на компьютере по физической химимии, кинетике, по распределениям наночастиц при лазерной фрагментации</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Лабораторные работы (сила Магнуса, капиллярные волны, бесколлекторные двигатели для БПЛА)</li>
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