import { useEffect } from 'react'
import { Check } from 'lucide-react'
import callVisual from '../../assets/images/nico-call.png'
import { DISCOVERY_CALL_URL } from '../../data/siteData'
import { trackEvent } from '../../utils/tracking'
import StatusBadge from '../ui/StatusBadge'

const supportPoints = [
  'Vuole accelerare il proprio percorso verso il primo payout',
  'Preferisce essere seguito 1-1 privatamente',
  'Sta cercando un confronto diretto durante il proprio percorso',
  'Cerca maggiore fiducia e consapevolezza nelle proprie esecuzioni',
]

const calendlyEmbedUrl = `${DISCOVERY_CALL_URL}?hide_gdpr_banner=1&background_color=09090a&text_color=ffffff&primary_color=ff334d`
const calendlyOrigin = new URL(DISCOVERY_CALL_URL).origin

type CalendlyMessageData = {
  event: string
}

function isCalendlyMessageData(data: unknown): data is CalendlyMessageData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'event' in data &&
    typeof (data as { event?: unknown }).event === 'string'
  )
}

export default function PayoutMentorship() {
  useEffect(() => {
    function handleCalendlyMessage(event: MessageEvent<unknown>): void {
      if (event.origin !== calendlyOrigin || !isCalendlyMessageData(event.data)) {
        return
      }

      if (event.data.event === 'calendly.event_scheduled') {
        trackEvent('calendly_event_scheduled', {
          location: 'payout_mentorship',
        })
      }
    }

    window.addEventListener('message', handleCalendlyMessage)

    return () => {
      window.removeEventListener('message', handleCalendlyMessage)
    }
  }, [])

  function handleCalendlyInteraction(): void {
    trackEvent('calendly_section_click', {
      location: 'payout_mentorship',
      label: 'Calendly',
    })
    trackEvent('cta_prenota_call_click', {
      location: 'payout_mentorship',
      label: 'Prenota la call conoscitiva',
    })
  }

  return (
    <section className="section payout-mentorship" id="affiancamento">
      <div className="container payout-mentorship-intro">
        <span className="eyebrow">mentorship privata</span>
        <h2>Vuoi Accelerare il tuo Percorso?</h2>
        <p>
          Se cerchi un percorso più personale ti offriamo la possibilità di andare
          a strutturare un percorso di mentorship one-to-one dove verrai seguito
          fino al tuo primo payout.
        </p>
      </div>

      <div className="container payout-mentorship-inner">
        <div className="payout-mentorship-copy">
          <div className="payout-call-visual">
            <img src={callVisual} alt="Nico Coach" />
          </div>

          <StatusBadge
            text="Percorso di Mentorship +Accesso Lifetime alla Community"
            animatedDot
          />

          <h2>
            Per chi preferisce un percorso di mentorship.
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

        <div
          className="payout-calendly-card"
          onPointerDownCapture={handleCalendlyInteraction}
        >
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
