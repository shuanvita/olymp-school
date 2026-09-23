function orderedCount(str: string) {
  const symbols = new Map()
  for (const c of str) {
    const currCount = symbols.get(c) || 0
    symbols.set(c, currCount + 1)
  }
  const orderedSymbols = [...symbols.entries()]
  return orderedSymbols
}

export function validatePhone(imask: string, completed: boolean) {
  let flag = true
  const diff = orderedCount(imask)
  diff.forEach((el: any) => {
    if (el[1] > 6) {
      flag = false
    }
  })
  return flag && completed
}
