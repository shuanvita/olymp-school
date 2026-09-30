<template>
  <div class="space-y-1">
    <div class="relative imask-wrapper">
      <!-- простой селектор кодов (замените на свой Combobox при необходимости) -->
      <HeadlessCombobox v-slot="{ open }" as="template" @update:model-value="(value) => handleCodeUpdate(value)">
        <HeadlessComboboxInput v-show="open" autocomplete="none" placeholder="Поиск страны или код"
          class="absolute cursor-text p-5 rounded-lg border-gray-border border bg-primary-light w-full outline-none z-10 text-input"
          @change="query = $event.target.value" />
        <HeadlessComboboxButton tabindex="0" :class="{ 'pointer-events-none': open }"
          class="h-full flex items-center cursor-pointer gap-x-1.5 pl-4 pr-1 rounded-l-lg absolute left-0">
          <iconify-icon :aria-label="selected.translateRU" :icon="selected.emoji" class="text-2xl" />
          <iconify-icon class="rotate-180 text-[10px]" icon="bxs:up-arrow" aria-hidden="true" />
        </HeadlessComboboxButton>
        <HeadlessComboboxOptions
          class="absolute top-full mt-1 overflow-auto text-primary-paragraph-md bg-white rounded-lg shadow-lg max-h-60 w-full z-50 options">
          <div v-if="filterredMasks.length === 0 && query !== ''" class="relative p-2 select-none">
            Ничего не найдено.
          </div>
          <HeadlessComboboxOption v-for="(item, ind) in filterredMasks" :key="ind" v-slot="{ active }" as="template"
            :value="item">
            <li class="relative flex flex-row items-center justify-between p-2 select-none gap-x-2"
              :class="{ 'bg-primary-light': active }">
              <div class="flex flex-row gap-x-2.5">
                <iconify-icon :icon="item.emoji" class="self-center shrink-0 text-[20px]" />
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


      <!-- <div v-if="open" class="absolute top-full mt-1 w-full z-50 bg-white shadow rounded-md max-h-60 overflow-auto p-1">
        <button
          v-for="(item, idx) in filteredMasks"
          :key="idx"
          @click="handleCodeUpdate(item)"
          class="w-full text-left p-2 hover:bg-gray-100 flex justify-between items-center"
        >
          <span class="flex items-center gap-2">
            <iconify-icon :icon="item.emoji" class="text-[20px]" />
            <span>{{ item.translateRU }} <span lang="en">({{ item.name }})</span></span>
          </span>
          <span>+{{ item.startsWith }}</span>
        </button>
      </div> -->

      <!-- <input
        v-model="query"
        @input="onQueryInput"
        autocomplete="none"
        class="absolute cursor-text p-5 rounded-lg border-gray-border border bg-primary-light w-full outline-none z-10 text-input"
        placeholder="Поиск страны или код..."
      /> -->

      <IMaskComponent ref="phoneComponent" :key="selected.mask" v-model="localValue" :name="name" :mask="selected.mask"
        :definitions="{ '#': /\d/ }" :lazy="false" type="tel" autocomplete="tel" @input="onDebugInput"
        @focus="onDebugFocus" @accept="onAccept" @complete="onComplete"
        class="imask w-full pr-5 pl-15 py-5 rounded-lg border-gray-border border bg-primary-light text-input" />
    </div>

    <ErrorMessage :name="name" class="text-primary-error" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, nextTick, onMounted, defineExpose } from 'vue'
import { IMaskComponent } from 'vue-imask'
import { useField, ErrorMessage } from 'vee-validate'
import masks from '../../data/masks.json'

/* props */
const props = defineProps<{ name: string }>()

/* vee-validate field */
const { value, errorMessage } = useField(() => props.name)

/* masks setup */
masks.sort((a: any, b: any) => a.translateRU.localeCompare(b.translateRU))
const indexRussia = masks.findIndex((obj: any) => obj.translateRU.includes('Россия'))
const selected = ref<any>(masks[indexRussia] ?? masks[0])

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

/* UI state */
const open = ref(false)

/* refs */
const phoneComponent = ref<any>(null)        // ref на IMaskComponent
const imaskInstance = ref<any>(null)         // реальный экземпляр IMask (или null)
const valid = ref(false)

/* найти экземпляр IMask в зависимости от версии vue-imask */
function findImaskInstance(comp: any) {
  if (!comp) return null

  // если передали уже экземпляр IMask
  if (typeof comp === 'object' && (typeof comp.updateOptions === 'function' || typeof comp.destroy === 'function')) {
    return comp
  }

  const candidates = [
    comp.imask,
    comp.maskRef,
    comp.$?.__imask ?? comp.$el?.__imask,
    comp.$el?.maskRef,
    comp.$el,
  ]

  for (const c of candidates) {
    if (!c) continue
    if (typeof c === 'object' && (typeof c.updateOptions === 'function' || typeof c.destroy === 'function')) {
      return c
    }
  }

  return null
}

