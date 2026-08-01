import Image from 'next/image';

export default function About() {
  return (
    <section className="about py-28 bg-[#f4f8f9]" id="about">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual */}
          <div className="lg:col-span-5 reveal">
            <div className="relative h-[480px] md:h-[580px] w-full rounded-[32px] overflow-hidden shadow-[0_24px_60px_-16px_rgba(10,84,108,0.2)] border border-white">
              <Image
                src="/images/muse_portrait.webp"
                alt="BeingScribe Creator Muse"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 reveal delay-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#0a546c] font-semibold mb-3 block">
              Not Another Agency
            </span>
            <h2 className="huge-heading text-4xl md:text-5xl font-bold mb-4 text-[#05222b]">
              A Creative Growth Partner.
            </h2>
            <p className="lead-copy text-lg text-[#0a546c] font-medium mb-6">
              Because your brand deserves more than just random, disconnected posting.
            </p>
            
            <p className="text-slate-600 text-base font-light leading-relaxed mb-8">
              Most brands don&rsquo;t need twenty different complex marketing packages. <strong>They need strategic clarity.</strong> We focus on building authentic social-first strategies that tell your story, engage your audience, and build long-term brand equity.
            </p>

            {/* Brand Pillars */}
            <div className="space-y-3 mb-10">
              {[
                { num: '01', title: 'Content that gets remembered', bg: 'bg-[#fdeeec]', shadow: 'hover:shadow-[0_16px_32px_-12px_rgba(252,174,164,0.45)]' },
                { num: '02', title: 'Social media that feels human', bg: 'bg-[#e6f2ef]', shadow: 'hover:shadow-[0_16px_32px_-12px_rgba(10,84,108,0.3)]' },
                { num: '03', title: 'Websites that actually convert', bg: 'bg-[#eeecfb]', shadow: 'hover:shadow-[0_16px_32px_-12px_rgba(195,184,240,0.45)]' },
              ].map((pillar) => (
                <div
                  key={pillar.num}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${pillar.bg} border border-white shadow-[0_2px_10px_-4px_rgba(5,34,43,0.06)] ${pillar.shadow} hover:-translate-y-1 transition-all duration-400`}
                >
                  <span className="font-mono text-sm font-bold text-[#0a546c] bg-white/70 px-3 py-1 rounded-full shadow-sm">
                    {pillar.num}
                  </span>
                  <span className="text-sm font-semibold text-[#05222b]">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn btn-black">
              Explore Services ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
