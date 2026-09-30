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
if(cookie.fortunaModal != 'true' && window.localStorage.getItem('clickFortuna') != 'true'){
  setTimeout(() => { openForm.value = true; document.cookie = 'fortunaModal=true;secure;samesite=strict;max-age=7200'; }, 10000);

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
          window.localStorage.setItem('clickFortuna', 'true')
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

const isOpen = ref(false)

function openModal() {
  openForm.value = false;
  isOpen.value = true;
  window.localStorage.setItem('clickFortuna', 'true');
}

function closeModalForm() {
  isOpen.value = false
}
</script>

<template>
  <DialogRoot v-model:open="openForm">
    <DialogPortal>
      <DialogOverlay
        class="bg-black/80 data-[state=open]:animate-overlayShow  fixed inset-0 z-[99999] overflow-y-auto grid place-items-center">
        <DialogContent class="data-[state=open]:animate-contentShow max-w-[1000px] w-full relative z-[99999] my-10 focus:outline-none"
          @open-auto-focus.prevent>
          <BaseModalButton class="absolute top-0 -translate-y-full -right-10 max-md:right-0" @click="closeModal">
            <span class="sr-only">Закрыть модальное окно</span>
            <iconify-icon icon="iconamoon:close-light" class="text-white text-4xl" aria-hidden="true" />
          </BaseModalButton>
          <DialogDescription as="div"
                            class="w-full relative max-w-[1000px] transform overflow-hidden rounded-2xl bg-[#5045CF] px-[60px] py-[60px] max-md:px-4 max-md:py-4 max-md:pt-12 text-left align-middle shadow-xl transition-all max-md:flex-col">
                            <img class="absolute w-full h-full top-0 left-0 z-10 max-md:object-contain max-md:object-bottom"
                                src="https://it-edu.com/mipt-school/wp-content/uploads/2025/12/fortuna_bg.png" alt="">
                            <div class="flex max-md:flex-col max-md:gap-5 items-center justify-between relative z-30">
                                <div class="flex flex-col w-[48%] max-md:w-full">
                                    <!-- <span class="text-white font-bold text-[20px] max-md:text-[14px] uppercase">ТОЛЬКО с 10 по 14 декабря</span> -->
                                    <span class="text-white font-bold text-[26px] max-md:text-[20px]  max-md:mt-3 leading-12 max-md:leading-6 uppercase">ТОЛЬКО с 10 по 14 декабря</span>
                                    <!-- <div class="mt-1 max-md:mt-3">
                                        <span class="text-white font-semibold text-[24px]  max-md:text-[20px] uppercase">СМЕНЫ <b
                                                class="rounded-2xl bg-white text-[#5045CF] font-semibold px-2.5 py-1">профи</b>
                                            и <b
                                                class="rounded-2xl font-semibold bg-white text-[#5045CF] px-2.5 py-1">кампус</b></span>
                                    </div> -->
                                    <div class="mt-10 flex flex-col justify-start gap-10">
                                        <span class="font-black uppercase text-[30px] leading-10 max-md:leading-6 max-md:text-[17px]  text-white"
                                            v-if="!finished">Крути колесо<br/>
                                      в личном кабинете<br/>
                                      и выигрывай<br/>
                                      свой приз!</span>
                                      <button @click="openModal()"  class="rounded-2xl w-fit font-semibold bg-white text-[#5045CF] px-4.5 py-1.5">Зарегистрироваться</button>
                                       
                                    </div>

                                </div>
                                <div class="w-[48%]  max-md:w-full relative">
                                    <img class="animate-wiggle" src="https://it-edu.com/mipt-school/wp-content/uploads/2025/12/колесо-2-1.png"
                                        style="width: 100%;transform: rotateZ(22.3deg)" />
                                    <img class="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
                                        src="https://it-edu.com/mipt-school/wp-content/uploads/2025/12/start-1.png" style="width: 80px" />
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

  <PageSmeniPopupZoshPrice :is-open="isOpen" :smen="smen" :close-modal="closeModalForm" />
</template>
