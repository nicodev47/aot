import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    step: '01',
    title: 'Accesso ai Materiali',
    text: 'Impara i concetti chiave della strategia, la lettura della struttura di mercato avanzata, liquidità e le regole dei modelli d’ingresso che utilizziamo.',
  },
  {
    step: '02',
    title: 'Esercizio & Feedback',
    text: 'Confrontati con me e trader esperti all’interno della community per andare a rifinire la comprensione dei materiali e dei modelli d’ingresso.',
  },
  {
    step: '03',
    title: 'Backtest',
    text: 'Colleziona dati, riguarda le analisi passate ed esercitati fino ad avere risultati positivi facendo domande e condividendo le tue analisi nella community.',
  },
  {
    step: '04',
    title: 'Analisi a mercato Live',
    text: 'Una volta ottenuti risultati positivi in backtest passa ad un conto demo operando a mercato reale prendendo spunto dalle analisi condivise.',
  },
  {
    step: '05',
    title: 'Ottimizzazione della Strategia',
    text: 'Impara a scalare più entrate sul mercato per massimizzare il rapporto rischio rendimento dietro ogni operazione.',
  },
  {
    step: '06',
    title: 'Ottieni Risultati',
    text: 'Diventa funded ed ottieni payout con regolarità oppure scala il tuo conto personale diventando costante.',
  },
]

export default function Timeline() {
  return (
    <section className="section timeline-section" id="timeline">
      <div className="container">
        <SectionTitle
          eyebrow="IL PERCORSO"
          title="Un percorso chiaro e strutturato"
          subtitle="Dalla comprensione della strategia fino alla costruzione della tua costanza nel trading."
        />

        <div className="timeline">
          {steps.map((step, index) => (
            <article
              className={`timeline-card ${index === steps.length - 1 ? 'timeline-card-last' : ''}`}
              key={step.step}
            >
              <span className="timeline-step">
                Step {step.step}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}