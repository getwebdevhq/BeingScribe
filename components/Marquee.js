import { MarqueeAnimation } from '@/components/ui/marquee-effect';

export default function Marquee() {
  return (
    <section className="overflow-hidden" aria-label="Brand statement">
      <MarqueeAnimation
        direction="right"
        baseVelocity={-2}
        className="bg-[#fdeeec] text-[#05222b] py-6 md:py-8"
      >
        Content • Branding • Websites —
      </MarqueeAnimation>
    </section>
  );
}
