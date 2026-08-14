import { ChevronLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { cn } from '../lib/cn'

export function AppHeader({
  title,
  back = false,
  trailing,
}: {
  title: string
  back?: boolean | string
  trailing?: ReactNode
}) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-20 -mx-5 mb-5 bg-[#d5e0d3]/80 px-5 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md">
      <div className="flex min-h-14 items-center gap-2">
        {back ? (
          <button
            type="button"
            onClick={() =>
              typeof back === 'string' ? navigate(back) : navigate(-1)
            }
            className="flex size-11 shrink-0 items-center justify-center rounded-2xl text-pine transition hover:bg-foam/70 active:scale-[0.97]"
            aria-label="Volver"
          >
            <ChevronLeft size={26} strokeWidth={1.75} />
          </button>
        ) : (
          <span className="w-2" />
        )}
        <h1
          className={cn(
            'min-w-0 flex-1 font-display text-[1.35rem] leading-tight font-semibold tracking-[-0.03em] text-pine',
            back ? 'text-center' : 'text-left',
          )}
        >
          {title}
        </h1>
        <div className="flex size-11 shrink-0 items-center justify-center">
          {trailing}
        </div>
      </div>
    </header>
  )
}
