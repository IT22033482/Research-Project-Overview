import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppLoader } from './hooks/useAppLoader';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Navigation, BackToTop } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Features } from './components/sections/Features';
import { Timeline } from './components/sections/Timeline';
import { ColorToAR } from './components/sections/ColorToAR';
import { Gallery } from './components/sections/Gallery';
import { Prototype } from './components/sections/Prototype';
import { Research } from './components/sections/Research';
// Additional sections imported
import { Commercialization } from './components/sections/Commercialization';
import { Roadmap } from './components/sections/Roadmap';
import { Downloads } from './components/sections/Downloads';
import { Profiles } from './components/sections/Profiles';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
export function App() {
  const { isLoading, progress } = useAppLoader();

  return (
    <div className="font-sans text-charcoal bg-cream min-h-screen">
      <AnimatePresence>{isLoading && <LoadingScreen progress={progress} />}</AnimatePresence>
      <Navigation />

      <main>
        <Hero />
        <Overview />
        <Problem />
        <Solution />
        <Features />
        <Timeline />
        <ColorToAR />
        <Gallery />
        <Prototype />
        <Research />
        <Commercialization />
        <Roadmap />
        <Downloads />
        <Profiles />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>);

}