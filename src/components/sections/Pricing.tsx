import { ArrowRight, Check } from 'lucide-react'
import { CHECKOUT_URL } from '../../data/siteData'
import { trackEvent } from '../../utils/tracking'

const communityFeatures = [
  'Corso completo Step-by-Step',
  'Modelli d’ingresso e schematiche per le esecuzioni',
  'Accesso alle Sessioni Giornaliere',
  'Accesso alla Community Privata',
  'Supporto per dubbi e domande',
  'Strategia applicabile fin dal primo giorno',
]

export default function Pricing() {
  function handleCheckoutClick(): void {
    trackEvent('cta_ottieni_accesso_click', {
      location: 'pricing',
      label: 'Entra nella Community',
    })
    window.open(CHECKOUT_URL, '_blank')
  }

  return (
    <section className="section offer" id="offerta">
      <div className="container pricing-intro">
        <span className="eyebrow">accesso alla community</span>
        <h2>Diventa la nostra prossima storia di Successo.</h2>
        <p>
          Un unico accesso mensile per studiare la strategia, partecipare alle
          Sessioni Giornaliere, ricevere feedback sulle tue analisi ed avere
          accesso alla community.
        </p>
      </div>

      <div className="container pricing-inner">
        <div className="pricing-panel">
          <article className="price-card price-card-community" id="pricing-card">
            <div className="price-glow" />

            <div className="price-top">
              <span>Community</span>
            </div>

            <h3>Accesso alla Community</h3>

            <div className="price">
              <strong>45€</strong>
              <span>/ mese</span>
            </div>

            <p className="price-renewal">
              Rinnovo automatico mensile · Nessun vincolo
            </p>

            <div className="price-divider" />

            <span className="price-includes">Cosa include:</span>
            <ul>
              {communityFeatures.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="button button-primary full"
              onClick={handleCheckoutClick}
            >
              Entra nella Community
              <ArrowRight size={18} />
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
