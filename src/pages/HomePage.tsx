import { useState } from 'react'
import { Link } from 'react-router-dom'
import { guides } from '../content/guides'
import { searchContent } from '../content/search'
import { situations } from '../content/situations'
import { Icon } from '../components/Icon'
import { Page } from '../components/Page'
import { SearchBar } from '../components/SearchBar'
import { SearchResults } from '../components/SearchResults'
import { SituationCard } from '../components/SituationCard'
import { GuideCard } from '../components/GuideCard'
import { VanSpecs } from '../components/VanSpecs'

const quickGuides = [
  { id: 'puertas', title: 'Puertas y cierres' },
  { id: 'cama', title: 'Cama' },
  { id: 'cocina', title: 'Cocina' },
  { id: 'agua', title: 'Agua' },
  { id: 'ducha', title: 'Ducha' },
  { id: 'electricidad', title: 'Electricidad' },
  { id: 'calefaccion', title: 'Calefacción' },
  { id: 'nevera', title: 'Nevera' },
  { id: 'ventanas', title: 'Ventanas' },
  { id: 'exterior', title: 'Exterior' },
] as const

export function HomePage() {
  const [query, setQuery] = useState('')
  const hits = searchContent(query)
  const searching = query.trim().length >= 2

  return (
    <Page className="pt-[max(1.25rem,env(safe-area-inset-top))]">
      <header className="pt-4 pb-2">
        <p className="font-display text-[2.35rem] leading-[0.95] font-semibold tracking-[-0.05em] text-pine">
          Guía de la furgo
        </p>
        <p className="mt-3 max-w-[20rem] text-[16px] leading-relaxed text-ink-soft">
          Todo lo que necesitas para disfrutar del viaje y saber cómo funciona
          cada cosa.
        </p>
      </header>

      <div className="mt-6">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {searching ? (
        <SearchResults query={query} hits={hits} />
      ) : (
        <>
          <section className="mt-9">
            <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
              ¿Qué quieres hacer?
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {situations.map((situation) => (
                <SituationCard
                  key={situation.id}
                  to={`/situacion/${situation.id}`}
                  icon={situation.icon}
                  title={situation.title}
                  description={situation.description}
                />
              ))}
            </div>
          </section>

          <section className="mt-9">
            <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
              Guía rápida
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {quickGuides.map((item) => {
                const guide = guides.find((entry) => entry.id === item.id)
                return (
                  <GuideCard
                    key={item.id}
                    to={`/guia/${item.id}`}
                    icon={guide?.icon ?? 'guide'}
                    title={item.title}
                  />
                )
              })}
            </div>
          </section>

          <div className="mt-6">
            <VanSpecs compact />
          </div>

          <Link
            to="/ayuda"
            className="mt-3 flex min-h-[5.5rem] items-center gap-4 rounded-[1.6rem] bg-alert-soft px-4 py-4 text-alert"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-alert text-foam">
              <Icon name="problem" size={22} />
            </span>
            <span>
              <span className="block font-display text-lg font-semibold tracking-[-0.02em]">
                Tengo un problema
              </span>
              <span className="text-sm text-ink-soft">
                Averías, puertas, pinchazo o lo que sea
              </span>
            </span>
          </Link>
        </>
      )}
    </Page>
  )
}
