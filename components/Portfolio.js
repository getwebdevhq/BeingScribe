export default function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="section-container">
        <div className="portfolio-header reveal">
          <h2 className="section-title">WORK THAT WORKS</h2>
          <p className="section-subtitle">A curated look at brands we&rsquo;ve helped elevate.</p>
        </div>

        <div className="portfolio-showcase">
          <div className="project-card format-large reveal">
            <div className="project-image">
              <img src="/images/oat-atelier.png" alt="Oat Atelier Social Media Campaign" className="portfolio-img" />
            </div>
            <div className="project-info">
              <span className="project-number">01</span>
              <div>
                <h3>Oat Atelier</h3>
                <p>Social Strategy &amp; Content Creation</p>
              </div>
            </div>
          </div>

          <div className="project-row">
            <div className="project-card format-tall reveal">
              <div className="project-image">
                <img src="/images/lumiere-skin.png" alt="Lumière Skin Branding" className="portfolio-img" />
              </div>
              <div className="project-info">
                <span className="project-number">02</span>
                <div>
                  <h3>Lumière Skin</h3>
                  <p>Brand Identity &amp; Socials</p>
                </div>
              </div>
            </div>

            <div className="project-card format-square reveal delay-1" style={{ marginTop: 100 }}>
              <div className="project-image">
                <img src="/images/studio-k.png" alt="Studio K Website Design" className="portfolio-img" />
              </div>
              <div className="project-info">
                <span className="project-number">03</span>
                <div>
                  <h3>Studio K</h3>
                  <p>Web Design &amp; Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
