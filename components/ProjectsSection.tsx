"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Web LPMA Smaratungga",
    description:
      "Website Lembaga Penjaminan Mutu & Akreditasi dengan fitur import data Google Form via API, upload file otomatis ke Google Drive, serta REST API untuk integrasi data dari web lain.",
    tags: ["PHP Native", "MySQL", "Google API", "REST API", "Bootstrap"],
    gradient: "from-violet-600 to-indigo-600",
    image: "/lpma.PNG",
    github: "",
    demo: "https://lpma.smaratungga.ac.id/",
  },
  {
    title: "Career Center Smaratungga",
    description:
      "Platform Career Center & konseling online untuk mahasiswa dengan fitur login Google Account, manajemen konseling, informasi karir, serta REST API untuk pengambilan data dari web lain.",
    tags: ["Tailwind CSS", "Laravel", "MySQL", "Google OAuth", "REST API"],
    gradient: "from-cyan-600 to-blue-600",
    image: "/cc.PNG",
    github: "",
    demo: "https://cc.smaratungga.ac.id/",
  },
  {
    title: "Game 2D Platformer - Alchemist Nightmare",
    description:
      "Game 2D platformer yang dikembangkan sebagai proyek skripsi menggunakan Unity dan C# dengan menerapkan metodologi Agile/Scrum.",
    tags: ["Unity", "C#", "Git", "Agile"],
    gradient: "from-orange-500 to-rose-600",
    image: "/game2d.png",
    github: "",
    demo: "https://llizalliza.itch.io/alchemist-nightmare",
  },
  {
    title: "StoryShare App",
    description:
      "Aplikasi berbagi cerita (PWA) dari bootcamp Dicoding Front-End Web Intermediate dengan fitur offline-first, push notification, peta lokasi, dan penyimpanan cerita favorit via IndexedDB.",
    tags: ["Webpack", "JavaScript", "PWA", "Workbox", "IndexedDB", "Push API", "MapTiler"],
    gradient: "from-pink-500 to-purple-600",
    image: "/storyshare.PNG",
    github: "https://github.com/LlizaLliza/storyshare-app",
    demo: "https://llizalliza.github.io/storyshare-app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan animasi halus, dark theme glassmorphism, dan desain responsif modern yang dibangun dengan Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React"],
    gradient: "from-emerald-500 to-teal-600",
    image: "/portofolio.PNG",
    github: "https://github.com/LlizaLliza/portofolio",
    demo: "https://llizafauzi.vercel.app/",
  },
  {
    title: "Sistem PMB Smaratungga",
    description:
      "Sistem Penerimaan Mahasiswa Baru (PMB) online dengan fitur pendaftaran, upload berkas, konfigurasi gelombang, manajemen calon mahasiswa, serta ujian online yang dapat diawasi secara realtime.",
    tags: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
    gradient: "from-amber-500 to-orange-600",
    image: "/pmb.PNG",
    github: "",
    demo: "https://pmb.smaratungga.ac.id/",
  },
]

export default function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="section-padding relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Project <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Beberapa project yang pernah saya kerjakan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-700 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Project Thumbnail */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                        </svg>
                      </div>
                    </div>
                  </>
                )}

                {/* Hover overlay with links */}
                {(project.github || project.demo) && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="View GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  )}
                  {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="View Demo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  )}
                </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.github || project.demo) && (
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Lihat Website
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a href="/projects" className="btn-secondary text-sm">
            Lihat Semua Project
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
