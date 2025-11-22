import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] min-h-screen py-20 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight uppercase tracking-tight text-center">
                <span className="block whitespace-nowrap">Where technology</span>
                <span className="block whitespace-nowrap">meets creativity.</span>
              </h1>
            </div>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--mint-green)] max-w-2xl mx-auto font-medium uppercase tracking-wider mb-6">
            Web Development · UI/UX Design · Branding · Logo
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button className="mint-btn mint-glow mint-focus px-6 py-3 rounded-none font-black uppercase tracking-wider">
              Start Project
            </Button>
            <a href="#work" className="inline-block text-[color:var(--color-foreground)] border border-[color:var(--color-border)] px-4 py-3 uppercase font-bold rounded-none">
              View Work
            </a>
          </div>
        </div>

        {/* Device mockups: mobile-first. big left/right mockups appear at lg+ */}
        <div className="mt-12 relative h-[420px] md:h-[520px]">
          {/* Left - MacBook (visible on lg+) */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1/3 z-10 px-4">
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
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3/5 sm:w-2/5 md:w-1/3 z-20">
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
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 z-10 px-4">
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
