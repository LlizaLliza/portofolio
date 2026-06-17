/**
 * Animated scroll-down indicator shown at the bottom of the hero section.
 * Uses pure CSS animations — no JavaScript interactivity required.
 */
interface ScrollIndicatorProps {
  text: string
}

export default function ScrollIndicator({ text }: ScrollIndicatorProps) {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up delay-700">
      <span className="text-xs text-muted/50 uppercase tracking-widest">{text}</span>
      <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-scroll-indicator" />
      </div>
    </div>
  )
}
