import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../utils/navigation'

const mentorshipItems = [
  {
    number: '01',
    title: 'Strategia spiegata dall’inizio alla fine',
    text: 'Partiamo dalla lettura del contesto e arriviamo al setup operativo: ingresso, invalidazione, gestione e uscita. Ogni passaggio viene spiegato con esempi concreti su NQ e MNQ, senza teoria dispersiva.',
  },
  {
    number: '02',
    title: 'Call private e confronto diretto',
    text: 'Durante le sessioni individuali puoi portare dubbi, grafici ed esecuzioni. Il percorso viene adattato al tuo livello, alla tua disponibilità e agli errori che stai realmente commettendo.',
  },
  {
    number: '03',
    title: 'Revisione dei tuoi trade',
    text: 'Analizziamo insieme trade corretti, entrate anticipate, occasioni saltate e problemi di gestione. Non ricevi un giudizio generico: capisci esattamente cosa mantenere e cosa correggere.',
  },
  {
    number: '04',
    title: 'Trading plan costruito su di te',
    text: 'Trasformiamo il metodo in una checklist applicabile alla tua routine, con regole chiare per selezione del setup, rischio, numero di operazioni e momenti in cui restare fuori dal mercato.',
  },
  {
    number: '05',
    title: 'Dalla spiegazione all’autonomia',
    text: 'L’obiettivo non è renderti dipendente dalle call o dai segnali. Lavoriamo perché tu sappia riconoscere il contesto, prendere una decisione motivata e rivedere in autonomia la tua esecuzione.',
  },
  {
    number: '06',
    title: 'Continuità dentro la community',
    text: 'Terminato il mese di lavoro 1:1, resti nella community per l’intera durata del pacchetto: puoi confrontarti, vedere applicazioni reali del metodo e continuare a consolidare il processo.',
  },
]

export default function Mentorship() {
  return (
    <section className="section mentorship" id="mentorship">
      <div className="container mentorship-inner">
        <div className="mentorship-heading">
          <span className="eyebrow">CHIAMATA 1:1</span>
          <h2>
            Non devi capire tutto da solo.
            <br />
            <em>Lavoriamo insieme sulla tua esecuzione.</em>
          </h2>
          <p className="large-copy">
            Il primo mese non è una raccolta di video da guardare in autonomia.
            È un lavoro diretto e personale: ti mostro la strategia, la
            applichiamo su esempi reali e rivediamo i tuoi trade fino a
            trasformare le regole in un processo chiaro, semplice e ripetibile.
          </p>
        </div>

        <div className="mentor-features mentor-features-wide">
          {mentorshipItems.map(({ number, title, text }) => (
            <article className="mentor-feature mentor-feature-wide" key={title}>
              <span className="mentor-number">{number}</span>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mentorship-summary">
          <div>
            <span>1° MESE</span>
            <strong>Mentorship privata, spiegazione e correzione</strong>
          </div>
          <i />
          <div>
            <span>3 MESI</span>
            <strong>Accesso completo alla community</strong>
          </div>
          <button
            className="text-link"
            onClick={() => scrollToSection('offerta')}
          >
            Vedi cosa include il percorso
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
