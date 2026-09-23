<script setup lang="ts">
import type FormImaskInput from '../form/FormImaskInput.vue'
import { array, object, string } from 'yup'
import { validatePhone } from '../../composables/validation'
import { ym_event } from '../../composables/metrika'

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInput>>('phone-input')

const schema = toTypedSchema(
  object().shape({
    firstName: string()
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
    question: string()
      .required('Обязательное поле'),
    agreement: array()
      .min(1, 'Это обязательное поле')
      .required('Это обязательное поле'),
  }),
)

const modalIsOpen = ref<'close' | 'open' | 'in-process-close'>('close')
const modalResult = ref<{ success?: boolean, message: string }>({
  success: undefined,
  message: '',
})

async function onSubmit(values, { resetForm }) {
  modalIsOpen.value = 'open'
  ym_event("vopros_popitka");
  const answer = {
    ...values,
    agreement: values.agreement[0],
    tel: phoneRef.value?.imask?.value,
  }

  try {
    const formData = new FormData();
    formData.set("email", values.email);
    formData.set("tel", values.tel);
    formData.set("name", values.firstName);
    formData.set("question", values.question);


    const option = {
      method: "POST",
      body: formData
    };
    fetch("/olymp-school/sendCallCenter.php", option)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          modalResult.value = { success: true, message: 'Успех' }
          ym_event("vopros_success");
            resetForm({
              values: {
                firstName: '',
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
      });
  } catch {
    modalResult.value = { success: false, message: 'Ошибка' }
  }



  modalIsOpen.value = 'in-process-close'

  setTimeout(() => {
    modalIsOpen.value = 'close'
  }, 2500)

  console.log(answer)
}
</script>

<template>
 
  <BaseSection aria-labelledby="call-center-heading"
    class="bg-primary relative rounded-t-base">
    <div class="overflow-hidden max-w-(--breakpoint-layout) mx-auto relative sm:pt-[90px] sm:pb-18 py-[39px_385px]">
      <div class="sm:space-y-8 space-y-5">
        <BaseHeading id="call-center-heading" type="none" transform="normal-case"
          class="text-white md:text-primary-heading-lg text-secondary-heading-md max-w-[674px]">
          Хочешь к нам, но&nbsp;остались вопросы? Заполни&nbsp;форму, и&nbsp;мы&nbsp;свяжемся с&nbsp;тобой!
        </BaseHeading>

        <Form :validation-schema="schema" class="font-onest space-y-4.5 flex flex-col sm:max-w-[55.6%] relative z-30"
          @submit="onSubmit">
          <div class="space-y-4.5 text-primary-paragraph-md ">
            <div class="grid min-[768px]:grid-cols-2 min-[850px]:grid-cols-[239px_auto] grid-cols-1 gap-x-3.5 sm:gap-y-2 gap-y-4">
              <FormInput placeholder="Имя" type="text" name="firstName" autocomplete="given-name" />
              <FormImaskInput ref="phone-input" name="tel" />
              <FormInput type="email" placeholder="Email" name="email" autocomplete="email" />
              <FormTextarea placeholder="Вопрос / комментарий" name="question" />
            </div>
            <FormCheckbox class="col-span-2" name="agreement" />
          </div>
          <BaseButton class="self-start max-[500px]:w-full">Задать вопрос</BaseButton>
        </Form>
      </div>

      <NuxtImg   loading="lazy" src="/Layout/call_center-bg.webp" alt=""
        class="pointer-events-none absolute right-0 bottom-0 pt-10 w-auto min-w-[399px] h-full max-[1000px]:min-w-0 max-[1000px]:max-w-[322px] max-[1000px]:h-auto z-20"
        :class="[{ 'brightness-[40%]': modalIsOpen !== 'close' }]" />

      <HeadlessTransitionRoot :show="modalIsOpen !== 'close'" enter="duration-300 ease-out" enter-from="opacity-0"
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="grid place-items-center absolute inset-0 bg-black/70 rounded-t-base">
          <IconsSpinner v-if="modalIsOpen === 'open'" class="text-primary-light" />
          <span v-else
            class="sm:text-3xl text-xl text-balance font-onest bg-white/30 text-white sm:p-5 p-4 rounded-xl z-50 max-w-9/10">
            {{ modalResult.message }}
          </span>
        </div>
      </HeadlessTransitionRoot>
    </div>
  </BaseSection>
</template>
