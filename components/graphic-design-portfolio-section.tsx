// /C:/Users/HP/Desktop/Dfour/web/creative-agency-website/components/graphic-design-portfolio-section.tsx
export type GraphicDesignProject = {
  slug: string
  title: string
  category: string[]
  image: string
  description?: string
}

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    slug: "logo-design-1",
    title: "Brand Identity for Tech Startup",
    category: ["Logo Design", "Branding"],
    image: "/chalana.svg?height=600&width=800",
    description: "Complete brand identity including logo, color palette, and typography.",
  },
  {
    slug: "poster-design",
    title: "Event Poster Design",
    category: ["Poster", "Graphic Design"],
    image: "/nimesh.svg?height=600&width=800",
    description: "Eye-catching poster for a music festival.",
  },
  {
    slug: "packaging-design",
    title: "Product Packaging",
    category: ["Packaging", "Branding"],
    image: "/placeholder.svg?height=600&width=800",
    description: "Innovative packaging design for a consumer product.",
  },
  {
    slug: "web-graphics",
    title: "Web Graphics and Icons",
    category: ["Web Design", "Icons"],
    image: "/uiux.svg?height=600&width=800",
    description: "Custom icons and graphics for a website.",
  },
]

import Image from "next/image"

export function GraphicDesignPortfolioSection() {
  return (
    <section aria-labelledby="graphic-design-work" className="mt-24 bg-gray-50 text-black py-12">
      <div className="container mx-auto px-6">
        <h2 id="graphic-design-work" className="text-2xl font-extrabold text-black mb-6">Graphic Design Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {graphicDesignProjects.map((p) => (
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