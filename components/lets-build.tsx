export function LetsBuild() {
  return (
    <section className="py-16 bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Let’s build something great</h2>
        <p className="text-gray-300 max-w-prose mx-auto mb-8">Have an idea or a project brief? We turn product thinking into polished experiences — fast. Tell us about your goals and we’ll propose a focused plan.</p>

        <div className="flex items-center justify-center gap-4">
          <a href="/contact" className="inline-flex items-center gap-3 bg-[color:var(--mint-green)] text-black font-semibold px-6 py-3 rounded-md shadow-lg">
            Start a project
          </a>

          <a href="#work" className="inline-block text-[color:var(--color-foreground)] border border-[color:var(--color-border)] px-5 py-3 rounded-md font-bold">
            View work
          </a>
        </div>
      </div>
    </section>
  )
}
