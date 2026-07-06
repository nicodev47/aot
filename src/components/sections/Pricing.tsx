import { ArrowRight, Check } from 'lucide-react'
import { CHECKOUT_URL } from '../../data/siteData'
import { trackEvent } from '../../utils/tracking'

export default function Pricing() {
  function handleCheckoutClick(): void {
    trackEvent('cta_ottieni_accesso_click', {
      location: 'pricing',
      label: "Ottieni l'Accesso",
    })
    window.open(CHECKOUT_URL, '_blank')
  }

  return (
    <section className="section offer" id="offerta">
      <div className="container offer-grid">
        <div className="offer-copy">
          <span className="eyebrow">UN SOLO PERCORSO, IL TUO RISULTATO</span>
          <h2>
            Tutto quello che ti serve per avere una strategia da applicare fin
            dal primo giorno.
          </h2>
          <p>
            Avrai accesso a Sessioni Giornaliere dove troverai le entrate ottimali di ogni giornata insieme all'accesso mensile all'interno della community. In aggiunta, come bonus il primo mese avrai accesso ad una chiamata privata dove ti verrà spiegata tutta la strategia step-by-step nel dettaglio per strutturare il tuo piano operativo.  </p>

          <div className="fit-list">
            <h4>È adatto a te se:</h4>
            <span>
              <Check />
              vuoi regole semplici e chiare
            </span>
            <span>
              <Check />
              preferisci operare in scalping
            </span>
            <span>
              <Check />
              vuoi leggere la liquidità a mercato
            </span>
            <span>
              <Check />
              cerchi feedback, non segnali da copiare
            </span>
          </div>
        </div>

        <article className="price-card" id="pricing-card">
          <div className="price-glow" />

          <div className="price-top">
            <span>Ottieni l’Accesso al Percorso</span>
          </div>

          <h3>Primo Mese + Chiamata di Mentorship 1-1</h3>

          <div className="price">
            <strong>99€</strong>
            <span></span>
          </div>

          <p className="price-note">
           Poi si rinnova a 45€ al Mese · Nessun Vincolo 
          </p>

          <ul>
            <li>
              <Check />
              Call privata con spiegazione della strategia
            </li>
            <li>
              <Check />
              Modelli d’ingresso e schematiche per le esecuzioni
            </li>
            <li>
              <Check />
              Accesso alle Sessioni Giornaliere
            </li>
            <li>
              <Check />
              Accesso alla Community Privata
            </li>
            <li>
              <Check />
              Supporto 1-1 Diretto
            </li>
            <li>
              <Check />
              Piano operativo applicabile fin dal primo giorno
            </li>
          </ul>

          <button
            className="button button-primary full"
            onClick={handleCheckoutClick}
          >
            Ottieni l'Accesso
            <ArrowRight size={18} />
          </button>
        </article>
      </div>
    </section>
  )
}
