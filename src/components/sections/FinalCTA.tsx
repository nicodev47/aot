import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const scrollToPricing = () => {
    document.getElementById('offerta')?.scrollIntoView({ behavior: 'smooth' })
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
          onClick={scrollToPricing}
        >
          Ottieni l'accesso
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}
