import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import { Icon } from './Icon'

const wells: Record<string, string> = {
  drive: 'bg-[#24463a] text-foam',
  sleep: 'bg-[#1d3842] text-foam',
  cook: 'bg-[#3c4d32] text-foam',
  shower: 'bg-[#2a4f55] text-foam',
  power: 'bg-[#3d4a28] text-foam',
  return: 'bg-[#2f3d2c] text-foam',
}

export function SituationCard({
  to,
  icon,
  title,
  description,
}: {
  to: string
  icon: string
  title: string
  description?: string
}) {
  return (
    <Link
      to={to}
      className="group flex min-h-[7.25rem] flex-col justify-between rounded-[1.6rem] bg-foam/80 p-4 transition duration-200 hover:bg-foam active:scale-[0.98]"
    >
      <span
        className={cn(
          'flex size-11 items-center justify-center rounded-2xl',
          wells[icon] ?? 'bg-pine text-foam',
        )}
      >
        <Icon name={icon} size={22} />
      </span>
      <span>
        <span className="mt-3 block font-display text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-pine">
          {title}
        </span>
        {description ? (
          <span className="sr-only">{description}</span>
        ) : null}
      </span>
    </Link>
  )
}
