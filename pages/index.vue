<template>
    <LayoutMarquee>
        <span class="px-3 text-white font-semibold">Идет регистрация</span>
        <span class="px-3 text-white font-semibold">Ближайшие смены</span>
    </LayoutMarquee>
    <MainSlider />
    <MainQuoteMaleev />
    <MainAbout /> 
    <MainAtmosfera />

    <MainPredmetPredmets />

    <MainDateSmeni />
    <MainSmeniOchno :type="'main'"/>
    <LayoutPrice :type="'main'" />

    <!-- <MainGrantiNew /> -->
</template>
<script setup>
useSeoMeta({
    title: 'Олимпиадные школы МФТИ | Готовим победителей и призёров всероссийских школьных олимпиад с 2013 года',
    ogTitle: 'Олимпиадные школы МФТИ | Готовим победителей и призёров всероссийских школьных олимпиад с 2013 года',
    description: 'Олимпиадные школы МФТИ — университетский лагерь для подготовки школьников 7-11 классов к всероссийским и международным олимпиадам по физике, математике, информатике, химии и ИИ. Очные смены на кампусе Физтеха с топовыми преподавателями',
    ogDescription: 'Олимпиадные школы МФТИ — университетский лагерь для подготовки школьников 7-11 классов к всероссийским и международным олимпиадам по физике, математике, информатике, химии и ИИ. Очные смены на кампусе Физтеха с топовыми преподавателями',
    keywords: 'Олимпиадные школы МФТИ, подготовка к олимпиадам, олимпиады по физике, олимпиады по математике, олимпиады по информатике, олимпиады по химии, машинное обучение для школьников, искусственный интеллект, олимпиады по искусственному интеллекту, гранты на обучение, дополнительное образование МФТИ, летние смены МФТИ, зимние смены МФТИ, интенсив к олимпиадам, подготовка к поступлению в вуз, ВсОШ, перечневые олимпиады, топовые преподаватели МФТИ, подготовка к ВсОШ, подготовка к олимпиадам ВсОШ, олимпиады РСОШ, БВИ, Физтех, подготовка к РСОШ, выездные школы, летние смены олимпиадных школ, зимние смены олимпиадных школ, открытая олимпиада, всесибирская олимпиада, покори воробьевы горы, Высшая проба, Ломоносов, московская олимпиада школьников, летняя школа МФТИ',
    ogImage: 'https://it-edu.com/mipt-school/wp-content/uploads/2026/03/Снимок-экрана-2026-03-02-в-15.52.01.png',
    twitterCard: 'summary_large_image',
})
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