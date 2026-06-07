import { scrollToSection } from '../../utils/navigation'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>ECLIPSE TRADING CLUB</strong>
        </div>

        <div className="footer-links">
          <button onClick={() => scrollToSection('metodo')}>Strategia</button>
          <button onClick={() => scrollToSection('risultati')}>Risultati</button>
          <button onClick={() => scrollToSection('faq')}>FAQ</button>
        </div>

        <div className="footer-legal">
          <p>© 2026. Tutti i diritti riservati.</p>
          <p>Contenuti educativi. Il trading comporta rischio di perdita.</p>
        </div>
      </div>
    </footer>
  )
}
