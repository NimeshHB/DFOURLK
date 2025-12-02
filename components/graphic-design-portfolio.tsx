import Image from "next/image"

export function GraphicDesignPortfolio() {
  const designs = [
    {
      title: "Logo Design",
      description: "Creative and memorable logos that represent your brand identity.",
      image: "/logo.svg", // Replace with actual image
    },
    {
      title: "Product Packaging Design",
      description: "Eye-catching packaging that stands out on shelves and engages customers.",
      image: "/parkingD.svg", // Replace with actual image
    },
    {
      title: "Social Media Post Design",
      description: "Engaging visuals for social media to boost your online presence.",
      image: "/social.svg", // Replace with actual image
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Graphic Design Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our creative graphic design services that bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--mint-green)]/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-full transform group-hover:scale-105 transition-all duration-300">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {design.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}