"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, Palette, Layers, Boxes, Sparkles, Plus } from "lucide-react"

const designs = [
  {
    id: "01",
    title: "Identity & Logo",
    category: "Brand Architecture",
    description: "Forging timeless visual anchors that command attention and trust. We build identities that live beyond the screen.",
    image: "/logo.svg",
    icon: <Palette className="w-5 h-5" />,
    color: "#00FF88",
    tags: ["Minimal", "Scalable"]
  },
  {
    id: "02",
    title: "Packaging Art",
    category: "Product Experience",
    description: "Converting products into tactile stories that stand out on every shelf. Artistry meets commercial impact.",
    image: "/parkingD.svg",
    icon: <Boxes className="w-5 h-5" />,
    color: "#A855F7",
    tags: ["Tactile", "Luxury"]
  },
  {
    id: "03",
    title: "Social Narrative",
    category: "Digital Content",
    description: "Stopping the scroll with thumb-stopping visuals that drive engagement and tell your brand's story.",
    image: "/social.svg",
    icon: <Layers className="w-5 h-5" />,
    color: "#F97316",
    tags: ["Dynamic", "Social"]
  }
]

function DesignCard({ design, index }: { design: typeof designs[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-5xl mx-auto mb-8 last:mb-0"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/5 transition-all duration-500 hover:border-white/20 flex flex-col md:flex-row h-auto md:h-80 shadow-xl">

        {/* Compact Image Holder */}
        <div className="relative w-full md:w-80 h-60 md:h-full overflow-hidden flex-shrink-0">
          <Image
            src={design.image}
            alt={design.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] md:bg-gradient-to-r md:from-transparent md:to-[#0A0A0A]/40" />
        </div>

        {/* Minimalist Info Side */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[color:var(--mint-green)] text-[10px] font-black uppercase tracking-[0.3em]">
                  {design.category}
                </span>
                <span className="w-4 h-[1px] bg-white/10" />
                <span className="text-white/20 text-[10px] font-mono">Archive_{design.id}</span>
              </div>
              <div className="text-white/20 group-hover:text-[color:var(--mint-green)] transition-colors">
                {design.icon}
              </div>
            </div>

            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight group-hover:text-[color:var(--mint-green)] transition-colors">
              {design.title}
            </h3>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xl">
              {design.description}
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex items-center justify-between">
            <div className="flex gap-2">
              {design.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/40 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            <button className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest group/btn">
              <span>View Case</span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Background ID - More subtle */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-8xl font-black text-white/[0.02] pointer-events-none select-none group-hover:text-white/[0.05] transition-colors">
          {design.id}
        </div>
      </div>
    </div>
  )
}

export function GraphicDesignPortfolio() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#ffffff_1px,transparent_0%)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Refined Header */}
        <div className="mb-20 md:mb-32 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-4 h-4 text-[color:var(--mint-green)]" />
            <span className="text-[color:var(--mint-green)] text-[10px] font-black uppercase tracking-[0.5em]">Studio Catalog</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Direction.</span>
          </h2>

          <p className="text-gray-500 text-base md:text-xl font-medium max-w-2xl leading-relaxed italic">
            Translating core brand values into elegant visual systems with precision and artistic depth.
          </p>
        </div>

        {/* Small Cards Vertical List */}
        <div className="flex flex-col gap-8">
          {designs.map((design, index) => (
            <DesignCard key={design.id} design={design} index={index} />
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-white font-black text-xl">2+</span>
              <span className="text-white/20 text-[8px] uppercase font-bold tracking-widest">Global Awards</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-white font-black text-xl">50+</span>
              <span className="text-white/20 text-[8px] uppercase font-bold tracking-widest">Brand Stories</span>
            </div>
          </div>

          <button className="px-8 py-3 bg-[color:var(--mint-green)] rounded-full text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors flex items-center gap-3">
            Explora Full Archive <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
