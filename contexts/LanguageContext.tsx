"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import id from "@/translations/id"
import en from "@/translations/en"

type Locale = "id" | "en"
type Translations = typeof id

// Utility type to generate dot-notation paths from the Translations object
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export type TranslationKey = NestedKeyOf<Translations>

const translations: Record<Locale, Translations> = { id, en }

interface LanguageContextType {
  locale: Locale
  t: (key: TranslationKey) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".")
  let current: unknown = obj
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path // fallback: return the key itself
    }
  }
  return typeof current === "string" ? current : path
}

function detectLocale(): Locale {
  // Check localStorage first
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("portfolio-locale")
    if (saved === "id" || saved === "en") return saved
  }

  // Auto-detect from browser
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language || ""
    if (browserLang.startsWith("id")) return "id"
  }

  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id") // default SSR
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocale(detectLocale())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-locale", locale)
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  const t = (key: TranslationKey): string => {
    return getNestedValue(translations[locale] as unknown as Record<string, unknown>, key)
  }

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "id" ? "en" : "id"))
  }

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
