import { ArrowRight } from 'lucide-react'
import { BOOKING_URL } from '../../data/siteData'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-glow" />

      <div className="container final-inner">
        <span className="eyebrow">
          DIVENTA LA NOSTRA PROSSIMA STORIA DI SUCCESSO
        </span>
        <h2>
          Costruisci un processo che sai riconoscere, eseguire e replicare con
          costanza.
        </h2>
        <p>
          Entra nel percorso e porta struttura, chiarezza e continuità nella tua
          operatività sui Futures.
        </p>
        <button
          className="button button-primary"
          onClick={() => window.open(BOOKING_URL, '_blank')}
        >
          Candidati al percorso
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
