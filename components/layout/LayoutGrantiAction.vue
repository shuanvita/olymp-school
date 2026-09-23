<script setup lang="ts">
import type FormImaskInput from '../form/FormImaskInput.vue'
import { array, object, string, mixed } from 'yup'
import { validatePhone } from '../../composables/validation'
import { ym_event } from '../../composables/metrika'

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const MAX_MB = 5
const ALLOWED_EXT = ['png','jpg','jpeg','pdf','doc','docx','xlsx']

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInput>>('phone-input')

const schema = toTypedSchema(
  object().shape({
    file: mixed()
      .required('Обязательное поле')
      .test('fileType', 'Неподдерживаемый формат файла', (file: File | null) => {
        if (!file) return false
        const name = file.name || ''
        const ext = name.split('.').pop()?.toLowerCase() ?? ''
        return ALLOWED_EXT.includes(ext)
      })
      .test('fileSize', `Макс. размер ${MAX_MB} МБ`, (file: File | null) => {
        if (!file) return false
        return file.size <= MAX_MB * 1024 * 1024
      }),
    firstName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    lastName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    secondName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    school: string()
      .required('Обязательное поле'),
    predmet: string()
      .required('Обязательное поле'),
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
const modalResult = ref<{ success?: boolean, message: string }>({
  success: undefined,
  message: '',
})

async function onSubmit(values, { resetForm }) {
  modalIsOpen.value = 'open'

  const answer = {
    ...values,
    agreement: values.agreement[0],
    tel: phoneRef.value?.imask?.value,
  }

  try {
    const formData = new FormData();
    formData.set("email", values.email);
    formData.set("tel", values.tel);
    formData.set("firstname", values.firstName);
    formData.set("lastname", values.lastName);
    formData.set("secondname", values.secondName);
    formData.set("school", values.school);
    formData.set("predmet", values.predmet);
    if (values.file) formData.set("file", values.file, (values.file as File).name);
    


    const option = {
      method: "POST",
      body: formData
    };
    fetch("/olymp-school/sendGrants.php", option)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          modalResult.value = { success: true, message: 'Успех' }
          resetForm({
            values: {
              firstName: '',
              lastName: '',
              secondName: '',
              school: '',
              predmet: '',
              file: null,
              tel: phoneRef.value?.imask?.masked.mask
                ?.toString()
                .replace(/[{}#]/g, match => match === '#' ? '_' : ''),
              email: '',
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

  <BaseSection aria-labelledby="call-center-heading" class="bg-primary relative overflow-hidden">
    <div class=" max-w-(--breakpoint-layout) mx-auto  sm:pt-[90px] sm:pb-18 py-[39px_255px]">
      <div class="sm:space-y-8 space-y-5 relative">

        <h2 class="font-bold flex flex-col text-[60px] max-[768px]:text-[34px] max-[550px]:text-[28px] max-[550px]:leading-[32px] relative z-30 font-nauryzRedKeds text-white">
          Заявка от учителя
          <span class="text-[28px] leading-[30px] max-[768px]:text-[24px] max-[768px]:leading-[25px] font-bold text-white font-nunito-sans">
            Готовите участников олимпиад? <br />Мы поможем вырастить победителей!
          </span>
        </h2>



        <Form :validation-schema="schema" class="font-onest space-y-4.5 flex flex-col w-full max-w-[940px] relative z-30"
          @submit="onSubmit">
          <div class="space-y-4.5 text-primary-paragraph-md">
            <div
              class="grid grid-cols-3 max-xmd:grid-cols-2 max-[500px]:grid-cols-1 gap-x-3.5 sm:gap-y-2 gap-y-4">
              <FormInput placeholder="Имя учителя" type="text" name="firstName" autocomplete="given-name" />
              <FormInput placeholder="Отчество учителя" type="text" name="lastName" autocomplete="patronymic" />
              <FormInput placeholder="Фамилия учителя" type="text" name="secondName" autocomplete="sur-name" />

              <FormInput placeholder="Школа" type="text" name="school" autocomplete="school-name" />
              <FormInput placeholder="Предмет, который Вы преподаёте" type="text" name="predmet" autocomplete="predmet" />

              <div class="max-xmd:hidden">

              </div>

              <FormInput type="email" placeholder="Email" name="email" autocomplete="email" />
              <FormImaskInput ref="phone-input" name="tel" />
            </div>
            <div class="flex gap-4 items-baseline max-[500px]:flex-col ">
              <FormFile name="file" :maxSize="5" accept="png,jpg,jpeg,pdf,doc,docx,xlsx" />
              <div class="max-w-[320px]">
              <FormCheckbox class="col-span-2 leading-8" name="agreement" />
              </div>
            </div>
            
          </div>
          <BaseButton class="self-start max-[500px]:w-full">Отправить</BaseButton>
        </Form>
      </div>

      <NuxtImg   src="/Grant/zayavkauch.png" loading="lazy" alt=""
        class="pointer-events-none absolute right-0  bottom-0 pt-10 w-auto min-w-[399px] h-full max-[1000px]:min-w-0 max-[1000px]:max-w-[322px] max-[1000px]:h-auto z-20"
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
