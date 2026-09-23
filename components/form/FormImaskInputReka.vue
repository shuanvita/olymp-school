<script setup lang="ts">
import type { DynamicMaskType, InputMask } from 'imask'
import { useFilter } from 'reka-ui'
import { IMask, IMaskComponent } from 'vue-imask'
import masks from '../../data/masks_sng.json'

const props = defineProps<{
  name: string
}>()

// validation-setup

const { value, errors, setValue } = useField(() => props.name)

// country-code-setup

masks.sort((a, b) => a.translateRU.localeCompare(b.translateRU))

const indexRussia = masks.findIndex(
  obj => obj.translateRU.includes('Российская Федерация'),
)

const searchTerm = ref('')
const { contains } = useFilter({ sensitivity: 'base' })
const filterredMasks = computed(
  () => masks.filter(
    country => contains(
      country.translateRU,
      searchTerm.value,
    ),
  ),
)

// mask-setup

const id = useId()
const selected = ref<typeof masks[number]>(masks[indexRussia])
const isPhoneValid = ref(false)

const input = useTemplateRef('phone-input')
const imask = ref<InputMask | null>(null)

function handleCodeUpdate(newValue: typeof masks[number]) {
  selected.value = newValue
  imask.value!.value = ''
  updateMask()
}

function focusInputMask(value: boolean) {
  if (!value) {
    nextTick(() => {
      input.value.$el.focus()
    })
  }
}

function updateMask() {
  imask.value?.updateOptions({ mask: selected.value.mask as unknown as DynamicMaskType })
  imask.value?.updateValue()
}

function resetMask() {
  setValue(imask.value?.masked.mask
    ?.toString()
    .replace(/[{}#]/g, match => match === '#' ? '_' : ''), false)
  isPhoneValid.value = false
  nextTick(() => {
    imask.value?.updateValue()
  })
}

// external-setup

defineExpose({ valid: isPhoneValid, value: () => imask.value?.unmaskedValue, reset: resetMask })

onMounted(() => {
  imask.value = IMask(
    input.value?.$el,
    {
      mask: selected.value.mask,
      lazy: false,
      definitions: { '#': /\d/ },
    },
  )

  imask.value?.on('complete', () => {
    isPhoneValid.value = true
  })

  imask.value?.on('accept', () => {
    if (isPhoneValid.value) {
      isPhoneValid.value = false
    }
  })
})

function measureElement(virtualizer: any, el: any) {
  if (!el) {
    return
  }

  virtualizer.measureElement(el)

  return undefined
}
</script>

<template>
  <div>
    <div
      class="relative imask-wrapper"
      :data-mask-valid="errors.length === 0"
    >
      <ComboboxRoot
        v-slot="{ open }"
        :aria-controls="id"
        :ignore-filter="true"
        :default-value="masks[indexRussia]"
        required
        @update:model-value="handleCodeUpdate"
        @update:open="focusInputMask"
      >
        <ComboboxInput
          v-show="open"
          v-model="searchTerm"
          autocomplete="none"
          placeholder="Название страны"
          class="absolute w-full h-(--imask-input-height) p-(--imask-padding) text-[14px] rounded-(--imask-radius) bg-white z-10 outline-none"
        />

        <ComboboxTrigger
          :tabindex="open ? -1 : 0"
          :aria-label="selected.translateRU"
          class="h-full flex items-center cursor-pointer gap-x-1.5 pl-4 pr-1 rounded-l-xs absolute left-0"
        >
          <iconify-icon
            :icon="selected.emoji"
            class="text-[26px]"
            aria-hidden="true"
          />
          <iconify-icon
            class="rotate-180 text-[10px]"
            icon="bxs:up-arrow"
            aria-hidden="true"
          />
        </ComboboxTrigger>

        <ComboboxContent
          class="absolute top-full mt-1 overflow-y-auto bg-white rounded-(--imask-radius) shadow-lg max-h-60 w-full z-50"
        >
          <ComboboxViewport>
            <ComboboxEmpty class="p-4 text-center select-none">
              Ничего не найдено
            </ComboboxEmpty>

            <ComboboxVirtualizer
              v-slot="{ option, virtualizer }"
              :options="filterredMasks"
              :estimate-size="60"
              :text-content="(x: any) => x.translateRU"
            >
              <div
                :ref="(node) => measureElement(virtualizer, node)"
                class="w-full"
              >
                <ComboboxItem
                  :value="option"
                  class="data-[highlighted]:bg-gray-200 min-h-15 w-full flex flex-col justify-center select-none cursor-pointer text-[14px]"
                >
                  <ComboboxSeparator
                    class="h-px bg-gray-100 w-full"
                  />

                  <div
                    class="flex flex-row items-center justify-between p-2 gap-x-2 my-auto"
                  >
                    <div class="flex flex-row gap-x-2.5 items-center">
                      <iconify-icon
                        aria-hidden="true"
                        :icon="option.emoji"
                        class="self-center shrink-0 text-[27px]"
                      />
                      <span
                        class="whitespace-normal break-words"
                        v-html="option.translateRU"
                      />
                    </div>
                    <span
                      class="font-nunito-sans"
                      aria-hidden="true"
                    >
                      +{{ option.startsWith }}
                    </span>
                  </div>
                </ComboboxItem>
              </div>
            </ComboboxVirtualizer>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxRoot>

      <IMaskComponent
        :id="id"
        ref="phone-input"
        v-model="value"
        :name="name"
        type="tel"
        autocomplete="tel"
        :aria-describedby="`hint-${id}`"
        required
        class="imask w-full h-(--imask-input-height) p-(--imask-padding) pl-16 rounded-(--imask-radius) placeholder:text-transparent"
      />
    </div>

    <ErrorMessage
      :id="`hint-${id}`"
      :name="name"
      class="text-(--imask-iv-text,_var(--color-red-600)) mt-1 block text-[14px]"
    />
  </div>
</template>

<style scoped>
.imask-wrapper[data-mask-valid="false"] .imask {
  outline: 1px solid var(--imask-iv-text, var(--color-red-600));
  background-color: var(--imask-iv-bg, white);
}

.imask-wrapper[data-mask-valid="true"] .imask {
  outline: none;
  background-color: var(--imask-v-bg, white);
}
</style>
