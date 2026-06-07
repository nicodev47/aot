type VideoEmbedProps = {
  videoId: string
  title?: string
}

export default function VideoEmbed({
  videoId,
  title = 'Video Preview',
}: VideoEmbedProps) {
  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}