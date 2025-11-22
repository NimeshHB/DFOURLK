import React from "react"

const CONTACT = {
  facebook: "https://web.facebook.com/profile.php?id=61583791092081",
  instagram: "https://www.instagram.com/yourhandle",
  email: "hello@example.com",
  whatsapp: "+1234567890",
  phone: "+1234567890",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Contact Us</h1>

        <p className="text-gray-300 max-w-prose mb-8">
          We’d love to hear from you. Choose a channel below to get in touch — or fill in your preferred contact method and we’ll reply quickly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            <div className="font-semibold text-white">Facebook</div>
            <div className="text-sm text-gray-300 mt-1">Open our Facebook profile</div>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            <div className="font-semibold text-white">Instagram</div>
            <div className="text-sm text-gray-300 mt-1">View our Instagram</div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group p-4 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            <div className="font-semibold text-white">Email</div>
            <div className="text-sm text-gray-300 mt-1">{CONTACT.email}</div>
          </a>

          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            <div className="font-semibold text-white">WhatsApp</div>
            <div className="text-sm text-gray-300 mt-1">Chat on WhatsApp</div>
          </a>

          <a
            href={`tel:${CONTACT.phone}`}
            className="group p-4 rounded-lg bg-white/3 border border-white/6 hover:bg-white/5 transition"
          >
            <div className="font-semibold text-white">Call</div>
            <div className="text-sm text-gray-300 mt-1">{CONTACT.phone}</div>
          </a>
        </div>

        <p className="text-gray-400 text-xs mt-8 max-w-prose">
          Tip: Replace the placeholder handles and numbers in this file with your real contact details. If you want, I can update them for you.
        </p>
      </div>
    </main>
  )
}
