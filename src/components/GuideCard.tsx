import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function GuideCard({
  to,
  icon,
  title,
}: {
  to: string
  icon: string
  title: string
}) {
  return (
    <Link
      to={to}
      className="flex min-h-[4.5rem] items-center gap-3 rounded-[1.35rem] bg-foam/75 px-3.5 py-3 transition hover:bg-foam active:scale-[0.99]"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mist text-pine">
        <Icon name={icon} size={18} />
      </span>
      <span className="font-medium leading-snug text-pine">{title}</span>
    </Link>
  )
}
