import { useState } from 'react'
import { motion, type Variants } from 'motion/react'
import { Nav } from '@/components/layout/Nav'
import { HeroHook } from '@/components/hero/HeroHook'
import { useFontReady } from '@/hooks/useFontReady'
import { cn } from '@/lib/utils'

// Entrada do CTA: quick ease-out, suave (sem steps). Com reduced motion, o y é ignorado.
const cta: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 } },
}

export function Hero() {
  const fontReady = useFontReady('400 72px "Jersey 25"')
  const [hookDone, setHookDone] = useState(false)

  return (
    <section className="mx-auto flex min-h-svh w-full max-w-360 flex-col px-20">
     
      <Nav />                                                                   

      <div className="flex flex-1 items-center justify-between gap-20">
        {/* Texto: passo 3 */}
        <div className={cn('flex w-160 flex-col items-start', !fontReady && 'invisible')}>
          <HeroHook play={fontReady} onComplete={() => setHookDone(true)} />

          <motion.p
            className="mt-8 max-w-135 text-body text-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: fontReady ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Video editing built around story, pacing and retention. From the first cut
            to the final delivery, with an editor's eye.
          </motion.p>

          <motion.a
            href="#contact"
            className="mt-12 inline-flex h-14 items-center px-16 bg-accent text-label text-bg"
            variants={cta}
            initial="hidden"
            animate={hookDone ? 'visible' : 'hidden'}
          >
            Let's talk
          </motion.a>
        </div>

        {/* Vídeo: passo 4 */}
        <div className="flex aspect-video w-140 items-center justify-center border border-primary bg-bg">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-16 fill-accent">
            <polygon points="6,3 21,12 6,21" />
          </svg>
        </div>
      </div>
    </section>
  )
} 