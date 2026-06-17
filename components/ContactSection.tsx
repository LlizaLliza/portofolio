"use client"

import { useEffect, useRef, useState, FormEvent } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvjzqqw"

type FormStatus = "idle" | "submitting" | "success" | "error"

const contactInfo = [
  {
    label: "Email",
    value: "ukiaula39@gmail.com",
    href: "mailto:ukiaula39@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: "from-primary to-purple-400",
  },
  {
    label: "GitHub",
    value: "github.com/LlizaLLiza",
    href: "https://github.com/LlizaLLiza",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: "from-gray-400 to-gray-600",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/uki-aula-fauzi",
    href: "https://www.linkedin.com/in/uki-aula-fauzi/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    color: "from-blue-500 to-blue-700",
  },
]

export default function ContactSection() {
  const { ref, isVisible } = useRevealOnScroll()
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useLanguage()



  // Auto-reset status setelah 5 detik
  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => setFormStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setFormStatus("success")
        formRef.current?.reset()
      } else {
        setFormStatus("error")
      }
    } catch {
      setFormStatus("error")
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding relative"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary text-sm font-mono tracking-widest uppercase">
            {t("contact.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            {t("contact.title")} <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass glass-hover rounded-2xl p-5 group transition-all duration-300"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted uppercase tracking-wider mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-sm font-medium truncate">
                      {info.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Extra message */}
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-muted text-sm leading-relaxed">
                {t("contact.extraMessage")}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted mb-2"
                  >
                    {t("contact.formName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={formStatus === "submitting"}
                    placeholder={t("contact.formNamePlaceholder")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted mb-2"
                  >
                    {t("contact.formEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={formStatus === "submitting"}
                    placeholder={t("contact.formEmailPlaceholder")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm text-muted mb-2"
                >
                  {t("contact.formSubject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={formStatus === "submitting"}
                  placeholder={t("contact.formSubjectPlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-2"
                >
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={formStatus === "submitting"}
                  placeholder={t("contact.formMessagePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/25 transition-all text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Status Messages */}
              {formStatus === "success" && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2 animate-fade-in-up">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  {t("contact.formSuccess")}
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2 animate-fade-in-up">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  {t("contact.formError")}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="btn-primary w-full justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                {formStatus === "submitting" ? (
                  <>
                    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    {t("contact.formSending")}
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                    {t("contact.formSubmit")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

