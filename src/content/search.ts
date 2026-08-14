import { guides } from './guides'
import { helpIssues } from './help'
import { situations } from './situations'
import type { SearchHit } from './types'

function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function haystack(parts: Array<string | undefined>): string {
  return normalize(parts.filter(Boolean).join(' '))
}

export function searchContent(query: string): SearchHit[] {
  const q = normalize(query)
  if (q.length < 2) return []

  const hits: Array<SearchHit & { score: number }> = []

  for (const guide of guides) {
    const blob = haystack([
      guide.title,
      guide.description,
      guide.category,
      ...guide.keywords,
      ...guide.steps.map((step) => step.text),
      guide.warning,
      ...(guide.troubleshooting?.flatMap((item) => [item.title, ...item.steps]) ??
        []),
    ])
    if (!blob.includes(q) && !guide.keywords.some((k) => normalize(k).includes(q))) {
      continue
    }
    const titleHit = normalize(guide.title).includes(q)
    hits.push({
      id: `guide-${guide.id}`,
      kind: 'guide',
      title: guide.title,
      subtitle: guide.description,
      href: `/guia/${guide.id}`,
      icon: guide.icon,
      score: titleHit ? 3 : 1,
    })
  }

  for (const situation of situations) {
    const blob = haystack([
      situation.title,
      situation.shortTitle,
      situation.description,
      ...situation.checklist.map((item) => item.label),
    ])
    if (!blob.includes(q)) continue
    hits.push({
      id: `situation-${situation.id}`,
      kind: 'situation',
      title: situation.title,
      subtitle: situation.description,
      href: `/situacion/${situation.id}`,
      icon: situation.icon,
      score: normalize(situation.title).includes(q) ? 3 : 1,
    })
  }

  for (const issue of helpIssues) {
    const blob = haystack([issue.title, ...issue.steps])
    if (!blob.includes(q)) continue
    hits.push({
      id: `help-${issue.id}`,
      kind: 'help',
      title: issue.title,
      subtitle: 'Ayuda y problemas',
      href: `/ayuda/${issue.id}`,
      icon: issue.icon,
      score: normalize(issue.title).includes(q) ? 3 : 2,
    })
  }

  const specsBlob = haystack([
    'datos furgo matrícula matricula altura longitud anchura combustible deposito agua bateria seguro asistencia',
    'altura de la furgo',
  ])
  if (specsBlob.includes(q) || q.includes('altura') || q.includes('matricula')) {
    hits.push({
      id: 'specs',
      kind: 'specs',
      title: 'Datos de la furgo',
      subtitle: 'Matrícula, altura, medidas y seguro',
      href: '/datos',
      icon: 'ruler',
      score: 4,
    })
  }

  return hits
    .sort((a, b) => b.score - a.score)
    .map((hit) => ({
      id: hit.id,
      kind: hit.kind,
      title: hit.title,
      subtitle: hit.subtitle,
      href: hit.href,
      icon: hit.icon,
    }))
}
