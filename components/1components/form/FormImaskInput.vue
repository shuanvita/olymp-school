<script lang="ts" setup>
import type { DynamicMaskType, InputMask } from 'imask'
import IMask from 'imask'
import { ErrorMessage, useField } from 'vee-validate'
import { IMaskComponent } from 'vue-imask'
import masks from '../../data/masks.json'

const props = defineProps<{
  name: string
  autocomplete?: string
}>()

// validation-setup

const { value, errorMessage } = useField(() => props.name)

// country-code-setup

masks.sort((a, b) => a.translateRU.localeCompare(b.translateRU))

const indexRussia = masks.findIndex(
  obj => obj.translateRU.includes('Россия'),
)

const query = ref('')

const filterredMasks = computed(() =>
  query.value === ''
    ? masks
    : masks.filter(country =>
        (`${country.name} ${country.translateRU}`)
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, '')),
      ),
)

// mask-setup

const selected = ref<typeof masks[number]>(masks[indexRussia])
const isPhoneValid = ref(false)

const input = useTemplateRef('phone-input')

const imask = ref<InputMask | null>(null)

function handleCodeUpdate(newValue: typeof masks[number]) {
  selected.value = newValue
  imask.value!.value = ''
  updateMask()
  query.value = ''
  nextTick(() => {
    input.value.$el.focus()
  })
}

function updateMask() {
  imask.value?.updateOptions({ mask: selected.value.mask as unknown as DynamicMaskType })
  imask.value?.updateValue()
}

// external-setup

defineExpose({ imask, valid: isPhoneValid, updateMask, region: selected })

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
</script>

<template>
  <div class="space-y-1">
    <div
      class="relative imask-wrapper"
      :mask-valid="!errorMessage"
    >
      <HeadlessCombobox
        v-slot="{ open }"
        as="template"
        @update:model-value="(value) => handleCodeUpdate(value)"
      >
        <HeadlessComboboxInput
          v-show="open"
          autocomplete="none"
          class="absolute cursor-text p-5 rounded-lg border-gray-border border bg-primary-light w-full outline-none z-10 text-input"
          @change="query = $event.target.value"
        />
        <HeadlessComboboxButton
          tabindex="0"
          :class="{ 'pointer-events-none': open }"
          class="h-full flex items-center cursor-pointer gap-x-1.5 pl-4 pr-1 rounded-l-lg absolute left-0"
        >
          <iconify-icon
            :aria-label="selected.translateRU"
            :icon="selected.emoji"
            class="text-2xl"
          />
          <iconify-icon
            class="rotate-180 text-[10px]"
            icon="bxs:up-arrow"
            aria-hidden="true"
          />
        </HeadlessComboboxButton>
        <HeadlessComboboxOptions
          class="absolute top-full mt-1 overflow-auto text-primary-paragraph-md bg-white rounded-lg shadow-lg max-h-60 w-full z-50 options"
        >
          <div
            v-if="filterredMasks.length === 0 && query !== ''"
            class="relative p-2 select-none"
          >
            Ничего не найдено.
          </div>
          <HeadlessComboboxOption
            v-for="(item, ind) in filterredMasks"
            :key="ind"
            v-slot="{ active }"
            as="template"
            :value="item"
          >
            <li
              class="relative flex flex-row items-center justify-between p-2 select-none gap-x-2"
              :class="{ 'bg-primary-light': active }"
            >
              <div class="flex flex-row gap-x-2.5">
                <iconify-icon
                  :icon="item.emoji"
                  class="self-center shrink-0 text-[20px]"
                />
                <span>
                  {{ item.translateRU }}
                  <span lang="en">
                    {{ `(${item.name})` }}
                  </span>
                </span>
              </div>
              <span>+{{ item.startsWith }}</span>
            </li>
          </HeadlessComboboxOption>
        </HeadlessComboboxOptions>
      </HeadlessCombobox>

      <IMaskComponent
        ref="phone-input"
        v-model="value"
        :name="name"
        type="tel"
        autocomplete="tel"
        class="imask w-full pr-5 pl-15 py-5 rounded-lg border-gray-border border bg-primary-light text-input"
      />
    </div>

    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>

<style scoped>
.options {
  scrollbar-width: 5px;
  scrollbar-color: black;
}

.options::-webkit-scrollbar {
  width: 5px;
}

.options::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 9999px;
}

.imask-wrapper[mask-valid="false"] .imask {
  outline: 1px solid var(--color-primary-error);
}
</style>
