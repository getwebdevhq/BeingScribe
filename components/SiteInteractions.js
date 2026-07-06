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
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
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

    // ── Parallax Scrolling (desktop only, reduced motion aware)
    if (!isTouchDevice && !prefersReducedMotion) {
      const parallaxElements = document.querySelectorAll('.parallax');
      let ticking = false;

      const handleParallaxScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrolled = window.scrollY;

            parallaxElements.forEach((el) => {
              const speed = parseFloat(el.dataset.speed) || 0.1;
              const rect = el.getBoundingClientRect();

              if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.transform = `translateY(${-(scrolled * speed)}px)`;
              }
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
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elementsToReveal.forEach((el) => revealObserver.observe(el));
    }
    cleanupFns.push(() => revealObserver && revealObserver.disconnect());

    // ── Mobile Menu Toggle ────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-menu .btn');

    const handleHamburgerClick = () => {
      const isActive = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = isActive ? 'hidden' : '';
    };

    const handleMobileLinkClick = () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', handleHamburgerClick);
      mobileLinks.forEach((link) => link.addEventListener('click', handleMobileLinkClick));

      cleanupFns.push(() => {
        hamburger.removeEventListener('click', handleHamburgerClick);
        mobileLinks.forEach((link) => link.removeEventListener('click', handleMobileLinkClick));
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
