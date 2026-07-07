import { BarChart3, Clock3, Crosshair, Users } from 'lucide-react'

const methodItems = [
  {
    icon: Users,
    number: '01',
    title: 'Chiamata di Coaching 1-1',
    text: "La strategia ti verrà spiegata step-by-step all'interno di una chiamata privata individuale, dove ti verranno spiegati tutti i concetti chiave e i modelli d'ingresso utilizzando esempi pratici direttamente sul grafico. Alla fine della chiamata avrai un chiaro piano operativo ed una strategia da utilizzare fin da subito.",
  },
  {
    icon: Crosshair,
    number: '02',
    title: "Strategia Scalping e modelli d'ingresso",
    text: "Partiamo dai concetti principali della strategia, passiamo ai modelli d'ingresso e costruiamo un'analisi completa. Infine strutturiamo un piano operativo per consentirti di ottenere i tuoi primi risultati il prima possibile.",
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Sessioni Di Gruppo e Confronto Diretto',
    text: "Durante le sessioni di gruppo approfondiamo le esecuzioni migliori di ogni giornata operativa, discutendo analisi, possibilità d'ingresso e gestione delle operazioni.",
  },
  {
    icon: Clock3,
    number: '04',
    title: 'Accesso alla Community e Supporto Diretto',
    text: 'All’interno della community condividiamo le nostre esecuzioni, rispondiamo a dubbi domande e diamo consigli pratici su come migliorare le proprie analisi ed esecuzioni in modo che comprendi esattamente cosa mantenere e cosa correggere dietro ogni analisi.',
  },
]

export default function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div className="section-head method-heading">
          <span className="eyebrow">IL METODO</span>

          <h2>
            Non devi imparare tutto da solo.
            <br />
            <em>Verrai guidato fin dai tuoi primi passi con la strategia.</em>
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
