import type { MouseEvent } from 'react'
import { scrollToPricing, scrollToSection } from '../../utils/navigation'

const links = [
  { id: 'metodo', label: 'Strategia' },
  { id: 'risultati', label: 'Risultati' },
  { id: 'offerta', label: 'Community' },
  { id: 'affiancamento', label: 'Percorso di Mentorship' },
  { id: 'faq', label: 'FAQ' },
]

export default function Navbar() {
  function handleNavClick(event: MouseEvent, id: string): void {
    event.preventDefault()

    if (id === 'offerta') {
      scrollToPricing()
    } else {
      scrollToSection(id)
    }
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            className="brand-logo"
            src="/eclipse-logo.svg"
            alt=""
          />
          <span>ECLIPSE TRADING CLUB</span>
        </button>

        <nav className="nav-links" aria-label="Navigazione principale">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-cta"
          onClick={scrollToPricing}
        >
          Partecipa Ora
        </button>
      </div>
    </header>
  )
}
