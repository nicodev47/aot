import { scrollToPricing, scrollToSection } from '../../utils/navigation'

export default function Navbar() {
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

        <nav className="nav-links">
          <button onClick={() => scrollToSection('metodo')}>Strategia</button>
          <button onClick={() => scrollToSection('risultati')}>Risultati</button>
          <button onClick={scrollToPricing}>Community</button>
          <button onClick={() => scrollToSection('affiancamento')}>Percorso di Mentorship</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
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
