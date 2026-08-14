import { TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'

export function WarningCallout({
  title = 'Importante',
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <aside className="rounded-[1.35rem] bg-alert-soft px-4 py-4 text-alert">
      <p className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide uppercase">
        <TriangleAlert size={18} strokeWidth={1.85} />
        {title}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink">{children}</p>
    </aside>
  )
}
