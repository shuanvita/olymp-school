<script setup lang="ts">
// Статистика курса
const stats = [
  {
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3C1 1.89543 1.89543 1 3 1H15C16.1046 1 17 1.89543 17 3V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="5" width="3" height="2" fill="black"/>
<rect x="2" y="8" width="3" height="2" fill="black"/>
<rect x="6" y="8" width="3" height="2" fill="black"/>
<rect x="10" y="8" width="3" height="2" fill="black"/>
<rect x="14" y="8" width="3" height="2" fill="black"/>
<rect x="2" y="11" width="3" height="2" fill="black"/>
<rect x="6" y="11" width="3" height="2" fill="black"/>
<rect x="10" y="11" width="3" height="2" fill="black"/>
<rect x="14" y="11" width="3" height="2" fill="black"/>
<rect x="6" y="5" width="3" height="2" fill="black"/>
<rect x="10" y="5" width="3" height="2" fill="black"/>
<rect x="14" y="5" width="3" height="2" fill="black"/>
</svg>
`,
    text: '3 месяца'
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5556 10.7778L9 9V4.55556M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    text: '96 академических часов'
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2.94832C7.7531 0.691298 4.04301 0.581859 1 1.67161V16.5238C3.15533 15.153 7.03848 14.7122 9 17M9 2.94832V17M9 2.94832C10.2469 0.691298 13.957 0.581859 17 1.67161V16.5238C14.8447 15.153 10.9615 14.7122 9 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    text: '36 занятий'
  },
  {
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2.94832C7.7531 0.691298 4.04301 0.581859 1 1.67161V16.5238C3.15533 15.153 7.03848 14.7122 9 17M9 2.94832V17M9 2.94832C10.2469 0.691298 13.957 0.581859 17 1.67161V16.5238C14.8447 15.153 10.9615 14.7122 9 17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    text: 'старт 28 октября'
  }
]
</script>

<template>
  <div class="bg-[#C2C4F1] rounded-xl p-3 sm:p-4 md:p-6">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-0 text-[#2D1B69]">
      <div 
        v-for="(stat, index) in stats" 
        :key="index"
        :class="[
          'flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3',
          // Правые границы между элементами
          (index === 0 || index === 2) ? 'border-r border-[#2D1B69]/20' : '', // для мобильных 2 колонки
          index < 3 ? 'lg:border-r border-[#2D1B69]/20' : '', // для десктопа 4 колонки
          // Нижние границы для мобильных
          (index === 0 || index === 1) ? 'border-b lg:border-b-0 border-[#2D1B69]/20' : '',
          'text-center'
        ]"
      >
        <div class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" v-html="stat.icon"></div>
        <span class="font-medium text-xs sm:text-sm md:text-base leading-tight px-1">{{ stat.text }}</span>
      </div>
    </div>
  </div>
</template> 