import { Link } from 'react-router-dom'
import type { Guide } from '../content/types'
import { InfoCallout } from './InfoCallout'
import { StepItem } from './StepItem'
import { TroubleshootingCard } from './TroubleshootingCard'
import { VideoGuide } from './VideoGuide'
import { WarningCallout } from './WarningCallout'

export function GuidePage({ guide }: { guide: Guide }) {
  const helpHref = '/ayuda'

  return (
    <article>
      <p className="text-[16px] leading-relaxed text-ink-soft">
        {guide.description}
      </p>

      {guide.video ? (
        <div className="mt-5">
          <VideoGuide media={guide.video} title={guide.title} />
        </div>
      ) : null}

      <h2 className="mt-8 font-display text-xl font-semibold tracking-[-0.03em] text-pine">
        Paso a paso
      </h2>
      <ol className="mt-5">
        {guide.steps.map((step, index) => (
          <StepItem key={step.id} index={index + 1} step={step} />
        ))}
      </ol>

      {guide.warning ? (
        <div className="mt-1">
          <WarningCallout>{guide.warning}</WarningCallout>
        </div>
      ) : null}

      {guide.info ? (
        <div className="mt-4">
          <InfoCallout>{guide.info}</InfoCallout>
        </div>
      ) : null}

      {guide.troubleshooting?.length ? (
        <div className="mt-8">
          <TroubleshootingCard
            items={guide.troubleshooting}
            helpHref={helpHref}
          />
        </div>
      ) : (
        <p className="mt-8 text-sm text-ink-soft">
          ¿Sigue sin salir bien?{' '}
          <Link to="/ayuda" className="font-medium text-pine underline">
            Ve a Ayuda
          </Link>
        </p>
      )}
    </article>
  )
}
