import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-snug uppercase tracking-tight text-center space-y-3">
                <span className="block whitespace-nowrap">Where technology</span>
                <span className="block whitespace-nowrap">meets creativity.</span>
              </h1>
            </div>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--mint-green)] max-w-2xl mx-auto font-medium uppercase tracking-wider mb-8">
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

        {/* Device mockups: add extra spacing and smaller mobile frame to avoid overlap */}
        <div className="mt-20 sm:mt-24 relative h-[300px] md:h-[460px]">
          {/* Left - MacBook (visible on lg+) */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1/4 z-10 px-4">
            <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
              <div className="bg-[color:var(--color-popover)] h-6 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <Image src="/dreamer.svg" alt="SaaS Dashboard" width={600} height={400} className="w-full h-auto" />
            </div>
          </div>

          {/* Center - Mobile Device (always visible, scales on small screens) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-72 z-20">
            <div className="mx-auto w-full">
              <div className="bg-[color:var(--color-popover)] rounded-[2rem] shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
                <div className="bg-[color:var(--color-card)] h-6 flex items-center justify-center">
                  <div className="w-16 h-1 bg-[color:var(--color-border)] rounded-full"></div>
                </div>
                <Image src="/sanjisir.svg" alt="Mobile App" width={300} height={600} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Right - Browser Window (visible on lg+) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/4 z-10 px-4">
            <div className="bg-[color:var(--color-card)] rounded-lg shadow-2xl overflow-hidden border-4 border-[color:var(--color-border)]">
              <div className="bg-[color:var(--color-popover)] h-6 flex items-center px-3 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <Image src="/spices.svg" alt="Portfolio Site" width={600} height={400} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
