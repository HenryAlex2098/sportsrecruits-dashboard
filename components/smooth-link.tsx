"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface SmoothLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function SmoothLink({ href, children, className }: SmoothLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Add a small delay to allow for any hover effects to complete
    setTimeout(() => {
      router.push(href)
    }, 50)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
