<template>
  <div class="marquee-container overflow-hidden whitespace-nowrap w-full bg-[#2272f4] py-2.5 max-[768px]:py-1.5">
    <div class="marquee-content">
      <!-- Контент дублируется, чтобы не было разрывов -->
      <slot />
      <slot />
      <slot />
      <slot />
      <slot />
      <slot />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.marquee-content {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

/* Эффект паузы при наведении */
.marquee-content:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>