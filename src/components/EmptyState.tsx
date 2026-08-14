import type { ReactNode } from 'react'

export function EmptyState({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="rounded-[1.5rem] bg-foam/70 px-5 py-8 text-center">
      <p className="font-display text-lg text-pine">{title}</p>
      {children ? (
        <div className="mt-2 text-sm text-ink-soft">{children}</div>
      ) : null}
    </div>
  )
}
