import { useEffect } from 'react'

/**
 * Reveals any element marked `data-reveal` as it scrolls into view by adding
 * `is-revealed` to it. Pass the current page so the observer is rebuilt
 * whenever the rendered content changes.
 *
 * If motion is turned down or IntersectionObserver is missing, everything is
 * revealed immediately — the content never depends on the animation running.
 */
export default function useScrollReveal(page) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!els.length) return

    const reveal = (el) => el.classList.add('is-revealed')

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      els.forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target)
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [page])
}
