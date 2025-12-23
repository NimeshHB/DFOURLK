"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
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
            <Button className="mint-btn mint-glow mint-focus rounded-none px-6 font-black uppercase tracking-wider">
              {"Start Project"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[color:var(--color-foreground)] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-[60px] md:top-[88px] z-40 bg-[color:var(--color-card)] transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black uppercase tracking-widest text-[color:var(--color-foreground)] hover:text-[color:var(--color-primary)] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="mint-btn mint-glow mint-focus rounded-none px-10 py-6 text-lg font-black uppercase tracking-widest mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            {"Start Project"}
          </Button>
        </nav>
      </div>
    </header>
  )
}

