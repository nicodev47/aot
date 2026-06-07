import SectionTitle from '../ui/SectionTitle'

const items = [
  {
    title: 'Struttura di Mercato Avanzata e Dinamiche di Liquidità',
    text:
      "All'interno del corso verrai guidato dalle basi della strategia fino ad una lettura di mercato avanzata tramite un corso di oltre 30h+ tra video teorici, video pratici, slide ed esempi a mercato live in modo da apprendere la strategia al meglio. Tutto il corso è suddiviso a sezioni per un totale di 13 sezioni dove all'interno troverai il trading plan che vado ad applicare ogni giorno.",
  },
  {
    title: 'Trading Plan & Framework Operativo',
    text:
      "Accedi al trading plan completo ed ai modelli d'ingresso che utilizziamo quotidianamente per analizzare il mercato, pianificare operazioni e gestire il rischio. Ogni concetto viene spiegato step-by-step per permetterti di sviluppare un approccio strutturato, costante e ripetibile nel lungo periodo.",
  },
  {
    title: 'Analisi Condivise in Tempo Reale',
    text:
      "Ottieni accesso alle mie analisi personali in tempo reale per apprendere al meglio la strategia su esempi a mercato reale in modo da iniziare a guadagnare mentre stai imparando e per vedere come si comporta il prezzo venendo guidato direttamente sul mercato live.",
  },
  {
    title: 'Chiamate di Gruppo Settimanali',
    text:
      "Ottieni accesso ad oltre 2+ chiamate di coaching di gruppo settimanali dove andremo a fare backtest spiegando nel dettaglio la strategia dandoti l'opportunità di intervenire con qualsiasi dubbio o domanda mentre spieghiamo.",
  },
  {
    title: 'Psicologia, Disciplina & Mentalità Operativa',
    text:
      "Una parte fondamentale del percorso sarà dedicata allo sviluppo della mentalità necessaria per affrontare il trading in modo professionale. Lavoreremo su disciplina, gestione emotiva, pazienza, controllo delle perdite e costruzione di una routine operativa stabile, sostenibile e ripetibile nel tempo.",
  },
  {
    title: 'Community Privata & Supporto Continuo',
    text:
      "Una volta completato il corso otterrai l'accesso alla community privata composta da studenti e trader esperti che seguono la stessa strategia e percorso operativo. Potrai confrontarti ogni giorno con altri membri, condividere analisi, ricevere supporto e crescere all’interno di un ambiente focalizzato sul miglioramento costante.",
  },
]

export default function CourseInside() {
  return (
    <section className="section course-inside" id="inside">
      <div className="container">
        <SectionTitle
          eyebrow="ALL'INTERNO DEL PROGRAMMA"
          title="Cosa troverai all’interno di Eclipse"
          subtitle="Un percorso completo progettato per aiutarti a costruire struttura, disciplina e chiarezza operativa."
        />

        <div className="inside-grid">
          {items.map((item, index) => (
            <div className="inside-item" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>

              <div className="inside-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}