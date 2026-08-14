import { Phone, Shield, Siren, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../content/contact'
import { van } from '../content/van'
import { cn } from '../lib/cn'

export function EmergencyCard() {
  return (
    <section className="rounded-[1.7rem] bg-[#3a2422] p-5 text-[#f6ebe6]">
      <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">
        Emergencia
      </p>
      <h2 className="mt-1 font-display text-[1.65rem] leading-tight font-semibold tracking-[-0.03em]">
        Si pasa algo grave
      </h2>
      <div className="mt-4 grid gap-2">
        <a
          href="tel:112"
          className="flex min-h-[3.35rem] items-center gap-3 rounded-[1.2rem] bg-[#c45b4a] px-3.5 py-3 text-white"
        >
          <Siren size={20} strokeWidth={1.75} />
          <span>
            <span className="block font-medium">Llamar al 112</span>
            <span className="block text-xs opacity-80">Emergencias</span>
          </span>
        </a>
        <a
          href={`tel:${van.insurance.roadsidePhone.replace(/\s/g, '')}`}
          className="flex min-h-[3.35rem] items-center gap-3 rounded-[1.2rem] bg-[#f6ebe6] px-3.5 py-3 text-[#3a2422]"
        >
          <Phone size={20} strokeWidth={1.75} />
          <span>
            <span className="block font-medium">Asistencia en carretera</span>
            <span className="block text-xs opacity-70">
              {van.insurance.roadsidePhone}
            </span>
          </span>
        </a>
        <a
          href={contact.phoneHref}
          className="flex min-h-[3.35rem] items-center gap-3 rounded-[1.2rem] bg-[#f6ebe6] px-3.5 py-3 text-[#3a2422]"
        >
          <UserRound size={20} strokeWidth={1.75} />
          <span>
            <span className="block font-medium">Contactar con nosotros</span>
            <span className="block text-xs opacity-70">{contact.phoneLabel}</span>
          </span>
        </a>
        <Link
          to="/datos"
          className={cn(
            'flex min-h-[3.35rem] items-center gap-3 rounded-[1.2rem] bg-white/10 px-3.5 py-3',
          )}
        >
          <Shield size={20} strokeWidth={1.75} />
          <span>
            <span className="block font-medium">Información del seguro</span>
            <span className="block text-xs opacity-70">
              {van.insurance.company}
            </span>
          </span>
        </Link>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="opacity-60">Póliza</dt>
          <dd className="mt-0.5 font-medium">{van.insurance.policyNumber}</dd>
        </div>
        <div>
          <dt className="opacity-60">Matrícula</dt>
          <dd className="mt-0.5 font-medium">{van.plate}</dd>
        </div>
        <div>
          <dt className="opacity-60">Aseguradora</dt>
          <dd className="mt-0.5 font-medium">{van.insurance.company}</dd>
        </div>
        <div>
          <dt className="opacity-60">Asistencia</dt>
          <dd className="mt-0.5 font-medium">{van.insurance.roadsidePhone}</dd>
        </div>
      </dl>
      <div className="mt-4">
        <p className="text-xs tracking-wide uppercase opacity-60">
          Documentación
        </p>
        <ul className="mt-1.5 space-y-1 text-sm">
          {van.insurance.documents.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
