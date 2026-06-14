type VideoEmbedProps = {
  videoId: string
  title?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}

export default function VideoEmbed({
  videoId,
  title = 'Video Preview',
  autoPlay = false,
  muted = false,
  loop = false,
}: VideoEmbedProps) {
  const searchParams = new URLSearchParams({
    rel: '0',
    playsinline: '1',
  })

  if (autoPlay) {
    searchParams.set('autoplay', '1')
  }

  if (muted) {
    searchParams.set('mute', '1')
  }

  if (loop) {
    searchParams.set('loop', '1')
    searchParams.set('playlist', videoId)
  }

  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?${searchParams.toString()}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
