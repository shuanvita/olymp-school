<script lang="ts">
export const openForm = ref(false)
import { ym_event } from '../../../composables/metrika'
</script>

<!-- eslint-disable import/first -->
<script setup lang="ts">
import type FormImaskInputReka from '../../form/FormImaskInputReka.vue'
import { validatePhone } from '../../../composables/validation'
import type FormSelectDaData from '../../form/FormSelectDaData.vue'
import { array, mixed, object, string } from 'yup'

// eslint-disable-next-line regexp/no-obscure-range
const regexp: RegExp = /^[а-яА-Я -().,]+$/

const phoneRef = useTemplateRef<InstanceType<typeof FormImaskInputReka>>('phone-input')
const city = useTemplateRef<InstanceType<typeof FormSelectDaData>>('city-input')

const { values, handleSubmit } = useForm(
  {
    validationSchema: toTypedSchema(
      object().shape({
        firstName: string()
          .required('Обязательное поле')
          .matches(regexp, 'Разрешена только кириллица'),
        middleName: string()
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
            () => validatePhone(phoneRef.value!.value()!, phoneRef.value!.valid),
          ),
        city: string()
          .required('Обязательное поле'),
        school: string()
          .required('Обязательное поле'),
        // pip: mixed()
        //   .required('Обязательное поле'),
        // essay: mixed()
        //   .required('Обязательное поле'),
        // photo: mixed()
        //   .required('Обязательное поле'),
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
  ym_event("popitka_send_pip");
  const data = new FormData()

  for (const key in values) {
    data.append(key, values[key])
  }

  try {
    const formData = new FormData();
      formData.set("email", values.email);
      formData.set("tel", values.tel);
      formData.set("idMer", '438');
      formData.set("firstName", values.firstName);
      formData.set("lastName", values.lastName);
      formData.set("middleName", values.middleName);
      formData.set("city", values.city);
      formData.set("school", values.school);


      const option = {
          method: "POST",
          body: formData
        };
        fetch("/olymp-school/regMer.php", option)
          .then(response => response.json())
          .then(data => {
            if (data.status == 'ok') {
              ym_event("success_send_pip");
              window.location.href = data.link;
              return;
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
    if (modalResult.value.success) {
      openForm.value = false
    }
    modalResult.value = { message: null, success: null }
  }, 3000)
})
</script>

<template>
  <DialogRoot v-model:open="openForm">
    <DialogPortal>
      <DialogOverlay class="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-[99999] overflow-y-auto grid place-items-center">
        <DialogContent
          class="data-[state=open]:animate-contentShow z-[99999] my-10 focus:outline-none"
          @open-auto-focus.prevent
        >
          <DialogTitle class="sr-only">
            Форма участия в конкурсе
          </DialogTitle>
          <DialogDescription
            class="md:px-[41px] px-5 py-[37px] w-[90vw] max-w-[642px] z-[99999] rounded-base"
            style="background: linear-gradient(102.44deg, #1CA038 5.9%, #FF9900 72.62%);"
          >
            <form
              novalidate
              class="space-y-3.5 [--color-primary-light:#FFFFFF] [--color-gray-border:transparent] text-primary-paragraph-md [--imask-padding:20px]"
              @submit="onSubmit"
            >
              <FormInput
                name="firstName"
                type="text"
                placeholder="Имя"
                autocomplete="given-name"
              />
              <FormInput
                name="lastName"
                type="text"
                autocomplete="family-name"
                placeholder="Фамилия"
              />
              <FormInput
                name="middleName"
                placeholder="Отчество"
                type="text"
                autocomplete="additional-name"
              />
              <FormInput
                name="email"
                placeholder="E-mail"
                autocomplete="email"
                type="email"
              />
              <FormImaskInputReka
                ref="phone-input"
                name="tel"
                class="[--imask-input-height:57px] [--imask-radius:7px]"
              />
              <FormSelectDaData
                ref="city-input"
                name="city"
                placeholder="Город"
                url="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
                :text-content="(el) => el.data.city"
                :body="
                  {
                    count: 10,
                    from_bound: {
                      value: 'city',
                    },
                    to_bound: {
                      value: 'city',
                    },
                  }
                "
                :distinct="true"
                class="[--select-radius:7px]"
              />
              <FormSelectDaData
                url="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party"
                name="school"
                :reference="city"
                placeholder="Школа"
                :text-content="(el) => el.value"
                :disabled="!city?.selected?.data.city_kladr_id"
                :body="{
                  count: 20,
                  filter: {
                    //status: ['ACTIVE'],
                    //type: 'LEGAL',
                  },
                  //okved: ['85.11', '85.12', '85.13', '85.14', '85.22', '85.31', '85.41.9'],
                  locations: [
                    {
                      kladr_id: city?.selected?.data.city_kladr_id,
                    },
                  ],
                }"
                disabled-title="Сначала выберите город"
                :reference-value="city?.selected?.data.city"
                :distinct="true"
                class="[--select-radius:7px]"
              />
              <!-- <FormInputFile
                name="pip"
                placeholder="Документ, подтверждающий ПиПство"
                accept=".doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
              />
              <FormInputFile
                name="essay"
                placeholder="Эссе «Как я стал ПиПом»"
                accept=".doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
              />
              <FormInputFile
                name="photo"
                placeholder="Фото"
                accept="image/*"
              /> -->
              <FormCheckbox
                class="sm:text-base text-[14px] cursor-pointer"
                name="agreement"
              />
              <button
                type="submit"
                class="md:mt-4 mt-1 bg-white rounded-[7px] md:text-[20px] text-[16px] leading-[1.2] text-center w-full py-4 text-[#FF9900] font-onest cursor-pointer hover:bg-gray-100 transition-colors"
              >
                Отправить
              </button>
            </form>
          </DialogDescription>
        </DialogContent>

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
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
