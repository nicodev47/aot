type PrimaryButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function PrimaryButton({
  children,
  onClick,
  variant = 'primary',
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button button-${variant}`}
    >
      {children}
    </button>
  )
}