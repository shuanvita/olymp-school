<template>
    <NapravlenieMain :type="'fiz1'" :title="'Инженерная физика'" :descr="'Курс через решение задач и выполнение практических работ знакомит с техническими приложениями физики: аэрогидродинамикой, физико-химической кинетикой, радиолокацией и электродинамикой. Темы курса будут полезны для участия в различных инженерных олимпиадах, в том числе, «Физтех.Инженер».'" :img="'/Main/Ph1.png'" />
     
    <NapravlenieNextSmen :type="'fiz1'" @openFormReg="openFormReg"/>
    <NapravleniePobeda :type="'fiz1'" />
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramFiz1 @openFormReg="openFormReg" />
    <MainSmeniOchno />
    <NapravlenieTimeline  @openFormReg="openFormReg"/>
    <LayoutPrice @openFormReg="openFormReg" />
    <NapravlenieKak :info="steps" @openFormReg="openFormReg" />
    <NapravlenieTeach />

    <LayoutSmeniPopup :is-open="isOpen"  :close-modal="closeModal" />
</template>
<script setup>
import { ym_event } from '../composables/metrika'
useSeoMeta({
    title: 'Инженерная физика | Олимпиадные школы МФТИ',
    ogTitle: 'Инженерная физика | Олимпиадные школы МФТИ',
    description: 'Подготовка школьников к олимпиадам по физике с топовыми преподавателями МФТИ и членами жюри олимпиад. Углублённое изучение, разбор задач регионального и заключительного этапов ВсОШ. На кампусе МФТИ.',
    ogDescription: 'Подготовка школьников к олимпиадам по физике с топовыми преподавателями МФТИ и членами жюри олимпиад. Углублённое изучение, разбор задач регионального и заключительного этапов ВсОШ. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по физике, гранты на обучение, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, топовые преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, Леонид Колдунов, Колдунов Леонид Модестович, Леонид Колдунов МФТИ, Физтех, Росатом, Ломоносов, Шаг в Будущее, интернет-олимпиада по физике, Олимпиада по физике имени Дж. Кл. Максвелла, Покори Воробьевы горы, Высшая проба, московская олимпиада школьников, курсы по подготовке к олимпиадам по физике, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-10.35.08.png',
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
    { name: 'Кулешов <br/>Павел Сергеевич', doljn: 'методист', photo:'/Metod/ph1.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Кандидат физико-математических наук</li><li>Старший научный сотрудник Центрального института авиационного моторостроения имени П. И. Баранова</li><li>Более 10 лет преподавания в МФТИ и физматклассах аэрокосмического направления</li><li>Составитель задач олимпиады «Физтех.Инженер»</li></ul>' },
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