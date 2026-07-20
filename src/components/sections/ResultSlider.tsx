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

function buildMarqueeImages(images: string[]): string[] {
  if (images.length === 0) return images

  const minLoopItems = 12
  const repeatCount = Math.max(1, Math.ceil(minLoopItems / images.length))
  const loopImages = Array.from({ length: repeatCount }).flatMap(() => images)

  return [...loopImages, ...loopImages]
}

export default function ResultSlider({
  images,
  reverse = false,
  label,
  offset,
}: ResultSliderProps) {
  const visualOffset = offset ?? (reverse ? Math.ceil(images.length / 2) : 0)
  const orderedImages = rotateImages(images, visualOffset)
  const marqueeImages = buildMarqueeImages(orderedImages)

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
