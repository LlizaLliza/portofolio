"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export default function LanguageToggle() {
  const { locale, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-0.5 px-1 py-1 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
      aria-label={`Switch to ${locale === "id" ? "English" : "Bahasa Indonesia"}`}
      title={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      <span
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "id"
            ? "bg-primary text-white shadow-sm shadow-primary/25"
            : "text-muted hover:text-white"
        }`}
      >
        ID
      </span>
      <span
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-primary text-white shadow-sm shadow-primary/25"
            : "text-muted hover:text-white"
        }`}
      >
        EN
      </span>
    </button>
  )
}
