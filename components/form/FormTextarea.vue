<script setup lang="ts">
defineProps<{
  name: string
  placeholder?: string
}>()
</script>

<template>
  <div class="space-y-1">
    <Field
      v-slot="{ errorMessage, field }"
      type="textarea"
      :validate-on-input="true"
      :validate-on-blur="false"
      :name="name"
    >
      <textarea
        v-bind="field"
        :name="name"
        :class="{ 'outline outline-primary-error': errorMessage }"
        :placeholder="placeholder"
        class="h-[calc(1lh+2.5rem+2px)] min-h-[calc(1lh+2.5rem+2px)] w-full p-5 rounded-lg border-gray-border border bg-primary-light resize-y [scrollbar-width:thin] text-input"
      />
    </Field>
    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>
