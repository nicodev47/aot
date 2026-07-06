import { ArrowRight } from 'lucide-react'
import { scrollToPricing } from '../../utils/navigation'
import { trackEvent } from '../../utils/tracking'

export default function FinalCTA() {
  function handleAccessClick(): void {
    trackEvent('cta_ottieni_accesso_click', {
      location: 'final_cta',
      label: "Ottieni l'Accesso",
    })
    scrollToPricing()
  }

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
          onClick={handleAccessClick}
        >
          Ottieni l'Accesso
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
