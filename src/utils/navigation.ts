export function scrollToSection(
  id: string,
  block: ScrollLogicalPosition = 'start'
): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block,
  })
}

export function scrollToPricing(): void {
  const targetId = window.matchMedia('(max-width: 980px)').matches
    ? 'pricing-card'
    : 'offerta'

  scrollToSection(targetId)
}
