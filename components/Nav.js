'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu on Escape key press or window resize above tablet breakpoint
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="logo brand-logo-img" onClick={closeMenu}>
            <Image
              src="/images/logo.webp"
              alt="Being Scribe Logo"
              width={67}
              height={38}
              className="logo-img"
              priority
            />
          </a>

          <div className="nav-links desktop-nav">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-black magnetic desktop-btn">
              Book A Call
            </a>
            <button
              className={`hamburger ${isOpen ? 'active' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
      >
        <a href="#work" className="mobile-link" onClick={closeMenu}>
          Work
        </a>
        <a href="#services" className="mobile-link" onClick={closeMenu}>
          Services
        </a>
        <a href="#about" className="mobile-link" onClick={closeMenu}>
          About
        </a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>
          Contact
        </a>
        <a href="#contact" className="btn btn-pink" onClick={closeMenu}>
          Book A Call
        </a>
      </div>
    </>
  );
}

