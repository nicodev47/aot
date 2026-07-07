const mentorshipItems = [
  {
    number: '01',
    title: 'Strategia Completa e Modelli D’ingresso',
    text: 'Partiamo dai concetti principali della strategia, passiamo ai modelli d’ingresso e costruiamo un’analisi completa. Infine strutturiamo un piano operativo per consentirti di ottenere i tuoi primi risultati il prima possibile.',
  },
  {
    number: '02',
    title: 'Sessioni Di Gruppo e Confronto Diretto',
    text: 'Durante le sessioni di gruppo approfondiamo le esecuzioni migliori di ogni giornata operativa, discutendo analisi, possibilità d’ingresso e gestione delle operazioni.',
  },
  {
    number: '03',
    title: 'Community e Q&A',
    text: 'Analizziamo e revisioniamo le tue esecuzioni, identifichiamo trade corretti, entrate anticipate, occasioni saltate e problemi di gestione. Capisci esattamente cosa mantenere e cosa correggere.',
  },
  {
    number: '04',
    title: 'Dalla Spiegazione All’autonomia',
    text: 'L’obiettivo è renderti autonomo, così da sviluppare analisi indipendenti senza dipendere da call o segnali, prendendo decisioni motivate ed eseguendo con precisione.',
  },
  {
    number: '05',
    title: 'Sessioni Di Backtest e Analisi',
    text: 'Durante la settimana puoi partecipare a sessioni di backtest nelle quali applichiamo insieme la strategia a grafico, oltre a confrontarti con altri studenti per consolidare il metodo.',
  },
  {
    number: '06',
    title: 'Psicologia, Disciplina e Mentalità Operativa',
    text: 'Lavoriamo su disciplina, gestione emotiva, pazienza, controllo delle perdite e costruzione di una routine operativa stabile, sostenibile e ripetibile nel tempo.',
  },
]

export default function Mentorship() {
  return (
    <section className="section mentorship" id="mentorship">
      <div className="container mentorship-inner">
        <div className="mentorship-heading">
          <span className="eyebrow">CHIAMATA 1:1</span>
          <h2>
            Non devi imparare tutto da solo.
            <br />
            <em>Verrai guidato fin dai tuoi primi passi con la strategia.</em>
          </h2>
          <p className="large-copy">
            La strategia ti verrà spiegata in modo semplice e chiaro durante una
            chiamata privata. Oltre alla teoria, vedrai esempi pratici a grafico,
            i modelli d’ingresso applicati e una sessione di backtest nella quale
            analizzeremo insieme il mercato.
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
      </div>
    </section>
  )
}
