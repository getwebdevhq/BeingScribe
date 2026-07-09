import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-elements">
        <div className="blob blob-pink"></div>
        <div className="blob blob-lime"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content reveal">
          <div className="hero-kicker">SOCIAL-FIRST CREATIVE STUDIO</div>
          <h1 className="hero-title">
            <span>we make brands</span>
            <span>impossible <span className="highlight-pink">to ignore.</span></span>
          </h1>

          <p className="hero-subline">
            Content, strategy, websites &amp; branding.
            We build digital presences that capture attention and convert it into real business growth.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-black btn-lg magnetic">View Our Work</a>
            <a href="#contact" className="btn btn-outline btn-lg magnetic">Get In Touch</a>
          </div>
        </div>

        <div className="hero-visuals reveal delay-2">
          <div className="portrait-container" style={{ position: 'relative' }}>
            <Image
              src="/images/muse_working.webp"
              alt="BeingScribe Muse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-portrait"
              priority
            />
          </div>
          
          <div className="floating-card social-card-1 parallax" data-speed="0.08">
            <span className="icon">✨</span> +145% Engagement
          </div>
          
          <div className="floating-card social-card-2 parallax" data-speed="-0.06">
            <Image
              src="/images/logo.webp"
              alt="BeingScribe Logo Icon"
              width={35}
              height={20}
              style={{ height: 20, width: 'auto' }}
            />
            <span>Behind the Scroll</span>
          </div>

          {/* Curved decorative line SVG */}
          <svg
            className="decorative-line line-hero parallax"
            data-speed="0.04"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10,190 Q90,10 190,190" stroke="#fcaea4" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
