<template>
    <NapravlenieMain :title="'Машинное <br/>обучение'" :descr="'Практическое введение в области ML через решение реальных аналитических задач на Python. Идеально для делающих первые шаги в искусственном интеллекте'" :img="'/Main/Ml.png'" />
    
    <NapravlenieWinterBanner2027 />
    <!-- <NapravlenieNextSmen :type="'ml'" @openFormReg="openFormReg"/> -->
    <NapravleniePobeda :type="'ml'"/>
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramMl @openFormReg="openFormReg"/>
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
    title: 'Машинное обучение | Олимпиадные школы МФТИ',
    ogTitle: 'Машинное обучение | Олимпиадные школы МФТИ',
    description: 'Практическое введение в машинное обучение для школьников делающих первые шаги в искусственном интеллекте. Решение аналитических задач на Python. На кампусе МФТИ.',
    ogDescription: 'Практическое введение в машинное обучение для школьников делающих первые шаги в искусственном интеллекте. Решение аналитических задач на Python. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по информатике, олимпиадное программирование, курсы по искусственному интеллекту, задачи по олимпиадному программированию, дополнительное образование МФТИ,  летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, открытая олимпиада школьников, московская олимпиада школьников, Высшая проба, Покори Воробьевы горы, Технокубок, Открытая олимпиада по информатике, Innopolis Open, когнитивные технологии, Шаг в будущее, Ломоносов, подготовка к олимпиадам по информатике, кружок олимпиадного программирования, всесибирская открытая олимпиада школьников, Яндекс кружок, курсы подготовки к олимпиадам по информатике, всероссийская олимпиада школьников по ИИ, олимпиада по ИИ, машинное обучение для школьников, олимпиады по искусственному интеллекту, подготовка к олимпиадам по ИИ, искусственный интеллект олимпиады, Python для школьников, анализ данных, ML для начинающих, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-10.34.57.png',
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
    { name: 'Жогов Андрей<br/>Проводов Арсений<br/>Байбулатов Амир', doljn: 'методисты', photo:'/Metod/ml.png', profi: 0, descr: '<p>Методисты отделения являются выпускниками МФТИ, методистами всероссийского проекта Код Будущего, разработчиками в крупнейших IT-компаниях страны, ведут семинары в МФТИ и входят в тренерский штаб сборной Российской Федерации по искусственному интеллекту.</p>' },
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