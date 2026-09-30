<template>
    <NapravlenieMain :title="'Информационная <br/>безопасность'" :descr="'Практический интенсив по основам защиты информации в современном цифровом мире: изучаем принципы криптографии, сетевую безопасность и готовим  проекты для участия в олимпиадах и конкурсах.'" :img="'/Main/infobez.png'" />
   
    <NapravlenieWinterBanner2027 @openFormReg="openFormReg"/>
    <!-- <NapravlenieNextSmen :type="'ml'" @openFormReg="openFormReg"/> -->
    <NapravleniePobeda :type="'cybersecurity'"/>
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramInfobez @openFormReg="openFormReg"/>
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
    title: 'Информационная безопасность | Олимпиадные школы МФТИ',
    ogTitle: 'Информационная безопасность | Олимпиадные школы МФТИ',
    description: 'Практический интенсив по информационной безопасности в МФТИ с топовыми преподавателями и методистами. Изучаем криптографию, сетевую безопасность, работу в Linux и анализ уязвимостей. Готовим проекты для олимпиад и конкурсов. На кампусе МФТИ.',
    ogDescription: 'Практический интенсив по информационной безопасности в МФТИ с топовыми преподавателями и методистами. Изучаем криптографию, сетевую безопасность, работу в Linux и анализ уязвимостей. Готовим проекты для олимпиад и конкурсов. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, информационная безопасность для школьников, олимпиады по информационной безопасности, криптография для школьников, анализ уязвимостей, Linux для школьников, CTF для начинающих, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ информационная безопасность, перечневые олимпиады, топовые преподаватели МФТИ, подготовка к ВсОШ, олимпиады РСОШ, БВИ, Физтех, Национальная технологическая олимпиада, НТО, профиль информационная безопасность, Олимпиада КД НТИ, РУКОД, СибГУТИ, CTF, кружок по информационной безопасности, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ по информационной безопасности, курс по информационной безопасности, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/04/Снимок-экрана-2026-04-17-в-14.36.25.png',
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
    { name: 'Подлесных <br/>Дмитрий Артурович', doljn: 'методист', photo:'/Metod/infobez.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Старший преподаватель кафедры информатики и вычислительной математики  МФТИ, тренер команды МФТИ по информационной безопасности</li><li>В 2025 году под его руководством в МФТИ защищена магистерская диссертация, 3 выпускных квалификационных работы бакалавра, все с высшей оценкой —  отлично.</li></ul>' },
    //{ name: 'Масалович <br/>Андрей Игоревич', doljn: '«Кибердед»', photo:'/Metod/infobez2.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Президент Консорциума «Инфорус»</li><li>Кандидат физико-математических наук</li><li>Разработчик технологии интернет-разведки Avalanche</li><li>Подполковник спецслужб в отставке</li><li>Блогер, автор книги «Кибердед знает»</li><li>Специалист по связям с реальностью</li></ul>' },
    //{ name: 'Скляров <br/>Дмитрий Витальевич', doljn: '', photo:'/Metod/infobez3.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Руководитель отдела анализа приложений Positive Technologies</li><li>Разработчик алгоритма программы Advanced eBook Processor</li><li>В течение ряда лет преподавал на кафедре «Информационная безопасность» факультета «Информатика и системы управления» МГТУ им. Баумана</li><li>Автор книги «Искусство защиты и взлома информации»</li></ul>' },
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