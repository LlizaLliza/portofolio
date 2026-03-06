"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-primary to-purple-400",
    skills: [
      "React", "Angular", "AngularJS", "Vue.js",
      "Next.js", "Astro", "Bootstrap", "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-secondary to-cyan-400",
    skills: [
      "PHP Native", "Laravel", "CodeIgniter",
      "Node.js", "Express.js", "Flask",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "from-amber-500 to-orange-400",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "SQLite",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: "from-accent to-pink-400",
    skills: [
      "Git", "GitHub", "Docker", "REST API",
      "Nginx", "Apache HTTP Server", "Webpack", "Vite",
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
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Teknologi yang <span className="gradient-text">Digunakan</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Berbagai teknologi yang pernah dan sering saya gunakan dalam pengembangan project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
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
