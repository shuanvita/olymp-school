<script lang="ts">
import { ym_event } from '../../composables/metrika'

export const openForm = ref(false)
function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
}
const cookie = getCookie();
console.log(cookie.subscribeModal != 'true');
console.log(window.localStorage.getItem('sendSubscribe'));
if(cookie.subscribeModal != 'true' && window.localStorage.getItem('sendSubscribe') != 'true'){
  setTimeout(() => { openForm.value = true; document.cookie = 'subscribeModal=true;secure;samesite=strict;max-age=7200'; }, 10000);

}

</script>

<!-- eslint-disable import/first -->
<script setup lang="ts">
import { array, object, string } from 'yup'

const { values, handleSubmit } = useForm(
  {
    validationSchema: toTypedSchema(
      object().shape({
        email: string()
          .required('Обязательное поле')
          .email('Некорретный e-mail'),
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

const closeModal = function () {
  openForm.value = false;
}
const onSubmit = handleSubmit(async (values, { resetForm }) => {
  modalIsOpen.value = true
  const data = new FormData()

  for (const key in values) {
    data.append(key, values[key])
  }

  try {
    const formData = new FormData();
    formData.set("email", values.email);


    const option = {
      method: "POST",
      body: formData
    };
    fetch("/olymp-school/subscribe.php", option)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          window.localStorage.setItem('sendSubscribe', 'true')
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
      <DialogOverlay
        class="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-[99999] overflow-y-auto grid place-items-center">
        <DialogContent class="data-[state=open]:animate-contentShow relative z-[99999] my-10 focus:outline-none"
          @open-auto-focus.prevent>
          <BaseModalButton class="absolute top-0 -translate-y-full -right-10 max-md:right-0" @click="closeModal">
            <span class="sr-only">Закрыть модальное окно</span>
            <iconify-icon icon="iconamoon:close-light" class="text-white text-4xl" aria-hidden="true" />
          </BaseModalButton>
          <DialogTitle class="sr-only">
            Форма подписки на рассылку
          </DialogTitle>
          <DialogDescription
            class="md:px-[41px] text-center relative after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-[url(https://it-edu.com/mipt-school/wp-content/uploads/2025/04/left.png)] after:bg-no-repeat after:z-10 after:bg-contain before:absolute before:h-full before:w-full before:top-0 before:right-0 before:bg-[url(https://it-edu.com/mipt-school/wp-content/uploads/2025/04/right.png)] before:bg-no-repeat before:z-10 before:bg-contain before:bg-right max-md:before:hidden max-md:after:w-[80%] overflow-hidden max-md:after:bg-[url(https://it-edu.com/mipt-school/wp-content/uploads/2025/04/mobb.png)] bg-white px-5 py-[37px] w-[90vw] max-w-[1100px] z-[99999] rounded-base">
            <div class="flex flex-col gap-10 max-md:gap-6 max-w-[610px] mx-auto items-center relative z-100">
              <h3 class="font-nunito-sans font-bold text-primary-heading text-primary-heading-r">Подпишись на нашу
                рассылку! </h3>
              <p class="text-primary-paragraph-r">В рассылках мы делимся свежими новостями Олимпиадных школ и Физтеха,
                рассказываем об олимпиадах, даём полезные лайфхаки про учёбу для школьников и их родителей.</p>
              <div class="max-w-[470px] mx-auto">
                <p class="text-primary-paragraph-r font-semibold mb-5">Подпишись и лови свой первый промокод от
                  Олимпиадных
                  школ МФТИ за подписку!</p>
                <form novalidate
                  class="space-y-3.5 [--color-primary-light:#FFFFFF] [--color-gray-border:#A5A6A9] text-primary-paragraph-md [--imask-padding:20px]"
                  @submit="onSubmit">
                  <FormInput :class="'!text-black'" name="email" placeholder="E-mail" autocomplete="email"
                    type="email" />
                  <FormCheckbox :classtext="'!text-black text-left'" :class="'!text-black !border-[#A5A6A9] after:!text-black'"
                    class="sm:text-base  text-[18px] cursor-pointer" name="agreement" />
                  <button type="submit"
                    class="md:mt-4 mt-1 bg-primary rounded-[7px] md:text-[20px] text-[16px] leading-[1.2] text-center w-full py-4 text-white font-onest cursor-pointer hover:bg-primary-light-transparent transition-colors">
                    Подписаться
                  </button>
                </form>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>

        <HeadlessTransitionRoot :show="modalIsOpen" enter-from="opacity-0" enter-to="opacity-100"
          leave-from="opacity-100" leave-to="opacity-0">
          <div class="grid place-items-center absolute inset-0 bg-black/80 z-[99999]">
            <IconsSpinner v-if="modalIsOpen && !modalResult.message" class="text-primary-light" />
            <span v-else
              class="sm:text-3xl text-xl text-balance font-onest bg-white/30 text-white sm:p-5 p-4 rounded-xl z-50 max-w-9/10">
              {{ modalResult.message }}
            </span>
          </div>
        </HeadlessTransitionRoot>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
