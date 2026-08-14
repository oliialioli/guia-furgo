import { Image, Play } from 'lucide-react'
import { cn } from '../lib/cn'

export function MediaPlaceholder({
  kind = 'image',
  label,
  className,
}: {
  kind?: 'image' | 'gif' | 'video'
  label?: string
  className?: string
}) {
  const text =
    label ??
    (kind === 'video'
      ? 'Vídeo pendiente'
      : kind === 'gif'
        ? 'GIF pendiente'
        : 'Foto pendiente')

  return (
    <div
      className={cn(
        'relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[1.35rem] bg-mist',
        className,
      )}
    >
      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden
      >
        <rect width="320" height="200" fill="#d8e2d6" />
        <path d="M0 140C60 120 90 160 150 145C210 130 240 90 320 110V200H0V140Z" fill="#b7c6b4" />
        <path d="M40 150 58 108 76 150Z" fill="#16352b" opacity="0.35" />
        <path d="M240 148h48v18H240z" fill="#e7eee4" opacity="0.7" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        {kind === 'video' ? (
          <Play size={22} className="text-pine" strokeWidth={1.75} />
        ) : (
          <Image size={22} className="text-pine" strokeWidth={1.75} />
        )}
        <p className="text-sm font-medium text-pine">{text}</p>
      </div>
    </div>
  )
}
