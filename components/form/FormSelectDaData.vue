<script setup lang="ts">
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

const suggestions = ref([])
const isFetching = shallowRef(false)
const id = useId()

watch(value, () => {
  fetchSuggestions()
})

async function fetchSuggestions() {
  if (!value.value) {
    suggestions.value = []
    return
  }

  isFetching.value = true

  const response = await fetch(
    props.url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${import.meta.env.VITE_DADATA_API_KEY}`,
        'X-secret': import.meta.env.VITE_DADATA_SECRET_KEY,
      },
      body: JSON.stringify({
        query: value.value,
        ...props.body,
      }),
    },
  )

  const data = await response.json()

  if (props.distinct) {
    const seen = new Set<string>()
    suggestions.value = (data.suggestions as never[]).filter((el) => {
      const key = props.textContent(el)
      if (seen.has(key))
        return false
      seen.add(key)
      return true
    })
  } else {
    suggestions.value = data.suggestions
  }

  isFetching.value = false
}

const selected = ref<any>(null)

watch(() => props.referenceValue, () => {
  selected.value = null
  suggestions.value = []
  setValue('')
})

defineExpose({ selected })
</script>

<template>
  <div>
    <ComboboxRoot
      v-model="selected"
      :ignore-filter="true"
      :disabled="disabled"
      required
    >
      <div class="relative">
        <ComboboxAnchor class="relative">
          <ComboboxInput
            :id="id"
            v-model="value"
            type="text"
            :aria-describedby="`hint-${id}`"
            autocomplete="none"
            :title="disabled ? disabledTitle : null"
            :placeholder="placeholder"
            :display-value="(val) => val ? textContent(val) : ''"
            class="w-full p-5 bg-white text-input rounded-(--select-radius)"
          />
          <svg
            class="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none mr-5.5"
            width="12"
            aria-hidden="true"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.96004 4.47501L6.70004 7.73501C6.31504 8.12001 5.68504 8.12001 5.30004 7.73501L2.04004 4.47501"
              stroke="#7F7F7F"
              stroke-width="0.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ComboboxAnchor>

        <ComboboxContent class="absolute top-full mt-1 overflow-y-auto bg-white rounded-(--select-radius) shadow-lg max-h-60 w-full z-50">
          <ComboboxViewport>
            <ComboboxEmpty class="p-4 text-center select-none">
              {{
                isFetching
                  ? 'Загружаем...'
                  : value === ''
                    ? 'Введите запрос'
                    : 'Ничего не найдено' }}
            </ComboboxEmpty>
            <ComboboxItem
              v-for="(option, i) in suggestions"
              :key="i"
              :value="option"
              :text-value="textContent(option)"
              class="data-[highlighted]:bg-gray-200 min-h-15 w-full flex flex-col justify-center select-none cursor-pointer text-[14px]"
            >
              <ComboboxSeparator
                class="h-px bg-gray-100 w-full"
              />

              <div
                class="flex flex-row items-center justify-between p-2 gap-x-2 my-auto"
              >
                {{ textContent(option) }}
              </div>
            </ComboboxItem>
          </ComboboxViewport>
        </ComboboxContent>
      </div>
    </ComboboxRoot>
    <ErrorMessage
      v-if="meta.touched"
      :id="`hint-${id}`"
      :name="name"
      class="text-(--imask-iv-text,_var(--color-red-600)) mt-1 block text-[14px]"
    />
  </div>
</template>
