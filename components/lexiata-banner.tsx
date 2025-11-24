import Image from "next/image"

export function LexiataBanner() {
  return (
    <section className="py-16 px-6 bg-[#061217] text-white rounded-2xl my-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Our service</h2>
            <p className="text-gray-300 mb-6 max-w-prose">
              We build brand systems, products and motion experiences that help businesses
              communicate more clearly and delight customers. Below are the core services
              we focus on — each designed to scale with your needs.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#00DF82] text-black font-semibold px-5 py-3 rounded-md shadow-lg hover:shadow-2xl transition"
            >
              Get in touch
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                 title: "Web Design & Development",
desc: "Stunning, high-converting websites with fully responsive design"
                },
                {
                  title: "Graphic Design",
                  desc: "Brand assets, visual systems and marketing collateral",
                },
                {
                  title: "Brand Strategy",
                  desc: "Positioning, messaging and platform roadmaps",
                },
                {
                  title: "Motion",
                  desc: "Micro-interactions, transitions and promotional motion",
                },
              ].map((s) => (
                <article
                  key={s.title}
                  className="group relative rounded-xl p-5 bg-gradient-to-br from-white/3 to-white/2 hover:from-[#062017]/60 hover:to-[#062017]/40 transition-shadow shadow-md hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 rounded-lg bg-[#00160f] grid place-items-center text-[#00DF82] shadow-inner">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-95">
                        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{s.title}</h4>
                      <p className="text-sm text-gray-300">{s.desc}</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 8px 40px rgba(0,223,130,0.12)' }} />
                </article>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
