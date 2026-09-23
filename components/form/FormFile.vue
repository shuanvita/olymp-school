<template>
    <div class="flex flex-col">
        <div class="flex flex-col items-center gap-2">
            <button type="button" @click="triggerFile" style="border:2px solid white;"
                class="px-10 py-4 border-[2px] flex cursor-pointer items-center gap-3 border-primary font-semibold  text-white rounded-3xl transition"><svg
                v-if="!fileName"
                    xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                    <path
                        d="M10.3728 11.9287V6.22367C10.3728 5.12326 9.93565 4.06792 9.15754 3.28981C8.37943 2.5117 7.32409 2.07456 6.22367 2.07456C5.12326 2.07456 4.06792 2.5117 3.28981 3.28981C2.5117 4.06792 2.07456 5.12326 2.07456 6.22367V11.9287C2.07456 13.7169 2.78491 15.4318 4.04934 16.6962C5.31376 17.9607 7.0287 18.671 8.81687 18.671C10.605 18.671 12.32 17.9607 13.5844 16.6962C14.8488 15.4318 15.5592 13.7169 15.5592 11.9287V2.07456H17.6337V11.9287C17.6337 14.2671 16.7048 16.5097 15.0513 18.1632C13.3979 19.8167 11.1552 20.7456 8.81687 20.7456C6.47849 20.7456 4.23589 19.8167 2.5824 18.1632C0.928918 16.5097 0 14.2671 0 11.9287V6.22367C0 4.57305 0.655707 2.99004 1.82287 1.82287C2.99004 0.655706 4.57305 0 6.22367 0C7.87429 0 9.45731 0.655706 10.6245 1.82287C11.7916 2.99004 12.4473 4.57305 12.4473 6.22367V11.9287C12.4473 12.8916 12.0649 13.815 11.384 14.4958C10.7032 15.1767 9.77973 15.5592 8.81687 15.5592C7.85401 15.5592 6.93058 15.1767 6.24974 14.4958C5.56889 13.815 5.18639 12.8916 5.18639 11.9287V6.22367H7.26095V11.9287C7.26095 12.3414 7.42488 12.7371 7.71667 13.0289C8.00846 13.3207 8.40421 13.4846 8.81687 13.4846C9.22953 13.4846 9.62528 13.3207 9.91707 13.0289C10.2089 12.7371 10.3728 12.3414 10.3728 11.9287V11.9287Z"
                        fill="white" />
                </svg>
                <span v-if="!fileName">Прикрепить документы</span>
                <span v-if="fileName">Документ прикреплен</span>
            </button>



            <button v-if="fileName" type="button" @click="clearFile" class="text-sm text-white cursor-pointer hover:underline">
                Удалить документ
            </button>
        </div>

        <!-- скрытый native input -->
        <input ref="inputRef" type="file" class="hidden" :accept="acceptAttr" @change="onChange" />

        <div v-if="errorMessage" class="text-sm text-primary-error mt-1">{{ errorMessage }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
    name: { type: String, required: true },
    accept: { type: String, default: '' },
})

const inputRef = ref<HTMLInputElement | null>(null)
const fileName = ref<string>('')

const { value, errorMessage, setValue, setTouched } = useField<File | null>(props.name)

const acceptAttr = computed(() => {
    if (!props.accept) return ''
    return props.accept.split(',').map(s => {
        const t = s.trim().replace(/^\./, '')
        return '.' + t
    }).join(',')
})

function triggerFile() {
    inputRef.value?.click()
}

function onChange(e: Event) {
    const f = (e.target as HTMLInputElement).files?.[0] ?? null
    setTouched(true)
    setValue(f)
    fileName.value = f ? f.name : ''
}

function clearFile() {
    setValue(null)
    fileName.value = ''
    if (inputRef.value) inputRef.value.value = ''
}
</script>