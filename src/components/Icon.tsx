import {
  AppWindow,
  BatteryMedium,
  BedDouble,
  BookOpen,
  CarFront,
  CircleAlert,
  CircleCheckBig,
  CircleDot,
  CircleHelp,
  ClipboardCheck,
  CookingPot,
  DoorOpen,
  Droplets,
  Flame,
  Fuel,
  House,
  KeyRound,
  LifeBuoy,
  MessageCircle,
  Moon,
  Phone,
  Ruler,
  Search,
  Shield,
  ShowerHead,
  Siren,
  Snowflake,
  Trees,
  TriangleAlert,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const iconMap = {
  home: House,
  guide: BookOpen,
  help: LifeBuoy,
  drive: CarFront,
  sleep: Moon,
  cook: CookingPot,
  shower: ShowerHead,
  power: Zap,
  return: ClipboardCheck,
  doors: DoorOpen,
  bed: BedDouble,
  water: Droplets,
  heat: Flame,
  fridge: Snowflake,
  windows: AppWindow,
  exterior: Trees,
  problem: TriangleAlert,
  car: CarFront,
  battery: BatteryMedium,
  key: KeyRound,
  tire: CircleDot,
  crash: Siren,
  warning: CircleAlert,
  phone: Phone,
  message: MessageCircle,
  ruler: Ruler,
  search: Search,
  fuel: Fuel,
  shield: Shield,
  question: CircleHelp,
  check: CircleCheckBig,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap

export function Icon({
  name,
  className,
  size = 22,
}: {
  name: string
  className?: string
  size?: number
}) {
  const Cmp = iconMap[name as IconName] ?? CircleHelp
  return <Cmp size={size} className={className} strokeWidth={1.75} aria-hidden />
}
