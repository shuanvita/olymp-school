<template>
    <NapravlenieMain :title="'Физика'" :descr="'Программа для углубленной олимпиадной подготовки. Разбираем олимпиадные приемы и учимся решать задачи уровня муниципального и регионального этапа ВсОШ'" :img="'/Main/Ph.png'" />
    
    <NapravlenieWinterBanner2027 @openFormReg="openFormReg"/>
    <!-- <NapravlenieNextSmen :type="'fiz'" @openFormReg="openFormReg"/> -->
    <NapravleniePobeda :type="'fiz'"/>
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramFiz @openFormReg="openFormReg" />
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
    title: 'Физика | Олимпиадные школы МФТИ',
    ogTitle: 'Физика | Олимпиадные школы МФТИ',
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
    { name: 'Колдунов <br/>Леонид Модестович', doljn: 'методист', photo:'/Metod/ph.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Кандидат физико-математических наук</li><li>Заместитель директора ЛФИ (МФТИ)</li><li>Преподаватель кафедры общей физики МФТИ</li><li>Входил в состав жюри заключительного этапа Всероссийской олимпиады по физике и олимпиады имени Максвелла</li><li>Тренер юниорской сборной, которая представляет Россию на естественно-научной международной олимпиаде</li></ul>' },
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