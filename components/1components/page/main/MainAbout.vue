<script setup lang='ts'>
import { ym_event } from '../../../composables/metrika'
const props = 
  defineProps<{
    info?: any,
    color?: any
  }>()
// const items = [
//   'Уникальная система Физтеха',
//   'Поступление в топовые вузы',
//   'Сообщество талантов',
//   'Победы в Олимпиадах',
// ]

const items: any[] = [];
const tabDescriptions : any[] = [];
props.info.main.tabs.forEach((item: any) => {
  items.push(item.name);
  tabDescriptions.push(item.descr);
});
const bubbles = props.info.main.textnum;


const activeDescription = ref({
  index: 0,
  description: tabDescriptions[0],
})

function setDescription(index: number) {
  ym_event("main_tab_"+index);
  activeDescription.value.index = index
  activeDescription.value.description = tabDescriptions[index]
}
const isShowing0 = ref(true)
const isShowing1 = ref(false)
const isShowing2 = ref(false)

setInterval(()=>{
    if(isShowing0.value == true){
      isShowing1.value = true;
      isShowing0.value = false;
      isShowing2.value = false;
    }else{
      if(isShowing1.value == true){
        isShowing2.value = true;
        isShowing0.value = false;
        isShowing1.value = false;
      }else{
        if(isShowing2.value == true){
          isShowing0.value = true;
          isShowing2.value = false;
          isShowing1.value = false;
        }
      }
    }
  }, 6000);
</script>

