<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary'
    as?: 'button' | 'a'
    href?: string
  }>(),
  {
    type: 'primary',
  },
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="btn p-4 px-8  text-primary-paragraph-lg rounded-[40px] cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-offset-4"
  >
    <slot />
  </component>
</template>
<style>
.btn{
  border-radius: 120px;
  color: white;
  position: relative;
  overflow: hidden;
  background: linear-gradient(0deg, #FE4C04 0%, #FF803D 100%);
  transition: all .5s;
  z-index: 1;
}
.btn::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  /* Градиент для ховера */
  background: linear-gradient(0deg, rgba(163, 0, 0, 0.60) 0%, rgba(163, 0, 0, 0.60) 100%), 
              linear-gradient(177deg, #FE0404 12.71%, #F99E00 171.74%);
  opacity: 0; /* Изначально скрыт */
  transition: opacity .5s ease; /* Плавно меняем прозрачность */
}

.btn:hover::before {
  opacity: 1; /* Показываем при наведении */
}
</style>
