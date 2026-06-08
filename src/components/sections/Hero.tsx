import React from 'react';
import { motion } from 'framer-motion';
import { Button, Badge, BlobBackground, PhoneMockup } from '../ui/Shared';
import { PlayCircle, Download } from 'lucide-react';
import { appUiImages } from '../../data/appUiImages';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-36 md:pb-24 overflow-x-hidden bg-cream">
      
      <BlobBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,141,0,0.06)_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(190,173,250,0.08)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl">
            
            <p className="text-sm font-semibold uppercase tracking-widest text-peach-deep mb-4">
              Museum AR Learning Research
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-bold text-charcoal leading-[1.12] mb-6">
              Interactive AR Exploration of{' '}
              <span className="text-peach-mid relative inline-block">
                Earth’s Geological History
                <svg
                  className="absolute w-full h-2.5 -bottom-0.5 left-0 text-butter-mid opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">
                  
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent" />
                  
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-charcoal/85 mb-5 leading-snug">
              Scan the Past. Color the Story. Learn Earth’s History in AR.
            </p>

            <p className="text-base text-charcoal/70 mb-8 leading-relaxed max-w-xl">
              An interactive mobile Augmented Reality learning system designed
              for the Colombo National Museum’s geology gallery. Visitors scan
              QR codes and image markers to explore geological eras through 3D
              visualizations, AI narration, Color-to-AR, and quiz-based learning.
            </p>

            <div className="flex flex-nowrap items-stretch gap-2.5 mb-10 overflow-x-auto py-2 max-w-full">
              <Badge className="shrink-0 whitespace-nowrap text-xs px-3.5 py-2.5 rounded-xl bg-peach-light text-peach-deep font-semibold shadow-sm hover:shadow-md transition-shadow">Mobile AR</Badge>
              <Badge className="shrink-0 whitespace-nowrap text-xs px-3.5 py-2.5 rounded-xl bg-mint-light text-[#2D7A52] font-semibold shadow-sm hover:shadow-md transition-shadow">QR-Triggered AR</Badge>
              <Badge className="shrink-0 whitespace-nowrap text-xs px-3.5 py-2.5 rounded-xl bg-lavender-light text-[#5E45A8] font-semibold shadow-sm hover:shadow-md transition-shadow">Color-to-AR</Badge>
              <Badge className="shrink-0 whitespace-nowrap text-xs px-3.5 py-2.5 rounded-xl bg-sky-light text-[#1E6B8C] font-semibold shadow-sm hover:shadow-md transition-shadow">AI Narration</Badge>
              <Badge className="shrink-0 whitespace-nowrap text-xs px-3.5 py-2.5 rounded-xl bg-blush-light text-[#C04E4E] font-semibold shadow-sm hover:shadow-md transition-shadow">Era Learning</Badge>
            </div>

            <div className="flex flex-nowrap items-center gap-2 md:gap-3 overflow-x-auto py-2 pb-3 max-w-full">
              <Button href="#overview" variant="primary" className="shrink-0 whitespace-nowrap text-sm px-4 py-2.5 md:px-6 md:py-3">Explore the Project</Button>
              <Button href="#prototype" variant="secondary" className="shrink-0 whitespace-nowrap text-sm px-4 py-2.5 md:px-6 md:py-3 bg-white border border-peach-light/80">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                View Prototype
              </Button>
              <Button href="#downloads" variant="outline" className="shrink-0 whitespace-nowrap text-sm px-4 py-2.5 md:px-6 md:py-3 border-lavender-mid text-lavender-mid hover:bg-lavender-light">
                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Downloads
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative flex justify-center items-center py-6">
            
            <div className="absolute w-[94%] h-[104%] top-1/2 -translate-y-1/2 bg-mint-mid/90 rounded-[3.25rem] -rotate-3 -z-20 shadow-[0_6px_16px_-4px_rgba(79,184,138,0.15)]" />
            <div className="absolute w-[94%] h-[104%] top-1/2 -translate-y-1/2 bg-[#FF6A1F]/65 rounded-[3.25rem] rotate-6 -z-10 shadow-[0_6px_16px_-4px_rgba(255,106,31,0.07)]" />

            <PhoneMockup className="relative z-10 shadow-[0_25px_60px_-15px_rgba(58,58,74,0.35)]">
              <img
                src={appUiImages.startJourney}
                alt="App welcome screen with Start Your Journey"
                className="absolute inset-0 w-full h-full object-contain" />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>);
};
