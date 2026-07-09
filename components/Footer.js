import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-bg-curves">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
            d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64"
          ></path>
        </svg>
      </div>

      <div className="section-container footer-container">
        <div className="footer-top">
          
          <div className="footer-branding reveal">
            <div className="footer-logo-img">
              <Image src="/images/logo.webp" alt="Being Scribe Logo" width={67} height={38} className="logo-img" />
            </div>
            <h2 className="footer-headline">
              Your brand already has a story.
              <br />
              Let&rsquo;s make sure people actually see it.
            </h2>
            <p className="footer-subline">
              Because we are thinkers, strategists, and creators; not just people who schedule posts. Let&rsquo;s build something impossible to ignore.
            </p>
            <a href="mailto:hello@beingscribe.com" className="btn btn-pink btn-lg magnetic">
              Book A Call ↗
            </a>
          </div>

          <div className="footer-social-wrap reveal delay-2">
            <h4>Follow Us</h4>
            <div className="social-links footer-socials-grid">
              <a href="#" className="magnetic">Instagram</a>
              <a href="#" className="magnetic">Threads</a>
              <a href="#" className="magnetic">LinkedIn</a>
              <a href="#" className="magnetic">WhatsApp</a>
              <a href="mailto:hello@beingscribe.com" className="magnetic">Email Us</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom reveal">
          <div className="huge-logo">BEINGSCRIBE</div>
          <div className="footer-watermark-sub">Content • Branding • Websites • Strategy</div>
          <div className="copyright">
            <span>© 2026 BEINGSCRIBE. ALL RIGHTS RESERVED.</span>
            <div className="legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
