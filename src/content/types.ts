/**
 * Modelo de contenido de la guía.
 * Para añadir una guía nueva: crea un objeto Guide y súmalo al array en guides.ts.
 * Los campos editorNote no se muestran en la app: sirven para marcar textos a sustituir.
 */

export type MediaKind = 'image' | 'gif' | 'video'

export type Media = {
  kind: MediaKind
  /** Ruta local (/media/...) o URL externa. Si falta, se muestra un placeholder. */
  src?: string
  thumbnail?: string
  alt?: string
  duration?: string
  caption?: string
}

export type GuideStep = {
  id: string
  text: string
  media?: Media
  warning?: string
  info?: string
}

export type TroubleshootingItem = {
  id: string
  title: string
  steps: string[]
}

export type Guide = {
  id: string
  title: string
  description: string
  category: string
  icon: string
  keywords: string[]
  video?: Media
  steps: GuideStep[]
  warning?: string
  info?: string
  troubleshooting?: TroubleshootingItem[]
  /** true = contenido de ejemplo, sustituir por las instrucciones reales. */
  placeholder?: boolean
  editorNote?: string
}

export type Situation = {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: string
  relatedGuideIds: string[]
  checklist: ChecklistItem[]
  placeholder?: boolean
  editorNote?: string
}

export type ChecklistItem = {
  id: string
  label: string
  hint?: string
}

export type HelpIssue = {
  id: string
  title: string
  icon: string
  steps: string[]
  relatedGuideId?: string
  severity: 'normal' | 'urgent'
  placeholder?: boolean
  editorNote?: string
}

export type VanSpecs = {
  name: string
  plate: string
  fuel: string
  height: string
  heightMeters: number
  length: string
  width: string
  waterCapacity: string
  greyWaterCapacity: string
  auxBattery: string
  contactPhone: string
  contactName: string
  insurance: {
    company: string
    policyNumber: string
    roadsidePhone: string
    documents: string[]
  }
  editorNote?: string
}

export type ContactConfig = {
  whatsappUrl: string
  phoneHref: string
  phoneLabel: string
  editorNote?: string
}

export type SearchHit = {
  id: string
  kind: 'guide' | 'situation' | 'help' | 'specs'
  title: string
  subtitle: string
  href: string
  icon: string
}
