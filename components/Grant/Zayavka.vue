<template>
    <BaseSection aria-labelledby="granti-heading" class="">
        <div
            class="space-y-9 rounded-2xl relative overflow-hidden max-w-(--breakpoint-layout) bg-[#FF9900] px-14 max-xmd:px-8 py-10 pb-2 mx-auto max-[500px]:pb-6">
            <div class="flex items-center justify-start gap-5 max-[768px]:gap-3 relative z-20 max-[768px]:flex-col max-[768px]:items-start">
                <h2 class="font-bold text-[40px]  max-[768px]:text-[34px] max-[550px]:text-[28px] max-[550px]:leading-[32px] font-nauryzRedKeds text-white uppercase">
                    Как ПОДАТЬ ЗАЯВКУ <br />ШКОЛЬНИКУ?
                </h2>
                <span class="bg-primary p-3 rounded-2xl text-white text-center text-base font-semibold max-[768px]:flex">до 3 мая <br class="max-[768px]:hidden"/>2026</span>
            </div>
            <div class="grid grid-cols-3 z-20 relative gap-10  max-xmd:grid-cols-1 max-xmd:gap-7.5 max-[768px]:gap-5 max-[768px]:mt-0">
                <div
                    class="bg-[#FFF5CF] flex flex-col gap-3 items-center justify-center rounded-2xl overflow-hidden px-12 py-6 max-xmd:px-6 max-w-[485px] max-xmd:max-w-[452px]">
                    <p class="text-base leading-6 font-medium text-center">Оставь заявку на сайте, выбрав направление и смену</p>
                    <a @click="openFormReg()"  rel="noopener noreferrer" class="text-base cursor-pointer flex items-center gap-3 leading-5 font-semibold py-3 px-6 border border-primary rounded-[55px] transition-colors text-primary hover:bg-primary hover:text-white focus-visible:outline-offset-4 group"> Оставить заявку <svg class="group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 16 16" fill="none">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" class="group-hover:stroke-white" stroke="#882ABF" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></a>
                </div>
                <div
                    class="bg-[#FFF5CF] flex items-center justify-center rounded-2xl overflow-hidden px-12 py-6 max-xmd:px-6 max-w-[485px] max-xmd:max-w-[452px]">
                    <p class="text-base leading-6 font-medium text-center">Зарегистрируйтесь и заполните анкету в личном
                        кабинете</p>
                </div>
                <div
                    class="bg-[#FFF5CF] flex items-center justify-center rounded-2xl overflow-hidden px-12 py-6 max-xmd:px-6 max-w-[485px] max-xmd:max-w-[452px]">
                    <p class="text-base leading-6 font-medium text-center">В разделе подачи заявки на грант прикрепите скан диплома, мотивационное письмо, а также другие достижения (при наличии)</p>
                </div>
            </div>
            <img class="absolute -bottom-1/3 right-0 max-w-[475px] w-full" src="/Granti/bg.png" alt="">
            <img class="absolute bottom-0 right-0 max-w-[700px] w-full" src="/Grant/zayavka.png" alt="">
        </div>
    </BaseSection>
</template>
<script setup>
const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>
<style scoped>
.shadow_custom {
    box-shadow: 0 4px 4px 0 #D77100;
}
</style>