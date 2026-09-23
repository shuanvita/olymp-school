<template>
    <NapravlenieMain :title="'Химия'" :descr="'Систематизируем знания по неорганической и органической химии, разбираем сложные расчётные задачи и экспериментальные задания. Готовим к решению задач уровня муниципального, регионального и заключительного этапов ВсОШ, а также перечневых олимпиад'" :img="'/Main/Chem.png'" />
  

    <NapravlenieNextSmen :type="'chem'" @openFormReg="openFormReg"/>
    <NapravleniePobeda :type="'chem'"/>
    <NapravlenieMetodist :slides="metodist"/>
    <NapravlenieProgramChem @openFormReg="openFormReg"/>
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
    title: 'Химия | Олимпиадные школы МФТИ',
    ogTitle: 'Химия | Олимпиадные школы МФТИ',
    description: 'Подготовка школьников к олимпиадам по химии с топовыми преподавателями МФТИ и членами жюри олимпиад. Систематизируем знания по неорганической и органической химии, разбираем сложные расчётные задачи и экспериментальные задачи уровня ВСОШ. На кампусе МФТИ.',
    ogDescription: 'Подготовка школьников к олимпиадам по химии с топовыми преподавателями МФТИ и членами жюри олимпиад. Систематизируем знания по неорганической и органической химии, разбираем сложные расчётные задачи и экспериментальные задачи уровня ВСОШ. На кампусе МФТИ.',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по химии, олимпиадная химия, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, открытая олимпиада школьников, московская олимпиада школьников, Высшая проба, Покори Воробьевы горы, Открытая олимпиада по химии, сеченовская олимпиада, юные таланты, Шаг в будущее, Ломоносов, подготовка к олимпиадам по химии, всесибирская открытая олимпиада школьников, , курсы подготовки к олимпиадам по химии, олимпиадная химия, подготовка к олимпиадам по химии, химия для школьников, олимпиады по химии, интенсив по химии, выездные школы, летние смены олимпиадных школ, зимние смены, олимпиадных школ, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-10.34.19.png',
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
    { name: 'Тихонов <br/>Артём Витальевич', doljn: 'методист', photo:'/Metod/chem1.png', profi: 0, descr: '<ul class="list-disc pl-4 flex flex-col gap-3"><li>Заместитель главного тренера сборной Москвы по Химии</li><li>Заведующий кафедры химии Ассоциации победителей олимпиад</li><li>Преподаватель физической и аналитической химии</li></ul>' },
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