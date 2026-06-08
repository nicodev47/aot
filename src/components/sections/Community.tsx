import { BarChart3, MessageCircle, Users } from 'lucide-react'

const communityPoints = [
  {
    icon: MessageCircle,
    text: 'Feedback continuo sulle esecuzioni',
  },
  {
    icon: Users,
    text: 'Sessioni operative e confronto quotidiano',
  },
  {
    icon: BarChart3,
    text: 'Backtest, analisi ed esempi reali',
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
            <em>incentivato alla tua crescita da trader.</em>
          </h2>

          <p>
            La chiamata privata ti dà la direzione. La community ti aiuta a
            mantenere la continuità: condividi analisi, confronta esecuzioni,
            fai domande e osserva come viene applicata la strategia ogni giorno.
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
            <p>Questo era il setup corretto sulla presa di liquidità?</p>
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
            <p>Chiaro. È molto più semplice ora che seguo la checklist.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
