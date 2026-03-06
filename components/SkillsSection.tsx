"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-primary to-purple-400",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-secondary to-cyan-400",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "from-accent to-pink-400",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Vercel", level: 85 },
    ],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Constantly learning and improving my craft across the full stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass glass-hover rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              {/* Skill Items */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            400 + catIndex * 150 + skillIndex * 80
                          }ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
