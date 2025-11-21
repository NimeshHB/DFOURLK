import WhoWeAre from "./who-we-are"

export function PortfolioSection() {
  const projects = [
    {
      title: "Neon Finance",
      category: ["UI/UX", "Web Design"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Urban Architecture",
      category: ["Branding", "Web Design"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Tech Stream",
      category: ["Branding", "Motion"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Future Health",
      category: ["Mobile App", "SaaS"],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <div className="hidden lg:flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gray-200"></div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-400">About</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#00DF82]"></div>
              <span className="text-sm font-black uppercase tracking-wider text-black">Work</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gray-200"></div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Services</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black mb-16 text-black uppercase tracking-tighter">
              Selected work
            </h2>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6 bg-gray-100 border-2 border-transparent group-hover:border-[#00DF82] transition-all">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#00DF82]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-black font-black text-xl uppercase tracking-wider flex items-center gap-2 border-2 border-black px-6 py-3">
                        View Case Study
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-black text-black uppercase tracking-tight leading-none">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, i) => (
                        <span key={i} className="text-xs font-bold text-black uppercase tracking-wider">
                          {cat}
                          {i < project.category.length - 1 ? " / " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Who we are (inserted after Selected work) */}
            <WhoWeAre />
          </div>
        </div>
      </div>
    </section>
  )
}
