"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()

      // Calculate mouse position relative to the section
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      setMousePos({ x, y })
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden group"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-x-[-10%] inset-y-[-10%] z-0 transition-transform duration-1000 ease-out pointer-events-none"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -4}%, ${(mousePos.y - 0.5) * -4}%) rotate(${(mousePos.x - 0.5) * 1}deg)`
        }}
      >
        <Image
          src="/hero-visual.png"
          alt="Creative Agency Background"
          fill
          className="object-cover opacity-70 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[color:var(--color-background)] z-10" />
      </div>

      {/* Interactive Spotlight Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0, 223, 130, 0.15), transparent 70%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] font-black mb-6 leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`
              }}
            >
              <span className="block">Where technology</span>
              <span className="block text-[color:var(--mint-green)]">meets creativity.</span>
            </h1>

            <p className="text-sm md:text-lg text-gray-200 font-bold uppercase tracking-[0.4em] mb-12 max-w-2xl opacity-80 transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${(mousePos.x - 0.5) * 10}px, ${(mousePos.y - 0.5) * 10}px)`
              }}
            >
              Web Devalopment • Software • UI/UX • Design • Branding
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Button className="mint-btn mint-glow mint-focus rounded-none px-10 py-7 text-lg font-black uppercase tracking-widest">
                Explore Work
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-none px-10 py-7 text-lg font-black uppercase tracking-widest transition-all">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-[color:var(--mint-green)] to-transparent" />
      </div>
    </section>
  )
}
