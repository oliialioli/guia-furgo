import { Link } from 'react-router-dom'
import type { TroubleshootingItem } from '../content/types'

export function TroubleshootingCard({
  items,
  helpHref = '/ayuda',
}: {
  items: TroubleshootingItem[]
  helpHref?: string
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
        ¿Algo no funciona?
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-[1.4rem] bg-foam/80 px-4 py-4"
          >
            <h3 className="font-display text-base font-semibold text-pine">
              {item.title}
            </h3>
            <ul className="mt-2 space-y-1.5">
              {item.steps.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-moss" />
                  {step}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <Link
        to={helpHref}
        className="flex min-h-12 items-center justify-center rounded-[1.2rem] bg-pine px-4 text-center font-medium text-foam transition hover:bg-pine-mid active:scale-[0.99]"
      >
        Sigue sin funcionar
      </Link>
    </section>
  )
}
