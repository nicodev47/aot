import { Check } from 'lucide-react'
import callVisual from '../../assets/images/nico-call.png'
import { DISCOVERY_CALL_URL } from '../../data/siteData'

const supportPoints = [
  'Vuole accelerare il proprio percorso verso il primo payout',
  'Preferisce essere seguito 1-1 privatamente',
  'Sta cercando un confronto diretto durante il proprio percorso',
  'Cerca maggiore fiducia e consapevolezza nelle proprie esecuzioni',
]

const calendlyEmbedUrl = `${DISCOVERY_CALL_URL}?hide_gdpr_banner=1&background_color=09090a&text_color=ffffff&primary_color=ff334d`

export default function PayoutMentorship() {
  return (
    <section className="section payout-mentorship" id="affiancamento">
      <div className="container payout-mentorship-inner">
        <div className="payout-mentorship-copy">
          <div className="payout-call-visual">
            <img src={callVisual} alt="Nico Coach" />
          </div>

          <span className="eyebrow">PER CHI VUOLE DI PIÙ</span>

          <h2>
            Per chi cerca un percorso di mentorship.
            <br />
            <em>Ti seguiamo fino al primo payout.</em>
          </h2>

          <p className="payout-mentorship-lead">
            Un percorso dedicato a chi desidera qualcosa di più del semplice accesso alla community. È possibile andare a strutturare un percorso di mentorship direttamente con me dove andremo a lavorare sulla tua situazione nel dettaglio ed andremo a strutturare insieme un percorso di mentorship privato fino al raggiungimento del tuo primo payout.
          </p>

          <div className="payout-support">
            <h3>Questo percorso è perfetto per chi:</h3>

            <div className="payout-support-list">
              {supportPoints.map((point) => (
                <div className="payout-support-item" key={point}>
                  <Check />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="payout-calendly-card">
          <div className="payout-calendly-clip">
            <iframe
              className="payout-calendly-frame"
              src={calendlyEmbedUrl}
              title="Prenota la call conoscitiva"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
