<script setup lang="ts">
import type FormImaskInputReka from '../../form/FormImaskInputReka.vue'
import { validatePhone } from '../../../composables/validation'
import { array, object, string } from 'yup'

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInputReka>>('phone-input')

const { handleSubmit } = useForm(
  {
    validationSchema: toTypedSchema(
      object().shape({
        firstName: string()
          .required('Обязательное поле')
          .matches(regexp, 'Разрешена только кириллица'),
        tel: string()
          .required('Обязательное поле')
          .test(
            'is-valid-phone',
            'Неверный формат телефона',
            () => validatePhone(phoneRef.value!.value()!, phoneRef.value!.valid),
          ),
        email: string()
          .required('Обязательное поле')
          .email('Некорретный e-mail'),
        question: string()
          .required('Обязательное поле'),
        agreement: array()
          .min(1, 'Обязательное поле')
          .required('Обязательное поле'),
      }),
    ),
    validateOnMount: false,
  },
)

const modalIsOpen = shallowRef<boolean>(false)
const modalResult = ref<{ success: boolean | null, message: string | null }>({
  success: null,
  message: null,
})

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  modalIsOpen.value = true

  const data = new FormData()

  for (const key in values) {
    data.append(key, values[key])
  }

  try {
    const formData = new FormData();
    formData.set("email", values.email);
    formData.set("tel", values.tel);
    formData.set("name", values.firstName);
    formData.set("question", values.question);
    formData.set("idMer", '438');


    const option = {
      method: "POST",
      body: formData
    };
    fetch("/olymp-school/sendCallCenter.php", option)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          modalResult.value = { success: true, message: 'Успех' }
        }
      });
  } catch {
    modalResult.value = { success: false, message: 'Ошибка' }
  }

  if (modalResult.value.success) {
    resetForm({
      values: {
        agreement: [true],
      },
    })

    phoneRef.value!.reset()
  }

  setTimeout(() => {
    modalIsOpen.value = false
    modalResult.value = { message: null, success: null }
  }, 1000)
})
</script>

