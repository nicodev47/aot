import {
  BarChart3,
  Clock3,
  Crosshair,
  ShieldCheck,
} from 'lucide-react'

const methodItems = [
  {
    icon: Crosshair,
    number: '01',
    title: 'Un solo mercato',
    text: 'Focus su NQ e MNQ per conoscere davvero il comportamento del Nasdaq Futures, invece di saltare continuamente da uno strumento all’altro.',
  },
  {
    icon: Clock3,
    number: '02',
    title: 'Una finestra ad alta qualità',
    text: 'La fascia 15:30–16:10 è consigliata per movimento e liquidità, ma non è un vincolo: impari a leggere il setup anche in altri momenti.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Timeframe a 1 minuto',
    text: 'Una lettura rapida e concreta, con livelli, invalidazione e obiettivi definiti prima dell’ingresso.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Rischio prima del profitto',
    text: 'Ogni trade nasce da una gestione precisa. Nessun ingresso casuale, nessuna rincorsa del prezzo e nessuna size fuori controllo.',
  },
]

export default function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="section-head method-heading">
          <span className="eyebrow">IL METODO</span>

          <h2>
            Meno teoria dispersiva.
            <br />
            Più <em>lettura ed esecuzione.</em>
          </h2>
        </div>

        <div className="method-grid">
          {methodItems.map(({ icon: Icon, number, title, text }) => (
            <article className="method-card" key={number}>
              <div className="method-icon">
                <Icon />
              </div>

              <span>{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}