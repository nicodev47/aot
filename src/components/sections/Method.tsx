import { BarChart3, Clock3, Crosshair, Users } from 'lucide-react'

const methodItems = [
  {
    icon: Crosshair,
    number: '01',
    title: 'Una strategia unica',
    text: 'Impara una strategia che puoi utilizzare fin da subito per fare scalping all’interno del mercato.',
  },
  {
    icon: Clock3,
    number: '02',
    title: 'Una finestra operativa ad alta qualità',
    text: 'La fascia operativa consigliata è dalle 15:30 alle 16:10 per ottenere le performance migliori, ma non è un vincolo: puoi utilizzare i concetti e la strategia per leggere il mercato anche in altri momenti.',
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
    title: 'Sessioni giornaliere e community',
    text: 'Ottieni accesso alla community e partecipa alle sessioni di gruppo giornaliere, nelle quali analizziamo le esecuzioni ottimali della giornata e rispondiamo a dubbi e domande.',
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
