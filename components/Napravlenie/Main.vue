<template>
    <BaseSection aria-labelledby="about-heading" class="mb-10 mt-10!">
        <div
            class="max-w-(--breakpoint-layout) mx-auto flex justify-between items-center max-[800px]:flex-col max-[800px]:gap-5">
            <div class="max-[800px]:items-center max-[800px]:flex max-[800px]:flex-col">
                <h2 class="font-bold text-[30px] max-[1000px]:text-[26px] max-[900px]:text-[24px] max-[500px]:text-[18px] max-[600px]:text-center">
                    <span class="font-nauryzRedKeds">ОЛИМПИАДНЫЕ</span> ШКОЛЫ МФТИ
                </h2>
                <h1 class="font-extrabold text-primary text-[72px] leading-[75px] uppercase mt-3 max-[1000px]:text-[62px] max-[1000px]:leading-[70px] max-[900px]:text-[55px] max-[900px]:leading-[52px] max-[500px]:text-[32px] max-[500px]:leading-[30px]"
                    v-html="props.title">
                </h1>
                <div :class="[props.type == 'fiz1' ? 'text-[18px]':'text-[22px]', 'font-semibold max-w-[450px] max-[1000px]:text-xl max-[900px]:text-lg mt-7 flex max-[800px]:text-center max-[500px]:text-base']"
                    v-html="props.descr"></div>
            </div>
            <div>
                <img class="max-w-[500px] max-[1000px]:max-w-[400px] max-[900px]:max-w-[350px] w-full" :src="withBase(props.img)" alt="">
            </div>
        </div>
    </BaseSection>
</template>
<script setup>
const props = defineProps(['title', 'img', 'descr', 'type']);
</script>