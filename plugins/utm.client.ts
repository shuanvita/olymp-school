import { defineNuxtPlugin, addRouteMiddleware, useCookie } from '#app'

export default defineNuxtPlugin(() => {
  const utmKeys = ['source','medium','campaign','content','date']
  const cookiePrefix = 'utm'
  const maxAge = 30*24*3600

  addRouteMiddleware(
    'utm-capture',
    (to) => {
      const q = to.query
      for (const k of utmKeys) {
        const qName = `utm_${k}`
        const firstName = `${cookiePrefix}_${k}_first`
        const lastName = `${cookiePrefix}_${k}_last`

        const first = useCookie(firstName, { maxAge })
        const last = useCookie(lastName, { maxAge })

        // Нормализация значения из cookie для проверки "undefined"/"null"
        const normStr = (v: any) => (v === undefined || v === null) ? null : String(v).trim().toLowerCase()

        // Если в куках лежит строка "undefined" или "null" — удаляем её (независимо от наличия UTM в текущем визите)
        if (normStr(first.value) === 'undefined' || normStr(first.value) === 'null') first.value = null
        if (normStr(last.value) === 'undefined' || normStr(last.value) === 'null') last.value = null

        // Обрабатываем пришедшую метку (если есть)
        const raw = q[qName]
        if (raw === undefined || raw === null) continue

        const val = Array.isArray(raw) ? raw[0] : String(raw)
        const safe = sanitizeUtm(val)
        if (!safe) continue
        const low = safe.toLowerCase()
        if (low === 'undefined' || low === 'null') continue

        // Если первичная метка уже есть (и не была "undefined"/"null") — НЕ перезаписываем её.
        // Иначе — сохраняем первичную.
        if (!first.value) first.value = safe

        // last обновляем только если пришла новая валидная метка
        last.value = safe
      }
    },
    { global: true }
  )

  function sanitizeUtm(v: string) {
    const cleaned = v.replace(/[\x00-\x1F\x7F]/g, '').trim()
    return cleaned.length > 250 ? cleaned.slice(0, 250) : cleaned
  }
})