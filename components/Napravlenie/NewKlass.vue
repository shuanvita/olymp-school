<template>
    <BaseSection aria-labelledby="nextsmen-heading" class="mt-10!">
        <div class="max-w-(--breakpoint-layout) mx-auto">
               
                    <BaseHeading class="mb-18 max-[800px]:mb-8 max-[500px]:mb-5">
                        Новые группы
                    </BaseHeading>
                    <div class="grid grid-cols-2 max-[700px]:grid-cols-1 gap-8 w-full">
                        <div class="relative flex flex-col bg-[#EDD9FF] rounded-2xl px-8 py-11 pr-22">
                            <img class="absolute max-w-[168px] max-[900px]:max-w-[145px] max-[750px]:max-w-[115px] w-full -top-1/5 max-[900px]:-top-10 right-0" src="/NewGroup/newgroup1.png" alt="">
                            <h3 class="text-3xl font-semibold  mb-3 max-w-[330px] max-[900px]:text-2xl">
                                Промышленная разработка
                            </h3>
                            <span class="font-bold italic mb-9 text-base">
                                смена август 1.0
                            </span>
                            <p class="text-base">
                                Освоите ключевые инструменты современной разработки: Git, CI/CD, SQL, Docker, unit-тестирование и создание сетевых приложений на Flask.<br/>
                                Научитесь работать как в индустрии — от написания кода до развёртывания и поддержки проекта в продакшене
                            </p>
                        </div>
                        <div class="relative flex flex-col bg-[#EDD9FF] rounded-2xl px-8 py-11 pr-22 max-[900px]:pr-6">
                            <img class="absolute max-w-[231px] max-[900px]:max-w-[195px] max-[750px]:max-w-[165px] w-full -bottom-1/5 right-0" src="/NewGroup/newgroup2.png" alt="">
                            <h3 class="text-3xl font-semibold mb-3 max-w-[330px] max-[900px]:text-2xl">
                                Язык программирования Go
                            </h3>
                            <span class="font-bold italic mb-9 text-base">
                                смена август 2.0
                            </span>
                            <p class="text-base">
                               Освоите Go — язык, который проще в освоении, чем C++, и используется для разработки быстрых веб-сервисов. В финале смены разработаете собственный веб-сервис — с реальной логикой и рабочим функционалом
                            </p>
                        </div>
                    </div>

                </div>
                
    </BaseSection>
</template>
<script setup>
const props = defineProps(['type']);
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>
<style scoped>
.bg{
    background: linear-gradient(98deg, rgba(107, 52, 171, 0.54) 34.43%, rgba(148, 35, 227, 0.60) 116.93%);
}</style>