import { Star } from 'lucide-react'

const testimonials = [
  {
    rating: 5,
    text: 'Ho apprezzato molto la struttura del corso e della community. Mi sono trovato bene fin da subito.',
    name: 'Marco R.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Le sessioni giornaliere mi hanno aiutato a vedere come applicare la strategia ogni giorno, per me è lì dove si vede il vero valore della community.',
    name: 'Luca B.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Dopo anni di studio sono finalmente riuscito a fare il mio primo payout dopo 2 mesi, è incredibile con quanta semplicità viene spiegata la strategia.',
    name: 'Andrea M.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'I ragazzi nella community sono molto attivi ed avere accesso a delle chiamate giornaliere ogni giorno aiuta tantissimo, hai confronto diretto e vieni ascoltato.',
    name: 'Davide S.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Credo che in Italia ci siano pochissime persone come Nico ed i ragazzi della community che con trasparenza ti spiegano ogni ragionamento che fanno a grafico e sono semre pronti ad aiutrti. ',
    name: 'Gabriele P.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Ho fatto tanti percorsi ma non mi era mai capitato dopo una settimana di avere una strategia già chiara, ho fatto sessioni di backtest e forward ogni giorno ed i risulati sono arrivati Top Nico.',
    name: 'Simone T.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Il mio problema è sempre stato quello di prendere decisioni emotive dentro le operazioni, non mi è mai mancata una strategia, ma la community e le sessioni giornaliere mi hanno aiutato molto a risolvere questo problema.',
    name: 'Matteo F.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Finalmente un percorso che mette davanti tanta pratica ! avevo bisogno di un percorso che mi spiegasse cosa fare ogni singolo giorno e come analizzare il mercato.',
    name: 'Alessandro C.',
    role: 'Studente Community',
  },
  {
    rating: 5,
    text: 'Ho passato la mia primissima prop pochi mesi fa e se anche può sembrare un piccolo traguardo per me è sempre stata una sfida, ma con impegno e le giuste informazioni sono riuscito ad arrivare al mio traguardo, a breve richiederò il mio primo payout.',
    name: 'Federico L.',
    role: 'Studente Community',
  },
]

function renderStars(rating: number) {
  return Array.from({ length: 5 }).map((_, index) => {
    const starValue = index + 1

    if (rating >= starValue) {
      return <Star key={starValue} size={16} fill="currentColor" />
    }

    if (rating >= starValue - 0.5) {
      return (
        <span className="testimonial-star-half" key={starValue}>
          <Star size={16} fill="currentColor" />
          <span>
            <Star size={16} fill="currentColor" />
          </span>
        </span>
      )
    }

    return (
      <Star
        className="testimonial-star-empty"
        key={starValue}
        size={16}
        fill="currentColor"
      />
    )
  })
}

export default function AdditionalResults() {
  return (
    <section className="section testimonials-section" id="recensioni">
      <div className="container testimonials-heading">
        <span className="eyebrow">RECENSIONI</span>
        <h2>Cosa dicono di noi</h2>
        <p>
          L'esperienza di chi è già entrato nella Community e ha iniziato il
          proprio percorso.
        </p>
      </div>

      <div className="container testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div
              className="testimonial-stars"
              aria-label={`${testimonial.rating} stelle`}
            >
              {renderStars(testimonial.rating)}
            </div>
            <p>{testimonial.text}</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
