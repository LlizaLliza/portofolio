"use client"

import { useEffect, useRef, useState } from "react"

const allProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, checkout flow, payment integration, and admin dashboard for product management.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "PostgreSQL"],
    gradient: "from-violet-600 to-indigo-600",
    github: "https://github.com",
    demo: "#",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag & drop interface, team assignments, and progress tracking.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    gradient: "from-cyan-600 to-blue-600",
    github: "https://github.com",
    demo: "#",
    category: "Full Stack",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location search, 7-day forecast, interactive maps, air quality index, and weather alerts.",
    tags: ["React", "REST API", "Chart.js", "CSS", "Geolocation"],
    gradient: "from-orange-500 to-rose-600",
    github: "https://github.com",
    demo: "#",
    category: "Frontend",
  },
  {
    title: "Social Media App",
    description:
      "Social media platform clone with user authentication, posts, comments, likes, follow system, and real-time notifications.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Cloudinary"],
    gradient: "from-pink-500 to-purple-600",
    github: "https://github.com",
    demo: "#",
    category: "Full Stack",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with smooth animations, responsive design, dark theme, and contact form integration.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Vercel"],
    gradient: "from-emerald-500 to-teal-600",
    github: "https://github.com",
    demo: "#",
    category: "Frontend",
  },
  {
    title: "REST API Service",
    description:
      "Scalable REST API with JWT authentication, rate limiting, API documentation with Swagger, comprehensive testing, and Docker deployment.",
    tags: ["Node.js", "Express", "JWT", "Docker", "Jest"],
    gradient: "from-amber-500 to-orange-600",
    github: "https://github.com",
    demo: "#",
    category: "Backend",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with room support, file sharing, typing indicators, read receipts, and message search.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    gradient: "from-sky-500 to-blue-600",
    github: "https://github.com",
    demo: "#",
    category: "Full Stack",
  },
  {
    title: "Blog CMS",
    description:
      "Content management system with markdown editor, image upload, categories, SEO optimization, and analytics dashboard.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL", "S3"],
    gradient: "from-lime-500 to-green-600",
    github: "https://github.com",
    demo: "#",
    category: "Full Stack",
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  return (
    <div ref={pageRef} className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted mt-4 text-lg max-w-2xl">
            A comprehensive collection of my work spanning frontend, backend, and full-stack development.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "glass text-muted hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Thumbnail */}
                <div
                  className={`sm:w-48 sm:min-h-full h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-muted shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-muted/80 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
                        aria-label="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={project.demo}
                        className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
