import { WHATSAPP_LINK, PORTFOLIO_DRIVE_LINK, EMAIL_LINK, EMAIL_ADDRESS } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer bg-[#0a546c] text-white pt-24 pb-12 relative overflow-hidden" id="contact">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Content */}
          <div className="lg:col-span-7 reveal">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight font-serif text-white">
              Your brand already has a story.
              <br />
              <span className="text-[#fcaea4]">Let&rsquo;s make sure people see it.</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-2xl mb-8">
              Because we are thinkers, strategists, and creators; not just people who schedule posts. Let&rsquo;s build something impossible to ignore.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pink text-base px-8 py-3.5 shadow-xl inline-flex items-center gap-2 font-semibold"
              >
                Book A Call <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-[#05222b] text-base px-8 py-3.5 inline-flex items-center gap-2 font-semibold transition-all"
              >
                View Our Work Portfolio <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="lg:col-span-5 reveal delay-1 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#fcaea4] font-bold mb-6">
                Connect With Us
              </h4>
              
              <ul className="space-y-4 text-base font-normal">
                {/* Instagram */}
                <li>
                  <a
                    href="https://instagram.com/beingscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-white/90 hover:text-[#fcaea4] hover:translate-x-1 transition-all group py-2 px-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#fcaea4] group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-base">@beingscribe</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-white/90 hover:text-[#fcaea4] hover:translate-x-1 transition-all group py-2 px-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#fcaea4] group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-base">+91 85115 26126</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={EMAIL_LINK}
                    className="flex items-center gap-3.5 text-white/90 hover:text-[#fcaea4] hover:translate-x-1 transition-all group py-2 px-3 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#fcaea4] group-hover:bg-[#fcaea4] group-hover:text-[#05222b] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-base">{EMAIL_ADDRESS}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-16 border-t border-white/10 text-center reveal">
          <div className="text-6xl md:text-9xl font-black tracking-tighter text-white/[0.04] select-none font-serif mb-4 uppercase">
            BEINGSCRIBE
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#fcaea4]/90 font-medium mb-8">
            Content • Branding • Websites
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
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
