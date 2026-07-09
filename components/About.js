import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about" style={{ padding: 'var(--section-py) 0' }}>
      <div className="section-container split-container reverse">
        {/* Left: Arched Portrait of the Muse */}
        <div className="split-visual reveal">
          <Image
            src="/images/muse_portrait.webp"
            alt="BeingScribe Creator Muse"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right: Copy & Brand Pillars */}
        <div className="split-content about-text reveal delay-2">
          <div className="about-kicker">Not another agency.</div>
          <h2 className="huge-heading">A creative growth partner.</h2>
          <p className="lead-copy">Because your brand deserves more than just random posting.</p>
          
          <p className="about-p">
            Most brands don&rsquo;t need twenty different marketing services. <strong>They need clarity.</strong> We focus on building authentic social-first strategies that tell your story, engage your audience, and build long-term trust.
          </p>

          <div className="brand-pillars-grid" style={{ width: '100%', marginTop: 24, marginBottom: 32 }}>
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <span className="pillar-text">Content that gets remembered</span>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <span className="pillar-text">Social media that feels human</span>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <span className="pillar-text">Websites that actually convert</span>
            </div>
          </div>

          <a href="#services" className="btn btn-black magnetic">
            Explore Services ↗
          </a>
        </div>
      </div>
    </section>
  );
}
