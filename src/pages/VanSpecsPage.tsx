import { AppHeader } from '../components/AppHeader'
import { Page } from '../components/Page'
import { VanSpecs } from '../components/VanSpecs'

export function VanSpecsPage() {
  return (
    <Page>
      <AppHeader title="Datos de la furgo" back />
      <VanSpecs />
    </Page>
  )
}
