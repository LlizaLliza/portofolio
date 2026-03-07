"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

const skillCategories = [
  {
    titleKey: "skills.catLanguages",
    icon: "💻",
    color: "from-emerald-500 to-teal-400",
    skills: [
      "PHP", "JavaScript", "TypeScript", "Python",
      "C#", "HTML", "CSS", "SQL",
    ],
  },
  {
    titleKey: "skills.catFrontend",
    icon: "🎨",
    color: "from-primary to-purple-400",
    skills: [
      "React", "Angular", "AngularJS", "Vue.js",
      "Next.js", "Astro", "Bootstrap", "Tailwind CSS", "PWA",
    ],
  },
  {
    titleKey: "skills.catBackend",
    icon: "⚙️",
    color: "from-secondary to-cyan-400",
    skills: [
      "PHP Native", "Laravel", "CodeIgniter",
      "Node.js", "Express.js", "Flask",
    ],
  },
  {
    titleKey: "skills.catDatabase",
    icon: "🗄️",
    color: "from-amber-500 to-orange-400",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "SQLite", "IndexedDB",
    ],
  },
  {
    titleKey: "skills.catDevops",
    icon: "🛠️",
    color: "from-accent to-pink-400",
    skills: [
      "Git", "GitHub", "Docker", "REST API", "JSON",
      "Nginx", "Apache HTTP Server", "Webpack", "Vite",
      "Google API", "Google OAuth", "Workbox", "Push API", "MapTiler",
    ],
  },
  {
    titleKey: "skills.catGameDev",
    icon: "🎮",
    color: "from-rose-500 to-red-400",
    skills: [
      "Unity", "Agile/Scrum", "GDLC",
    ],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            {t("skills.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            {t("skills.title")} <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.titleKey}
              className={`glass glass-hover rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{t(category.titleKey)}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg bg-white/5 text-foreground/80 border border-white/8 hover:border-primary/30 hover:bg-white/8 transition-all duration-300 cursor-default ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{
                      transitionDelay: `${400 + catIndex * 150 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
