<template>
    <BaseSection aria-labelledby="about-heading">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="pobeda-heading" class="">
                Учебная программа
            </BaseHeading>

            <div class="mt-6">
                <span>Это проект программы, которая будет корректироваться под уровень группы.</span>
                <div class="grid grid-cols-1 max-[580px]:grid-cols-1 mt-2 max-[580px]:gap-y-8">
                    <div class="flex flex-col">
                        <span class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">Machine Learning (9-10 классы)</span>
                        <div class="flex flex-col px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                            <ul class="grid grid-cols-3 min-[580px]:grid-flow-col grid-rows-3 max-[850px]:grid-cols-2 max-[850px]:grid-rows-4 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Введение в математику: вектора, матрицы, операции над ними, скалярное произведение</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Задачи классификации, регресии, кластеризации, crossentropy на пальцах, kNN, k-means экспонента и логарифмы. Начало линейной регрессии</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Линрег, логрег, SGD, kFold-validation, регуляризация, переобучение, недообучение</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Виды loss'a: MSE, MAE, MAPE. Accuracy, precision, recall, ROC AUC - смысл + смысл выбора метрики на практике</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Дерево решений, критерии ветвления</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Введение в нейросети: Backprop, граф производных, идея нейросетей, матричная запись, нелинейности</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Prompt-Engineering: Основные принципы составления промптов для достижения наилучшего результата</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">KMeans, DBSCAN, иерархическая кластеризации</li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col max-w-[820px]">
                        <h3 class="text-xl font-bold mt-10">Что необходимо знать, чтобы попасть на смену</h3>
                        <span class="text-lg leading-5 font-bold text-primary flex mt-3 mb-1">Математика:</span>
                        <ul class="list-disc pl-5">
                            <li>
                                 умение решать квадратные уравнения;
                            </li>
                            <li>
                                 владение понятием функции, понимание области определения и области значений для линейных, квадратичных и показательных функций, чтение и построение графиков функций;
                            </li>
                            <li>
                                 умение выполнять основные операции над векторами и вычислять скалярное произведение;
                            </li>
                        </ul>
                        <span class="text-lg leading-5 font-bold text-primary flex mt-3 mb-1">Программирование:</span>
                        <ul class="list-disc pl-5">
                            <li>
                                навыки работы с Python: использование переменных, циклов, базовый синтаксис.
                            </li>
                        </ul>
                    </div>


                    <BaseButton @click="openFormReg()" class="max-w-[260px] mt-10 flex justify-center text-center">Зарегистрироваться</BaseButton>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<script setup>
import { ym_event } from '../../composables/metrika'
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>