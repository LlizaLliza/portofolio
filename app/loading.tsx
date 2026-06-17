export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="flex flex-col items-center gap-6 animate-fade-in-up">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
          </div>
        </div>
        
        {/* Text */}
        <div className="flex items-center gap-1 text-sm font-mono text-muted uppercase tracking-widest">
          <span>Loading</span>
          <span className="animate-blink">...</span>
        </div>
      </div>
    </div>
  )
}
