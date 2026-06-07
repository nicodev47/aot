import {
  BarChart3,
  MessageCircle,
  Users,
} from 'lucide-react'

const communityPoints = [
  {
    icon: MessageCircle,
    text: 'Supporto e confronto',
  },
  {
    icon: Users,
    text: 'Trader con lo stesso metodo',
  },
  {
    icon: BarChart3,
    text: 'Analisi ed esempi reali',
  },
]

export default function Community() {
  return (
    <section className="community-section" id="community">
      <div className="container community-section-inner">
        <div className="community-heading">
          <span className="eyebrow">OLTRE LA MENTORSHIP</span>

          <h2>
            Tre mesi dentro un ambiente
            <br />
            che parla <em>la tua stessa lingua.</em>
          </h2>

          <p>
            La call 1:1 ti dà una direzione chiara. La community ti aiuta a
            mantenere continuità: condividi analisi, confronta le tue
            esecuzioni, fai domande e osserva il metodo applicato ogni giorno.
          </p>
        </div>

        <div className="community-benefits">
          {communityPoints.map(({ icon: Icon, text }) => (
            <div className="community-benefit" key={text}>
              <Icon />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="community-conversation">
          <div className="community-message community-message-left">
            <span>STUDENTE</span>

            <p>
              Questo era il setup corretto sulla presa di liquidità?
            </p>
          </div>

          <div className="community-message community-message-right">
            <span>MENTOR</span>

            <p>
              Sì. Ottima lettura: ingresso dopo conferma, invalidazione già
              definita.
            </p>
          </div>

          <div className="community-message community-message-left community-message-last">
            <span>STUDENTE</span>

            <p>
              Chiaro. È molto più semplice ora che seguo la checklist.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}