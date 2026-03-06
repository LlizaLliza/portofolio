"use client"

import { useState, useEffect } from "react"

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "Full Stack Developer",
  "Creative Coder",
]

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-float-slow" />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted">Available for Work</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Your Name</span>
        </h1>

        {/* Typing Role */}
        <div className="h-12 flex items-center justify-center mb-8 animate-fade-in-up delay-200">
          <span className="text-xl sm:text-2xl md:text-3xl text-muted font-light">
            I&apos;m a{" "}
            <span className="text-white font-medium">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </span>
        </div>

        {/* Description */}
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300 leading-relaxed">
          Crafting beautiful, performant, and user-centric digital experiences
          with modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a href="#projects" className="btn-primary text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-secondary text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
        <span className="text-xs text-muted/50 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
