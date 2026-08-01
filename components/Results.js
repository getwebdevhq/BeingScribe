const STAT_TINTS = [
  { bg: 'bg-[#fdeeec]', shadow: 'hover:shadow-[0_24px_48px_-16px_rgba(252,174,164,0.4)]' },
  { bg: 'bg-[#e6f2ef]', shadow: 'hover:shadow-[0_24px_48px_-16px_rgba(10,84,108,0.25)]' },
  { bg: 'bg-[#eeecfb]', shadow: 'hover:shadow-[0_24px_48px_-16px_rgba(195,184,240,0.4)]' },
  { bg: 'bg-[#fdf2e3]', shadow: 'hover:shadow-[0_24px_48px_-16px_rgba(247,200,147,0.4)]' },
];

export default function Results() {
  const stats = [
    { num: '2M+', label: 'Views Generated', desc: 'Across Instagram & TikTok campaigns' },
    { num: '100+', label: 'Content Pieces', desc: 'Crafted with intention and precision' },
    { num: '6+', label: 'Years Experience', desc: 'Translating culture into conversion' },
    { num: 'Global', label: 'Brand Partners', desc: 'Collaborating across time zones' },
  ];

  return (
    <section className="results py-20 bg-[#f4f8f9] border-y border-slate-200/60">
      <div className="section-container">
        <div className="text-center mb-12 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0a546c] font-semibold mb-2 block">Track Record</span>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-0">NUMBERS PEOPLE LIKE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const tint = STAT_TINTS[idx % STAT_TINTS.length];
            return (
              <div
                key={stat.label}
                className={`reveal delay-${idx + 1} p-8 rounded-[28px] ${tint.bg} border border-white shadow-[0_4px_16px_-4px_rgba(5,34,43,0.06)] ${tint.shadow} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}
              >
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-black text-[#05222b] tracking-tight block font-serif mb-2">
                    {stat.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0a546c] block">
                    {stat.label}
                  </span>
                </div>
                <p className="text-slate-600 text-xs font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
