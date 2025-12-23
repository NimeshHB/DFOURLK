"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react"

export default function WhoWeAre() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePos({ x, y })
    }

    const section = sectionRef.current
    if (window.innerWidth > 768 && section) {
      section.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (section) section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="who-we-are"
      className="relative py-40 bg-[#030708] overflow-hidden group"
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/who-we-are-dark.png"
          alt="Abstract Background"
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030708] via-transparent to-[#030708]" />
      </div>

      {/* Massive Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden w-full text-center">
        <h2 className="text-[25vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter whitespace-nowrap">
          DFOURLK
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">

          {/* Main Narrative Card */}
          <div className="max-w-4xl w-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-12 md:p-20 rounded-[4rem] text-center relative mb-24 overflow-hidden shadow-2xl">
            {/* Decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--mint-green)]/40 to-transparent" />

            <div className="inline-flex items-center gap-3 px-6 py-2 bg-[color:var(--mint-green)]/10 text-[color:var(--mint-green)] rounded-full mb-10 border border-[color:var(--mint-green)]/20">
              <span className="w-2 h-2 rounded-full bg-[color:var(--mint-green)] animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Our Identity</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-12">
              We design <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[color:var(--mint-green)]">The Future.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium mb-12">
              We’re a tight-knit collective of designers, developers, and brand strategists based in Sri Lanka. For four years, we've lived at the intersection of logic and imagination, delivering results that define industries.
            </p>

            <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              <div className="flex flex-col items-center gap-2">


              </div>
              <div className="flex flex-col items-center gap-2">


              </div>
              <div className="flex flex-col items-center gap-2">


              </div>
            </div>
          </div>

          {/* Team Profiles with Parallax */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">

            {/* Co-Founder Card */}
            <div
              className="group/card relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
              }}
            >
              <Image
                src="/chalana.jpg"
                alt="Developer"
                fill
                className="object-cover scale-110 group-hover/card:scale-125 transition-transform duration-1000 grayscale group-hover/card:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover/card:translate-x-2">
                <p className="text-[color:var(--mint-green)] font-black uppercase text-xs tracking-widest mb-2">Lead Developer</p>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Developer</h4>
              </div>
              <div className="absolute top-8 right-8 flex gap-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <a
                  href="https://www.linkedin.com/in/chalanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[color:var(--mint-green)] hover:text-black transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/ChalanaLaksith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[color:var(--mint-green)] hover:text-black transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Creative Lead Card */}
            <div
              className="group/card relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl transition-transform duration-700 ease-out md:mt-24"
              style={{
                transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`
              }}
            >
              <Image
                src="/nimesh.jpg"
                alt="Creative Lead"
                fill
                className="object-cover scale-110 group-hover/card:scale-125 transition-transform duration-1000 grayscale group-hover/card:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover/card:translate-x-2">
                <p className="text-[color:var(--mint-green)] font-black uppercase text-xs tracking-widest mb-2">Lead Designer</p>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Creative Lead</h4>
              </div>
              <div className="absolute top-8 right-8 flex gap-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <a
                  href="https://github.com/NimeshHB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[color:var(--mint-green)] hover:text-black transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nimesh-h-bandara-3b2077232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[color:var(--mint-green)] hover:text-black transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>



        </div>
      </div>
    </section>
  )
}
