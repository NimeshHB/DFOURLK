"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import Image from "next/image"
import { ArrowUpRight, Plus, Sparkles, Zap, Layers, Maximize, Ghost } from "lucide-react"

export type Project = {
  slug: string
  title: string
  category: string[]
  image: string
  description?: string
  color: string
}

const projects: Project[] = [
  {
    slug: "dreamer-os",
    title: "Dreamer OS",
    category: ["UI System", "Future Tech"],
    image: "/dreamer.svg",
    description: "Architecting the next generation of spatial operating systems.",
    color: "#00ffcc",
  },
  {
    slug: "spice-soul",
    title: "Spice & Soul",
    category: ["Brand Identity", "Design"],
    image: "/spices.svg",
    description: "Reimagining luxury through culinary art and digital precision.",
    color: "#ff3366",
  },
  {
    slug: "collective-visuals",
    title: "Photography Collective",
    category: ["Photography", "Studio"],
    image: "/sanisir.svg?height=800&width=1200",
    description: "Capturing the essence of modern minimalism in every frame.",
    color: "#0099ff",
  },
  {
    slug: "haven-hotels",
    title: "Haven Hotels",
    category: ["Hospitality", "Web"],
    image: "/hotel.svg?height=1000&width=1000",
    description: "Seamless digital concierges for the world's most elite travelers.",
    color: "#ffcc00",
  },
  {
    slug: "flow-park",
    title: "Flow Park",
    category: ["Urban Design", "SaaS"],
    image: "/parkingS.svg?height=800&width=1000",
    description: "Designing the pulse of modern cities through smart logistics.",
    color: "#9933ff",
  },
  {
    slug: "atlas-portal",
    title: "Atlas Portal",
    category: ["Interface", "Redesign"],
    image: "/uiux.svg?height=900&width=1100",
    description: "Transforming enterprise complexity into elegant interaction.",
    color: "#ff6600",
  },
]

function PerspectiveCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const xc = rect.width / 2
    const yc = rect.height / 2
    const dx = x - xc
    const dy = y - yc
    setRotate({ x: dy / 10, y: -dx / 10 })
  }

  const onMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      className={`relative h-[450px] md:h-[600px] w-full group transition-all duration-1000 ease-out ${index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"
        }`}
      style={{
        perspective: "1200px",
      }}
    >
      <div
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5 transition-transform duration-200 ease-out shadow-2xl"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Internal Depth Layer 1: The Image */}
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
          />
        </div>

        {/* Internal Depth Layer 2: Gradient Overlay */}
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${project.color}20 50%, #000 100%)`
          }}
        />

        {/* Internal Depth Layer 3: Glass UI */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-[50px]">
          <div className="mb-4 space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            <div className="flex flex-wrap gap-2">
              {project.category.map(cat => (
                <span key={cat} className="text-[10px] font-black tracking-widest text-[#fff] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {cat}
                </span>
              ))}
            </div>
            <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none italic group-hover:not-italic transition-all duration-500">
              {project.title}
            </h4>
          </div>

          <p className="text-gray-400 text-sm max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 translate-y-4 group-hover:translate-y-0 translate-transform">
            {project.description}
          </p>

          <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl bg-white text-black p-4 rotate-12 group-hover:rotate-0">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>

        {/* Interactive Highlight Flare */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${rotate.y * -10 + 50}% ${rotate.x * 10 + 50}%, ${project.color}, transparent 60%)`
          }}
        />
      </div>

      {/* Outer Floating Element (Year/Count) */}
      <div
        className="absolute -top-6 -left-6 z-10 w-24 h-24 rounded-full border border-white/10 flex flex-col items-center justify-center backdrop-blur-3xl group-hover:border-[color:var(--mint-green)] transition-all duration-700"
        style={{
          transform: `translateZ(100px) scale(${isHovered ? 1.1 : 1})`,
        }}
      >
        <span className="text-white/20 text-xs font-black tracking-widest">Project</span>
        <span className="text-white text-lg font-black">{1 + index}</span>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const [filter, setFilter] = useState("All")
  const filters = ["All", "Visual", "Systems", "Interface"]

  return (
    <section id="work" className="relative py-40 bg-[#000] overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00ffcc]/5 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Floor */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 0%, #000 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[color:var(--mint-green)] text-[10px] font-black uppercase tracking-widest">
                Portoflio 2025
              </span>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>
            <h2 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter relative">
              Web <br />
              <span className="text-outline text-transparent group-hover:text-white transition-all duration-700">
                Projects.
              </span>
              <Sparkles className="absolute -top-12 right-0 w-24 h-24 text-[color:var(--mint-green)] animate-spin-slow opacity-20" />
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-lg">
              We don't just build websites; we architect digital monuments that define the spirit of modern creative agencies.
            </p>
            <div className="flex gap-4">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-4 rounded-full text-xs font-black tracking-widest transition-all duration-500 ${filter === f ? "bg-white text-black translate-y-[-4px]" : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-32">
          {projects.map((p, i) => (
            <PerspectiveCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Immersive CTA */}
        <div className="mt-60 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[color:var(--mint-green)]/10 blur-[150px] rounded-full pointer-events-none" />

          <h5 className="text-white/20 font-black tracking-[0.6em] mb-12">Want to see more?</h5>

          <button className="group relative px-16 py-8 md:px-24 md:py-12 bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
            <div className="relative z-10 flex items-center gap-8">
              <span className="text-black text-2xl md:text-5xl font-black tracking-tighter">More Project</span>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <Maximize className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            {/* Animated Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--mint-green)] to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .translate-z-\[50px\] {
          transform: translateZ(50px);
        }

        .translate-z-\[100px\] {
          transform: translateZ(100px);
        }
      `}</style>
    </section>
  )
}
