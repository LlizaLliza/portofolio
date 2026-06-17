"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  /** Array of strings to cycle through with the typing animation */
  texts: string[]
  /** Milliseconds per character when typing (default: 80) */
  typingSpeed?: number
  /** Milliseconds per character when deleting (default: 40) */
  deletingSpeed?: number
  /** Milliseconds to pause after finishing a word (default: 2000) */
  pauseTime?: number
  /** CSS class for the text wrapper */
  className?: string
  /** CSS class for the blinking cursor */
  cursorClassName?: string
}

export default function TypewriterText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className = "text-white font-medium",
  cursorClassName = "animate-blink text-primary",
}: TypewriterTextProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {displayText}
      <span className={cursorClassName}>|</span>
    </span>
  )
}
