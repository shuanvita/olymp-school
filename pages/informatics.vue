<template>
    <NapravlenieMain :title="'Информатика'" :descr="'Погружение в олимпиадное программирование. Упор на алгоритмы, структуры данных и тактику решения задач, соответствующих уровню от регионального до заключительного этапа ВсОШ и Открытой олимпиады школьников'" :img="'/Main/Inf.png'" />
    
    <NapravlenieWinterBanner2027 @openFormReg="openFormReg" />
    <!-- <NapravlenieNextSmen :type="'inf'" @openFormReg="openFormReg"/> -->
    <NapravleniePobeda :type="'inf'" />
    <NapravlenieMetodist :slides="metodist"/>
    <!-- <NapravlenieNewKlass /> -->
    <NapravlenieProgramInf @openFormReg="openFormReg"/>
    <MainSmeniOchno />
    <NapravlenieTimeline  @openFormReg="openFormReg"/>
    <LayoutPrice @openFormReg="openFormReg"/>
    <NapravlenieKak :info="steps" @openFormReg="openFormReg"/>
    <NapravlenieTeach />

    <LayoutSmeniPopup :is-open="isOpen"  :close-modal="closeModal" />
</template>
<script setup>
import { ym_event } from '../composables/metrika'
useSeoMeta({
    title: 'Информатика | Олимпиадные школы МФТИ',
    ogTitle: 'Информатика | Олимпиадные школы МФТИ',
    description: 'Подготовка школьников к олимпиадам по информатике и программированию с топовыми преподавателями МФТИ и членами жюри олимпиад. Упор на алгоритмы, структуры данных и тактику решения задач, соответствующих уровню от регионального до заключительного этапа ВсОШ и Открытой олимпиады школьников. На кампусе МФТИ.',
    ogDescription: 'Подготовка школьников к олимпиадам по информатике и программированию с топовыми преподавателями МФТИ и членами жюри олимпиад. Упор на алгоритмы, структуры данных и тактику решения задач, соответствующих уровню от регионального до заключительного этапа ВсОШ и Открытой олимпиады школьников. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по информатике, олимпиадное программирование, задачи по олимпиадному программированию, алгоритмическое программирование, спортивное программирование, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, топовые преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, открытая олимпиада школьников, московская олимпиада школьников, Высшая проба, Покори Воробьевы горы, Технокубок, Открытая олимпиада по информатике, Innopolis Open, когнитивные технологии, Шаг в будущее, олимпиада Физтех, Ломоносов, подготовка к олимпиадам по информатике, кружок, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ олимпиадного программирования, всесибирская открытая олимпиада школьников, Яндекс кружок, курсы подготовки к олимпиадам по информатике, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-10.35.22.png',
    twitterCard: 'summary_large_image',
})

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}


function openFormReg(){
    ym_event('open_reg_form');
    isOpen.value = true;
}

const steps = { kakprohodit: [{ descr: 'Зарегистрироваться', img: {node:{filePath: ''}} }, { descr: 'Заполнить анкету<br/>в личном кабинете', img: {node:{filePath: ''}} }, { descr: 'Оплатить обучение', img: {node:{filePath: ''}} }, { descr: 'Сбор документов для участия в смене', text: 'паспорт (или свидетельство о рождении), медицинская справка 079/у, справка об эпидемиологическом окружении (срок действия справки составляет 3 дня), полис ОМС и согласие родителей', img: {node:{filePath: ''}} }] };

const metodist = ref([
    { name: 'Кондаков <br/>Семён Васильевич', doljn: 'методист', photo:'/Metod/Inf1.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Заведующий кафедрой программирования параллели классов в ЦПМ</li><li>Главный методист секции олимпиадного программирования в предуниверситарии МИФИ</li><li>Тренер сборной команды ЦПМ на IMMC</li><li>Преподаватель алгоритмов и программирования на С++ на ФКН  ВШЭ (для ПМИ, ПИ, КНАД и ПАД)</li><li>Лектор предмета Алгоритмический Инструментарий на магистратуре «Инженерия Данных», ФКН.</li><li>Старший преподаватель на 7 интенсивах по олимпиадному программированию от ВШЭ ФКН в Иннополисе, Санкт-Петербурге, Тюмени, Уфе, Оренбурге, Набережных Челнах, Ставрополе</li></ul>' },
    //{ name: 'Белков <br/>Иван Иванович', doljn: 'методист', photo:'/Metod/Inf2.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Призёр ВсОШ по математике 2018, 2019</li><li>Семинарист по Алгоритмам и Структурам Данных в МФТИ</li><li>Член жюри олимпиады Innopolis Open 2025, 2026</li></ul>' },
]);
// const responseNews = await fetch('https://vserosinf.ru/graphql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         query: `query GetAllNews {
//                     new {
//                         nodes {
//                         id
//                         newsGraph {
//                             descr
//                             title
//                             img {
//                                 node {
//                                     filePath
//                                 }
//                             }
//                             metki
//                         }
//                         }
//                     }
//                 }`,
//         variables: {},
//     }),
// });

// const news = await responseNews.json();

// const responseDnewnik = await fetch('https://vserosinf.ru/graphql', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         query: `query GetAllDnevniki {
//                 dnevnik {
//                     nodes {
//                     dnevniksId
//                     slug
//                     dnevnik {
//                         name
//                         content
//                         contentKratko
//                         day
//                         gallery {
//                         nodes {
//                             filePath
//                         }
//                         }
//                     }
//                     }
//                 }
//                 }`,
//         variables: {},
//     }),
// });

//const dnevniki = await responseDnewnik.json();
</script>