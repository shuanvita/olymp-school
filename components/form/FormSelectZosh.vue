<template>
  <div class="space-y-1">
    <HeadlessListbox v-model="selectedPerson">
      <div class="relative mt-1">
        <HeadlessListboxButton
          class="relative cursor-pointer w-full text-left pr-5 pl-5 text-input py-5 rounded-lg border-gray-border border bg-primary-light"
        >
          <span class="block truncate">{{ selectedPerson ? selectedPerson.name:'Выберите смену' }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
          <iconify-icon
                  aria-hidden="true"
                  class="text-gray-500 flex items-center"
                  icon="ri:arrow-drop-down-line"
                  width="32" height="32"
                />
           
          </span>
        </HeadlessListboxButton>

        <HeadlessTransition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <HeadlessListboxOptions
            class="absolute mt-1 max-h-60 z-30 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <HeadlessListboxOption
              v-slot="{ active, selected }"
              v-for="person in people"
              :key="person.name"
              :value="person"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-primary-light text-black' : 'text-gray-900',
                  'relative cursor-pointer select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ person.name }}<br/><i>{{ person.date }}</i></span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </HeadlessListboxOption>
          </HeadlessListboxOptions>
        </HeadlessTransition>
      </div>
    </HeadlessListbox>
    <ErrorMessage
      v-if="meta.touched"
      :id="`hint-${id}`"
      :name="name"
      class="text-(--imask-iv-text,_var(--color-red-600)) mt-1 block text-[14px]"
    />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  name: string
  placeholder?: string
  textContent: (el: any) => string
  url: string
  body: Record<string, any>
  disabled?: boolean
  disabledTitle?: string
  distinct?: boolean
  referenceValue?: any
}>()

const { value, setValue, meta } = useField<string>(() => props.name)


const people = [
  { name: 'Зимняя Олимпиадная школа МФТИ 2027', date: '4 января-12 января', klass: [8,9,10,11], id: 693 },
]
const selectedPerson = ref(people[0])
watch(selectedPerson, (newValue, oldValue) => {
  
});
defineExpose({ selectedPerson })
</script>
