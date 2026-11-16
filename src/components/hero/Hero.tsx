import { Nav } from '@/components/layout/Nav'                               

export function Hero() {
  return (
    <section className="mx-auto flex min-h-svh w-full max-w-360 flex-col px-20">
     
      <Nav />                                                                   

      <div className="flex flex-1 items-center justify-between gap-20">
        {/* Texto: passo 3 */}
        <div className="flex w-160 flex-col items-start">
          <h1 className="text-display text-primary">
            Your message deserves an edit people actually watch
          </h1>

          <p className="mt-8 max-w-135 text-body text-text">
            Video editing built around story, pacing and retention. From the first cut
            to the final delivery, with an editor's eye.
          </p>

          <a
            href="#contact"
            className="mt-12 inline-flex h-14 items-center px-16 bg-accent text-label text-bg"
          >
            Let's talk
          </a>
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