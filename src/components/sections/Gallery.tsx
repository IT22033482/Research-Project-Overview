import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/Shared';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryItems } from '../../data/appUiImages';

const getVisibleCount = (width: number) => {
  if (width >= 1280) return 5;
  if (width >= 768) return 3;
  return 2;
};

export const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [stepPx, setStepPx] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const total = galleryItems.length;
  const maxStart = Math.max(0, total - visibleCount);
  const endIndex = Math.min(startIndex + visibleCount, total);

  const updateLayout = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const count = getVisibleCount(window.innerWidth);
    const gap = 16;
    const width = (viewport.clientWidth - gap * (count - 1)) / count;

    setVisibleCount(count);
    setItemWidth(width);
    setStepPx(width + gap);
    setStartIndex((prev) => Math.min(prev, Math.max(0, total - count)));
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [total]);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          setLightboxIndex((i) => (i === null ? 0 : (i + 1) % total));
        }
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
        }
        return;
      }
      if (e.key === 'ArrowRight') {
        setStartIndex((i) => Math.min(maxStart, i + 1));
      }
      if (e.key === 'ArrowLeft') {
        setStartIndex((i) => Math.max(0, i - 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, maxStart, total]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const canPrev = startIndex > 0;
  const canNext = startIndex < maxStart;

  return (
    <section id="gallery" className="section-pad bg-cream/40">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Project Media Gallery"
          subtitle="Browse the complete mobile app UI — onboarding, exploration, Color-to-AR, quizzes, and learning analytics." />

        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={!canPrev}
              aria-label="Scroll gallery left"
              className="shrink-0 w-11 h-11 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-charcoal border border-peach-light/80 transition-colors hover:bg-peach-mid hover:text-white disabled:opacity-35 disabled:pointer-events-none disabled:hover:bg-white disabled:hover:text-charcoal">
              
              <ChevronLeft size={22} />
            </button>

            <div ref={viewportRef} className="flex-1 overflow-hidden min-w-0">
              <motion.div
                className="flex gap-4"
                animate={{ x: -startIndex * stepPx }}
                transition={{ type: 'spring', stiffness: 300, damping: 32 }}>
                
                {galleryItems.map((item, index) =>
                <button
                  key={item.caption}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  style={{ width: itemWidth > 0 ? itemWidth : undefined }}
                  className="shrink-0 flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-peach-mid focus-visible:ring-offset-2 rounded-2xl group">
                  
                  <div className="w-full aspect-[800/1340] rounded-[1.25rem] overflow-hidden bg-charcoal border-[3px] border-charcoal shadow-sm group-hover:shadow-md group-hover:ring-2 group-hover:ring-peach-mid/50 transition-all">
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async" />
                  </div>
                  <p className="mt-2.5 text-[10px] sm:text-xs font-semibold text-charcoal text-center leading-snug px-0.5 min-h-[2.5rem] line-clamp-2">
                    {item.caption}
                  </p>
                </button>
                )}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={next}
              disabled={!canNext}
              aria-label="Scroll gallery right"
              className="shrink-0 w-11 h-11 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md text-charcoal border border-peach-light/80 transition-colors hover:bg-peach-mid hover:text-white disabled:opacity-35 disabled:pointer-events-none disabled:hover:bg-white disabled:hover:text-charcoal">
              
              <ChevronRight size={22} />
            </button>
          </div>

          <p className="text-center text-xs text-charcoal/60 mt-6 font-medium">
            Showing screens {startIndex + 1}–{endIndex} of {total}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/92 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}>
          
          <button
            type="button"
            className="absolute top-5 right-5 text-white hover:text-peach-mid bg-white/10 p-2.5 rounded-full z-10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close full screen">
            
            <X size={22} />
          </button>

          <button
            type="button"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
            }}
            aria-label="Previous screen">
            
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? 0 : (i + 1) % total));
            }}
            aria-label="Next screen">
            
            <ChevronRight size={24} />
          </button>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white rounded-3xl overflow-hidden w-full max-w-[340px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            
            <div className="aspect-[800/1340] bg-charcoal max-h-[78vh]">
              <img
                src={galleryItems[lightboxIndex].img}
                alt={galleryItems[lightboxIndex].caption}
                className="w-full h-full object-contain"
                decoding="async" />
            </div>
            <div className="px-4 py-4 border-t border-cream text-center">
              <p className="text-sm font-bold text-charcoal">
                {galleryItems[lightboxIndex].caption}
              </p>
              <p className="text-xs text-charcoal/55 mt-1">
                {lightboxIndex + 1} / {total}
              </p>
            </div>
          </motion.div>
        </motion.div>
        }
      </AnimatePresence>
    </section>);
};
