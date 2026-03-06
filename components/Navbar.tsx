"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight transition-colors duration-300"
        >
          <span className="gradient-text">Portfolio</span>
          <span className="text-white/40">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "")
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA Button (Desktop) */}
        <a
          href="/#contact"
          className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                isMobileOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 animate-slide-down">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "")
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="/#contact"
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary text-sm text-center mt-2 justify-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}