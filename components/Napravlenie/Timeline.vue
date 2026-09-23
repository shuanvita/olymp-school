<template>
    <BaseSection aria-labelledby="about-heading">
        <div class="max-w-(--breakpoint-layout) mx-auto justify-center">
            <h3 class="font-semibold text-xl text-[#000C1F] mb-2 text-center">Распорядок учебного дня</h3>
            <span class="text-base text-center flex justify-center mb-10 max-[850px]:mb-0">В выходные и дни написания олимпиад расписание
                меняется.</span>

            <div class="relative">
                <picture class="w-full max-[850px]:max-w-[400px] max-[500px]:max-w-[330px] max-[850px]:flex max-[850px]:mx-auto">
                    <source media="(min-width:850px)" srcset="/Timeline/timeline.png">
                    <img src="/Timeline/timeline_mob.png" class="w-full" alt="">
                </picture>
                
            </div>

            <BaseButton as="a" @click="openFormReg()"  class="max-w-[260px] mt-10 flex justify-center text-center">
                Зарегистрироваться</BaseButton>

        </div>
    </BaseSection>
</template>
<script setup>
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>