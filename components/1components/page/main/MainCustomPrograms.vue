<script setup lang="ts">
import type FormImaskInput from '../Form/FormImaskInput.vue'
import { array, object, string } from 'yup'
import { validatePhone } from '../../../composables/validation'
import { ym_event } from '../../../composables/metrika'

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const items = [
  'Оставьте ваши контакты и мы вам перезвоним и напишем сразу, как только откроется запись на летние смены Олимпиадных школ.',
  'Мы внесём вас в список первых и подробно всё расскажем',
]

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInput>>('phone-input')

const schema = toTypedSchema(
  object().shape({
    firstName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    lastName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    tel: string()
      .required('Обязательное поле')
      .test(
        'is-valid-phone',
        'Неверный формат телефона',
        () => validatePhone(phoneRef.value!.imask!.value, phoneRef.value!.valid),
      ),
    email: string()
      .required('Обязательное поле')
      .email('Некорретный e-mail'),
    agreement: array()
      .min(1, 'Это обязательное поле')
      .required('Это обязательное поле'),
  }),
)

const modalIsOpen = ref<'close' | 'open' | 'in-process-close'>('close')
const modalResult = ref<{ success: boolean, message: string }>({
  success: false,
  message: '',
})

async function onSubmit(values, { resetForm }) {
  modalIsOpen.value = 'open'
  ym_event('custom_program');
  const answer = {
    ...values,
    agreement: values.agreement[0],
    tel: phoneRef.value?.imask?.value,
  }

  try {
    const formData = new FormData();
      formData.set("email", values.email);
      formData.set("tel", values.tel);
      formData.set("i", values.firstName);
      formData.set("f", values.lastName);


      const option = {
          method: "POST",
          body: formData
        };
        fetch("/olymp-school/sendCustomProgram.php", option)
          .then(response => response.json())
          .then(data => {
            if (data.status == 'ok') {
              ym_event('custom_program_success');
              modalResult.value = { success: true, message: 'Успех' }
            }
          });
  } catch {
    modalResult.value = { success: false, message: 'Ошибка' }
  }

  if (modalResult.value.success) {
    resetForm({
      values: {
        firstName: '',
        lastName: '',
        company: '',
        position: '',
        tel: phoneRef.value?.imask?.masked.mask
          ?.toString()
          .replace(/[{}#]/g, match => match === '#' ? '_' : ''),
        email: '',
        question: '',
        agreement: [true],
      },
    })

    nextTick(() => {
      phoneRef.value?.imask?.updateValue()
    })
  }

  modalIsOpen.value = 'in-process-close'

  setTimeout(() => {
    modalIsOpen.value = 'close'
  }, 2500)

  console.log(answer)
}
</script>

<template>
  <BaseSection
    aria-labelledby="b1-custom-programs-heading"
    class="relative bg-primary md:py-8 not-md:pb-10 not-md:pt-7 rounded-base"
  >
    <div>
      <div class="flex min-[870px]:flex-row justify-between items-center flex-col md:gap-10 gap-9">
        <div class="text-white pt-2 md:space-y-10 space-y-6.5">
          <BaseHeading
            id="b1-custom-programs-heading"
            type="none"
            class="text-[clamp(20px,(100vw-400px)/(1440-400)*(60-20)+20px,60px)]  leading-[1.1em]"
          >
            Узнайте <br/>первыми <br/>о летних <br/>сменах 2026!
          </BaseHeading>

          <div class="md:space-y-7 space-y-3.5 min-[870px]:max-w-[410px]">
            <p
              v-for="(item, i) in items"
              :key="i"
              class="text-primary-paragraph-r"
            >
              {{ item }}
            </p>
          </div>
        </div>

        <Form
          :validation-schema="schema"
          class="w-full font-onest space-y-5 max-w-[550px]"
          @submit="onSubmit"
        >
          <div class="grid min-[870px]:grid-cols-1 min-[600px]:grid-cols-2 grid-cols-1 md:gap-3 gap-1.5 text-primary-paragraph-md">
            <FormInput
              placeholder="Фамилия"
              name="lastName"
              type="text"
              autocomplete="family-name"
            />
            <FormInput
              placeholder="Имя"
              type="text"
              name="firstName"
              autocomplete="given-name"
            />
            <FormImaskInput
              ref="phone-input"
              name="tel"
            />
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              autocomplete="email"
            />
            <FormCheckbox
              name="agreement"
              class="text-white my-auto"
            />
          </div>

          <button class="bg-white cursor-pointer hover:bg-gray-100 transition-colors text-primary-paragraph-r rounded-lg w-full py-4">
            Отправить
          </button>
        </Form>
      </div>

      <HeadlessTransitionRoot
        as="template"
        :show="modalIsOpen !== 'close'"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="grid place-items-center absolute inset-0 bg-black/70 rounded-base"
        >
          <IconsSpinner
            v-if="modalIsOpen === 'open'"
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
    </div>
  </BaseSection>
</template>
