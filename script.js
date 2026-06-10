/* ═══════════════════════════════════════════════════════════════
   BeingScribe — Social-First Creative Studio
   Interactions, Parallax, Magnetic Buttons
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    
    // ── Smooth Scroll for Anchor Links ────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ── Magnetic Buttons ──────────────────────────────────────
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            const position = el.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            // Subtle movement
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseout', () => {
            el.style.transform = 'translate(0px, 0px)';
            // Adding a transition for the snap back
            el.style.transition = 'transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
        });
        
        el.addEventListener('mouseenter', () => {
            // Remove transition when hovering so it follows mouse instantly
            el.style.transition = 'none';
        });
    });

    // ── Parallax Scrolling ────────────────────────────────────
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        parallaxElements.forEach((el) => {
            const speed = el.dataset.speed || 0.1;
            const yPos = -(scrolled * speed);
            
            // Only apply parallax if element is in viewport roughly
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    // ── Scroll Reveal Animations ──────────────────────────────
    // Add reveal class to elements we want to animate in
    const elementsToReveal = document.querySelectorAll(
        '.service-card, .project-card, .stat-bubble, .pin-card, .value-card, .about-text'
    );
    
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)';
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));

    // ── Navigation Background on Scroll ───────────────────────
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(247, 244, 240, 0.9)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.mixBlendMode = 'normal';
            nav.style.color = 'var(--black)';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.mixBlendMode = 'difference';
            nav.style.color = 'var(--white)';
        }
    });
});
