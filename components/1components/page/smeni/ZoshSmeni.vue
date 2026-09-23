<script setup>
const items = [
    {
        title: 'ПРОЖИВАНИЕ',
        img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/Group-7543.png',
        style: 'max-width: 140px; left:10px; max-height: 93px;',
        descr: 'На сменах организовано комфортное и безопасное проживание: на кампусе МФТИ школьники размещаются в номерах квартирного типа с удобствами. 24/7 вместе с детьми будут находиться вожатые и медицинский персонал',

    },
    {
        title: 'ОБУЧЕНИЕ',
        img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/Group-7544.png',
        style: 'max-width: 95px; left:10px; max-height: 103px;',
        descr: 'Стандартный учебный день состоит из трёх лекционных пар, домашних заданий, а также дневных и вечерних дорешек. Кроме того, у школьников на смене есть чат с преподавателями и ассистентами, в котором они могут задавать вопросы',

    },
    {
        title: 'БЕЗОПАСНОСТЬ',
        img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/Group.png',
        style: 'max-width: 80px; left:10px; max-height: 107px;',
        descr: 'Безопасность детей является нашим приоритетом. На кампусе МФТИ все перемещения школьников между корпусами строго организованы и осуществляются только в сопровождении вожатых, территория круглосуточно находится под охраной',

    },
    {
        title: 'ПИТАНИЕ',
        img: 'https://it-edu.com/mipt-school/wp-content/uploads/2025/09/1Group.png',
        style: 'max-width: 135px; left:10px; max-height: 89px;',
        descr: 'Мы предлагаем сбалансированное пятиразовое питание с возможностью выбора блюд. Для детей, которым необходимо соблюдать диету, будет предложено специальное меню. Кроме того, у детей будет возможность посещать супермаркет в сопровождении вожатых',

    }
];
</script>
<template>
    <BaseSection aria-labelledby="calendar-heading" type="primary">
        <BaseHeading id="calendar-heading">
            Как мы живем и учимся
        </BaseHeading>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-14 pt-6">
            <div v-for="value in items" class="flex flex-col px-4 max-md:px-0">
                <div class="bg-primary rounded-xl relative text-center font-bold text-white py-2 text-primary-paragraph-r mb-7">
                    <img class="absolute max-md:!max-w-[70px] max-md:!max-h-[70px] top-0 -translate-y-[40%]" :style="value.style" :src="value.img" :alt="value.title">
                    <span>{{ value.title }}</span>
                </div>
                <p class="text-primary-paragraph-r" v-html="value.descr"></p>
            </div>
        </div>

    </BaseSection>
</template>
