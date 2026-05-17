export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#2d2a26] font-sans">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-[#f7f3ec]/90 backdrop-blur-md border-b border-[#e5dfd3] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-serif tracking-wide font-semibold">
              T R Trading Intl Co.
            </h1>
            <p className="text-xs text-[#7b7468] tracking-[0.2em] uppercase">
              Established 1995
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase text-[#5b564d]">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#services" className="hover:text-black transition">Services</a>
            <a href="#story" className="hover:text-black transition">Story</a>
            <a href="#contact" className="hover:text-black transition">Enquiry</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a8175] mb-6">
              Raw Jute & Jute Goods Exporters
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-serif mb-8">
              Global Jute Export Since 1995
            </h2>

            <p className="text-lg text-[#5d584f] leading-relaxed max-w-xl mb-10">
              T R Trading International Co. supplies premium raw jute and jute goods to international buyers with complete manufacturing coordination and export logistics support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#2d2a26] text-white rounded-full hover:opacity-90 transition"
              >
                Request a Quote
              </a>

              <a
                href="#about"
                className="px-8 py-4 border border-[#2d2a26] rounded-full hover:bg-[#2d2a26] hover:text-white transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop"
                alt="Jute export"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#8a8175] mb-4">
              About Us
            </p>

            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Trusted Export Partner for Global Buyers
            </h3>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-[#5d584f] mb-6">
              Established in 1995, T R Trading International Co. is an export-oriented trading company specializing in raw jute and jute goods.
            </p>

            <p className="text-lg leading-relaxed text-[#5d584f]">
              The company independently contracts with foreign buyers and local manufacturers, managing sourcing, manufacturing coordination, documentation, logistics, and shipment support up to final export delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6 bg-[#f3eee5]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-[#8a8175] mb-4">
              What We Do
            </p>

            <h3 className="text-4xl md:text-5xl font-serif">
              Our Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Raw Jute Export',
                text: 'Supply and export of premium quality raw jute for international markets.',
              },
              {
                title: 'Jute Goods',
                text: 'Export of customized jute products according to buyer requirements.',
              },
              {
                title: 'Manufacturing Coordination',
                text: 'Professional coordination with trusted local manufacturers and mills.',
              },
              {
                title: 'Logistics Support',
                text: 'Complete export handling including documentation and shipment execution.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#d9cfbf] mb-6"></div>

                <h4 className="text-2xl font-serif mb-4">
                  {service.title}
                </h4>

                <p className="text-[#5d584f] leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-[#8a8175] mb-4">
            Our Journey
          </p>

          <h3 className="text-4xl md:text-5xl font-serif mb-20">
            Over Three Decades of Experience
          </h3>

          <div className="space-y-14">
            {[
              {
                year: '1995',
                text: 'T R Trading International Co. was established with a focus on raw jute trading and export operations.',
              },
              {
                year: '2000s',
                text: 'Expanded international export activities and developed strong business relationships with overseas buyers.',
              },
              {
                year: 'Today',
                text: 'Continuing to supply quality jute products with trusted logistics and manufacturing coordination support.',
              },
            ].map((item, index) => (
              <div key={index} className="grid md:grid-cols-[140px_1fr] gap-8 text-left items-start">
                <div className="text-3xl font-serif text-[#8a8175]">
                  {item.year}
                </div>

                <div className="text-lg text-[#5d584f] leading-relaxed border-l border-[#ddd4c5] pl-8">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-[#2d2a26] text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#cfc5b6] mb-4">
              Enquiry
            </p>

            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Request a Quote
            </h3>

            <p className="text-lg text-[#d9d1c6] leading-relaxed max-w-lg">
              Contact us regarding raw jute supply, jute goods export, manufacturing coordination, or shipment enquiries.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Company"
                className="bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition"
              />

              <input
                type="text"
                placeholder="Country"
                className="bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition"
              />
            </div>

            <input
              type="text"
              placeholder="Product Required"
              className="w-full bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-transparent border border-[#5b564d] rounded-2xl px-5 py-4 outline-none focus:border-white transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#2d2a26] rounded-full hover:opacity-90 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f1d1a] text-[#c7beb0] px-6 py-10 border-t border-[#3b372f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="text-xl font-serif text-white mb-2">
              T R Trading Intl Co.
            </h4>
            <p className="text-sm tracking-[0.2em] uppercase">
              Established 1995
            </p>
          </div>

          <div className="text-sm leading-8">
            <p>Raw Jute & Jute Goods Export</p>
            <p>Main Export Market: China</p>
            <p>Email: info@trtradingintl.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
