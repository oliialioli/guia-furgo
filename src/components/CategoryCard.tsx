import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function CategoryCard({
  to,
  icon,
  title,
  description,
}: {
  to: string
  icon: string
  title: string
  description: string
}) {
  return (
    <Link
      to={to}
      className="flex min-h-[5.75rem] items-center gap-4 rounded-[1.5rem] bg-foam/80 px-4 py-4 transition hover:bg-foam active:scale-[0.99]"
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-mist text-pine">
        <Icon name={icon} size={22} />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-pine">
          {title}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-ink-soft">
          {description}
        </span>
      </span>
    </Link>
  )
}
