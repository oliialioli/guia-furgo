import { Link, useParams } from 'react-router-dom'
import { getGuide } from '../content/guides'
import type { Guide } from '../content/types'
import { getSituation } from '../content/situations'
import { AppHeader } from '../components/AppHeader'
import { CategoryCard } from '../components/CategoryCard'
import { Checklist } from '../components/Checklist'
import { EmptyState } from '../components/EmptyState'
import { Page } from '../components/Page'

export function SituationPage() {
  const { id } = useParams()
  const situation = id ? getSituation(id) : undefined

  if (!situation) {
    return (
      <Page>
        <AppHeader title="Guía" back="/" />
        <EmptyState title="No encontramos esa situación." />
      </Page>
    )
  }

  const related = situation.relatedGuideIds
    .map((guideId) => getGuide(guideId))
    .filter((guide): guide is Guide => Boolean(guide))

  return (
    <Page>
      <AppHeader title={situation.shortTitle} back="/" />
      <p className="mb-6 text-[16px] leading-relaxed text-ink-soft">
        {situation.description}
      </p>
      <Checklist
        key={situation.id}
        id={situation.id}
        items={situation.checklist}
        title={situation.title}
      />
      {related.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
            Si quieres ir al detalle
          </h2>
          <div className="mt-4 space-y-2.5">
            {related.map((guide) => (
              <CategoryCard
                key={guide.id}
                to={`/guia/${guide.id}`}
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
              />
            ))}
          </div>
        </section>
      ) : null}
      <p className="mt-6 text-sm text-ink-soft">
        ¿Algo no sale?{' '}
        <Link to="/ayuda" className="font-medium text-pine underline">
          Ve a Ayuda
        </Link>
      </p>
    </Page>
  )
}
