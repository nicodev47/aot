import { useEffect } from 'react'
import { Check } from 'lucide-react'
import callVisual from '../../assets/images/nico-call.webp'
import { DISCOVERY_CALL_URL } from '../../data/siteData'
import { trackEvent } from '../../utils/tracking'
import StatusBadge from '../ui/StatusBadge'

const supportPoints = [
  'Vuoi accelerare il tuo percorso verso il primo payout',
  'Preferisci essere seguito 1-1 in privato',
  'Cerchi un confronto diretto durante tutto il percorso',
  'Vuoi più fiducia e consapevolezza nelle tue esecuzioni',
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
        <h2>Vuoi accelerare il tuo percorso?</h2>
        <p>
          Se cerchi un percorso più personale, puoi costruire con noi una
          mentorship one-to-one e farti seguire fino al tuo primo payout.
        </p>
      </div>

      <div className="container payout-mentorship-inner">
        <div className="payout-mentorship-copy">
          <div className="payout-call-visual">
            <img src={callVisual} alt="Nico Coach" />
          </div>

          <StatusBadge
            text="Mentorship + accesso lifetime alla Community"
            animatedDot
          />

          <h2>
            Per chi preferisce un percorso di mentorship.
            <br />
            <em>Ti seguiamo fino al primo payout.</em>
          </h2>

          <p className="payout-mentorship-lead">
            Un percorso per chi vuole qualcosa di più del semplice accesso
            alla community. Lavoriamo insieme, direttamente con me, sulla tua
            situazione nel dettaglio e costruiamo un percorso privato fino al
            raggiungimento del tuo primo payout.
          </p>

          <div className="payout-support">
            <h3>Questo percorso fa per te se:</h3>

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
