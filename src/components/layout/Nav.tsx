import logo from '@/assets/logo.svg'
import { cn } from '@/lib/utils'

type NavLink = {
  label: string
  mobileLabel?: string
  href: string
}

const links: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', mobileLabel: "Let's talk", href: '#contact' },
]

export function Nav() {
  return (
    <header className="flex h-24 items-center justify-between">
      <a href="#top" aria-label="War Editor — início">
        <img src={logo} alt="War Editor" width={57} height={60} className="h-15 w-auto" />
      </a>

      <nav aria-label="Principal" className="flex items-center gap-8">
        <ul className="fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-10 mx-auto flex max-w-120 items-center gap-2 border-2 border-primary bg-bg p-2 lg:static lg:mx-0 lg:max-w-none lg:gap-8 lg:border-0 lg:p-0">
          {links.map((link) => (
            <li key={link.href} className={cn(link.mobileLabel && 'flex-1 lg:flex-none')}>
              <a
                href={link.href}
                className={cn(
                  'flex h-12 min-w-14 items-center justify-center text-label lg:h-11 lg:min-w-11',
                  link.mobileLabel ? 'bg-accent text-bg lg:bg-transparent lg:text-primary' : 'text-primary',
                )}
              >
                {link.mobileLabel ? (
                  <>
                    <span className="lg:hidden">{link.mobileLabel}</span>
                    <span className="hidden lg:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-label text-primary">
          <button type="button" className="h-11 min-w-11">PT</button>
          <span aria-hidden="true">|</span>
          <button type="button" className="h-11 min-w-11">EN</button>
        </div>
      </nav>
    </header>
  )
}