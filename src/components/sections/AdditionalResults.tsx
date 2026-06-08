import { resultImages } from '../../data/siteData'
import ResultSlider from './ResultSlider'

const firstSliderImages = [
  ...resultImages.slice(7),
  ...resultImages.slice(0, 7),
]

export default function AdditionalResults() {
  return (
    <section className="section additional-results" id="altri-risultati">
      <div className="container additional-results-heading">
        <span className="eyebrow">ALTRI TRAGUARDI RAGGIUNTI</span>
        <h2>
          Abbiamo altri
          <br />
          <em>risultati.</em>
        </h2>
      </div>

      <ResultSlider
        images={firstSliderImages}
        label="Altro risultato studente"
      />
    </section>
  )
}
