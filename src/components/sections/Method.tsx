import { BarChart3, Clock3, Crosshair, Users } from 'lucide-react'

const methodItems = [
  {
    icon: Crosshair,
    number: '01',
    title: 'Una Strategia Unica',
    text: 'Impara una strategia che puoi utilizzare fin da subito per fare scalping all’interno del mercato. Utilizza i nostri modelli d’ingresso per imparare a leggere la liquidità e la struttura di mercato a livello avanzato',
  },
  {
    icon: Clock3,
    number: '02',
    title: 'Una Finestra Operativa ad  Alta Qualità',
    text: 'La fascia operativa consigliata è dalle 15:30 alle 16:10 per le performance migliori, ma non è un vincolo, puoi utilizzare i concetti e la strategia per leggere il mercato anche il altri momenti.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Un sistema chiaro e preciso',
    text: 'La strategia si basa sulla lettura della struttura di mercato avanzata e sulla comprensione delle dinamiche di liquidità.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Sessioni Giornaliere & Community',
    text: 'Ottieni accesso alla community dove giornalmente potrai partecipare a sessioni di gruppo dove andremo a vedere le esecuzioni ottimali della giornata e rispondere ad eventuali dubbi e domande.',
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
            <em>Molta pratica ed esecuzioni.</em>
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
