import { Outlet } from 'react-router-dom'
import { Atmosphere } from './Atmosphere'
import { BottomNavigation } from './BottomNavigation'

export function Layout() {
  return (
    <div className="relative min-h-svh">
      <Atmosphere />
      <div className="relative mx-auto min-h-svh w-full max-w-[430px] md:max-w-[540px]">
        <Outlet />
        <BottomNavigation />
      </div>
    </div>
  )
}
