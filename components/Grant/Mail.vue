<template>
    <BaseSection aria-labelledby="granti-heading" class="">
        <div
            class="space-y-9 rounded-2xl relative overflow-hidden max-w-(--breakpoint-layout) mx-auto max-[500px]:pb-6">

            <div class="flex flex-col gap-4">
                <h3 class="font-extrabold text-xl  text-primary">
                    Мотивационное письмо
                </h3>
                <p class="max-w-[921px] text-xl text-black">Рекомендуемый объём мотивационного письма — не более 2
                    страниц печатного текста формата А4. Придерживайся следующего плана.</p>
            </div>
            <div class="grid grid-cols-2 max-xmd:grid-cols-4 max-[850px]:grid-cols-1 items-end max-[850px]:items-start">
                <ul class="space-y-[15px] max-xmd:col-span-3">
                    <HeadlessDisclosure v-for="(el, j) in question25" :key="j" as="li"
                        class="text-primary-paragraph-r md:space-y-3 space-y-2">
                        <HeadlessDisclosureButton v-slot="{ open }"
                            class="md:py-4 border-2 border-primary py-2 md:px-7 px-4 w-full text-left md:rounded-[30px] rounded-xl flex flex-row justify-between items-center focus:outline-offset-4">
                            {{ el.question }}

                            <svg v-if="!open" class="md:size-7 size-5 transition-transform"
                                xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41"
                                fill="none">
                                <path
                                    d="M19.4318 28.2102V11.3352H22.2955V28.2102H19.4318ZM12.4261 21.2045V18.3409H29.3011V21.2045H12.4261Z"
                                    fill="#882ABF" />
                                <circle cx="20.5" cy="20.5" r="19.5" stroke="#882ABF" stroke-width="2" />
                            </svg>
                            <svg v-else class="md:size-7 size-5 transition-transform" xmlns="http://www.w3.org/2000/svg"
                                width="41" height="41" viewBox="0 0 41 41" fill="none">
                                <path d="M29 20V23H11V20H29Z" fill="#882ABF" />
                                <circle cx="20.5" cy="20.5" r="19" stroke="#882ABF" stroke-width="3" />
                            </svg>
                        </HeadlessDisclosureButton>
                        <HeadlessDisclosurePanel as="div" class="md:px-7 px-4 faq_panel">
                            <div v-html="el.answer"></div>
                        </HeadlessDisclosurePanel>
                    </HeadlessDisclosure>
                </ul>
                <div class="flex justify-end max-[850px]:justify-start max-xmd:grid-cols-1">
                    <img class="max-w-[444px] w-full" src="/Grant/mail.png" alt="">
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h3 class="font-extrabold text-xl text-primary">
                    Другие достижения
                </h3>
                <p class="max-w-[921px] text-xl text-black">Наличие дипломов по профильным предметам олимпиад РСОШ
                    (математика, физика, информатика, химия
                    и смежные
                    направления). При прочих равных участник с дипломами по олимпиадам имеет преимущество при
                    отборе.
                </p>
                <BaseButton :type="'a'" href="https://edu.mipt.ru/olymp-school" class="self-start max-[500px]:w-full">
                    Подать на грант</BaseButton>
            </div>
        </div>
    </BaseSection>
</template>
<style scoped>
.shadow_custom {
    box-shadow: 0 4px 4px 0 #D77100;
}
</style>
<script setup>
const question25 = [
    {
        question: "1. Опыт и достижения",
        answer: "Чем из того, что ты уже сделал, ты гордишься? Расскажи о своем самом ярком результате — нам важно увидеть твой бэкграунд и то, как ты умеешь доводить дело до конца."
    },
    {
        question: "2. План на ближайшие годы",
        answer: "В какой вуз и на какой факультет ты мечтаешь поступить? Как участие в смене поможет тебе сделать первый шаг к этой цели и подготовиться к университетской нагрузке? Расскажи про университет мечты. Нам важно понять, как участие в смене повлияет на достижение твоих целей."
    },
    {
        question: "3. Текущие знания и «пробелы»",
        answer: "Какая тема в предмете тебе никак не дается, хотя ты честно пытаешься её понять? Расскажи, как именно занятия на смене помогут тебе наконец «пробить» эту стену. Не бойся признаться в пробелах. Нам важно увидеть, что ты понимаешь свои слабые места и готов над ними работать, а не просто хочешь «послушать что-нибудь интересное»."
    },
    {
        question: "4. Твой вклад",
        answer: "Чем ты можешь быть полезен или интересен другим ребятам? Расскажи о своем хобби или навыке, который сможет удивить или вдохновить всех. Может, ты круто играешь на гитаре, знаешь всё о нейросетях или умеешь объяснять сложные вещи простыми словами. Расскажи, почему с тобой будет круто в одной команде."
    }
];
</script>