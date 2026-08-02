import Nav from '@/components/Nav';
import { CinematicHero } from '@/components/ui/cinematic-landing-hero';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Marquee from '@/components/Marquee';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Tips from '@/components/Tips';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Nav />
      <CinematicHero />
      <ValueProp />
      <Services />
      <Results />
      <Marquee />
      <Portfolio />
      <About />
      <Tips />
      <Footer />
      <SiteInteractions />
      <BackToTop />
    </>
  );
}
