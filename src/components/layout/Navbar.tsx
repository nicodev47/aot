import { useEffect, useState } from 'react'
import { scrollToSection } from '../../utils/navigation'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar${isHidden ? ' navbar-hidden' : ''}`}>
      <div className="container nav-inner">
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* <span className="brand-mark">ECLIPSE</span> */}
          <span>ECLIPSE TRADING CLUB</span>
        </button>

        <nav className="nav-links">
          <button onClick={() => scrollToSection('metodo')}>Strategia</button>
          <button onClick={() => scrollToSection('mentorship')}>Mentorship</button>
          <button onClick={() => scrollToSection('risultati')}>Risultati</button>
          <button onClick={() => scrollToSection('affiancamento')}>Affiancamento</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
        </nav>

        <button
          className="nav-cta"
          onClick={() => scrollToSection('offerta')}
        >
          Partecipa Ora
        </button>
      </div>
    </header>
  )
}
