import { resultImages } from '../../data/siteData'
import ResultSlider from './ResultSlider'

const secondSliderImages = [
  ...resultImages.slice(4),
  ...resultImages.slice(0, 4),
]

export default function EvenMoreResults() {
  return (
    <section
      className="section additional-results additional-results-last"
      id="ancora-risultati"
    >
      <div className="container additional-results-heading">
        <span className="eyebrow">LA CRESCITA CONTINUA</span>
        <h2>
          Ed altri
          <br />
          <em>ancora.</em>
        </h2>
      </div>

      <ResultSlider
        images={secondSliderImages}
        reverse
        label="Ulteriore risultato studente"
      />

      <div className="container disclaimer-mini additional-disclaimer">
        I risultati mostrati sono individuali e non costituiscono garanzia di
        performance future.
      </div>
    </section>
  )
}
