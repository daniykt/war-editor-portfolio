import logo from '@/assets/logo.png'

type NavLink = {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <header className="flex h-24 items-center justify-between">
      <a href="#top" aria-label="War Editor — início">
        <img src={logo} alt="War Editor" className="h-8 w-auto" />
      </a>

      <nav aria-label="Principal" className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-label text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-label text-primary">
          <button type="button">PT</button>
          <span aria-hidden="true"> | </span>
          <button type="button">EN</button>
        </div>
      </nav>
    </header>
  )
}