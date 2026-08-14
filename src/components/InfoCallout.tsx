import { Info } from 'lucide-react'
import type { ReactNode } from 'react'

export function InfoCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="flex gap-3 rounded-[1.35rem] bg-mist/90 px-4 py-3.5 text-pine">
      <Info size={20} strokeWidth={1.75} className="mt-0.5 shrink-0" />
      <p className="text-[15px] leading-relaxed">{children}</p>
    </aside>
  )
}
