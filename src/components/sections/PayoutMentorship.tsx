import { ArrowRight, Check } from 'lucide-react'
import { BOOKING_URL } from '../../data/siteData'

const supportPoints = [
  'Affiancamento continuativo dopo la spiegazione della strategia',
  'Revisione dei trade e correzione degli errori operativi',
  'Supporto nella gestione della challenge e dell’account funded',
  'Adattamento del piano operativo alla tua routine e al tuo rischio',
  'Confronto diretto fino al raggiungimento del primo payout',
]

export default function PayoutMentorship() {
  return (
    <section className="section payout-mentorship" id="affiancamento">
      <div className="container payout-mentorship-inner">
        <span className="eyebrow">AFFIANCAMENTO AVANZATO</span>

        <h2>
          Non solo una call.
          <br />
          <em>Ti seguiamo fino al primo payout.</em>
        </h2>

        <p className="payout-mentorship-lead">
          Un percorso separato pensato per chi vuole essere seguito anche dopo
          la spiegazione iniziale. Lavoriamo insieme sull’esecuzione, sulle
          challenge e sulla gestione dell’account fino al raggiungimento del
          primo payout.
        </p>

        <div className="payout-support-list">
          {supportPoints.map((point) => (
            <div className="payout-support-item" key={point}>
              <Check />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="payout-mentorship-footer">
          <p>
            Durata, modalità e investimento vengono definiti durante la call in
            base al tuo livello e al punto da cui parti.
          </p>

          <button
            className="button button-primary payout-main-cta"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Prenota la call conoscitiva
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
