import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navGroups = [
  {
    label: 'Project',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Overview', href: '#overview' },
      { name: 'Problem', href: '#problem' },
      { name: 'Solution', href: '#solution' },
      { name: 'Features', href: '#features' }
    ]
  },
  {
    label: 'Experience',
    links: [
      { name: 'User Journey', href: '#timeline' },
      { name: 'Color-to-AR', href: '#color-to-ar' },
      { name: 'Visual Showcase', href: '#gallery' },
      { name: 'Prototype Demo', href: '#prototype' }
    ]
  },
  {
    label: 'Research',
    links: [
      { name: 'Research & Validation', href: '#research' },
      { name: 'Commercialization', href: '#commercialization' },
      { name: 'Future Roadmap', href: '#roadmap' },
      { name: 'Downloads', href: '#downloads' }
    ]
  },
  {
    label: 'Team',
    links: [
      { name: 'Profiles', href: '#profiles' },
      { name: 'Contact', href: '#contact' }
    ]
  }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('keydown', handleEsc);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-peach-mid origin-left z-50"
        style={{ scaleX }} />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-peach-light/40 py-4' : 'bg-transparent py-8'}`}>
        
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#home"
            className="relative inline-block px-4 py-2 font-heading font-bold text-charcoal hover:text-peach-deep transition-colors max-w-[min(100%,280px)] sm:max-w-none">
            
            <div
              aria-hidden
              className="absolute inset-0 -inset-x-2 -inset-y-1 bg-lavender-light/90 rounded-xl -rotate-3 -z-10 shadow-[0_4px_14px_-4px_rgba(190,173,250,0.2)]" />

            <span className="relative z-10 block text-sm sm:text-base leading-tight">
              AR Geological History
            </span>
            <span className="relative z-10 block text-[11px] sm:text-xs font-medium text-charcoal/50 mt-0.5">
              Research Project Showcase
            </span>
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="p-3 bg-white rounded-full shadow-card text-peach-mid hover:bg-peach-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-peach-mid"
            aria-label="Open menu">
            
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen &&
        <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50" />
            

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream shadow-2xl z-50 overflow-y-auto"
              role="dialog"
              aria-modal="true">
              
              <div className="p-6 flex justify-between items-center border-b border-peach-light/50 sticky top-0 bg-cream/95 backdrop-blur-sm z-10">
                <div>
                  <span className="font-heading font-bold text-lg text-peach-deep block">
                    Navigate
                  </span>
                  <span className="text-xs text-charcoal/50">
                    Jump to any section
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-charcoal/50 hover:text-peach-deep hover:bg-peach-light rounded-full transition-colors"
                  aria-label="Close menu">
                  
                  <X size={24} />
                </button>
              </div>

              <nav className="p-6 space-y-8">
                {navGroups.map((group) =>
                <div key={group.label}>
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal/40 mb-3 px-2">
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {group.links.map((link, i) =>
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="block text-base font-medium text-charcoal hover:text-peach-deep py-2.5 px-4 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                      
                          {link.name}
                        </motion.a>
                    )}
                    </div>
                  </div>
                )}
              </nav>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

};

export const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setIsVisible(latest > 0.15);
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {isVisible &&
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 p-3.5 bg-white text-peach-mid rounded-full shadow-float border border-peach-light hover:bg-peach-mid hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-peach-mid"
        aria-label="Back to top">
        
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      }
    </AnimatePresence>);

};
