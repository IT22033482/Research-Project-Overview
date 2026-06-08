import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader, Button, PhoneMockup } from '../ui/Shared';
import {
  PlayCircle,
  Image as ImageIcon,
  FileCode2,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { prototypeScreens } from '../../data/appUiImages';

const screens = [...prototypeScreens];

export const Prototype = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % screens.length);
  const prev = () =>
  setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  return (
    <section id="prototype" className="section-pad bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader title="What Has Been Built?" />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-charcoal/70 leading-relaxed font-medium">
            The prototype demonstrates a guided AR learning flow for geological
            history. It includes era-based storytelling, interactive 3D content,
            digital coloring, AR viewing, narration support, and quiz-based
            evaluation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto mb-16">
          {/* Phone Mockup Carousel */}
          <div className="relative shrink-0">
            <PhoneMockup>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={screens[currentIndex].img}
                  alt={screens[currentIndex].name}
                  initial={{
                    opacity: 0,
                    scale: 1.02
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98
                  }}
                  transition={{
                    duration: 0.35
                  }}
                  className="absolute inset-0 w-full h-full object-contain" />
                
              </AnimatePresence>
            </PhoneMockup>

            <p className="mt-4 text-center text-sm font-semibold text-charcoal">
              Screen {currentIndex + 1}: {screens[currentIndex].name}
            </p>

            <div className="mt-4 flex justify-between px-2">
              <button
                onClick={prev}
                aria-label="Previous screen"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-charcoal hover:bg-peach-mid hover:text-white transition-colors border border-peach-light">
                
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next screen"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-charcoal hover:bg-peach-mid hover:text-white transition-colors border border-peach-light">
                
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Screen List & Actions */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-white rounded-[2rem] p-8 shadow-card mb-8 border border-white">
              <h3 className="font-heading font-bold text-xl mb-6 text-charcoal">
                Prototype Screens
              </h3>
              <ul className="space-y-2">
                {screens.map((screen, idx) =>
                <li
                  key={idx}
                  className={`flex items-center text-sm p-3 rounded-xl transition-all cursor-pointer ${idx === currentIndex ? 'bg-peach-light/50 text-peach-deep font-bold shadow-sm' : 'text-charcoal/70 hover:bg-cream'}`}
                  onClick={() => setCurrentIndex(idx)}>
                  
                    <div
                    className={`w-2.5 h-2.5 rounded-full mr-4 shrink-0 transition-colors ${idx === currentIndex ? 'bg-peach-mid' : 'bg-charcoal/20'}`}>
                  </div>
                    {screen.name}
                  </li>
                )}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="primary" className="w-full shadow-md">
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Demo Video
              </Button>
              <Button
                variant="secondary"
                className="w-full bg-white border border-peach-light">
                
                <ImageIcon className="w-5 h-5 mr-2" /> View Screenshots
              </Button>
              <Button
                variant="outline"
                className="w-full border-sky-mid text-sky-mid hover:bg-sky-light">
                
                <FileCode2 className="w-5 h-5 mr-2" /> View Tech Summary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};