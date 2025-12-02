import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { LexiataBanner } from "@/components/lexiata-banner"
import WhoWeAre from "@/components/who-we-are"
import { PortfolioSection } from "@/components/portfolio-section"
import { GraphicDesignPortfolio } from "@/components/graphic-design-portfolio"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LexiataBanner />
        <WhoWeAre />
        <ClientsSection />
        <PortfolioSection />
        <GraphicDesignPortfolio />
        <ContactCTA />
      </main>
    </div>
  )
}
