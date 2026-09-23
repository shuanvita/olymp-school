<script setup lang='ts'>
// Данные для секции "ДЛЯ КОГО?" с локальными изображениями
const items = [
  {
    image: "/ForWho/1.png",
    alt: "Для школьников, которые интересуются точными науками"
  },
  {
    image: "/ForWho/2.png",
    alt: "Для тех, кто участвовал в олимпиадах"
  },
  {
    image: "/ForWho/3.png",
    alt: "Для школьников, которые планируют участвовать в олимпиадах"
  }
]
</script>

<template>
  <BaseSection
    aria-labelledby="for-whom-heading"
    class="bg-white"
    type="none"
  >
    <div class="px-primary-padding-layout-r">
      <!-- Заголовок -->
      <BaseHeading
        id="for-whom-heading"
        class="mb-16"
      >
        ДЛЯ КОГО?
      </BaseHeading>

      <!-- Три карточки -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-white rounded-base overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Контейнер для изображения -->
          <div class="relative bg-white rounded-base overflow-hidden">
            <NuxtImg 
              :src="item.image"
              :alt="item.alt"
              class="w-full h-auto object-contain mx-auto rounded-base"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped>
/* Дополнительные стили для адаптивности */
@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .grid {
    gap: 1.5rem;
  }
}
</style> 