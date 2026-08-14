import { helpIssues } from '../content/help'
import { CategoryCard } from '../components/CategoryCard'
import { EmergencyCard } from '../components/EmergencyCard'
import { Page } from '../components/Page'

export function HelpPage() {
  return (
    <Page className="pt-[max(1.1rem,env(safe-area-inset-top))]">
      <h1 className="pt-4 font-display text-[1.85rem] leading-tight font-semibold tracking-[-0.04em] text-pine">
        ¿Qué está pasando?
      </h1>
      <p className="mt-2 text-[15px] text-ink-soft">
        Elige lo que más se parezca. Empieza por lo sencillo; si no, estamos al
        otro lado.
      </p>
      <div className="mt-5 space-y-2.5">
        {helpIssues.map((issue) => (
          <CategoryCard
            key={issue.id}
            to={`/ayuda/${issue.id}`}
            icon={issue.icon}
            title={issue.title}
            description={
              issue.severity === 'urgent'
                ? 'Prioritario · revisa esto ahora'
                : 'Comprobaciones rápidas'
            }
          />
        ))}
      </div>
      <div className="mt-8">
        <EmergencyCard />
      </div>
    </Page>
  )
}
