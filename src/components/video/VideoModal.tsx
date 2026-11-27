import type { ReactElement } from 'react'
import { XIcon } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from '@/lib/utils'

type VideoAspect = 'landscape' | 'portrait'

type VideoModalProps = {
  videoId: string
  title: string
  meta?: string
  aspect?: VideoAspect
  trigger: ReactElement
}

export function VideoModal({ videoId, title, meta, aspect = 'landscape', trigger }: VideoModalProps) {
  const { t, language } = useTranslation()
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&hl=${language}`

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent
        showCloseButton={false}
        className={cn(
          'gap-0 border-0 bg-transparent p-0 sm:max-w-none',
          aspect === 'landscape'
            ? 'w-[min(calc(100%-2rem),65rem)]'
            : 'w-[min(calc(100%-2rem),calc(75svh*9/16))]',
        )}
      >
        <DialogClose className="mb-2 flex h-11 items-center gap-2 justify-self-end text-label text-primary">
          {t('modal.close')}
          <XIcon aria-hidden="true" className="size-4" />
        </DialogClose>

        <div className={cn('border-2 border-primary bg-bg', aspect === 'landscape' ? 'aspect-video' : 'aspect-[9/16]')}>
          <iframe
            src={src}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="size-full"
          />
        </div>

        <DialogTitle className="mt-4 text-caption text-text">{title}</DialogTitle>
        {meta && <DialogDescription className="mt-1 text-label text-primary">{meta}</DialogDescription>}
      </DialogContent>
    </Dialog>
  )
}
