import type { GuideStep, Media } from '../content/types'
import { InfoCallout } from './InfoCallout'
import { MediaPlaceholder } from './MediaPlaceholder'
import { WarningCallout } from './WarningCallout'

function StepMedia({ media }: { media: Media }) {
  if (media.kind === 'video' && media.src) {
    return (
      <video
        src={media.src}
        poster={media.thumbnail}
        controls
        playsInline
        className="mt-3 w-full rounded-[1.2rem]"
      />
    )
  }

  if ((media.kind === 'image' || media.kind === 'gif') && media.src) {
    return (
      <img
        src={media.src}
        alt={media.alt ?? ''}
        className="mt-3 w-full rounded-[1.2rem] object-cover"
      />
    )
  }

  return (
    <MediaPlaceholder
      kind={media.kind}
      label={media.alt ?? media.caption}
      className="mt-3"
    />
  )
}

export function StepItem({
  index,
  step,
}: {
  index: number
  step: GuideStep
}) {
  return (
    <li className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-pine font-display text-sm font-semibold text-foam">
          {index}
        </span>
        <span className="mt-2 w-px flex-1 bg-pine/15" />
      </div>
      <div className="min-w-0 flex-1 pb-7">
        <p className="pt-1.5 text-[16px] leading-relaxed text-ink">{step.text}</p>
        {step.media ? <StepMedia media={step.media} /> : null}
        {step.warning ? (
          <div className="mt-3">
            <WarningCallout>{step.warning}</WarningCallout>
          </div>
        ) : null}
        {step.info ? (
          <div className="mt-3">
            <InfoCallout>{step.info}</InfoCallout>
          </div>
        ) : null}
      </div>
    </li>
  )
}
