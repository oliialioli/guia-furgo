import { Search } from 'lucide-react'

export function SearchBar({
  value,
  onChange,
  placeholder = '¿Qué necesitas?',
  id = 'buscador',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  id?: string
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-moss"
        size={22}
        strokeWidth={1.75}
        aria-hidden
      />
      <input
        id={id}
        type="search"
        enterKeyHint="search"
        autoComplete="off"
        autoCorrect="off"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-14 w-full rounded-[1.35rem] border border-pine/10 bg-foam/80 pr-4 pl-12 text-base text-ink shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] outline-none transition placeholder:text-ink-soft/70 focus:border-pine/30 focus:bg-foam"
      />
    </div>
  )
}
