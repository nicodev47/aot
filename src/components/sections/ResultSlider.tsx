interface ResultSliderProps {
  images: string[]
  reverse?: boolean
  label: string
  offset?: number
}

function rotateImages(images: string[], offset: number): string[] {
  if (images.length === 0) return images

  const safeOffset = ((offset % images.length) + images.length) % images.length

  return [...images.slice(safeOffset), ...images.slice(0, safeOffset)]
}

export default function ResultSlider({
  images,
  reverse = false,
  label,
  offset,
}: ResultSliderProps) {
  const visualOffset = offset ?? (reverse ? Math.ceil(images.length / 2) : 0)
  const orderedImages = rotateImages(images, visualOffset)
  const marqueeImages = [...orderedImages, ...orderedImages]

  return (
    <div className={`results-marquee${reverse ? ' reverse' : ''}`}>
      <div className="results-track">
        {marqueeImages.map((src, index) => (
          <div className="result-card" key={`${label}-${src}-${index}`}>
            <img
              src={src}
              alt={`${label} ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
