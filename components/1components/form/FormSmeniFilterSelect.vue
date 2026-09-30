<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  placeholder: string
  items: { name: string, disabled: boolean }[]
  name: string
}>()

const emit = defineEmits(['selectDisabled'])

const { value, errorMessage } = useField(() => props.name)

function handleSelect(flag: boolean) {
  if (flag) {
    emit('selectDisabled')
  }
}
</script>

<template>
  <div class="space-y-1">
    <HeadlessListbox v-model="value">
      <div class="relative">
        <HeadlessListboxButton
          v-slot="{ open }"
          class="border-2 text-primary-paragraph-r rounded-[7px] py-2.5 px-1.5 flex flex-row items-center justify-between w-full cursor-pointer group hover:text-white hover:bg-primary transition-colors gap-x-5 hover:border-primary"
          :class="[errorMessage ? 'border-primary-error' : 'border-primary']"
        >
          <span>{{ value ?? placeholder }}</span>
          <span
            class="transition-transform group-hover:text-white"
            :class="[
              { '-scale-100': open },
              errorMessage ? 'text-primary-error' : 'text-primary',
            ]"
          >
            <svg
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L10.1569 10L2 2"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </HeadlessListboxButton>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <HeadlessListboxOptions
            as="ul"
            class="absolute mt-3 py-2 bg-white w-full rounded-lg text-primary-paragraph-r shadow-[0_12px_32px_rgba(0,0,0,.1),_0_2px_6px_rgba(0,0,0,0.08)] z-[9999]"
          >
            <HeadlessListboxOption
              v-for="(item, i) in items"
              :key="i"
              :value="item.name"
              as="li"
              class="hover:bg-gray-300 transition-colors cursor-pointer p-3 flex flex-row justify-between gap-x-5 items-center"
              :class="[{ 'opacity-50': item.disabled }, { 'bg-gray-50': item.name === value }]"
              @click="handleSelect(item.disabled)"
            >
              <span>{{ item.name }}</span>
              <span v-if="item.name === value">
                <iconify-icon
                  icon="fluent:checkbox-checked-20-regular"
                  class="text-2xl"
                />
              </span>
              <span v-else>
                <iconify-icon
                  icon="fluent:checkbox-unchecked-20-regular"
                  class="text-2xl"
                />
              </span>
            </HeadlessListboxOption>
          </HeadlessListboxOptions>
        </Transition>
      </div>
    </HeadlessListbox>
    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>
