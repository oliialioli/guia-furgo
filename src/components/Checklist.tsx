import { Check } from 'lucide-react'
import type { ChecklistItem } from '../content/types'
import { useChecklist } from '../hooks/useChecklist'
import { cn } from '../lib/cn'

export function Checklist({
  id,
  items,
  title = 'Lista',
}: {
  id: string
  items: ChecklistItem[]
  title?: string
}) {
  const itemIds = items.map((item) => item.id)
  const list = useChecklist(id, itemIds)

  return (
    <section>
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
            {title}
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            {list.complete
              ? 'Todo listo. Buen viaje.'
              : `${list.done} de ${list.total}`}
          </p>
        </div>
        {list.done > 0 ? (
          <button
            type="button"
            onClick={list.reset}
            className="min-h-11 px-2 text-sm font-medium text-moss"
          >
            Reiniciar
          </button>
        ) : null}
      </div>

      <div
        className="mb-4 h-1.5 overflow-hidden rounded-full bg-mist"
        aria-hidden
      >
        <div
          className="h-full rounded-full bg-pine transition-all duration-300"
          style={{
            width: `${list.total ? (list.done / list.total) * 100 : 0}%`,
          }}
        />
      </div>

      <ul className="space-y-2">
        {items.map((item) => {
          const on = list.isChecked(item.id)
          return (
            <li key={item.id}>
              <label
                className={cn(
                  'flex min-h-14 cursor-pointer items-center gap-3 rounded-[1.3rem] px-3.5 py-3 transition',
                  on ? 'bg-pine text-foam' : 'bg-foam/80 text-ink',
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={on}
                  onChange={() => list.toggle(item.id)}
                />
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-lg border transition',
                    on
                      ? 'scale-100 border-sun bg-sun text-pine'
                      : 'border-pine/25 bg-foam',
                  )}
                >
                  {on ? <Check size={16} strokeWidth={2.4} /> : null}
                </span>
                <span className="min-w-0">
                  <span
                    className={cn(
                      'block text-[15px] leading-snug font-medium',
                      on && 'line-through decoration-foam/40',
                    )}
                  >
                    {item.label}
                  </span>
                  {item.hint ? (
                    <span
                      className={cn(
                        'mt-0.5 block text-xs',
                        on ? 'text-foam/70' : 'text-ink-soft',
                      )}
                    >
                      {item.hint}
                    </span>
                  ) : null}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
