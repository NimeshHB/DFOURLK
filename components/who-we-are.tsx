import Image from "next/image"

export default function WhoWeAre(): JSX.Element {
  return (
    <section aria-labelledby="who-we-are" className="mt-20 text-white bg-[#071018]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h3 id="who-we-are" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Who we are
            </h3>

            <p className="text-gray-300 max-w-prose mb-6">
              We’re a tight-knit team of designers, developers, and brand strategists based in Sri
              Lanka. With four years of focused, real-world experience in the industry, we’ve honed
              our craft delivering results for startups, SMEs, and established brands across the
              island and beyond.
            </p>

            <p className="text-gray-300 max-w-prose mb-6">
              We blend sharp strategy, pixel-perfect design, and clean, future-proof code to launch
              standout websites, powerful software solutions, and unforgettable brand identities
              that don’t just look good today — they actively grow with your business tomorrow.
            </p>



            <p className="text-gray-300 max-w-prose mb-6">Let’s create something remarkable together. ✨</p>



            <a
              href="https://web.facebook.com/profile.php?id=61583791092081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00DF82] text-black font-semibold px-5 py-3 rounded-md shadow-lg"
            >
              Let's talk
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/chalana.svg" alt="Team member1" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src="/Nimesh.svg" alt="Team member2" width={640} height={480} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
