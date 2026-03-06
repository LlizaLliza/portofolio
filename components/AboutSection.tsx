"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "Happy Clients", value: "10+" },
]

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar / Visual Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden glass border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-white">YN</span>
                  </div>
                  <p className="text-muted text-sm">Add your photo here</p>
                </div>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass border border-primary/20 flex items-center justify-center animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass border border-secondary/20 flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xl">🎨</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              A Passionate Developer & Designer
            </h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a passionate fullstack developer based in Indonesia,
                dedicated to creating beautiful and functional web applications
                that make a difference.
              </p>
              <p>
                With a strong foundation in modern web technologies, I love
                turning complex problems into simple, elegant solutions. My
                approach combines clean code with stunning visual design.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or
                perfecting my design skills.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <a href="#contact" className="btn-primary text-sm">
                Let&apos;s Talk
              </a>
              <a
                href="#projects"
                className="btn-secondary text-sm"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass glass-hover rounded-2xl p-6 text-center group cursor-default"
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
