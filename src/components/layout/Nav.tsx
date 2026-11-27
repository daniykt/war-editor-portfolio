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
        <ul className="fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-10 flex items-center gap-2 border-2 border-primary bg-bg p-2 md:static md:gap-8 md:border-0 md:p-0">
          {links.map((link) => (
            <li key={link.href} className={cn(link.mobileLabel && 'flex-1 md:flex-none')}>
              <a
                href={link.href}
                className={cn(
                  'flex h-12 min-w-14 items-center justify-center text-label md:h-11 md:min-w-0',
                  link.mobileLabel ? 'bg-accent text-bg md:bg-transparent md:text-primary' : 'text-primary',
                )}
              >
                {link.mobileLabel ? (
                  <>
                    <span className="md:hidden">{link.mobileLabel}</span>
                    <span className="hidden md:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 text-label text-primary">
          <button type="button" className="h-11">PT</button>
          <span aria-hidden="true">|</span>
          <button type="button" className="h-11">EN</button>
        </div>
      </nav>
    </header>
  )
}