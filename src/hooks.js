import { useEffect, useRef, useState } from 'react'

/** Adds `is-visible` once the element scrolls into view. */
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/** Returns the id of the section currently in the viewport band. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}

/** True once the page has scrolled past `offset` px. */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [offset])
  return scrolled
}
