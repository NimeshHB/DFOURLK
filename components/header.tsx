"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--color-card)]/95 backdrop-blur-md shadow-sm border-b border-[color:var(--color-border)]"
          : "bg-[color:var(--color-card)]"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-44 overflow-hidden">
              <Image src="/Untitled-1-05.png" alt="DFOUR Logo" fill className="object-contain object-left" priority />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]">
              Work
            </a>
            <a href="#services" className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]">
              Services
            </a>
            <a href="#about" className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]">
              About
            </a>
            <a href="#journal" className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]">
              Journal
            </a>
            <a href="#contact" className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)]">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="mint-btn mint-glow mint-focus rounded-none px-6 font-black uppercase tracking-wider">
            {"Start Project"}
          </Button>
        </div>
      </div>
    </header>
  )
}
