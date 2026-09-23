<template>
    <NapravlenieMain :title="'Математика'" :descr="'Учим видеть нестандартные подходы и осваивать методы решения задач, выходящих за рамки школьной программы, с акцентом на задания регионального этапа ВсОШ и перечневых олимпиад'" :img="'/Main/Math.png'" />
    
    <NapravlenieWinterBanner2027  @openFormReg="openFormReg"/>
    <!-- <NapravlenieNextSmen :type="'math'" @openFormReg="openFormReg"/> -->
    <NapravleniePobeda :type="'math'"/>
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramMath @openFormReg="openFormReg"/>
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
    title: 'Математика | Олимпиадные школы МФТИ',
    ogTitle: 'Математика | Олимпиадные школы МФТИ',
    description: 'Подготовка школьников к олимпиадам по математике в МФТИ с топовыми преподавателями МФТИ и членами жюри олимпиад. Нестандартные методы решения, разбор задач регионального и заключительного этапов ВсОШ. На кампусе МФТИ.',
    ogDescription: 'Подготовка школьников к олимпиадам по математике в МФТИ с топовыми преподавателями МФТИ и членами жюри олимпиад. Нестандартные методы решения, разбор задач регионального и заключительного этапов ВсОШ. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по математике, гранты на обучение, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, топовые преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, Физтех, Шаг в будущее, Олимпиада имени Эйлера, олимпиадная математика, подготовка к олимпиадам по математике, математика для школьников, ВсОШ математика, перечневые олимпиады по математике, преподаватели математики МФТИ, интенсив по математике, Саватеев, математик Саватеев, математика Саватеева, Покори Воробьевы горы, Росатом, Высшая проба, математическая олимпиада, московская олимпиада школьников, курсы по олимпиадной математике, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ, математический кружок, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-10.34.46.png',
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
    { name: 'Михайлова <br/>Анна Евгеньевна', doljn: 'методист', photo:'/Metod/math1.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Главный преподаватель ЛОС (ь) по математике<li>Лучший преподаватель 2024-2025 учебного года в Лицее НИУ ВШЭ</li><li>Методист в «Школково» Преподаватель математики лицея НИУ ВШЭ, Ассоциации победителей олимпиад и школы ЦПМ</li></ul>' },
    { name: 'Дениско <br/>Владена Владимировна', doljn: 'методист', photo:'/Metod/math2.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>МФТИ, методист отделения олимпиадных школ по математике</li><li>МФТИ (лаборант в лаборатории по математике)</li><li>Школа 2107 (учитель математики в старшей школе)</li><li>Международная школа Вундерпарк (учитель математики, учитель физики, преподаватель олимпиадной математики, 3-8 классы)</li><li>Сбер Образование (методист по математике)</li><li>Репетиторство (опыт 7 лет с 3-11 классами, школьная программа, ОГЭ, ЕГЭ, олимпиады перечня РСОШ, ВсОШ, МОШ)</li><li>Преподаватель олимпиадных школ МФТИ, ЦПМ, АПО (математика 7-11 класс)</li></ul>' },
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