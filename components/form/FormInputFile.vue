<script setup lang="ts">
import { ErrorMessage, useField } from 'vee-validate'

const props = defineProps<{
  name: string
  placeholder?: string
  accept?: string
}>()

const { value, errorMessage, handleBlur, handleChange } = useField(() => props.name)

const id = useId()

const inputRef = useTemplateRef<HTMLInputElement>('input')

function handleKeydown(e: KeyboardEvent) {
  if ((e.key === 'Enter' || e.key === ' ') && inputRef.value) {
    e.preventDefault()
    inputRef.value.click()
  }
}

const fileName = ref<string>(props.placeholder ?? '')

function customHandleChange(e: Event | unknown, shouldValidate?: boolean) {
  handleChange(e, shouldValidate)
  if (e instanceof Event && (e.target as HTMLInputElement)?.files?.length) {
    const file = (e.target as HTMLInputElement).files![0]
    fileName.value = file.name
  }
}

watch(value, (newVal) => {
  if (newVal == null) {
    fileName.value = props.placeholder ?? ''
  }
})
</script>

<template>
  <div class="space-y-1">
    <div class="w-full">
      <label
        :for="id"
        tabindex="0"
        class="relative w-full p-5 pr-(--file-pr,_45px) rounded-lg text-[#7F7F7F] bg-white block cursor-pointer"
        @keydown="handleKeydown"
      >
        {{ fileName }}
        <slot name="icon">
          <svg
            aria-hidden="true"
            class="absolute right-4.5 -translate-y-1/2 top-1/2"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.73369 8.60626L6.98411 10.3558C6.01369 11.3263 6.01369 12.8917 6.98411 13.8621C7.95452 14.8325 9.51994 14.8325 10.4904 13.8621L13.2458 11.1067C15.1795 9.17292 15.1795 6.02792 13.2458 4.09417C11.312 2.16042 8.16703 2.16042 6.23328 4.09417L3.22994 7.09751C1.57244 8.75501 1.57244 11.4467 3.22994 13.1113"
              stroke="#7F7F7F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </label>
      <input
        :id="id"
        ref="input"
        :name="name"
        type="file"
        :accept="accept"
        :class="[{ 'outline outline-primary-error': errorMessage }]"
        class="hidden"
        @change="customHandleChange"
        @blur="handleBlur"
      >
    </div>
    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>
