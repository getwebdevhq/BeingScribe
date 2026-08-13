'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WHATSAPP_LINK, PORTFOLIO_DRIVE_LINK } from '@/lib/utils';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const projects = [
    {
      id: 'static-posts',
      num: '01',
      title: 'Static Posts',
      category: 'Single-Frame Visuals',
      tag: 'Static',
      description: 'Single-frame image-based content engineered to establish brand identity, visual consistency, and strong foundation.',
      img: '/images/portfolio-static-posts.webp',
      featured: true,
    },
    {
      id: 'festive-posts',
      num: '02',
      title: 'Festive Posts',
      category: 'Cultural & Holiday Marketing',
      tag: 'Festive',
      description: 'Strategic holiday & festive content built to connect authentically with your audience during cultural milestones.',
      img: '/images/portfolio-festive-posts.webp',
      featured: false,
    },
    {
      id: 'campaigns',
      num: '03',
      title: 'Targeted Campaigns',
      category: 'Goal-Oriented Campaigns',
      tag: 'Campaigns',
      description: 'Purpose-driven campaigns tailored for specific business goals, running over 3 days to 2 weeks for optimal reach.',
      img: '/images/portfolio-campaigns.webp',
      featured: false,
    },
    {
      id: 'seasonal-posts',
      num: '04',
      title: 'Seasonal Posts',
      category: 'Time-Sensitive Marketing',
      tag: 'Seasonal',
      description: 'Proactive seasonal product marketing launched at the right moment—well before the peak season begins.',
      img: '/images/portfolio-seasonal-posts.webp',
      featured: false,
    },
    {
      id: 'carousels',
      num: '05',
      title: 'Instagram Carousels',
      category: 'Multi-Slide Storytelling',
      tag: 'Carousels',
      description: 'High-engagement swipeable carousels designed to increase dwell time, re-watches, and deliver rich value.',
      img: '/images/portfolio-carousels.webp',
      featured: false,
    },
  ];

  const categories = ['All', 'Static', 'Festive', 'Campaigns', 'Seasonal', 'Carousels'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tag === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="portfolio py-28 bg-[#05222b] text-white relative overflow-hidden" id="work" style={{ backgroundColor: '#05222b', color: '#ffffff' }}>
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0a546c]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#fcaea4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" style={{ color: '#fcaea4' }} />
              <span className="text-xs uppercase tracking-[0.25em] font-bold" style={{ color: '#fcaea4' }}>
                Creative Portfolio Showcase
              </span>
            </div>
            <h2 className="section-title text-4xl md:text-6xl font-bold mb-0 tracking-tight" style={{ color: '#ffffff' }}>
              WORK THAT WORKS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-3">
            <p className="text-base md:text-lg max-w-md font-normal leading-relaxed" style={{ color: '#ffffff' }}>
              Creative snapshots of our strategic social media content, campaigns, and visual assets crafted for brand growth.
            </p>
            <a
              href={PORTFOLIO_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs md:text-sm shadow-md transition-all hover:scale-105"
              style={{ backgroundColor: '#fcaea4', color: '#05222b' }}
            >
              View Full Work Portfolio (PDF) <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm"
              style={{
                backgroundColor: activeFilter === cat ? '#fcaea4' : 'rgba(255, 255, 255, 0.15)',
                color: activeFilter === cat ? '#05222b' : '#ffffff',
                border: activeFilter === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.25)',
                transform: activeFilter === cat ? 'scale(1.05)' : 'none',
              }}
            >
              {cat === 'All' ? 'All Work' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => {
            const originalIndex = projects.findIndex(p => p.id === proj.id);
            const isFeatured = idx === 0 && activeFilter === 'All';

            return (
              <div
                key={proj.id}
                onClick={() => setSelectedImageIndex(originalIndex)}
                className={`group relative rounded-[28px] overflow-hidden bg-slate-900/90 border border-white/20 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_56px_-12px_rgba(252,174,164,0.3)] hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden bg-[#03151b] ${
                  isFeatured ? 'h-[360px] sm:h-[460px] md:h-[540px]' : 'h-[300px] sm:h-[380px] md:h-[420px]'
                }`}>
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    sizes={isFeatured ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                    className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    priority={isFeatured}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05222b] via-[#05222b]/30 to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />
                  
                  {/* Zoom Badge */}
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between z-10 bg-gradient-to-t from-[#05222b] via-[#05222b]/95 to-transparent pt-12">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold tracking-wider uppercase" style={{ color: '#fcaea4' }}>
                        Project {proj.num}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style={{ backgroundColor: '#0a546c', color: '#ffffff' }}>
                        {proj.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight group-hover:text-[#fcaea4] transition-colors" style={{ color: '#ffffff' }}>
                      {proj.title}
                    </h3>
                    <p className="text-xs md:text-sm font-normal leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex-shrink-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-md transition-all" style={{ backgroundColor: '#fcaea4', color: '#05222b' }}>
                      Expand Snapshot <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#fcaea4] hover:text-[#05222b] text-white transition-all border border-white/20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#fcaea4] hover:text-[#05222b] text-white transition-all border border-white/20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image
                src={projects[selectedImageIndex].img}
                alt={projects[selectedImageIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest block uppercase mb-1" style={{ color: '#fcaea4' }}>
                {projects[selectedImageIndex].category} • Slide {selectedImageIndex + 1} of {projects.length}
              </span>
              <h3 className="text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>
                {projects[selectedImageIndex].title}
              </h3>
              <p className="text-sm font-light" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {projects[selectedImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
