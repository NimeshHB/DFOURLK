import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#00DF82] text-black">
      <div className="container mx-auto text-center">
        <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <Image
            src="/dfour-logo.jpg"
            alt="DFour logo"
            width={96}
            height={96}
            className="object-contain mx-auto"
            priority
          />
        </div>
        <h2 className="text-5xl md:text-8xl font-black mb-4 text-balance uppercase tracking-tighter leading-[0.85]">
          Let's Build
          <br />
          Something Great
        </h2>
        <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto text-balance uppercase tracking-wide">
          Ready to transform your digital presence? We're currently accepting new projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black hover:bg-black/80 text-white rounded-none px-12 py-8 text-xl font-black uppercase tracking-widest shadow-xl">
            Start Your Project
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://web.facebook.com/profile.php?id=61583791092081"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-black text-white font-semibold"
          >
            📘 Facebook
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-black text-white font-semibold"
          >
            📸 Instagram
          </a>

          <a
            href="mailto:hello@dfour.example"
            aria-label="Email"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-black text-white font-semibold"
          >
            ✉️ Email
          </a>

          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-black text-white font-semibold"
          >
            💬 WhatsApp
          </a>

          <a
            href="tel:+94771234567"
            aria-label="Call"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-black text-white font-semibold"
          >
            📞 Call
          </a>
        </div>
      </div>
    </section>
  )
}
