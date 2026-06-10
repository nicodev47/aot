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
    text: 'Sessioni di backtest, Analisi e Casi Studio',
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
            <em> incentivato alla tua crescita da trader.</em>
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

        <div className="community-video-wrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/1K8jF45Er9A?autoplay=1&mute=1&controls=0&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=1K8jF45Er9A"
            title="Eclipse Trading Club - Community"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
