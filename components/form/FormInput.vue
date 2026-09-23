<script setup lang="ts">
import { ErrorMessage, useField } from 'vee-validate'

const props = defineProps<{
  name: string
  type?: string
  class?: string
  placeholder?: string
  autocomplete?: string
}>()

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <div class="space-y-1">
    <input
      v-model="value"
      :name="name"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :type="type ?? 'text'"
      :class="[props.class, { 'outline outline-primary-error': errorMessage }]"
      class="w-full p-5 rounded-lg border-gray-border border bg-primary-light text-input"
      
    >
    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>
