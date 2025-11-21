import Image from "next/image"

export default function WhoWeAre() {
  return (
    <section aria-labelledby="who-we-are" className="mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 id="who-we-are" className="text-3xl md:text-4xl font-black text-black mb-4">
              Who we are
            </h3>
            <p className="text-gray-600 max-w-prose mb-6">
              We’re a small, focused team of designers and engineers who craft bold digital
              experiences. We mix strategy, UI/UX and motion to build products and brands that
              feel modern, tactile and memorable.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="font-medium">Strategic product design</li>
              <li className="font-medium">Brand identity & art direction</li>
              <li className="font-medium">Web & mobile interfaces</li>
              <li className="font-medium">Motion & visual storytelling</li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-[#00DF82] text-black font-bold px-6 py-3 rounded-md shadow-md hover:shadow-lg"
              >
                Let's talk
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden ring-2 ring-[#00DF82]/30">
              <Image
                src="/placeholder-user.jpg"
                alt="Team portrait"
                width={720}
                height={540}
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
