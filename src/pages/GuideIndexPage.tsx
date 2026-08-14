import { useState } from 'react'
import { Link } from 'react-router-dom'
import { guides } from '../content/guides'
import { searchContent } from '../content/search'
import { AppHeader } from '../components/AppHeader'
import { CategoryCard } from '../components/CategoryCard'
import { Page } from '../components/Page'
import { SearchBar } from '../components/SearchBar'
import { SearchResults } from '../components/SearchResults'

export function GuideIndexPage() {
  const [query, setQuery] = useState('')
  const hits = searchContent(query)
  const searching = query.trim().length >= 2

  return (
    <Page>
      <AppHeader title="Guía" />
      <SearchBar
        id="buscador-guia"
        value={query}
        onChange={setQuery}
        placeholder="Buscar en la guía"
      />

      {searching ? (
        <SearchResults query={query} hits={hits} />
      ) : (
        <>
          <div className="mt-6 space-y-2.5">
            {guides.map((guide) => (
              <CategoryCard
                key={guide.id}
                to={`/guia/${guide.id}`}
                icon={guide.icon}
                title={guide.title}
                description={guide.description}
              />
            ))}
          </div>
          <Link
            to="/datos"
            className="mt-4 block rounded-[1.4rem] bg-pine/95 px-4 py-4 text-foam"
          >
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-sun">
              Datos de la furgo
            </p>
            <p className="mt-1 font-display text-lg font-semibold">
              Matrícula, altura y medidas
            </p>
          </Link>
        </>
      )}
    </Page>
  )
}
