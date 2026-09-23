<template>
    <BaseSection aria-labelledby="about-heading">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="pobeda-heading" class="">
                Учебная программа
            </BaseHeading>
            <div class="mt-6">
                <span>Это проект программы, которая будет корректироваться под уровень группы.</span>
                <ClientOnly>
                    <Swiper :autoHeight="true" :autoplay="{
                        delay: 4500,
                        disableOnInteraction: true,
                    }" :slidesPerView="1" :navigation="{
                        enabled: true,
                        prevEl: '.swiper-navigation-program-prev',
                        nextEl: '.swiper-navigation-program-next',
                    }" :pagination="{
                    clickable: true,
                    enabled: true,
                    el: '.swiper-pagination-custom-program',
                }" :spaceBetween="24" :modules="modules" :lazy="true" class="mySwiperProgram">
                        <div class="absolute top-2 left-1/2 -translate-x-1/2 w-[380px] max-[420px]:w-[350px] flex justify-between z-10">
                            <button ref="prevEl" class="swiper-navigation-program-prev">
                                <iconify-icon icon="iconamoon:arrow-right-2-duotone"
                                    class="text-5xl rotate-180 text-primary" />
                            </button>

                            <button ref="nextEl" class="swiper-navigation-program-next">
                                <iconify-icon icon="iconamoon:arrow-right-2-duotone" class="text-5xl text-primary" />
                            </button>
                        </div>
                        <SwiperSlide>

                            <div class="grid grid-cols-1 mt-2">
                                <div class="flex flex-col">
                                    <span
                                        class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">Основное
                                        направление</span>
                                    <div class="flex flex-col border-primary px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                                        <ul
                                            class="grid grid-cols-3 min-[580px]:grid-flow-col grid-rows-3 max-[850px]:grid-cols-2 max-[850px]:grid-rows-4 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Обзор
                                                последовательных STL-Контейнеров: листы, дек, string, vector, pair. Стек
                                                и очередь
                                            </li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Линейные
                                                алгоритмы и сортировки</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Бинарный
                                                поиск</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Графы:
                                                хранение, dfs(topsort), bfs, bfs 0-1</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Префикс-функция, Z-функция, алгоритм Манакера. Бор. Хэши</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Алгоритм Мо,
                                                корневая декомпозиция</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Введение в
                                                динамическое программирование</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Введение в
                                                геометрию: точка, вектор, расстояние между точками, произведения
                                                векторов
                                                (скалярное, псевдоскалярное), площадь фигур</li>
                                        </ul>
                                    </div>
                                </div>



                                <div class="flex gap-4 flex-wrap mt-8">
                                    <a target="_blank" @click="ym_event('save_program')"
                                        class="px-4 py-2 border-2 border-primary rounded-2xl"
                                        href="https://disk.yandex.ru/i/hhkIfYQXeRgRaw">Скачать
                                        задачи
                                        Div C</a>
                                    <a target="_blank" @click="ym_event('save_program')"
                                        class="px-4 py-2 border-2 border-primary rounded-2xl"
                                        href="https://disk.yandex.ru/d/uWOVvfn78IWApA">Посмотреть
                                        test Div C</a>
                                    <a target="_blank" @click="ym_event('save_program')"
                                        class="px-4 py-2 border-2 border-primary rounded-2xl"
                                        href="https://disk.yandex.ru/i/H6mIgsfImlqSrA">Скачать
                                        инструкцию по тестированию </a>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="grid grid-cols-1 mt-2">
                                <div class="flex flex-col">
                                    <span
                                        class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">Промышленная
                                        разработка</span>
                                    <div class="flex flex-col border-primary px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                                        <ul
                                            class="grid grid-cols-2  max-[850px]:grid-cols-2 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Git. Создание и подгрузка репозиториев. Знакомство с библиотекой
                                                Unittests
                                            </li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Знакомство с CI (Continuous Integration, непрерывная интеграция). Выдача
                                                проекта на Git и unit-тесты</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Знакомство с SQL. Создание своей Базы Данных (БД)</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Настройка CI по своей CD (Continuous Delivery / Deployment, непрерывная
                                                доставка / развёртывание)</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Docker containers. Redis</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Flask. Сетевое взаимодействие</li>
                                            <li></li>
                                            <div class="bg-primary-light rounded-2xl px-4 py-4">
                                                <p>
                                                    Для освоения программы нужно иметь:
                                                <ul class="list-disc pl-5">
                                                    <li>навыки работы с Python</li>
                                                    <li>понимание использования переменных, циклов,</li>
                                                    <li>знание базового синтаксиса</li>
                                                    <li>знание Бинарного дерева поиска и его тестирования</li>
                                                </ul>
                                                </p>
                                            </div>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div class="grid grid-cols-1 mt-2">
                                <div class="flex flex-col">
                                    <span
                                        class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">«Язык
                                        программирования Go»</span>
                                    <div class="flex flex-col border-primary px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                                        <ul
                                            class="grid grid-cols-2  max-[850px]:grid-cols-2 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Знакомство с базовыми конструкциями языка (создание переменных + циклы +
                                                if). Устройство ввода-вывода. Работа со строками
                                            </li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Работа Git</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Срезы. Make. Связь срезов и циклов, операции над ними</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Каналы, Go-рутины, мьютексы</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Указатели и их передача как аргументов в функцию</li>
                                            <li class="border-b border-primary text-base font-semibold leading-5 py-2">
                                                Словари, функции, структуры, методы, интерфейсы и указатели</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </ClientOnly>
            </div>



            <BaseHeading id="pobeda-heading" class="mt-20">
                Программа ПРОФИ
            </BaseHeading>

            <div class="mt-6">
                <div class="grid grid-cols-3 max-xmd:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:gap-4 mb-10">
                    <p class="max-w-[650px] col-span-2 max-xmd:col-span-1">Если ты обладатель диплома призёра или
                        победителя заключительного или регионального этапов ВсОШ
                        и РСОШ I и II уровня — приглашаем в группы «ПРОФИ».<br /><br />
                        Решение задач высочайшей сложности для подготовки к заключительным этапам. Преподают здесь
                        наставники-методисты — сами победители олимпиад, которые знают все тонкости финальной
                        подготовки.<br /><br />
                        Это проект программы, которая будет корректироваться под уровень группы.</p>

                    <div class="col-span-1 flex flex-col items-center gap-3">
                        <div
                            class="relative text-white w-full flex justify-end text-base font-bold max-[380px]:text-sm rounded-2xl px-6 py-6 bg-linear-custom">
                            <img src="/Program/lamp.png" class="max-w-[60px] absolute top-5 left-3" alt="">
                            <span class="max-w-[254px] max-[380px]:max-w-[200px]">Для подтверждения необходимо загрузить
                                диплом</span>
                        </div>
                        <a @click="ym_event('vhod_btn')" class="bg-[#795DFF] text-white rounded-2xl px-3 py-2"
                            href="https://edu.mipt.ru/member/">В
                            личный кабинет</a>
                    </div>
                </div>
                <div class="grid grid-cols-1 mt-2">
                    <div class="flex flex-col">
                        <span
                            class="title text-base font-semibold border border-primary rounded-t-base text-center py-3">Все
                            классы</span>
                        <div class="flex flex-col border-primary px-10 max-[550px]:px-5 gap-4 h-full mt-5">
                            <ul
                                class="grid grid-cols-3 min-[580px]:grid-flow-col grid-rows-3 max-[850px]:grid-cols-2 max-[850px]:grid-rows-4 max-[580px]:grid-cols-1 flex-col gap-3 gap-x-10">

                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Суффиксный
                                    массив, Суффиксный автомат</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Интерактивные
                                    задачи и конструктивы</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Быстрое
                                    преобразование Фурье</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">ДП на
                                    матрицах, Оптимизации ДП</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Системы
                                    линейных уравнений, метод Гаусса. Бинарный Гаусс за n^3 / 32</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Метод четырех
                                    русских</li>
                                <li class="border-b border-primary text-base font-semibold leading-5 py-2">Потоки:
                                    теорема Форда-Фалкерсона, алгоритм Эдмондса-Карпа, алгоритм Диница, минимальный
                                    разрез</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex gap-4 flex-wrap mt-8">
                        <a target="_blank" @click="ym_event('save_program')" class="px-4 py-2 border-2 border-primary rounded-2xl"
                            href="https://disk.yandex.ru/i/Xkqr_iIH0V-NQA">Скачать задачи
                            Div А</a>
                        <a target="_blank" @click="ym_event('save_program')" class="px-4 py-2 border-2 border-primary rounded-2xl"
                            href="https://disk.yandex.ru/d/Ad7iA7540Esx1A">Посмотреть
                            test Div А</a>
                        <a target="_blank" @click="ym_event('save_program')" class="px-4 py-2 border-2 border-primary rounded-2xl"
                            href="https://disk.yandex.ru/i/H6mIgsfImlqSrA">Скачать
                            инструкцию по тестированию </a>
                    </div>

                    <BaseButton @click="openFormReg()" class="max-w-[260px] mt-10 flex justify-center text-center">
                        Зарегистрироваться</BaseButton>
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<script setup>
import { ym_event } from '../../composables/metrika'


const emit = defineEmits(['openFormReg'])
function openFormReg() {
    emit('openFormReg');
}


import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps(['slides']);

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const modules = [Pagination, Navigation, Autoplay];

</script>