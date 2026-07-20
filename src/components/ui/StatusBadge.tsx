type StatusBadgeProps = {
  text: string
  animatedDot?: boolean
}

export default function StatusBadge({
  text,
  animatedDot = false,
}: StatusBadgeProps) {
  return (
    <div className="pill">
      {animatedDot ? <span className="live-dot" /> : null}
      {text}
    </div>
  )
}
