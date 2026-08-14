import { Link } from 'react-router-dom'
import { van } from '../content/van'

export function VanSpecs({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link
        to="/datos"
        className="block rounded-[1.6rem] bg-pine px-5 py-5 text-foam"
      >
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-sun">
          Datos de la furgo
        </p>
        <p className="mt-2 font-display text-[0.95rem] tracking-wide text-foam/70">
          Altura de la furgo
        </p>
        <p className="font-display text-[2.6rem] leading-none font-semibold tracking-[-0.04em]">
          {van.height}
        </p>
        <p className="mt-2 text-sm text-foam/70">
          Matrícula {van.plate} · {van.fuel}
        </p>
      </Link>
    )
  }

  const rows = [
    ['Matrícula', van.plate],
    ['Combustible', van.fuel],
    ['Longitud', van.length],
    ['Anchura', van.width],
    ['Agua limpia', van.waterCapacity],
    ['Aguas grises', van.greyWaterCapacity],
    ['Batería auxiliar', van.auxBattery],
    ['Contacto', `${van.contactName} · ${van.contactPhone}`],
    ['Seguro', van.insurance.company],
    ['Póliza', van.insurance.policyNumber],
    ['Asistencia', van.insurance.roadsidePhone],
  ] as const

  return (
    <div className="space-y-4">
      <div className="rounded-[1.7rem] bg-pine px-5 py-6 text-foam">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-sun">
          Altura de la furgo
        </p>
        <p className="mt-2 font-display text-[4.2rem] leading-none font-semibold tracking-[-0.05em]">
          {van.height}
        </p>
        <p className="mt-3 text-sm text-foam/70">
          Antes de un parking, un túnel o un ramaje. Míralo otra vez si dudas.
        </p>
      </div>
      <dl className="divide-y divide-pine/10 overflow-hidden rounded-[1.5rem] bg-foam/80">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-4 px-4 py-3.5">
            <dt className="text-sm text-ink-soft">{label}</dt>
            <dd className="text-right font-medium text-pine">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
