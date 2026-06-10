import { additionalResultImages } from '../../data/siteData'
import ResultSlider from './ResultSlider'

export default function AdditionalResults() {
  return (
    <section className="section additional-results" id="altri-risultati">
      <div className="container additional-results-heading">
        <span className="eyebrow">ALTRI TRAGUARDI RAGGIUNTI</span>
        <h2>
          Abbiamo altri <em>risultati.</em>
        </h2>
      </div>

      <ResultSlider
        images={additionalResultImages}
        label="Altro risultato studente"
      />
    </section>
  )
}
