export default function Tips() {
  return (
    <section className="blog-preview" id="tips">
      <div className="section-container">
        <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 50 }}>
          THINGS WE WISH MORE BRANDS KNEW
        </h2>

        <div className="tips-grid">
          <div className="pin-card card-brand-dark reveal">
            <div className="pin-content">
              <span className="tip-number">01 . Strategy</span>
              <h3>Going viral is not a strategy.</h3>
              <p className="tip-desc">Consistency builds brands; virality is a bonus.</p>
            </div>
          </div>

          <div className="pin-card card-brand-light reveal delay-1">
            <div className="pin-content">
              <span className="tip-number">02 . Growth</span>
              <h3>More posts don&rsquo;t always mean more growth.</h3>
              <p className="tip-desc">The &lsquo;right content&rsquo; beats &lsquo;more content&rsquo;.</p>
            </div>
          </div>

          <div className="pin-card card-brand-pink reveal delay-2">
            <div className="pin-content">
              <span className="tip-number">03 . Website</span>
              <h3>A website isn&rsquo;t a brochure.</h3>
              <p className="tip-desc">It should work as your best salesperson, 24/7.</p>
            </div>
          </div>

          <div className="pin-card card-brand-light reveal delay-3">
            <div className="pin-content">
              <span className="tip-number">04 . Branding</span>
              <h3>Branding is more than a logo.</h3>
              <p className="tip-desc">It&rsquo;s how people remember, trust, and choose you.</p>
            </div>
          </div>

          <div className="pin-card card-brand-dark reveal delay-4">
            <div className="pin-content">
              <span className="tip-number">05 . Content</span>
              <h3>Great content doesn&rsquo;t just look good.</h3>
              <p className="tip-desc">It should inform, engage, and convert.</p>
            </div>
          </div>
        </div>

        <div className="tips-actions reveal">
          <a href="#contact" className="btn btn-outline magnetic">Growth Strategy ↗</a>
          <a href="#work" className="btn btn-outline magnetic">Featured Projects ↗</a>
          <a href="#contact" className="btn btn-outline magnetic">Book A Consultation ↗</a>
        </div>
      </div>
    </section>
  );
}
