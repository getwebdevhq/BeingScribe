import { WHATSAPP_LINK } from '@/lib/utils';

export default function Tips() {
  const tipsList = [
    {
      num: '01',
      tag: 'Strategy',
      title: 'Going viral is not a strategy.',
      desc: 'Consistency builds brands; virality is just a welcome bonus.',
      bg: 'bg-[#e6f2ef] text-[#05222b]',
      border: 'border-white',
      glow: 'hover:shadow-[0_24px_48px_-16px_rgba(10,84,108,0.28)]',
    },
    {
      num: '02',
      tag: 'Growth',
      title: 'More posts don’t mean more growth.',
      desc: 'The right targeted content always beats sheer volume.',
      bg: 'bg-white text-[#05222b]',
      border: 'border-slate-100',
      glow: 'hover:shadow-[0_24px_48px_-16px_rgba(5,34,43,0.14)]',
    },
    {
      num: '03',
      tag: 'Website',
      title: 'A website isn’t a digital brochure.',
      desc: 'It should function as your best 24/7 salesperson.',
      bg: 'bg-[#fcaea4] text-[#05222b]',
      border: 'border-white',
      glow: 'hover:shadow-[0_24px_48px_-16px_rgba(252,174,164,0.5)]',
    },
    {
      num: '04',
      tag: 'Branding',
      title: 'Branding is more than a logo.',
      desc: 'It is how audiences remember, trust, and choose you.',
      bg: 'bg-[#eeecfb] text-[#05222b]',
      border: 'border-white',
      glow: 'hover:shadow-[0_24px_48px_-16px_rgba(195,184,240,0.45)]',
    },
    {
      num: '05',
      tag: 'Content',
      title: 'Great content must perform.',
      desc: 'It shouldn’t just look pretty — it must inform and convert.',
      bg: 'bg-[#fdf2e3] text-[#05222b]',
      border: 'border-white',
      glow: 'hover:shadow-[0_24px_48px_-16px_rgba(247,200,147,0.5)]',
    },
  ];

  return (
    <section className="blog-preview py-28 bg-white" id="tips">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0a546c] font-semibold mb-3 block">Insights</span>
          <h2 className="section-title mb-4">THINGS WE WISH MORE BRANDS KNEW</h2>
          <p className="text-slate-500 font-light text-base">Principles we use to build high-converting content and brand strategies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {tipsList.map((tip, idx) => (
            <div
              key={tip.num}
              className={`reveal delay-${(idx % 4) + 1} p-6 rounded-[28px] ${tip.bg} border ${tip.border} shadow-[0_2px_10px_-4px_rgba(5,34,43,0.06)] ${tip.glow} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[320px]`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-60 mb-6 block">
                  {tip.num} • {tip.tag}
                </span>
                <h3 className="text-xl font-bold leading-tight mb-4 font-serif">
                  {tip.title}
                </h3>
              </div>
              <p className="text-xs font-light opacity-80 leading-relaxed pt-4 border-t border-current/10">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 reveal">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-black">Growth Strategy ↗</a>
          <a href="#work" className="btn btn-outline">Featured Projects ↗</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-pink">Book A Consultation ↗</a>
        </div>
      </div>
    </section>
  );
}
