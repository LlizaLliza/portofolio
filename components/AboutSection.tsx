"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Tahun Pengalaman", value: "3+" },
  { label: "Project Selesai", value: "5+" },
  { label: "Teknologi", value: "10+" },
  { label: "Sertifikat", value: "5+" },
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
            Tentang <span className="gradient-text">Saya</span>
          </h2>
        </div>

        {/* Content */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Web Developer & IT Specialist
          </h3>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Sebagai Web Developer dengan latar belakang kuat di Informatika,
              saya memiliki spesialisasi dalam membangun dan mengelola sistem
              informasi akademik serta aplikasi berbasis web yang efisien.
            </p>
            <p>
              Saya berpengalaman sebagai staf IT & Programmer di lingkungan
              perguruan tinggi, bertanggung jawab atas pengembangan ekosistem
              digital kampus mulai dari Sistem Informasi Akademik (SIAKAD)
              hingga pengelolaan LMS Moodle. Terbiasa bekerja secara fleksibel
              menggunakan Laravel, CodeIgniter, dan PHP Native.
            </p>
            <p>
              Sebelum fokus pada pengembangan web, saya menajamkan logika
              algoritma dan kreativitas melalui pengalaman intensif sebagai
              Game Programmer (Unity/C#) di Agate Academy dan ICE Institute.
              Pengalaman ini membentuk kemampuan problem-solving yang adaptif.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center gap-4 mt-8">
            <a href="#contact" className="btn-primary text-sm">
              Hubungi Saya
            </a>
            <a
              href="https://www.linkedin.com/in/uki-aula-fauzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              LinkedIn Profile
            </a>
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
