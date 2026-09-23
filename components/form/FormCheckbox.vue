<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{ name: string, class?: string, classtext?: string }>()

const { value, handleChange } = useField(() => props.name, undefined, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
})

value.value = [true]
</script>

<template>
  <div
    class="space-y-1"
  >
    <label class="flex flex-row items-center gap-x-3 cursor-pointer">
      <Field
        :name="name"
        type="checkbox"
        class="after:absolute after:text-white after:mt-0.5 border border-white rounded-sm flex items-center justify-center size-5 relative appearance-none shrink-0 checked:after:content-['\2713']"
        :class=props.class
        :value="true"
        @change="handleChange"
      />
      <p class="text-white" :class=props.classtext>
        Я даю
        <NuxtLink
          target="_blank"
          class="not-hover:underline"
          to="https://mipt.ru/docs/download.php?code=politika_obrabotki_personalnykh_dannykh"
        >
          согласие на обработку моих&nbsp;персональных данных
        </NuxtLink>
      </p>
    </label>
    <ErrorMessage
      :name="name"
      class="text-primary-error"
    />
  </div>
</template>
