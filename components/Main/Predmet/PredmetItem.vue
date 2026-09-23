<template>
    <div :href="props.info.link" class="rounded-2xl overflow-hidden bg-primary-light">
        <div class="flex relative items-center justify-between pt-7.5 pl-12 pr-10 pb-12 max-[580px]:px-5 max-[580px]:py-2.5 max-[580px]:pb-6 gap-4 max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-7">
            <img src="/People/bg.png" :class="['absolute max-w-[192px] w-full bottom-0', props.info.bgClass]" alt="">
            <div class="relative flex flex-col max-w-[710px] max-xmd:max-w-[400px] max-[800px]:max-w-full max-[800px]:w-full">
                <div class="flex gap-3 mb-7 max-[580px]:mb-3 items-center max-[580px]:flex-col-reverse max-[580px]:gap-5">
                    <h3 class="text-[48px] leading-[58px] max-xmd:text-[40px] max-xmd:leading-[50px] max-[580px]:text-[28px] max-[580px]:leading-[32px] font-light mr-3 max-[580px]:mr-0 uppercase">{{ props.info.name }}</h3>

                    <div class="flex gap-4 max-[580px]:ml-auto max-[580px]:gap-2">
                        <span v-for="value in props.info.tags" class="border text-sm leading-4 rounded-lg border-primary text-primary px-5 py-2.5 max-xmd:px-3 max-xmd:py-1">
                            {{ value }}
                        </span>
                    </div>

                </div>
                <p class="text-xl max-xmd:text-base leading-6 font-normal mb-9">{{ props.info.descr }}</p>

                <BaseButton @click="ym_event('more')" as="a" :href="props.info.link" class="max-w-[260px] max-[580px]:max-w-full max-[580px]:w-full text-center">Подробнее</BaseButton>

            </div>
            <div class="flex gap-5 max-[580px]:justify-center  max-[580px]:gap-6 max-[580px]:w-full">
                <div v-for="valuePeople in props.info.people" class="ralative flex flex-col items-center">
                    <img class="max-w-[171px] max-xmd:max-w-[150px] w-full mb-4" :src="valuePeople.img" :alt="valuePeople.name">
                    <div class="text-md font-normal text-center" v-html="valuePeople.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ym_event } from '../../../composables/metrika'
const props = defineProps(['info']);
</script>