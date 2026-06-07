import { MessageCircle, Sparkles, Users } from 'lucide-react'

export default function Community() {
  return (
    <section className="section community">
      <div className="container community-box">
        <div className="community-copy">
          <span className="eyebrow">OLTRE LA MENTORSHIP</span>
          <h2>Tre mesi dentro un ambiente che parla la tua stessa lingua.</h2>
          <p>
            La call 1:1 ti dà direzione. La community ti aiuta a mantenere
            continuità: condividi analisi, confronta esecuzioni, fai domande e
            osserva il metodo applicato ogni giorno.
          </p>

          <div className="community-points">
            <span>
              <MessageCircle />
              Supporto e confronto
            </span>
            <span>
              <Users />
              Trader con lo stesso metodo
            </span>
            <span>
              <Sparkles />
              Analisi ed esempi reali
            </span>
          </div>
        </div>

        <div className="chat-stack">
          <div className="chat-message m1">
            <span>STUDENTE</span>
            <p>Questo era il setup corretto sulla presa di liquidità?</p>
          </div>
          <div className="chat-message m2">
            <span>MENTOR</span>
            <p>
              Sì. Ottima lettura: ingresso dopo conferma, invalidazione già
              definita.
            </p>
          </div>
          <div className="chat-message m3">
            <span>STUDENTE</span>
            <p>Chiaro. È molto più semplice ora che seguo la checklist.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
