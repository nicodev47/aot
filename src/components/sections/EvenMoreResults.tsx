import { evenMoreResultImages } from '../../data/siteData'
import ResultSlider from './ResultSlider'

export default function EvenMoreResults() {
  return (
    <section
      className="section additional-results additional-results-last"
      id="ancora-risultati"
    >
      <div className="container additional-results-heading">
        <span className="eyebrow">LA CRESCITA CONTINUA</span>
        <h2>
          Ed altri  <em>ancora.</em>
        </h2>
      </div>

      <ResultSlider
        images={evenMoreResultImages}
        reverse
        label="Ulteriore risultato studente"
      />

    </section>
  )
}
