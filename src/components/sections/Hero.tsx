import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import StatusBadge from '../ui/StatusBadge'
import { scrollToPricing, scrollToSection } from '../../utils/navigation'
import { trackEvent } from '../../utils/tracking'

const memberPhotos = [
  '/landing-page-photos/Immagine1.jpg',
  '/landing-page-photos/4241e45d2e8f7a817bfa6b4fe5b01c51.webp',
  '/landing-page-photos/5228de111c9cf905c0967eb500396f27.webp',
  '/landing-page-photos/75e04dfda8b3772e7b5a267f3db6e8d5.webp',
  '/landing-page-photos/b3358a6bc9916fdb93c4fe2d85b62612.webp',
]

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    const handle = () => setMatches(mq.matches)
    mq.addEventListener('change', handle)
    return () => mq.removeEventListener('change', handle)
  }, [query])

  return matches
}

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  function handleAccessClick(): void {
    trackEvent('cta_accesso_percorso_click', {
      location: 'hero',
      label: 'Accedi alla Community',
    })
    scrollToPricing()
  }

  function handleMentorshipClick(): void {
    trackEvent('mentorship_click', {
      location: 'hero',
      label: 'Scopri il Percorso di Mentorship',
    })
    scrollToSection('affiancamento')
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
          <StatusBadge
            text="Community e Percorso di Mentorship"
            animatedDot
          />

          <h1>
            Costruisci un processo che sai riconoscere, eseguire{' '}
            <span>e replicare con costanza.</span>
          </h1>

          <p className="hero-lead">
            Entra nella Community per imparare la strategia e i modelli
            d'ingresso che usiamo ogni giorno nelle Sessioni in diretta.
            Oppure scegli la Mentorship one-to-one e fatti seguire
            personalmente fino al tuo primo payout.
          </p>

          <div className="hero-video-wrap">
            <div className="hero-video">
              <video
                key={isMobile ? 'portrait' : 'landscape'}
                src={isMobile ? '/hero-portrait.mp4' : '/hero.mp4'}
                poster={
                  isMobile ? '/hero-poster-portrait.jpg' : '/hero-poster.jpg'
                }
                preload="metadata"
                aria-label="Eclipse Trading Club - Community"
                autoPlay={!reduceMotion}
                controls={reduceMotion}
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div className="hero-actions">
            <button
              className="button button-primary"
              onClick={handleAccessClick}
            >
              Accedi alla Community
              <ArrowRight size={18} />
            </button>

            <button
              className="button button-ghost"
              onClick={handleMentorshipClick}
            >
              <Play size={17} fill="currentColor" />
              Scopri la Mentorship
            </button>
          </div>

          <div className="scroll-cue">
            <div className="student-cue">
              <div className="member-avatar-stack" aria-hidden="true">
                {memberPhotos.map((photo, index) => (
                  <span className="member-avatar" key={photo}>
                    <img src={photo} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
                  </span>
                ))}
              </div>
              <span>Unisciti ai nostri 350+ studenti</span>
            </div>
            <button
              className="method-cue"
              onClick={() => scrollToSection('metodo')}
            >
              Scopri il metodo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
