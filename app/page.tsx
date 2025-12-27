import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AchievementSection } from "@/components/achievement-section"
import { ClientsSection } from "@/components/clients-section"
import { LexiataBanner } from "@/components/lexiata-banner"
import { MarqueeBanner } from "@/components/marquee-banner"
import WhoWeAre from "@/components/who-we-are"
import { PortfolioSection } from "@/components/portfolio-section"
import { GraphicDesignPortfolio } from "@/components/graphic-design-portfolio"
import { ContactCTA } from "@/components/contact-cta"
import { MobileMoodNav } from "@/components/mobile-mood-nav"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <MobileMoodNav />
      <main>
        <HeroSection />
        <AchievementSection />
        <LexiataBanner />
        <MarqueeBanner />
        <WhoWeAre />
        <ClientsSection />
        <PortfolioSection />
        <GraphicDesignPortfolio />
        <ContactCTA />
      </main>
    </div>
  )
}
