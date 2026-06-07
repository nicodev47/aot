type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}