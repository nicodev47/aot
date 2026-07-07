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
          <span className="eyebrow">Accesso alla Community</span>
          <h2>
            Tutto quello che ti serve per avere una strategia da applicare fin
            dal primo giorno.
          </h2>
          <p>
            All'interno della Community verrai introdotto alla strategia tramite una chiamata di coaching dove ti verrà spiegata la strategia step-by-step, andremo a vedere tutti i concetti e come applicarli a mercato insieme ai nostri modelli d'ingresso. Avrai accesso inoltre a Sessioni Giornaliere dove troverai le entrate ottimali di ogni giornata, feedbacks sulle tue analisi e supporto diretto.
          </p>

          <div className="fit-list">
            <h4>È adatto a te se:</h4>
            <span>
              <Check />
              Hai già esperienza all’interno dei mercati.
            </span>
            <span>
              <Check />
              cerchi una strategia di scalping
            </span>
            <span>
              <Check />
              vuoi un processo chiaro e replicabile
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
            <span>Ottieni l'Accesso al Percorso</span>
          </div>

          <h3>Accesso Mensile</h3>

          <div className="price">
            <div className="price-value">
              <strong>45&euro;</strong>
              <span>/ mese</span>
            </div>
            <p>Nessun vincolo</p>
          </div>

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
              Supporto per dubbi e domande
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
