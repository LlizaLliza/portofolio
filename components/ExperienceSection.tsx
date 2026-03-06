"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    role: "Programmer",
    company: "STIAB Smaratungga",
    type: "Contract",
    period: "Agt 2024 - Saat ini",
    location: "Boyolali, Jawa Tengah · Hybrid",
    color: "from-primary to-purple-400",
    highlights: [
      "Merancang, mengembangkan, dan memelihara Sistem Informasi Akademik (SIAKAD) menggunakan Laravel dan PHP Native.",
      "Mengelola dan melakukan kustomisasi pada LMS Moodle untuk mendukung kegiatan E-Learning.",
      "Melakukan troubleshooting hardware, jaringan, dan software untuk operasional kampus.",
      "Mengelola basis data MySQL dan melakukan backup berkala untuk keamanan data institusi.",
      "Data Support for Accreditation (AIPT): Menyiapkan dan menganalisis data akademik untuk pelaporan BAN-PT.",
    ],
  },
  {
    role: "Asisten Pengajar",
    company: "SMK Tunas Harapan Pati",
    type: "Contract",
    period: "Jan 2024 - Jun 2024",
    location: "Pati, Jawa Tengah · On-site",
    color: "from-secondary to-cyan-400",
    highlights: [
      "Membantu guru dalam kegiatan belajar mengajar mata pelajaran komputer.",
      "Membimbing siswa dalam memahami dasar-dasar pemrograman dan logika algoritma.",
      "Membantu pengawasan ujian dan praktikum di laboratorium komputer.",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "PT Reycom Document Solusi",
    type: "Freelance",
    period: "Mei 2023 - Agt 2023",
    location: "Pati, Jawa Tengah · Hybrid",
    color: "from-amber-500 to-orange-400",
    highlights: [
      "Melakukan input data digital dengan tingkat akurasi tinggi dan kecepatan memenuhi target.",
      "Memastikan validitas data dan melakukan verifikasi dokumen fisik ke format digital.",
    ],
  },
  {
    role: "Game Developer Program",
    company: "Indonesia Cyber Education Institute",
    type: "Contract",
    period: "Feb 2022 - Jul 2022",
    location: "Remote",
    color: "from-pink-500 to-rose-400",
    highlights: [
      "Menyelesaikan program intensif pengembangan game dengan fokus pemrograman teknis.",
      "Memperdalam Object-Oriented Programming (OOP) dan algoritma kompleks.",
      "Berhasil menyelesaikan proyek akhir pengembangan game yang dapat dimainkan.",
    ],
  },
  {
    role: "Studi Independen Game Dev",
    company: "Agate Academy",
    type: "Kampus Merdeka",
    period: "Agt 2021 - Jan 2022",
    location: "Remote",
    color: "from-emerald-500 to-teal-400",
    highlights: [
      "Terpilih sebagai peserta Studi Independen Kampus Merdeka di studio game terbesar Indonesia.",
      "Mengembangkan game prototype 2D menggunakan Unity Engine dan C#.",
      "Berkolaborasi dalam tim menggunakan metodologi Agile/Scrum dan Git/GitHub.",
      "Mengimplementasikan gameplay mechanics, fisika, dan user interface (UI).",
    ],
  },
]

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Pengalaman <span className="gradient-text">Kerja</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Perjalanan profesional saya di bidang IT, pengembangan web, dan game development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className={`relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 mt-6">
                    <div className="absolute inset-0 rounded-full bg-primary/50 animate-pulse-glow" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                    }`}
                  >
                    <div className="glass glass-hover rounded-2xl p-6 group">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20">
                          {exp.period}
                        </span>
                        <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5">
                          {exp.type}
                        </span>
                        <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5">
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
