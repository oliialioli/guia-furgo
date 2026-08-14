import { MessageCircle, Phone } from 'lucide-react'
import { contact } from '../content/contact'

export function ContactCTA({
  title = 'Contactar con nosotros',
}: {
  title?: string
}) {
  return (
    <section className="rounded-[1.6rem] bg-foam/85 p-5">
      <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-pine">
        {title}
      </h2>
      <p className="mt-1 text-sm text-ink-soft">
        Te respondemos lo antes posible. Los números son de ejemplo hasta
        configurar los reales.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <a
          href={contact.whatsappUrl}
          className="flex min-h-12 items-center justify-center gap-2 rounded-[1.15rem] bg-pine px-3 font-medium text-foam"
        >
          <MessageCircle size={18} strokeWidth={1.75} />
          WhatsApp
        </a>
        <a
          href={contact.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-[1.15rem] bg-mist px-3 font-medium text-pine"
        >
          <Phone size={18} strokeWidth={1.75} />
          Llamar
        </a>
      </div>
    </section>
  )
}
