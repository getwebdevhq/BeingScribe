import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="logo brand-logo-img">
          <Image src="/images/logo.webp" alt="Being Scribe Logo" width={67} height={38} className="logo-img" priority />
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
          <button className="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu">
        <a href="#work" className="mobile-link">Work</a>
        <a href="#services" className="mobile-link">Services</a>
        <a href="#about" className="mobile-link">About</a>
        <a href="#contact" className="mobile-link">Contact</a>
        <a href="#contact" className="btn btn-pink">Book A Call</a>
      </div>
    </nav>
  );
}
