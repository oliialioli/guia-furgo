import { Link, useParams } from 'react-router-dom'
import { getGuide } from '../content/guides'
import { AppHeader } from '../components/AppHeader'
import { EmptyState } from '../components/EmptyState'
import { GuidePage } from '../components/GuidePage'
import { Page } from '../components/Page'

export function GuideDetailPage() {
  const { id } = useParams()
  const guide = id ? getGuide(id) : undefined

  if (!guide) {
    return (
      <Page>
        <AppHeader title="Guía" back="/guia" />
        <EmptyState title="No encontramos esa guía.">
          <Link to="/guia" className="font-medium text-pine">
            Ver todas
          </Link>
        </EmptyState>
      </Page>
    )
  }

  return (
    <Page>
      <AppHeader title={guide.title} back="/guia" />
      <GuidePage guide={guide} />
    </Page>
  )
}
