<template>
    <BaseSection aria-labelledby="direction-heading" :aria-label="'Направления'"
    class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative">
        <div
            class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative ">
            <div class="sm:space-y-8 space-y-5">
                <BaseHeading id="direction">
                    Предметы и направления
                </BaseHeading>
                <p class=" text-xl text-black max-w-[790px]">Наш фокус — результат. Мы работаем с
                    преподавателями, чьи ученики получают дипломы всероссийских олимпиад.</p>

              <div class="flex flex-col lg:flex-row flex-wrap items-stretch gap-3 font-inter">
                <!-- Отдельный блок ВсОШ -->
                <div class="lg:min-w-[218px] flex items-center justify-center px-7 py-5 rounded-[26px] bg-[#B468E0] text-white text-xl sm:text-[36px] font-medium">
                  {{ firstTag }}
                </div>

                <!-- РСОШ + теги — единый блок -->
                <div class="flex flex-col lg:flex-row flex-1 rounded-[26px] overflow-hidden bg-primary-light">
                  <div class="flex lg:min-w-[218px] items-center justify-center px-7 py-5 bg-[#B468E0] text-white text-xl sm:text-[36px] font-medium rounded-[26px] shrink-0">
                    {{ secondTag }}
                  </div>
                  <div class="flex flex-wrap items-center content-center gap-3 px-5 py-4.5 flex-1">
                    <span
                        v-for="tag in tags"
                        :key="tag"
                        class="px-5 flex items-center justify-center min-h-9 rounded-lg border-[1.5px] border-[#B468E0] text-[13px] text-[#000C1F]"
                    >
                        {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

                <div class="flex flex-col gap-13">
                    <div class="rounded-2xl overflow-hidden bg-linear">
                        <div class="pt-7 px-8 pr-0 relative flex gap-10 items-end justify-between max-xmd:flex-col max-[580px]:px-5 max-[580px]:py-4 max-[580px]:pr-0 max-[580px]:pb-0">
                            <div class="flex flex-col items-start gap-7 w-full">
                                
                                <!-- <p class="text-lg text-[#000C1F] font-normal  flex mt-7 max-[580px]:mt-3 max-w-[462px] max-xmd:max-w-full">За
                                    смену
                                    ученики пишут 2 олимпиады и имеют возможность переходить между уровнями</p> -->

                                <p class="max-w-[450px] max-xmd:max-w-full max-xmd:mr-5 flex text-base text-left bg-primary-light px-5 py-4 rounded-xl min-xmd:mb-7">*
                                  «ПРОФИ» — это группа для победителей и призёров регионального и заключительного этапов ВсОШ и перечневых олимпиад. Акцент делается на решении задач высокой сложности для точечной подготовки к заключительному этапу. 
                                    <br/><br/>
                                🚀 Для победителей и призёров заключительного этапа ВсОШ предусмотрена отдельная группа Профи+ при условии набора.</p>
                            </div>
                            <img src="/Directions/newbg.png" class="max-w-[550px] w-full" alt="">
                        </div>

                        
                    </div>
                    <div class="flex flex-col gap-5">
                        <MainPredmetItem v-for="value in predmet" :key="value.name" :info="value" />
                    </div> 
                </div>

                <!-- <div class="flex flex-col gap-13">
                    <div class="rounded-2xl overflow-hidden bg-[#FFF7FF]">
                        <div class="pt-7 px-11 pb-7 relative flex gap-10 items-center max-xmd:flex-col max-[580px]:px-5 max-[580px]:py-4">
                            <div class="flex flex-col">
                                <span class="text-xl text-[#000C1F] font-semibold ">Обучение делится на 3
                                    уровня
                                    по уровню знаний</span>
                                <p class="text-xl text-[#000C1F] font-normal  flex mt-7 max-[580px]:mt-3 max-w-[254px] max-xmd:max-w-full">За
                                    смену
                                    ученики пишут 2 олимпиады и имеют возможность переходить между уровнями</p>
                            </div>
                            <ul class="flex flex-col gap-4">
                                <li class="flex gap-3 font-semibold text-xl">
                                    <svg class="max-w-[16px]" xmlns="http://www.w3.org/2000/svg" width="26" height="28"
                                        viewBox="0 0 26 28" fill="none">
                                        <path
                                            d="M25.6686 4.24354C25.7749 2.96767 24.8268 1.84717 23.5509 1.74085L2.75935 0.0082193C1.48347 -0.0981035 0.36298 0.850005 0.256657 2.12588C0.150333 3.40175 1.09844 4.52224 2.37432 4.62857L20.8557 6.16868L19.3156 24.6501C19.2093 25.926 20.1574 27.0464 21.4333 27.1528C22.7091 27.2591 23.8296 26.311 23.9359 25.0351L25.6686 4.24354ZM1.77008 19.2814L0.000407441 20.7788L2.99523 24.3181L4.7649 22.8207L3.26749 21.051L1.77008 19.2814ZM23.3584 4.05103L21.861 2.28136L1.77008 19.2814L3.26749 21.051L4.7649 22.8207L24.8558 5.82069L23.3584 4.05103Z"
                                            fill="#FF8D5F" />
                                    </svg>
                                    Профи*
                                </li>
                                <li class="flex gap-3 font-semibold text-xl -translate-x-1/2 max-[580px]:translate-none">
                                    <svg class="max-w-[16px]" xmlns="http://www.w3.org/2000/svg" width="26" height="28"
                                        viewBox="0 0 26 28" fill="none">
                                        <path
                                            d="M25.6686 4.24354C25.7749 2.96767 24.8268 1.84717 23.5509 1.74085L2.75935 0.0082193C1.48347 -0.0981035 0.36298 0.850005 0.256657 2.12588C0.150333 3.40175 1.09844 4.52224 2.37432 4.62857L20.8557 6.16868L19.3156 24.6501C19.2093 25.926 20.1574 27.0464 21.4333 27.1528C22.7091 27.2591 23.8296 26.311 23.9359 25.0351L25.6686 4.24354ZM1.77008 19.2814L0.000407441 20.7788L2.99523 24.3181L4.7649 22.8207L3.26749 21.051L1.77008 19.2814ZM23.3584 4.05103L21.861 2.28136L1.77008 19.2814L3.26749 21.051L4.7649 22.8207L24.8558 5.82069L23.3584 4.05103Z"
                                            fill="#FF8D5F" />
                                    </svg>
                                    Продвинутый
                                </li>
                                <li class="flex gap-3 font-semibold text-xl -translate-x-full max-[580px]:translate-none">
                                    <svg class="max-w-[16px]" xmlns="http://www.w3.org/2000/svg" width="26" height="28"
                                        viewBox="0 0 26 28" fill="none">
                                        <path
                                            d="M25.6686 4.24354C25.7749 2.96767 24.8268 1.84717 23.5509 1.74085L2.75935 0.0082193C1.48347 -0.0981035 0.36298 0.850005 0.256657 2.12588C0.150333 3.40175 1.09844 4.52224 2.37432 4.62857L20.8557 6.16868L19.3156 24.6501C19.2093 25.926 20.1574 27.0464 21.4333 27.1528C22.7091 27.2591 23.8296 26.311 23.9359 25.0351L25.6686 4.24354ZM1.77008 19.2814L0.000407441 20.7788L2.99523 24.3181L4.7649 22.8207L3.26749 21.051L1.77008 19.2814ZM23.3584 4.05103L21.861 2.28136L1.77008 19.2814L3.26749 21.051L4.7649 22.8207L24.8558 5.82069L23.3584 4.05103Z"
                                            fill="#FF8D5F" />
                                    </svg>
                                    Базовый
                                </li>
                            </ul>
                            <img class="absolute top-1/2 mt-4 -translate-y-1/2 right-10 max-w-[356px] w-full max-xmd:hidden"
                                src="/Directions/steps.png" alt="">

                        </div>

                        <div class="bg-primary-light px-3 py-3.5"><span class="max-w-[890px] flex text-center mx-auto">*
                                «ПРОФИ» — это группа для победителей и призёров региональных этапов ВсОШ и перечневых
                                олимпиад. Акцент делается на решении задач высокой сложности для точечной подготовки к
                                заключительному этапу</span></div>
                    </div>
                    <div class="flex flex-col gap-5">
                        <MainPredmetItem v-for="value in predmet" :info="value" />
                    </div> 
                </div> -->
            </div>
        </div>
    </BaseSection>
</template>
<script setup>

const firstTag = 'ВСоШ';
const secondTag = 'РСОШ';
const tags = [
  'МОШ',
  'Технокубок',
  'Физтех',
  'олимпиада им. Леонарда Эйлера',
  'олимпиада им. Дж.Кл. Максвелла',
  'олимпиада им. М. Келдыша'
];

const predmet = [
    {name: 'Информатика', bgClass: 'left-[30%]', link: 'informatics', tags: ['Основной','Профи'], descr: 'Погружение в олимпиадное программирование. Упор на алгоритмы, структуры данных и тактику решения задач, соответствующих уровню от регионального до заключительного этапа ВсОШ и Открытой олимпиады школьников', people: [{name: 'Кондаков С.В.<br/>методист', img: '/People/inf1.png'}]},
    {name: 'Информационная безопасность', bgClass: 'left-[45%]', link: 'cybersecurity', tags: ['Основной'], descr: 'Практический курс, который знакомит с основами защиты информации в современном цифровом мире. Изучаем принципы криптографии, сетевую безопасность, работу в Linux и анализ уязвимостей. Отдельное внимание уделяется проектной деятельности — подготовке собственных исследований для участия в олимпиадах и конкурсах.', people: [{name: 'Подлесных Д.А.<br/>методист', img: '/People/infobez.png'}]},

    {name: 'ФИЗИКА', bgClass: 'left-[45%]', link: 'physics', tags: ['Основной','Профи'], descr: 'Программа для углубленной олимпиадной подготовки. Разбираем олимпиадные приемы и учимся решать задачи уровня муниципального и регионального этапа ВсОШ', people: [{name: 'Колдунов Л.М.<br/>методист', img: '/People/fizika.png'}]},
   // {name: 'Инженерная физика', bgClass: 'left-[45%]', link: 'engineering-physics', tags: ['Основной'], descr: 'Погружение в реальные инженерные задачи на стыке физики и технологий: от кавитации и силы Магнуса до радиолокации, электродвигателей и аэродинамики коптеров. Курс знакомит с прикладной физикой через современные кейсы и помогает подготовиться к инженерным олимпиадам, включая «Физтех.Инженер».', people: [{name: 'Кулешов П.С.<br/>методист', img: '/People/fiz1.png'}]},
    {name: 'Математика', bgClass: 'left-[50%]', link: 'math', tags: ['Основной','Профи'], descr: 'Нацелена на подготовку к ключевым олимпиадам. Учим видеть нестандартные подходы и осваивать методы решения задач, выходящих за рамки школьной программы, с акцентом на задания регионального этапа ВсОШ и перечневых олимпиад', people: [ {name: 'Дениско В.В.<br/>методист', img: '/People/math2.png'}]},
   // {name: 'Химия', bgClass: 'left-[60%]', link: 'chemistry', tags: ['Основной'], descr: 'Систематизируем знания по неорганической и органической химии, разбираем сложные расчётные задачи и экспериментальные задания. Готовим к решению задач уровня муниципального, регионального и заключительного этапов ВсОШ, а также перечневых олимпиад', people: [{name: 'Тихонов А.В.<br/>методист', img: '/People/chem1.png'}]},
   // {name: 'Машинное обучение', bgClass: 'left-[45%]', link: 'ml', tags: ['Основной'], descr: 'Практическое введение в области ML через решение реальных аналитических задач на Python. Идеально для делающих первые шаги в искусственном интеллекте', people: [{name: 'Жогов А., Проводов А., <br/>Байбулатов А. <br/>методист', img: '/People/ml1.png'}]},
    ];
</script>
<style scoped>
.bg-linear{
    background: var(--Linear, linear-gradient(150deg, #F90 11.41%, #FFD059 136.7%));
}</style>