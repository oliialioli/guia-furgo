import { NavLink } from 'react-router-dom'
import { Icon } from './Icon'

const items = [
  { to: '/', label: 'Inicio', icon: 'home', end: true },
  { to: '/guia', label: 'Guía', icon: 'guide', end: false },
  { to: '/ayuda', label: 'Ayuda', icon: 'help', end: false },
] as const

export function BottomNavigation() {
  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-[430px] md:max-w-[540px]"
    >
      <div className="mx-3 mb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center rounded-[1.75rem] bg-pine/95 px-2 py-2 text-foam shadow-[0_12px_40px_rgba(20,36,28,0.28)]">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              [
                'flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-[1.35rem] px-2 py-1.5 transition duration-200',
                isActive ? 'bg-foam/12 text-foam' : 'text-foam/55 hover:text-foam/80',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={item.icon} size={22} />
                <span
                  className={[
                    'text-[11px] tracking-wide',
                    isActive ? 'font-semibold' : 'font-medium',
                  ].join(' ')}
                >
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
