import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react'
import { scrollToSection } from '../../utils/navigation'

export default function Hero() {
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
              onClick={() => scrollToSection('offerta')}
            >
              Accedi al Percorso
              <ArrowRight size={18} />
            </button>

            <button
              className="button button-ghost"
              onClick={() => scrollToSection('risultati')}
            >
              <Play size={17} fill="currentColor" />
              Vai  ai Risultati
            </button>
          </div>

          <div className="hero-proof">
            <div>
              <strong>1:1</strong>
              <span>spiegazione privata</span>
            </div>
            <div>
              <strong>1 min</strong>
              <span>timeframe operativo</span>
            </div>
            <div>
              <strong>3 mesi</strong>
              <span>di community inclusa</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="terminal-card">
            <div className="terminal-top">
              <div>
                <i />
                <i />
                <i />
              </div>
              <span>NQ · 1 MINUTE</span>
              <span>LIVE SETUP</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid" />
              <svg
                viewBox="0 0 700 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#6b0b16" />
                    <stop offset=".55" stopColor="#ff334d" />
                    <stop offset="1" stopColor="#ff8b98" />
                  </linearGradient>
                </defs>
                <path
                  className="area-path"
                  d="M0 285 C70 270 95 305 145 250 S220 270 260 205 S335 230 375 150 S445 190 490 118 S565 155 610 82 S670 90 700 38 L700 360 L0 360 Z"
                />
                <path
                  className="line-path"
                  d="M0 285 C70 270 95 305 145 250 S220 270 260 205 S335 230 375 150 S445 190 490 118 S565 155 610 82 S670 90 700 38"
                />
              </svg>

              <div className="setup-tag entry">
                <span>ENTRY</span>
                <strong>20,184.25</strong>
              </div>

              <div className="setup-tag target">
                <span>TARGET</span>
                <strong>+30 PT</strong>
              </div>

              <div className="session-line">
                <span>15:30</span>
                <span>16:10</span>
              </div>
            </div>

            <div className="terminal-bottom">
              <div>
                <span>MODEL</span>
                <strong>Liquidity Reversal</strong>
              </div>
              <div>
                <span>RISK</span>
                <strong>Defined</strong>
              </div>
              <div>
                <span>EXECUTION</span>
                <strong>Mechanical</strong>
              </div>
            </div>
          </div>

          <div className="floating-card floating-one">
            <Zap size={18} />
            <div>
              <span>Setup identificato</span>
              <strong>Regole chiare, zero improvvisazione</strong>
            </div>
          </div>

          <div className="floating-card floating-two">
            <TrendingUp size={18} />
            <div>
              <span>Focus operativo</span>
              <strong>NQ & MNQ Futures</strong>
            </div>
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
