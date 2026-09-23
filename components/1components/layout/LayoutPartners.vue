<script setup lang="ts">
defineProps<{
  modal: boolean
}>()
import { ym_event } from '../../composables/metrika'

const isOpenModalThink = ref(false)
const isOpenModalZftsh = ref(false)
const isOpenModalSber = ref(false)

function openModalThink() {
  ym_event('think');
  isOpenModalThink.value = true
}
function closeModalThink() {
  isOpenModalThink.value = false
}

function openModalZftsh() {
  ym_event('zftsh');
  isOpenModalZftsh.value = true
}
function closeModalZftsh() {
  isOpenModalZftsh.value = false
}

function openModalSber() {
  ym_event('sber');
  isOpenModalSber.value = true
}
function closeModalSber() {
  isOpenModalSber.value = false
}
</script>

<template>
  <section aria-labelledby="about-heading" class="md:mt-[77px] mt-15 md:space-y-10 space-y-4">
    <div class="flex flex-col items-center md:space-y-7 space-y-4.5 xl:pl-42 xl:pr-32 lg:px-20 px-5">
      <BaseHeading :as="'h3'" :class="'text-center'">
        ПРИ ПОДДЕРЖКЕ
      </BaseHeading>
      <div class="flex items-center justify-center">
        <img @click="openModalSber()" :class="[modal ? 'cursor-pointer' : '', 'md:max-w-[350px] max-w-[260px] w-full mx-auto mb-4']"
          src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/sber.png" alt="Сбер">
          <HeadlessTransitionRoot v-if="modal" appear :show="isOpenModalSber" as="template">
          <HeadlessDialog as="div" class="relative z-[9999]" @close="closeModalSber()">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
              enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-black/50" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div class="flex h-full items-center justify-center p-3 text-center">
                <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <HeadlessDialogPanel
                    class="relative max-w-[850px] w-full transform md:rounded-[15px] bg-white rounded-[10px] text-left align-middle shadow-xl transition-all">
                    <BaseModalButton class="absolute -top-3 -translate-y-full right-0" @click="closeModalSber()">
                      <span class="sr-only">Закрыть модальное окно</span>
                      <iconify-icon icon="iconamoon:close-light" class="text-white md:text-4xl text-3xl"
                        aria-hidden="true" />
                    </BaseModalButton>
                    <div class="rounded-xl flex flex-col items-start p-6" >
                      <img :class="['md:max-w-[270px] max-w-[270px] w-full mb-4']"
                     src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/sber.png" alt="Сбер">
                      <p>Сбер предоставляет талантливым школьникам гранты на оплату обучения в рамках летних смен Олимпиадных школ МФТИ.
                      <br/> <br/>
                      В этом году Сбер поддерживает все 24 предмета Всероссийской олимпиады школьников! От мастер-классов и экспертных лекций для участников до уникальных карьерных возможностей для победителей ВсОШ. Присоединяйтесь к Telegram-каналу Сбера <a class="underline" target="_blank" href="t.me/sberstudent">t.me/sberstudent</a>, чтобы следить за новостями и читать истории тех, кто уже прошел путь от олимпиад до успешной карьеры в Сбере.</p>
                    </div>
                  </HeadlessDialogPanel>
                </HeadlessTransitionChild>
              </div>
            </div>
          </HeadlessDialog>
        </HeadlessTransitionRoot>
      </div>
      <BaseHeading :as="'h3'" :class="'text-center'">
        ПАРТНЁРЫ
      </BaseHeading>
      <div class="flex items-center justify-center">
        <img @click="openModalZftsh()" :class="[modal ? 'cursor-pointer' : '', 'md:max-w-[260px] max-w-[200px] w-full mx-auto mb-4']"
          src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/zftsh.png" alt="ЗФТШ">
          <HeadlessTransitionRoot v-if="modal" appear :show="isOpenModalZftsh" as="template">
          <HeadlessDialog as="div" class="relative z-[9999]" @close="closeModalZftsh()">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
              enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-black/50" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div class="flex h-full items-center justify-center p-3 text-center">
                <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <HeadlessDialogPanel
                    class="relative max-w-[850px] w-full transform md:rounded-[15px] bg-white rounded-[10px] text-left align-middle shadow-xl transition-all">
                    <BaseModalButton class="absolute -top-3 -translate-y-full right-0" @click="closeModalZftsh()">
                      <span class="sr-only">Закрыть модальное окно</span>
                      <iconify-icon icon="iconamoon:close-light" class="text-white md:text-4xl text-3xl"
                        aria-hidden="true" />
                    </BaseModalButton>
                    <div class="rounded-xl flex flex-col items-start p-6" >
                      <img :class="['md:max-w-[140px] max-w-[140px] w-full mb-4']"
                        src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/zftsh.png" alt="ЗФТШ">
                        Заочная физико-техническая школа МФТИ готовит школьников к поступлению в ведущие технические вузы. Участники смен Олимпиадных школ, завершившие обучение на «5», «5/4», «4/4» могут поступить в ЗФТШ без вступительного экзамена.
                    </div>
                  </HeadlessDialogPanel>
                </HeadlessTransitionChild>
              </div>
            </div>
          </HeadlessDialog>
        </HeadlessTransitionRoot>
      </div>
      <!-- <BaseHeading :as="'h3'" :class="'text-center'">
        ИНФОРМАЦИОННЫЕ ПАРТНЁРЫ
      </BaseHeading>
      <div class="flex items-center justify-center">
        <img @click="openModalThink()" :class="[modal ? 'cursor-pointer' : '', 'md:max-w-[400px] max-w-[260px] w-full mx-auto']"
          src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/think.png" alt="Думай">
        <HeadlessTransitionRoot v-if="modal" appear :show="isOpenModalThink" as="template">
          <HeadlessDialog as="div" class="relative z-[9999]" @close="closeModalThink()">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
              enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <div class="fixed inset-0 bg-black/50" />
            </HeadlessTransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
              <div class="flex h-full items-center justify-center p-3 text-center">
                <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <HeadlessDialogPanel
                    class="relative max-w-[850px] w-full transform md:rounded-[15px] bg-white rounded-[10px] text-left align-middle shadow-xl transition-all">
                    <BaseModalButton class="absolute -top-3 -translate-y-full right-0" @click="closeModalThink()">
                      <span class="sr-only">Закрыть модальное окно</span>
                      <iconify-icon icon="iconamoon:close-light" class="text-white md:text-4xl text-3xl"
                        aria-hidden="true" />
                    </BaseModalButton>
                    <div class="rounded-md flex flex-col items-start p-6" >
                      <img  :class="['md:max-w-[230px] max-w-[230px] w-full mb-4']"
                        src="https://it-edu.com/mipt-school/wp-content/uploads/2025/03/think.png" alt="Думай">
                        Научно-популярные журналы «ДУМАЙ» помогают детям в учёбе и подготовке к экзаменам, учат смотреть на вещи шире, замечать связь между явлениями, критически мыслить, развивают любознательность и повышают эрудицию, воспитывают любовь к чтению и знаниям
                    </div>
                  </HeadlessDialogPanel>
                </HeadlessTransitionChild>
              </div>
            </div>
          </HeadlessDialog>
        </HeadlessTransitionRoot>
      </div> -->
    </div>
  </section>
</template>
