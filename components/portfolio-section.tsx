// /C:/Users/HP/Desktop/Dfour/web/creative-agency-website/lib/projects.ts
export type Project = {
  slug: string
  title: string
  category: string[]
  image: string
  description?: string
}

export const projects: Project[] = [
  {
    slug: "neon-finance",
    title: "Neon Finance",
    category: ["UI/UX", "Web Design"],
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern financial dashboard focused on neon aesthetics.",
  },
  {
    slug: "urban-architecture",
    title: "Urban Architecture",
    category: ["Branding", "Web Design"],
    image: "/placeholder.svg?height=600&width=800",
    description: "Branding and site for an urban architecture studio.",
  },
  {
    slug: "tech-stream",
    title: "Tech Stream",
    category: ["Branding", "Motion"],
    image: "/placeholder.svg?height=600&width=800",
    description: "Motion-led identity for a streaming platform.",
  },
  {
    slug: "future-health",
    title: "Future Health",
    category: ["Mobile App", "SaaS"],
    image: "/placeholder.svg?height=800&width=800",
    description: "SaaS mobile experience for modern healthcare.",
  },
]

import Image from "next/image"

export function PortfolioSection() {
  return (
    <section aria-labelledby="selected-work" className="mt-24 bg-white text-black py-12">
      <div className="container mx-auto px-6">
        <h2 id="selected-work" className="text-2xl font-extrabold text-black mb-6">Selected Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.slug} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <div className="w-full aspect-square bg-gray-100 relative">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black">{p.title}</h3>
                <div className="text-sm text-gray-600 mb-3">{p.category.join(" · ")}</div>
                <a href={`/#case-${p.slug}`} className="inline-block text-[color:var(--mint-green)] font-semibold">View Case Study</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
