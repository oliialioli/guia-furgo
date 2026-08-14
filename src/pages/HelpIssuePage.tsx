import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getHelpIssue } from '../content/help'
import { AppHeader } from '../components/AppHeader'
import { ContactCTA } from '../components/ContactCTA'
import { EmergencyCard } from '../components/EmergencyCard'
import { EmptyState } from '../components/EmptyState'
import { Page } from '../components/Page'

export function HelpIssuePage() {
  const { id } = useParams()
  const issue = id ? getHelpIssue(id) : undefined
  const [resolved, setResolved] = useState<boolean | null>(null)

  useEffect(() => {
    setResolved(null)
  }, [id])

  if (!issue) {
    return (
      <Page>
        <AppHeader title="Ayuda" back="/ayuda" />
        <EmptyState title="No encontramos ese problema." />
      </Page>
    )
  }

  return (
    <Page>
      <AppHeader title="Ayuda" back="/ayuda" />
      <h2 className="-mt-2 font-display text-[1.85rem] leading-tight font-semibold tracking-[-0.04em] text-pine">
        {issue.title}
      </h2>
      <ol className="mt-6">
        {issue.steps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-9 items-center justify-center rounded-full bg-pine font-display text-sm font-semibold text-foam">
                {index + 1}
              </span>
              {index < issue.steps.length - 1 ? (
                <span className="mt-2 w-px flex-1 bg-pine/15" />
              ) : null}
            </div>
            <p className="flex-1 pt-1.5 pb-6 text-[16px] leading-relaxed">
              {step}
            </p>
          </li>
        ))}
      </ol>

      {issue.relatedGuideId ? (
        <Link
          to={`/guia/${issue.relatedGuideId}`}
          className="mb-6 inline-flex min-h-11 items-center font-medium text-pine underline"
        >
          Ver la guía completa
        </Link>
      ) : null}

      <section className="rounded-[1.5rem] bg-foam/80 p-4">
        <h3 className="font-display text-lg font-semibold text-pine">
          ¿Se ha solucionado?
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setResolved(true)}
            className={[
              'min-h-12 rounded-[1.1rem] font-medium',
              resolved === true
                ? 'bg-pine text-foam'
                : 'bg-mist text-pine',
            ].join(' ')}
          >
            Sí
          </button>
          <button
            type="button"
            onClick={() => setResolved(false)}
            className={[
              'min-h-12 rounded-[1.1rem] font-medium',
              resolved === false
                ? 'bg-alert text-foam'
                : 'bg-mist text-pine',
            ].join(' ')}
          >
            No
          </button>
        </div>
        {resolved === true ? (
          <p className="mt-3 text-sm text-ink-soft">
            Bien. Si vuelve a pasar, aquí estaremos.
          </p>
        ) : null}
      </section>

      {resolved === false ? (
        <div className="mt-4">
          <ContactCTA />
        </div>
      ) : null}

      {issue.severity === 'urgent' ? (
        <div className="mt-8">
          <EmergencyCard />
        </div>
      ) : null}
    </Page>
  )
}
