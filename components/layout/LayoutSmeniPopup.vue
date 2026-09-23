<script setup lang="ts">
import type FormImaskInput from '../../form/FormImaskInput.vue'
import { array, object, string } from 'yup'
import { validatePhone } from '../../../composables/validation'
import { ym_event } from '../../composables/metrika'

const props = defineProps<{ isOpen: boolean, smen: any, closeModal: () => void }>()

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInput>>('phone-input')
const smeniRef = useTemplateRef<InstanceType<typeof FormSelect>>('smeni-input')
const napravlenieRef = useTemplateRef<InstanceType<typeof FormSelect>>('napravlenie-input')
const klassRef = useTemplateRef<InstanceType<typeof FormSelect>>('klass-input')


const schema = toTypedSchema(
  object().shape({
    firstName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    lastName: string()
      .required('Обязательное поле')
      .matches(regexp, 'Разрешена только кириллица'),
    email: string()
      .required('Обязательное поле')
      .email('Некорретный e-mail'),
    tel: string()
      .required('Обязательное поле')
      .test(
        'is-valid-phone',
        'Неверный формат телефона',
        () => validatePhone(phoneRef.value!.imask!.value, phoneRef.value!.valid),
      ),
    smeni: string()
      .test('is-valid-smeni', 'Обязательное поле', () => { if (smeniRef) { if (smeniRef.value.selectedPerson) { if (smeniRef.value.selectedPerson.id) { return true; } } } return false }),
    napravlenie: string()
      .test('is-valid-napravlenie', 'Обязательное поле', () => { if (napravlenieRef) { if (napravlenieRef.value.selectedPerson) { if (napravlenieRef.value.selectedPerson.id) { return true; } } } return false }),
    klass: string()
      .test('is-valid-klass', 'Обязательное поле', () => { if (klassRef) { if (klassRef.value.selectedPerson) { if (klassRef.value.selectedPerson.id) { return true; } } } return false }),
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



  const answer = {
    ...values,
    agreement: values.agreement[0],
    tel: phoneRef.value?.imask?.value,
    smeni: smeniRef.value.selectedPerson.id,
    napravlenie: napravlenieRef.value.selectedPerson.id,
    klass: klassRef.value.selectedPerson.id,
  }

  try {


    const formData = new FormData();
    formData.set("email", values.email);
    formData.set("tel", values.tel);
    //formData.set("idMer", props.smen.idAdmMer);
    formData.set("firstName", values.firstName);
    formData.set("lastName", values.lastName);
    formData.set("question", values.question);
    formData.set("smeni", smeniRef.value.selectedPerson.id);
    formData.set("napravlenie", napravlenieRef.value.selectedPerson.id);
    formData.set("klass", klassRef.value.selectedPerson.id);

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    let source = useCookie('utm_source_last').value ?? '';
    let medium = useCookie('utm_medium_last').value ?? '';
    let campaign = useCookie('utm_campaign_last').value ?? '';
    let content = useCookie('utm_content_last').value ?? '';

    formData.set("utm_source", source);
    formData.set("utm_medium", medium);
    formData.set("utm_campaign", campaign);
    formData.set("utm_content", content);
    




    const option = {
      method: "POST",
      body: formData
    };
    ym_event('hochunasmenu');
    fetch("https://edu.mipt.ru/olymp-school/regMer.php", option)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          ym_event('hochunasmenu_success');
          window.location.href = data.link;
          return;
          modalResult.value = { success: true, message: 'Успех' }
        }
      });
  } catch {

    modalResult.value = { success: false, message: 'Ошибка' }
  }

  if (modalResult.value.success) {
    props.closeModal()
  }

  modalIsOpen.value = 'in-process-close'

  setTimeout(() => {
    modalIsOpen.value = 'close'
  }, 700)


}
</script>

<template>
  <HeadlessTransitionRoot :show="isOpen" as="template">
    <HeadlessDialog as="div" class="relative z-[9999]" @close="closeModal">
      <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/70" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto ">
        <div class="flex h-full items-center justify-center p-3 text-center">
          <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <HeadlessDialogPanel
              class="relative transform rounded-base transition-all xmd:mx-15 sm:mx-5 mx-2.5 bg-primary sm:p-10.5 p-5 max-w-[650px] w-full">
              <BaseModalButton class="absolute -top-3 -translate-y-full right-0" @click="closeModal">
                <span class="sr-only">Закрыть модальное окно</span>
                <iconify-icon icon="iconamoon:close-light" class="text-white text-4xl" aria-hidden="true" />
              </BaseModalButton>

              <Form :validation-schema="schema" class="w-full font-onest space-y-5 text-left" @submit="onSubmit">
                <div class="grid grid-cols-1 gap-3.5 text-primary-paragraph-md">
                  <FormInput placeholder="Фамилия" name="lastName" type="text" autocomplete="family-name" />
                  <FormInput placeholder="Имя" type="text" name="firstName" autocomplete="given-name" />
                  <FormInput type="email" placeholder="Email" name="email" autocomplete="email" />
                  <FormImaskInput ref="phone-input" name="tel" />
                  <FormSelectZosh ref="smeni-input" name="smeni" placeholder="Смена" />
                  <FormSelectNapravlenie ref="napravlenie-input" name="napravlenie" placeholder="Направление" />
                  <FormSelectKlass ref="klass-input" name="klass" placeholder="Класс" />
                  <FormCheckbox name="agreement" class="text-white my-auto" />

                </div>

                <button
                  class="bg-white cursor-pointer hover:bg-gray-100 transition-colors text-primary-paragraph-r rounded-lg w-full py-4">
                  Отправить
                </button>
              </Form>

              <HeadlessTransitionRoot :show="modalIsOpen !== 'close'" enter="duration-300 ease-out"
                enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="grid place-items-center absolute inset-0 bg-black/70 rounded-base">
                  <IconsSpinner v-if="modalIsOpen === 'open'" class="text-primary-light" />
                  <span v-else
                    class="sm:text-3xl text-xl text-balance font-onest bg-white/30 text-white sm:p-5 p-4 rounded-xl z-50 max-w-9/10">
                    {{ modalResult.message }}
                  </span>
                </div>
              </HeadlessTransitionRoot>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
