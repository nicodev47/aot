import { ArrowRight, Check } from 'lucide-react'
import { BOOKING_URL } from '../../data/siteData'

export default function Pricing() {
  return (
    <section className="section offer" id="offerta">
      <div className="container offer-grid">
        <div className="offer-copy">
          <span className="eyebrow">UN SOLO PERCORSO</span>
          <h2>Tutto ciò che serve per imparare, applicare e correggere.</h2>
          <p>
            Una call individuale per comprendere la strategia, impostare il tuo
            piano operativo e correggere i primi errori, seguita da tre mesi di
            accesso alla community.
          </p>

          <div className="fit-list">
            <h4>È adatto a te se:</h4>
            <span>
              <Check />
              vuoi regole semplici e verificabili
            </span>
            <span>
              <Check />
              puoi dedicare tempo a pratica e revisione
            </span>
            <span>
              <Check />
              accetti di lavorare sulla gestione del rischio
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
            <span className="limited">Posti limitati</span>
          </div>

          <h3>Ottieni l'accesso al percorso</h3>

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
              1 call individuale con spiegazione della strategia
            </li>
            <li>
              <Check />
              Analisi del tuo livello e del tuo approccio operativo
            </li>
            <li>
              <Check />
              Trading plan e checklist operative
            </li>
            <li>
              <Check />
              Revisione iniziale dei trade e degli errori
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
            Prenota la call conoscitiva
            <ArrowRight size={18} />
          </button>

          <small>
            La call serve a capire se il percorso è adatto al tuo livello e ai
            tuoi obiettivi.
          </small>
        </article>
      </div>
    </section>
  )
}
