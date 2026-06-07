import { ArrowRight } from 'lucide-react'
import { BOOKING_URL } from '../../data/siteData'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-glow" />

      <div className="container final-inner">
        <span className="eyebrow">
          IL PROSSIMO TRADE NON DEVE ESSERE UN’IPOTESI
        </span>
        <h2>
          Costruisci un processo che sai riconoscere, eseguire e rivedere.
        </h2>
        <p>
          Entra nel percorso 1:1 e porta ordine nella tua operatività sui
          Futures.
        </p>
        <button
          className="button button-primary"
          onClick={() => window.open(BOOKING_URL, '_blank')}
        >
          Candidati alla mentorship
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
