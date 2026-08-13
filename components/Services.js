import Image from 'next/image';
import { WHATSAPP_LINK } from '@/lib/utils';

const TINTS = [
  { bg: 'bg-[#fcaea4]/[0.09]', border: 'border-[#fcaea4]/25', hoverBorder: 'hover:border-[#fcaea4]/60', chip: 'bg-[#fcaea4]/15 text-[#fcaea4] border-[#fcaea4]/25', glow: 'hover:shadow-[0_28px_56px_-16px_rgba(252,174,164,0.35)]' },
  { bg: 'bg-[#8fd9c4]/[0.09]', border: 'border-[#8fd9c4]/25', hoverBorder: 'hover:border-[#8fd9c4]/60', chip: 'bg-[#8fd9c4]/15 text-[#8fd9c4] border-[#8fd9c4]/25', glow: 'hover:shadow-[0_28px_56px_-16px_rgba(143,217,196,0.35)]' },
  { bg: 'bg-[#c3b8f0]/[0.09]', border: 'border-[#c3b8f0]/25', hoverBorder: 'hover:border-[#c3b8f0]/60', chip: 'bg-[#c3b8f0]/15 text-[#c3b8f0] border-[#c3b8f0]/25', glow: 'hover:shadow-[0_28px_56px_-16px_rgba(195,184,240,0.35)]' },
  { bg: 'bg-[#f7c893]/[0.09]', border: 'border-[#f7c893]/25', hoverBorder: 'hover:border-[#f7c893]/60', chip: 'bg-[#f7c893]/15 text-[#f7c893] border-[#f7c893]/25', glow: 'hover:shadow-[0_28px_56px_-16px_rgba(247,200,147,0.35)]' },
];

export default function Services() {
  const servicesList = [
    {
      num: '01',
      title: 'Social Media Management',
      desc: 'Strategy, content creation, scheduling, publishing, community management, and monthly performance optimization.',
      tags: ['Instagram', 'Facebook', 'LinkedIn', 'Threads'],
      featured: true,
    },
    {
      num: '02',
      title: 'Content Creation',
      desc: 'High-end photography, cinematic video reels, custom graphics, and creative campaigns designed to scale organic reach.',
      tags: ['Reels', 'Photos', 'Graphics', 'Short-form Video'],
      featured: false,
    },
    {
      num: '03',
      title: 'Website Development',
      desc: 'Fast, responsive, and conversion-focused websites designed to showcase your unique brand identity and drive leads.',
      tags: ['Web Design', 'Next.js', 'React', 'Landing Pages'],
      featured: false,
    },
    {
      num: '04',
      title: 'Branding & Creative Assets',
      desc: 'Flyers, posters, brand identity guidelines, and visual asset packages to keep your business consistent across all touchpoints.',
      tags: ['Brand Book', 'Vector Graphics', 'Collateral'],
      featured: false,
    },
    {
      num: '05',
      title: 'Copywriting & Strategy',
      desc: 'SEO copywriting, blogs, newsletters, and captions that translate your vision into a voice that sells.',
      tags: ['Content Calendars', 'Blog Strategy', 'Captions'],
      featured: false,
    },
  ];

  return (
    <section className="services py-24 bg-[#0a546c] text-white relative overflow-hidden" id="services">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mb-16 text-center md:text-left reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-[#fcaea4] font-semibold mb-3 block">What We Deliver</span>
          <h2 className="section-title text-white mb-4">Our Core Services</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicesList.map((service, idx) => {
            const tint = TINTS[idx % TINTS.length];
            return (
              <div
                key={service.num}
                className={`reveal delay-${(idx % 4) + 1} group relative p-8 rounded-[28px] ${tint.bg} backdrop-blur-xl border ${tint.border} ${tint.hoverBorder} transition-all duration-500 hover:-translate-y-2 ${tint.glow} flex flex-col justify-between ${
                  service.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${tint.chip}`}>
                      {service.num}
                    </span>
                    <span className="text-white/30 group-hover:text-[#fcaea4] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-xl">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#fcaea4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8 font-light">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-white/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center reveal">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-pink magnetic text-base px-10 py-4 shadow-xl">
            Get a Custom Content Plan ↗
          </a>
        </div>
      </div>
    </section>
  );
}
