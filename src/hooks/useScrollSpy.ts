import { useEffect, useRef, useState } from 'react'
import type { SectionId } from '../types'

export function useScrollSpy() {
  const [active, setActive] = useState<SectionId>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const fadeEls = Array.from(document.querySelectorAll<HTMLElement>('[data-fade]'))

    observerRef.current?.disconnect()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (target.hasAttribute('data-reveal') || target.hasAttribute('data-fade')) {
            if (entry.isIntersecting) {
              requestAnimationFrame(() => target.classList.add('show'))
            }
          }
          if (target.tagName === 'SECTION' && target.id) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              setActive(target.id as SectionId)
            }
          }
        })
      },
      { threshold: [0.1], rootMargin: '0px 0px -10% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    revealEls.forEach((el) => observer.observe(el))
    fadeEls.forEach((el) => observer.observe(el))
    observerRef.current = observer

    // Revelar de inicio los elementos ya visibles en viewport
    const vh = window.innerHeight || document.documentElement.clientHeight
    requestAnimationFrame(() => {
      ;[...revealEls, ...fadeEls].forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) el.classList.add('show')
      })
    })

    return () => observer.disconnect()
  }, [])

  return active
}
