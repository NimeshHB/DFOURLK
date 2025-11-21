export function LexiataBanner() {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-[#071019] via-[#061217] to-[#071019] text-white rounded-xl my-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">our service</h3>
            <p className="text-gray-300 mb-4">We craft brand identities, web experiences and motion that stand out.</p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <div className="p-3 bg-white/5 rounded">UI/UX Design</div>
              <div className="p-3 bg-white/5 rounded">Graphic Design</div>
              <div className="p-3 bg-white/5 rounded">Brand Strategy</div>
              <div className="p-3 bg-white/5 rounded">Motion</div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-end">
            <div className="bg-gradient-to-br from-[#0b1b14] to-[#063024] p-4 rounded-lg shadow-lg">
              <div className="text-sm text-gray-200">Interested?</div>
              <a href="#contact" className="mt-2 inline-block bg-[#00DF82] text-black font-semibold px-4 py-2 rounded">
                Let's talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
