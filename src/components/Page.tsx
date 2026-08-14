import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export function Page({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <main
      className={cn(
        'animate-in px-5 pt-3 pb-[calc(7.5rem+env(safe-area-inset-bottom))]',
        className,
      )}
    >
      {children}
    </main>
  )
}
