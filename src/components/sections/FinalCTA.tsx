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
        <span className="eyebrow">IL PROSSIMO PASSO</span>
        <h2>È il momento di iniziare.</h2>
        <p>
          Entra nella Community e inizia a costruire un processo chiaro,
          disciplinato e replicabile, insieme a noi, nelle Sessioni
          Giornaliere.
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
