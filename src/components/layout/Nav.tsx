import logo from '@/assets/logo.svg'
import { cn } from '@/lib/utils'
import type { TranslationKey } from '@/i18n/types'
import { useTranslation } from '@/i18n/useTranslation'

type NavLink = {
  labelKey: TranslationKey
  mobileLabelKey?: TranslationKey
  href: string
}

const links: NavLink[] = [
  { labelKey: 'nav.work', href: '#work' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.contact', mobileLabelKey: 'nav.letsTalk', href: '#contact' },
]

export function Nav() {
  const { t, language, setLanguage } = useTranslation()

  return (
    <header className="flex h-24 items-center justify-between">
      <a href="#top" aria-label={t('nav.home')}>
        <img src={logo} alt={t('nav.logoAlt')} width={57} height={60} className="h-15 w-auto" />
      </a>

      <nav aria-label={t('nav.main')} className="flex items-center gap-8">
        <ul className="fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-10 mx-auto flex max-w-120 items-center gap-2 border-2 border-primary bg-bg p-2 lg:static lg:mx-0 lg:max-w-none lg:gap-8 lg:border-0 lg:p-0">
          {links.map((link) => (
            <li key={link.href} className={cn(link.mobileLabelKey && 'flex-1 lg:flex-none')}>
              <a
                href={link.href}
                className={cn(
                  'flex h-12 min-w-14 items-center justify-center text-label lg:h-11 lg:min-w-11',
                  link.mobileLabelKey ? 'bg-accent text-bg lg:bg-transparent lg:text-primary' : 'text-primary',
                )}
              >
                {link.mobileLabelKey ? (
                  <>
                    <span className="lg:hidden">{t(link.mobileLabelKey)}</span>
                    <span className="hidden lg:inline">{t(link.labelKey)}</span>
                  </>
                ) : (
                  t(link.labelKey)
                )}
              </a>
            </li>
          ))}
        </ul>

        <div role="group" aria-label={t('nav.language')} className="flex items-center gap-1 text-label text-primary">
          <button
            type="button"
            aria-pressed={language === 'pt'}
            onClick={() => setLanguage('pt')}
            className="h-11 min-w-11 opacity-60 aria-pressed:underline aria-pressed:underline-offset-4 aria-pressed:opacity-100"
          >
            PT
          </button>
          <span aria-hidden="true">|</span>
          <button
            type="button"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
            className="h-11 min-w-11 opacity-60 aria-pressed:underline aria-pressed:underline-offset-4 aria-pressed:opacity-100"
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  )
}