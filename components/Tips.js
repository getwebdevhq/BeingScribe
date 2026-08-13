import { WHATSAPP_LINK } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export default function Tips() {
  const tipsList = [
    {
      num: '01',
      tag: 'Strategy',
      title: 'Going viral is not a strategy.',
      desc: 'Consistency builds brands; virality is just a welcome bonus.',
    },
    {
      num: '02',
      tag: 'Growth',
      title: 'More posts don’t mean more growth.',
      desc: 'The right targeted content always beats sheer volume.',
    },
    {
      num: '03',
      tag: 'Website',
      title: 'A website isn’t a digital brochure.',
      desc: 'It should function as your best 24/7 salesperson.',
    },
    {
      num: '04',
      tag: 'Branding',
      title: 'Branding is more than a logo.',
      desc: 'It is how audiences remember, trust, and choose you.',
    },
    {
      num: '05',
      tag: 'Content',
      title: 'Great content must perform.',
      desc: 'It shouldn’t just look pretty — it must inform and convert.',
    },
  ];

  return (
    <section className="blog-preview py-24 bg-white border-y border-slate-200/60" id="tips">
      <div className="section-container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[#0a546c] font-bold mb-3 block">
            Core Principles & Insights
          </span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-[#05222b] mb-4">
            THINGS WE WISH MORE BRANDS KNEW
          </h2>
          <p className="text-slate-600 font-normal text-base max-w-xl mx-auto">
            Strategic principles we rely on to craft high-converting content and elevate brands.
          </p>
        </div>

        {/* Bulleted Insights List */}
        <div className="bg-[#f4f8f9] rounded-[32px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-[0_8px_30px_-10px_rgba(5,34,43,0.06)] mb-12 reveal">
          <ul className="space-y-6 sm:space-y-8">
            {tipsList.map((tip) => (
              <li
                key={tip.num}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-200/80 last:border-b-0 last:pb-0 group hover:translate-x-1 transition-transform duration-300"
              >
                {/* Bullet Icon / Number */}
                <div className="flex items-center gap-3 sm:gap-0 sm:flex-col flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#05222b] text-[#fcaea4] flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-[#0a546c] transition-colors">
                    {tip.num}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#05222b] group-hover:text-[#0a546c] transition-colors">
                      {tip.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0a546c]/10 text-[#0a546c]">
                      {tip.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Single CTA Button */}
        <div className="text-center reveal">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-black inline-flex items-center gap-2 text-base px-8 py-4 shadow-lg hover:shadow-xl transition-all"
          >
            Book a Consultation <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
