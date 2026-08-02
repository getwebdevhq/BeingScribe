import { MarqueeAnimation } from '@/components/ui/marquee-effect';

export default function Marquee() {
  return (
    <section className="overflow-hidden" aria-label="Brand statement">
      <MarqueeAnimation
        direction="left"
        baseVelocity={-2}
        className="bg-[#05222b] text-white py-6 md:py-8"
      >
        Impossible to Ignore —
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-2}
        className="bg-[#fcaea4] text-[#05222b] py-6 md:py-8"
      >
        Content • Branding • Websites • Strategy —
      </MarqueeAnimation>
    </section>
  );
}
