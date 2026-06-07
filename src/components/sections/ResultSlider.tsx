interface ResultSliderProps {
  images: string[]
  reverse?: boolean
  label: string
}

export default function ResultSlider({
  images,
  reverse = false,
  label,
}: ResultSliderProps) {
  const marqueeImages = [...images, ...images]

  return (
    <div className={`results-marquee${reverse ? ' reverse' : ''}`}>
      <div className="results-track">
        {marqueeImages.map((src, index) => (
          <div className="result-card" key={`${label}-${index}`}>
            <img src={src} alt={`${label} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
