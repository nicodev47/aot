import { resultImages } from '../../data/siteData'

export default function Results() {
  const marqueeImages = [...resultImages, ...resultImages]

  return (
    <section className="section results" id="risultati">
      <div className="container results-intro">
        <span className="eyebrow">RISULTATI DELLA COMMUNITY</span>
        <h2>
          La strategia è semplice da capire.
          <br />
          <em>I risultati iniziano dall’esecuzione.</em>
        </h2>
        <p>
          Feedback, progressi e risultati condivisi da chi ha applicato il
          metodo. Alcuni studenti hanno iniziato a vedere chiarezza già dopo la
          spiegazione iniziale perché il processo è diretto e privo di
          complicazioni inutili.
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

      <div className="container disclaimer-mini">
        I risultati mostrati sono individuali e non costituiscono garanzia di
        performance future.
      </div>
    </section>
  )
}
