import { Crosshair, GraduationCap, MessagesSquare, Radio } from 'lucide-react'

const methodItems = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Corso completo step-by-step',
    text: "Parti dai concetti principali della strategia, passi ai modelli d'ingresso e impari a costruire un'analisi completa. Poi vedi come applichiamo tutto, ogni giorno, nelle Sessioni di Gruppo.",
  },
  {
    icon: Crosshair,
    number: '02',
    title: "Scalping e modelli d'ingresso",
    text: "La strategia si basa su modelli d'ingresso in scalping, con la lettura del mercato e della liquidità al primo posto. Impari a leggere il grafico e a strutturare le esecuzioni in autonomia.",
  },
  {
    icon: Radio,
    number: '03',
    title: 'Sessioni di Gruppo giornaliere',
    text: "Ogni giorno analizziamo insieme le esecuzioni migliori della giornata: analisi, possibilità d'ingresso e gestione dell'operazione.",
  },
  {
    icon: MessagesSquare,
    number: '04',
    title: 'Community privata e supporto',
    text: 'Nella community condividiamo le nostre esecuzioni, rispondiamo ai dubbi e diamo consigli pratici per migliorare le tue analisi, così sai cosa mantenere e cosa correggere.',
  },
]

export default function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="section-head method-heading">
          <span className="eyebrow">IL METODO</span>

          <h2>
            Ti guidiamo dai primi passi fino ad{' '}
            <em>eseguire con costanza.</em>
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
