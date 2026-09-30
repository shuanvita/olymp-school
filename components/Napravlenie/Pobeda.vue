<template>
    <BaseSection aria-labelledby="about-heading">
        <div class="max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="pobeda-heading" class="mb-16 max-[800px]:mb-8 max-[500px]:mb-5">
                Хочешь победить? <br/>— Приходи к нам
            </BaseHeading>

            <div class="grid grid-cols-3 max-[600px]:grid-cols-1 items-stretch gap-7">
                <div class="bg-primary-light rounded-4xl relative overflow-hidden flex flex-col  gap-6 py-8 px-2.5 pb-0 max-[1000px]:min-h-[230px]">
                    <div class="flex flex-col px-7 gap-6 max-[800px]:px-0 max-[600px]:px-5">
                        <h3 class="text-[20px] font-semibold max-[850px]:text-lg max-[850px]:leading-5 max-[870px]:text-base max-[600px]:text-[20px]">Топовая программа</h3>
                        <p v-if="props.type == 'inf'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по информатике</p>
                        <p v-if="props.type == 'fiz1'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым инженерным олимпиадам и олимпиадам по физике</p>
                        <p v-if="props.type == 'fiz'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по физике</p>
                        <p v-if="props.type == 'math'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по математике</p>
                        <p v-if="props.type == 'ml'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по информатике</p>
                        <p v-if="props.type == 'chem'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по химии</p>
                        <p v-if="props.type == 'cybersecurity'" class="text-base max-[870px]:text-sm max-[600px]:text-base">Мы разработали оптимальную программу подготовки к перечневым олимпиадам по информатике</p>
                    </div>
                    <img src="/Pobeda/1.png" class="max-w-[232px] w-full absolute -bottom-1 -right-2 max-[950px]:hidden max-[600px]:flex max-[600px]:relative max-[600px]:pb-3" alt="">
                </div>
                <div class="bg-primary-light rounded-4xl relative overflow-hidden flex flex-col  gap-6 py-8 px-2.5 pb-0">
                    <div class="flex flex-col px-7 gap-6 max-[800px]:px-0 max-[600px]:px-5">
                        <h3 class="text-[20px] font-semibold max-[850px]:text-lg max-[850px]:leading-5 max-[870px]:text-base max-[600px]:text-[20px]">Сильнейшие преподаватели</h3>
                    </div>
                    <img src="/Pobeda/2.png" class="w-full max-w-[313px] mx-auto" alt="">
                </div>
                <div class="bg-primary-light rounded-4xl relative overflow-hidden flex flex-col  gap-6 py-8 px-2.5 pb-0">
                    <div class="flex flex-col px-7 gap-6 max-[800px]:px-0 max-[600px]:px-5">
                        <h3 class="text-[20px] font-semibold max-[850px]:text-lg max-[850px]:leading-5 max-[870px]:text-base max-[600px]:text-[20px]">Атмосфера Физтеха</h3>
                    </div>
                    <img src="/Pobeda/3.png" class="w-full max-w-[323px] mx-auto" alt="">
                </div>
            </div>
        </div>
    </BaseSection>
</template>
<script setup>
const props = defineProps(['type']);
</script>