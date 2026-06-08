import React from 'react';

const quickLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Prototype', href: '#prototype' },
  { label: 'Research', href: '#research' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Contact', href: '#contact' }
];

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/80 py-14 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 leading-snug">
            Interactive AR Exploration of Earth’s Geological History
          </h3>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 mt-6">
            {quickLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-peach-mid transition-colors">
              
              {link.label}
            </a>
            )}
          </nav>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5 text-sm mb-8">
            <span className="font-medium text-peach-mid">
              Pradeepa W D R · IT22033482
            </span>
            <span className="hidden md:inline text-cream/30">|</span>
            <span className="text-mint-mid/90">
              Sri Lanka Institute of Information Technology
            </span>
          </div>

          <p className="text-xs text-cream/40">
            © 2026 Research Showcase. All visuals and documents are for academic presentation.
          </p>
        </div>
      </div>
    </footer>);
};
