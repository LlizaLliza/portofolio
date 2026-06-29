"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useLanguage()

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center section-padding relative">
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center relative z-10 animate-fade-in-up">
        <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="M12 17h.01"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">{t("error.title")}</h2>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          {error.message || t("error.fallback")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary py-2.5 text-sm"
          >
            {t("error.tryAgain")}
          </button>
          <a
            href="/"
            className="btn-secondary py-2.5 text-sm"
          >
            {t("error.backHome")}
          </a>
        </div>
      </div>
    </div>
  )
}
