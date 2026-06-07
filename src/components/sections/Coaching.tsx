import PrimaryButton from '../ui/PrimaryButton'

const coachingFeatures = [
  'Struttura di mercato avanzata',
  'Mentorship privata 1:1',
  'Analisi e review personalizzate',
  'Accesso completo alla community',
]

export default function Coaching() {
  return (
    <section className="section coaching" id="coaching">
      <div className="container">
        <div className="coaching-box">

          <div className="coaching-content">
            <p className="eyebrow">MENTORSHIP PRIVATA</p>

            <h2>
              Lavora direttamente con me e accelera il tuo percorso nel trading.
            </h2>

            <p>
              Un percorso esclusivo dedicato ai trader che vogliono essere
              seguiti direttamente, migliorare l’esecuzione operativa e
              sviluppare un approccio professionale e strutturato.
            </p>

            <div className="coaching-features">
              {coachingFeatures.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>

            <PrimaryButton
              onClick={() =>
                window.open(
                  'https://calendly.com/nicocoach/personal-mentorship-call-w-nico-clone',
                  '_blank'
                )
              }
            >
              Prenota una Call Gratuita
            </PrimaryButton>

          </div>

          <div className="coaching-visual">
            <div className="coaching-placeholder">
              <strong>MENTORSHIP</strong>
              <span>PRIVATA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}