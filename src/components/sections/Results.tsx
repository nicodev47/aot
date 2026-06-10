import {
  additionalResultImages,
  evenMoreResultImages,
  resultImages,
} from '../../data/siteData'
import ResultSlider from './ResultSlider'

function splitImagesForRows(images: string[]) {
  const firstRowImages = images.filter((_, index) => index % 2 === 0)
  const secondRowImages = images.filter((_, index) => index % 2 !== 0)

  return { firstRowImages, secondRowImages }
}

export default function Results() {
  const allResultImages = [
    ...resultImages,
    ...additionalResultImages,
    ...evenMoreResultImages,
  ]

  const { firstRowImages, secondRowImages } = splitImagesForRows(allResultImages)

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

      <ResultSlider images={firstRowImages} label="Risultato studente" />
      <ResultSlider
        images={secondRowImages}
        reverse
        label="Feedback studente"
      />
    </section>
  )
}
