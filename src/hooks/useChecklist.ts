import { useEffect, useState } from 'react'

function readStored(key: string, ids: string[]): string[] {
  try {
    const raw = localStorage.getItem(key)
    const parsed = raw ? (JSON.parse(raw) as unknown) : []
    return Array.isArray(parsed)
      ? parsed.filter(
          (id): id is string => typeof id === 'string' && ids.includes(id),
        )
      : []
  } catch {
    return []
  }
}

export function useChecklist(checklistId: string, itemIds: string[]) {
  const key = `furgo-checklist:${checklistId}`
  const allowed = itemIds.join('|')

  const [checked, setChecked] = useState<string[]>(() =>
    readStored(key, itemIds),
  )

  useEffect(() => {
    setChecked(readStored(key, allowed.split('|').filter(Boolean)))
  }, [key, allowed])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(checked))
  }, [checked, key])

  function toggle(id: string) {
    setChecked((current) => {
      const isOn = current.includes(id)
      if (!isOn && typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(10)
      }
      return isOn ? current.filter((item) => item !== id) : [...current, id]
    })
  }

  function reset() {
    setChecked([])
  }

  return {
    checked,
    toggle,
    reset,
    done: checked.length,
    total: itemIds.length,
    complete: itemIds.length > 0 && checked.length === itemIds.length,
    isChecked: (id: string) => checked.includes(id),
  }
}
