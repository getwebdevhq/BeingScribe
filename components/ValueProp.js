export default function ValueProp() {
  return (
    <section className="dual-blocks" id="why-us">
      <div className="section-container">
        <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          Two Worlds. One Destination.
        </h2>
        
        <div className="dual-grid">
          {/* Business Side */}
          <div className="editorial-card reveal">
            <div className="editorial-image-wrapper">
              <img src="/images/feed_mockup.png" alt="Business social media strategy" />
            </div>
            <h3>Business World</h3>
            <p>
              Social media only works when strategy and creativity align. We translate visual visibility into concrete business results: turning scrolling views into active brand followers, and content into measurable conversion.
            </p>
          </div>

          {/* Creator Side */}
          <div className="editorial-card reveal delay-2">
            <div className="editorial-image-wrapper">
              <img src="/images/muse_working.png" alt="Creative lifestyle content" />
            </div>
            <h3>Creator World</h3>
            <p>
              We craft social-first content that doesn&rsquo;t feel like traditional marketing, but like lifestyle. We tell organic stories that audiences don&rsquo;t just scroll past, but want to follow, save, and emotionally connect with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
