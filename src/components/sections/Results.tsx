import { resultImages } from '../../data/siteData'
import ResultSlider from './ResultSlider'

export default function Results() {
  return (
    <section className="section results" id="risultati">
      <div className="container results-intro">
        <span className="eyebrow">RISULTATI DELLA COMMUNITY</span>
        <h2>
          Risultati reali dei nostri
          <br />
          <em>Studenti.</em>
        </h2>
        <p>
          Non ascoltare solo quello che diciamo: guarda i risultati che
          ottengono i nostri studenti all’interno della nostra community
          privata.
        </p>
      </div>

      <ResultSlider images={resultImages} label="Risultato studente" />
      <ResultSlider
        images={resultImages}
        reverse
        offset={Math.ceil(resultImages.length / 2)}
        label="Feedback studente"
      />
    </section>
  )
}
