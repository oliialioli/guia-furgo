import { Link } from 'react-router-dom'
import type { SearchHit } from '../content/types'
import { EmptyState } from './EmptyState'
import { Icon } from './Icon'

export function SearchResults({
  query,
  hits,
}: {
  query: string
  hits: SearchHit[]
}) {
  if (query.trim().length < 2) return null

  if (hits.length === 0) {
    return (
      <div className="mt-6">
        <EmptyState title={`No encontramos nada sobre “${query.trim()}”`}>
          Prueba con ducha, cama, gas, puertas o batería.
        </EmptyState>
      </div>
    )
  }

  return (
    <ul className="mt-5 space-y-2">
      {hits.map((hit) => (
        <li key={hit.id}>
          <Link
            to={hit.href}
            className="flex min-h-16 items-center gap-3 rounded-[1.35rem] bg-foam/80 px-4 py-3 transition hover:bg-foam active:scale-[0.99]"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-mist text-pine">
              <Icon name={hit.icon} size={20} />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-pine">{hit.title}</span>
              <span className="block truncate text-sm text-ink-soft">
                {hit.subtitle}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
