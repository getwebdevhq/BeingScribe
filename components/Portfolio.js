import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      num: '01',
      title: 'Oat Atelier',
      category: 'Social Strategy & Content Creation',
      img: '/images/oat-atelier.webp',
      featured: true,
    },
    {
      num: '02',
      title: 'Lumière Skin',
      category: 'Brand Identity & Socials',
      img: '/images/lumiere-skin.webp',
      featured: false,
    },
    {
      num: '03',
      title: 'Studio K',
      category: 'Web Design & Development',
      img: '/images/studio-k.webp',
      featured: false,
    },
  ];

  return (
    <section className="portfolio py-28 bg-white" id="work">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#0a546c] font-semibold mb-3 block">Selected Portfolio</span>
            <h2 className="section-title mb-0">WORK THAT WORKS</h2>
          </div>
          <p className="text-slate-500 text-lg max-w-md mt-4 md:mt-0 font-light">
            A curated look at brands we&rsquo;ve helped elevate into digital leaders.
          </p>
        </div>

        <div className="space-y-12">
          {/* Main Large Showcase Card */}
          <div className="group relative rounded-[32px] overflow-hidden bg-slate-900 border border-white shadow-[0_4px_24px_-8px_rgba(5,34,43,0.12)] hover:shadow-[0_32px_64px_-16px_rgba(5,34,43,0.35)] hover:-translate-y-2 transition-all duration-500 reveal cursor-pointer">
            <div className="relative h-[480px] md:h-[600px] w-full overflow-hidden">
              <Image
                src={projects[0].img}
                alt={projects[0].title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between z-10">
              <div>
                <span className="text-xs font-mono text-[#fcaea4] font-bold tracking-wider mb-2 block uppercase">
                  Project {projects[0].num}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-[#fcaea4] transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-white/70 text-base md:text-lg font-light">
                  {projects[0].category}
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-all font-medium text-sm">
                  View Case Study <span className="text-xs">↗</span>
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((proj, idx) => (
              <div
                key={proj.num}
                className={`group relative rounded-[28px] overflow-hidden bg-slate-900 border border-white shadow-[0_4px_20px_-6px_rgba(5,34,43,0.1)] hover:shadow-[0_28px_56px_-14px_rgba(5,34,43,0.3)] hover:-translate-y-2 transition-all duration-500 reveal delay-${idx + 1} cursor-pointer`}
              >
                <div className="relative h-[380px] md:h-[450px] w-full overflow-hidden">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-8 flex items-end justify-between z-10">
                  <div>
                    <span className="text-xs font-mono text-[#fcaea4] font-bold tracking-wider mb-1 block uppercase">
                      Project {proj.num}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight group-hover:text-[#fcaea4] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-white/70 text-sm font-light">
                      {proj.category}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-all">
                    ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
