"use client"

export function SquashLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative`} style={{ width: "90px", height: "100%" }}>
      <img src="/images/squash-recruit-logo.png" alt="Squash Recruit Logo" className="w-full h-full object-contain" />
    </div>
  )
}
