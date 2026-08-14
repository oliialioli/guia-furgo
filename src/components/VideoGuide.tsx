import { Clock, Play } from 'lucide-react'
import { useState } from 'react'
import type { Media } from '../content/types'
import { MediaPlaceholder } from './MediaPlaceholder'

export function VideoGuide({
  media,
  title,
}: {
  media?: Media
  title?: string
}) {
  const [playing, setPlaying] = useState(false)
  const src = media?.src
  const caption = media?.caption ?? title ?? 'Vídeo de la guía'

  if (playing && src) {
    return (
      <div className="overflow-hidden rounded-[1.5rem] bg-pine">
        <video
          src={src}
          poster={media.thumbnail}
          controls
          autoPlay
          playsInline
          className="aspect-[16/10] w-full bg-pine"
        >
          Tu navegador no puede reproducir este vídeo.
        </video>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block w-full overflow-hidden rounded-[1.5rem] text-left"
      aria-label={src ? `Reproducir: ${caption}` : `${caption}. Todavía no hay vídeo.`}
    >
      {media?.thumbnail ? (
        <img
          src={media.thumbnail}
          alt=""
          className="aspect-[16/10] w-full object-cover"
        />
      ) : (
        <MediaPlaceholder
          kind="video"
          label={src ? caption : 'Vídeo pendiente de grabar'}
        />
      )}
      <span className="absolute inset-0 bg-pine/10 transition group-hover:bg-pine/15" />
      <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foam text-pine shadow-[0_8px_30px_rgba(20,36,28,0.2)] transition duration-200 group-active:scale-95">
        <Play size={26} fill="currentColor" className="ml-0.5" />
      </span>
      {media?.duration ? (
        <span className="absolute right-3 bottom-3 inline-flex min-h-8 items-center gap-1 rounded-full bg-pine/85 px-2.5 text-xs font-medium text-foam">
          <Clock size={13} strokeWidth={2} />
          {media.duration}
        </span>
      ) : null}
    </button>
  )
}
