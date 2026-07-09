import Image from 'next/image';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-container">
        <div className="services-split">
          
          {/* Left Side: Arched Muse Portrait */}
          <div className="services-visual-arch reveal">
            <Image
              src="/images/muse_portrait.webp"
              alt="BeingScribe Services Muse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right Side: List of Services */}
          <div className="services-list-container reveal delay-2">
            <div>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 40 }}>
                We focus on the things that actually shape a brand&rsquo;s presence online. No fluff, just results.
              </p>
            </div>

            <div className="service-row-item">
              <h3>
                <span>01. Social Media Management</span>
                <span className="highlight-pink">↗</span>
              </h3>
              <p>Strategy, content creation, scheduling, publishing, community management, and monthly performance optimization.</p>
              <div className="service-submeta">Instagram • Facebook • LinkedIn • Threads</div>
            </div>

            <div className="service-row-item">
              <h3>
                <span>02. Content Creation</span>
                <span className="highlight-pink">↗</span>
              </h3>
              <p>High-end photography, cinematic video reels, custom graphics, and creative campaigns designed to scale organic reach.</p>
              <div className="service-submeta">Reels • Photos • Graphics • Short-form Video</div>
            </div>

            <div className="service-row-item">
              <h3>
                <span>03. Website Development</span>
                <span className="highlight-pink">↗</span>
              </h3>
              <p>Fast, responsive, and conversion-focused websites designed to showcase your unique brand identity and drive leads.</p>
              <div className="service-submeta">Web Design • Next.js • React • Landing Pages</div>
            </div>

            <div className="service-row-item">
              <h3>
                <span>04. Branding &amp; Creative Assets</span>
                <span className="highlight-pink">↗</span>
              </h3>
              <p>Flyers, posters, brand identity guidelines, and visual asset packages to keep your business consistent across all touchpoints.</p>
              <div className="service-submeta">Brand Book • Vector Graphics • Business Collateral</div>
            </div>

            <div className="service-row-item">
              <h3>
                <span>05. Copywriting &amp; Content Strategy</span>
                <span className="highlight-pink">↗</span>
              </h3>
              <p>SEO copywriting, blogs, newsletters, and captions that translate your vision into a voice that sells.</p>
              <div className="service-submeta">Content Calendars • Blog Strategy • Captions</div>
            </div>

            <div style={{ marginTop: 20 }}>
              <a href="#contact" className="btn btn-pink magnetic">Get a Content Plan ↗</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
