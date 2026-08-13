"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn, WHATSAPP_LINK, PORTFOLIO_DRIVE_LINK } from "@/lib/utils";
import { Calendar, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground, #05222b) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground, #05222b) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
  /* OUTSIDE THE CARD: Theme-aware text (Shadow in Light Mode, Glow in Dark Mode) */
  .text-3d-matte {
      color: var(--text-dark, #05222b);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--text-dark, #05222b) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--text-dark, #05222b) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--text-dark, #05222b) 0%, color-mix(in srgb, var(--text-dark, #05222b) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0); /* Hardware acceleration to prevent WebKit clipping bug */
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--text-dark, #05222b) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--text-dark, #05222b) 10%, transparent));
  }

  /* INSIDE THE CARD: Hardcoded Silver/White for the dark background, deep rich shadows */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting (BeingScribe Deep Teal gradient) */
  .premium-depth-card {
      background: linear-gradient(145deg, #0a546c 0%, #03151b 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.10) 0%, transparent 40%);
      transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Physical Tactile Buttons */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: #FFFFFF;
      color: var(--text-dark, #05222b);
      border: 1px solid rgba(10, 84, 108, 0.12);
      box-shadow: 0 8px 24px -4px rgba(5, 34, 43, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);
  }
  .btn-modern-light:hover {
      background: #F4F8F9;
      transform: translateY(-2px);
      box-shadow: 0 12px 30px -4px rgba(5, 34, 43, 0.14), 0 4px 10px rgba(0, 0, 0, 0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px) scale(0.98);
      box-shadow: 0 2px 8px -2px rgba(5, 34, 43, 0.1);
  }
  .btn-modern-dark {
      background: var(--text-dark, #05222b);
      color: #FFFFFF;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 24px -4px rgba(5, 34, 43, 0.25);
  }
  .btn-modern-dark:hover {
      background: var(--deep-teal, #0a546c);
      transform: translateY(-2px);
      box-shadow: 0 12px 30px -4px rgba(10, 84, 108, 0.35);
  }
  .btn-modern-dark:active {
      transform: translateY(1px) scale(0.98);
      box-shadow: 0 2px 8px -2px rgba(5, 34, 43, 0.2);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({ 
  brandName = "BeingScribe",
  tagline1 = "we make brands",
  tagline2 = "impossible to ignore.",
  cardHeading = "SOCIAL-FIRST CREATIVE STUDIO",
  cardDescription = <>We make brands <span className="text-[#fcaea4] font-semibold">impossible to ignore</span>. BeingScribe builds attention-grabbing social campaigns, visual strategies, next-gen websites, and organic branding that converts.</>,
  metricValue = 145,
  metricLabel = "Engagement Boost %",
  ctaHeading = "Let's make something impossible.",
  ctaDescription = "Collaborate with BeingScribe to build digital presences that capture attention and turn scroll traffic into business growth.",
  className, 
  ...props 
}: CinematicHeroProps) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  // 1. High-Performance Mouse Interaction Logic (Using requestAnimationFrame)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  },[]);

  // 2. Complex Cinematic Scroll Timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(12px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 }) 
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        // Responsive card pullback sizing
        .to(".main-card", { 
          width: isMobile ? "92vw" : "85vw", 
          height: isMobile ? "92vh" : "85vh", 
          borderRadius: isMobile ? "32px" : "40px", 
          ease: "expo.inOut", 
          duration: 1.8 
        }, "pullback") 
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  },[metricValue]); 

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: Tactile CTA Buttons */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book A Call"
            className="btn-modern-light flex items-center justify-center gap-3.5 px-7 py-3.5 rounded-full group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a546c]/40"
          >
            <div className="w-9 h-9 rounded-full bg-[#0a546c]/10 flex items-center justify-center text-[#0a546c] group-hover:bg-[#0a546c] group-hover:text-white transition-colors duration-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-left flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-widest text-[#4b7b8a] uppercase leading-tight">Schedule</span>
              <span className="text-base font-bold text-[#05222b] leading-tight tracking-tight">Book A Call</span>
            </div>
          </a>

          <a
            href={PORTFOLIO_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Our Work"
            className="btn-modern-dark flex items-center justify-center gap-3.5 px-7 py-3.5 rounded-full group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#fcaea4]/40"
          >
            <div className="w-9 h-9 rounded-full bg-[#fcaea4]/15 flex items-center justify-center text-[#fcaea4] group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-colors duration-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-widest text-[#fcaea4] uppercase leading-tight">Portfolio</span>
              <span className="text-base font-bold text-white leading-tight tracking-tight">View Our Work</span>
            </div>
          </a>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID: Flex-col on mobile to force order, Grid on desktop */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            
            {/* 1. TOP (Mobile) / RIGHT (Desktop): BRAND NAME WATERMARK */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full select-none pointer-events-none">
              <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0 opacity-90">
                {brandName}
              </h2>
            </div>

            {/* 2. MIDDLE (Mobile) / CENTER (Desktop): IPHONE MOCKUP */}
            <div className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[420px] lg:h-[600px] flex items-center justify-center z-10" style={{ perspective: "1000px" }}>

              {/* Inner wrapper for safe CSS scaling that doesn't conflict with GSAP */}
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.72] md:scale-85 lg:scale-100">
                
                {/* The iPhone Bezel */}
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                >
                  {/* Physical Hardware Buttons */}
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  {/* Inner Screen Container */}
                  <div className="absolute inset-[7px] bg-gradient-to-b from-[#fdf0ec] via-[#f8f4f0] to-[#e9f4f0] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,0.25)] text-[#05222b] z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    {/* Dynamic Island Notch */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    </div>

                    {/* App Interface */}
                    <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                      <div className="phone-widget flex justify-between items-center mb-7">
                        <div className="flex flex-col text-left">
                          <span className="text-xs text-[#0a546c] uppercase tracking-normal font-bold mb-1 whitespace-nowrap">Live Feed</span>
                          <span className="text-xl font-bold tracking-tight text-[#05222b]">Analytics</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#fcaea4]/30 text-[#0a546c] flex items-center justify-center font-bold text-sm border border-white/60 shadow-[0_4px_12px_rgba(5,34,43,0.12)]">BS</div>
                      </div>

                      <div className="phone-widget relative w-40 h-40 mx-auto flex items-center justify-center mb-7 rounded-full bg-white/80 shadow-[0_12px_28px_-8px_rgba(10,84,108,0.22)] border border-white">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(10,84,108,0.12)" strokeWidth="11" />
                          <circle className="progress-ring" cx="80" cy="80" r="60" fill="none" stroke="#0a546c" strokeWidth="11" />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-4xl font-extrabold tracking-tighter text-[#05222b]">0</span>
                          <span className="text-[11px] text-[#05222b] font-extrabold uppercase tracking-[0.06em] mt-0.5 whitespace-nowrap drop-shadow-[0_1px_3px_rgba(255,255,255,1)]">
                            {metricLabel}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="phone-widget bg-[#fdeeec] border border-white/80 rounded-2xl p-3 flex items-center shadow-[0_8px_20px_-8px_rgba(252,174,164,0.5)]">
                          <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center mr-3 shadow-sm">
                            <Sparkles className="w-4 h-4 text-[#e8837a]" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-xs font-bold text-[#05222b] mb-0.5">Viral Campaign</div>
                            <div className="text-[11px] text-[#0a546c]/70">10M+ Organic Views</div>
                          </div>
                        </div>
                        <div className="phone-widget bg-[#e6f2ef] border border-white/80 rounded-2xl p-3 flex items-center shadow-[0_8px_20px_-8px_rgba(10,84,108,0.25)]">
                          <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center mr-3 shadow-sm">
                            <TrendingUp className="w-4 h-4 text-[#0a546c]" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-xs font-bold text-[#05222b] mb-0.5">Conversion rate</div>
                            <div className="text-[11px] text-[#0a546c]/70">Average +25% sales</div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-[#05222b]/15 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Badges */}
                <div className="floating-badge absolute flex -top-4 lg:-top-6 -left-10 lg:-left-28 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-40">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-[#fcaea4]/20 to-[#fcaea4]/5 flex items-center justify-center border border-[#fcaea4]/30 shadow-inner">
                    <span className="text-base lg:text-xl drop-shadow-lg" aria-hidden="true">🔥</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Viral Growth</p>
                    <p className="text-[#fcaea4]/70 text-[10px] lg:text-xs font-medium">Reaching millions</p>
                  </div>
                </div>

                <div className="floating-badge absolute flex bottom-2 lg:bottom-6 -right-10 lg:-right-28 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 lg:gap-4 z-40">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-teal-500/20 to-teal-900/10 flex items-center justify-center border border-teal-400/30 shadow-inner">
                    <span className="text-base lg:text-lg drop-shadow-lg" aria-hidden="true">📈</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">Brand Strategy</p>
                    <p className="text-teal-200/50 text-[10px] lg:text-xs font-medium">Positioned &amp; Scaling</p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. BOTTOM (Mobile) / LEFT (Desktop): ACCOUNTABILITY TEXT */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full lg:max-w-none px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight">
                {cardHeading}
              </h3>
              {/* HIDDEN ON MOBILE */}
              <p className="hidden md:block text-blue-100/70 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
