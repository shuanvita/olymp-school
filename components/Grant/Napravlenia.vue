<template>
    <BaseSection aria-labelledby="smeni-heading">
        <div class="space-y-9 mt-15 overflow-hidden max-w-(--breakpoint-layout) mx-auto">
            <BaseHeading id="napravlenie" class="text-[40px] max-[768px]:text-[34px] max-[550px]:text-[28px] max-[550px]:leading-[32px]">
                Направления олимпиадных школ
            </BaseHeading>

            <ul class="flex flex-wrap gap-4 max-xmd:gap-2 ">
                <li
                    class="rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a class="flex px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 " href="https://edu.mipt.ru/olymp-school/math/">Математика</a></li>
                <li
                    class="rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a class="flex px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 " href="https://edu.mipt.ru/olymp-school/physics/">Физика</a></li>
                <li
                    class="rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a class="flex px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 " href="https://edu.mipt.ru/olymp-school/informatics/">Информатика</a></li>
                <!-- <li
                    class="px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a href="https://edu.mipt.ru/olymp-school/informatics/">Информационная безопасность</a></li> -->
                <li
                    class="rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a class="flex px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 " href="https://edu.mipt.ru/olymp-school/ml/">Машинное обучение</a></li>
                <li
                    class="rounded-4xl bg-primary-light text-[24px] leading-6 max-xmd:text-[16px] max-xmd:leading-5 font-semibold text-[#000C1F]">
                    <a class="flex px-7 py-5  max-xmd:px-3.5 max-xmd:py-2.5 " href="https://edu.mipt.ru/olymp-school/chemistry/">Химия</a></li>
            </ul>
            <div
                class="flex items-center gap-24 max-xmd:gap-5 max-[660px]:flex-col max-[660px]:items-start max-[660px]:gap-2">
                <p class="text-xl text-black max-w-[500px] font-medium">Информацию о каждом направлении и
                    датах проведения смен можно найти на страницах направлений</p>

                <a href="https://edu.mipt.ru/olymp-school/#direction" rel="noopener noreferrer"
                    class="not-xl:hidden flex items-center gap-3 group text-base leading-5 font-semibold py-4 px-10 border border-primary rounded-[55px] transition-colors text-primary hover:bg-primary hover:text-white focus-visible:outline-offset-4">
                    Подробнее о сменах <svg class="group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        viewBox="0 0 16 16" fill="none">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" class="group-hover:stroke-white" stroke="#882ABF" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></a>


            </div>
        </div>
    </BaseSection>
</template>
<script setup></script>