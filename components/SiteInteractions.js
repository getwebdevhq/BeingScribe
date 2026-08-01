'use client';

import { useEffect } from 'react';

export default function SiteInteractions() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cleanupFns = [];

    // ── Smooth Scroll for Anchor Links ────────────────────────
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navEl = document.querySelector('.nav');
        const navHeight = navEl ? navEl.offsetHeight + 30 : 90;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
    cleanupFns.push(() => anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick)));

    // ── Magnetic Buttons (desktop only) ───────────────────────
    if (!isTouchDevice && !prefersReducedMotion) {
      const magneticElements = document.querySelectorAll('.magnetic');
      const handlers = [];

      magneticElements.forEach((el) => {
        const onMouseMove = (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        };
        const onMouseLeave = () => {
          el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
          el.style.transform = 'translate(0px, 0px)';
        };
        const onMouseEnter = () => {
          el.style.transition = 'none';
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('mouseenter', onMouseEnter);
        handlers.push({ el, onMouseMove, onMouseLeave, onMouseEnter });
      });

      cleanupFns.push(() =>
        handlers.forEach(({ el, onMouseMove, onMouseLeave, onMouseEnter }) => {
          el.removeEventListener('mousemove', onMouseMove);
          el.removeEventListener('mouseleave', onMouseLeave);
          el.removeEventListener('mouseenter', onMouseEnter);
        })
      );
    }

    // ── Parallax Scrolling (desktop only, reduced motion aware, reflow optimized)
    if (!isTouchDevice && !prefersReducedMotion) {
      const parallaxElements = document.querySelectorAll('.parallax');
      const visibleParallaxElements = new Set();
      let ticking = false;

      const parallaxObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleParallaxElements.add(entry.target);
            } else {
              visibleParallaxElements.delete(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '100px 0px 100px 0px',
          threshold: 0,
        }
      );

      parallaxElements.forEach((el) => parallaxObserver.observe(el));
      cleanupFns.push(() => parallaxObserver.disconnect());

      const handleParallaxScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.scrollY;

            visibleParallaxElements.forEach((el) => {
              const speed = parseFloat(el.dataset.speed) || 0.1;
              el.style.transform = `translateY(${-(scrolled * speed)}px)`;
            });

            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleParallaxScroll, { passive: true });
      cleanupFns.push(() => window.removeEventListener('scroll', handleParallaxScroll));
    }

    // ── Scroll Reveal Animations ──────────────────────────────
    let revealObserver;
    if (!prefersReducedMotion) {
      const elementsToReveal = document.querySelectorAll('.reveal');

      const revealCheck = () => {
        elementsToReveal.forEach((el) => {
          if (el.classList.contains('is-visible')) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
            el.classList.add('is-visible');
          }
        });
      };

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '150px 0px 150px 0px',
        }
      );

      elementsToReveal.forEach((el) => {
        revealObserver.observe(el);
      });

      // Immediate check and delayed checks for hydration
      revealCheck();
      const t1 = setTimeout(revealCheck, 100);
      const t2 = setTimeout(revealCheck, 400);

      window.addEventListener('scroll', revealCheck, { passive: true });

      cleanupFns.push(() => {
        clearTimeout(t1);
        clearTimeout(t2);
        window.removeEventListener('scroll', revealCheck);
        revealObserver && revealObserver.disconnect();
      });
    }

    // ── Navigation — solid fill on scroll ──────────────────────
    const nav = document.querySelector('.nav');

    const handleNavScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // Run once on mount
    cleanupFns.push(() => window.removeEventListener('scroll', handleNavScroll));

    return () => cleanupFns.forEach((fn) => fn());
  }, []);

  return null;
}
