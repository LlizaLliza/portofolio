/**
 * Decorative animated background blobs with a grid overlay.
 * Uses pure CSS animations — no JavaScript interactivity required.
 */
export default function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-float-slow" />
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-float-slow"
        style={{ animationDelay: "4s" }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
