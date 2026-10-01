
import Hero from '../components/landing/Hero';
import Playground from '../components/landing/Playground';
import AboutMission from '../components/landing/AboutMission';
import Features from '../components/landing/Features';
import Pricing from '../components/landing/Pricing';
import BottomCTA from '../components/landing/BottomCTA';

export default function LandingPage() {
  return (
    <main className="text-on-surface min-h-screen flex flex-col items-center w-full">
      <Hero />
      <Playground />
      <AboutMission />
      <Features />
      <Pricing />
      <BottomCTA />
    </main>
  );
}