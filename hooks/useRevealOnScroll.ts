"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Custom hook to trigger a one-time reveal animation
 * when the element scrolls into the viewport.
 *
 * Replaces the duplicated IntersectionObserver boilerplate
 * used across multiple section components.
 */
export function useRevealOnScroll(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
