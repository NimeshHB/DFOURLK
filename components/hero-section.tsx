import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] min-h-[90vh] py-28 px-4 flex items-center">
      <div className="container mx-auto max-w-[1920px]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-20 sm:mb-12 leading-snug uppercase tracking-tight text-center">
              <span className="block whitespace-nowrap">Where technology</span>
              <span className="block whitespace-nowrap">meets creativity.</span>
            </h1>
          </div>
          {/* services line removed from header — placed nearer to mockups below */}
        </div>

        {/* services line placed near mockups */}
        <div className="mt-0 text-center">
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--mint-green)] font-medium uppercase tracking-wider mb-12">
            <span className="inline-flex items-center justify-center gap-6">
              <span>Web Development</span>
              <span className="opacity-80">·</span>
              <span>UI/UX Design</span>
              <span className="opacity-80">·</span>
              <span>Branding</span>
              <span className="opacity-80">·</span>
              <span>Logo</span>
            </span>
          </p>
        </div>

        {/* Mobile mockup: simplified single image for small screens */}
        <div className="md:hidden mt-8">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[color:var(--color-card)] border-4 border-[color:var(--color-border)] shadow-xl">
              <Image src="/dreamer.svg" alt="Mockup" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Desktop mockups: centered 3D-style group of four overlapping desktop screens (reduced height) */}
        <div className="hidden md:block mt-4 relative h-[420px] md:h-[100px]">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-7xl">
            <div className="relative h-full">
              {/* Back-left (larger) */}
              <div className="absolute left-0 top-1/6 w-1/2 transform -translate-x-8 -translate-y-8 -rotate-6 z-10">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/hotel.svg" alt="Desktop 1" width={900} height={600} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Front-left */}
              <div className="absolute left-1/4 top-0 w-1/2 transform -rotate-2 z-20">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/spices.svg" alt="Desktop 2" width={900} height={600} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Front-right */}
              <div className="absolute left-1/2 top-6 w-1/2 transform rotate-2 z-30">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/dreamer.svg?height=800&width=800" alt="Desktop 3" width={900} height={600} className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Back-right */}
              <div className="absolute right-0 top-1/4 w-1/2 transform translate-x-8 rotate-8 z-5">
                <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                  <Image src="/sanjisir.svg" alt="Desktop 4" width={900} height={600} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
