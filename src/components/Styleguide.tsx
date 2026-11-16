import { cn } from '@/lib/utils'

type Typography = {
  name: string
  className: string
  spec: string
}

const typographies: Typography[] = [
  { name: 'Display / Hook', className: 'text-display', spec: 'Jersey 25 · 72px · lh 1.0 · tracking 0' },
  { name: 'Headline / Title', className: 'text-headline', spec: 'Raleway Bold · 48px · lh 1.1 · tracking -0.48px' },
  { name: 'Body / Explanation', className: 'text-body', spec: 'Raleway Medium · 18px · lh 1.5 · tracking 0' },
  { name: 'Caption / Subtitle', className: 'text-caption', spec: 'Raleway SemiBold · 14px · lh 1.4 · tracking 0' },
  { name: 'Label / UI', className: 'text-label', spec: 'Raleway Bold · 12px · lh 1.2 · +0.96px · maiúsculas' },
]

export function Styleguide() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-10 p-10">
      {typographies.map((t) => (
        <div key={t.className} className="flex flex-col gap-2 border-b border-border pb-6">
          <span className="text-label text-accent">{t.name}</span>
          <p className={t.className}>O corte certo conta a história</p>
          <span className="text-caption text-muted-foreground">{t.spec}</span>
        </div>
      ))}

      {/* Teste do cn(): typography + cor passando juntas */}
      <p className={cn('text-headline', 'text-accent')}>Teste do cn()</p>
    </section>
  )
}