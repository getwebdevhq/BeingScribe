import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ValueProp from '@/components/ValueProp';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Tips from '@/components/Tips';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ValueProp />
      <Services />
      <Results />
      <Portfolio />
      <About />
      <Tips />
      <Footer />
      <SiteInteractions />
    </>
  );
}
