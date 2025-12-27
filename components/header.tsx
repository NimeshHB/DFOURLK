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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#who-we-are" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[color:var(--color-card)]/95 backdrop-blur-md shadow-sm border-b border-[color:var(--color-border)]"
          : "bg-[color:var(--color-card)]"
        }`}
    >
      <div className="container mx-auto px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-36 md:h-10 md:w-44 overflow-hidden">
              <Image src="/Untitled-1-05.png" alt="DFOUR Logo" fill className="object-contain object-left" priority />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-black uppercase tracking-wider transition-colors text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)] text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className="mint-btn mint-glow mint-focus rounded-none px-6 font-black uppercase tracking-wider"
              onClick={() => window.open("https://wa.me/message/FV5EWWATDD4GG1", "_blank")}
            >
              {"Start Project"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

