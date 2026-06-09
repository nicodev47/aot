import { resultImages } from '../../data/siteData'

export default function Results() {
  const marqueeImages = [...resultImages, ...resultImages]

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

      <div className="results-marquee">
        <div className="results-track">
          {marqueeImages.map((src, index) => (
            <div className="result-card" key={`first-${index}`}>
              <img src={src} alt={`Risultato studente ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="results-marquee reverse">
        <div className="results-track">
          {marqueeImages.map((src, index) => (
            <div className="result-card" key={`second-${index}`}>
              <img src={src} alt={`Feedback studente ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
