import Image from "next/image"
import { ArrowRight, Globe, Palette, BarChart, Play } from "lucide-react"

export function LexiataBanner() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "Stunning, high-converting websites with fully responsive design and cutting-edge performance.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Graphic Design",
      desc: "Comprehensive brand assets, visual systems, and high-impact marketing collateral.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Brand Strategy",
      desc: "Strategic positioning, core messaging, and product roadmaps to scale your business.",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      title: "Motion Design",
      desc: "Interactive micro-animations, smooth transitions, and high-quality promotional motion graphics.",
      icon: <Play className="w-6 h-6" />,
    },
  ]

  return (
    <section id="services" className="relative py-32 px-6 bg-[#030708] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/services-dark-bg.png"
          alt="Services Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030708] via-[#030708]/80 to-[#030708]" />
      </div>

      {/* Subtle background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[color:var(--mint-green)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--mint-green)] mb-6"> Our Expertise </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8 shadow-2xl">
              Premium <br />
              <span className="text-[color:var(--mint-green)]">
                Services
              </span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md uppercase tracking-wider font-medium">
              We engineer bespoke digital experiences that bridge the gap between technical complexity and artistic elegance.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4 bg-white text-black font-bold px-10 py-5 rounded-none shadow-2xl hover:bg-[color:var(--mint-green)] transition-all duration-500 uppercase tracking-widest text-sm"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Right Side: Services Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative p-10 rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 transition-all duration-700 hover:-translate-y-4 hover:bg-white/[0.06] overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-[color:var(--mint-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[color:var(--mint-green)]/10 flex items-center justify-center text-[color:var(--mint-green)] mb-8 shadow-inner">
                    {service.icon}
                  </div>

                  <h4 className="relative z-10 text-2xl font-black text-white mb-4 uppercase tracking-tight">
                    {service.title}
                  </h4>

                  <p className="relative z-10 text-gray-400 leading-relaxed font-medium">
                    {service.desc}
                  </p>

                  {/* Shine effect on hover */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[100%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
