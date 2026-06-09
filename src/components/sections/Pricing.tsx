import { ArrowRight, Check } from 'lucide-react'
import { BOOKING_URL } from '../../data/siteData'

export default function Pricing() {
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
            Avrai accesso ad una chiamata privata dove ti verrà spiegata tutta la strategia step-by-step nel dettaglio e strutturare il tuo piano operativo. Avrai accesso a Sessioni Giornaliere dove troverai le entrate ottimali di ogni giornata seguiti da tre mesi di accesso all'interno della community
          </p>

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

        <article className="price-card">
          <div className="price-glow" />

          <div className="price-top">
            <span>PERCORSO COMPLETO</span>
          </div>

          <h3>Ottieni l’accesso al percorso</h3>

          <div className="price">
            <strong>€349</strong>
            <span>/ 3 mesi</span>
          </div>

          <p className="price-note">
            Pagamento unico · nessun rinnovo automatico
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
              Accesso alle sessioni giornaliere
            </li>
            <li>
              <Check />
              3 mesi di accesso alla community
            </li>
            <li>
              <Check />
              Rinnovo mensile scontato facoltativo
            </li>
          </ul>

          <button
            className="button button-primary full"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Ottieni l'accesso
            <ArrowRight size={18} />
          </button>
        </article>
      </div>
    </section>
  )
}