<template>
  <BaseSection
    aria-labelledby="about-heading"
    class="xl:mx-11.5 [--width-block-quote:355px]"
    type="none"
  >
    <div class="-mb-10">
      <div
        class="relative z-20 not-sm:[clip-path:inset(0_round_var(--radius-base))]"
      >
        <div class="bg-primary rounded-base sm:pt-11.5 pt-5 xl:pl-30 lg:pl-10 px-5 sm:pb-10 pb-[490px] md:space-y-9 space-y-5 md:overflow-hidden">
          <BaseHeading
            id="about-heading"
            class="text-white"
          >
            Главное
          </BaseHeading>
          <div class="md:space-y-10.5 space-y-7.5 relative z-20 text-white text-primary-paragraph-r sm:mr-[calc(var(--width-block-quote)+60px)] not-sm:max-w-[450px]">
            <div class="max-w-[613px]" v-html="props.info.main.text">
            </div>
            <div class="md:gap-y-5 gap-2 md:gap-x-4 flex flex-wrap text-black max-w-[663px]">
              <button
                v-for="(text, ind) in items"
                :key="ind"
                class="p-4 rounded-[40px] text-center cursor-pointer transition-colors"
                :class="[ind === activeDescription.index && props.color != 'blue' ? 'bg-[#F2B5FF]' : 'bg-white', ind === activeDescription.index && props.color == 'blue' ? 'bg-[#C2C4F1]' : 'bg-white']"
                
                
                @click="setDescription(ind)"
              >
                {{ text }}
              </button>
            </div>
            <div class="max-w-[717px] flex items-center min-h-32 md:p-4 p-2.5 md:border-4 border-2 border-white rounded-xl not-sm:-mt-2.5" v-html="activeDescription.description">
           
            </div>
          </div>
        </div>

        <div>
          <HeadlessTransitionRoot
            :show="isShowing0"
            as="template"
          >
      
        <HeadlessTransitionChild
         
          enter="transition-opacity duration-1075"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-700"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="absolute sm:bottom-5.5 bottom-14 lg:right-13 right-5 max-[450px]:left-5">
            <div class="py-6.5 px-3 max-w-(--width-block-quote) mt-auto before:bg-[#09060aa6] before:backdrop-blur-xs before:rounded-3xl before:absolute relative before:inset-0 before:z-10 text-white text-base">
              <div class="md:space-y-8 space-y-5 relative z-20 font-nunito-sans">
                <p class="font-bold">
                  «Мы делаем всё возможное для развития творческого потенциала и научного мышления у школьников, помогаем им готовиться к успешному участию в олимпиадах и вдохновляем на будущие достижения»
                </p>

                <span class="text-base font-normal">Алексей Викторович Малеев,<br/>
                  основатель Олимпиадных школ</span>
              </div>
            </div>
          </div>

          <img
            class="absolute sm:right-5 max-[450px]:-right-38.5 sm:bottom-0 -bottom-13 lg:w-[48%] min-[920px]:w-[60%] sm:w-[75%] w-[523px] not-sm:max-w-max aspect-[1.01] pointer-events-none"
            src="https://it-edu.com/mipt-school/wp-content/uploads/2025/04/av.png"
            alt="Алексей Викторович Малеев"
          >

          <svg
            aria-hidden="true"
            class="absolute right-0 -top-17 w-[13.6%] max-[950px]:hidden"
            viewBox="0 0 181 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.5088 133.527C52.8311 133.888 58.2322 134.223 63.5624 134.724C88.769 137.26 111.954 145.28 129.148 159.626C146.595 174.176 157.305 194.65 170.694 212.774C184.084 230.898 201.483 247.455 226.732 250.76C232.398 251.508 238.742 251.471 244.752 248.339C250.758 245.138 255.573 237.908 253.464 233.248C251.638 229.35 246.146 228.83 241.439 227.989C221.8 224.454 209.562 209.661 201.352 193.65C193.142 177.64 187.631 159.628 176.485 145.695C163.88 130.095 144.538 120.419 123.191 115.083C101.844 109.747 78.4794 108.542 54.9964 108.086C42.45 107.831 28.0063 106.689 24.3676 96.2589C20.5436 85.3897 31.8081 69.9791 44.8774 62.3848C57.9508 54.8603 72.2218 52.9277 85.9013 50.473C114.219 45.4703 144.72 36.4264 168.718 16.0185C173.086 12.2739 177.491 7.73554 178.423 2.88493C182.256 -17.5462 121.606 15.3669 111.99 18.6558C88.5792 26.6413 64.2394 28.0955 41.9008 40.8595C24.2343 50.9912 9.59598 67.8364 3.26656 85.2962C-0.279183 95.1082 -1.24077 105.161 2.17768 113.101C6.34524 122.936 16.6137 128.4 27.9206 130.901C34.1934 132.451 40.8136 133.037 47.5088 133.527Z"
              fill="white"
            />
          </svg>
        </HeadlessTransitionChild>
        </HeadlessTransitionRoot>
          <HeadlessTransitionRoot
            :show="isShowing1"
            as="template"
          >
      
        <HeadlessTransitionChild
         
          enter="transition-opacity duration-1075"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-700"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="absolute sm:bottom-5.5 bottom-14 lg:right-13 right-5 max-[450px]:left-5">
            <div class="py-6.5 px-3 max-w-(--width-block-quote) mt-auto before:bg-[#09060aa6] before:backdrop-blur-xs before:rounded-3xl before:absolute relative before:inset-0 before:z-10 text-white text-base">
              <div class="md:space-y-8 space-y-5 relative z-20 font-nunito-sans">
                <p class="font-bold">
                  «Результат стоит того: ребята сразу погружаются в атмосферу бота и находят решения даже очень сложных задач. Программа тоже уникальна — она сочетает в себе фундаментальную часть и олимпиадные тренды»
                </p>

                <span class="text-base font-normal">Израилева Арина,<br/>
                  Методист отделения Информатики</span>
              </div>
            </div>
          </div>

          <img
            class="absolute sm:right-5 max-[450px]:-right-38.5 sm:bottom-0 -bottom-13 lg:w-[48%] min-[920px]:w-[60%] sm:w-[75%] w-[523px] not-sm:max-w-max aspect-[1.01] pointer-events-none"
            src="https://it-edu.com/mipt-school/wp-content/uploads/2025/02/image-40.png"
            alt="Израилева Арина"
          >

          <svg
            aria-hidden="true"
            class="absolute right-0 -top-17 w-[13.6%] max-[950px]:hidden"
            viewBox="0 0 181 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.5088 133.527C52.8311 133.888 58.2322 134.223 63.5624 134.724C88.769 137.26 111.954 145.28 129.148 159.626C146.595 174.176 157.305 194.65 170.694 212.774C184.084 230.898 201.483 247.455 226.732 250.76C232.398 251.508 238.742 251.471 244.752 248.339C250.758 245.138 255.573 237.908 253.464 233.248C251.638 229.35 246.146 228.83 241.439 227.989C221.8 224.454 209.562 209.661 201.352 193.65C193.142 177.64 187.631 159.628 176.485 145.695C163.88 130.095 144.538 120.419 123.191 115.083C101.844 109.747 78.4794 108.542 54.9964 108.086C42.45 107.831 28.0063 106.689 24.3676 96.2589C20.5436 85.3897 31.8081 69.9791 44.8774 62.3848C57.9508 54.8603 72.2218 52.9277 85.9013 50.473C114.219 45.4703 144.72 36.4264 168.718 16.0185C173.086 12.2739 177.491 7.73554 178.423 2.88493C182.256 -17.5462 121.606 15.3669 111.99 18.6558C88.5792 26.6413 64.2394 28.0955 41.9008 40.8595C24.2343 50.9912 9.59598 67.8364 3.26656 85.2962C-0.279183 95.1082 -1.24077 105.161 2.17768 113.101C6.34524 122.936 16.6137 128.4 27.9206 130.901C34.1934 132.451 40.8136 133.037 47.5088 133.527Z"
              fill="white"
            />
          </svg>
        </HeadlessTransitionChild>
        </HeadlessTransitionRoot>
        <HeadlessTransitionRoot
            :show="isShowing2"
            as="template"
          >
      
        <HeadlessTransitionChild
         
          enter="transition-opacity duration-1175"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity duration-700"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="absolute sm:bottom-5.5 bottom-14 lg:right-13 right-5 max-[450px]:left-5">
            <div class="py-6.5 px-3 max-w-(--width-block-quote) mt-auto before:bg-[#09060aa6] before:backdrop-blur-xs before:rounded-3xl before:absolute relative before:inset-0 before:z-10 text-white text-base">
              <div class="md:space-y-8 space-y-5 relative z-20 font-nunito-sans">
                <p class="font-bold">
                  «Летние олимпиадные школы МФТИ — это отличная возможность пожить на территории студгородка МФТИ и узнать много нового и интересного из олимпиадной физики»
                </p>

                <span class="text-base font-normal">Колдунов Леонид Модестович,<br/>
                  Методист отделения Физики</span>
              </div>
            </div>
          </div>

          <img
            class="absolute sm:right-5 max-[450px]:-right-38.5 sm:bottom-0 -bottom-13 lg:w-[48%] min-[920px]:w-[60%] sm:w-[75%] w-[523px] not-sm:max-w-max aspect-[1.01] pointer-events-none"
            src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/image-41-1.png"
            alt="Колдунов Леонид Модестович"
          >

          <svg
            aria-hidden="true"
            class="absolute right-0 -top-17 w-[13.6%] max-[950px]:hidden"
            viewBox="0 0 181 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.5088 133.527C52.8311 133.888 58.2322 134.223 63.5624 134.724C88.769 137.26 111.954 145.28 129.148 159.626C146.595 174.176 157.305 194.65 170.694 212.774C184.084 230.898 201.483 247.455 226.732 250.76C232.398 251.508 238.742 251.471 244.752 248.339C250.758 245.138 255.573 237.908 253.464 233.248C251.638 229.35 246.146 228.83 241.439 227.989C221.8 224.454 209.562 209.661 201.352 193.65C193.142 177.64 187.631 159.628 176.485 145.695C163.88 130.095 144.538 120.419 123.191 115.083C101.844 109.747 78.4794 108.542 54.9964 108.086C42.45 107.831 28.0063 106.689 24.3676 96.2589C20.5436 85.3897 31.8081 69.9791 44.8774 62.3848C57.9508 54.8603 72.2218 52.9277 85.9013 50.473C114.219 45.4703 144.72 36.4264 168.718 16.0185C173.086 12.2739 177.491 7.73554 178.423 2.88493C182.256 -17.5462 121.606 15.3669 111.99 18.6558C88.5792 26.6413 64.2394 28.0955 41.9008 40.8595C24.2343 50.9912 9.59598 67.8364 3.26656 85.2962C-0.279183 95.1082 -1.24077 105.161 2.17768 113.101C6.34524 122.936 16.6137 128.4 27.9206 130.901C34.1934 132.451 40.8136 133.037 47.5088 133.527Z"
              fill="white"
            />
          </svg>
        </HeadlessTransitionChild>
        </HeadlessTransitionRoot>
        </div>
      </div>

      <div class="flex flex-col relative -top-10 z-10 rounded-base border-primary md:border-5 border-4 w-full xl:px-21 px-5 md:pt-21 pt-14 sm:pb-10 pb-5">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-[11.7%] md:gap-y-[34px] gap-y-7">
          <div
            v-for="(item, ind) in bubbles"
            :key="ind"
            class="flex flex-row md:gap-x-12 gap-x-4.5 items-center"
          >
            <h3
              class="bg-primary rounded-full text-white md:size-[154px] size-30 shrink-0 flex items-center justify-center md:text-primary-heading text-secondary-heading-md font-bold"
            >
              {{ item.num }}
            </h3>
            <p
              class="text-primary-paragraph-r md:max-w-[450px] max-w-[360px]"
              v-html="item.descr"
            />
          </div>
        </div>

        <BaseButton @click="ym_event('main_podrobnee')" as="a" href="about"  class="lg:ml-auto not-lg:mx-auto not-lg:mt-15">
          Подробно о нас
        </BaseButton>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
:root {
  --width-block-quote: 355px;
}
</style>
