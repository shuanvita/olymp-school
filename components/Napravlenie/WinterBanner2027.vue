<script setup lang="ts">
/**
 * Баннер «Зимние смены 2027».
 * Источник: Figma, node 2791:2693 («зимние 2026»), файл oш-2026.
 * https://www.figma.com/design/hlLcFp5vZF53z01C6UHCY1/...?node-id=2470-15274
 *
 * Один макет (десктоп), адаптив под мобильные сделан самостоятельно:
 * на узких экранах текст/кнопка/теги идут в обычном потоке сверху,
 * фото-кластер и декор — под ними, без абсолютного позиционирования
 * "1 в 1" под маленький экран (в макете под мобильный отдельного
 * дизайна для этого баннера нет).
 *
 * TODO — заменить плейсхолдеры на реальные экспортированные ассеты
 * (см. /public/Winter/*, названия файлов соответствуют слоям в Figma):
 *   photo-1.jpg   — фото в большом круге слева
 *   photo-2.jpg   — фото в круге справа снизу (перевёрнутое в макете)
 *   photo-3.jpg   — фото в круге справа сверху
 *   astronaut.svg — иллюстрация космонавта-подарка
 *   maple-leaf.png — стеклянная снежинка/листик (используется 3 раза,
 *     разных размеров: ~120px, ~84px, ~40px)
 *
 * Шрифт заголовков в макете — "NauryzRedKeds" (декоративный, скруглённый).
 * Файла шрифта нет — ниже временный fallback на Manrope Bold с
 * увеличенным трекингом. Замените на реальный @font-face, когда будет
 * доступен файл шрифта.
 */
defineProps<{
  applyLink?: string
}>()

const emit = defineEmits(['openFormReg'])
function openFormReg(){
    emit('openFormReg');
}
</script>

<template>
  <section class="max-w-(--breakpoint-layout) mx-auto px-primary-padding-layout-r">
    <div
      class="
        relative overflow-hidden rounded-2xl bg-[#5045CF] px-6 py-8
        text-white

        sm:px-10 sm:py-10

        lg:aspect-[1129/555] lg:px-0 lg:py-0
      "
    >
      
      <img
        src="/Winter/maple-leaf.png"
        alt=""
        aria-hidden="true"
        class="
          pointer-events-none absolute top-[314px] left-[614px] hidden
          w-30

          lg:block
        "
      >
      <img
        src="/Winter/maple-leaf.png"
        alt=""
        aria-hidden="true"
        class="
          pointer-events-none absolute top-[26px] left-[844px] hidden
          w-21
          z-10
          lg:block
        "
      >
      <img
        src="/Winter/maple-leaf.png"
        alt=""
        aria-hidden="true"
        class="
          pointer-events-none absolute top-[38px] left-[813px] hidden w-10

          lg:block
        "
      >

      <div
        class="
          relative z-10 flex flex-col gap-8

          lg:block lg:size-full
        "
      >
        <!-- текстовый блок -->
        <div
          class="
            lg:absolute lg:top-[65px] lg:left-[112px] lg:w-[400px] relative z-40 
          "
        >
          <p
            class="
              font-nauryzRedKeds text-[40px] leading-[0.95] uppercase

              sm:text-[52px]
              text-center
              lg:text-[56px]
            "
          >
            зимние смены
          </p>
          <p
            class="
              font-nauryzRedKeds mt-1 text-[92px] leading-[0.85] uppercase
              text-center
              sm:text-[120px]

              lg:mt-3 lg:text-[140px]
            "
          >
            2027
          </p>

          <div class="mt-6 flex justify-center flex-wrap gap-3 lg:mt-10">
            <span
              class="
                rounded-2xl border border-white px-5 py-2.5 text-[14px]
                font-semibold uppercase

                sm:text-[16px]
              "
            >
              4-12 января
            </span>
            <span
              class="
                rounded-2xl border border-white px-5 py-2.5 text-[14px]
                font-semibold uppercase

                sm:text-[16px]
              "
            >
              8-11 классы
            </span>
          </div>

          <button
            @click="openFormReg" 
            target="_blank"
            class="
              mt-6 grid h-12.5 w-full max-w-100 place-items-center
              rounded-full bg-gradient-to-t from-[#DCE3FF] to-white
              text-[18px] font-semibold text-[#5045CF]
              transition-opacity
              mx-auto
              hover:opacity-90
              cursor-pointer
              sm:text-[20px]

              lg:mt-14
            "
          >
            Подать заявку
          </button>
        </div>

        <!-- фото-кластер -->
        <div
          class="
            relative mx-auto h-64 w-full max-w-100

            sm:h-80
            z-20
            lg:absolute lg:inset-0 lg:mx-0 lg:h-full lg:max-w-none
            max-lg:hidden
          "
        >
          <div
            class="
              absolute top-0 left-1/2 size-40 -translate-x-1/2
              overflow-hidden rounded-full border-2 border-white
              -rotate-[11.5deg]
              z-20
              sm:size-52

              lg:top-[47px] lg:left-[565px] lg:size-62 lg:translate-x-0
            "
          >
            <img src="/Winter/photo-1.jpg" alt="" class="size-full object-cover">
          </div>
          <div
            class="
              absolute top-6 right-2 size-24 overflow-hidden rounded-full
              border-2 border-white rotate-[10.6deg]
              z-20
              sm:size-32

              lg:top-[122px] lg:left-[849px] lg:size-51.5
            "
          >
            <img src="/Winter/photo-3.jpg" alt="" class="size-full object-cover">
          </div>
          <div
            class="
              absolute bottom-2 left-2 size-20 overflow-hidden rounded-full
              border-2 border-white 
              z-20
              sm:size-28

              lg:top-[316px] lg:left-[711px] lg:size-47
            "
          >
            <img src="/Winter/photo-2.jpg" alt="" class="size-full object-cover">
          </div>

          <img
            src="/Winter/astronaut.svg"
            alt=""
            class="
              pointer-events-none absolute -right-4 bottom-0 w-28

              sm:w-40

              lg:top-[100px] lg:right-auto lg:bottom-auto lg:left-[700px]
              lg:w-105
            "
          >
        </div>
      </div>
    </div>
  </section>
</template>