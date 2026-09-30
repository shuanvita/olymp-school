export function withBase(path: string) {
  const baseURL = useRuntimeConfig().app.baseURL.replace(/\/$/, '')
  return baseURL + path
}
