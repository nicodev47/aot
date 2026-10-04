import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { scrollToPricing } from '../../utils/navigation'
import { trackEvent } from '../../utils/tracking'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    const hideOn = [
      document.getElementById('offerta'),
      document.querySelector('.final-cta'),
    ].filter((el): el is Element => el !== null)

    if (!hero) return

    let heroVisible = true
    const hideVisible = new Set<Element>()
    const update = () => setVisible(!heroVisible && hideVisible.size === 0)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) {
          heroVisible = entry.isIntersecting
        } else if (entry.isIntersecting) {
          hideVisible.add(entry.target)
        } else {
          hideVisible.delete(entry.target)
        }
      })
      update()
    })

    observer.observe(hero)
    hideOn.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  function handleClick(): void {
    trackEvent('cta_accesso_percorso_click', {
      location: 'sticky_mobile',
      label: 'Accedi alla Community',
    })
    scrollToPricing()
  }

  return (
    <div className={`mobile-cta${visible ? ' visible' : ''}`} aria-hidden={!visible}>
      <button
        className="button button-primary"
        onClick={handleClick}
        tabIndex={visible ? 0 : -1}
      >
        Accedi alla Community · 45€/mese
        <ArrowRight size={18} />
      </button>
    </div>
  )
}