/* присвоить экземпляр и синхронизировать значение */
async function assignImaskInstance() {
  await nextTick()
  const inst = findImaskInstance(phoneComponent.value)
  if (inst) {
    imaskInstance.value = inst
    // синхронизируем текущую маску/значение чтобы избежать предупреждений в Firefox
    try {
      if (typeof inst.updateOptions === 'function') {
        inst.updateOptions({ mask: selected.value.mask })
      }
      if (typeof inst.updateValue === 'function') {
        inst.updateValue()
      }
    } catch (e) {
      // ignore
    }
  }
}

/* публичная функция обновления маски */
async function updateMask() {
  // гарантия: имейте в imaskInstance только реальный экземпляр IMask
  if (!imaskInstance.value || typeof imaskInstance.value !== 'object' || typeof imaskInstance.value.updateOptions !== 'function') {
    await assignImaskInstance() // попытается найти/назначить инстанс
  }

  const inst = imaskInstance.value

  // если всё ещё нет рабочего инстанса — пересоздадим на нативном input
  if (!inst || typeof inst.updateOptions !== 'function') {
    const compEl = phoneComponent.value?.$el ?? phoneComponent.value
    const input = compEl?.querySelector ? compEl.querySelector('input,textarea') : (compEl?.tagName === 'INPUT' ? compEl : null)
    if (!input) return

    try {
      const IMask = (await import('imask')).default
      const prev = (inst && (inst.unmaskedValue ?? inst.value)) ?? input.value ?? ''
      try { inst?.destroy?.() } catch {}
      const newInst = IMask(input, { mask: selected.value.mask, definitions: { '#': /\d/ }, lazy: false })
      try { newInst.unmaskedValue = String(prev) } catch { newInst.value = String(prev) }
      imaskInstance.value = newInst
    } catch (err) {
      console.warn('updateMask error', err)
    }
    return
  }

  // нормальный путь: обновляем опции
  try {
    inst.updateOptions({ mask: selected.value.mask })
    inst.updateValue?.()
  } catch (err) {
    console.warn('updateMask error', err)
  }
}

/* события */
function onAccept() {
  if (valid.value) valid.value = false
}
function onComplete() {
  valid.value = true
}

/* выбор кода */
async function handleCodeUpdate(newVal: any) {
  selected.value = newVal
  localValue.value = ''   // очистим локальный v-model
  value.value = ''        // очистим форму
  open.value = false

  await nextTick()        // дождёмся ремонта IMaskComponent по key
  await assignImaskInstance()
  const el = phoneComponent.value?.$el ?? phoneComponent.value
  if (el?.focus) el.focus()
}

/* при изменении v-model синхронизируем mask instance */
watch(value, async () => {
  if (!imaskInstance.value) {
    await assignImaskInstance()
  }
  try { imaskInstance.value?.updateValue?.() } catch (e) { /* ignore */ }
})

/* инициализация */
onMounted(async () => {
  await assignImaskInstance()
})

/* безопасный proxy-объект для экспорта: phoneRef.value.imask.value всегда строка */
const imaskProxy = {
  get value() {
    try {
      const v = imaskInstance.value?.value
      return v == null ? '' : String(v)
    } catch {
      return ''
    }
  },
  // реальный экземпляр на случай, если родителю нужен доступ к API
  get _instance() {
    return imaskInstance.value
  }
}

/* expose: имитируем прежний интерфейс (phoneRef.value.imask.value) и phoneRef.value.valid */
defineExpose({
  imask: imaskProxy,    // parent can do phoneRef.value.imask.value (always string) and phoneRef.value.imask._instance
  valid,
  updateMask,
  selected,
})

/* поиск */
function onQueryInput(e: Event) {
  query.value = (e.target as HTMLInputElement).value
}

// локальное состояние для поля (разрыв синхронизации)
const localValue = ref<string>(value.value ?? '')

// синхронизация лок -> vee-validate (делаем только при реальном изменении)
watch(localValue, (v, old) => {
  if (v === old) return
  value.value = v // обновляем поле формы
})

// синхронизация vee-validate -> лок (если внешне меняют значение)
watch(value, (v) => {
  if (v !== localValue.value) localValue.value = v ?? ''
})
watch(selected, () => {
  nextTick(() => {
    assignImaskInstance()
    updateMask()
  })
})

// отладка: логируем события ввода/фокус
function onDebugInput(e: Event) { console.log('input', (e.target as HTMLInputElement).value) }
function onDebugFocus() { console.log('focus') }
</script>

<style scoped>
.imask-wrapper {
  max-width: 720px;
  margin: 0 auto;
  position: relative;
}

.imask {
  box-sizing: border-box;
}
</style>