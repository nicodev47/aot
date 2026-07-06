import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import VideoEmbed from '../ui/VideoEmbed'
import { scrollToPricing, scrollToSection } from '../../utils/navigation'
import { trackEvent } from '../../utils/tracking'

export default function Hero() {
  function handleAccessClick(): void {
    trackEvent('cta_accesso_percorso_click', {
      location: 'hero',
      label: 'Accedi al Percorso',
    })
    scrollToPricing()
  }

  function handleResultsClick(): void {
    trackEvent('results_click', {
      location: 'hero',
      label: 'Vai ai Risultati',
    })
    scrollToSection('risultati')
  }

  return (
    <section className="hero">
      <div className="hero-noise" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pill">
            <span className="live-dot" />
            Strategia Scalping con Esecuzioni Giornaliere
          </div>

          <h1>
            Una strategia ed un percorso di mentorship per farti ottenere
            <br />
            <span> i tuoi primi risultati in meno di 90 giorni.</span>
          </h1>

          <p className="hero-lead">
            Scopri una strategia di scalping con modelli d’ingresso ed esecuzioni sul timeframe a 1 minuto, costruita per darti esecuzioni precise e costanti all’interno del mercato.
          </p>

          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={handleAccessClick}
            >
              Accedi al Percorso
              <ArrowRight size={18} />
            </button>

            <button
              className="button button-ghost"
              onClick={handleResultsClick}
            >
              <Play size={17} fill="currentColor" />
              Vai ai Risultati
            </button>
          </div>

          <div className="hero-proof">
            <div>
              <strong>1:1</strong>
              <span>Spiegazione Privata</span>
            </div>
            <div>
              <strong>1 min</strong>
              <span>Timeframe Operativo</span>
            </div>
            <div>
              <strong>3 mesi</strong>
              <span>Di community Inclusa</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-video">
            <VideoEmbed
              videoId="1K8jF45Er9A"
              title="Eclipse Trading Club - Community"
              autoPlay
              muted
              loop
            />
          </div>
        </motion.div>
      </div>

      <div className="scroll-cue">
        <span>SCOPRI IL METODO</span>
        <i />
      </div>
    </section>
  )
}
