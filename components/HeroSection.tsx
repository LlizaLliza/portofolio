"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import TypewriterText from "@/components/ui/TypewriterText"
import AnimatedBlobs from "@/components/ui/AnimatedBlobs"
import ScrollIndicator from "@/components/ui/ScrollIndicator"

const roles = [
  "Web Developer",
  "IT Support Specialist",
  "Laravel & CI Developer",
  "Game Programmer",
]

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <AnimatedBlobs />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted">{t("hero.badge")}</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          {t("hero.greeting")}{" "}
          <span className="gradient-text">Uki Aula Fauzi</span>
        </h1>

        {/* Typing Role */}
        <div className="h-12 flex items-center justify-center mb-8 animate-fade-in-up delay-200">
          <span className="text-xl sm:text-2xl md:text-3xl text-muted font-light">
            {t("hero.iAmA")}{" "}
            <TypewriterText texts={roles} />
          </span>
        </div>

        {/* Description */}
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a href="#projects" className="btn-primary text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
            </svg>
            {t("hero.viewProjects")}
          </a>
          <a href="#contact" className="btn-secondary text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {t("hero.contactMe")}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator text={t("hero.scroll")} />
    </section>
  )
}
