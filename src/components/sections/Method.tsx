import { BarChart3, Clock3, Crosshair, Users } from 'lucide-react'

const methodItems = [
  {
    icon: Users,
    number: '01',
    title: 'Corso Completo Step-by-Step',
    text: "Partiamo dai concetti principali della strategia, passiamo ai modelli d'ingresso fino a mostrarti come costruire un'analisi completa. Infine ti mostriamo come applichiamo ogni giorno la strategia all'interno delle Sessioni di Gruppo Giornaliere. ",
  },
  {
    icon: Crosshair,
    number: '02',
    title: "Strategia Scalping e modelli d'ingresso",
    text: "La strategia si basa su modelli d'ingresso in scalping dove la lettura del mercato e della liquidità venogno messi al primo posto. Imparerai a leggere il mercato e strutturare esecuzioni in maniera indipendente. "
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Sessioni Di Gruppo Giornaliere',
    text: "Ogni giorno all'interno  delle sessioni di gruppo approfondiamo le esecuzioni migliori di ogni giornata operativa, discutendo analisi, possibilità d'ingresso e gestione delle operazioni.",
  },
  {
    icon: Clock3,
    number: '04',
    title: 'Community Privata e Supporto ',
    text: 'All’interno della community condividiamo le nostre esecuzioni, rispondiamo a dubbi domande e diamo consigli pratici su come migliorare le proprie analisi ed esecuzioni in modo da sapere cosa mantenere e cosa correggere dietro ogni analisi.',
  },
]

export default function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="section-head method-heading">
          <span className="eyebrow">IL METODO</span>

          <h2>
            Verrai guidato fin dai tuoi primi passi
            <br />
            con la strategia <em>fino ad essere costante.</em>
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
