
import Hero from './components/Hero';
import Playground from './components/Playground';
import AboutMission from './components/AboutMission';
import Features from './components/Features';
import Pricing from './components/Pricing';
import BottomCTA from './components/BottomCTA';

export default function LandingPage() {
  return (
    <main className="bg-background text-on-surface min-h-screen flex flex-col items-center w-full">
      <Hero />
      <Playground />
      <AboutMission />
      <Features />
      <Pricing />
      <BottomCTA />
    </main>
  );
}