import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer bg-[#05222b] text-white pt-28 pb-12 relative overflow-hidden" id="contact">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0a546c]/20 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Branding */}
          <div className="lg:col-span-8 reveal">
            <div className="mb-8">
              <Image src="/images/logo.webp" alt="Being Scribe Logo" width={67} height={38} className="brightness-0 invert opacity-90" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight font-serif text-white">
              Your brand already has a story.
              <br />
              <span className="text-[#fcaea4]">Let&rsquo;s make sure people see it.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10">
              Because we are thinkers, strategists, and creators; not just people who schedule posts. Let&rsquo;s build something impossible to ignore.
            </p>
            <a href="mailto:hello@beingscribe.com" className="btn btn-pink text-base px-10 py-4 shadow-xl">
              Book A Call ↗
            </a>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4 reveal delay-1 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#fcaea4] font-bold mb-6">
                Connect With Us
              </h4>
              <ul className="space-y-4 text-base font-light">
                {[
                  { name: 'Instagram', href: '#' },
                  { name: 'Threads', href: '#' },
                  { name: 'LinkedIn', href: '#' },
                  { name: 'WhatsApp', href: '#' },
                  { name: 'Email Us', href: 'mailto:hello@beingscribe.com' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[#fcaea4] hover:translate-x-1 transition-all inline-block py-1"
                    >
                      {link.name} <span className="text-xs opacity-50">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-16 border-t border-white/10 text-center reveal">
          <div className="text-6xl md:text-9xl font-black tracking-tighter text-white/[0.03] select-none font-serif mb-4 uppercase">
            BEINGSCRIBE
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#fcaea4]/80 font-medium mb-8">
            Content • Branding • Websites • Strategy
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
            <span>© 2026 BEINGSCRIBE. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#fcaea4] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#fcaea4] transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