<template>
  <section
    aria-labelledby="call-center-heading"
    class="md:py-[163px] py-16 relative max-w-(--breakpoint-layout) mx-auto px-primary-padding-layout-r rounded-t-base"
    style="background: linear-gradient(102.44deg, #1CA038 5.9%, #FF9900 72.62%);"
  >
    <div class="relative z-20 flex flex-row not-xl:flex-wrap gap-9 justify-between items-start">
      <h2
        id="call-center-heading"
        type="none"
        class="text-white xl:max-w-[439px] leading-none font-bold md:text-primary-heading text-[24px]"
      >
        Хочешь к&nbsp;нам, но&nbsp;остались вопросы? <br> Заполни форму, и&nbsp;мы&nbsp;свяжемся с&nbsp;тобой!
      </h2>

      <form
        novalidate
        class="font-onest space-y-4.5 flex flex-col [--color-primary-light:#FFFFFF] w-full [--color-gray-border:transparent] max-w-200"
        @submit="onSubmit"
      >
        <div class="space-y-4.5 text-primary-paragraph-md">
          <div class="grid md:grid-cols-[239px_auto] grid-cols-1 gap-x-3.5 sm:gap-y-2 gap-y-4">
            <FormInput
              placeholder="Имя"
              type="text"
              name="firstName"
              autocomplete="given-name"
            />
            <FormImaskInputReka
              ref="phone-input"
              name="tel"
              class="[--imask-radius:7px] [--imask-input-height:57px] [--imask-padding:20px]"
            />
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              autocomplete="email"
            />
            <FormTextarea
              placeholder="Вопрос / комментарий"
              name="question"
            />
          </div>
          <FormCheckbox
            class="col-span-2 sm:text-base text-[14px] cursor-pointer"
            name="agreement"
          />
        </div>
        <button class="bg-white cursor-pointer hover:bg-gray-100 transition-colors rounded-lg w-full py-3.5 font-montserrat font-semibold text-[12px] leading-[1.1] uppercase text-[#529E2A]">
          Задать вопрос
        </button>
      </form>
    </div>

    <HeadlessTransitionRoot
      :show="modalIsOpen"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div
        class="grid place-items-center absolute inset-0 bg-black/80 z-[99999]"
      >
        <IconsSpinner
          v-if="modalIsOpen && !modalResult.message"
          class="text-primary-light"
        />
        <span
          v-else
          class="sm:text-3xl text-xl text-balance font-onest bg-white/30 text-white sm:p-5 p-4 rounded-xl z-50 max-w-9/10"
        >
          {{ modalResult.message }}
        </span>
      </div>
    </HeadlessTransitionRoot>

    <div
      aria-hidden="true"
      class="pointer-events-none"
    >
      <svg
        class="absolute bottom-12 left-0 not-xl:hidden"
        width="116"
        height="279"
        viewBox="0 0 116 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.2227 83.4297C45.9461 84.5901 40.6051 85.8028 35.2583 86.8047C9.89619 91.3464 -15.9832 88.9798 -38.9433 77.5602C-62.2373 65.9808 -81.7153 45.59 -102.714 28.6975C-123.712 11.805 -147.861 -2.09811 -173.609 1.57185C-179.39 2.38711 -185.47 4.30799 -189.841 9.69007C-194.176 15.1514 -195.56 24.8971 -191.442 29.6353C-187.939 33.5797 -182.428 32.5523 -177.527 32.1282C-157.068 30.3829 -138.67 43.7835 -123.597 59.7773C-108.524 75.771 -95.1479 94.8667 -78.1856 107.601C-59.0729 121.823 -36.1441 127.232 -13.2352 127.054C9.67374 126.876 32.6683 121.347 55.4406 114.922C67.6124 111.502 82.0055 108.541 90.1818 119.467C98.733 130.842 94.8211 151.91 85.6682 164.517C76.4801 177.045 63.6322 183.493 51.5872 190.366C26.6174 204.504 1.36292 223.938 -12.5441 254.525C-15.0626 260.127 -17.2592 266.653 -15.9792 272.511C-10.4966 297.156 33.024 241.331 40.7897 234.7C59.7052 218.583 82.444 209.705 98.1856 188.406C110.618 171.518 117.129 147.801 115.379 125.837C114.384 113.496 110.798 101.644 103.951 93.5185C95.5338 83.435 83.2139 80.1856 71.2258 80.6543C64.502 80.7269 57.8771 82.0125 51.2227 83.4297Z"
          fill="white"
        />
      </svg>

      <svg
        class="absolute -right-0 -top-22 max-[800px]:hidden"
        width="222"
        height="319"
        viewBox="0 0 222 319"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.6366 161.729C53.9815 162.517 59.4052 163.279 64.7595 164.24C90.0821 168.997 113.436 180.396 130.848 199.222C148.515 218.315 159.486 244.292 173.121 267.538C186.756 290.785 204.397 312.354 229.771 318.063C235.465 319.352 241.831 319.715 247.828 316.235C253.819 312.668 258.572 304.048 256.405 298.157C254.53 293.226 249.013 292.23 244.281 290.887C224.534 285.256 212.091 266.198 203.677 245.895C195.263 225.593 189.535 202.992 178.198 185.066C165.378 164.987 145.862 151.79 124.382 143.825C102.902 135.86 79.4421 132.866 55.8718 130.79C43.2787 129.667 28.7719 127.326 25.0062 114.21C21.0498 100.539 32.185 82.2325 45.217 73.6952C58.2537 65.2445 72.5536 63.7771 86.2541 61.6268C114.616 57.2728 145.125 48.0682 168.983 24.4098C173.326 20.0666 177.696 14.7452 178.579 8.81458C182.201 -16.1718 121.699 20.5696 112.085 24.0121C88.6804 32.3662 64.2713 32.5939 41.9942 46.9189C24.3768 58.2936 9.87168 78.1551 3.71127 99.3108C0.260557 111.201 -0.594345 123.554 2.92304 133.581C7.21287 145.995 17.5771 153.406 28.951 157.223C35.2627 159.542 41.9126 160.692 48.6366 161.729Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>
