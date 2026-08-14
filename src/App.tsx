import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { GuideDetailPage } from './pages/GuideDetailPage'
import { GuideIndexPage } from './pages/GuideIndexPage'
import { HelpIssuePage } from './pages/HelpIssuePage'
import { HelpPage } from './pages/HelpPage'
import { HomePage } from './pages/HomePage'
import { SituationPage } from './pages/SituationPage'
import { VanSpecsPage } from './pages/VanSpecsPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/guia" element={<GuideIndexPage />} />
          <Route path="/guia/:id" element={<GuideDetailPage />} />
          <Route path="/situacion/:id" element={<SituationPage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          <Route path="/ayuda/:id" element={<HelpIssuePage />} />
          <Route path="/datos" element={<VanSpecsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}
