/* ═══════════════════════════════════════════════════════════════
   BeingScribe — Social-First Creative Studio
   Interactions: Parallax, Magnetic, Scroll Reveal, Mobile Menu
   Apple-inspired: purposeful, smooth, responsive-aware
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── Feature detection ─────────────────────────────────────
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Smooth Scroll for Anchor Links ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });

    // ── Magnetic Buttons (desktop only) ───────────────────────
    if (!isTouchDevice && !prefersReducedMotion) {
        const magneticElements = document.querySelectorAll('.magnetic');

        magneticElements.forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
                el.style.transform = 'translate(0px, 0px)';
            });

            el.addEventListener('mouseenter', () => {
                el.style.transition = 'none';
            });
        });
    }

    // ── Parallax Scrolling (desktop only, reduced motion aware)
    if (!isTouchDevice && !prefersReducedMotion) {
        const parallaxElements = document.querySelectorAll('.parallax');
        let ticking = false;

        window.addEventListener('scroll', () => {
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
        }, { passive: true });
    }

    // ── Scroll Reveal Animations ──────────────────────────────
    if (!prefersReducedMotion) {
        const elementsToReveal = document.querySelectorAll(
            '.service-card, .project-card, .stat-item, .pin-card, .value-card, .about-text, .about-visual, .portfolio-header, .footer-top, .newsletter-card'
        );

        elementsToReveal.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${(index % 4) * 0.08}s, transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${(index % 4) * 0.08}s`;
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        });

        elementsToReveal.forEach(el => revealObserver.observe(el));
    }

    // ── Mobile Menu Toggle ────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-menu .btn');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Navigation — Apple-style frosted glass on scroll ──────
    const nav = document.querySelector('.nav');
    let lastScrollY = 0;

    const handleNavScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // Run once on load
});
